import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SalersEditComponent } from './salers-edit.component';

describe('SalersEditComponent', () => {
  let component: SalersEditComponent;
  let fixture: ComponentFixture<SalersEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SalersEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SalersEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
