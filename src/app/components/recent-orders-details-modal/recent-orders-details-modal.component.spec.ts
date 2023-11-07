import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecentOrdersDetailsModalComponent } from './recent-orders-details-modal.component';

describe('RecentOrdersDetailsModalComponent', () => {
  let component: RecentOrdersDetailsModalComponent;
  let fixture: ComponentFixture<RecentOrdersDetailsModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RecentOrdersDetailsModalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RecentOrdersDetailsModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
