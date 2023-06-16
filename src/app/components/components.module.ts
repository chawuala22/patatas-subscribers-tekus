import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SubscriberEditComponent } from './subscriber-edit/subscriber-edit.component';
import { SubscriberCreateComponent } from './subscriber-create/subscriber-create.component';



@NgModule({
  declarations: [
    SubscriberEditComponent,
    SubscriberCreateComponent
  ],
  imports: [
    CommonModule
  ]
})
export class ComponentsModule { }
