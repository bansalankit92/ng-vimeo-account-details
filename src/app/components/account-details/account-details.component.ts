import { Component, OnInit } from '@angular/core';
import { AccountDetailsService } from 'src/app/services/account-details.service';
import { Observable } from 'rxjs';
import { AccountDetails } from 'src/app/models/account-details';
import { ColumnMode } from '@swimlane/ngx-datatable';

@Component({
  selector: 'app-account-details',
  templateUrl: './account-details.component.html',
  styleUrls: ['./account-details.component.scss']
})
export class AccountDetailsComponent implements OnInit {
  $accountDetails: Observable<AccountDetails>;

  reorderable = true;
			
  columns = [{ prop: 'Account No' }, 
  { prop: 'Date' }, 
  { prop: 'Transaction Details'},
  { prop: 'Value Date' }, 
  { prop: 'Withdrawal AMT' }, 
  { prop: '	Deposit AMT' }, 
  { prop: 'Balance AMT' }] ;

  ColumnMode = ColumnMode;
  constructor(private accountDetails: AccountDetailsService) { }

  ngOnInit() {
    this.$accountDetails = this.accountDetails.getAccountDetails();
  }

}
