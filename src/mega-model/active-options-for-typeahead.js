export default {
    name:'activeOptions4Typeahead',    
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

    onUpstreamChange() {
        const optionsArray = Object.entries(this.d);

        var liste = [];
        optionsArray.forEach(([n,o])=>{
            try {
                liste.push(o.optionName)
            }
            catch (ex) {
                console.log("ex adding option\n" + ex)
            }
        })
        this.outputVal.liste = liste;
        return true;
    }
}