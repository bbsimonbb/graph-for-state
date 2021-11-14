export interface node{
    d?:object,
    dependsOn?:Array<string>,
    store:void,
    onUpstreamChange():boolean // return true if ouputVal changed
}