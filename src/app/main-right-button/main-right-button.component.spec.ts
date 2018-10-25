import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MainRightButtonComponent } from './main-right-button.component';

describe('MainRightButtonComponent', () => {
  let component: MainRightButtonComponent;
  let fixture: ComponentFixture<MainRightButtonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MainRightButtonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MainRightButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
