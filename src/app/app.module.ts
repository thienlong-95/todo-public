import { NgModule } from '@angular/core';
import { NgbdModalConfig } from './components/modal/modal-config';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { DataService } from './services/data.service';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { AllComponent } from './components/all/all.component';
import { AddTodoComponent } from './components/add-todo/add-todo.component';
import { TodoComponent } from './components/todo/todo.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ActiveComponent } from './components/active/active.component';
import { CompleteComponent } from './components/complete/complete.component';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    AllComponent,
    AddTodoComponent,
    TodoComponent,
    NgbdModalConfig,
    ActiveComponent,
    CompleteComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    FormsModule,
    NgbModule,
    AppRoutingModule,
  ],
  providers: [DataService],
  bootstrap: [AppComponent],
})
export class AppModule {}
