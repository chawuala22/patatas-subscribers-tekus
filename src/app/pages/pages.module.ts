import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SubscriberListComponent } from './subscriber-list/subscriber-list.component';
import { SubscriberDetailComponent } from './subscriber-detail/subscriber-detail.component';
import { SharedModule } from '../shared/shared.module';
import { ComponentsModule } from '../components/components.module';

import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import {MatDialogModule} from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [SubscriberListComponent, SubscriberDetailComponent],
  imports: [
    CommonModule,
    HttpClientModule,
    SharedModule,
    ComponentsModule,
    MatTableModule,
    MatPaginatorModule,
    MatInputModule,
    MatButtonModule,
    MatDialogModule,
    MatIconModule
  ],
})
export class PagesModule {}
