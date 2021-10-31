export default {
    outputVal: {
        displayHint: "standardOptionWithIcons",
        optionName: "sensOuverture",
        optionPrice:0,
        optionValues: [
            {
                valueName: "sensADéfinir",
                imageUrl:"/static/images/sensADéfinir.png"
            },
            {
                valueName: "droiteTirant",
                imageUrl:"/static/images/droiteTirant.png"
            },
            {
                valueName: "gaucheTirant",
                imageUrl:"/static/images/gaucheTirant.png"
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