import { Component, OnInit } from '@angular/core';
import { Item } from './item.model';
import { ITEMS } from './mocks';
import { ItemListService } from './item-list.service';


@Component({
  selector: 'app-item-list',
  templateUrl: './item-list.component.html',
  styleUrls: ['./item-list.component.css']
})

export class ItemListComponent implements OnInit {

  myItems: Item[];

  constructor(private itemListService: ItemListService) { }

  ngOnInit() {
    this.myItems = ITEMS;
  }

  //GET
  getItem() {
    this.itemListService.getItemList()
    .subscribe( (data: Item[]) => this.myItems = data, //ok
                error => console.error(error),          //error
                () => console.log('Item list ha cargado') //final (por defecto)
    )
  };

  //POST
  addItem(item: Item) {
    this.itemListService.addItem(item)
      .subscribe(item => this.myItems.push(item));
  };

  //PUT
  putItem(item: Item) {
    this.itemListService.updateItem(item)
      .subscribe();
  };

}