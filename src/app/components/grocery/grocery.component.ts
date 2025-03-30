import { Component, Signal } from '@angular/core';
import { Observable } from 'rxjs';
import { Grocery } from '../../../models/grocery.model';
import { CommonModule } from '@angular/common';
import { Store } from '@ngrx/store';
import { addToBucket, removeFromBucket } from '../../store/actions/bucket.action';
import { selectGroceryByType } from '../../store/selectors/grocery.selector';


@Component({
  selector: 'app-grocery',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './grocery.component.html',
  styleUrl: './grocery.component.css'
})
export class GroceryComponent {

  // groceries$?:Observable<Grocery[]>; = store.select('groceries')
  groceries$?:Observable<Grocery[]>;
  filteredGroceries$?:Observable<Grocery[]>;

  constructor(private store:Store<{groceries:Grocery[]}>) {
   this.groceries$ = store.select('groceries')
  }


  onTypeChange(event: Event){
    const selectedType = (event.target as HTMLSelectElement).value;
    if(selectedType){
      this.filteredGroceries$ = this.store.select(selectGroceryByType(selectedType))
    } else{
      this.filteredGroceries$ = undefined
    }
  }


  increment(item:Grocery){
    const payload = {
      id:item.id,
      name:item.name,
      quantity:1
    }
    // this.store.dispatch({type:'ADD_ITEM', payload})
    // this.store.dispatch(addToBucket({id:payload.id, name:payload.name}))
    this.store.dispatch(addToBucket({payload}))
  }
  decrement(item:Grocery){
    const payload = {
      id:item.id,
    }

    // this.store.dispatch({type:'REMOVE_ITEM', payload})
    this.store.dispatch(removeFromBucket({payload}))

  }

}


