import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TesttaskComponent } from './testtask.component';

describe('TesttaskComponent', () => {
  let component: TesttaskComponent;
  let fixture: ComponentFixture<TesttaskComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TesttaskComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TesttaskComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
