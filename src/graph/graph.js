/* eslint-disable no-debugger */
import { reactive, } from 'vue'
import  _ from 'lodash'

export default {
    output: reactive({}),
    nodeNamesInOrderOfAddition: [],
    // this array will be keyed on nodeName
    nodes: {},
    // we want the UI to attack directly the node in the above array, so we'll store the meta separately.
    nodeDependencies: [],

    addNode(newNode) {
        var me = this;
        const myIndex = this.nodeNamesInOrderOfAddition.length;
        // check that all dependsOn are already added
        if (newNode.dependsOn && typeof (newNode.dependsOn) !== 'function')
            var dependenciesNotYetPresent = newNode.dependsOn.filter(val => !this.nodeNamesInOrderOfAddition.includes(val))
            if(!newNode.name)
            throw new Error(`We can\'t add a node without a name. (hint: there are ${myIndex + 1} nodes already added))`)
        if (dependenciesNotYetPresent && dependenciesNotYetPresent.length)
            throw new Error(`We can't add the node ${newNode.name} because the following dependencies aren't present: ${dependenciesNotYetPresent.join()}`);


        // store everything
        this.nodeNamesInOrderOfAddition.push(newNode.name);
        Object.defineProperty(this.nodes, newNode.name, { value: newNode, configurable: true, enumerable: true, writable: true });

        // publish the property on the output object

        //this.output[name] = _.cloneDeep(newNode.outputVal);

        this.output[newNode.name] = JSON.parse(JSON.stringify(newNode.outputVal));
        // for each node, we'll store in the graph the list of dependency names
        if (newNode.dependsOn) {
            if (typeof (newNode.dependsOn) !== 'function') {
                // standard node, depends on a list of named nodes, already present.
                this.nodeDependencies[newNode.name] = newNode.dependsOn;
            } else {
                // reporting node. dependsOn is a lambda to select nodes already present
                // todo: shouldn't this be based on output, not the real nodes
                const nodesArray = Object.entries(this.nodes);
                this.nodeDependencies[newNode.name] = nodesArray.filter(newNode.dependsOn).map(aNode => aNode[0]);
            }
        }
        newNode.emitChanged = this.onNodeChanged;

        // todo: add ascending and descending props to the output object
    },
    // this is no longer a listener. How is it going to get called.
    onNodeChanged: function (node) {
        if(!node) throw new Error('emitChanged requires "this" argument');
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
                // set the dependencies directly in the node, this saves the node from having to do it.
                this.nodes[currNode].d = dependencies;
                this.nodes[currNode].onUpstreamChange();

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