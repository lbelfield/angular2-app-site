// necessary imports
import { NgModule } from "@angular/core"; 
import { BrowserModule } from "@angular/platform-browser"; 
// import { RouterModule }   from '@angular/router';

// bespoke components
import AppComponent from "./app.component"; 
import ShowHideComponent from "./showHide/showHide.component";

@NgModule({ 
  imports: [
    BrowserModule
    //routing still not working!!!!
    // , RouterModule.forRoot([
    //     {path: 'myapp', component: AppComponent},
    //     {path: 'showHide', component: ShowHideComponent}
    //   ])
    ], 
    //need to add every component to our declarations
  declarations: [
    AppComponent,
    ShowHideComponent
    ],
    // our bootstrap is AppComponent
  bootstrap: [AppComponent] 
})

export default class AppModule{}; 