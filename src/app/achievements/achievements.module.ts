import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AchievementsComponent } from './achievements/achievements.component';



@NgModule({
  declarations: [
    AchievementsComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    AchievementsComponent
  ]
})
export class AchievementsModule { }
