import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComptablesComponent } from './comptables.component';

describe('ComptablesComponent', () => {
  let component: ComptablesComponent;
  let fixture: ComponentFixture<ComptablesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ComptablesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ComptablesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
