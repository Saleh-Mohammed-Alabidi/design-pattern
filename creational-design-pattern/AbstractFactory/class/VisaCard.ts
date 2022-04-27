/**
 *  visa card
 */

import { IPayment } from '../interface/IPayment'

export class VisaCard implements IPayment {

    getName(): string {
        return "Visa Card"
    } 

    getProviderName(): string {
        return "Visa"
    }


}