import { createAction, props } from "@ngrx/store";
import { Bucket } from "../../../models/bucket.model";

export const addToBucket = createAction(
    '[Bucket] Add',
    // props<{ id: number, name: string }>() // payload
    props<{ payload: Bucket }>() // payload
)

export const removeFromBucket = createAction(
    '[Bucket] Remove',
    props<{ payload: Partial<Bucket> }>() // payload
)