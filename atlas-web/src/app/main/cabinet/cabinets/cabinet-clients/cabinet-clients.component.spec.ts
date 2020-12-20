import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CabinetClientsComponent } from './cabinet-clients.component';

describe('CabinetClientsComponent', () => {
  let component: CabinetClientsComponent;
  let fixture: ComponentFixture<CabinetClientsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CabinetClientsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CabinetClientsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
