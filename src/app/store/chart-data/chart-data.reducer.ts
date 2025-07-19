import { createReducer, on } from "@ngrx/store";
import * as ChartDataActions from './chart-data.actions';
import { initialChartDataState } from "./chart-data.state";

export const chartDataReducer = createReducer(
    initialChartDataState,
    on(ChartDataActions.loadChartData, state => ({
        ...state, loading: true, error: null
    })),
    on(ChartDataActions.loadChartDataSuccess, (state, { data }) => ({
        ...state, loading: false, data
    })),
    on(ChartDataActions.loadChartDataFailure, (state, { error }) => ({
        ...state, loading: false, error
    }))
);