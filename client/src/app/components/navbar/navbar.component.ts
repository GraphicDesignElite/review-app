import { Component, OnInit } from '@angular/core';


@Component({
  moduleId: module.id,
  selector: 'navbar',
  templateUrl: `navbar.component.html`,
})
export class NavbarComponent{
  isCollapsed: boolean = true;
  isLoggedIn: boolean = false;
  userData:any;
  

  toggleCollapse(): void {
    this.isCollapsed = !this.isCollapsed;
  }
}