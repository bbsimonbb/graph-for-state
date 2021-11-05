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

import vitrage from "./vitrage-petit-bois/vitrage"
import petitBois from "./vitrage-petit-bois/petit-bois"
import vitragePetitBois from "./vitrage-petit-bois/vitrage-petit-bois"

import listeOptionsChoisis from "../mega-model/ticket-caisse/liste-options-choisis"
import conditionsAchatVente from "./conditions-achat-vente"
import prixProduit from "./prix-produit"
import prixRemise from "../mega-model/ticket-caisse/prix-remise"
import margeVendeur from "../mega-model/ticket-caisse/marge-vendeur"
import tvaTotalTtc from "../mega-model/ticket-caisse/tva-total-ttc"
import ui from "../mega-model/ui"



export default function () {
    graph.addNode('ui', ui);
    graph.addNode('conditionsAchatVente', conditionsAchatVente);
    graph.addNode('produit', {
        // this is the outputVal the graph will watch. Any function that changes this will trigger a reevaluation of everything downstream.
        outputVal: { name: "fenêtreDeuxVantaux" }
    })

    graph.addNode('dimensions', dimensions);
    graph.addNode('gamme', gamme);
    graph.addNode('couleur', couleur);
    graph.addNode('forme', forme);

    graph.addNode('gammeCouleurForme', gammeCouleurForme);

    graph.addNode('typePose', typePose);
    graph.addNode('typeCote', typeCote);
    graph.addNode('dormant', dormant);
    graph.addNode('appuiEtSeuil', appuiEtSeuil);
    graph.addNode('typeCoteDormantHabillage', typeCoteDormantHabillage);

    graph.addNode('sensOuverture', sensOuverture);
    graph.addNode('oscilloBattant', oscilloBattant);

    graph.addNode('vitrage', vitrage);
    graph.addNode('petitBois', petitBois);
    graph.addNode('sensOuvertureOb', sensOuvertureOb);

    graph.addNode('vitragePetitBois', vitragePetitBois);

    // reporting nodes added after options
    graph.addNode('listeOptionsChoisis', listeOptionsChoisis);

    // then all the totals that depend
    graph.addNode('prixProduit', prixProduit);
    graph.addNode('prixRemise', prixRemise);
    graph.addNode('margeVendeur', margeVendeur);
    graph.addNode('tvaTotalTtc', tvaTotalTtc);

    graph.fullTraversal();
    return graph;
}
