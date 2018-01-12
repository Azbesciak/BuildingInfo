import {Component, OnInit} from '@angular/core';
import {MatDialog} from "@angular/material";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(
    public dialog: MatDialog,) {}


  ngOnInit() {
  }

}
