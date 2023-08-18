import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GoalsComponent } from './goals/goals.component';

@NgModule({
  declarations: [GoalsComponent],
  imports: [CommonModule],
  exports: [GoalsComponent],
})
export class GoalsModule {}
