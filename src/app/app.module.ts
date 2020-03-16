import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {AgGridModule} from "ag-grid-angular";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AgGridExampleComponent } from './ag-grid-example/ag-grid-example.component';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { GenderChangeComponent } from './gender-change/gender-change.component';

@NgModule({
  declarations: [
    AppComponent,
    AgGridExampleComponent,
    GenderChangeComponent
  ],
  imports: [
    BrowserModule,
    RouterModule,
    HttpClientModule,
    AppRoutingModule,
    AgGridModule.withComponents([GenderChangeComponent])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
