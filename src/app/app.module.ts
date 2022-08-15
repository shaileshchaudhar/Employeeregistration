import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RegistrationComponent } from 'src/employeeRegistration/employeeRegistration.component';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EmployeeModuleModule } from './employee-module/employee-module.module';
import { AccountModuleModule } from './account-module/account-module.module';
import { HRModule } from './hr/hr.module';

@NgModule({
  declarations: [
    AppComponent,RegistrationComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    EmployeeModuleModule,
    AccountModuleModule,
    HRModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
