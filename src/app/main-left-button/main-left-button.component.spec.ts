import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MainLeftButtonComponent } from './main-left-button.component';

describe('MainLeftButtonComponent', () => {
  let component: MainLeftButtonComponent;
  let fixture: ComponentFixture<MainLeftButtonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MainLeftButtonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MainLeftButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
