import { createFeatureSelector, createSelector } from "@ngrx/store";
import { Grocery } from "../../../models/grocery.model";

// export const selectGrocery = (state: {groceries:Grocery[]}) => state.groceries;
export const selectGrocery = createFeatureSelector<Grocery[]>('groceries')

export const selectGroceryByType = (type:string) => createSelector(
    selectGrocery,
    (state:Grocery[])=>{
        return state.filter(item=>item.type === type)
    }
)