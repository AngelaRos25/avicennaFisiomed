import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DettagliServizi } from './dettagli-servizi';
import { provideRouter } from '@angular/router';

describe('DettagliServizi', () => {
  let component: DettagliServizi;
  let fixture: ComponentFixture<DettagliServizi>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DettagliServizi],
      providers: [
        provideRouter([])   
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DettagliServizi);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
