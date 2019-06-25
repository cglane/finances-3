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

  updateList(id: number, property: string, event: any) {
    const editField = event.target.textContent;
    this.transactions[id][property] = editField;
    console.log(this.transactions, 'transactions')
  }

  remove(id: any) {
    this.transactions.splice(id, 1);
  }

  add() {
    if (this.transactions.length > 0) {
      const transaction = new Transaction()
      this.transactions.push(transaction);
    }
  }

  changeValue(id: number, property: string, event: any) {
    this.editField = event.target.textContent;
  }
}
