import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TablepopupComponent } from './tablepopup.component';

describe('TablepopupComponent', () => {
  let component: TablepopupComponent;
  let fixture: ComponentFixture<TablepopupComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TablepopupComponent]
    });
    fixture = TestBed.createComponent(TablepopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
