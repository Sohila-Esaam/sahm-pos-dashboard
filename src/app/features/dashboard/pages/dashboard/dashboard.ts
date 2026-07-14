import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { Orders } from '../../../orders/components/orders/orders';
import { KitchenMonitor } from '../../../kitchen/components/kitchen-monitor/kitchen-monitor';
import { ProductSearch } from '../../../product-search/pages/product-search/product-search';
import { DashboardStats } from '../../components/dashboard-stats/dashboard-stats';
import { OfflineService } from '../../../../core/services/offline.service';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [Orders, KitchenMonitor, ProductSearch, DashboardStats, DatePipe],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class Dashboard {

  readonly offlineService = inject(OfflineService);

  today = new Date();

}
