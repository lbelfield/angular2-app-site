// necessary imports
import { NgModule } from "@angular/core"; 
import { BrowserModule } from "@angular/platform-browser"; 
import { RouterModule, Routes }   from '@angular/router';
import {PathLocationStrategy, LocationStrategy, HashLocationStrategy} from '@angular/common';

// bespoke components
import AppComponent from "./app.component"; 
import ShowHideComponent from "./showHide/showHide.component";

const appRoutes: Routes = [
        {path: "myapp", component: AppComponent},
        {path: "showHide", component: ShowHideComponent},
  { path: '',
    redirectTo: '/showHide',
    pathMatch: 'full'
  }
];

@NgModule({ 
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes)
    ], 
    providers: [{provide: LocationStrategy, useClass : HashLocationStrategy }],
    //need to add every component to our declarations
  declarations: [
    AppComponent,
    ShowHideComponent
    ],
    // our bootstrap is AppComponent
  bootstrap: [AppComponent] 
})

export default class AppModule{}; 