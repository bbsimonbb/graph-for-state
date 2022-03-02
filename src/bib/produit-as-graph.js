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
import activeOptionsForTypeahead from "../mega-model/active-options-for-typeahead"



export default function () {
    graph.addNode(ui);
    graph.addNode(conditionsAchatVente);
    graph.addNode({
        name:'produit',
        outputVal: { name: "fenêtreDeuxVantaux" }
    })

    graph.addNode(dimensions);
    graph.addNode(gamme);
    graph.addNode(couleur);
    graph.addNode(forme);

    graph.addNode(gammeCouleurForme);

    graph.addNode(typePose);
    graph.addNode(typeCote);
    graph.addNode(dormant);
    graph.addNode(appuiEtSeuil);
    graph.addNode(typeCoteDormantHabillage);

    graph.addNode(sensOuverture);
    graph.addNode(oscilloBattant);

    graph.addNode(vitrage);
    graph.addNode(petitBois);
    graph.addNode(sensOuvertureOb);

    graph.addNode(vitragePetitBois);

    // reporting nodes added after options
    graph.addNode(listeOptionsChoisis);
    graph.addNode(activeOptionsForTypeahead);

    // then all the totals that depend
    graph.addNode(prixProduit);
    graph.addNode(prixRemise);
    graph.addNode(margeVendeur);
    graph.addNode(tvaTotalTtc);

    graph.fullTraversal();
    return graph;
}
