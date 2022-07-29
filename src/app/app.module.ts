import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

// Main components
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './views/home/home.component';

// Secondary components
import { SvgComponent } from './components/svg/svg.component';
import { PathComponent } from './components/svg/components/path/path.component';
import { TodoistComponent } from './components/todoist/todoist.component';
import { TodoComponent } from './components/todoist/components/todo/todo.component'

// Dependant components
import { CountryComponent } from './views/country/country.component';
import { PeruComponent } from './views/country/components/peru/peru.component';

// Services
import { PeruDepartmentService } from './business/department/services/peru/perudepartment.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// Material design
import { MatToolbarModule } from  '@angular/material/toolbar';
import { MatIconModule } from  '@angular/material/icon';
import { MatSidenavModule } from  '@angular/material/sidenav';
import { MatListModule } from  '@angular/material/list';
import { MatButtonModule } from  '@angular/material/button';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,

    SvgComponent,
    PathComponent,
    TodoistComponent,
    TodoComponent,
    CountryComponent,
    PeruComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    /* Material design */
    MatToolbarModule,
    MatSidenavModule,
    MatListModule,
    MatButtonModule,
    MatIconModule
  ],
  providers: [
    PeruDepartmentService
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
