import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Building, Location, Room} from "../../../locations";
import {DataService} from "../../../../functional/data/data.service";
import {Observable} from "rxjs/Observable";
import 'rxjs/add/observable/from';
import "rxjs/add/operator/mergeMap";

@Component({
  selector: 'app-statistic',
  templateUrl: './statistic.component.html',
  styleUrls: ['./statistic.component.scss']
})
export class StatisticComponent implements OnInit {

  @Input()
  location: Location;

  @Input()
  enabled: boolean;

  @Input()
  alert: boolean;

  actions: Action[];

  @Output()
  onUpdate = new EventEmitter();

  constructor(private data: DataService) {
  }

  ngOnInit() {
    const reg = new RegExp(/^\d+([.,]\d+)?$/);
    this.actions = [
      new Action("zoom_out_map", "Cube", but =>
          this.data.getCube(this.location)
            .then(r => this.assignAndUpdate(r, but)),
        'cube'),
      new Action("aspect_ratio", "Area", but =>
          this.data.getArea(this.location)
            .then(r => this.assignAndUpdate(r, but)),
        'area'
      ),
      new Action("whatshot", "Heating per cube", but =>
          this.data.getHeatPerCube(this.location)
            .then(r => this.assignAndUpdate(r, but)),
        'heat'
      ),
      new Action("lightbulb_outline", "Light per area", but =>
          this.data.getLightPerArea(this.location)
            .then(r => this.assignAndUpdate(r, but)),
        'light'
      )
    ];
    if (this.alert) {
      this.actions.push(new Action("priority_high", "Alert", but => {
        this.data.getAlter(this.location, but['value'])
          .then((res: any[]) => {
            Observable.from((this.location as Building).levels)
              .mergeMap(l => l.rooms)
              .subscribe(room => this.markAsAboveLimit(res, room))
          })
          .then(() => this.update())
      }, null, true, btn => btn['value'] && reg.test(btn['value'])))
    }

  }

  assignAndUpdate(r, but) {
    this.location[but.fieldName] = r;
    this.update();
  }

  private update() {
    this.onUpdate.next(null);
  }

  markAsAboveLimit(res, room) {
    for (let i = 0; i < res.length; i++) {
      if (Room.equals(res[i], room)) {
        room['alert'] = true;
        res.splice(i, 1);
        return;
      }
    }
    room['alert'] = false;
  }
}

class Action {
  constructor(public icon: string,
              public tooltip: string,
              public fun: (ref: Action) => any,
              public fieldName: any = null,
              public text: boolean = false,
              public valFun: (ref: Action) => boolean = null) {
  }
}
