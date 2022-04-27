/**
 *  Factory Pattern demo
 */

import { BankFactory } from './class/BankFactory'
import { IBank } from './interface/IBank'

const bankFactory = new BankFactory();

const bank: IBank = bankFactory.geBank('2021')// bank code : BankA code is 2021 <==>  BankB code is 2022

console.log(bank.withdraw())

