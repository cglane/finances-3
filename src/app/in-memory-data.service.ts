import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Transaction } from './transaction';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const transactions = [
      { id: 11, name: 'Dr Nice' },
      { id: 12, name: 'Narco' },
      { id: 13, name: 'Bombasto' },
      { id: 14, name: 'Celeritas' },
      { id: 15, name: 'Magneta' },
      { id: 16, name: 'RubberMan' },
      { id: 17, name: 'Dynama' },
      { id: 18, name: 'Dr IQ' },
      { id: 19, name: 'Magma' },
      { id: 20, name: 'Tornado' }
    ];
    return { transactions };
  }

  // Overrides the genId method to ensure that a transaction always has an id.
  // If the transactions array is empty,
  // the method below returns the initial number (11).
  // if the transactions array is not empty, the method below returns the highest
  // transaction id + 1.
  genId(transactions: Transaction[]): number {
    return transactions.length > 0 ? Math.max(...transactions.map(transaction => transaction.id)) + 1 : 11;
  }
}