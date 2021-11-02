export default {
    outputVal: {
        displayHint: "standardOptionWithIcons",
        optionName: "petitBois",
        optionPrice: 0,
        optionValues: [
            {
                valueName: "aucun",
                imageUrl: "/static/images/aucune.png"
            },
            {
                valueName: "petitsBoisIncorporsMonocoloreBlanc901626x8",
                imageUrl: "/static/images/ico_Petits_Bois_Blanc_Incorpores_26.JPG"
            },
            {
                valueName: "petitsBoisIncorporsMonocoloreRAL26x8",
                imageUrl: "/static/images/ico_couleur_PB.JPG"
            },
            {
                valueName: "petitsBoisIncorporsBlancIntrieuretRALExtrieur26x8",
                imageUrl: "/static/images/ico_Petits_Bois_Blanc_Ext_Bois_Int_26.JPG"
            },
            {
                valueName: "petitsBoisIncorporsLaiton10x8",
                imageUrl: "/static/images/ico_Petits_Bois_Laiton_Incorpores_10.JPG"
            },
            {
                valueName: "PetitsBoisIncorporsTitane10x8",
                imageUrl: "/static/images/ico_Petits_Bois_Incorpor%C3%A9s_Titane_10.JPG"
            },
            {
                valueName: "petitsBoisRapportsDe45mm",
                imageUrl: "/static/images/ico_Petits_Bois_Blanc_Mortaises_45.JPG"
            },
            {
                valueName: "petitsBoisRapportsDe26mm",
                imageUrl: "/static/images/ico_Petits_Bois_Blanc_Mortaises_26.JPG"
            },
        ],
        defaultIndex: 0,
        selectedIndex: 0
    },
    selectItem(index) {
        this.outputVal.selectedIndex = index;
    }
}