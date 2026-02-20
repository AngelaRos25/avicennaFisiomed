import { Component } from '@angular/core';
import { ChiSiamoComponent } from '../chi-siamo-component/chi-siamo-component';
import { CosaFacciamoComponent } from '../cosa-facciamo-component/cosa-facciamo-component';
import { PrenotaComponent } from '../prenota-component/prenota-component';
import { RouterLink } from "@angular/router";

@Component({
  selector: 'app-homepage-component',
imports: [ChiSiamoComponent, CosaFacciamoComponent, PrenotaComponent, RouterLink],
  templateUrl: './homepage-component.html',
  styleUrl: './homepage-component.css',
})
export class HomepageComponent {

}
