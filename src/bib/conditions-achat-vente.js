export default {
    name:'conditionsAchatVente',    
    emitChanged(){},
    outputVal: {
        remise: .4,
        coefficientVente: 2
    },
    setCoefficient(e){
        this.outputVal.coefficientVente = parseFloat(e.target.value) || 0;
        this.emitChanged(this);
    }
}