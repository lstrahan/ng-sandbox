import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'my-input-suffix',
  templateUrl: './input-suffix.component.html',
  styleUrls: ['./input-suffix.component.scss']
})
export class InputSuffixComponent implements OnInit {

  iconStr: string = 'info';
  constructor() { }

  ngOnInit() {
  }

}
