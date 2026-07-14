import { inject, Injectable, signal } from '@angular/core';
import { interval } from 'rxjs';
import { KitchenLoad } from '../../../core/models/kitchen-load.model';
import { OrderPriority } from '../../../core/models/priority.enum';
import { OfflineService } from '../../../core/services/offline.service';

@Injectable({
  providedIn: 'root'
})
export class KitchenService {

  readonly kitchenLoad = signal<KitchenLoad>({
    workload: 35,
    activeOrders: 12,
    delayedOrders: 1,
    priority: OrderPriority.Low
  });

  readonly kitchen = this.kitchenLoad.asReadonly();

  readonly offlineService = inject(OfflineService);

  constructor() {

    interval(5000).subscribe(() => {
      if (!this.offlineService.isOnline()) {
        return;
      }
      this.simulateKitchenLoad();
    });

  }

  private simulateKitchenLoad(): void {

    const workload = Math.floor(Math.random() * 100);

    this.kitchenLoad.set({
      workload,
      activeOrders: Math.floor(workload / 8),
      delayedOrders: Math.floor(workload / 25),
      priority:
        workload > 80
          ? OrderPriority.High
          : workload > 50
          ? OrderPriority.Medium
          : OrderPriority.Low
    });

  }

}