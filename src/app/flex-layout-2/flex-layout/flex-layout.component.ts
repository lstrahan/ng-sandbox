import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-flex-layout',
  templateUrl: './flex-layout.component.html',
  styleUrls: ['./flex-layout.component.scss']
})
export class FlexLayoutComponent implements OnInit {

  paragraph = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ut ligula nisi. Praesent id eros sapien.
  Pellentesque quis congue augue. In magna felis, lacinia vitae nisl vel, aliquet consequat augue. Proin
  condimentum vel ante vel aliquam. Aliquam eleifend sodales nibh, sit amet interdum nunc iaculis id. Orci varius
  natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Integer consectetur sollicitudin
  diam,
  in convallis turpis varius eu. Morbi elementum nibh in leo tincidunt scelerisque. Phasellus sit amet egestas
  enim. Nullam tempor felis suscipit ligula tempor laoreet. Curabitur vitae magna sagittis, tincidunt massa
  tincidunt, gravida libero. Nulla iaculis, leo sit amet luctus convallis, lectus lectus cursus lectus, semper
  ultrices ante mi eu magna. Quisque purus lectus, imperdiet et risus sit amet, ornare volutpat eros. Donec massa
  justo, sagittis ut facilisis sed, accumsan eget sem.`;
  
  constructor() { }

  ngOnInit() {
  }

}