import { inject, Injectable } from '@angular/core';
import { ApiService } from './api-service/api.service';
import { HttpParams } from '@angular/common/http';
import { firstValueFrom } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable()
export class AlphaVantageService {
  private readonly apiService = inject(ApiService);

  async getStockData(symbol: string) {
    const baseUrl = 'https://www.alphavantage.co';
    const parameters = new HttpParams()
      .set('function', 'TIME_SERIES_INTRADAY')
      .set('symbol', symbol)
      .set('interval', '1min')
      .set('apikey', environment.AlphaVantageApiKey)

    const result = await firstValueFrom(this.apiService.getData(baseUrl, 'query', parameters));
    return result;
  }
}
