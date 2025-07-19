import { ChangeDetectionStrategy, Component, inject, Inject, PLATFORM_ID } from '@angular/core';
import { AgChartOptions, AgBarSeriesOptions, AgLineSeriesOptions } from 'ag-charts-community';
import { AgCharts } from 'ag-charts-angular';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { AlphaVantageService } from '../services/alpha-vantage.service';

@Component({
  selector: 'app-barchart',
  standalone: true,
  imports: [AgCharts, CommonModule],
  providers: [AlphaVantageService],
  templateUrl: './barchart.component.html',
  styleUrl: './barchart.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BarchartComponent {

  readonly alphaVantageService = inject(AlphaVantageService);

  public isBrowser: boolean = false;
  public chartOptions!: AgChartOptions;

  constructor(@Inject(PLATFORM_ID) private readonly platformId: Object) {
    this.isBrowser = isPlatformBrowser(this.platformId);
  }

  async getDataTest(symbol: string) {
    const result = await this.alphaVantageService.getStockData(symbol);
    console.log(result);
  }

  ngOnInit() {
    this.chartOptions = {
      width: 1100,
      height: 600,
      title: {
        text: 'Ice Cream Sales',
        fontSize: 24,
        color: '#666600',
      },
      subtitle: { text: 'Data from 2024' },
      legend: {
        position: 'bottom',
      },
      // Data: Data to be displayed in the chart
      data: [
        { month: 'Jan', avgTemp: 2.3, iceCreamSales: 162000 },
        { month: 'Mar', avgTemp: 6.3, iceCreamSales: 302000 },
        { month: 'May', avgTemp: 16.2, iceCreamSales: 800000 },
        { month: 'Jul', avgTemp: 22.8, iceCreamSales: 1254000 },
        { month: 'Sep', avgTemp: 14.5, iceCreamSales: 950000 },
        { month: 'Nov', avgTemp: 8.9, iceCreamSales: 200000 }
      ],
      // Series: Defines which chart type and data to use
      series: [
        { type: 'bar', xKey: 'month', yKey: 'iceCreamSales', strokeWidth: 4, fill: 'red' } as AgBarSeriesOptions, // Existing 'Bar' Series, using 'iceCreamSales' data-points
        { type: 'line', xKey: 'month', yKey: 'avgTemp', fill: 'red', strokeWidth: 6, } as AgLineSeriesOptions // Additional 'Line' Series, using 'avgTemp' data-points
      ],
      axes: [
        { type: 'category', position: 'bottom' },
        { type: 'number', position: 'left', keys: ['iceCreamSales'] },
        { type: 'number', position: 'right', keys: ['avgTemp'] },
      ],
      background: {
        fill: '#f8f8f8'
      }
    };

  }
}
