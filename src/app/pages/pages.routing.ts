import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { SubscriberListComponent } from './subscriber-list/subscriber-list.component';
import { SubscriberDetailComponent } from './subscriber-detail/subscriber-detail.component';

const routes: Routes = [{ path: 'home', component: SubscriberListComponent },
{ path: 'subscriber-detail:/id', component: SubscriberDetailComponent}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PagesRoutingModule {}
