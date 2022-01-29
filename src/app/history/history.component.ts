import { Component, OnInit } from '@angular/core';
import { DatastoreService } from '../datastore.service';


import {Sort} from '@angular/material/sort';


@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.scss']
})
export class HistoryComponent implements OnInit {

  pageTitle: string = "Purchase History";

  constructor(
    public datastore: DatastoreService
  ) 
  {
    
  }

  
  ngOnInit(): void {
    console.log('yes')
  }

  
  onSubmit(event : Event){
    console.log("Before..");
   this.datastore.onClear();
    console.log(event.currentTarget);
   (event.currentTarget as HTMLFormElement).reset();
    console.log("After...");
  }

 


  public sortedData(sort: Sort) {
    const data = this.datastore.histroryAll.slice();
    if (!sort.active || sort.direction === '') {
     this.datastore.histroryAll= data;
      return;
    }
  
    this.datastore.histroryAll = data.sort((a, b) => {
      const isAsc = sort.direction === 'asc';
      switch (sort.active) {
        case 'item':
          return compare(a.item, b.item, isAsc);
        case 'quantity':
          return compare(a.quantity, b.quantity, isAsc);
       
        default:
          return 0;
      }
    });
  }


  
  
}
function compare(a: number | string, b: number | string, isAsc: boolean) {
  return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
}










