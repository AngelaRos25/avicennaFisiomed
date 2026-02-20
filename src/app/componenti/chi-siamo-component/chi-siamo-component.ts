import { Component } from '@angular/core';
import { ChiSiamoData } from '../../modelli/interface';
import { Data } from '../../data/chisiamo.data';
import { NgOptimizedImage, CommonModule } from '@angular/common';

@Component({
  selector: 'app-chi-siamo-component',
  imports: [NgOptimizedImage, CommonModule],
  templateUrl: './chi-siamo-component.html',
  styleUrl: './chi-siamo-component.css',
})
export class ChiSiamoComponent {
  data: ChiSiamoData[] = Data;
}
