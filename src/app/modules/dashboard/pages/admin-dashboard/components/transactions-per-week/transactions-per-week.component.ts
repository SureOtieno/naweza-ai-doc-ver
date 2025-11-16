import { Component, OnInit } from '@angular/core';
import { ChartModule } from 'primeng/chart';
// import { DropdownModule } from 'primeng/dropdown';

@Component({
  selector: 'app-transactions-per-week',
  standalone: true,
  imports: [ChartModule],
  templateUrl: './transactions-per-week.component.html',
  styleUrl: './transactions-per-week.component.scss',
})
export class TransactionsPerWeekComponent implements OnInit {
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
          label: 'Pending Transactions',
          data: [500000, 2500000, 310000, 450000],
          fill: false,
          borderColor: documentStyle.getPropertyValue('--blue-500'),
          tension: 0.4,
        },
        {
          label: 'Successful Transactions',
          data: [1000000, 2500000, 950000, 2000000],
          fill: false,
          borderColor: documentStyle.getPropertyValue('--pink-500'),
          tension: 0.4,
        },
        {
          label: 'Failed Transactions',
          data: [100000, 220000, 150000, 500000],
          fill: false,
          borderColor: documentStyle.getPropertyValue('--red-500'),
          tension: 0.4,
        },
        {
          label: 'Processing Transactions',
          data: [350000, 750000, 200000, 100000],
          fill: false,
          borderColor: documentStyle.getPropertyValue('--green-500'),
          tension: 0.4,
        },
        {
          label: 'Total Transactions',
          data: [4000000, 5000000, 4500000, 3500000],
          fill: false,
          borderColor: documentStyle.getPropertyValue('--yellow-500'),
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
