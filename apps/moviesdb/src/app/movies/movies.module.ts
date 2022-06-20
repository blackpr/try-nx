import { ListComponent } from './list/list.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { TableComponent } from './list/table/table.component';

const routes: Routes = [
  { path: '', redirectTo: '/movies/list', pathMatch: 'full' },
  { path: 'list', component: ListComponent },
];

@NgModule({
  declarations: [ListComponent, TableComponent],
  imports: [CommonModule, RouterModule.forChild(routes)],
})
export class MoviesModule {}
