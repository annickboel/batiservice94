import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MonDevisComponent } from './mon-devis.component';

describe('MonDevisComponent', () => {
  let component: MonDevisComponent;
  let fixture: ComponentFixture<MonDevisComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MonDevisComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MonDevisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
