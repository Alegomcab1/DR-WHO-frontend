import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IndividuoFormComponent } from './individuo-form.component';

describe('IndividuoFormComponent', () => {
  let component: IndividuoFormComponent;
  let fixture: ComponentFixture<IndividuoFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IndividuoFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IndividuoFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
