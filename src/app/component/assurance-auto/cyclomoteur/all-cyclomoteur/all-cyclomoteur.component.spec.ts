import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AllCyclomoteurComponent } from './all-cyclomoteur.component';

describe('AllCyclomoteurComponent', () => {
  let component: AllCyclomoteurComponent;
  let fixture: ComponentFixture<AllCyclomoteurComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AllCyclomoteurComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AllCyclomoteurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
