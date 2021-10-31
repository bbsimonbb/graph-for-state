export default {
    outputVal: {
        displayHint: "standardOptionWithIcons",
        optionName: "forme",
        optionPrice:0,
        optionValues: [
            {
                valueName: "dormantCintré",
                imageUrl:"/static/images/dormantCintré.png"
            },
            {
                valueName: "dormantPleinCintre",
                imageUrl:"/static/images/dormantPleinCintre.png"
            },
            {
                valueName: "vitrageCintreSurbaissé",
                imageUrl:"/static/images/vitrageCintreSurbaissé.png"
            },
            {
                valueName: "vitragePleinCintre",
                imageUrl:"/static/images/vitragePleinCintre.png"
            },
            {
                valueName: "formeOuvrantCintreSurbaissé",
                imageUrl:"/static/images/formeOuvrantCintreSurbaissé.png"
            },
            {
                valueName: "formeOuvrantPleinCintre",
                imageUrl:"/static/images/formeOuvrantPleinCintre.png"
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