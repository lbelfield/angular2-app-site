"use strict";

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
    var c = arguments.length,
        r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
        d;
    if ((typeof Reflect === "undefined" ? "undefined" : _typeof(Reflect)) === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    }return c > 3 && r && Object.defineProperty(target, key, r), r;
};
// necessary imports
var core_1 = require("@angular/core");
var platform_browser_1 = require("@angular/platform-browser");
var router_1 = require('@angular/router');
var common_1 = require('@angular/common');
// bespoke components
var app_component_1 = require("./app.component");
var showHide_component_1 = require("./showHide/showHide.component");
var wadup_component_1 = require("./wadup/wadup.component");
var appRoutes = [{ path: "myapp", component: app_component_1.default }, { path: "showHide", component: showHide_component_1.default }, { path: "wadup", component: wadup_component_1.default }, { path: '', redirectTo: '/showHide', pathMatch: 'full' }];
var AppModule = function AppModule() {
    _classCallCheck(this, AppModule);
};
AppModule = __decorate([core_1.NgModule({
    imports: [platform_browser_1.BrowserModule, router_1.RouterModule.forRoot(appRoutes)],
    providers: [{ provide: common_1.LocationStrategy, useClass: common_1.HashLocationStrategy }],
    //need to add every component to our declarations
    declarations: [app_component_1.default, showHide_component_1.default, wadup_component_1.default],
    // our bootstrap is AppComponent
    bootstrap: [app_component_1.default]
})], AppModule);
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = AppModule;
;
//# sourceMappingURL=app.module.js.map