import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KitchenMonitor } from './kitchen-monitor';

describe('KitchenMonitor', () => {
  let component: KitchenMonitor;
  let fixture: ComponentFixture<KitchenMonitor>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [KitchenMonitor]
    })
    .compileComponents();

    fixture = TestBed.createComponent(KitchenMonitor);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
