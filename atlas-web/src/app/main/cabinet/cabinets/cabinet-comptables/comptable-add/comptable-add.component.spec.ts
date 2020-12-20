import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComptableAddComponent } from './comptable-add.component';

describe('ComptableAddComponent', () => {
  let component: ComptableAddComponent;
  let fixture: ComponentFixture<ComptableAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ComptableAddComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ComptableAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
