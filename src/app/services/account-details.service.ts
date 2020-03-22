import { Injectable } from '@angular/core';
import { HttpService } from './http-service';
import { Observable } from 'rxjs';
import { AccountDetails } from '../models/account-details';

@Injectable({
  providedIn: 'root'
})
export class AccountDetailsService {

  constructor(private http: HttpService) { }

  // add this url in constant file or env.ts file
  getAccountDetails(): Observable<AccountDetails> {
    return this.http.get("http://starlord.hackerearth.com/bankAccount");
  }

}
