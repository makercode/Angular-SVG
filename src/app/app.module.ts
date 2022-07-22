import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SvgComponent } from './components/svg/svg.component';
import { PathComponent } from './components/svg/components/path/path.component';
import { TodoistComponent } from './components/todoist/todoist.component';
import { TodoComponent } from './components/todoist/components/todo/todo.component'

import { DepartmentService } from './business/department/services/department.service';
import { HomeComponent } from './pages/home/home.component';
@NgModule({
  declarations: [
    AppComponent,
    SvgComponent,
    PathComponent,
    TodoistComponent,
    TodoComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    DepartmentService
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
