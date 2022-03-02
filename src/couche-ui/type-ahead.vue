<script>
export default {
    inject: ['bibState'],
}
</script>
<template>
    <div style="position:fixed; bottom:0; background-color: lightgray;">
        <v-select :options="bibState.activeOptions4Typeahead.liste.map(o=>this.$t(o))"></v-select>
    </div>
</template>