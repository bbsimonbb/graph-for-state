export default {
    name:'typePose',    
    emitChanged(){},
    outputVal: {
        displayHint: "standardOptionWithIcons",
        optionName: "typePose",
        optionPrice:0,
        optionValues: [
            {
                valueName: "poseEnAppliqueIntérieur",
                imageUrl:"/static/images/ico_Frappe_Applique.jfif"
            },
            {
                valueName: "poseFeuillure",
                imageUrl:"/static/images/ico_Frappe_Feuillure.jfif"
            },
            {
                valueName: "poseRenovation",
                imageUrl:"/static/images/ico_Frappe_Renovation.jfif"
            },
            {
                valueName: "poseTunnel",
                imageUrl:"/static/images/ico_Frappe_Tunnel.jfif"
            },
        ],
        defaultIndex:0,
        selectedIndex:0        
    },
    onUpstreamChange(){},
    selectItem(index){
        this.outputVal.selectedIndex = index;
        this.emitChanged(this);
    }
}