export default {
    name:'conditionsAchatVente',
    store:{},
    outputVal: {
        remise: .4,
        coefficientVente: 2,
        coefficientVenteEnSaisie: '2'
    },
    setCoefficient(e){
        this.outputVal.coefficientVenteEnSaisie = e.target.value;
        this.outputVal.coefficientVente = parseFloat(this.outputVal.coefficientVenteEnSaisie) || 0;
        this.store.onNodeChanged(this);
    }
}