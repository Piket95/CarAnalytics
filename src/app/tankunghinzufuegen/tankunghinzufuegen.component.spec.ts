import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TankunghinzufuegenComponent } from './tankunghinzufuegen.component';

describe('TankunghinzufuegenComponent', () => {
  let component: TankunghinzufuegenComponent;
  let fixture: ComponentFixture<TankunghinzufuegenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TankunghinzufuegenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TankunghinzufuegenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
