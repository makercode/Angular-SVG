import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PathComponent } from './svg/components/path/path.component';
import { SvgComponent } from './svg/svg.component';
import { DepartmentService } from './svg/services/department/department.service'

@NgModule({
  declarations: [
    AppComponent,
    SvgComponent,
    PathComponent
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
