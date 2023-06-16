import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { SubscriberListComponent } from './subscriber-list/subscriber-list.component';


const routes: Routes = [
 {path: 'home', component:SubscriberListComponent}
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class PagesRoutingModule {}
