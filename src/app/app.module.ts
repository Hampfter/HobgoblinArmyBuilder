import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { DropdownModule } from 'primeng/dropdown';
import { TableModule } from 'primeng/table';
import { ButtonModule } from 'primeng/button';
import { CheckboxModule } from 'primeng/checkbox';



import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ArmySelectorComponent } from './components/army-selector/army-selector.component';
import { StrengthSelectorComponent } from './components/strength-selector/strength-selector.component';
import { WeaknessSelectorComponent } from './components/weakness-selector/weakness-selector.component';


@NgModule({
  declarations: [
    AppComponent,
    ArmySelectorComponent,
    StrengthSelectorComponent,
    WeaknessSelectorComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    FormsModule,
    DropdownModule,
    TableModule,
    ButtonModule,
    CheckboxModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
