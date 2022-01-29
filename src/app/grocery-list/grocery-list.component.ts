import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { DatastoreService } from '../datastore.service';


@Component({
  selector: 'app-grocery-list',
  templateUrl: './grocery-list.component.html',
  styleUrls: ['./grocery-list.component.scss']
})
export class GroceryListComponent implements OnInit {

  pageTitle: string = "Grocery List";
  isBuy: boolean = false;

  quantityCtrl: FormControl= new FormControl(null, Validators.required);
  itemCtrl: FormControl = new FormControl(null, [
    Validators.required,
    Validators.maxLength(16)
  ]);

  constructor(
    public datastore: DatastoreService
  ) { }

  entryGroup: FormGroup = new FormGroup({
    quantity: this.quantityCtrl,
    item: this.itemCtrl
  })

  ngOnInit(): void {
  }


  onSubmit(event: Event){
    if(this.entryGroup.valid){
      var item = this.itemCtrl.value;
      this.datastore.addItem(this.itemCtrl.value, String(this.quantityCtrl.value));
      this.isBuy = true;
      (event.currentTarget as HTMLFormElement).reset();
    }

    
  }

  onItemClicked(index : number){
    this.datastore.addHistory(index);
   
    this.datastore.removeItem(index);
  }


}
