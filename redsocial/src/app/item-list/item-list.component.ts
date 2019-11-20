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

  //descriptionHistory : {
  mensajito = "Escribe tu historieta aca ....";
  //}

  constructor(private itemListService: ItemListService) { }

  ngOnInit() {
    this.getItem();
  }

  //GET
  getItem() {
    this.itemListService.getItemList()
    .subscribe( (data: Item[])  => this.myItems = data, //ok
                error => console.error(error),          //error
                () => console.log('Item list ha cargado') //final (por defecto)
    )
  };

  //GET BY ID
  getItemId(item: Item) {
    this.itemListService.getItemById(item.id)
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

  //AddHistorieta
  addHistory(item: Item){
    item.id=1;
    item.nombre="Diego";
    item.apellido="Espejo";
    item.fecha="20/11/2019";
    item.historieta=this.mensajito;
    this.itemListService.addItem(item)
      .subscribe(item => this.myItems.push(item));
  }


  //PUT
  putItem(item: Item) {
    this.itemListService.updateItem(item)
      .subscribe();
  };

}