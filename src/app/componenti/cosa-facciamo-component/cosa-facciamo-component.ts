import { CommonModule, NgOptimizedImage } from '@angular/common';
import { Component } from '@angular/core';
import { CosaFacciamoData } from '../../modelli/interface';
import { DataFacciamo } from '../../data/cosafacciamo.data';
import { MatIcon } from "@angular/material/icon"; 
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-cosa-facciamo-component',
  imports: [MatIcon, NgOptimizedImage, CommonModule, RouterLink],
  templateUrl: './cosa-facciamo-component.html',
  styleUrl: './cosa-facciamo-component.css',
})
export class CosaFacciamoComponent {
  data: CosaFacciamoData[] = DataFacciamo;
}
