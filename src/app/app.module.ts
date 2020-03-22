import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { AccountDetailsComponent } from './components/account-details/account-details.component';
import { AccountDetailsService } from './services/account-details.service';
import { HttpService } from './services/http-service';
import {NgxPaginationModule} from 'ngx-pagination'; // <-- import the module

@NgModule({
  declarations: [
    AppComponent,
    AccountDetailsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    NgxPaginationModule
  ],
  providers: [HttpService, AccountDetailsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
