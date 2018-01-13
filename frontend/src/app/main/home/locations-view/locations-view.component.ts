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
  isLevDragEnabled: boolean = true;

  constructor() { }

  ngOnInit() {
    this.initIfNotExists();

    this.locationsBus.subscribe(loc => {
      if (loc instanceof Room) {
        this.rooms.push(loc);
        this.rooms = copy(this.rooms);
      } else if (loc instanceof Level) {
        this.levels.push(loc);
        this.levels = copy(this.levels)
      } else if (loc instanceof Building) {
        this.buildings.push(loc);
        this.buildings = copy(this.buildings)
      }
    })
  }

  private initIfNotExists() {
    if (!this.buildings) this.buildings = [];
    if (!this.levels) this.levels = [];
    if (!this.rooms) this.rooms = [];
  }

  removeRoom(i: number) {
    this.rooms.splice(i, 1);
    this.rooms = copy(this.rooms);
  }

  removeRoomFromLevel(levInd: number, roomInd: number) {
    this.levels[levInd].rooms.splice(roomInd, 1);
    this.levels = copy(this.levels);
  }

  addRoomToLevel(levInd: number, room: any) {
    this.levels[levInd].rooms.push(room.dragData);
    this.levels = copy(this.levels);
    this.turnOnLevDrag()
  }

  addRoom($event: any) {
    this.rooms.push($event.dragData);
    this.rooms = copy(this.rooms);
    this.turnOnLevDrag()
  }

  addLevel($event: any) {
    this.levels.push($event.dragData);
    this.levels = copy(this.levels)
  }

  removeRoomFromBuildingLevel(bi: number, li: number, ri: number) {
    this.buildings[bi].levels[li].rooms.splice(ri, 1);
    this.buildings = copy(this.buildings)
  }

  addLevToBuilding(bi: number, $event: any) {
    this.buildings[bi].levels.push($event.dragData);
    this.buildings = copy(this.buildings)
  }

  addRoomToBuildingLevel(bi: number, li: number, $event: any) {
    this.buildings[bi].levels[li].rooms.push($event.dragData);
    this.buildings = copy(this.buildings);
    this.turnOnLevDrag()
  }

  removeFromLevels(li) {
    this.levels.splice(li, 1);
    this.levels = copy(this.levels)
  }

  removeLevFromBuilding(bi: number, li: number) {
    this.buildings[bi].levels.splice(li, 1);
    this.buildings = copy(this.buildings)
  }

  turnOffLevDrag() {
    this.isLevDragEnabled = false;
    console.log("blocked")
  }

  turnOnLevDrag() {
    this.isLevDragEnabled = true;
    console.log("invoked?")
  }
}

function copy(arr: Array<any>) {
  return arr.slice()
}
