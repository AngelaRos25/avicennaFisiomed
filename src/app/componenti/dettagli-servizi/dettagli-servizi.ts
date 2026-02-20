import { Component, OnInit } from '@angular/core';
import { CommonModule, NgOptimizedImage } from '@angular/common';
import { DettagliServizio } from '../../modelli/interface';
import { DettagliServizioData } from '../../data/dettagliservizio.data';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-dettagli-servizi',
  imports: [CommonModule, NgOptimizedImage],
  templateUrl: './dettagli-servizi.html',
  styleUrl: './dettagli-servizi.css',
})
export class DettagliServizi implements OnInit {
page? : DettagliServizio;

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      const id = params.get('id');

      this.page= DettagliServizioData.find(
        servizio => servizio.id === id
      )
    })
  }
}
