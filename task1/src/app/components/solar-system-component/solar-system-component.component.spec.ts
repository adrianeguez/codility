import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SolarSystemComponentComponent } from './solar-system-component.component';

describe('SolarSystemComponentComponent', () => {
  let component: SolarSystemComponentComponent;
  let fixture: ComponentFixture<SolarSystemComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SolarSystemComponentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SolarSystemComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
