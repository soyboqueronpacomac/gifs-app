import { Component, signal } from '@angular/core';

@Component({
  selector: 'sidebar-header',
  imports: [],
  templateUrl: './sidebar-header.html',
})
export class SidebarHeader {
  // 1. Definimos los signals con los valores del import.meta.env
  readonly name = signal(import.meta.env.NGX_COMPANY_NAME);
  readonly name2 = signal(import.meta.env.NGX_COMPANY_NAME2);
  readonly slogan = signal(import.meta.env.NGX_COMPANY_SLOGAN);
}
