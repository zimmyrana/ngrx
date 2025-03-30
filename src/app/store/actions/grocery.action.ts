import { createAction, createActionGroup, emptyProps, props } from "@ngrx/store";
import { Grocery } from "../../../models/grocery.model";

// export const initGroceries = createAction('[Groceries] Load Groceries');
// export const completedGroceries = createAction('[Groceries] Load Groceries Success')

export const groceryAction = createActionGroup({
    source: 'Grocery API',
    events: {
        'Load Groceries': emptyProps(),
        'Load Groceries Success': props<{ payload: Grocery[] }>(),
        'Load Groceries Failure': props<{ error: string }>()
    }
})