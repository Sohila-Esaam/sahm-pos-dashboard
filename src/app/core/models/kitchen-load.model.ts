import { OrderPriority } from './priority.enum';

export interface KitchenLoad {
  workload: number;
  activeOrders: number;
  delayedOrders: number;
  priority: OrderPriority;
}