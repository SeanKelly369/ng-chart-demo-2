import { Injectable } from "@angular/core";
import { Store } from '@ngrx/store';
import * as ChartDataActions from './chart-data.actions';
import * as ChartDataSelectors from "./chart-data.selectors";

@Injectable( { providedIn: 'root' })
export class ChartDataFacade {
    private readonly data$ = this.store.select(ChartDataSelectors.selectChartData);
    private readonly loading$ = this.store.select(ChartDataSelectors.selectChartDataLoading);
    private readonly error$ = this.store.select(ChartDataSelectors.selectChartDataError);

    constructor(private readonly store: Store) {}

    load(symbol: string) {
        this.store.dispatch(ChartDataActions.loadChartData({ symbol }));
    }
}

