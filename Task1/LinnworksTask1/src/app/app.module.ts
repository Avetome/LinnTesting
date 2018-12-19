import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CategoriesComponent } from './categories/categories.component';
import { CategoriesService } from './categories.service';

import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule, MatCheckboxModule, MatTableModule, MatSortModule, MatSnackBarModule } from '@angular/material';

import { MatInputModule } from '@angular/material/input';
import { TesttaskComponent } from './testtask/testtask.component';

import { TokenInterceptor } from './token.interceptor';
import { ErrorHandlerInterceptor } from './errorhandler.interceptor';

@NgModule({
  declarations: [
      AppComponent,
      CategoriesComponent,
      TesttaskComponent,
  ],
  imports: [
      BrowserModule,
      FormsModule,
      AppRoutingModule,
      HttpClientModule,
      BrowserAnimationsModule,
      MatButtonModule,
      MatTableModule,
      MatCheckboxModule,
      MatSortModule,
      MatInputModule,
      MatSnackBarModule
  ],
    providers: [
        CategoriesService,
        {
            provide: HTTP_INTERCEPTORS,
            useClass: ErrorHandlerInterceptor,
            multi: true
        },
        {
            provide: HTTP_INTERCEPTORS,
            useClass: TokenInterceptor,
            multi: true
        },
    ],
  bootstrap: [AppComponent]
})
export class AppModule { }
