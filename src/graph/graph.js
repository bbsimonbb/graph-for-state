/* eslint-disable no-debugger */
import { Observable } from '../../node_modules/object-observer/dist/object-observer.min.js';
import { reactive, } from 'vue'
import _ from 'lodash'

export default {
    output: reactive({}),
    nodeNamesInOrderOfAddition: [],
    // this array will be keyed on nodeName
    nodes: {},
    // we want the UI to attack directly the node in the above array, so we'll store the meta separately.
    nodeDependencies: [],

    addNode(name, newNode) {
        newNode.$name = name;
        var me = this;
        const myIndex = this.nodeNamesInOrderOfAddition.length;
        // check that all dependsOn are already added
        if (newNode.dependsOn && typeof (newNode.dependsOn) !== 'function')
            var dependenciesNotYetPresent = newNode.dependsOn.filter(val => !this.nodeNamesInOrderOfAddition.includes(val))
        if (dependenciesNotYetPresent && dependenciesNotYetPresent.length)
            throw new Error(`We can't add the node ${name} because the following dependencies aren't present: ${dependenciesNotYetPresent.join()}`);

        if (newNode.outputVal && (typeof (newNode.outputVal) === 'string' || typeof (newNode.outputVal) === 'number')) {
            //watch the outputVal property of every node.
            var currVal = newNode.outputVal;
            // now we create a variable that will store the props value
            var bValue;
            Object.defineProperty(newNode, "outputVal",
                {
                    get() { return bValue },
                    set(newValue) {
                        bValue = newValue;
                        // todo: we only need to recalculate downstream of the changed node.
                        me.fullTraversal(myIndex);
                    },
                    enumerable: true,
                    configurable: true
                }
            )
            newNode.outputVal = currVal;
        }

        if (newNode.outputVal && typeof (newNode.outputVal) === 'object') {
            const observableOutput = Observable.from(newNode.outputVal);
            observableOutput.observe(changes => {
                changes.forEach(change => {
                    console.log(change);
                    this.onOutputValChange(name, newNode);

                });
            });
            newNode.outputVal = observableOutput;

        }


        // store everything
        this.nodeNamesInOrderOfAddition.push(name);
        Object.defineProperty(this.nodes, name, { value: newNode, configurable: true, enumerable: true, writable: true });

        // publish the property on the output object
        // keep going here. My string is popping out as a byte array
        //Object.defineProperty(this.output, name, {value: newNode.outputVal, configurable:true, enumerable:true, writable:true })
        //this.output[name] = newNode.outputVal;

        //this.output[name] = _.cloneDeep(newNode.outputVal);
        this.output[name] = JSON.parse(JSON.stringify(newNode.outputVal));

        // for each node, we'll store in the graph the list of dependencies
        if (newNode.dependsOn) {
            if (typeof (newNode.dependsOn) !== 'function') {
                // standard node, depends on a list of named nodes, already present.
                this.nodeDependencies[name] = newNode.dependsOn;
            } else {
                // reporting node. dependsOn is a lambda to select nodes already present
                // todo: shouldn't this be based on output, not the real nodes
                const nodesArray = Object.entries(this.nodes);
                this.nodeDependencies[name] = nodesArray.filter(newNode.dependsOn).map(aNode => aNode[0]);
            }
        }


        // todo: add ascending and descending props to the output object
    },
    onOutputValChange: function (nodeName, node) {
        // if the change is the result of a traversal, the traversal method will do the copying
        if (!node.isBeingTraversed) {
            // copy new val to output
            //Object.assign(this.output[nodeName], node.outputVal);
            //this.output[nodeName] = _.cloneDeep(node.outputVal);
            this.output[nodeName] = JSON.parse(JSON.stringify(node.outputVal));

            // start traversing from node, if we're not already traversing
            this.fullTraversal(this.nodeNamesInOrderOfAddition.findIndex(el => el === nodeName))
        }
    },

    // example of a property that will descend the graph


    // ascendingProps: [{
    //     // the property to read on the node and transfer to the output
    //     name: "aggregatePrice",
    //     // the function that will accumulate the result of the property, when executed on each of the children
    //     reducer: (eachChild) => aggregatePrice += ownPrice || 0 + eachChild.aggregatePrice || 0
    // }],
    // descendingProps: [{
    //     name: "disabled",
    //     reducer: (eachParent) => aggregateDisabled = aggregateDisabled && eachParent.aggregateDisabled && ownDisabled
    // }],

    fullTraversal: function (startingFrom) {
        for (var i = startingFrom || 0; i < this.nodeNamesInOrderOfAddition.length; i++) {
            let currNode = this.nodeNamesInOrderOfAddition[i];
            // if the function is present, call it, passing an object with the values of all dependencies
            if (this.nodes[currNode].onUpstreamChange) {
                this.nodes[currNode].isBeingTraversed = true;
                var dependencies = null;
                if (this.nodeDependencies[currNode]) {
                    dependencies = {};
                    for (var j = 0; j < this.nodeDependencies[currNode].length; j++) {
                        Object.defineProperty(
                            dependencies,
                            this.nodeDependencies[currNode][j],
                            { 
                                value: JSON.parse(JSON.stringify(this.output[this.nodeDependencies[currNode][j]])), 
                                configurable: false,
                                enumerable:true,
                                writable: false 
                            }
                        );
                        // In listeOptionsChoisis, I couldn't do Object.entries on this object, so try going back to an array.
                        //dependencies.push(JSON.parse(JSON.stringify(this.output[this.nodeDependencies[currNode][j]])))
                    }
                    //this.nodes[currNode].nodeDependencies.forEach(d => Object.assign(dependencies, d, JSON.parse(JSON.stringify(this.output[d]))));//    [currNode].map(d=>JSON.parse(JSON.stringify(this.output[d])));
                }
                this.nodes[currNode].onUpstreamChange(dependencies);

                // copy to output
                if (typeof this.nodes[currNode].outputVal === "object")
                    this.output[currNode] = Object.assign({}, this.nodes[currNode].outputVal)
                else
                    this.output[currNode] = this.nodes[currNode].outputVal
                this.nodes[currNode].isBeingTraversed = false;
            }
            else if(!startingFrom){
                // full full traversal. Copy everything to output
                if (typeof this.nodes[currNode].outputVal === "object")
                    this.output[currNode] = Object.assign({}, this.nodes[currNode].outputVal)
                else
                    this.output[currNode] = this.nodes[currNode].outputVal
            }
        }
    }
}