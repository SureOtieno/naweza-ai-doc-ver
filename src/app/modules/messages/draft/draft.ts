import {Component, ElementRef, signal} from '@angular/core';
import {Card} from '../../shared/components/card/card';
import {SidebarComponent} from '../../shared/components/sidebar/sidebar';
import {Toast} from 'primeng/toast';
import {TableModule} from 'primeng/table';
import {MultiSelect} from 'primeng/multiselect';
import {FormsModule} from '@angular/forms';
import {Button} from 'primeng/button';
import {ConfirmDialog} from 'primeng/confirmdialog';
import {ButtonComponent} from '../../shared/components/button/button.component';

@Component({
  selector: 'app-draft',
  imports: [
    Card,
    SidebarComponent,
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

}
