import { Component, AfterViewInit, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'app-contatti-component',
  templateUrl: './contatti-component.html',
  styleUrls: ['./contatti-component.css'], // corretto
})
export class ContattiComponent implements AfterViewInit {
  private map: any; 
  private centroid: [number, number] = [45.47393, 12.23573];

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {}

  async ngAfterViewInit(): Promise<void> {
    if (isPlatformBrowser(this.platformId)) {
      const L = await import('leaflet');

      // Fix marker icons
      delete (L.Icon.Default.prototype as any)._getIconUrl;
      L.Icon.Default.mergeOptions({
        iconRetinaUrl: 'assets/leaflet/marker-icon-2x.png',
        iconUrl: 'assets/leaflet/marker-icon.png',
        shadowUrl: 'assets/leaflet/marker-shadow.png',
      });

      // Inizializza la mappa
      this.map = L.map('map', {
        center: this.centroid,
        zoom: 16
      });

      // Tiles
      L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 18,
        minZoom: 10,
        attribution: '&copy; OpenStreetMap contributors'
      }).addTo(this.map);

      // Marker
      L.marker(this.centroid).addTo(this.map);
    }
  }
}
