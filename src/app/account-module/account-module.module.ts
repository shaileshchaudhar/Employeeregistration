import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AccountModuleComponent } from './account-module.component';



@NgModule({
  declarations: [AccountModuleComponent],
  imports: [
    CommonModule
  ],
  exports:[AccountModuleComponent]
})
export class AccountModuleModule { }
