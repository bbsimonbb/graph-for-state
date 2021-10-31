export default {
    outputVal: {
        displayHint: "standardOptionWithIcons",
        optionName: "oscilloBattant",
        optionPrice:0,
        optionValues: [
            {
                valueName: "oscilloBattant1Vantail",
                imageUrl:"/static/images/oscilloBattant1Vantail.png"
            },
            {
                valueName: "aucunOscilloBattant",
                imageUrl:"/static/images/aucune.png"
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