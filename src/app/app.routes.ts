import { Routes } from '@angular/router';
import { HomepageComponent } from './componenti/homepage-component/homepage-component';
import { ContattiComponent } from './componenti/contatti-component/contatti-component';
import { ServiziComponent } from './componenti/servizi-component/servizi-component';
import { DettagliServizi } from './componenti/dettagli-servizi/dettagli-servizi';

export const routes: Routes = [
  { path: '', component: HomepageComponent },
  { path: 'contatti', component: ContattiComponent },
  { path: 'servizi', component: ServiziComponent },
  { path: 'servizi/:id', component: DettagliServizi }
];
