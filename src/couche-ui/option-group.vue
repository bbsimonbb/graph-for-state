<script>
export default {
    props: ['nodeName'],
    inject: ['bibState','bib'],
    data(){return {open:false}}
}
</script>
<template>
        <div :class="{
            'accordion-item':true,
            'option-group':true,
            'sby-open': open
        }">
        <div class="accordion-item-heading">
            <div class="accordion-item-title">
                <b>+</b>
                <span class>{{ $t(bibState[nodeName].optionGroupName) }}</span>
            </div>

            <div class="accordion-item-title-right">
                <button
                    value="2"
                    class
                    name="Quotation.OptionGroupModels[1].BtnOptionGroupId"
                    type="submit"
                >
                    <span class="price">{{$eur( bibState[nodeName].optionGroupPrice || 0) }}</span>
                </button>
            </div>
        </div>
        <div class="accordion-item-heading-separator"></div>

        <div class="accordion-item-content">
            <slot></slot>
        </div>
    </div>
</template>