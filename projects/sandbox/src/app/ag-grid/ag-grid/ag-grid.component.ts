import {Component} from '@angular/core';
import {GridOptions} from 'ag-grid-community';
import {RedComponentComponent} from '../red-component/red-component.component';
import data from './data.json';

@Component({
    selector: 'ags-ag-grid',
    templateUrl: './ag-grid.component.html',
    styleUrls: ['./ag-grid.component.scss']
})
export class MyAgGridComponent {
    gridOptions: GridOptions;

    constructor() {
        this.gridOptions = <GridOptions>{
          enableSorting: true,
          enableFilter: true
        };
        this.gridOptions.columnDefs = [
            { headerName: 'Brand', field: 'brand', width: 200, pinned: 'left' },
            { headerName: 'Year', field: 'year', width: 200 },
            { headerName: 'Color', field: 'color', width: 200 },
            { headerName: 'VIN', field: 'vin', width: 200, cellRendererFramework: RedComponentComponent },
            { headerName: 'VIN', field: 'vin', width: 200 },
            { headerName: 'VIN', field: 'vin', width: 200 },
            { headerName: 'VIN', field: 'vin', width: 200 },
            { headerName: 'VIN', field: 'vin', width: 200 },
            { headerName: 'VIN', field: 'vin', width: 200 },
            { headerName: 'VIN', field: 'vin', width: 200 },
            { headerName: 'VIN', field: 'vin', width: 200 },
            { headerName: 'VIN', field: 'vin', width: 200 }
        ];
        this.gridOptions.rowData = data;
    }
}
