export default {
    name:'dimensions',
    store:{},
    d:{},
    outputVal: { x: 600, y: 900, quantite: 1 },
    setX: function(x){
        this.outputVal.x = parseInt(x);
        this.store.onNodeChanged(this)
    },
    setY: function(y){
        this.outputVal.y = parseInt(y);
        this.store.onNodeChanged(this);
    },
    setQuantite: function(q){
        this.outputVal.quantite = parseInt(q);        
        this.store.onNodeChanged(this)
    }
}