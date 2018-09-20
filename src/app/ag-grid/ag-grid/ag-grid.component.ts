// src/app/my-grid-application/my-grid-application.component.ts
import {Component} from "@angular/core";
import {GridOptions} from "ag-grid";
import {RedComponentComponent} from "../red-component/red-component.component";

@Component({
    selector: 'app-ag-grid',
    templateUrl: './ag-grid.component.html',
    styleUrls: ['./ag-grid.component.scss']
})
export class MyAgGridComponent {
    gridOptions: GridOptions;

    constructor() {
        this.gridOptions = <GridOptions>{
          enableSorting: true,
          // enable filtering 
          enableFilter: true
        };
        this.gridOptions.columnDefs = [
            {
                headerName: "ID",
                field: "id",
                width: 100
            },
            {
                headerName: "Value",
                field: "value",
                cellRendererFramework: RedComponentComponent,
                width: 100
            },

        ];
        this.gridOptions.rowData = [
            {id: 5, value: 10},
            {id: 10, value: 15},
            {id: 15, value: 20}
        ]
    }
}