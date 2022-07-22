import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

// Main components
import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './pages/home/home.component';

// Secondary components
import { AppComponent } from './app.component';
import { SvgComponent } from './components/svg/svg.component';
import { PathComponent } from './components/svg/components/path/path.component';
import { TodoistComponent } from './components/todoist/todoist.component';
import { TodoComponent } from './components/todoist/components/todo/todo.component'

// Services
import { DepartmentService } from './business/department/services/department.service';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,

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
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
