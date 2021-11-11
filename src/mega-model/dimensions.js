export default {
    name:'dimensions',    
    emitChanged(){},
    d:{},
    outputVal: { x: 600, y: 900, quantite: 1 },
    setX: function(x){
        this.outputVal.x = parseInt(x);
        this.emitChanged(this)
    },
    setY: function(y){
        this.outputVal.y = parseInt(y);
        this.emitChanged(this);
    },
    setQuantite: function(q){
        this.outputVal.quantite = parseInt(q);
    }
}