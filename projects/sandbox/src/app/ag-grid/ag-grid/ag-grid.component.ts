import { Component, ViewEncapsulation } from '@angular/core';
import { GridOptions, ColDef, GridApi, ColumnApi, GridReadyEvent, SelectionChangedEvent, RowBounds, RowClickedEvent, ModelUpdatedEvent, RowDataChangedEvent, DateFilter } from 'ag-grid-community';
import { MyGridComponent } from '../my-grid-component/my-grid.component';
import data from './data.json';

@Component({
  selector: 'ags-ag-grid',
  templateUrl: './ag-grid.component.html',
  styleUrls: ['./ag-grid.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class MyAgGridComponent {
  gridApi: GridApi;
  gridColumnApi: ColumnApi;
  gridOptions: GridOptions;
  columnDefs: ColDef[];
  defaultColDef: ColDef;
  rowData = data;
  originalCount = data.length;

  constructor() {
    this.gridOptions = <GridOptions>{
      enableSorting: true,
      enableFilter: true
    }
    this.defaultColDef = <ColDef>{
      width: 200
    };
    this.columnDefs = <ColDef[]>[
      { headerName: 'Name', field: 'name', pinned: 'left' },
      { headerName: 'Last Updated', field: 'lastUpdated' },
      { headerName: 'Last Updated By', field: 'userLogon' },
      { headerName: 'Field 1', field: 'field1', suppressSorting: true, suppressFilter: true, cellRendererFramework: MyGridComponent },
      { headerName: 'Field 2', field: 'field2' },
      { headerName: 'Field 3', field: 'field3' },
      { headerName: 'Field 4', field: 'field4' },
      { headerName: 'Field 5', field: 'field5' }
    ];
  }

  onGridReady(params: GridReadyEvent) {
    this.gridApi = params.api;
    this.gridColumnApi = params.columnApi;
  }

  onRowClicked(event: RowClickedEvent) {
    console.log(`clicked on ${event.data.id}`, event);
  }

  onModelUpdated(event: ModelUpdatedEvent) {
    console.log('onModelUpdated', event);
  }

  onRowDataChanged(event: RowDataChangedEvent) {
    console.log('onRowDataChanged', event);
  }

  onButtonClick(event: any) {
    console.log('onButtonClick', event);
    if (this.rowData.length > 100) {
      this.rowData = data.slice(50, 100);
    } else {
      this.rowData = data;
    }
  }
}
