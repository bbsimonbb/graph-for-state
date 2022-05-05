export default {
    name:'prixProduit',    
    store:{},
    dependsOn: ['conditionsAchatVente', 'dimensions','listeOptionsChoisis'],
    d:{},
    outputVal: {
        prixTarif: 0,
        prixDAchat: 0,
        prixDeVente: 0,
    },
    onUpstreamChange(d) {
        this.outputVal.prixTarif = this.d.dimensions.x * this.d.dimensions.y / 1000 + this.d.listeOptionsChoisis.totalPrice / this.d.conditionsAchatVente.coefficientVente;
        this.outputVal.prixDAchat = this.outputVal.prixTarif * (1 - this.d.conditionsAchatVente.remise);
        this.outputVal.prixDeVente = this.outputVal.prixDAchat * this.d.conditionsAchatVente.coefficientVente;
        this.store.onNodeChanged(this);
    }
}