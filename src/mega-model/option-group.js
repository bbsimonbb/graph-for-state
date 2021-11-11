function optionGroup() {
    return {
        d:{},
        outputVal: {
            optionGroupPrice: 0
        },
        onUpstreamChange() {
            this.d === null ? 0 :
                this.outputVal.optionGroupPrice = Object.entries(this.d).reduce((acc, [optionName, option]) => acc += parseFloat(option.optionPrice) || 0, 0)
            return true;
        }
    }
}

export default optionGroup;