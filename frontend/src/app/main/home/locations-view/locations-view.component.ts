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
}
