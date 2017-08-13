import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReturnmailComponent } from './returnmail.component';

describe('ReturnmailComponent', () => {
  let component: ReturnmailComponent;
  let fixture: ComponentFixture<ReturnmailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReturnmailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReturnmailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
