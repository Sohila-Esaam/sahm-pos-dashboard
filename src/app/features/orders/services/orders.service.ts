import { inject, Injectable, signal } from "@angular/core";
import { Order } from "../../../core/models/order.model";
import { MOCK_ORDERS } from "../../../core/mocks/orders.mock";
import { interval, Subscription } from "rxjs";
import { OrderStatus } from "../../../core/models/order-status.enum";
import { OrderPriority } from "../../../core/models/priority.enum";
import { OrderChannel } from "../../../core/models/order-channel.enum";
import { CUSTOMERS } from "../../../core/mocks/customers.mock";
import { OfflineService } from "../../../core/services/offline.service";

@Injectable({
    providedIn: 'root'
})

export class OrdersService {

    private readonly ordersSignal = signal<Order[]>([...MOCK_ORDERS]);

    readonly orders = this.ordersSignal.asReadonly();

    readonly offlineService = inject(OfflineService);

    private subscription!: Subscription;

    private nextOrderId = 13;

    constructor() {
        this.startSimulation();
    }

    private startSimulation(): void {
        this.subscription = 
        interval(5000).subscribe(() => {
            if (!this.offlineService.isOnline()) {
                return;
            }
            this.simulateOrderUpdates();
        });
        interval(10000).subscribe(() => {
            if (!this.offlineService.isOnline()) {
                return;
            }
            this.addNewOrder();
        });
    }

    private simulateOrderUpdates(): void {
        const orders = [...this.orders()];

        const activeOrders = orders.filter(
            order => order.status !== OrderStatus.Completed
        );

        if (!activeOrders.length) return;

        const randomOrder =
            activeOrders[Math.floor(Math.random() * activeOrders.length)];

        const index = orders.findIndex(
            order => order.id === randomOrder.id
        );

        orders[index] = {
            ...randomOrder,
            status: this.getNextStatus(randomOrder.status)
        };

        this.ordersSignal.set(orders);
    }

    private getNextStatus(status: OrderStatus): OrderStatus {
        switch (status) {
            case OrderStatus.Received:
            return OrderStatus.Preparing;

            case OrderStatus.Preparing:
            return OrderStatus.Ready;

            case OrderStatus.Ready:
            return OrderStatus.Delivered;

            case OrderStatus.Delivered:
            return OrderStatus.Completed;

            case OrderStatus.Completed:
            default:
            return OrderStatus.Completed;
        }
    }

    private addNewOrder(): void {

        const orders = [...this.orders()];

        const customerName =
            CUSTOMERS[Math.floor(Math.random() * CUSTOMERS.length)];

        const newOrder: Order = {
            id: this.nextOrderId++,
            customerName,
            channel: [
                OrderChannel.WalkIn,
                OrderChannel.Online,
                OrderChannel.Delivery
            ][Math.floor(Math.random() * 3)],
            status: OrderStatus.Received,
            priority: OrderPriority.Medium,
            total: Math.floor(Math.random() * 700) + 100,
            createdAt: new Date(),
            items: [
            {
                id: 1,
                productId: 101,
                productName: 'Classic Burger',
                quantity: 1,
                unitPrice: 120
            }
            ]
        };

        orders.push(newOrder);

        this.ordersSignal.set(orders);

    }

    updateOrdersPriority(priority: OrderPriority): void {

        const orders = this.orders();

        const hasChanges = orders.some(order =>
            order.status !== OrderStatus.Completed &&
            order.status !== OrderStatus.Delivered &&
            order.priority !== priority
        );

        if (!hasChanges) {
            return;
        }

        this.ordersSignal.set(
            orders.map(order => {

            if (
                order.status === OrderStatus.Completed ||
                order.status === OrderStatus.Delivered
            ) {
                return order;
            }

            return {
                ...order,
                priority
            };

            })
        );

    }

    ngOnDestroy(): void {
        this.subscription?.unsubscribe();
    }



}