import { Component, inject, signal } from '@angular/core';
import { Link } from './interfaces';
import { links } from './data';
import { RouterLink, RouterLinkActive } from "@angular/router";
import { GifsService } from '../../../services/gifs.service';

@Component({
  selector: 'sidebar-navbar',
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './sidebar-navbar.html',
})
export class SidebarNavbar {
  links = signal<Link[]>(links);
  gifsService = inject(GifsService);


 }
