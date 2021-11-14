export default {
    name:'tvaTotalTtc',    
    store:{},
    d:{},
    dependsOn:['prixRemise'],
    outputVal:{
        tauxTva:.2,
        totalTtc:0
    },
    onUpstreamChange(){
        this.recalculate();
        return true;
    },
    setTauxTva(event){
        this.outputVal.tauxTva = parseFloat(event.target.value);
        this.recalculate();
        this.store.onNodeChanged(this);
    },
    recalculate(){        
        this.outputVal.totalTtc = (this.outputVal.tauxTva +1 ) * this.d.prixRemise.prixDeVenteClient;
    }
}