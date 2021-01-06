import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { Observable, Subject } from 'rxjs';

export interface Result {
  API: string;
  Description: string;
  Category: string;
  Link: string;
  HTTPS: boolean;
}

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private apiUrl = 'https://api.publicapis.org/entries';
  params = new HttpParams();
  currentData = new Subject<Result>();

  constructor(private http: HttpClient) {
    this.getData();
  }

  getData(request: string = ''): void {
    this.http.get(this.apiUrl, {params: {title: request}})
      .pipe(catchError(() => null))
      .subscribe((data: any) => this.currentData.next(data && data.entries));
  }

  getCurrentData(): Observable<Result> {
    return this.currentData;
  }
}
