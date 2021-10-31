export default {
    outputVal: {
        displayHint: "standardOptionWithIcons",
        optionName: "couleur",
        optionPrice:0,
        optionValues: [
            {
                valueName: "blancTeintéMasse",
                imageUrl:"/static/images/blancTeintéMasse.png"
            },
            {
                valueName: "beigeTeintéMasse",
                imageUrl:"/static/images/beigeTeintéMasse.png"
            },
            {
                valueName: "grisTeintéMasse",
                imageUrl:"/static/images/grisTeintéMasse.png"
            },
            {
                valueName: "blancChêneDoré",
                imageUrl:"/static/images/blancChêneDoré.png"
            },
            {
                valueName: "chêneDoré",
                imageUrl:"/static/images/chêneDoré.png"
            },
            {
                valueName: "grisAnthracite",
                imageUrl:"/static/images/grisAnthracite.png"
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