import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {LocationType, Location} from "../../locations";

@Component({
  selector: 'app-location-creator',
  templateUrl: './location-creator.component.html',
  styleUrls: ['./location-creator.component.scss']
})
export class LocationCreatorComponent implements OnInit {

  @Output()
  newLocation = new EventEmitter<Location>();

  locType: LocationType;
  ngOnInit(): void {
  }

  onLocationAdded(loc: Location) {
    this.newLocation.next(loc);
  }

  onLocTypeChange(locType: LocationType) {
    this.locType = locType;
  }
}
