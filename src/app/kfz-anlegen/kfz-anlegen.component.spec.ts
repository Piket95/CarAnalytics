import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KfzAnlegenComponent } from './kfz-anlegen.component';

describe('KfzAnlegenComponent', () => {
  let component: KfzAnlegenComponent;
  let fixture: ComponentFixture<KfzAnlegenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KfzAnlegenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KfzAnlegenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
