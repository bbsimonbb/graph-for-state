/* eslint-disable no-debugger */
import { Observable } from '../../node_modules/object-observer/dist/object-observer.min.js';
import { reactive, } from 'vue'

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
        // check that all dependsOn are already added
        if (newNode.dependsOn && typeof (newNode.dependsOn) !== 'function')
            var dependenciesNotYetPresent = newNode.dependsOn.filter(val => !this.nodeNamesInOrderOfAddition.includes(val))
        if (dependenciesNotYetPresent && dependenciesNotYetPresent.length)
            throw new Error(`We can't add this node because the following dependencies aren't present: ${dependenciesNotYetPresent.join()}`);

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
                        me.fullTraversal();
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

        // used to need Vue.set() here ????
        this.output[name] = newNode.outputVal;

        // for each node, we'll make a little object containing (the output of) that newNode's dependencies

        if (newNode.dependsOn) {
            var dependsOnObject = {};
            if (typeof (newNode.dependsOn) !== 'function') {
                // standard node, depends on a list of named nodes, already present.
                newNode.dependsOn.forEach(dependency => dependsOnObject[dependency] = this.output[dependency]);
                this.nodeDependencies[name] = dependsOnObject;
            } else {
                // reporting node. dependsOn is a lambda to select nodes already present
                const nodesArray = Object.entries(this.nodes);
                this.nodeDependencies[name] = nodesArray.filter(newNode.dependsOn).map(aNode=>this.output[aNode[0]]);
            }
        }


        // todo: add ascending and descending props to the output object
    },
    onOutputValChange: function (nodeName, node) {
        // if the change is the result of a traversal, the traversal method will do the copying
        if (!node.isBeingTraversed) {
            // copy new val to output
            //Object.assign(this.output[nodeName], node.outputVal);
            this.output[nodeName] = { ...node.outputVal };

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
                this.nodes[currNode].onUpstreamChange(this.nodeDependencies[currNode]);
                this.nodes[currNode].isBeingTraversed = false;
            }
            // copy to output
            if (typeof this.nodes[currNode].outputVal === "object")
                this.output[currNode] = Object.assign({}, this.nodes[currNode].outputVal)
            else
                this.output[currNode] = this.nodes[currNode].outputVal
        }
    }
}