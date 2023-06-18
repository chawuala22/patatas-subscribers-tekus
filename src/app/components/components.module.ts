import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SubscriberFormComponent } from './subscriber-form/subscriber-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';

@NgModule({
  declarations: [SubscriberFormComponent],
  imports: [
    CommonModule,
    MatInputModule,
    MatButtonModule,
    FormsModule,
    ReactiveFormsModule,
    MatDialogModule,
  ],
})
export class ComponentsModule {}
