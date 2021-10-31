export default {
    outputVal: {
        displayHint: "standardOptionWithIcons",
        optionName: "vitrage",
        optionPrice: 0,
        optionValues: [
            {
                optionValueGroupName: "doubleVitrage",
                valueName: "doubleVitrageVIR416WarmEdgeArgon4",
                imageUrl: "/static/images/ico_img_Vitrages-4_16_4-01.JPG"
            },
            
            {
                optionValueGroupName: "doubleVitrage",
                valueName: "doubleVitrageVIR414WarmEdgeArgon6",
                imageUrl: "/static/images/ico_img_Vitrages-4_14_6-01.JPG"
            },
            
            {
                optionValueGroupName: "doubleVitrage",
                valueName: "doubleVitrageVIR620WarmEdgeArgon6",
                imageUrl: "/static/images/ico_img_Vitrages-6_20_6-01.JPG"
            },
            
            {
                optionValueGroupName: "doubleVitrageAutoNettoyant",
                valueName: "doubleVitrageVIR416WarmEdgeArgon4Autonettoyant",
                imageUrl: "/static/images/ico_img_Vitrages-4_16_4-03.JPG"
            },
            {
                optionValueGroupName: "doubleVitrageAutoNettoyant",
                valueName: "doubleVitrageVIR414WarmEdgeArgon6Autonettoyant",
                imageUrl: "/static/images/ico_img_Vitrages-4_14_6-03.JPG"
            },
            {
                optionValueGroupName: "doubleVitrageAutoNettoyant",
                valueName: "doubleVitrageVIR44214WarmEdgeArgon442Autonettoyant",
                imageUrl: "/static/images/ico_img_Vitrages-44%2C2_14_44%2C2-03.JPG"
            },
            {
                optionValueGroupName: "doubleVitrageAcoustique",
                valueName: "doubleVitrageAcoustiqueVIR420WarmEdgeArgon8",
                imageUrl: "/static/images/ico_img_Vitrages-4_20_8-02.JPG"
            },
            {
                optionValueGroupName: "doubleVitrageAcoustique",
                valueName: "doubleVitrageAcoustiqueVIR1014WarmEdgeArgon441silence",
                imageUrl: "/static/images/ico_img_Vitrages-Specifique-02.JPG"
            },

            {
                optionValueGroupName: "doubleVitrageSecurité",
                valueName: "doubleVitrageScuritVIR418WarmEdgeArgon442",
                imageUrl: "/static/images/ico_img_Vitrages-Specifique-03.JPG"
            },
            {
                optionValueGroupName: "doubleVitrageSecurité",
                valueName: "doubleVitrageScuritVIR44218WarmEdgeArgon4",
                imageUrl: "/static/images/ico_img_Vitrages-Specifique-04.JPG"
            },
            {
                optionValueGroupName: "doubleVitrageSecurité",
                valueName: "doubleVitrageScuritVIR44214WarmEdgeArgon442",
                imageUrl: "/static/images/ico_img_Vitrages-44%2C2_14_44%2C2-09.JPG"
            },
            {
                optionValueGroupName: "remplissagePlein",
                valueName: "",
                imageUrl: "/static/images/"
            },
            {
                optionValueGroupName: "remplissagePlein",
                valueName: "",
                imageUrl: "/static/images/"
            },

            
        ],
        defaultIndex: 0,
        selectedIndex: 0
    },
    onUpstreamChange() { },
    selectItem(index) {
        this.outputVal.selectedIndex = index;
    }
}