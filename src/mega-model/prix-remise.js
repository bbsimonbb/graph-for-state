export default {
    dependsOn: ['prixProduit'],
    prixDeVenteAvantRemise: 0,
    remiseUnitaire:0,
    remisePct:0,
    outputVal: {
        remiseUnitaire: 0,
        remisePct: 0,
        prixDeVenteClient: 0,
    },
    onUpstreamChange(d) {
        this.prixDeVenteAvantRemise = d.prixProduit.prixDeVente;
        this.recalculate();
    },
    setRemiseUnitaire(e) {
        this.remiseUnitaire = parseFloat(e.target.value);
        this.recalculate();
    },
    setRemisePct(e) {
        this.remisePct = parseFloat(e.target.value) / 100;
        this.recalculate();
    },
    recalculate() {
            this.outputVal.remiseUnitaire= this.remiseUnitaire,
            this.outputVal.remisePct= this.remisePct,
            this.outputVal.prixDeVenteClient = (this.prixDeVenteAvantRemise - this.remiseUnitaire) * (1 - this.remisePct)
    }
}