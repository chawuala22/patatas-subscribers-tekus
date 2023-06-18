import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SubscriberListComponent } from './subscriber-list/subscriber-list.component';
import { SubscriberDetailComponent } from './subscriber-detail/subscriber-detail.component';
import { SharedModule } from '../shared/shared.module';
import { ComponentsModule } from '../components/components.module';

@NgModule({
  declarations: [SubscriberListComponent, SubscriberDetailComponent],
  imports: [CommonModule, SharedModule, ComponentsModule]
})
export class PagesModule {}
