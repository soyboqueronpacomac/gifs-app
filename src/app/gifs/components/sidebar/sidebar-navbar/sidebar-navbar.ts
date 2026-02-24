import { Component, signal } from '@angular/core';
import { Link } from './interfaces';
import { links } from './data';
import { RouterLink, RouterLinkActive } from "@angular/router";

@Component({
  selector: 'sidebar-navbar',
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './sidebar-navbar.html',
})
export class SidebarNavbar {
  links = signal<Link[]>(links);
 }
