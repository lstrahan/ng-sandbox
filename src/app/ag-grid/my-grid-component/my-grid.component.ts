// src/app/red-component/red-component.component.ts
import {Component} from '@angular/core';

@Component({
    selector: 'my-my-grid',
    templateUrl: './my-grid.component.html'
})
export class MyGridComponent {
    params: any;

    agInit(params: any): void {
        this.params = params;
    }
}
