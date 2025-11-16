import { Component, OnInit } from '@angular/core';
import { ChartModule } from 'primeng/chart';

@Component({
  selector: 'app-countries-distributions-donut-chart',
  standalone: true,
  imports: [ChartModule],
  templateUrl: './countries-distributions-donut-chart.component.html',
  styleUrl: './countries-distributions-donut-chart.component.scss',
})
export class CountriesDistributionsDonutChartComponent implements OnInit {
  data: any;

  options: any;

  ngOnInit() {
    const documentStyle = getComputedStyle(document.documentElement);
    const textColor = documentStyle.getPropertyValue('--text-color');

    this.data = {
      labels: ['Kenya', 'Angola', 'Namibia','Botswana'],
      datasets: [
        {
          data: [300, 50, 100,70],
          backgroundColor: [documentStyle.getPropertyValue('--blue-500'), documentStyle.getPropertyValue('--yellow-500'), documentStyle.getPropertyValue('--green-500'),documentStyle.getPropertyValue('--cyan-500')],
          hoverBackgroundColor: [documentStyle.getPropertyValue('--blue-400'), documentStyle.getPropertyValue('--yellow-400'), documentStyle.getPropertyValue('--green-400'),documentStyle.getPropertyValue('--cyan-400')],
        }
      ]
    };


    this.options = {
      cutout: '60%',
      plugins: {
        legend: {
          labels: {
            color: textColor
          }
        }
      }
    };
  }
}
