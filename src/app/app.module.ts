import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';


import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { HeaderComponent } from './components/header/header.component';
import { TodoInputComponent } from './components/todo-input/todo-input.component';
import {TodoTagComponent} from './components/tags/todo-tag-component';
import {TodoService} from './services/todo.service';
import { TodoItemComponent } from './components/todo-item/todo-item.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    HeaderComponent,
    TodoInputComponent,
    TodoItemComponent,
    TodoTagComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [
    TodoService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
