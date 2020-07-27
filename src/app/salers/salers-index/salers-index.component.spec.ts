import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SalersIndexComponent } from './salers-index.component';

describe('SalersIndexComponent', () => {
  let component: SalersIndexComponent;
  let fixture: ComponentFixture<SalersIndexComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SalersIndexComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SalersIndexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
