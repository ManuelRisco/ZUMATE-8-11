import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgregacionLogosComponent } from './agregacion-logos.component';

describe('AgregacionLogosComponent', () => {
  let component: AgregacionLogosComponent;
  let fixture: ComponentFixture<AgregacionLogosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AgregacionLogosComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AgregacionLogosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
