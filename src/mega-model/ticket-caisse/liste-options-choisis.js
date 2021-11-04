export default {
    // I depend on everything that has an optionName
    // I am called with a 2 item array. 1st item is the name, second is the node
    dependsOn(twoItems) { return !!(twoItems[1].outputVal && twoItems[1].outputVal.optionName) },
    outputVal: { 
        liste: [],
        totalPrice: 0 
    },

    // My output is an array of strings of selected option values
    onUpstreamChange(d) {
        const optionsArray = Object.entries(d);

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
    }
}