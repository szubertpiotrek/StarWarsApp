import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MainViewElementComponent } from './main-view-element.component';

describe('MainViewElementComponent', () => {
  let component: MainViewElementComponent;
  let fixture: ComponentFixture<MainViewElementComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MainViewElementComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MainViewElementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
