import { IProtoType } from './IProtoType'

export class ProtoType implements IProtoType {
    // A Concrete Class
    field: number[]
   
    constructor(field: number[]) {
        this.field = field // any value of any type
    }

    clone() {
        return Object.assign({}, this) // shallow copy
        // return JSON.parse(JSON.stringify(this)); //deep copy
    }
}

