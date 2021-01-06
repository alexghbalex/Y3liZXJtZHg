import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  getUserName(): Observable<string> {
    return of('Jojo');
  }
}
