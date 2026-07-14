import {
  ChangeDetectionStrategy,
  Component,
  effect,
  inject,
  untracked
} from '@angular/core';
import { KitchenService } from '../../services/kitchen.service';
import { OrdersService } from '../../../orders/services/orders.service';

@Component({
  selector: 'app-kitchen-monitor',
  standalone: true,
  imports: [],
  templateUrl: './kitchen-monitor.html',
  styleUrl: './kitchen-monitor.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class KitchenMonitor {

  private readonly kitchenService = inject(KitchenService);
  private readonly ordersService = inject(OrdersService);

  readonly kitchen = this.kitchenService.kitchen;

  constructor() {
    effect(() => {
      const priority = this.kitchen().priority;

      untracked(() => {
        this.ordersService.updateOrdersPriority(priority);
      });
    });
}

}
