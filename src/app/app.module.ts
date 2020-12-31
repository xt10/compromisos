import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule} from '@angular/material/button';
import { MatTableModule } from '@angular/material/table'  



import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CompromiseMakerComponent } from './compromise-maker/compromise-maker.component';
import { TableConsultantComponent } from './table-consultant/table-consultant.component';
import { CompromiseFormComponent } from './compromise-form/compromise-form.component';


@NgModule({
  declarations: [
    AppComponent,
    CompromiseMakerComponent,
    TableConsultantComponent,
    CompromiseFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatToolbarModule,
    MatCardModule,
    MatDividerModule,
    MatInputModule,
    MatFormFieldModule,
    FormsModule,
    ReactiveFormsModule,
    MatIconModule,
    MatGridListModule,
    MatDatepickerModule,
    MatNativeDateModule ,
    BrowserAnimationsModule,
    MatButtonModule,
    MatTableModule
  ],
  providers: [MatDatepickerModule],
  bootstrap: [AppComponent]
})
export class AppModule { }
