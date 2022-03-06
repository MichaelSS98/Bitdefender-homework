import { ComponentFixture, TestBed } from '@angular/core/testing';

import { YearOfferComponent } from './year-offer.component';

describe('YearOfferComponent', () => {
  let component: YearOfferComponent;
  let fixture: ComponentFixture<YearOfferComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ YearOfferComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(YearOfferComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
