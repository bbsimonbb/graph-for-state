export default {
    name:'ui',    
    store:{},
    d:{},
    outputVal:{
        allOpen:false
    },
    setAllOpen(){
        this.outputVal.allOpen = true;
        this.store.onNodeChanged(this);
    },
    setAllClosed(){
        this.outputVal.allOpen = false;
        this.store.onNodeChanged(this);
    }
}