import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Institutions2Component } from './institutions2.component';

describe('Institutions2Component', () => {
  let component: Institutions2Component;
  let fixture: ComponentFixture<Institutions2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Institutions2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Institutions2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
