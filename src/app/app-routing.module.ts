import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CreateMessageComponent } from './create-message/create-message.component';
import { DisplayMessageComponent } from './display-message/display-message.component';


const routes: Routes = [
{path:'create-message', component:CreateMessageComponent},
{path:'display-message', component:DisplayMessageComponent}
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
