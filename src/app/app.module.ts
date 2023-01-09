import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { JsonPipe } from './pipeJsonPipe';
import { AppComponent } from './app.component';
import { FilterOrdePipe } from './pipeOrderFilter';
import { PipetestComponent } from './pipetest/pipetest.component';

@NgModule({
  declarations: [
    AppComponent,
    PipetestComponent,
    FilterOrdePipe,
    JsonPipe
    
  ],
  imports: [
    BrowserModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
