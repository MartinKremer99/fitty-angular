import { Component, OnInit } from '@angular/core';
import { Nav } from 'src/app/models/nav';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  headerNav: Nav[] = [
    {
      link: '/',
      name: 'Home',
    },
    {
      link: '/goals',
      name: 'Goals',
    },
    {
      link: '/groups',
      name: 'Groups',
    },
    {
      link: '/achievements',
      name: 'Achievements',
    },
  ];

  authNav: Nav[] = [
    {
      link: '/profile',
      name: 'Profile',
    },
    {
      link: '/account',
      name: 'Account',
    },
    {
      link: '/settings',
      name: 'Settings',
    },
  ]

  unAuth: Nav[] = [
    {
      link: '/signin',
      name: 'Sign In',
    },
    {
      link: '/signup',
      name: 'Sign Up',
    },
  ]

  constructor() { }

  ngOnInit() {
  }



}
