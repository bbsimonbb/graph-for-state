export default {
    dependsOn:['prixRemise'],
    outputVal:{
        tauxTva:.2,
        totalTtc:0
    },
    prixDeVenteClient:0,
    onUpstreamChange(d){
        this.prixDeVenteClient = d.prixRemise.prixDeVenteClient;
        this.recalculate();
    },
    setTauxTva(event){
        this.outputVal.tauxTva = parseFloat(event.target.value);
        this.recalculate()
    },
    recalculate(){        
        this.outputVal.totalTtc = (this.outputVal.tauxTva +1 ) * this.prixDeVenteClient;
    }
}