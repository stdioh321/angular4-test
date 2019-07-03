import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';


import { AppComponent } from './app.component';


import { CitiesComponent } from './cities/cities.component';
import { StatesComponent } from './states/states.component';
import { MyDirectiveDirective } from './my-directive.directive';
import { BlurDirective } from './blur.directive';
import { SqrtPipe } from './sqrt.pipe';
import { AddtextPipe } from './addtext.pipe';
import { NotFoundComponent } from './not-found/not-found.component';

import { MyServiceService } from "./my-service.service";
import { ShowOnConsolePipe } from './show-on-console.pipe';
import { HomeComponent } from './home/home.component';


// import { MatButton} from '@angular/material';



@NgModule({
  declarations: [
    AppComponent,
    CitiesComponent,
    StatesComponent,
    MyDirectiveDirective,
    BlurDirective,
    SqrtPipe,
    AddtextPipe,
    NotFoundComponent,
    ShowOnConsolePipe,
    HomeComponent,

  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    HttpClientModule,
    RouterModule.forRoot([
      { path: '', redirectTo: 'cities', pathMatch: 'full' },
      { path: 'cities', component: CitiesComponent },
      { path: 'states', component: StatesComponent },
      { path: 'home', component: HomeComponent },
      { path: '404', component: NotFoundComponent },
      { path: '**', redirectTo: '404' },

    ])
    
  ],
  providers: [MyServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
