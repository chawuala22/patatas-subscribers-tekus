import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SubscriberFormComponent } from './subscriber-form/subscriber-form.component';
import { MatInputModule } from '@angular/material/input';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    SubscriberFormComponent
  ],
  imports: [
    CommonModule,
    MatInputModule,
    FormsModule,
    ReactiveFormsModule,
  ]
})
export class ComponentsModule { }
