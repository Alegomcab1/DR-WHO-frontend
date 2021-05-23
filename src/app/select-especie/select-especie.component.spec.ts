import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectEspecieComponent } from './select-especie.component';

describe('SelectEspecieComponent', () => {
  let component: SelectEspecieComponent;
  let fixture: ComponentFixture<SelectEspecieComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SelectEspecieComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectEspecieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
