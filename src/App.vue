<script>

import produit from './couche-ui/produit-en-chiffrage.vue'
import produitAsGraph from './bib/produit-as-graph'
//import graph from './graph/graph.js'


var graph = produitAsGraph();



export default {
    components:{
        'produit': produit
    },
    provide: {
        bib: graph,
        bibState: graph.output
    }
}
</script>

<template>
<produit></produit>
 </template>

