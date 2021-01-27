import {Component} from '@angular/core';
import {MenuItem, PrimeNGConfig} from 'primeng/api';
import {ICellRendererAngularComp} from 'ag-grid-angular';
import {ICellRendererParams} from 'ag-grid-community';


@Component({
    selector: 'app-root',
    template: `
        <button
                type="button"
                pButton pRipple
                icon="pi pi-bars"
                label="Show"
                (click)="menu.toggle($event)"
        ></button>
        <p-menu
                #menu
                [popup]="true"
                appendTo="body"
                [model]="items"
        >
        </p-menu>
    `,
    providers: []
})
export class EditorRendererComponent implements ICellRendererAngularComp {

    items: MenuItem[];
    value1 = '';

    constructor(private primengConfig: PrimeNGConfig) {
    }

    agInit(params: ICellRendererParams): void {
        this.primengConfig.ripple = true;

        this.items = [{
            label: 'Options',
            items: [
                {
                    label: 'Update',
                    icon: 'pi pi-refresh',
                    command: () => {
                        this.update();
                    }
                },
                {
                    label: `<p>Hello,</p>`,
                    escape: false
                },
                {
                    label: `<p>World!</p>`,
                    escape: false
                },
                {
                    label: 'Delete',
                    icon: 'pi pi-times',
                    command: () => {
                        this.delete();
                    }
                },

            ]
        },
        ];
    }

    update() {
        console.log('update');
    }

    delete() {
        console.log('delete');
    }

    refresh(params: ICellRendererParams): boolean {
        return false;
    }
}
