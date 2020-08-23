import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Cap02Component } from './cap02.component';

describe('Cap02Component', () => {
  let component: Cap02Component;
  let fixture: ComponentFixture<Cap02Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Cap02Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Cap02Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
