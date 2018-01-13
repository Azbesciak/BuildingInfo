import { Component, OnInit } from '@angular/core';
import {Subject} from "rxjs/Subject";
import {Location} from "../locations";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  locationsBus: Subject<Location>;

  ngOnInit(): void {
    this.locationsBus = new Subject<Location>();
  }

  onLocationAdded(loc: Location) {
    this.locationsBus.next(loc);
  }

}
