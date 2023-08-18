import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AboutComponent } from './about/about.component';
import { FaqComponent } from './faq/faq.component';
import { TosComponent } from './tos/tos.component';
import { FooterComponent } from './footer/footer.component';
import { RouterModule } from '@angular/router';
import { PolicyComponent } from './policy/policy.component';
import { ContactComponent } from './contact/contact.component';



@NgModule({
  declarations: [
    AboutComponent,
    FaqComponent,
    TosComponent,
    FooterComponent,
    PolicyComponent,
    ContactComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    AboutComponent,
    FaqComponent,
    AboutComponent,
    FooterComponent,
    PolicyComponent,
    ContactComponent
  ]
})
export class SharedModule { }
