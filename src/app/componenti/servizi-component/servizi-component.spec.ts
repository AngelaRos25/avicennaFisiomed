import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServiziComponent } from './servizi-component';
import { provideRouter } from '@angular/router';

describe('ServiziComponent', () => {
  let component: ServiziComponent;
  let fixture: ComponentFixture<ServiziComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ServiziComponent],
      providers: [
        provideRouter([])   
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ServiziComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
