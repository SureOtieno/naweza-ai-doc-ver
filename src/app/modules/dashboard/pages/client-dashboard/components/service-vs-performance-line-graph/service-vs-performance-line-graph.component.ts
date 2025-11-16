import { Component, OnInit } from '@angular/core';
import { ChartModule } from 'primeng/chart';

@Component({
  selector: 'app-service-vs-performance-line-graph',
  standalone: true,
  imports: [ChartModule],
  templateUrl: './service-vs-performance-line-graph.component.html',
  styleUrl: './service-vs-performance-line-graph.component.scss',
})
export class ServiceVsPerformanceLineGraphComponent implements OnInit {
  data: any;

  options: any;

  ngOnInit() {
    const documentStyle = getComputedStyle(document.documentElement);
    const textColor = documentStyle.getPropertyValue('--text-color');
    const textColorSecondary = documentStyle.getPropertyValue('--text-color-secondary');
    const surfaceBorder = documentStyle.getPropertyValue('--surface-border');

    this.data = {
      labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4'],
      datasets: [
        {
          label: 'Mpesa Service',
          data: [65000, 59000, 80000, 81000, 56000, 55000, 40000],
          fill: false,
          borderColor: documentStyle.getPropertyValue('--blue-500'),
          tension: 0.4,
        },
        {
          label: 'Airtime',
          data: [28000, 48000, 40000, 19000, 86000, 27000, 90000],
          fill: false,
          borderColor: documentStyle.getPropertyValue('--pink-500'),
          tension: 0.4,
        },
        {
          label: 'Pesalink',
          data: [18000, 38000, 30000, 39000, 66000, 47000, 70000],
          fill: false,
          borderColor: documentStyle.getPropertyValue('--yellow-500'),
          tension: 0.4,
        },
        {
          label: 'Airtel Money',
          data: [18000, 18000, 70000, 49000, 56000, 37000, 60000],
          fill: false,
          borderColor: documentStyle.getPropertyValue('--pink-500'),
          tension: 0.4,
        },
      ],
    };


    const data1 = {
      labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4'],
      datasets: [
        {
          label: 'Mpesa Service',
          data: [65000, 59000, 80000, 81000, 56000, 55000, 40000],
          fill: false,
          borderColor: documentStyle.getPropertyValue('--blue-500'),
          tension: 0.4,
        },
        {
          label: 'Airtime',
          data: [28000, 48000, 40000, 19000, 86000, 27000, 90000],
          fill: false,
          borderColor: documentStyle.getPropertyValue('--pink-500'),
          tension: 0.4,
        },
        {
          label: 'Pesalink',
          data: [18000, 38000, 30000, 39000, 66000, 47000, 70000],
          fill: false,
          borderColor: documentStyle.getPropertyValue('--yellow-500'),
          tension: 0.4,
        },
        {
          label: 'Airtel Money',
          data: [18000, 18000, 70000, 49000, 56000, 37000, 60000],
          fill: false,
          borderColor: documentStyle.getPropertyValue('--pink-500'),
          tension: 0.4,
        },
      ],
    };

    this.options = {
      maintainAspectRatio: false,
      aspectRatio: 0.6,
      plugins: {
        legend: {
          labels: {
            color: textColor,
          },
        },
      },
      scales: {
        x: {
          ticks: {
            color: textColorSecondary,
          },
          grid: {
            color: surfaceBorder,
            drawBorder: false,
          },
        },
        y: {
          ticks: {
            color: textColorSecondary,
          },
          grid: {
            color: surfaceBorder,
            drawBorder: false,
          },
        },
      },
    };
  }
}
