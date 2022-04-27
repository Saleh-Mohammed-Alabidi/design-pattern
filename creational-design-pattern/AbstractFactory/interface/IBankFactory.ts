
import { IBank } from './IBank'
import { IPayment } from './IPayment'

export interface IBankFactory {

    geBank(bankCode: string): IBank;
    
    getPaymentCard(cardNumber: string): IPayment;

}