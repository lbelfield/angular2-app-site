"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
const core_1 = require("@angular/core"); // <-- importing Component from core
let AppComponent = class AppComponent {
    constructor() {
        this.childVisible = true;
        this.childSavingIndicator = "start";
    }
    showChild() {
        this.childVisible = true;
        this.childSavingIndicator = "hello";
    }
    hideChild() {
        this.childVisible = false;
        this.childSavingIndicator = "world";
    }
};
AppComponent = __decorate([
    // <-- importing Component from core
    core_1.Component({
        selector: "my-app",
        templateUrl: "../../app/shared/parent.html" // <---this is the template to put in the component.
    })
], AppComponent);
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = AppComponent;
//# sourceMappingURL=app.component.js.map