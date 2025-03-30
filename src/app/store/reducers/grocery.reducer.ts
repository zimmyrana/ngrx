import { createReducer, on } from "@ngrx/store";
import { Grocery } from "../../../models/grocery.model";
import { groceryAction } from "../actions/grocery.action";

// const initialState:Grocery[] = [
//     { 'id':1, 'name': 'Apples', 'type': 'fruit', }
//     , { 'id':2, 'name': 'Bananas', 'type': 'fruit', }
//     , { 'id':3, 'name': 'Lays', 'type': 'snacks', }
//     , { 'id':4, 'name': 'Doritos', 'type': 'snacks', }
// ]
const initialState:Grocery[] = []

export const groceryReducer = createReducer(
    initialState,
    // grocery Init
    on(groceryAction.loadGroceriesSuccess, (state, action) => action.payload),
    
    // grocery Fallure
    on(groceryAction.loadGroceriesFailure, (state, action) => []),

)