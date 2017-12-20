import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import {UiModule} from "../functional/ui/ui.module";

@NgModule({
  imports: [
    CommonModule,
    UiModule,
  ],
  exports: [],
  declarations: [HomeComponent]
})
export class MainModule { }
