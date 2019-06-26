import { Injectable } from '@angular/core';
import { Transaction } from './transaction';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';
import { Observable, of } from 'rxjs';
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})

export class TransactionService {

  constructor(
    private http: HttpClient,
  ) { }
  private transactionsUrl = 'api/transactions';  // URL to web api

  /**
 * Handle Http operation that failed.
 * Let the app continue.
 * @param operation - name of the operation that failed
 * @param result - optional value to return as the observable result
 */
  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead


      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

  /** GET transactions from the server */
  getTransactions(): Observable<Transaction[]> {
    return this.http.get<Transaction[]>(this.transactionsUrl)
      .pipe(
        catchError(this.handleError<Transaction[]>('getTransactions', []))
      );
  }
  /** GET transaction by id. Will 404 if id not found */
  getTransaction(id: number): Observable<Transaction> {
    const url = `${this.transactionsUrl}/${id}`;
    return this.http.get<Transaction>(url).pipe(
      catchError(this.handleError<Transaction>(`getTransaction id=${id}`))
    );
  }
  /** PUT: update the transaction on the server */
  updateTransaction(transaction: Transaction): Observable<any> {
    return this.http.put(this.transactionsUrl, transaction, httpOptions).pipe(
      catchError(this.handleError<any>('updateTransaction'))
    );
  }
  addTransaction(transaction: Transaction): Observable<Transaction> {
    return this.http.post<Transaction>(this.transactionsUrl, transaction, httpOptions).pipe(
      catchError(this.handleError<Transaction>('addTransaction'))
    );
  }
}
