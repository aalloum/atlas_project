import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CabinetComptablesComponent } from './cabinet-comptables.component';

describe('CabinetComptablesComponent', () => {
  let component: CabinetComptablesComponent;
  let fixture: ComponentFixture<CabinetComptablesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CabinetComptablesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CabinetComptablesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
