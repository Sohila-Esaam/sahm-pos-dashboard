import { OrderChannel } from './order-channel.enum';
import { OrderPriority } from './priority.enum';
import { OrderStatus } from './order-status.enum';
import { OrderItem } from './order-item.model';

export interface Order {
  id: number;
  customerName: string;
  tableNumber?: number;
  channel: OrderChannel;
  status: OrderStatus;
  priority: OrderPriority;
  total: number;
  createdAt: Date;
  items: OrderItem[];
}