import optionGroup from "../../mega-model/option-group"

var myOptionGroup = new optionGroup();
myOptionGroup.outputVal.optionGroupName="vitragePetitBois";
myOptionGroup.dependsOn = ['vitrage','petitBois']
export default myOptionGroup