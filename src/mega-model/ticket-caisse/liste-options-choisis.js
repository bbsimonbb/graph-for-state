export default {
    name:'listeOptionsChoisis',    
    store:{},
    d:{},
    /* --------------- Reporting Node -----------------------
    dependsOn is a function that will examine each node already added and return true if the node is a dependency.
    Then, any change in a dependency will trigger onUpstreamChange as usual.
    Here, everything that has an optionName is a dependency
    Todo: this would be a good place to put the first typescript
    */
    dependsOn: ([nodeName, node]) => !!(node.outputVal && node.outputVal.optionName),
    outputVal: { 
        liste: [],
        totalPrice: 0 
    },

    // My output is an array of strings of selected option values
    onUpstreamChange() {
        const optionsArray = Object.entries(this.d);

        var liste = [], totalPrice = 0;
        optionsArray.forEach(([n,o])=>{
            try {
                liste.push(o.optionValues[o.selectedIndex].valueName)
            }
            catch (ex) {
                console.log("ex recovering selected option\n" + ex)
            }
            totalPrice += o.optionPrice;
        })
        this.outputVal.liste = liste;
        this.outputVal.totalPrice = totalPrice;
        return true;
    }
}