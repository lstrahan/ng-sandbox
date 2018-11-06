import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ags-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  isDarkTheme = false;

  constructor() { }

  ngOnInit() { }

}
