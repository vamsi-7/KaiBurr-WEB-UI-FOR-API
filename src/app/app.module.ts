import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { GetOperationComponentComponent } from './get-operation-component/get-operation-component.component';
import { PostOperationComponentComponent } from './post-operation-component/post-operation-component.component';
import { UpdateOperationComponentComponent } from './update-operation-component/update-operation-component.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    GetOperationComponentComponent,
    PostOperationComponentComponent,
    UpdateOperationComponentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
