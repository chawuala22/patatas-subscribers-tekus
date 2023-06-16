import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubscriberCreateComponent } from './subscriber-create.component';

describe('SubscriberCreateComponent', () => {
  let component: SubscriberCreateComponent;
  let fixture: ComponentFixture<SubscriberCreateComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SubscriberCreateComponent]
    });
    fixture = TestBed.createComponent(SubscriberCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
