import { Component, signal } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import { MenuComponent } from './componenti/menu-component/menu-component';
import { FooterComponent } from './componenti/footer-component/footer-component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, MenuComponent, FooterComponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('avicenna-fisiomed-2');
  constructor(public router:Router){}
}
