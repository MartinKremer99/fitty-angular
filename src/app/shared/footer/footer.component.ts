import { Component } from '@angular/core';
import { Nav } from 'src/app/models/nav';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css'],
})
export class FooterComponent {
  footerNav: Nav[] = [
    {
      link: '/about',
      name: 'About Us',
    },
    {
      link: '/faq',
      name: 'FAQ',
    },
    {
      link: '/policy',
      name: 'Privacy Policy',
    },
    {
      link: '/tos',
      name: 'Terms of Service',
    },
    {
      link: '/contact',
      name: 'Contact',
    },
  ];
}
