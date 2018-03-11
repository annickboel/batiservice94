import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NosMetiersComponent } from './nos-metiers.component';

describe('NosMetiersComponent', () => {
  let component: NosMetiersComponent;
  let fixture: ComponentFixture<NosMetiersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NosMetiersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NosMetiersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
