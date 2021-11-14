export default {
    name:'margeVendeur',    
    store:{},
    d:{},
    dependsOn:['prixProduit','prixRemise', 'dimensions'],
    outputVal:{
        margeUnitaire:0,
        margeGlobale:0,
        tauxDeMarge:0,
    },
    onUpstreamChange(d){
        this.outputVal.margeUnitaire = this.d.prixRemise.prixDeVenteClient - this.d.prixProduit.prixDAchat;
        this.outputVal.margeGlobale = this.outputVal.margeUnitaire * this.d.dimensions.quantite;
        this.outputVal.tauxDeMarge = (this.d.prixRemise.prixDeVenteClient - this.d.prixProduit.prixDAchat)/this.d.prixProduit.prixDAchat;
        return true;
    }
}