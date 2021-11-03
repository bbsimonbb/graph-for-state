export default {
    // I depend on everything that has an optionName
    // I am called with a 2 item array. 1st item is the name, second is the node
    dependsOn(twoItems) { return !!(twoItems[1].outputVal && twoItems[1].outputVal.optionName) },
    outputVal: { liste: [] },

    // My output is an array of strings of selected option values
    onUpstreamChange(d) {
        console.log("listeOptionsChoisis onUpstreamChange()")
        // to do: don't assign to ouput value !!!!!

        const optionsArray = Object.entries(d);
        //this.outputVal.liste = optionsArray.map(n => n[1].optionValues[n.selectedIndex].valueName)        
        //this.outputVal = dependsOn.map(n => n.optionValues[n.selectedIndex].valueName)
        this.outputVal.liste = optionsArray.reduce(function (result, el) {
            try {
                result.push(el[1].optionValues[el[1].selectedIndex].valueName)
            }
            catch (ex) {
                console.log("ex recovering selected option\n" + ex)
            }
            return result;
        }, []);
    }
}