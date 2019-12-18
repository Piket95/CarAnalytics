import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TankkostenberechnungComponent } from './tankkostenberechnung.component';

describe('TankkostenberechnungComponent', () => {
  let component: TankkostenberechnungComponent;
  let fixture: ComponentFixture<TankkostenberechnungComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TankkostenberechnungComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TankkostenberechnungComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
