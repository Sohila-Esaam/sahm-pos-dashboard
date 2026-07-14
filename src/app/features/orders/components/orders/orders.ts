import { ChangeDetectionStrategy, Component,  computed, inject, signal } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { OrdersService } from '../../services/orders.service';
import { OrderCard } from '../order-card/order-card';
import { OrderChannel } from '../../../../core/models/order-channel.enum';
import { OrderStatus } from '../../../../core/models/order-status.enum';

@Component({
  selector: 'app-orders',
  standalone: true,
  imports: [OrderCard, ReactiveFormsModule],
  templateUrl: './orders.html',
  styleUrl: './orders.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class Orders {

  private readonly ordersServices = inject(OrdersService);

  statusFilter = new FormControl('all', { nonNullable: true });
  channelFilter = new FormControl('all', { nonNullable: true });

  private readonly selectedStatus = signal('all'); 
  private readonly selectedChannel = signal('all');

  readonly statusOptions = [
    { label: 'All Status', value: 'all' },
    { label: 'Received', value: OrderStatus.Received },
    { label: 'Preparing', value: OrderStatus.Preparing },
    { label: 'Ready', value: OrderStatus.Ready },
    { label: 'Delivered', value: OrderStatus.Delivered },
    { label: 'Completed', value: OrderStatus.Completed }
  ];

  readonly channelOptions = [
    { label: 'All Channels', value: 'all' },
    { label: 'Walk-in', value: OrderChannel.WalkIn },
    { label: 'Online', value: OrderChannel.Online },
    { label: 'Delivery', value: OrderChannel.Delivery }
  ];

  readonly orderChannel = OrderChannel;

  readonly orders = computed(() => {

    const status = this.selectedStatus();
    const channel = this.selectedChannel();

    return this.ordersServices.orders().filter(order => {

      const matchStatus =
        status === 'all' || order.status === status;

      const matchChannel =
        channel === 'all' || order.channel === channel;

      return matchStatus && matchChannel;

    });

  });


  constructor() {
    this.statusFilter.valueChanges.subscribe(status => {
      this.selectedStatus.set(status);
    });

    this.channelFilter.valueChanges.subscribe(channel => {
      this.selectedChannel.set(channel);
    });
  }

  clearFilter() {
    this.selectedStatus.set('all');
    this.selectedChannel.set('all');
    this.statusFilter.setValue('all');
    this.channelFilter.setValue('all');
  }
}
