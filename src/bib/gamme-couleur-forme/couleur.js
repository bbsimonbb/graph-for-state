export default {
    dependsOn: ['gamme'],
    outputVal: {
        displayHint: "standardOptionWithIcons",
        optionName: "couleur",
        optionValues: [
            {
                valueName: "blancTeintéMasse",
                imageUrl: "/static/images/blancTeintéMasse.png",
                hide:false
            },
            {
                valueName: "beigeTeintéMasse",
                imageUrl: "/static/images/beigeTeintéMasse.png",
                hide:false
            },
            {
                valueName: "grisTeintéMasse",
                imageUrl: "/static/images/grisTeintéMasse.png",
                hide:false
            },
            {
                valueName: "blancChêneDoré",
                imageUrl: "/static/images/blancChêneDoré.png",
                hide:false
            },
            {
                valueName: "chêneDoré",
                imageUrl: "/static/images/chêneDoré.png",
                hide:false
            },
            {
                valueName: "grisAnthracite",
                imageUrl: "/static/images/grisAnthracite.png",
                hide:false
            },
        ],
        optionPrice: 0,
        defaultIndex: 0,
        selectedIndex: 0
    },
    onUpstreamChange(d) {
        console.log("couleur onUpstreamChange()")
        if (d.gamme.selectedIndex === 0) {
            this.outputVal.optionValues.forEach(o =>{ if(o.valueName.includes('blanc')) o.hide = true});
        } else {
            this.outputVal.optionValues.forEach(o =>{ o.hide = false});
        }
    },
    selectItem(index) {
        this.outputVal.selectedIndex = index;
    }
}