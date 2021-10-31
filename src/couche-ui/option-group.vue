<script>
export default {
    props: ['nodeName'],
    inject: ['bibState','bib'],
}
</script>
<template>
    <div class="accordion-item option-group expend">
        <input
            id="Quotation_OptionGroupModels_1__Id"
            name="Quotation.OptionGroupModels[1].Id"
            tabindex="-1"
            type="hidden"
            value="2"
        />

        <div class="accordion-item-heading">
            <div class="accordion-item-title">
                <i class="minus-square"></i>
                <span class>{{ $t(bibState[nodeName].optionGroupName) }}</span>
            </div>

            <div class="accordion-item-title-right">
                <button
                    value="2"
                    class
                    name="Quotation.OptionGroupModels[1].BtnOptionGroupId"
                    type="submit"
                >
                    <span class="price">{{ bibState[nodeName].optionGroupPrice }} €</span>
                </button>
            </div>
        </div>
        <div class="accordion-item-heading-separator"></div>

        <div class="accordion-item-content">
            <slot></slot>
        </div>
    </div>
</template>