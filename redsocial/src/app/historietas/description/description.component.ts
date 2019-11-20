import { Component, OnInit } from '@angular/core';
import { ItemListService } from 'src/app/item-list/item-list.service';

@Component({
  selector: 'app-description',
  templateUrl: './description.component.html',
  styleUrls: ['./description.component.css']
})
export class DescriptionComponent implements OnInit {

  constructor(private itemListService: ItemListService) { }

  ngOnInit() {
  }

  desc: string = "123123213";

  getDescripcion(){
    //this.desc=this.itemListService;
  }

}
