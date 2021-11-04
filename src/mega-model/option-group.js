function optionGroup() {
    return {
        outputVal: {
            optionGroupPrice: 0
        },
        onUpstreamChange(d) {
            d === null ? 0 :
                this.outputVal.optionGroupPrice = Object.entries(d).reduce((acc, [optionName, option]) => acc += parseFloat(option.optionPrice) || 0, 0)
        }
    }
}

export default optionGroup;