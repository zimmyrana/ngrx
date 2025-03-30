import { createReducer } from "@ngrx/store";
import { Grocery } from "../../../models/grocery.model";

const initialState:Grocery[] = [
    { 'id':1, 'name': 'Apples', 'type': 'fruit', }
    , { 'id':2, 'name': 'Bananas', 'type': 'fruit', }
    , { 'id':3, 'name': 'Lays', 'type': 'snacks', }
    , { 'id':4, 'name': 'Doritos', 'type': 'snacks', }
]

export const groceryReducer = createReducer(initialState)