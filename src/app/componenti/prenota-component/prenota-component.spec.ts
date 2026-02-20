import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrenotaComponent } from './prenota-component';

describe('PrenotaComponent', () => {
  let component: PrenotaComponent;
  let fixture: ComponentFixture<PrenotaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PrenotaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PrenotaComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
