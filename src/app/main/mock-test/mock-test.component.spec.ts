/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { MockTestComponent } from './mock-test.component';

describe('MockTestComponent', () => {
  let component: MockTestComponent;
  let fixture: ComponentFixture<MockTestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MockTestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MockTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
