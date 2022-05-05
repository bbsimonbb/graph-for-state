export default {
    name:'prixRemise',    
    store:{},
    d:{},
    dependsOn: ['prixProduit'],
    prixDeVenteAvantRemise: 0,
    remiseUnitaire:0,
    remisePct:0,
    outputVal: {
        remiseUnitaire: 0,
        remisePct: 0,
        prixDeVenteClient: 0,
    },
    onUpstreamChange() {
        this.prixDeVenteAvantRemise = this.d.prixProduit.prixDeVente;
        this.recalculate();
        return true;
    },
    setRemiseUnitaire(e) {
        this.remiseUnitaire = parseFloat(e.target.value);
        this.recalculate();
        this.store.onNodeChanged(this);
    },
    setRemisePct(e) {
        this.remisePct = parseFloat(e.target.value) / 100;
        this.recalculate();
        this.store.onNodeChanged(this);
    },
    recalculate() {
            this.outputVal.remiseUnitaire= this.remiseUnitaire;
            this.outputVal.remisePct= this.remisePct;
            this.outputVal.prixDeVenteClient = (this.prixDeVenteAvantRemise - this.remiseUnitaire) * (1 - this.remisePct);
    }
}