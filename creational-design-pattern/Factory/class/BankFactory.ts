import { IBankFactory } from '../interface/IBankFactory'
import { IBank } from '../interface/IBank'
import { BankA } from '../class/BankA'
import { BankB } from '../class/BankB'

export class BankFactory implements IBankFactory {

    geBank(code: string): IBank {
        switch (code) {
            case '2021': return new BankA();
            case '2022': return new BankB();
            default: return new BankA();
        }


    }

}