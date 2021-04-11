import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CyclomoteurComponent } from './cyclomoteur.component';

describe('CyclomoteurComponent', () => {
  let component: CyclomoteurComponent;
  let fixture: ComponentFixture<CyclomoteurComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CyclomoteurComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CyclomoteurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
