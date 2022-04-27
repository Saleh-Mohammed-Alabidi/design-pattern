import { IBankFactory } from '../interface/IBankFactory'
import { IBank } from '../interface/IBank'
import { IPayment } from '../interface/IPayment'
import { BankA } from './BankA'
import { BankB } from './BankB'
import { VisaCard } from './VisaCard'
import { MasterCard } from './MasterCard'

export class BankFactory implements IBankFactory {

    geBank(bankCode: string): IBank {
        switch (bankCode) {
            case '2021': return new BankA();
            case '2022': return new BankB();
            default: return new BankA();
        }
    }

    getPaymentCard(cardNumber: string): IPayment {
        switch (cardNumber) {
            case '2023': return new VisaCard();
            case '2024': return new MasterCard();
            default: return new VisaCard();
        }
    }

}