/**
 *  Master card
 */

import { IPayment } from '../interface/IPayment'

export class MasterCard implements IPayment {

    getName(): string {
        return "Master Card"
    } 

    getProviderName(): string {
        return "Master"
    }


}