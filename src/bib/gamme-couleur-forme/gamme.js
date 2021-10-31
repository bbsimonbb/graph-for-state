export default {
    outputVal: {
        displayHint: "standardOptionWithIcons",
        optionName: "gamme",
        optionPrice: 0,
        optionValues: [
            {
                valueName: "gammePop",
                imageUrl: "/static/images/gammePop.png"
            },
            {
                valueName: "gammeAdvance",
                imageUrl: "/static/images/gammeAdvance.png"
            }
        ],
        defaultIndex: 0,
        selectedIndex: 0
    },
    onUpstreamChange() { },
    selectItem(index) {
        this.outputVal.selectedIndex = index;
    }
}