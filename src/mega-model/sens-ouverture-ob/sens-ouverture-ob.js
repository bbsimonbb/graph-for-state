import optionGroup from "../option-group"

var myOptionGroup = new optionGroup()

myOptionGroup.outputVal.optionGroupName="sensOuvertureOb";
myOptionGroup.dependsOn = ['sensOuverture','oscilloBattant']
export default myOptionGroup