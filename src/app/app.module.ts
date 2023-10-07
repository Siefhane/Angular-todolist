import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgbPaginationModule, NgbAlertModule } from '@ng-bootstrap/ng-bootstrap';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { ParentComponent } from './parent/parent.component';
import { ChildComponent } from './child/child.component';
import { TodoComponent } from './todo/todo.component';
import { FormsModule } from '@angular/forms'
import {MatSelectModule} from '@angular/material/select';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatListModule} from '@angular/material/list';


@NgModule({
  declarations: [
    AppComponent,
    ParentComponent,
    ChildComponent,
    TodoComponent,

  ],
  imports: [
    BrowserModule,
    NgbModule,
    BrowserAnimationsModule,
    NgbPaginationModule,
    NgbAlertModule,
    MatSlideToggleModule,
    FormsModule,
    MatSelectModule,
    MatInputModule,
    MatFormFieldModule,
    MatListModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
