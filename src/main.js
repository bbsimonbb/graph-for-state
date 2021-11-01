import { createApp, VueElement } from 'vue'
import { createI18n } from 'vue-i18n'
import messages from './traductions/all-trads'
import App from './App.vue'
import produitAsGraph from './bib/produit-as-graph'


const i18n = createI18n({
    locale: 'fr', // set locale
    messages, // set locale messages
})
const app = createApp(App);
app.config.globalProperties.window = window
app.use(i18n);
app.use(produitAsGraph);
app.mount('#app')
