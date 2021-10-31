export default {
    outputVal: { x: 600, y: 900 },
    onUpstreamChange: function(){return this.outputVal},
    setX: function(x){
        this.outputVal.x = x;
    },
    setY: function(y){
        this.outputVal.y = y;
    }
}