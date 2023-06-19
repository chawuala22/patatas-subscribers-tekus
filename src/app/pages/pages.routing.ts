import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { SubscriberListComponent } from './subscriber-list/subscriber-list.component';
import { SubscriberDetailComponent } from './subscriber-detail/subscriber-detail.component';
import { AuthGuard } from '../guards/auth.guard';

const routes: Routes = [
  { path: 'home', component: SubscriberListComponent, canActivate: [AuthGuard] },
  { path: 'subscriber-detail/:id', component: SubscriberDetailComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PagesRoutingModule {}
