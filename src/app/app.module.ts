import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GeneratorComponent } from './components/generator/generator.component';
import { PaymentsComponent } from './components/payments/payments.component';
import { HeaderComponent } from './components/header/header.component';
import { HomeComponent } from './components/home/home.component';
// import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { GridComponent } from './components/grid/grid.component';
import {MatGridListModule} from '@angular/material/grid-list';
import { CodeDisplayComponent } from './components/code-display/code-display.component';

@NgModule({
  declarations: [
    AppComponent,
    GeneratorComponent,
    PaymentsComponent,
    HeaderComponent,
    HomeComponent,
    GridComponent,
    CodeDisplayComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatGridListModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
