import { createFeatureSelector, createSelector } from "@ngrx/store";
import { ChartDataState } from "./chart-data.state";

export const selectChartDataState = createFeatureSelector<ChartDataState>('chartData');

export const selectChartData = createSelector(
    selectChartDataState,
    state => state.data
);

export const selectChartDataLoading = createSelector(
    selectChartDataState,
    state => state.loading
);

export const selectChartDataError = createSelector(
    selectChartDataState,
    state => state.error
);