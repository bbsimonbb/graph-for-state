import { createApp, VueElement } from 'vue'
import { createI18n } from 'vue-i18n'
import messages from './traductions/all-trads'
import App from './App.vue'
import produitAsGraph from './bib/produit-as-graph'
import routes from './routes'
import {createRouter, createWebHistory}  from 'vue-router'
import produit from './couche-ui/produit-en-chiffrage.vue'


const i18n = createI18n({
    locale: 'fr', // set locale
    messages, // set locale messages
})
const router = createRouter({
    history:createWebHistory(),
    routes
})
const app = createApp(App);
app.use(router)
app.config.globalProperties.window = window
app.config.globalProperties.$eur = function(amount){return new Intl.NumberFormat(this.$i18n.locale, { style: 'currency', currency: 'EUR' }).format(amount)}
app.use(i18n);
app.use(produitAsGraph);
app.mount('#app')
