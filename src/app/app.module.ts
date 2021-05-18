import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {AccordionModule} from 'primeng/accordion';
import { AppComponent } from './app.component';
import { NavigationComponent } from './layouts/navigation/navigation.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MenubarModule} from 'primeng/menubar';
import {RouterModule} from '@angular/router';
import {routes} from './app-routing.module';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
  ],
  imports: [
    BrowserModule,
    CommonModule,
    RouterModule.forRoot(routes),
    BrowserAnimationsModule,
    MenubarModule,
    AccordionModule
  ],
  exports: [NavigationComponent],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
