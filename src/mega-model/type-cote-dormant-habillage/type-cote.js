export default {
    outputVal: {
        displayHint: "standardOptionWithIcons",
        optionName: "typeCote",
        optionPrice:0,
        optionValues: [
            {
                valueName: "dimensionsTableau",
                imageUrl:"/static/images/dimensionsTableau.png"
            },
            {
                valueName: "dimensionsFabricant",
                imageUrl:"/static/images/dimensionsFabricant.png"
            },
        ],
        defaultIndex:0,
        selectedIndex:0        
    },
    onUpstreamChange(){},
    selectItem(index){
        this.outputVal.selectedIndex = index;
    }
}