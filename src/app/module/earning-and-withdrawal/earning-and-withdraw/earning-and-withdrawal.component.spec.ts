import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EarningAndWithdrawalComponent } from './earning-and-withdrawal.component';

describe('EarningAndWithdrawalComponent', () => {
  let component: EarningAndWithdrawalComponent;
  let fixture: ComponentFixture<EarningAndWithdrawalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EarningAndWithdrawalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EarningAndWithdrawalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
