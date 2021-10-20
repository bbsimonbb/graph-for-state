import { Observable } from '../../node_modules/object-observer/dist/object-observer.min.js';

export default {
    install(app, options) {
        app.config.globalProperties.$bib = this;
        // there are other possibilities. Here we provide the bib and it's output separatele, 
        // hoping it's very clear when you should use one and when the other !
        // Only the output is reactive. That's the whole idea.
        // https://blog.logrocket.com/how-to-make-provide-inject-reactive/
        //vue.observable(this.output);
        app.provide('bibState', this.output);
        app.provide('bib', this);
    },
    me: this,
    output: {},
    nodeNamesInOrderOfAddition: [],
    // this array will be keyed on nodeName
    nodes: {},
    // we want the UI to attack directly the node in the above array, so we'll store the meta separately.
    nodeDependencies: [],

    addNode: function (name, node) {
        var me = this;
        // check that all dependsOn are already added
        if (node.dependsOn)
            var dependenciesNotYetPresent = node.dependsOn.filter(val => !this.nodeNamesInOrderOfAddition.includes(val))
        if (dependenciesNotYetPresent && dependenciesNotYetPresent.length)
            throw new Error(`We can't add this node because the following dependencies aren't present: ${dependenciesNotYetPresent.join()}`);

        if (node.ouputVal && (typeof (node.ouputVal) === 'string' || typeof (node.ouputVal) === 'number')) {
            //watch the outputVal property of every node.
            var currVal = node.outputVal;
            // now we create a variable that will store the props value
            var bValue;
            Object.defineProperty(node, "outputVal",
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
            node.outputVal = currVal;
        }

        if (node.outputVal && typeof (node.outputVal) === 'object') {
            const observableOutput = Observable.from(node.outputVal);
            observableOutput.observe(changes => {
                changes.forEach(change => {
                    console.log(change);
                });
            });
            node.outputVal = observableOutput;

        }


        // store everything
        this.nodeNamesInOrderOfAddition.push(name);
        Object.defineProperty(this.nodes, name, { value: node, configurable: true, enumerable: true, writable: true });

        // publish the property on the output object
        // keep going here. My string is popping out as a byte array
        //Object.defineProperty(this.output, name, {value: node.ouputVal, configurable:true, enumerable:true, writable:true })
        this.output[name] = node.outputVal;

        // for each node, we'll make a little object that proxies (the output of) that node's dependencies

        if (node.dependsOn) {
            var dependsOnObject = {};
            node.dependsOn.forEach(dependency => dependsOnObject[dependency] = this.output[dependency]);
            Object.defineProperty(this.nodeDependencies, name, { value: dependsOnObject })
        }


        // todo: add ascending and descending props to the output object
    },

    onOutputValChange: function (nodeName, node) {
        // if the change is the result of a traversal, the traversal method will do the copying
        if (!node.isBeingTraversed) {
            // copy new val to ouput
            Object.assign(this.output[nodeName], node.outputVal);

            // start traversing from node, if we're not already traversing
            this.fullTraversal(this.nodeNamesInOrderOfAddition.findIndex(el => el === nodeName))
        }


    },

    // example of a property that will descend the graph


    ascendingProps: [{
        // the property to read on the node and transfer to the output
        name: "aggregatePrice",
        // the function that will accumulate the result of the property, when executed on each of the children
        reducer: (eachChild) => aggregatePrice += ownPrice || 0 + eachChild.aggregatePrice || 0
    }],
    descendingProps: [{
        name: "disabled",
        reducer: (eachParent) => aggregateDisabled = aggregateDisabled && eachParent.aggregateDisabled && ownDisabled
    }],

    fullTraversal: function (startingFrom) {
        for (var i = startingFrom; i < this.nodeNamesInOrderOfAddition.length; i++) {
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