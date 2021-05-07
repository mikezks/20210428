import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BonusMilesComponent } from './bonus-miles.component';

describe('BonusMilesComponent', () => {
  let component: BonusMilesComponent;
  let fixture: ComponentFixture<BonusMilesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BonusMilesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BonusMilesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
