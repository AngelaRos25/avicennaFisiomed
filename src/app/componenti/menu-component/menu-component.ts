import { Component, signal } from '@angular/core';
import { NgOptimizedImage, CommonModule } from "@angular/common";
import { OverlayModule } from '@angular/cdk/overlay';
import { RouterLink } from '@angular/router';
import { ViewportScroller } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';


import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';


import { menuServizi } from '../../modelli/interface';
import { menuServiziData } from '../../data/menuServizi.data';

@Component({
  selector: 'app-menu-component',
  imports: [MatIconModule, MatButtonModule, NgOptimizedImage, RouterLink, CommonModule, FormsModule, OverlayModule],
  templateUrl: './menu-component.html',
  styleUrl: './menu-component.css',
})
export class MenuComponent {

  constructor(private viewportScroller: ViewportScroller, private router: Router) {
    this.flattenServices();
  }


  logoPath: string = 'assets/img/logo.png';
  serv: menuServizi[] = menuServiziData;
  filteredServ = menuServiziData;
  menuOpen = false;
  isOpen = false;
  searchText = '';

  servicesFlatList: any[] = [];
  filteredFlatServices: any[] = [];

  overlayOpen = signal(false)

  scrollTo(sectionId: string): void {
    this.viewportScroller.scrollToAnchor(sectionId);
  }

  openSearch() {
    this.isOpen = !this.isOpen
    const value = this.searchText.toLowerCase();

    this.filteredServ = this.serv.map(category => {
      const filteredList = category.list.filter(servizio => {
        const cleanTitle = servizio.titleServizio.replace(/<[^>]*>/g, '');

        return cleanTitle.toLowerCase().includes(value);
      })

      return {
        ...category,
        list: filteredList
      }
    }).filter(category => category.list.length > 0)
  }

  onSearch() {
    const value = this.searchText.toLowerCase().trim();

    if (!value) {
      this.filteredFlatServices = [];
      return;
    }

    this.filteredFlatServices = this.servicesFlatList.filter(service => {
      const clean = service.titleServizio
        .replace(/<[^>]*>/g, '')
        .toLowerCase();

      return clean.includes(value);
    });
  }

  flattenServices() {
    this.servicesFlatList = this.serv.flatMap(category => category.list)
  }


  goToService(id: number) {
    this.overlayOpen.set(false);
    this.isOpen = false;
    this.searchText = '';
    this.filteredFlatServices = [];

    this.router.navigate(['/servizi', id])
  }

}
