import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServiziComponent } from './servizi-component';

describe('ServiziComponent', () => {
  let component: ServiziComponent;
  let fixture: ComponentFixture<ServiziComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ServiziComponent]
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
