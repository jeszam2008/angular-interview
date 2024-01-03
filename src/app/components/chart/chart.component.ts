import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LineChartComponent } from './line-chart/line-chart.component';

@Component({
  selector: 'app-chart',
  standalone: true,
  imports: [CommonModule, LineChartComponent],
  templateUrl: './chart.component.html',
  styleUrl: './chart.component.css',
})
export class ChartComponent {

  constructor() {

  }

}
