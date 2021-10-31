<!-- <script>
export default {
    props: ['value'],
    data() {
        return {
            active: false
        }
    },
    methods: {
        onInput() {
            this.$emit('input', this.value)
        },
        closeIfOpen(){
            if(this.active)
                this.active = false;
        },
        openIfClosed(){
            if(!this.active){
                this.active = true;
            }
        }
    }
}
</script>
<template>
    <div v-click-outside='closeIfOpen' @click='openIfClosed'>
        <div v-if='!active' ><b>{{value}}</b></div>
        <input 
            v-if='active'
            :value='value' 
            @input='onInput'
        >
    </div>
</template> -->