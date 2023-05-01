import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PendingTODOComponent } from './pending-todo.component';

describe('PendingTODOComponent', () => {
  let component: PendingTODOComponent;
  let fixture: ComponentFixture<PendingTODOComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PendingTODOComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PendingTODOComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
