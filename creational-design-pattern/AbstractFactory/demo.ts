/**
 *  Abstract Factory Pattern demo 
 *  We have More than one product to payment use bank or visa card or master card ...
 */

import { BankFactory } from './class/BankFactory'
import { IBank } from './interface/IBank'
import { IPayment } from './interface/IPayment'

const bankFactory = new BankFactory();

const bank: IBank = bankFactory.geBank('2021')// bank code : BankA code is 2021 <==>  BankB code is 2022
const payment: IPayment = bankFactory.getPaymentCard('2023')// payment code : VisaCard code is 2023 <==>  MasterCard code is 2024

console.log('Payment via BankA ',bank.withdraw())

console.log('Payment Name ',payment.getName()," Payement Provider ",payment.getProviderName())

