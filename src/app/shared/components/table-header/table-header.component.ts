import { Component, EventEmitter, inject, Input, input, OnInit, Output, output, signal } from '@angular/core';
import { DataExplorationService } from '../../services/data-exploration.service';
import { MatFormField, MatLabel } from '@angular/material/form-field';
import { MatOption, MatSelect } from '@angular/material/select';
import { MatCheckbox } from '@angular/material/checkbox';
import { MatButton } from '@angular/material/button';
import { MatMenu, MatMenuItem, MatMenuTrigger } from '@angular/material/menu';
import { FormsModule } from '@angular/forms';
import { NgForOf } from '@angular/common';
import { data } from 'autoprefixer';
// import { log } from '@angular-devkit/build-angular/src/builders/ssr-dev-server';

@Component({
  selector: 'app-table-header',
  standalone: true,
  imports: [
    MatFormField,
    MatSelect,
    MatOption,
    MatCheckbox,
    MatButton,
    MatMenu,
    MatLabel,
    MatMenuItem,
    MatMenuTrigger,
    FormsModule,
    NgForOf,
  ],
  templateUrl: './table-header.component.html',
  styleUrl: './table-header.component.scss',
})
export class TableHeaderComponent{
  //Table Signal
  title = input<string>('');
  @Output() exportToPDF = new EventEmitter<void>();


  //Inject the dataExploration Service
  dataExplorationService=inject(DataExplorationService);

  onExportToPDF (){
    this.exportToPDF.emit();
  }


  exportToExcel(){
    this.dataExplorationService.generateExcel()
  }

  exportToPrint(){
    const data=['Hello World']
    this.dataExplorationService.generatePrint(data,'Hello World')
    console.log('Download to PDF')
  }

  exportToCsv(){
    const data=['Hello Word']
    this.dataExplorationService.generateCsv('Hello',data)
  }


}
