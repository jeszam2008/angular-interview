import { Component } from '@angular/core';
import { ChartComponent } from '../components/chart/chart.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [ChartComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
