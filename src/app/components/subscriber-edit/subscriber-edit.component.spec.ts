import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubscriberEditComponent } from './subscriber-edit.component';

describe('SubscriberEditComponent', () => {
  let component: SubscriberEditComponent;
  let fixture: ComponentFixture<SubscriberEditComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SubscriberEditComponent]
    });
    fixture = TestBed.createComponent(SubscriberEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
