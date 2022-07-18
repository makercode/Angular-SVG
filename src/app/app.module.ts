import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SvgComponent } from './architecture/svg/svg.component';
import { PathComponent } from './architecture/svg/components/path/path.component';
import { TodoistComponent } from './architecture/todoist/todoist.component';
import { TodoComponent } from './architecture/todoist/components/todo/todo.component'

import { DepartmentService } from './business/department/services/department.service';
@NgModule({
  declarations: [
    AppComponent,
    SvgComponent,
    PathComponent,
    TodoistComponent,
    TodoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    DepartmentService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
