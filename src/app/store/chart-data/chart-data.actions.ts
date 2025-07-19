import { createAction, props } from "@ngrx/store";

export const loadChartData = createAction(
    '[Chart Data] Load Chart Data',
    props<{ symbol: string }>()
);

export const loadChartDataSuccess = createAction(
    '[Chart Data] Load Chart Data Success',
    props<{ data: any[] }>()
);

export const loadChartDataFailure = createAction(
    '[Chart Data] Load Chart Data Failure',
    props<{ error: string }>()
)