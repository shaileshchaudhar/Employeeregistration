import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmployeeModuleComponent } from './employee-module.component';



@NgModule({
  declarations: [EmployeeModuleComponent],
  imports: [
    CommonModule
  ],
  exports:[EmployeeModuleComponent]
})
export class EmployeeModuleModule { }
