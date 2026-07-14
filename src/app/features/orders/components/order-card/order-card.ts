import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { Order } from '../../../../core/models/order.model';
import { OrderStatus } from '../../../../core/models/order-status.enum';
import { OrderPriority } from '../../../../core/models/priority.enum';
import { AiPanel } from '../../../ai-assistant/components/ai-panel/ai-panel';

@Component({
  selector: 'app-order-card',
  standalone: true,
  imports: [AiPanel],
  templateUrl: './order-card.html',
  styleUrl: './order-card.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class OrderCard {

  order = input.required<Order>();

  readonly OrderStatus = OrderStatus;

  getStatusClass(status: OrderStatus): string {

    switch (status) {
      case OrderStatus.Received:
        return 'bg-secondary';

      case OrderStatus.Preparing:
        return 'bg-warning text-dark';

      case OrderStatus.Ready:
        return 'bg-info';

      case OrderStatus.Delivered:
        return 'bg-primary';

      case OrderStatus.Completed:
        return 'bg-success';

      default:
        return 'bg-secondary';
    }
  }

  getPriorityClass(priority: OrderPriority): string {

    switch (priority) {

      case OrderPriority.Low:
        return 'bg-success';

      case OrderPriority.Medium:
        return 'bg-warning text-dark';

      case OrderPriority.High:
        return 'bg-danger';

      default:
        return 'bg-secondary';
    }

  }
}
