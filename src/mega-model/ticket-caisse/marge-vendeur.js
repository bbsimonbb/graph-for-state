export default {
    dependsOn:['prixProduit','prixRemise', 'dimensions'],
    outputVal:{
        margeUnitaire:0,
        margeGlobale:0,
        tauxDeMarge:0,
    },
    onUpstreamChange(d){
        this.outputVal.margeUnitaire = d.prixRemise.prixDeVenteClient - d.prixProduit.prixDAchat;
        this.outputVal.margeGlobale = this.outputVal.margeUnitaire * d.dimensions.quantite;
        this.outputVal.tauxDeMarge = (d.prixRemise.prixDeVenteClient - d.prixProduit.prixDAchat)/d.prixProduit.prixDAchat;
    }
}