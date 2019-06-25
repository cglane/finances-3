import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Transaction } from './transaction';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const transactions = [
      { id: 11, amount: -10.0, date: new Date(), location: 'Plaza Park', categoryOne: 'Restaurant Meal', categoryTwo: 'Regular Budget', description: 'Went out to eat with tiffany' },
      { id: 12, amount: -10.0, date: new Date(), location: 'Plaza Park', categoryOne: 'Restaurant Meal', categoryTwo: 'Regular Budget', description: 'Went out to eat with tiffany' },
      { id: 13, amount: -10.0, date: new Date(), location: 'Plaza Park', categoryOne: 'Restaurant Meal', categoryTwo: 'Regular Budget', description: 'Went out to eat with tiffany' },
      { id: 14, amount: -10.0, date: new Date(), location: 'Plaza Park', categoryOne: 'Restaurant Meal', categoryTwo: 'Regular Budget', description: 'Went out to eat with tiffany' },
      { id: 15, amount: -10.0, date: new Date(), location: 'Plaza Park', categoryOne: 'Restaurant Meal', categoryTwo: 'Regular Budget', description: 'Went out to eat with tiffany' },
      { id: 16, amount: -10.0, date: new Date(), location: 'Plaza Park', categoryOne: 'Restaurant Meal', categoryTwo: 'Regular Budget', description: 'Went out to eat with tiffany' },
      { id: 17, amount: -10.0, date: new Date(), location: 'Plaza Park', categoryOne: 'Restaurant Meal', categoryTwo: 'Regular Budget', description: 'Went out to eat with tiffany' },
      { id: 18, amount: -10.0, date: new Date(), location: 'Plaza Park', categoryOne: 'Restaurant Meal', categoryTwo: 'Regular Budget', description: 'Went out to eat with tiffany' },

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