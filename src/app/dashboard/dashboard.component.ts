import { Component, OnInit, ViewChild } from '@angular/core';
import { MatButtonModule, MatMenuModule, MatIconModule } from '@angular/material';
import { TransactionService } from '../transaction.service';
import { Transaction } from '../transaction';
import { MatTabGroup } from '@angular/material';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  transactions: Transaction[];
  displayedColumns: string[] = ['position', 'date', 'amount', 'location', 'categoryOne', 'categoryTwo', 'description'];
  constructor(private transactionService: TransactionService) { }
  @ViewChild(MatTabGroup) tabGroup: MatTabGroup;

  ngOnInit() {
    this.getTransactions();

    // Default to second tab for development
    this.tabGroup.selectedIndex = 1;
  }

  getTransactions(): void {
    this.transactionService.getTransactions()
      .subscribe(transactions => this.transactions = transactions);
  }
  editField: string;

  updateList(index: number, property: string, event: any) {
    let transaction = this.transactions[index]
    if (transaction) {
      const editField = event.target.textContent;
      transaction[property] = editField
      this.transactionService.updateTransaction(transaction).subscribe()
    }
  }

  remove(index: any) {
    let transaction = this.transactions[index]
    this.transactionService.deleteTransaction(transaction).subscribe();
    this.transactions.splice(index, 1);
  }

  add() {
    this.transactionService.addTransaction(new Transaction)
      .subscribe(transaction => {
        this.transactions.push(transaction);
        console.log(this.transactions, 'trans')
      });
  }

  changeValue(id: number, property: string, event: any) {
    this.editField = event.target.textContent;
  }
}
