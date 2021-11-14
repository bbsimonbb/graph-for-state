export default {
    vitragesGammePop: [
        {
            optionValueGroupName: "doubleVitrage",
            valueName: "doubleVitrageVIR416WarmEdgeArgon4",
            imageUrl: "/static/images/ico_img_Vitrages-4_16_4-01.JPG",
            gamme: "pop"
        },

        {
            optionValueGroupName: "doubleVitrage",
            valueName: "doubleVitrageVIR414WarmEdgeArgon6",
            imageUrl: "/static/images/ico_img_Vitrages-4_14_6-01.JPG",
            gamme: "pop"
        },

        {
            optionValueGroupName: "doubleVitrage",
            valueName: "doubleVitrageVIR620WarmEdgeArgon6",
            imageUrl: "/static/images/ico_img_Vitrages-6_20_6-01.JPG",
            gamme: "pop"
        },

        {
            optionValueGroupName: "doubleVitrageAutoNettoyant",
            valueName: "doubleVitrageVIR416WarmEdgeArgon4Autonettoyant",
            imageUrl: "/static/images/ico_img_Vitrages-4_16_4-03.JPG",
            gamme: "pop"
        },
        {
            optionValueGroupName: "doubleVitrageAutoNettoyant",
            valueName: "doubleVitrageVIR414WarmEdgeArgon6Autonettoyant",
            imageUrl: "/static/images/ico_img_Vitrages-4_14_6-03.JPG",
            gamme: "pop"
        },
        {
            optionValueGroupName: "doubleVitrageAutoNettoyant",
            valueName: "doubleVitrageVIR44214WarmEdgeArgon442Autonettoyant",
            imageUrl: "/static/images/ico_img_Vitrages-44%2C2_14_44%2C2-03.JPG",
            gamme: "pop"
        },
        {
            optionValueGroupName: "doubleVitrageAcoustique",
            valueName: "doubleVitrageAcoustiqueVIR420WarmEdgeArgon8",
            imageUrl: "/static/images/ico_img_Vitrages-4_20_8-02.JPG",
            gamme: "pop"
        },
        {
            optionValueGroupName: "doubleVitrageAcoustique",
            valueName: "doubleVitrageAcoustiqueVIR1014WarmEdgeArgon441silence",
            imageUrl: "/static/images/ico_img_Vitrages-Specifique-02.JPG",
            gamme: "pop"
        },

        {
            optionValueGroupName: "doubleVitrageSecurité",
            valueName: "doubleVitrageScuritVIR418WarmEdgeArgon442",
            imageUrl: "/static/images/ico_img_Vitrages-Specifique-03.JPG",
            gamme: "pop"
        },
        {
            optionValueGroupName: "doubleVitrageSecurité",
            valueName: "doubleVitrageScuritVIR44218WarmEdgeArgon4",
            imageUrl: "/static/images/ico_img_Vitrages-Specifique-04.JPG",
            gamme: "pop"
        },
        {
            optionValueGroupName: "doubleVitrageSecurité",
            valueName: "doubleVitrageScuritVIR44214WarmEdgeArgon442",
            imageUrl: "/static/images/ico_img_Vitrages-44%2C2_14_44%2C2-09.JPG",
            gamme: "pop"
        },
        {
            optionValueGroupName: "remplissagePlein",
            valueName: "panneauMousseDe24mm",
            imageUrl: "/static/images/ico_Panneau%20mousse.JPG",
            gamme: "pop"
        },
        {
            optionValueGroupName: "remplissagePlein",
            valueName: "panneauRainuréDe31mm",
            imageUrl: "/static/images/ico_Panneau%20rainure.JPG",
            gamme: "pop"
        },
    ],
    vitragesGammeAdvance: [
        // ------------------------------- triple vitrage-----------------------------------------
        {
            optionValueGroupName: "tripleVitrage",
            valueName: "TriplevitrageVIR418WarmEdgeargon418WarmEdgeargon4VIR",
            imageUrl: "/static/images/ico_img_Vitrages-Specifique-05.JPG",
            gamme: "advance"
        },
        {
            optionValueGroupName: "tripleVitrageAutoNettoyant",
            valueName: "TriplevitrageVIR418WarmEdgeargon418WarmEdgeargon4VIRautonettoyant",
            imageUrl: "/static/images/ico_img_Vitrages-Specifique-06.JPG",
            gamme: "advance"
        },
        {
            optionValueGroupName: "tripleVitrageAutoNettoyant",
            valueName: "TriplevitrageVIR44215WarmEdgeargon415WarmEdgeargon4VIRautonettoyant",
            imageUrl: "/static/images/ico_img_Vitrages-Specifique-07.JPG",
            gamme: "advance"
        },
        {
            optionValueGroupName: "tripleVitrageAutoNettoyant",
            valueName: "TriplevitrageVIR44212WarmEdgeargon412WarmEdgeargon442VIRautonettoyant",
            imageUrl: "/static/images/ico_img_Vitrages-Specifique-08.JPG",
            gamme: "advance"
        },
        {
            optionValueGroupName: "tripleVitrageSecurite",
            valueName: "TriplevitrageVIR415WarmEdgeargon415WarmEdgeargon442VIR",
            imageUrl: "/static/images/ico_img_Vitrages-Specifique-09.JPG",
            gamme: "advance"
        },
        {
            optionValueGroupName: "tripleVitrageSecurite",
            valueName: "TriplevitrageVIR414WarmEdgeargon414WarmEdgeargonSP10VIR",
            imageUrl: "/static/images/ico_img_Vitrages-Specifique-10.JPG",
            gamme: "advance"
        },
        {
            optionValueGroupName: "tripleVitrageSecurite",
            valueName: "TriplevitrageVIR44212WarmEdgeargon412WarmEdgeargon442VIR",
            imageUrl: "/static/images/ico_img_Vitrages-Specifique-07.JPG",
            gamme: "advance"
        },
        {
            optionValueGroupName: "remplissagePlein",
            valueName: "panneauMousseDe24mm",
            imageUrl: "/static/images/ico_Panneau%20mousse.JPG",
            gamme: "advance"
        },
        {
            optionValueGroupName: "remplissagePlein",
            valueName: "panneauRainuréDe31mm",
            imageUrl: "/static/images/ico_Panneau%20rainure.JPG",
            gamme: "advance"
        }
    ],


    name: 'vitrage',
    store: {},
    dependsOn: ['gamme', 'dimensions'],
    d: {},
    oldGamme: -1,
    onUpstreamChange() {
        // if gamme has changed, change vitrage options and select the first option
        if (this.oldGamme !== this.d.gamme.selectedIndex) {
            this.outputVal.optionValues = this.d.gamme.selectedIndex === 0 ? this.vitragesGammePop : this.vitragesGammeAdvance;
            this.outputVal.selectedIndex = 0;
            this.oldGamme = this.d.gamme.selectedIndex
            this.recalculate();
            return true;
        }
    },
    selectItem(index) {
        this.outputVal.selectedIndex = index;
        this.recalculate();
        this.store.onNodeChanged(this)
    },
    recalculate() {
        this.outputVal.optionPrice = 62 * (this.d.gamme.selectedIndex) + this.outputVal.selectedIndex * 6 + (this.d.dimensions.x * this.d.dimensions.y / 10000);
    },
    outputVal: {
        displayHint: "standardOptionWithIcons",
        optionName: "vitrage",
        optionPrice: 0,
        optionValues: [],
        defaultIndex: 0,
        selectedIndex: 0
    },

}