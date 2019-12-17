import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CostPrognoseComponent } from './cost-prognose.component';

describe('CostPrognoseComponent', () => {
  let component: CostPrognoseComponent;
  let fixture: ComponentFixture<CostPrognoseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CostPrognoseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CostPrognoseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
