import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MainShowElementsComponent } from './main-show-elements.component';

describe('MainShowElementsComponent', () => {
  let component: MainShowElementsComponent;
  let fixture: ComponentFixture<MainShowElementsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MainShowElementsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MainShowElementsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
