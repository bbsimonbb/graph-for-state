<script>
export default {
    props: ['nodeName'],
    inject: ['bibState', 'bib'],
    data() {
        return {
            nodeState: this.bibState[this.nodeName],
            node: this.bib.nodes[this.nodeName],
            enEdition: false
        }

    },
    computed: {
        displayPrice() {
            return new Intl.NumberFormat(this.$i18n.locale, { style: 'currency', currency: 'EUR' }).format(this.nodeState.optionPrice)
        }
    },
    methods: {
        selectItem(index) {
            this.node.selectItem(index);
            this.enEdition = false;
        }
    }
}
</script>
<template>
    <div class="content" @click="enEdition = true">
        <div class="selection">
            <div class="col-1">
                <span>{{ $t(nodeState.optionName) }}</span>
            </div>
            <div class="col-1-bis"></div>
            <div class="col-2">
                <div>
                    <strong>{{ $t(nodeState.optionValues[nodeState.selectedIndex].valueName) }}</strong>
                </div>
            </div>
            <div class="col-3">
                <strong>{{ displayPrice }}</strong>
            </div>
        </div>
    </div>

    <transition name="fade">
        <div v-if="enEdition" class="mask"></div>
    </transition>
    <div class="popup v2" v-if="enEdition">
        <div class="layout fix-overflow" data-addscrollposition="true" style="position:fixed">
            <div class="layout-inner">
                <div class="popup-header" @click="enEdition = false">
                    <i class="caret-left"></i>
                    {{ $t("retourConfigurateur") }}
                </div>
                <div class="popup-content">
                    <h2>{{$t(nodeState.optionName)}}</h2>

                    <div class="lookup-groups">
                        <div class="image-selection in-popup">
                            <div
                                v-for="(optionValue, index) in nodeState.optionValues"
                                class="item"
                                @click="selectItem(index)"
                            >
                                <div class="content">
                                    <button disabled>
                                        <div class="image">
                                            <div
                                                class="lego-image"
                                                :data-src="optionValue.imageUrl"
                                                :style="'background-image: url(' + optionValue.imageUrl + ');'"
                                            ></div>
                                        </div>
                                        <div class="text">
                                            <p class="icon">
                                                <label for="radio3"></label>
                                            </p>

                                            <p>{{ $t(optionValue.valueName) }}</p>
                                        </div>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<style>
/* hide mask in common.css */
.popup.v2:before {
    opacity: 0;
}

.fade-enter-active.mask,
.fade-leave-active.mask {
    transition: opacity .7s;
}
.fade-enter.mask,
.fade-leave-to.mask {
    opacity: 0;
}
.fade-enter-to.mask {
    opacity: 0.7;
}

.mask {
    position: fixed;
    top: 0;
    right: 0;
    left: 0;
    bottom: 0;
    background-color: #ebf1f5;
    z-index: 800;
    opacity: 0.7;
}
</style>