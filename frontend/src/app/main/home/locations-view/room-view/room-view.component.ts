import {Component, Input, OnInit} from '@angular/core';
import {Room} from "../../../locations";

@Component({
  selector: 'app-room-view',
  templateUrl: './room-view.component.html',
  styleUrls: ['./room-view.component.scss']
})
export class RoomViewComponent implements OnInit {

  @Input()
  room: Room;

  items: Item[];

  constructor() { }

  ngOnInit() {
    this.items = Object.keys(this.room)
      .filter(k => 'alert' != k)
      .map(k => new Item(k, this.room[k]))
  }

}
class Item {
  constructor(public key:string, public value: string){}
}
