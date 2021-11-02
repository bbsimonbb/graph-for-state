export default {
    outputVal: {
        remise: .4,
        coefficientVente: 2
    },
    setCoefficient(e){
        this.outputVal.coefficientVente = parseFloat(e.target.value);
    }
}