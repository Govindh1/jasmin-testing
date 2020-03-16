import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AgGridExampleComponent } from './ag-grid-example/ag-grid-example.component';


const routes: Routes = [
  {
    path: 'grid',
    component: AgGridExampleComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
