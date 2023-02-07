import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { DataTablesModule } from 'angular-datatables';
import { NgxPaginationModule } from 'ngx-pagination';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [],
  imports: [
  ],
  exports: [
    CommonModule,
    DataTablesModule,
    NgxPaginationModule,
    ReactiveFormsModule,
    TranslateModule
  ]
})
export class SharedModule { }
