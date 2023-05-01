import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompletedTODOComponent } from './completed-todo.component';

describe('CompletedTODOComponent', () => {
  let component: CompletedTODOComponent;
  let fixture: ComponentFixture<CompletedTODOComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompletedTODOComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompletedTODOComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
