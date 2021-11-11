import optionGroup from "../../mega-model/option-group"

var myOptionGroup = new optionGroup();
myOptionGroup.name = 'vitragePetitBois';
myOptionGroup.outputVal.optionGroupName="vitragePetitBois";
myOptionGroup.dependsOn = ['vitrage','petitBois']
export default myOptionGroup