
import { IBank } from './IBank'

export interface IBankFactory {

    geBank(code: string): IBank;

}