<script>
export default {
    inject: ['bib','bibState'],
    mounted() {
        console.log("cobber");
    },
    methods: {
        setX: function (event) {
            this.bib.nodes.dimensions.setX(event.target.value);
        }
    }
}
</script>
<template>
    <div class="accordion-item characteristics expend">
        <div class="accordion-item-heading">
            <div class="accordion-item-title">
                <i class="minus-square"></i>
                <span>Dimensions et quantité</span>
            </div>

            <div class="accordion-item-title-right"></div>
        </div>

        <div class="accordion-item-heading-separator"></div>
        <div class="accordion-item-content">
            <div class="content">
                <div class="selection">
                    <div class="col-1">
                        <span>Dimensions</span>
                    </div>
                    <div class="col-2">
                        <div>
                            <span>Hauteur</span>
                            <strong>{{ bibState.dimensions.x }} mm</strong>
                            <input type="text" :value="bibState.dimensions.x" @change="setX" />
                            <span class="car-sep">-</span>
                            <span>Largeur</span>
                            <strong>{{bibState.dimensions.y}}</strong>
                        </div>
                    </div>
                    <div class="col-3"></div>
                </div>

                <div class="validation">
                    <div class="accordion-item-validation"></div>
                    <div class="accordion-item-validation"></div>
                </div>
            </div>

            <div class="content">
                <div class="selection">
                    <div class="col-1">
                        <span>Quantité</span>
                    </div>
                    <div class="col-2">
                        <div>
                            <span>1</span>
                            <strong></strong>
                        </div>
                    </div>
                    <div class="col-3"></div>
                </div>
                <div class="validation">
                    <div class="accordion-item-validation"></div>
                </div>
            </div>
        </div>
    </div>
</template>