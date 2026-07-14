import { Order } from '../models/order.model';
import { OrderChannel } from '../models/order-channel.enum';
import { OrderPriority } from '../models/priority.enum';
import { OrderStatus } from '../models/order-status.enum';

export const MOCK_ORDERS: Order[] = [
    {
        id: 1,
        customerName: 'Ahmed Ali',
        tableNumber: 5,
        channel: OrderChannel.WalkIn,
        status: OrderStatus.Received,
        priority: OrderPriority.Medium,
        total: 320,
        createdAt: new Date(),
        items: [
            { id: 1, productId: 1, productName: 'Beef Burger', quantity: 2, unitPrice: 120 },
            { id: 2, productId: 4, productName: 'Fries', quantity: 1, unitPrice: 80 }
        ]
    },
    {
        id: 2,
        customerName: 'Sara Mohamed',
        channel: OrderChannel.Online,
        status: OrderStatus.Preparing,
        priority: OrderPriority.High,
        total: 540,
        createdAt: new Date(),
        items: [
            { id: 3, productId: 2, productName: 'Pizza', quantity: 2, unitPrice: 220 }
        ]
    },
    {
        id: 3,
        customerName: 'Omar Hassan',
        channel: OrderChannel.Delivery,
        status: OrderStatus.Ready,
        priority: OrderPriority.Low,
        total: 180,
        createdAt: new Date(),
        items: [
            { id: 4, productId: 5, productName: 'Chicken Sandwich', quantity: 1, unitPrice: 180 }
        ]
    },
    {
        id: 4,
        customerName: 'Mona Adel',
        tableNumber: 2,
        channel: OrderChannel.WalkIn,
        status: OrderStatus.Delivered,
        priority: OrderPriority.Medium,
        total: 400,
        createdAt: new Date(),
        items: [
            { id: 5, productId: 3, productName: 'Pasta', quantity: 2, unitPrice: 200 }
        ]
    },
    {
        id: 5,
        customerName: 'Youssef',
        channel: OrderChannel.Online,
        status: OrderStatus.Completed,
        priority: OrderPriority.Low,
        total: 650,
        createdAt: new Date(),
        items: [
            { id: 6, productId: 6, productName: 'Family Meal', quantity: 1, unitPrice: 650 }
        ]
    },
    {
        id: 6,
        customerName: 'Nour Tarek',
        tableNumber: 8,
        channel: OrderChannel.WalkIn,
        status: OrderStatus.Received,
        priority: OrderPriority.High,
        total: 290,
        createdAt: new Date(),
        items: [
            { id: 7, productId: 7, productName: 'Cola', quantity: 2, unitPrice: 45 },
            { id: 8, productId: 1, productName: 'Beef Burger', quantity: 1, unitPrice: 120 }
        ]
    },
    {
        id: 7,
        customerName: 'Khaled Samir',
        channel: OrderChannel.Delivery,
        status: OrderStatus.Preparing,
        priority: OrderPriority.Medium,
        total: 510,
        createdAt: new Date(),
        items: [
            { id: 9, productId: 2, productName: 'Pizza', quantity: 2, unitPrice: 220 }
        ]
    },
    {
        id: 8,
        customerName: 'Mariam Ahmed',
        channel: OrderChannel.Online,
        status: OrderStatus.Ready,
        priority: OrderPriority.High,
        total: 760,
        createdAt: new Date(),
        items: [
            { id: 10, productId: 6, productName: 'Family Meal', quantity: 1, unitPrice: 650 },
            { id: 11, productId: 7, productName: 'Cola', quantity: 2, unitPrice: 45 }
        ]
    },
    {
        id: 9,
        customerName: 'Mostafa Ali',
        tableNumber: 1,
        channel: OrderChannel.WalkIn,
        status: OrderStatus.Preparing,
        priority: OrderPriority.Low,
        total: 180,
        createdAt: new Date(),
        items: [
            { id: 12, productId: 5, productName: 'Chicken Sandwich', quantity: 1, unitPrice: 180 }
        ]
    },
    {
        id: 10,
        customerName: 'Reem Hassan',
        channel: OrderChannel.Delivery,
        status: OrderStatus.Delivered,
        priority: OrderPriority.Medium,
        total: 420,
        createdAt: new Date(),
        items: [
            { id: 13, productId: 3, productName: 'Pasta', quantity: 2, unitPrice: 200 }
        ]
    },
    {
        id: 11,
        customerName: 'Ali Mahmoud',
        channel: OrderChannel.Online,
        status: OrderStatus.Completed,
        priority: OrderPriority.Low,
        total: 150,
        createdAt: new Date(),
        items: [
            { id: 14, productId: 4, productName: 'Fries', quantity: 1, unitPrice: 80 },
            { id: 15, productId: 7, productName: 'Cola', quantity: 1, unitPrice: 45 }
        ]
    },
    {
        id: 12,
        customerName: 'Fatma Ibrahim',
        tableNumber: 10,
        channel: OrderChannel.WalkIn,
        status: OrderStatus.Received,
        priority: OrderPriority.High,
        total: 640,
        createdAt: new Date(),
        items: [
            { id: 16, productId: 2, productName: 'Pizza', quantity: 2, unitPrice: 220 },
            { id: 17, productId: 4, productName: 'Fries', quantity: 2, unitPrice: 80 }
        ]
    }
];