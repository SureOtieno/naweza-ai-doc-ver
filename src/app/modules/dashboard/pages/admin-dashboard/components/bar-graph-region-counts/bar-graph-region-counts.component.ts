import { Component, OnInit } from '@angular/core';
import { ChartModule } from 'primeng/chart';

@Component({
  selector: 'app-bar-graph-region-counts',
  standalone: true,
  imports: [ChartModule],
  templateUrl: './bar-graph-region-counts.component.html',
  styleUrl: './bar-graph-region-counts.component.scss',
})
export class BarGraphRegionCountsComponent implements OnInit {
  data: any;

  options: any;

  ngOnInit() {
    const documentStyle = getComputedStyle(document.documentElement);
    const textColor = documentStyle.getPropertyValue('--text-color');
    const textColorSecondary = documentStyle.getPropertyValue('--text-color-secondary');
    const surfaceBorder = documentStyle.getPropertyValue('--surface-border');

    this.data = {
      labels: ['Kenya', 'Angola', 'Zambia', 'Botswana'],
      datasets: [
        {
          type: 'line',
          label: 'Successful Transactions',
          borderColor: documentStyle.getPropertyValue('--blue-500'),
          borderWidth: 2,
          fill: false,
          tension: 0.4,
          data: [100, 150.2, 500],
        },
        {
          type: 'bar',
          label: 'Processing Transactions',
          backgroundColor: documentStyle.getPropertyValue('--green-500'),
          data: [500, 200, 200, 500],
          borderColor: 'white',
          borderWidth: 2,
        },
        {
          type: 'bar',
          label: 'Pending Transactions',
          backgroundColor: documentStyle.getPropertyValue('--orange-500'),
          data: [300, 200, 200, 500],
        },
        {
          type: 'line',
          label: 'Successful Transactions',
          borderColor: documentStyle.getPropertyValue('--red-500'),
          borderWidth: 2,
          fill: false,
          tension: 0.4,
          data: [150, 450, 300, 600],
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
          },
        },
        y: {
          ticks: {
            color: textColorSecondary,
          },
          grid: {
            color: surfaceBorder,
          },
        },
      },
    };
  }
}
