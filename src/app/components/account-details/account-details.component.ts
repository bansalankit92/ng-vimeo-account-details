import { Component, OnInit } from '@angular/core';
import { AccountDetailsService } from 'src/app/services/account-details.service';
import { Observable } from 'rxjs';
import { AccountDetails } from 'src/app/models/account-details';

@Component({
  selector: 'app-account-details',
  templateUrl: './account-details.component.html',
  styleUrls: ['./account-details.component.scss']
})
export class AccountDetailsComponent implements OnInit {
  $accountDetails: Observable<AccountDetails>;
  constructor(private accountDetails: AccountDetailsService) { }

  ngOnInit() {
    this.$accountDetails = this.accountDetails.getAccountDetails();
  }

}
