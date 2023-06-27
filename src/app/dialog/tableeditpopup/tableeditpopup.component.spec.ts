import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableeditpopupComponent } from './tableeditpopup.component';

describe('TableeditpopupComponent', () => {
  let component: TableeditpopupComponent;
  let fixture: ComponentFixture<TableeditpopupComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TableeditpopupComponent]
    });
    fixture = TestBed.createComponent(TableeditpopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
