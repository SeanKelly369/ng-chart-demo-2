import { Injectable } from "@angular/core";
import * as ChartDataActions from './chart-data.actions';
import * as ChartDataSelectors from "./chart-data.selectors";
import { Store } from "@ngrx/store";

@Injectable( { providedIn: 'root' })
export class ChartDataFacade {
    constructor(private readonly store: Store) {}

    data$ = this.store.select(ChartDataSelectors.selectChartData);
    loading$ = this.store.select(ChartDataSelectors.selectChartDataLoading);
    error$ = this.store.select(ChartDataSelectors.selectChartDataError);

    load(symbol: string) {
        console.log('symbol', symbol)
        this.store.dispatch(ChartDataActions.loadChartData({ symbol: 'IBM' }));
    }
}

