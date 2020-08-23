import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Cap05Component } from './cap05.component';

describe('Cap05Component', () => {
  let component: Cap05Component;
  let fixture: ComponentFixture<Cap05Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Cap05Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Cap05Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
