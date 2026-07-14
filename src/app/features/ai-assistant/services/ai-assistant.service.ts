import { Injectable, signal } from '@angular/core';
import { AIRecommendation } from '../../../core/models/ai-recommendation.model';
import { Order } from '../../../core/models/order.model';
import { OrderPriority } from '../../../core/models/priority.enum';
import { OrderChannel } from '../../../core/models/order-channel.enum';

@Injectable({
  providedIn: 'root'
})
export class AiAssistantService {

    private readonly recommendationsSignal =
        signal<Record<number, AIRecommendation>>({});

    readonly recommendations =
        this.recommendationsSignal.asReadonly();

    generateRecommendation(order: Order): void {

        this.recommendationsSignal.update(state => ({
            ...state,
            [order.id]: {
                orderId: order.id,
                loading: true,
                type: 'info',
                message: 'AI is analyzing the order...'
            }
        }));

        setTimeout(() => {


            let recommendation: AIRecommendation;

            if (Math.random() < 0.15) {

            recommendation = {
                orderId: order.id,
                loading: false,
                type: 'error',
                message: 'AI service unavailable.'
            };

            } else {

            const productNames = order.items.map(item =>
                item.productName.toLowerCase()
            );

            const hasBurger = productNames.some(name => name.includes('burger'));
            const hasFries = productNames.some(name => name.includes('fries'));
            const hasDrink = productNames.some(name =>
                name.includes('cola') ||
                name.includes('drink') ||
                name.includes('pepsi')
            );

            if (order.priority === OrderPriority.High) {

                recommendation = {
                orderId: order.id,
                loading: false,
                type: 'warning',
                message: 'High priority order. Prepare immediately.'
                };

            } else if (order.channel === OrderChannel.Delivery) {

                recommendation = {
                orderId: order.id,
                loading: false,
                type: 'warning',
                message: 'Delivery may be delayed during peak hours.'
                };

            } else if (hasBurger && !hasFries) {

                recommendation = {
                orderId: order.id,
                loading: false,
                type: 'info',
                message: 'Recommend adding Fries to increase order value.'
                };

            } else if (!hasDrink) {

                recommendation = {
                orderId: order.id,
                loading: false,
                type: 'info',
                message: 'Suggest adding a soft drink.'
                };

            } else if (order.items.length >= 5) {

                recommendation = {
                orderId: order.id,
                loading: false,
                type: 'warning',
                message: 'Large order. Preparation may take longer.'
                };

            } else {

                recommendation = {
                orderId: order.id,
                loading: false,
                type: 'success',
                message: 'Order looks good.'
                };

            }

            }

            this.recommendationsSignal.update(state => ({
                ...state,
                [order.id]: recommendation
            }));

        }, 2000);

    }

}