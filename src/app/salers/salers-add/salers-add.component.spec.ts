import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SalersAddComponent } from './salers-add.component';

describe('SalersAddComponent', () => {
  let component: SalersAddComponent;
  let fixture: ComponentFixture<SalersAddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SalersAddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SalersAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
