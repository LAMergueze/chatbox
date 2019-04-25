import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListusersPage } from './listusers.page';

describe('ListusersPage', () => {
  let component: ListusersPage;
  let fixture: ComponentFixture<ListusersPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListusersPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListusersPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
