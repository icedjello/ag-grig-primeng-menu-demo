import {Component} from '@angular/core';
import {EditorRendererComponent} from './editor-renderer.component';

@Component({
    selector: 'app-grid',
    template: `
        <div>
            <div #popupHolder></div>
            <ag-grid-angular
                    style="width: 600px; height: 500px;"
                    class="ag-theme-alpine"
                    [rowData]="rowData"
                    [columnDefs]="columnDefs"
                    [gridOptions]="gridOptions"
            ></ag-grid-angular>
        </div>
    `,
})
export class GridComponent {
    gridOptions = {
        frameworkComponents: {
            editorRendererComponent: EditorRendererComponent
        }
    };

    columnDefs = [
        {field: 'model'},
        {field: 'price'},
        {
            field: 'make',
            cellRenderer: 'editorRendererComponent'
        }
    ];

    rowData = [
        {make: 'Toyota', model: 'Celica', price: 35000},
        {make: 'Ford', model: 'Mondeo', price: 32000},
        {make: 'Porsche', model: 'Boxter', price: 72000}
    ];
}
