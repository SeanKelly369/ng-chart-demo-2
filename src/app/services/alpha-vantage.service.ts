import { inject, Injectable } from '@angular/core';
import { ApiService } from './api-service/api.service';
import { HttpParams } from '@angular/common/http';
import { firstValueFrom } from 'rxjs';

@Injectable()
export class AlphaVantageService {
  private readonly apiService = inject(ApiService);

  async getStockData() {
    const baseUrl = 'https://www.alphavantage.co';
    const parameters = new HttpParams()
      .set('function', 'TIME_SERIES_INTRADAY')
      .set('symbol', 'IBM')
      .set('interval', '1min')
      .set('apikey', '##')
    const result = await firstValueFrom(this.apiService.getData(baseUrl, 'query', parameters));
    return result;
  }
}
