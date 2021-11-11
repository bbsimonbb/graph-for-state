export interface node{
    d?:object,
    dependsOn?:Array<string>,
    emitChanged():void,
    onUpstreamChange():boolean // return true if ouputVal changed
}