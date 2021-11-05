<script>
export default {
    props: ['nodeName', 'openClosedToggle'],
    inject: ['bibState', 'bib'],
    data() { return { closed: true } },
    watch: {
        openClosedToggle(toggle) {
            if (toggle < 0)
                this.closed = true;
            else
                this.closed = false;
        }
    }
}
</script>
<template>
    <div
        :class="{
            'accordion-item': true,
            'option-group': true,
            'sby-closed': closed,
            'expend': !closed
        }"
    >
        <div class="accordion-item-heading">
            <div class="accordion-item-title" @click="closed = !closed">
                <b>{{closed?'+':'-'}}</b>
                <span class>{{ $t(bibState[nodeName].optionGroupName) }}</span>
            </div>

            <div class="accordion-item-title-right">
                <button
                    value="2"
                    class
                    name="Quotation.OptionGroupModels[1].BtnOptionGroupId"
                    type="submit"
                >
                    <span class="price">{{ $eur(bibState[nodeName].optionGroupPrice || 0) }}</span>
                </button>
            </div>
        </div>
        <div class="accordion-item-heading-separator"></div>

        <div class="accordion-item-content">
            <slot></slot>
        </div>
    </div>
</template>
<style>
.accordion-item.option-group {
    max-height: 300px;
    transition: max-height .5s;
    overflow:hidden;
    margin-bottom: 10px;
}
.accordion-item.option-group.sby-closed {
    max-height: 55px;
}
</style>