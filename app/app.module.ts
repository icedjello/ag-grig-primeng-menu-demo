import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import {AppComponent} from './app.component';

import {MenuModule} from 'primeng/menu';
import {ButtonModule} from 'primeng/button';
import {RippleModule} from 'primeng/ripple';
import {EditorRendererComponent} from './components/grid/editor-renderer.component';

import {AgGridModule} from 'ag-grid-angular';
import {GridComponent} from './components/grid/grid.component';

@NgModule({
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        MenuModule,
        RippleModule,
        ButtonModule,
        AgGridModule.withComponents([
            EditorRendererComponent
        ])
    ],
    declarations: [AppComponent, GridComponent, EditorRendererComponent],
    bootstrap: [AppComponent]
})

export class AppModule {
}
