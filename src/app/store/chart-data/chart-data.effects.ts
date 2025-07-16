import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import * as ChartDataActions from './chart-data.actions';
import { catchError, from, map, of, switchMap } from "rxjs";
import { AlphaVantageService } from '../../services/alpha-vantage.service';

@Injectable()
export class ChartDataEffects {
    loadChartData$ = createEffect(() =>
        this.actions$.pipe(
            ofType(ChartDataActions.loadChartData),
            switchMap(({ symbol }) => 
                from(this.alphaVantageService.getStockData(symbol)).pipe(
                    map(data => ChartDataActions.loadChartDataSuccess({ data: Array.isArray(data) ? data : [data] })),
                    catchError(error =>
                        of(ChartDataActions.loadChartDataFailure({ error: error.message || 'Unknown error' }))
                    )
                )
            )
        )
    );

    constructor(
        private readonly actions$: Actions,
        private readonly alphaVantageService: AlphaVantageService
    ) {}
}