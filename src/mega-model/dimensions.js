export default {
    outputVal: { x: 600, y: 900, quantite: 1 },
    setX: function(x){
        this.outputVal.x = parseInt(x);
    },
    setY: function(y){
        this.outputVal.y = parseInt(y);
    },
    setQuantite: function(q){
        this.outputVal.quantite = parseInt(q);
    }
}