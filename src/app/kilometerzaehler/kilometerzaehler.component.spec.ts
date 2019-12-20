import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KilometerzaehlerComponent } from './kilometerzaehler.component';

describe('KilometerzaehlerComponent', () => {
  let component: KilometerzaehlerComponent;
  let fixture: ComponentFixture<KilometerzaehlerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KilometerzaehlerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KilometerzaehlerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
