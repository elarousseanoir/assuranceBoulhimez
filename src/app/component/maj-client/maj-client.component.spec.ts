import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MajClientComponent } from './maj-client.component';

describe('MajClientComponent', () => {
  let component: MajClientComponent;
  let fixture: ComponentFixture<MajClientComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MajClientComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MajClientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
