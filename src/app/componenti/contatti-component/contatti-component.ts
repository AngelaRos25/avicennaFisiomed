import { Component, AfterViewInit, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'app-contatti-component',
  imports: [],
  templateUrl: './contatti-component.html',
  styleUrl: './contatti-component.css',
})
export class ContattiComponent implements AfterViewInit {

  private map: any; // can't use L.Map until we import L dynamically
  private centroid: [number, number] = [45.47393, 12.23573]

  constructor(@Inject(PLATFORM_ID) private platformId: Object) { }

  async ngAfterViewInit(): Promise<void> {
    // Only run in the browser
    if (isPlatformBrowser(this.platformId)) {
      const L = await import('leaflet'); // dynamic import

      // Initialize map
      this.map = L.map('map', {
        center: this.centroid,
        zoom: 16
      });

      // Tiles
      const tiles = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 18,
        minZoom: 10,
        attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
      }).addTo(this.map);

      // Add 5 jittered markers
      L.marker([45.47393, 12.23573]).addTo(this.map);
    }
  }
}
