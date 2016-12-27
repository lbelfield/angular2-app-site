import {Component} from "@angular/core"; // <-- importing Component from core

@Component({
    selector: "my-app", //<----the element defined in the index.html
    templateUrl: "../../app/shared/parent.html" // <---this is the template to put in the component.
})

export default class AppComponent {  // <--- we need to export the class AppComponent. 
    public childVisible: boolean;
    public childSavingIndicator: string;

    public constructor() {
        this.childVisible = true;
        this.childSavingIndicator = "start";
    }

    public showChild():void {
        this.childVisible = true;
        this.childSavingIndicator = "hello";
    }

    public hideChild():void {
        this.childVisible = false;
        this.childSavingIndicator = "world";
    }
} 