export default {
    name:'ui',    
    emitChanged(){},
    d:{},
    outputVal:{
        allOpen:false
    },
    setAllOpen(){
        this.outputVal.allOpen = true;
        this.emitChanged(this);
    },
    setAllClosed(){
        this.outputVal.allOpen = false;
        this.emitChanged(this);
    }
}