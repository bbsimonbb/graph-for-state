import { createApp, VueElement } from 'vue'
import App from './App.vue'
import graph from './graph/graph.js'
import dimensions from './mega-model/dimensions-node'

const app = createApp(App);
graph.addNode('produit', {
    // this is the outputVal the graph will watch. Any function that changes this will trigger a reevaluation of everything downstream.
    outputVal: {name: "Fenêtre deux vantaux"}
})

graph.addNode('dimensions', dimensions)

graph.addNode('gamme', {
    outputVal: "Gamme Tradilour 68mm"
})

graph.addNode('basePrice', {
    dependsOn: ['dimensions', 'gamme'],
    ownPrice: 0,
    onUpstreamChange: function (args) {
        if (args.gamme === "Gamme Tradilour 68mm") {
            this.ownPrice = args.dimensions.x * args.dimensions.y / 100;
        }
    }
})
graph.fullTraversal();

app.use(graph);
app.mount('#app')
