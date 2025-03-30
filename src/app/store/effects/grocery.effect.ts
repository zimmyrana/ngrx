import { Injectable, inject } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { map, exhaustMap, catchError } from 'rxjs/operators';
import { GroceryService } from '../../grocery.service';
import { groceryAction } from '../actions/grocery.action';

@Injectable()
export class GroceryEffects {
  private actions$ = inject(Actions);
  private groceryService = inject(GroceryService);

  loadMovies$ = createEffect(() => {
    return this.actions$.pipe( //listens for the action dispatched from the component
      ofType(groceryAction.loadGroceries), //listens for the action dispatched from the component(perticular action)
      exhaustMap(() => this.groceryService.fetchAllGroceries()
        .pipe(
          map((groceries:any) => (groceryAction.loadGroceriesSuccess({payload:groceries}))), //dispatches the action with the payload
          catchError((error) => of(groceryAction.loadGroceriesFailure({error:error}))) //dispatches the action with the error if any error occurs
        )
      )
    )
  });
}