import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PathComponent } from './svg/components/path/path.component';
import { SvgComponent } from './svg/svg.component';
import { DepartmentService } from './svg/services/department/department.service';
import { TodoistComponent } from './todoist/todoist.component';
import { TodoComponent } from './todoist/components/todo/todo.component'

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
