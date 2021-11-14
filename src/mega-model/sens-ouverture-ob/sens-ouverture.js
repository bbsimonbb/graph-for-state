export default {
    name:'sensOuverture',
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
    selectItem(index){
        this.outputVal.selectedIndex = index;
        this.store.onNodeChanged(this);
    }
}