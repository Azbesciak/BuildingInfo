import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import {UiModule} from "../functional/ui/ui.module";
import { LocationCreatorComponent } from './home/location-creator/location-creator.component';
import { LocationAdderComponent } from './home/location-creator/location-adder/location-adder.component';
import { LocationFormComponent } from './home/location-creator/location-form/location-form.component';
import {FunctionalModule} from "../functional/functional.module";
import { LocationsViewComponent } from './home/locations-view/locations-view.component';
import {DndModule} from "ng2-dnd";
import { RoomViewComponent } from './home/locations-view/room-view/room-view.component';
import { StatisticComponent } from './home/locations-view/statistic/statistic.component';

@NgModule({
  imports: [
    CommonModule,
    FunctionalModule,
    DndModule.forRoot()
  ],
  exports: [HomeComponent],
  declarations: [
    HomeComponent, LocationCreatorComponent, LocationAdderComponent,
    LocationFormComponent, LocationsViewComponent, RoomViewComponent, StatisticComponent
  ]
})
export class MainModule { }
