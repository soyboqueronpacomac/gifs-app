import { Component } from '@angular/core';
import { SidebarHeader } from "../sidebar-header/sidebar-header";
import { SidebarNavbar } from "../sidebar-navbar/sidebar-navbar";

@Component({
  selector: 'sidebar',
  imports: [SidebarHeader, SidebarNavbar],
  templateUrl: './sidebar.html',
})
export class Sidebar { }
