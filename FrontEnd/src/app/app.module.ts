import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';   
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


import { NgxMaskModule, IConfig } from 'ngx-mask'
import { ToastrModule } from 'ngx-toastr';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DebitsListComponent } from './pages/debits-list/debits-list.component';
import { RegisterDebtComponent } from './pages/register-debt/register-debt.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { Modal2Component } from './pages/components/modal2/modal2.component';

export const options: Partial<IConfig> | (() => Partial<IConfig>) = null;

@NgModule({
  declarations: [
    AppComponent,
    DebitsListComponent,
    RegisterDebtComponent,
    Modal2Component
  ],
  imports: [
    CommonModule,
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    NgxMaskModule.forRoot(),
    BrowserAnimationsModule, // required animations module
    ToastrModule.forRoot(), // ToastrModule added
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
