<script>
import dimensionsEtQuantite from './dimensions-et-quantite.vue';
import optionGroup from './option-group.vue'
import option from './option.vue'
import ticketCaisse from './ticket-caisse/ticket-caisse.vue';


export default {
    inject: ['bibState'],
    data: function () {
        return { bibState: this.bibState }
    },
    components: {
        'dimensions-et-quantite': dimensionsEtQuantite,
        'elcia-option-group': optionGroup,
        'elcia-option': option,
        'ticket-caisse':ticketCaisse
    },
    mounted() {
        console.log("cobber");
        console.log(this.$bibState);
    }
}
</script>
<template>
    <div>
        <div class="loader" style="display:none;">
            <i class="custom-gif mypricer"></i>
            <span class="sr-only">...</span>
        </div>
        <div
            id="page-content"
            class="container-fluid fix-overflow-container"
            style="background-image: url(https://ecb-preprod.elciaonline.com/Content/ECB/v2/images/texture_fondmypricer.jpg);"
        >
            <div id="quote-quote">
                <div class="form v2">
                    <form>
                        <input id="Sequence" name="Sequence" tabindex="-1" type="hidden" value="21" />
                        <input
                            id="FormId"
                            name="FormId"
                            tabindex="-1"
                            type="hidden"
                            value="fdc7ae83-cdd8-402b-907a-e80cf3a6f31a"
                        />
                        <button disabled="true" class="quotationSubmit outside-screen"></button>
                        <div class="page-content-outer">
                            <div class="wizard">
                                <button disabled="true" class="wizard-step">
                                    <div class="wizard-title" data-number="1">
                                        <span>{{ $t('choixBibliothèque') }}</span>
                                    </div>
                                    <div class="wizard-text">
                                        <span>{{ $t("bobbyMenuiseriesPvc2019") }}</span>
                                    </div>
                                </button>
                                <div class="wizard-separator">
                                    <span></span>
                                </div>
                                <button
                                    value="True"
                                    class="wizard-step"
                                    name="Quotation.Header.BtnGoToRangeSelection"
                                    tabindex="-1"
                                    title="Menuiseries"
                                    type="submit"
                                >
                                    <div class="wizard-title" data-number="2">
                                        <span>{{ $t("choixFamille") }}</span>
                                    </div>
                                    <div class="wizard-text">
                                        <span>{{ $t("menuiseries") }}</span>
                                    </div>
                                </button>
                                <div class="wizard-separator">
                                    <span></span>
                                </div>
                                <button
                                    value="True"
                                    class="wizard-step"
                                    name="Quotation.Header.BtnGoToProductSelection"
                                    tabindex="-1"
                                    title="Fenêtre 2 vantaux"
                                    type="submit"
                                >
                                    <div class="wizard-title" data-number="3">
                                        <span>{{ $t("choixProduit") }}</span>
                                    </div>
                                    <div class="wizard-text">
                                        <span>{{ $t("fenêtre2Vantaux") }}</span>
                                    </div>
                                </button>

                                <div class="wizard-separator">
                                    <span></span>
                                </div>
                                <div class="wizard-step active">
                                    <div class="wizard-title" data-number="4">
                                        <span>{{ $t("configurationDuProduit") }}</span>
                                    </div>
                                    <div class="wizard-text">
                                        <span>&nbsp;</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="page-content-inner filled rounded">
                            <div class="quotation-layout">
                                <div class="col-1">
                                    <div class="header">
                                        <div class="title">
                                            <h4 class="v2">
                                                <strong>{{ $t("fenêtre2Vantaux") }}</strong>
                                            </h4>
                                        </div>
                                    </div>

                                    <div class="subheader">
                                        <div class="technicalValidationArea">
                                            <button
                                                value
                                                class="outside-screen"
                                                data-savescroll="true"
                                                id="BtnTechnicalValidation"
                                                name="Quotation.BtnTechnicalValidation"
                                                tabindex="-1"
                                                type="submit"
                                            ></button>

                                            <input
                                                id="Quotation_TechnicalValidation"
                                                name="Quotation.TechnicalValidation"
                                                type="checkbox"
                                                value="true"
                                            />
                                            <input
                                                name="Quotation.TechnicalValidation"
                                                type="hidden"
                                                value="false"
                                            />
                                            <label
                                                for="Quotation_TechnicalValidation"
                                            >{{ $t("renseignerDonnées") }}</label>
                                        </div>

                                        <div class="accordion-allopenclose">
                                            <div>
                                                <button
                                                    id="BtnAllOpened"
                                                    value="True"
                                                    class="second"
                                                    name="Quotation.BtnAllAccordionOpened"
                                                    tabindex="-1"
                                                    type="submit"
                                                >
                                                    <i class="plus-square-o"></i>
                                                    {{ $t("toutOuvrir") }}
                                                </button>
                                            </div>
                                            <div>
                                                <button
                                                    id="BtnAllClosed"
                                                    value="True"
                                                    class="second"
                                                    name="Quotation.BtnAllAccordionClosed"
                                                    tabindex="-1"
                                                    type="submit"
                                                >
                                                    <i class="minus-square-o"></i>
                                                    {{ $t("toutFermer") }}
                                                </button>
                                            </div>
                                        </div>

                                        <div class="more-infos">
                                            <div class="product-image-opened">
                                                <button
                                                    value="True"
                                                    class="second"
                                                    name="Quotation.ProductImageModel.BtnOpenPopup"
                                                    tabindex="-1"
                                                    type="submit"
                                                >
                                                    <i class="picture-o"></i>
                                                    {{ $t("voirMonProduit") }}
                                                </button>
                                            </div>

                                            <div class="observation">
                                                <button
                                                    value="True"
                                                    class="second"
                                                    name="Quotation.ObservationModel.BtnOpenPopup"
                                                    tabindex="-1"
                                                    type="submit"
                                                >
                                                    <i class="comment-o"></i>
                                                    {{ $t("ajoutObservations") }}
                                                </button>
                                            </div>
                                        </div>
                                    </div>

                                    <div class="accordion">
                                        <dimensions-et-quantite></dimensions-et-quantite>
                                        <elcia-option-group nodeName="gammeCouleurForme">
                                            <elcia-option nodeName="gamme"></elcia-option>
                                            <elcia-option nodeName="couleur"></elcia-option>
                                            <elcia-option nodeName="forme"></elcia-option>
                                        </elcia-option-group>
                                        <elcia-option-group nodeName="typeCoteDormantHabillage">
                                            <elcia-option nodeName="typePose"></elcia-option>
                                            <elcia-option nodeName="typeCote"></elcia-option>
                                            <elcia-option nodeName="dormant"></elcia-option>
                                            <elcia-option nodeName="appuiEtSeuil"></elcia-option>
                                        </elcia-option-group>
                                        <elcia-option-group nodeName="sensOuvertureOb">
                                            <elcia-option nodeName="sensOuverture"></elcia-option>
                                            <elcia-option nodeName="oscilloBattant"></elcia-option>
                                        </elcia-option-group>
                                        <elcia-option-group nodeName="vitragePetitBois">
                                            <elcia-option nodeName="vitrage"></elcia-option>
                                            <elcia-option nodeName="petitBois"></elcia-option>
                                        </elcia-option-group>
                                        
                                    </div>
                                </div>

                                <div class="col-2">
                                    <div style="display:flex">
                                        <img
                                            alt="United States"
                                            src="http://purecatamphetamine.github.io/country-flag-icons/3x2/FR.svg"
                                            style="height:20px"
                                            @click="$i18n.locale = 'fr'"
                                        />
                                        <img
                                            alt="United States"
                                            src="http://purecatamphetamine.github.io/country-flag-icons/3x2/GB.svg"
                                            style="height:20px"
                                            @click="$i18n.locale = 'en'"
                                        />
                                    </div>
                                    <div class="more-infos-product">
                                        <div class="complement-description">
                                            <i class="info-circle"></i>Descriptifs
                                        </div>
                                    </div>

                                    <div class="product-image-opened">
                                        <input
                                            id="Quotation_ProductImageModel_ButtonImageUrl"
                                            name="Quotation.ProductImageModel.ButtonImageUrl"
                                            tabindex="-1"
                                            type="hidden"
                                            value="https://ecb-preprod.elciaonline.com/api/v2.0/images/product..svg?rid=JiNUWVBFX0YyT0JEIyNDT0xfQkxBTi8xNDAwLzEzNTAvMTQwLzMwMC9UcnVlL2Y4NWZjYmRhYWUxYTRjMzc4NDRjYjY3NjRlOGQxMjkx.svg&amp;pricerCode=001&amp;pricerVersionId=5066&amp;productCode=F2&amp;brandCode=2031&amp;rangeCode=SIMPLE&amp;imageName="
                                        />
                                        <div class="product-image">
                                            <button
                                                id="BtnOpenPopupProductImage"
                                                value="True"
                                                class
                                                name="Quotation.ProductImageModel.BtnOpenPopup"
                                                tabindex="-1"
                                                type="submit"
                                            >
                                                <div
                                                    class="lego-image"
                                                    data-src="https://ecb-preprod.elciaonline.com/api/v2.0/images/product..svg?rid=JiNUWVBFX0YyT0JEIyNDT0xfQkxBTi8xNDAwLzEzNTAvMTQwLzMwMC9UcnVlL2Y4NWZjYmRhYWUxYTRjMzc4NDRjYjY3NjRlOGQxMjkx.svg&amp;pricerCode=001&amp;pricerVersionId=5066&amp;productCode=F2&amp;brandCode=2031&amp;rangeCode=SIMPLE&amp;imageName="
                                                    data-senddimensions="true"
                                                >
                                                    <svg
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        xmlns:xlink="http://www.w3.org/1999/xlink"
                                                        width="100%"
                                                        height="100%"
                                                        overflow="inherit"
                                                        viewBox="0, 0, 200, 194"
                                                        preserveAspectRatio="xMidYMid"
                                                        version="1.1"
                                                    >
                                                        <rect
                                                            xmlns="http://www.w3.org/2000/svg"
                                                            x="0"
                                                            y="0"
                                                            width="200"
                                                            height="194"
                                                            rx="0"
                                                            ry="0"
                                                            fill="#FFFFFF"
                                                            fill-opacity="1"
                                                        />
                                                        <defs xmlns="http://www.w3.org/2000/svg">
                                                            <linearGradient
                                                                x1="0%"
                                                                y1="0%"
                                                                x2="0%"
                                                                y2="99.99%"
                                                                gradientUnits="userSpaceOnUse"
                                                                id="89b7b178-857c-457f-b9cd-2e8eac74608e"
                                                            >
                                                                <stop
                                                                    offset="0%"
                                                                    stop-color="#79C2FF"
                                                                    opacity="1"
                                                                />
                                                                <stop
                                                                    offset="100%"
                                                                    stop-color="#E1F1FF"
                                                                    opacity="1"
                                                                />
                                                            </linearGradient>
                                                            <linearGradient
                                                                x1="0%"
                                                                y1="0%"
                                                                x2="0%"
                                                                y2="99.99%"
                                                                gradientUnits="userSpaceOnUse"
                                                                id="909e7e77-a80a-490a-a16e-85e6a2a3f390"
                                                            >
                                                                <stop
                                                                    offset="0%"
                                                                    stop-color="#79C2FF"
                                                                    opacity="1"
                                                                />
                                                                <stop
                                                                    offset="100%"
                                                                    stop-color="#E1F1FF"
                                                                    opacity="1"
                                                                />
                                                            </linearGradient>
                                                        </defs>
                                                        <polygon
                                                            xmlns="http://www.w3.org/2000/svg"
                                                            points="11,155 11,11 80,11 80,155 11,155"
                                                            stroke-width="0"
                                                            stroke-opacity="0"
                                                            style="fill:url(#89b7b178-857c-457f-b9cd-2e8eac74608e);stroke:#000000;"
                                                        />
                                                        <polygon
                                                            xmlns="http://www.w3.org/2000/svg"
                                                            points="94,155 94,11 162,11 162,155 94,155"
                                                            stroke-width="0"
                                                            stroke-opacity="0"
                                                            style="fill:url(#909e7e77-a80a-490a-a16e-85e6a2a3f390);stroke:#000000;"
                                                        />
                                                        <polyline
                                                            xmlns="http://www.w3.org/2000/svg"
                                                            points="0,0 8,8"
                                                            stroke-width="1.242857"
                                                            stroke-linecap="round"
                                                            stroke-linejoin="round"
                                                            style="fill:none;stroke:#FFFFFF;"
                                                        />
                                                        <polyline
                                                            xmlns="http://www.w3.org/2000/svg"
                                                            points="8,159 0,167"
                                                            stroke-width="1.242857"
                                                            stroke-linecap="round"
                                                            stroke-linejoin="round"
                                                            style="fill:none;stroke:#FFFFFF;"
                                                        />
                                                        <polyline
                                                            xmlns="http://www.w3.org/2000/svg"
                                                            points="173,0 165,8"
                                                            stroke-width="1.242857"
                                                            stroke-linecap="round"
                                                            stroke-linejoin="round"
                                                            style="fill:none;stroke:#FFFFFF;"
                                                        />
                                                        <polyline
                                                            xmlns="http://www.w3.org/2000/svg"
                                                            points="8,8 0,0"
                                                            stroke-width="1.242857"
                                                            stroke-linecap="round"
                                                            stroke-linejoin="round"
                                                            style="fill:none;stroke:#FFFFFF;"
                                                        />
                                                        <polyline
                                                            xmlns="http://www.w3.org/2000/svg"
                                                            points="173,167 165,159"
                                                            stroke-width="1.242857"
                                                            stroke-linecap="round"
                                                            stroke-linejoin="round"
                                                            style="fill:none;stroke:#FFFFFF;"
                                                        />
                                                        <polyline
                                                            xmlns="http://www.w3.org/2000/svg"
                                                            points="165,8 173,0"
                                                            stroke-width="1.242857"
                                                            stroke-linecap="round"
                                                            stroke-linejoin="round"
                                                            style="fill:none;stroke:#FFFFFF;"
                                                        />
                                                        <polyline
                                                            xmlns="http://www.w3.org/2000/svg"
                                                            points="0,167 8,159"
                                                            stroke-width="1.242857"
                                                            stroke-linecap="round"
                                                            stroke-linejoin="round"
                                                            style="fill:none;stroke:#FFFFFF;"
                                                        />
                                                        <polyline
                                                            xmlns="http://www.w3.org/2000/svg"
                                                            points="165,159 173,167"
                                                            stroke-width="1.242857"
                                                            stroke-linecap="round"
                                                            stroke-linejoin="round"
                                                            style="fill:none;stroke:#FFFFFF;"
                                                        />
                                                        <polygon
                                                            xmlns="http://www.w3.org/2000/svg"
                                                            points="0,167 0,0 8,8 8,159 0,167"
                                                            stroke-width="0"
                                                            stroke-opacity="0"
                                                            style="fill:#FFFFFF;stroke:#000000;"
                                                        />
                                                        <polyline
                                                            xmlns="http://www.w3.org/2000/svg"
                                                            points="0,167 0,0"
                                                            stroke-width="1.242857"
                                                            stroke-linecap="round"
                                                            stroke-linejoin="round"
                                                            style="fill:none;stroke:#000000;"
                                                        />
                                                        <polyline
                                                            xmlns="http://www.w3.org/2000/svg"
                                                            points="8,8 8,159"
                                                            stroke-width="1.242857"
                                                            stroke-linecap="round"
                                                            stroke-linejoin="round"
                                                            style="fill:none;stroke:#000000;"
                                                        />
                                                        <polygon
                                                            xmlns="http://www.w3.org/2000/svg"
                                                            points="0,0 173,0 165,8 8,8 0,0"
                                                            stroke-width="0"
                                                            stroke-opacity="0"
                                                            style="fill:#FFFFFF;stroke:#000000;"
                                                        />
                                                        <polyline
                                                            xmlns="http://www.w3.org/2000/svg"
                                                            points="0,0 173,0"
                                                            stroke-width="1.242857"
                                                            stroke-linecap="round"
                                                            stroke-linejoin="round"
                                                            style="fill:none;stroke:#000000;"
                                                        />
                                                        <polyline
                                                            xmlns="http://www.w3.org/2000/svg"
                                                            points="165,8 8,8"
                                                            stroke-width="1.242857"
                                                            stroke-linecap="round"
                                                            stroke-linejoin="round"
                                                            style="fill:none;stroke:#000000;"
                                                        />
                                                        <polygon
                                                            xmlns="http://www.w3.org/2000/svg"
                                                            points="173,0 173,167 165,159 165,8 173,0"
                                                            stroke-width="0"
                                                            stroke-opacity="0"
                                                            style="fill:#FFFFFF;stroke:#000000;"
                                                        />
                                                        <polyline
                                                            xmlns="http://www.w3.org/2000/svg"
                                                            points="173,0 173,167"
                                                            stroke-width="1.242857"
                                                            stroke-linecap="round"
                                                            stroke-linejoin="round"
                                                            style="fill:none;stroke:#000000;"
                                                        />
                                                        <polyline
                                                            xmlns="http://www.w3.org/2000/svg"
                                                            points="165,159 165,8"
                                                            stroke-width="1.242857"
                                                            stroke-linecap="round"
                                                            stroke-linejoin="round"
                                                            style="fill:none;stroke:#000000;"
                                                        />
                                                        <polygon
                                                            xmlns="http://www.w3.org/2000/svg"
                                                            points="173,167 0,167 8,159 165,159 173,167"
                                                            stroke-width="0"
                                                            stroke-opacity="0"
                                                            style="fill:#FFFFFF;stroke:#000000;"
                                                        />
                                                        <polyline
                                                            xmlns="http://www.w3.org/2000/svg"
                                                            points="173,167 0,167"
                                                            stroke-width="1.242857"
                                                            stroke-linecap="round"
                                                            stroke-linejoin="round"
                                                            style="fill:none;stroke:#000000;"
                                                        />
                                                        <polyline
                                                            xmlns="http://www.w3.org/2000/svg"
                                                            points="8,159 165,159"
                                                            stroke-width="1.242857"
                                                            stroke-linecap="round"
                                                            stroke-linejoin="round"
                                                            style="fill:none;stroke:#000000;"
                                                        />
                                                        <polyline
                                                            xmlns="http://www.w3.org/2000/svg"
                                                            points="4,4 13,13"
                                                            stroke-width="1.242857"
                                                            stroke-linecap="round"
                                                            stroke-linejoin="round"
                                                            style="fill:none;stroke:#FFFFFF;"
                                                        />
                                                        <polyline
                                                            xmlns="http://www.w3.org/2000/svg"
                                                            points="13,154 4,162"
                                                            stroke-width="1.242857"
                                                            stroke-linecap="round"
                                                            stroke-linejoin="round"
                                                            style="fill:none;stroke:#FFFFFF;"
                                                        />
                                                        <polyline
                                                            xmlns="http://www.w3.org/2000/svg"
                                                            points="87,4 79,13"
                                                            stroke-width="1.242857"
                                                            stroke-linecap="round"
                                                            stroke-linejoin="round"
                                                            style="fill:none;stroke:#FFFFFF;"
                                                        />
                                                        <polyline
                                                            xmlns="http://www.w3.org/2000/svg"
                                                            points="13,13 4,4"
                                                            stroke-width="1.242857"
                                                            stroke-linecap="round"
                                                            stroke-linejoin="round"
                                                            style="fill:none;stroke:#FFFFFF;"
                                                        />
                                                        <polyline
                                                            xmlns="http://www.w3.org/2000/svg"
                                                            points="87,162 79,154"
                                                            stroke-width="1.242857"
                                                            stroke-linecap="round"
                                                            stroke-linejoin="round"
                                                            style="fill:none;stroke:#FFFFFF;"
                                                        />
                                                        <polyline
                                                            xmlns="http://www.w3.org/2000/svg"
                                                            points="79,13 87,4"
                                                            stroke-width="1.242857"
                                                            stroke-linecap="round"
                                                            stroke-linejoin="round"
                                                            style="fill:none;stroke:#FFFFFF;"
                                                        />
                                                        <polyline
                                                            xmlns="http://www.w3.org/2000/svg"
                                                            points="4,162 13,154"
                                                            stroke-width="1.242857"
                                                            stroke-linecap="round"
                                                            stroke-linejoin="round"
                                                            style="fill:none;stroke:#FFFFFF;"
                                                        />
                                                        <polyline
                                                            xmlns="http://www.w3.org/2000/svg"
                                                            points="79,154 87,162"
                                                            stroke-width="1.242857"
                                                            stroke-linecap="round"
                                                            stroke-linejoin="round"
                                                            style="fill:none;stroke:#FFFFFF;"
                                                        />
                                                        <polygon
                                                            xmlns="http://www.w3.org/2000/svg"
                                                            points="4,162 4,4 13,13 13,154 4,162"
                                                            stroke-width="0"
                                                            stroke-opacity="0"
                                                            style="fill:#FFFFFF;stroke:#000000;"
                                                        />
                                                        <polyline
                                                            xmlns="http://www.w3.org/2000/svg"
                                                            points="4,162 4,4"
                                                            stroke-width="1.242857"
                                                            stroke-linecap="round"
                                                            stroke-linejoin="round"
                                                            style="fill:none;stroke:#000000;"
                                                        />
                                                        <polyline
                                                            xmlns="http://www.w3.org/2000/svg"
                                                            points="13,13 13,154"
                                                            stroke-width="1.242857"
                                                            stroke-linecap="round"
                                                            stroke-linejoin="round"
                                                            style="fill:none;stroke:#000000;"
                                                        />
                                                        <polygon
                                                            xmlns="http://www.w3.org/2000/svg"
                                                            points="4,4 87,4 79,13 13,13 4,4"
                                                            stroke-width="0"
                                                            stroke-opacity="0"
                                                            style="fill:#FFFFFF;stroke:#000000;"
                                                        />
                                                        <polyline
                                                            xmlns="http://www.w3.org/2000/svg"
                                                            points="4,4 87,4"
                                                            stroke-width="1.242857"
                                                            stroke-linecap="round"
                                                            stroke-linejoin="round"
                                                            style="fill:none;stroke:#000000;"
                                                        />
                                                        <polyline
                                                            xmlns="http://www.w3.org/2000/svg"
                                                            points="79,13 13,13"
                                                            stroke-width="1.242857"
                                                            stroke-linecap="round"
                                                            stroke-linejoin="round"
                                                            style="fill:none;stroke:#000000;"
                                                        />
                                                        <polygon
                                                            xmlns="http://www.w3.org/2000/svg"
                                                            points="87,4 87,162 79,154 79,13 87,4"
                                                            stroke-width="0"
                                                            stroke-opacity="0"
                                                            style="fill:#FFFFFF;stroke:#000000;"
                                                        />
                                                        <polyline
                                                            xmlns="http://www.w3.org/2000/svg"
                                                            points="87,4 87,162"
                                                            stroke-width="1.242857"
                                                            stroke-linecap="round"
                                                            stroke-linejoin="round"
                                                            style="fill:none;stroke:#000000;"
                                                        />
                                                        <polyline
                                                            xmlns="http://www.w3.org/2000/svg"
                                                            points="79,154 79,13"
                                                            stroke-width="1.242857"
                                                            stroke-linecap="round"
                                                            stroke-linejoin="round"
                                                            style="fill:none;stroke:#000000;"
                                                        />
                                                        <polygon
                                                            xmlns="http://www.w3.org/2000/svg"
                                                            points="87,162 4,162 13,154 79,154 87,162"
                                                            stroke-width="0"
                                                            stroke-opacity="0"
                                                            style="fill:#FFFFFF;stroke:#000000;"
                                                        />
                                                        <polyline
                                                            xmlns="http://www.w3.org/2000/svg"
                                                            points="87,162 4,162"
                                                            stroke-width="1.242857"
                                                            stroke-linecap="round"
                                                            stroke-linejoin="round"
                                                            style="fill:none;stroke:#000000;"
                                                        />
                                                        <polyline
                                                            xmlns="http://www.w3.org/2000/svg"
                                                            points="13,154 79,154"
                                                            stroke-width="1.242857"
                                                            stroke-linecap="round"
                                                            stroke-linejoin="round"
                                                            style="fill:none;stroke:#000000;"
                                                        />
                                                        <polyline
                                                            xmlns="http://www.w3.org/2000/svg"
                                                            points="87,4 95,13"
                                                            stroke-width="1.242857"
                                                            stroke-linecap="round"
                                                            stroke-linejoin="round"
                                                            style="fill:none;stroke:#FFFFFF;"
                                                        />
                                                        <polyline
                                                            xmlns="http://www.w3.org/2000/svg"
                                                            points="95,154 87,162"
                                                            stroke-width="1.242857"
                                                            stroke-linecap="round"
                                                            stroke-linejoin="round"
                                                            style="fill:none;stroke:#FFFFFF;"
                                                        />
                                                        <polyline
                                                            xmlns="http://www.w3.org/2000/svg"
                                                            points="169,4 160,13"
                                                            stroke-width="1.242857"
                                                            stroke-linecap="round"
                                                            stroke-linejoin="round"
                                                            style="fill:none;stroke:#FFFFFF;"
                                                        />
                                                        <polyline
                                                            xmlns="http://www.w3.org/2000/svg"
                                                            points="95,13 87,4"
                                                            stroke-width="1.242857"
                                                            stroke-linecap="round"
                                                            stroke-linejoin="round"
                                                            style="fill:none;stroke:#FFFFFF;"
                                                        />
                                                        <polyline
                                                            xmlns="http://www.w3.org/2000/svg"
                                                            points="169,162 160,154"
                                                            stroke-width="1.242857"
                                                            stroke-linecap="round"
                                                            stroke-linejoin="round"
                                                            style="fill:none;stroke:#FFFFFF;"
                                                        />
                                                        <polyline
                                                            xmlns="http://www.w3.org/2000/svg"
                                                            points="160,13 169,4"
                                                            stroke-width="1.242857"
                                                            stroke-linecap="round"
                                                            stroke-linejoin="round"
                                                            style="fill:none;stroke:#FFFFFF;"
                                                        />
                                                        <polyline
                                                            xmlns="http://www.w3.org/2000/svg"
                                                            points="87,162 95,154"
                                                            stroke-width="1.242857"
                                                            stroke-linecap="round"
                                                            stroke-linejoin="round"
                                                            style="fill:none;stroke:#FFFFFF;"
                                                        />
                                                        <polyline
                                                            xmlns="http://www.w3.org/2000/svg"
                                                            points="160,154 169,162"
                                                            stroke-width="1.242857"
                                                            stroke-linecap="round"
                                                            stroke-linejoin="round"
                                                            style="fill:none;stroke:#FFFFFF;"
                                                        />
                                                        <polygon
                                                            xmlns="http://www.w3.org/2000/svg"
                                                            points="87,162 87,4 95,13 95,154 87,162"
                                                            stroke-width="0"
                                                            stroke-opacity="0"
                                                            style="fill:#FFFFFF;stroke:#000000;"
                                                        />
                                                        <polyline
                                                            xmlns="http://www.w3.org/2000/svg"
                                                            points="87,162 87,4"
                                                            stroke-width="1.242857"
                                                            stroke-linecap="round"
                                                            stroke-linejoin="round"
                                                            style="fill:none;stroke:#000000;"
                                                        />
                                                        <polyline
                                                            xmlns="http://www.w3.org/2000/svg"
                                                            points="95,13 95,154"
                                                            stroke-width="1.242857"
                                                            stroke-linecap="round"
                                                            stroke-linejoin="round"
                                                            style="fill:none;stroke:#000000;"
                                                        />
                                                        <polygon
                                                            xmlns="http://www.w3.org/2000/svg"
                                                            points="87,4 169,4 160,13 95,13 87,4"
                                                            stroke-width="0"
                                                            stroke-opacity="0"
                                                            style="fill:#FFFFFF;stroke:#000000;"
                                                        />
                                                        <polyline
                                                            xmlns="http://www.w3.org/2000/svg"
                                                            points="87,4 169,4"
                                                            stroke-width="1.242857"
                                                            stroke-linecap="round"
                                                            stroke-linejoin="round"
                                                            style="fill:none;stroke:#000000;"
                                                        />
                                                        <polyline
                                                            xmlns="http://www.w3.org/2000/svg"
                                                            points="160,13 95,13"
                                                            stroke-width="1.242857"
                                                            stroke-linecap="round"
                                                            stroke-linejoin="round"
                                                            style="fill:none;stroke:#000000;"
                                                        />
                                                        <polygon
                                                            xmlns="http://www.w3.org/2000/svg"
                                                            points="169,4 169,162 160,154 160,13 169,4"
                                                            stroke-width="0"
                                                            stroke-opacity="0"
                                                            style="fill:#FFFFFF;stroke:#000000;"
                                                        />
                                                        <polyline
                                                            xmlns="http://www.w3.org/2000/svg"
                                                            points="169,4 169,162"
                                                            stroke-width="1.242857"
                                                            stroke-linecap="round"
                                                            stroke-linejoin="round"
                                                            style="fill:none;stroke:#000000;"
                                                        />
                                                        <polyline
                                                            xmlns="http://www.w3.org/2000/svg"
                                                            points="160,154 160,13"
                                                            stroke-width="1.242857"
                                                            stroke-linecap="round"
                                                            stroke-linejoin="round"
                                                            style="fill:none;stroke:#000000;"
                                                        />
                                                        <polygon
                                                            xmlns="http://www.w3.org/2000/svg"
                                                            points="169,162 87,162 95,154 160,154 169,162"
                                                            stroke-width="0"
                                                            stroke-opacity="0"
                                                            style="fill:#FFFFFF;stroke:#000000;"
                                                        />
                                                        <polyline
                                                            xmlns="http://www.w3.org/2000/svg"
                                                            points="169,162 87,162"
                                                            stroke-width="1.242857"
                                                            stroke-linecap="round"
                                                            stroke-linejoin="round"
                                                            style="fill:none;stroke:#000000;"
                                                        />
                                                        <polyline
                                                            xmlns="http://www.w3.org/2000/svg"
                                                            points="95,154 160,154"
                                                            stroke-width="1.242857"
                                                            stroke-linecap="round"
                                                            stroke-linejoin="round"
                                                            style="fill:none;stroke:#000000;"
                                                        />
                                                        <polyline
                                                            xmlns="http://www.w3.org/2000/svg"
                                                            points="4,4 87,84 4,162"
                                                            stroke-width="1.242857"
                                                            stroke-linecap="round"
                                                            stroke-linejoin="round"
                                                            style="fill:none;stroke:#000000;"
                                                        />
                                                        <polyline
                                                            xmlns="http://www.w3.org/2000/svg"
                                                            points="169,4 87,84 169,162"
                                                            stroke-width="1.242857"
                                                            stroke-linecap="round"
                                                            stroke-linejoin="round"
                                                            style="fill:none;stroke:#000000;"
                                                        />
                                                        <polyline
                                                            xmlns="http://www.w3.org/2000/svg"
                                                            points="169,162 127,4 87,162"
                                                            stroke-width="1.242857"
                                                            stroke-linecap="round"
                                                            stroke-linejoin="round"
                                                            style="fill:none;stroke:#000000;"
                                                        />
                                                        <polyline
                                                            xmlns="http://www.w3.org/2000/svg"
                                                            points="0,188 173,188"
                                                            stroke-width="1"
                                                            stroke-linecap="round"
                                                            stroke-linejoin="round"
                                                            style="fill:none;stroke:#000000;"
                                                        />
                                                        <polyline
                                                            xmlns="http://www.w3.org/2000/svg"
                                                            points="0,173 0,193"
                                                            stroke-width="1"
                                                            stroke-linecap="round"
                                                            stroke-linejoin="round"
                                                            style="fill:none;stroke:#000000;"
                                                        />
                                                        <polygon
                                                            xmlns="http://www.w3.org/2000/svg"
                                                            points="1,188 4,185 4,191"
                                                            stroke-width="1"
                                                            style="fill:#000000;stroke:#000000;"
                                                        />
                                                        <polyline
                                                            xmlns="http://www.w3.org/2000/svg"
                                                            points="173,173 173,193"
                                                            stroke-width="1"
                                                            stroke-linecap="round"
                                                            stroke-linejoin="round"
                                                            style="fill:none;stroke:#000000;"
                                                        />
                                                        <polygon
                                                            xmlns="http://www.w3.org/2000/svg"
                                                            points="172,188 169,185 169,191"
                                                            stroke-width="1"
                                                            style="fill:#000000;stroke:#000000;"
                                                        />
                                                        <text
                                                            xmlns="http://www.w3.org/2000/svg"
                                                            x="87"
                                                            y="181.2857"
                                                            transform="rotate(0, 87, 181.2857)"
                                                            text-anchor="middle"
                                                            font-family="Arial"
                                                            font-size="12"
                                                            font-weight="400"
                                                            alignment-baseline="middle"
                                                            style="fill:#000000;"
                                                        >1400</text>
                                                        <polyline
                                                            xmlns="http://www.w3.org/2000/svg"
                                                            points="194,167 194,0"
                                                            stroke-width="1"
                                                            stroke-linecap="round"
                                                            stroke-linejoin="round"
                                                            style="fill:none;stroke:#000000;"
                                                        />
                                                        <polyline
                                                            xmlns="http://www.w3.org/2000/svg"
                                                            points="179,167 199,167"
                                                            stroke-width="1"
                                                            stroke-linecap="round"
                                                            stroke-linejoin="round"
                                                            style="fill:none;stroke:#000000;"
                                                        />
                                                        <polygon
                                                            xmlns="http://www.w3.org/2000/svg"
                                                            points="194,166 197,163 191,163"
                                                            stroke-width="1"
                                                            style="fill:#000000;stroke:#000000;"
                                                        />
                                                        <polyline
                                                            xmlns="http://www.w3.org/2000/svg"
                                                            points="179,0 199,0"
                                                            stroke-width="1"
                                                            stroke-linecap="round"
                                                            stroke-linejoin="round"
                                                            style="fill:none;stroke:#000000;"
                                                        />
                                                        <polygon
                                                            xmlns="http://www.w3.org/2000/svg"
                                                            points="194,1 197,4 191,4"
                                                            stroke-width="1"
                                                            style="fill:#000000;stroke:#000000;"
                                                        />
                                                        <text
                                                            xmlns="http://www.w3.org/2000/svg"
                                                            x="187.5"
                                                            y="83.89286"
                                                            transform="rotate(270, 187.5, 83.89286)"
                                                            text-anchor="middle"
                                                            font-family="Arial"
                                                            font-size="12"
                                                            font-weight="400"
                                                            alignment-baseline="middle"
                                                            style="fill:#000000;"
                                                        >1350</text>
                                                    </svg>
                                                </div>
                                            </button>
                                        </div>
                                    </div>
                                </div>

                                <div class="col-3">
                                    <div class="inner">
<ticket-caisse></ticket-caisse>
                                        <div class="action">
                                            <button
                                                value="True"
                                                class="main"
                                                name="Quotation.BtnSave"
                                                tabindex="-1"
                                                type="submit"
                                            >
                                                <i class="plus-circle">Ajouter ce produit</i>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
</template>