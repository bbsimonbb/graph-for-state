<script>
import inputWhenActive from './reusable/input-when-active.vue'
export default {
    inject: ['bib', 'bibState'],
    components: { 'input-when-active': inputWhenActive },
    methods: {
        setX: function (event) {
            this.bib.nodes.dimensions.setX(event.target.value);
        },
        setY: function (event) {
            this.bib.nodes.dimensions.setY(event.target.value);
        },
        setQuantite: function (event) {
            this.bib.nodes.dimensions.setQuantite(event.target.value);
        }
    }
}
</script>
<template>
    <div class="accordion-item characteristics expend">
        <div class="accordion-item-heading">
            <div class="accordion-item-title">
                <i class="minus-square"></i>
                <span>{{$t("dimensionsEtQuantité")}}</span>
            </div>

            <div class="accordion-item-title-right"></div>
        </div>

        <div class="accordion-item-heading-separator"></div>
        <div class="accordion-item-content">
            <div class="content">
                <div class="selection">
                    <div class="col-1">
                        <span>{{$t("dimensions")}}</span>
                    </div>
                    <div class="col-2">
                        <div>
                            <span>{{$t("hauteur")}}</span>
                            <input-when-active :value="bibState.dimensions.x" @input="setX" />
                            <span class="car-sep">-</span>
                            <span>{{$t("largeur")}}</span>
                            <strong>{{ bibState.dimensions.y }}</strong>
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
                        <span>{{$t("quantité")}}</span>
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