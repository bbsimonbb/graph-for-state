import typeCoteDormantHabillage from "../mega-model/type-cote-dormant-habillage/type-cote-dormant-habillage"
import typePose from "../mega-model/type-cote-dormant-habillage/type-pose"
import typeCote from "../mega-model/type-cote-dormant-habillage/type-cote"
import dormant from "../mega-model/type-cote-dormant-habillage/dormant"
import appuiEtSeuil from "../mega-model/type-cote-dormant-habillage/appui-et-seuil"

import dimensions from '../mega-model/dimensions'

import graph from '../graph/graph'

import gammeCouleurForme from "./gamme-couleur-forme/gamme-couleur-forme"
import couleur from "./gamme-couleur-forme/couleur"
import gamme from "./gamme-couleur-forme/gamme"
import forme from "./gamme-couleur-forme/forme"

import sensOuvertureOb from "../mega-model/sens-ouverture-ob/sens-ouverture-ob"
import sensOuverture from "../mega-model/sens-ouverture-ob/sens-ouverture"
import oscilloBattant from "../mega-model/sens-ouverture-ob/oscillo-battant"


export default function () {
    graph.addNode('produit', {
        // this is the outputVal the graph will watch. Any function that changes this will trigger a reevaluation of everything downstream.
        outputVal: { name: "Fenêtre deux vantaux" }
    })

    graph.addNode('dimensions', dimensions);
    graph.addNode('gamme', gamme);
    graph.addNode('couleur', couleur);
    graph.addNode('forme', forme);

    graph.addNode('gammeCouleurForme', gammeCouleurForme);


    graph.addNode('basePrice', {
        dependsOn: ['dimensions', 'gamme'],
        ownPrice: 0,
        onUpstreamChange: function (args) {
            if (args.gamme === "Gamme Tradilour 68mm") {
                this.ownPrice = args.dimensions.x * args.dimensions.y / 100;
            }
        }
    })

    graph.addNode('typePose', typePose);
    graph.addNode('typeCote', typeCote);
    graph.addNode('dormant', dormant);
    graph.addNode('appuiEtSeuil', appuiEtSeuil);
    graph.addNode('typeCoteDormantHabillage', typeCoteDormantHabillage);

    graph.addNode('sensOuverture',sensOuverture);
    graph.addNode('oscilloBattant',oscilloBattant);
    graph.addNode('sensOuvertureOb',sensOuvertureOb);


    graph.fullTraversal();
    return graph;
}
