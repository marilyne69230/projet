import { Component } from '@angular/core';
import { ITransaction } from '../transaction';
import { TransactionService } from '../transaction.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-transaction',
  templateUrl: './transaction.component.html',
  styleUrls: ['./transaction.component.css']
})
export class TransactionComponent {

  transactionList: ITransaction[] = [];

  budgetMin: number = 1000;
  solde: number = this.budgetMin;

  constructor(private service: TransactionService){}

  // récu^pérer toutes les transactions
  transactions() {
    this.transactionList = this.service.fetchAllTransaction();
    return this.transactionList;
  }

  // formlaire
  onSubmit(form:NgForm) {
    return this.service.add(form.value);
  }

}
