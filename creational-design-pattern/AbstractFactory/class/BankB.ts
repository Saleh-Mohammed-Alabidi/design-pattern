
import { IBank } from '../interface/IBank'

export class BankB implements IBank {

    withdraw(): string {
       return "Your request is handling by BankB"
    }

}