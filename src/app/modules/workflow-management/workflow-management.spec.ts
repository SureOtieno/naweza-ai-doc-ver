import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkflowManagement } from './workflow-management';

describe('WorkflowManagement', () => {
  let component: WorkflowManagement;
  let fixture: ComponentFixture<WorkflowManagement>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WorkflowManagement]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WorkflowManagement);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
