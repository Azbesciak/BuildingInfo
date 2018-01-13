import {Component, EventEmitter, Input, OnInit, Output, ViewChild} from '@angular/core';
import {Building, Level, Location, LocationType, Room} from "../../../locations";
import {NgForm} from "@angular/forms";

@Component({
  selector: 'app-location-form',
  templateUrl: './location-form.component.html',
  styleUrls: ['./location-form.component.scss']
})
export class LocationFormComponent implements OnInit {
  get locType(): LocationType {
    return this._locType;
  }

  @Input()
  set locType(value: LocationType) {
    this._locType = value;
    this.location = this.getLoc(value, this.location)
  }

  private _locType: LocationType;

  @ViewChild("locForm")
  locForm: NgForm;

  @Output()
  added = new EventEmitter<Location>();

  location: Location;

  constructor() { }

  ngOnInit() {
  }

  getLoc(locType: LocationType = this._locType, old = null): Location {
    const id = old ? old.id : null;
    const name = old ? old.name : null;
    switch (locType) {
      case LocationType.LEVEL: return new Level(id, name);
      case LocationType.ROOM: return new Room(id, name);
      case LocationType.BUILDING: return new Building(id, name);
      default: return null;
    }
  }

  onCreate() {
    if (this.locForm.valid) {
      this.added.next(this.location);
      this.location = this.getLoc();
      this.locForm.resetForm()
    }
  }

  isRoom() {
    return this._locType == LocationType.ROOM
  }
}
