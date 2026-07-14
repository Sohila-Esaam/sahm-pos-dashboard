import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OrdersService } from '../../../orders/services/orders.service';
import { OrderStatus } from '../../../../core/models/order-status.enum';

@Component({
  selector: 'app-dashboard-stats',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './dashboard-stats.html',
  styleUrl: './dashboard-stats.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DashboardStats {

  private readonly ordersService = inject(OrdersService);

  readonly orders = this.ordersService.orders;

  get totalOrders() {
    return this.orders().length;
  }

  get activeOrders() {
    return this.orders().filter(
      order => order.status !== OrderStatus.Completed
    ).length;
  }

  get completedOrders() {
    return this.orders().filter(
      order => order.status === OrderStatus.Completed
    ).length;
  }

  get totalRevenue() {
    return this.orders().reduce(
      (sum, order) => sum + order.total,
      0
    );
  }

}