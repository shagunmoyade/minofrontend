import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InprogressTODOComponent } from './inprogress-todo.component';

describe('InprogressTODOComponent', () => {
  let component: InprogressTODOComponent;
  let fixture: ComponentFixture<InprogressTODOComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InprogressTODOComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InprogressTODOComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
