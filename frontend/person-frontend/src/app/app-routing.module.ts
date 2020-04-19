import {Component, NgModule} from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HeaderComponent} from './components/header/header.component';
import {HomeComponent} from './components/home/home.component';
import {AboutComponent} from './components/about/about.component';
import {ContactComponent} from './components/contact/contact.component';
import {ErrorComponent} from './components/error/error.component';
import {PersonComponent} from './components/person/person.component';
import {UpdatePersonComponent} from './components/update-person/update-person.component';
import {FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';


const routes: Routes = [
  {path: '' , component: HomeComponent},
  {path: 'home' , component: HomeComponent},
  {path: 'about' , component: AboutComponent},
  {path: 'contact' , component: ContactComponent},
  {path: 'person' , component: PersonComponent},
  {path: 'updatePerson/:id' , component: UpdatePersonComponent},
  {path: '**' , component: ErrorComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule,
  FormsModule,
  HttpClientModule]
})
export class AppRoutingModule { }
