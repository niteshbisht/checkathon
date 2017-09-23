import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GrievappComponent } from './grievapp.component';

describe('GrievappComponent', () => {
  let component: GrievappComponent;
  let fixture: ComponentFixture<GrievappComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GrievappComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GrievappComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
