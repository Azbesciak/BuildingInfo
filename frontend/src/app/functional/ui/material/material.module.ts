import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {
  MatToolbarModule, MatButtonModule, MatCardModule, MatFormFieldModule, MatInputModule,
  MatIconModule, MatDialogModule, ShowOnDirtyErrorStateMatcher, ErrorStateMatcher,
  MatButtonToggleModule, MatTooltipModule,
} from "@angular/material";
import {ReactiveFormsModule} from "@angular/forms";

const MATERIAL_MODULES = [
  BrowserAnimationsModule,
  MatInputModule,
  MatFormFieldModule,
  MatCardModule,
  MatButtonModule,
  MatButtonToggleModule,
  MatToolbarModule,
  MatIconModule,
  MatDialogModule,
  ReactiveFormsModule,
  MatTooltipModule
];

@NgModule({
  imports: [
    CommonModule,
    MATERIAL_MODULES
  ],
  exports: [
    BrowserAnimationsModule,
    MATERIAL_MODULES
  ],
  declarations: []
})
export class MaterialModule { }
