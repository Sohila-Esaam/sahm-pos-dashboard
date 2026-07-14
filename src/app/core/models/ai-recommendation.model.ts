export interface AIRecommendation {
  orderId: number;
  message: string;
  loading: boolean;
  type: 'warning' | 'info' | 'success' | 'error';
}