// Import
// importing Component from core
import {Component} from "@angular/core"; 

// Decorator
@Component({
    // the element defined in the index.html
    selector: "my-app",
    
    // this is the template to put in the component. Note this is the directive of showHide.component.ts
    // the name of the directive is defined in the Decorator's selector
    template: `<my-showHide></my-showHide> <router-outlet></router-outlet>`   
    // template: `sup`   
})

// Class
// we need to export the class AppComponent. 
export default class AppComponent {
} 