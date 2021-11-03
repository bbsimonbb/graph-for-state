export default {
    // I depend on everything that has an optionName
    // I am called with a 2 item array. 1st item is the name, second is the node
    dependsOn(twoItems) { return !!(twoItems[1].outputVal && twoItems[1].outputVal.optionName) },
    outputVal: {liste:[]},

    // My output is an array of strings of selected option values
    onUpstreamChange(dependsOn) {
        console.log("listeOptionsChoisis onUpstreamChange()")
        // to do: don't assign to ouput value !!!!!
        
        const optionsArray = Object.entries(dependsOn);
        this.outputVal.liste = optionsArray.map(n => n[1].optionValues[n.selectedIndex].valueName)
    }
}