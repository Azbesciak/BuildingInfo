import {Component, Input, OnInit} from '@angular/core';
import {Subject} from "rxjs/Subject";
import {SessionStorage} from "ngx-webstorage";
import {Building, Level, Room} from "../../locations";

@Component({
  selector: 'app-locations-view',
  templateUrl: './locations-view.component.html',
  styleUrls: ['./locations-view.component.scss']
})
export class LocationsViewComponent implements OnInit {

  @Input()
  locationsBus: Subject<Location>;

  @SessionStorage()
  buildings: Array<Building>;

  @SessionStorage()
  levels: Array<Level>;

  @SessionStorage()
  rooms: Array<Room>;

  constructor() { }

  ngOnInit() {
    this.initIfNotExists();

    this.locationsBus.subscribe(loc => {
      if (loc instanceof Room) {
        this.rooms.push(loc);
        this.rooms = this.rooms.slice();
      } else if (loc instanceof Level) {
        this.levels.push(loc);
        this.levels = this.levels.slice()
      } else if (loc instanceof Building) {
        this.buildings.push(loc);
        this.buildings = this.buildings.slice()
      }
    })
  }

  private initIfNotExists() {
    if (!this.buildings) this.buildings = [];
    if (!this.levels) this.levels = [];
    if (!this.rooms) this.rooms = [];
  }

  removeRoom(i: number) {
    console.log("call")
    this.rooms.splice(i, 1);
    this.rooms = this.rooms;
  }

  removeRoomFromLevel(levInd: number, roomInd: number) {
    console.log("lef?", levInd, roomInd)
    this.levels[levInd].rooms.splice(roomInd, 1)
    this.levels = this.levels;
  }

  addRoomToLevel(levInd: number, room: any) {
    console.log("invoked")
    this.levels[levInd].rooms.push(room.dragData)
    this.levels = this.levels
  }

  addRoom($event: any) {
    console.log("drop")
    this.rooms.push($event.dragData);
    this.rooms = this.rooms;
  }
}
