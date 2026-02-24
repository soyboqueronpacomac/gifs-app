import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SidebarHeader } from "../../components/sidebar/sidebar-header/sidebar-header";
import { SidebarNavbar } from "../../components/sidebar/sidebar-navbar/sidebar-navbar";
import { Sidebar } from "../../components/sidebar/sidebar/sidebar";


@Component({
  selector: 'app-dashboard-page',
  imports: [RouterOutlet, Sidebar],
  templateUrl: './dashboard-page.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class DashboardPage { }
