export default {
    dependsOn: ['conditionsAchatVente'],
    outputVal: {
        displayHint: "standardOptionWithIcons",
        optionName: "oscilloBattant",
        optionPrice: 0,
        optionValues: [
            {
                valueName: "oscilloBattant1Vantail",
                imageUrl: "/static/images/oscilloBattant1Vantail.png"
            },
            {
                valueName: "aucunOscilloBattant",
                imageUrl: "/static/images/aucune.png"
            },
        ],
        defaultIndex: 0,
        selectedIndex: 0
    },
    coefficient: 1,
    onUpstreamChange(d) {
        this.coefficient = d.conditionsAchatVente.coefficientVente;
        this.recalculate();
    },

    selectItem(index) {
        this.outputVal.selectedIndex = index;
        this.recalculate();
    },
    recalculate() {
        if(this.outputVal.selectedIndex === 0)
            this.outputVal.optionPrice = 0;
        else
            this.outputVal.optionPrice = -13.50 * this.coefficient;
    }
}