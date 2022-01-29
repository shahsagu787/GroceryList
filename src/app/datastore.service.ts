import { Injectable } from '@angular/core';

import {Sort} from '@angular/material/sort';

export interface ItemList {
  item: string;
  quantity: number;
  
}



export interface HistoryList {
  item: string;
  quantity: number;
  
}

@Injectable({
  providedIn: 'root'
})




export class DatastoreService {


  itemAll: ItemList[] = [];
  histroryAll: HistoryList[] =[];
  tempItem: string[] = [];

  sortedData;

 
  constructor() {

   const savedItem = window.localStorage.getItem('buyItems');
   const savedHistory = window.localStorage.getItem('HistoryItems');


   this.sortedData = this.histroryAll.slice();

   if(savedItem !== null){
     this.itemAll = JSON.parse(savedItem);
   }
   if(savedHistory !== null){
     this.histroryAll = JSON.parse(savedHistory);
   }

    
  }















  addHistory(index: number)
  {
     
     




    var available = false;
    var pos =0;
    for(let i = 0; i<this.histroryAll.length; i++)
    {
      if(this.histroryAll[i].item == this.itemAll[index].item){
        available = true;
        pos = i;
        break;
      }
    }
    if(available){
      this.histroryAll[pos].quantity = this.histroryAll[pos].quantity + this.itemAll[index].quantity;
    }
    else{
      this.histroryAll.push({item:this.itemAll[index].item, quantity: this.itemAll[index].quantity});
    }
   
    this.saveChanges();
     
  }

  addItem(itemStr: string, quantityStr: string){
  




    var available = false;
    var pos =0;
    for(let i = 0; i<this.itemAll.length; i++)
    {
      if(this.itemAll[i].item == itemStr){
        available = true;
        pos = i;
        break;
      }
    }
    if(available){
      this.itemAll[pos].quantity = this.itemAll[pos].quantity + parseInt(quantityStr) 
    }
    else{
      this.itemAll.push({item:itemStr, quantity: parseInt(quantityStr)});
    }
   
    this.saveChanges();

  }
  
  removeItem(i:number){
    this.itemAll.splice(i,1);
    window.localStorage.setItem("buyItems",JSON.stringify(this.itemAll));
   // window.localStorage.removeItem(this.itemList[i]);
  }
  
  
  
  public onClear(){
    console.log('before clear')
    this.histroryAll=[];
   // this.sortedData = [];
    //window.localStorage.clear();
   // window.localStorage.setItem("HistoryItems", JSON.stringify(""));
    window.localStorage.removeItem("HistoryItems");
   // console.log('check'+ window.localStorage)
    console.log('after clear')
   // this.saveChanges();
     
    
  }

  
  




  // clear(){
  //   this.itemList = [];
  //   this.saveChanges();
  // }


 
  
  
  getItemListSize(){
    return(this.itemAll.length);
  }

  

  private saveChanges(){
    window.localStorage.setItem('buyItems',JSON.stringify(this.itemAll));
    
    window.localStorage.setItem('HistoryItems', JSON.stringify(this.histroryAll));
  }


}
