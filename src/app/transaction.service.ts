import { Injectable } from '@angular/core';
import { Transaction } from './mock-transaction';
import { ITransaction } from './transaction';

@Injectable({
  providedIn: 'root'
})
export class TransactionService {

  transactionList: ITransaction[] = []; 
  

  constructor() { }

  fetchAllTransaction(){
    return Transaction;
  }

  add(transaction: ITransaction) {
    Transaction.push(transaction);
  }

}