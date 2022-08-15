import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HRComponent } from '../hr/hr.component';



@NgModule({
  declarations: [
    HRComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[HRComponent]
})
export class HRModule { }
