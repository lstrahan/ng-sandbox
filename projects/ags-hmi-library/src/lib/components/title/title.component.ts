import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'ags-lib-title',
  templateUrl: './title.component.html',
  styleUrls: ['./title.component.scss']
})

export class TitleComponent implements OnInit {
  @Input() title: string;
  @Output() onCancel = new EventEmitter<void>();

  constructor() { }

  ngOnInit() {
  }

  onClick() {
    this.onCancel.emit();
  }
}
