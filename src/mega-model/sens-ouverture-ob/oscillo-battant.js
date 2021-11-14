export default {
    name:'oscilloBattant',
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
    onUpstreamChange() {
        this.recalculate();
        return true;
    },

    selectItem(index) {
        this.outputVal.selectedIndex = index;
        this.recalculate();
        this.store.onNodeChanged(this);
    },
    recalculate() {
        if(this.outputVal.selectedIndex === 0)
            this.outputVal.optionPrice = 0;
        else
            this.outputVal.optionPrice = -13.50 * this.d.conditionsAchatVente.coefficientVente;
    }
}