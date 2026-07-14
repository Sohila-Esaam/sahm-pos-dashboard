import { Component, HostListener, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterLinkActive } from '@angular/router';


@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [
    CommonModule,
    RouterLink,
    RouterLinkActive
  ],
  templateUrl: './sidebar.html',
  styleUrl: './sidebar.scss'
})
export class Sidebar implements OnInit {

  isCollapsed = false;
  isClosable = true;
  screenWidth = window.innerWidth;
  activeLink: string | null = 'Dashboard';

  menuItems = [
    {
      label: 'Dashboard',
      icon: 'fa-brands fa-codepen',
      path: '/dashboard'
    },
    {
      label: 'Products',
      icon: 'fa-solid fa-utensils',
      path: '/products'
    }
  ];


  ngOnInit() {
    this.checkScreenSize();
  }


setActiveLink(label: string) {
  this.activeLink = label;
}

  toggleSidebar() {
    this.isCollapsed = !this.isCollapsed;
  }


  checkScreenSize() {
    if (this.screenWidth <= 767) {
      this.isCollapsed = true;
      this.isClosable = false;
    } else {
      this.isCollapsed = false;
      this.isClosable = true;
    }
  }


  @HostListener('window:resize')
  onResize() {
    this.screenWidth = window.innerWidth;
    this.checkScreenSize();
  }

}