export default {
    outputVal: {
        displayHint: "standardOptionWithIcons",
        optionName: "appuiEtSeuil",
        optionPrice:0,
        optionValues: [
            {
                valueName: "appuiStandard",
                imageUrl:"/static/images/appuiStandard.png"
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