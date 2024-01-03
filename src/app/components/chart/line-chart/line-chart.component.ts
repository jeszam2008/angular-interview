import { Component, OnInit } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule, DatePipe } from '@angular/common';
import { ChartModule } from 'primeng/chart';
import { map } from 'rxjs/operators';
import { APIService } from '../../../services/api.service';
import { APIResult } from '../../../interfaces/api-response.interface';

@Component({
  selector: 'app-line-chart',
  standalone: true,
  imports: [CommonModule, HttpClientModule, ChartModule],
  providers: [DatePipe],
  templateUrl: './line-chart.component.html',
  styleUrl: './line-chart.component.css'
})
export class LineChartComponent implements OnInit {
  api_data: APIResult[] = [];
  chart: { data: any, options: any } = { data: null, options: null };

  constructor(private apiService: APIService, private datePipe: DatePipe) { }

  ngOnInit(): void {
    this.apiService.getData().pipe(map((data: APIResult[]) => {
      return data.sort((a, b) => { return ((+new Date(a.date)) - (+new Date(b.date))) })
    })).subscribe((data => {
      this.api_data = data;
    }));

    const textColor = "#212529";
    const textColorSecondary = "#6c757d";
    const surfaceBorder = "#dee2e6";

    this.chart.data = {
      labels: this.api_data.map((data) => this.datePipe.transform(data.date, 'MMMM dd')),
      datasets: [
        {
          label: 'Number of Link',
          data: this.api_data.map((data) => data.links_found),
          fill: false,
          borderColor: "#0d6efd",
          tension: 0.4
        }
      ]
    };

    this.chart.options = {
      maintainAspectRatio: false,
      aspectRatio: 0.6,
      plugins: {
        legend: {
          labels: {
            color: textColor
          }
        }
      },
      scales: {
        x: {
          ticks: {
            color: textColorSecondary
          },
          grid: {
            color: surfaceBorder,
            drawBorder: false
          }
        },
        y: {
          ticks: {
            color: textColorSecondary
          },
          grid: {
            color: surfaceBorder,
            drawBorder: false
          }
        }
      }
    };

  }
}
