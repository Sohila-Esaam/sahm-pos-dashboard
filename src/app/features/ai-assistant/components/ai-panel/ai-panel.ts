import {
  ChangeDetectionStrategy,
  Component,
  inject,
  input,
  OnInit
} from '@angular/core';
import { AiAssistantService } from '../../services/ai-assistant.service';
import { Order } from '../../../../core/models/order.model';

@Component({
  selector: 'app-ai-panel',
  standalone: true,
  imports: [],
  templateUrl: './ai-panel.html',
  styleUrl: './ai-panel.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AiPanel implements OnInit {

  order = input.required<Order>();

  private readonly aiService = inject(AiAssistantService);

  readonly recommendations = this.aiService.recommendations;

  ngOnInit(): void {
    this.aiService.generateRecommendation(this.order());
  }

  retry(): void {
    this.aiService.generateRecommendation(this.order());
  }
}