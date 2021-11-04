export default {
    gamme: 0,
    x: 0,
    y: 0,
    onUpstreamChange(d) {
        if (this.gamme !== d.gamme.selectedIndex) {
            this.outputValue.selectedIndex = 0;
            this.gamme = d.gamme.selectedIndex;
        }
        this.x = d.dimensions.x;
        this.y = d.dimensions.y;
        //this.outputVal.optionValues = this.gamme === 0 ? this.vitragesGammePop: this.vitragesGammeAdvance;
        this.recalculate();
    },
    selectItem(index) {
        this.outputVal.selectedIndex = index;
        this.recalculate();
    },
    recalculate(){        
        this.outputVal.optionPrice = 62 * (this.gamme) + this.outputVal.selectedIndex * 6 + (this.x * this.y / 10000);
    },
    dependsOn: ['gamme', 'dimensions'],
    outputVal: {
        displayHint: "standardOptionWithIcons",
        optionName: "vitrage",
        optionPrice: 0,
        optionValues: [
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
        defaultIndex: 0,
        selectedIndex: 0
    },

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
}