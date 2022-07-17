export interface Typedproduct{
    name:string,
    value:number
}


export function checkProduct(p:Typedproduct){
    return p.name+'got the '+p.value
}

