export default {
    outputVal: {
        displayHint: "standardOptionWithIcons",
        optionName: "typePose",
        optionPrice:0,
        optionValues: [
            {
                valueName: "dormant60",
                imageUrl:"/static/images/dormant60.png"
            },
            {
                valueName: "dormant100",
                imageUrl:"/static/images/dormant100.png"
            },
            {
                valueName: "dormant120",
                imageUrl:"/static/images/dormant120.png"
            },
            {
                valueName: "dormant140",
                imageUrl:"/static/images/dormant140.png"
            },
            {
                valueName: "dormant60",
                imageUrl:"/static/images/dormant140.png"
            },
            {
                valueName: "dormant160",
                imageUrl:"/static/images/dormant160.png"
            },
            {
                valueName: "dormant180",
                imageUrl:"/static/images/dormant180.png"
            },
            {
                valueName: "dormant200",
                imageUrl:"/static/images/dormant200.png"
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