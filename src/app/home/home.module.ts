import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UnauthHomeComponent } from './unauth-home/unauth-home.component';



@NgModule({
  declarations: [
    UnauthHomeComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    UnauthHomeComponent
  ]
})
export class HomeModule { }
