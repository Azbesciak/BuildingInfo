import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {LocationType} from "../../../locations";

@Component({
  selector: 'app-location-adder',
  templateUrl: './location-adder.component.html',
  styleUrls: ['./location-adder.component.scss']
})
export class LocationAdderComponent implements OnInit {

  adders: LocAdder[];

  selected: LocationType;

  @Output()
  change = new EventEmitter<LocationType>();

  constructor() { }

  ngOnInit() {
    if (!this.selected) {
      this.onLocAddChange(LocationType.ROOM)
    }
    this.adders = [
      new LocAdder(LocationType.BUILDING, "Building", "business"),
      new LocAdder(LocationType.LEVEL, "Level", "layers"),
      new LocAdder(LocationType.ROOM, "Room", "home"),
    ]
  }

  onLocAddChange(locType: any) {
    locType = typeof locType == 'number' ? locType : locType.value;
    this.selected = locType;
    this.change.next(locType)
  }
}

class LocAdder {
  constructor(public value: LocationType = null,
              public label: string = null,
              public icon: string = null){}
}
