import { Component, OnInit } from '@angular/core';
import { ChartModule } from 'primeng/chart';
// import { DropdownModule } from 'primeng/dropdown';

@Component({
  selector: 'app-revenue-per-service',
  standalone: true,
  imports: [ChartModule],
  templateUrl: './revenue-per-service.component.html',
  styleUrl: './revenue-per-service.component.scss',
})
export class RevenuePerServiceComponent implements OnInit {
  data: any;

  options: any;
  weekOptions: string[] | undefined;

  ngOnInit() {
    const documentStyle = getComputedStyle(document.documentElement);
    const textColor = documentStyle.getPropertyValue('--text-color');
    const textColorSecondary = documentStyle.getPropertyValue('--text-color-secondary');
    const surfaceBorder = documentStyle.getPropertyValue('--surface-border');

    this.data = {
      labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4'],
      datasets: [
        {
          label: 'Airtime',
          data: [6500, 5900, 8000, 8100, 5600, 5500, 4000],
          fill: false,
          borderColor: documentStyle.getPropertyValue('--blue-500'),
          tension: 0.4,
        },
        {
          label: 'Mpesa Services',
          data: [34000, 45000, 40000, 19000, 71000, 27000, 69000],
          fill: false,
          borderColor: documentStyle.getPropertyValue('--pink-500'),
          tension: 0.4,
        },
        {
          label: 'Pesalink',
          data: [31000, 48000, 10000, 15000, 86000, 22000, 85000],
          fill: false,
          borderColor: documentStyle.getPropertyValue('--red-500'),
          tension: 0.4,
        },
        {
          label: 'TV Services',
          data: [28000, 48000, 40000, 19000, 86000, 27000, 90000],
          fill: false,
          borderColor: documentStyle.getPropertyValue('--green-500'),
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
    //Week Options to display on the screen
    this.weekOptions = ['This Week', 'Last Week'];
  }
}
