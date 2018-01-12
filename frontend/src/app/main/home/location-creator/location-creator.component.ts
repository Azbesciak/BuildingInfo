import {Component, OnInit} from '@angular/core';
import {LocationType} from "../../locations";

@Component({
  selector: 'app-location-creator',
  templateUrl: './location-creator.component.html',
  styleUrls: ['./location-creator.component.scss']
})
export class LocationCreatorComponent implements OnInit {

  locType: LocationType;
  ngOnInit(): void {
  }

  onLocTypeChange(locType: LocationType) {
    this.locType = locType;
  }
}
