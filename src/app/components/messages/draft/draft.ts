import {Component, ElementRef, signal} from '@angular/core';
import {Card} from '../../shared/card/card';
import {Sidebar} from '../../shared/sidebar/sidebar';
import {Toast} from 'primeng/toast';
import {TableModule} from 'primeng/table';
import {MultiSelect} from 'primeng/multiselect';
import {FormsModule} from '@angular/forms';
import {Button} from 'primeng/button';
import {ConfirmDialog} from 'primeng/confirmdialog';
import {ButtonComponent} from '../../shared/button/button.component';

@Component({
  selector: 'app-draft',
  imports: [
    Card,
    Sidebar,
    Toast,
    TableModule,
    MultiSelect,
    FormsModule,
    Button,
    ConfirmDialog,
    ButtonComponent
  ],
  templateUrl: './draft.html',
  styleUrl: './draft.scss'
})
export class Draft {


  title = signal<string | null>("Drafts");


  approve(row: any) {

  }

  update(row: any) {

  }

  delete(row: any) {

  }

  view(_t48: any) {
    throw new Error('Method not implemented.');
  }
}
