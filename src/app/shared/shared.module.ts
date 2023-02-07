import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { DataTablesModule } from 'angular-datatables';
import { NgxPaginationModule } from 'ngx-pagination';


@NgModule({
  declarations: [],
  imports: [
  ],
  exports: [
    CommonModule,
    DataTablesModule,
    NgxPaginationModule,
    TranslateModule
  ]
})
export class SharedModule { }
