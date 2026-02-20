import { Component } from '@angular/core';
import { CommonModule, ViewportScroller } from '@angular/common';
import { RouterLink } from '@angular/router';

import { menuServizi } from '../../modelli/interface';
import { menuServiziData } from '../../data/menuServizi.data';

@Component({
  selector: 'app-servizi-component',
  imports: [CommonModule, RouterLink],
  templateUrl: './servizi-component.html',
  styleUrl: './servizi-component.css',
})
export class ServiziComponent {
  filteredServ: menuServizi[] = menuServiziData;

  leftColumn: menuServizi[] = [];
rightColumn: menuServizi[] = [];

constructor(private viewportScroller: ViewportScroller) {
  this.splitColumns();
}


splitColumns() {
  const middle = Math.ceil(this.filteredServ.length / 2);

  this.leftColumn = this.filteredServ.slice(0, middle);
  this.rightColumn = this.filteredServ.slice(middle);
}

}
