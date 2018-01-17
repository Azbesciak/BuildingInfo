import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MaterialModule} from "./material/material.module";
import { HeaderComponent } from './header/header.component';
import { SpacerComponent } from './spacer/spacer.component';
import { KeyValueComponent } from './key-value/key-value.component';

@NgModule({
  imports: [
    CommonModule,
    MaterialModule
  ],
  exports: [
    MaterialModule,
    HeaderComponent,
    SpacerComponent,
    KeyValueComponent
  ],
  declarations: [HeaderComponent, SpacerComponent, KeyValueComponent]
})
export class UiModule { }
