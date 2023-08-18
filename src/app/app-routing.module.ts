import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './shared/about/about.component';
import { FaqComponent } from './shared/faq/faq.component';
import { TosComponent } from './shared/tos/tos.component';
import { ContactComponent } from './shared/contact/contact.component';
import { PolicyComponent } from './shared/policy/policy.component';
import { UnauthHomeComponent } from './home/unauth-home/unauth-home.component';
import { GoalsComponent } from './goals/goals/goals.component';
import { GroupsComponent } from './groups/groups/groups.component';
import { AchievementsComponent } from './achievements/achievements/achievements.component';

const routes: Routes = [
  {
    path: '',
    component: UnauthHomeComponent,
    pathMatch: 'full',
  },
  {
    path: 'goals',
    component: GoalsComponent,
    pathMatch: 'full',
  },
  {
    path: 'groups',
    component: GroupsComponent,
    pathMatch: 'full',
  },
  {
    path: 'achievements',
    component: AchievementsComponent,
    pathMatch: 'full',
  },
  {
    path: 'about',
    component: AboutComponent,
    pathMatch: 'full',
  },
  {
    path: 'faq',
    component: FaqComponent,
    pathMatch: 'full',
  },
  {
    path: 'tos',
    component: TosComponent,
    pathMatch: 'full',
  },
  {
    path: 'contact',
    component: ContactComponent,
    pathMatch: 'full',
  },
  {
    path: 'policy',
    component: PolicyComponent,
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
