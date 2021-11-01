export default {
    // I depend on everything that has an optionName
    // I am called with a 2 item array. 1st item is the name, second is the node
    dependsOn(twoItems) { return !!(twoItems[1].outputVal && twoItems[1].outputVal.optionName) },
    outputVal: [],

    // My output is an array of strings of selected option values
    onUpstreamChange(dependsOn) {
        this.outputVal = dependsOn.map(n => n.optionValues[n.selectedIndex].valueName)
    }
}