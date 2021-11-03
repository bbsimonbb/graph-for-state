export default {
    dependsOn: ['conditionsAchatVente', 'dimensions'],
    outputVal: {
        prixTarif: 0,
        prixDAchat: 0,
        prixDeVente: 0,
    },
    onUpstreamChange(d) {
        console.log("prixProduit onUpstreamChange()")
        this.outputVal.prixTarif = d.dimensions.x * d.dimensions.y / 1000;
        this.outputVal.prixDAchat = this.outputVal.prixTarif * (1 - d.conditionsAchatVente.remise);
        this.outputVal.prixDeVente = this.outputVal.prixDAchat * d.conditionsAchatVente.coefficientVente;
    }
}