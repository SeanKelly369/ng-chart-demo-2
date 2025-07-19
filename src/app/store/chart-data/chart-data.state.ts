export interface ChartDataState {
    data: any[];
    loading: boolean;
    error: string | null;
}

export const initialChartDataState: ChartDataState = {
    data: [],
    loading: false,
    error: null
};