import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowIndividuoComponent } from './show-individuo.component';

describe('ShowIndividuoComponent', () => {
  let component: ShowIndividuoComponent;
  let fixture: ComponentFixture<ShowIndividuoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowIndividuoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowIndividuoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
