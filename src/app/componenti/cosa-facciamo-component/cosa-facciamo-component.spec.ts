import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CosaFacciamoComponent } from './cosa-facciamo-component';
import { provideRouter } from '@angular/router';

describe('CosaFacciamoComponent', () => {
  let component: CosaFacciamoComponent;
  let fixture: ComponentFixture<CosaFacciamoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CosaFacciamoComponent],
       providers: [
        provideRouter([])   
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CosaFacciamoComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
