(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error('Cannot find module "' + req + '".');
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _factions_rebels_rebels_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./factions/rebels/rebels.component */ "./src/app/factions/rebels/rebels.component.ts");
/* harmony import */ var _factions_imperials_imperials_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./factions/imperials/imperials.component */ "./src/app/factions/imperials/imperials.component.ts");
/* harmony import */ var _factions_scum_scum_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./factions/scum/scum.component */ "./src/app/factions/scum/scum.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


// Factions



var routes = [
    { path: '', redirectTo: '/rebels', pathMatch: 'full' },
    { path: 'rebels', component: _factions_rebels_rebels_component__WEBPACK_IMPORTED_MODULE_2__["RebelsComponent"] },
    { path: 'imperials', component: _factions_imperials_imperials_component__WEBPACK_IMPORTED_MODULE_3__["ImperialsComponent"] },
    { path: 'scum', component: _factions_scum_scum_component__WEBPACK_IMPORTED_MODULE_4__["ScumComponent"], },
    { path: '**', redirectTo: 'rebels' }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-header [title]=\"title\" [strap]=\"strap\"></app-header>\n<app-navigation></app-navigation>\n<router-outlet></router-outlet>\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'X-Wing 2E';
        this.strap = 'Stop Gapp';
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html")
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _core_core_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./core/core.module */ "./src/app/core/core.module.ts");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _factions_imperials_imperials_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./factions/imperials/imperials.component */ "./src/app/factions/imperials/imperials.component.ts");
/* harmony import */ var _factions_rebels_rebels_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./factions/rebels/rebels.component */ "./src/app/factions/rebels/rebels.component.ts");
/* harmony import */ var _factions_scum_scum_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./factions/scum/scum.component */ "./src/app/factions/scum/scum.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






// Factions



var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                _factions_imperials_imperials_component__WEBPACK_IMPORTED_MODULE_6__["ImperialsComponent"],
                _factions_rebels_rebels_component__WEBPACK_IMPORTED_MODULE_7__["RebelsComponent"],
                _factions_scum_scum_component__WEBPACK_IMPORTED_MODULE_8__["ScumComponent"]
            ],
            imports: [
                _app_routing_module__WEBPACK_IMPORTED_MODULE_5__["AppRoutingModule"],
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _core_core_module__WEBPACK_IMPORTED_MODULE_2__["CoreModule"],
                _shared_shared_module__WEBPACK_IMPORTED_MODULE_3__["SharedModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/core/core.module.ts":
/*!*************************************!*\
  !*** ./src/app/core/core.module.ts ***!
  \*************************************/
/*! exports provided: CoreModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CoreModule", function() { return CoreModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./header/header.component */ "./src/app/core/header/header.component.ts");
/* harmony import */ var _navigation_navigation_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./navigation/navigation.component */ "./src/app/core/navigation/navigation.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var CoreModule = /** @class */ (function () {
    function CoreModule() {
    }
    CoreModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"]
            ],
            exports: [
                _header_header_component__WEBPACK_IMPORTED_MODULE_4__["HeaderComponent"],
                _navigation_navigation_component__WEBPACK_IMPORTED_MODULE_5__["NavigationComponent"]
            ],
            declarations: [
                _header_header_component__WEBPACK_IMPORTED_MODULE_4__["HeaderComponent"],
                _navigation_navigation_component__WEBPACK_IMPORTED_MODULE_5__["NavigationComponent"]
            ]
        })
    ], CoreModule);
    return CoreModule;
}());



/***/ }),

/***/ "./src/app/core/header/header.component.html":
/*!***************************************************!*\
  !*** ./src/app/core/header/header.component.html ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"header__title\">{{ title }} <span class=\"header__strap\" *ngIf=\"strap\">{{ strap }}</span></div>\n"

/***/ }),

/***/ "./src/app/core/header/header.component.scss":
/*!***************************************************!*\
  !*** ./src/app/core/header/header.component.scss ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/*\n\nHeader\n\n*/\n/* ---------- Variables */\n/* ---------- Component */\n:host,\n.header {\n  display: block; }\n/* ---------- Elements */\n.header__title {\n  max-width: 1280px;\n  margin: 0 auto;\n  font-size: 22px;\n  font-weight: bold;\n  line-height: 1;\n  padding: 19px 12px; }\n.header__strap {\n  font-weight: normal; }\n"

/***/ }),

/***/ "./src/app/core/header/header.component.ts":
/*!*************************************************!*\
  !*** ./src/app/core/header/header.component.ts ***!
  \*************************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HeaderComponent = /** @class */ (function () {
    function HeaderComponent() {
        this.attrClass = true;
    }
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"])('class.header'),
        __metadata("design:type", Boolean)
    ], HeaderComponent.prototype, "attrClass", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], HeaderComponent.prototype, "title", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], HeaderComponent.prototype, "strap", void 0);
    HeaderComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-header',
            template: __webpack_require__(/*! ./header.component.html */ "./src/app/core/header/header.component.html"),
            styles: [__webpack_require__(/*! ./header.component.scss */ "./src/app/core/header/header.component.scss")]
        })
    ], HeaderComponent);
    return HeaderComponent;
}());



/***/ }),

/***/ "./src/app/core/model/ship.ts":
/*!************************************!*\
  !*** ./src/app/core/model/ship.ts ***!
  \************************************/
/*! exports provided: Ship */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Ship", function() { return Ship; });
var Ship = /** @class */ (function () {
    function Ship(name, cost, pilot, unique, faction, shipAbility, pilotAbility, size, agility, initiative, attack, hull, shields, actions) {
        this.name = name;
        this.cost = parseInt(cost);
        this.pilot = pilot;
        this.unique = unique === 'TRUE' ? true : false;
        this.faction = faction;
        this.shipAbility = shipAbility;
        this.pilotAbility = pilotAbility;
        this.size = size;
        this.initiative = parseInt(initiative);
        this.attack = attack;
        this.agility = parseInt(agility);
        this.hull = parseInt(hull);
        this.shields = parseInt(shields);
        this.actions = actions;
        this.totalCost = this.cost;
    }
    Ship.prototype.value = function (value) {
        if (!value)
            return undefined;
        return value === 'TRUE' ? '' : value === '' ? undefined : undefined;
    };
    Ship.prototype.setValue = function (restriction, value) {
        if (value === 'TRUE')
            return '';
        if (value === undefined || value === '')
            return undefined;
        this[restriction] = value;
        return undefined;
    };
    return Ship;
}());



/***/ }),

/***/ "./src/app/core/model/upgrade.ts":
/*!***************************************!*\
  !*** ./src/app/core/model/upgrade.ts ***!
  \***************************************/
/*! exports provided: Upgrade */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Upgrade", function() { return Upgrade; });
var Upgrade = /** @class */ (function () {
    function Upgrade(name, cost, unique, ability, type, restriction) {
        this.name = name;
        this.cost = cost;
        this.unique = unique === 'TRUE';
        this.ability = ability;
        this.type = type;
        this.restriction = restriction;
    }
    return Upgrade;
}());



/***/ }),

/***/ "./src/app/core/navigation/navigation.component.html":
/*!***********************************************************!*\
  !*** ./src/app/core/navigation/navigation.component.html ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"navigation__controls\">\n  <button class=\"button\" [routerLink]=\"['rebels']\" routerLinkActive=\"is-active\"><span class=\"navigation__control__long-name\">Rebel Alliance</span><span class=\"navigation__control__short-name\">Rebels</span></button>\n  <button class=\"button\" [routerLink]=\"['imperials']\" routerLinkActive=\"is-active\"><span class=\"navigation__control__long-name\">Galactic Empire</span><span class=\"navigation__control__short-name\">Imperials</span></button>\n  <button class=\"button\" [routerLink]=\"['scum']\" routerLinkActive=\"is-active\"><span class=\"navigation__control__long-name\">Scum and Villainy</span><span class=\"navigation__control__short-name\">Scum</span></button>\n</div>\n"

/***/ }),

/***/ "./src/app/core/navigation/navigation.component.scss":
/*!***********************************************************!*\
  !*** ./src/app/core/navigation/navigation.component.scss ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/*\n\nNavigation\n\n*/\n/* ---------- Component */\n:host,\n.navigation {\n  display: block;\n  border-bottom: 1px solid #CCCCCC;\n  margin-bottom: 24px; }\n/* ---------- Elements */\n.navigation__controls {\n  max-width: 1280px;\n  margin: 0 auto;\n  padding: 0 12px;\n  display: flex; }\n.navigation__controls > * {\n    flex: 1; }\n.navigation__controls .button {\n    margin-bottom: -1px;\n    margin-left: -1px; }\n.navigation__control__long-name {\n  display: none; }\n@media screen and (min-width: 768px) {\n    .navigation__control__long-name {\n      display: inline; } }\n@media screen and (min-width: 768px) {\n  .navigation__control__short-name {\n    display: none; } }\n"

/***/ }),

/***/ "./src/app/core/navigation/navigation.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/core/navigation/navigation.component.ts ***!
  \*********************************************************/
/*! exports provided: NavigationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavigationComponent", function() { return NavigationComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var NavigationComponent = /** @class */ (function () {
    function NavigationComponent() {
        this.attrClass = true;
    }
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"])('class.navigation'),
        __metadata("design:type", Boolean)
    ], NavigationComponent.prototype, "attrClass", void 0);
    NavigationComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-navigation',
            template: __webpack_require__(/*! ./navigation.component.html */ "./src/app/core/navigation/navigation.component.html"),
            styles: [__webpack_require__(/*! ./navigation.component.scss */ "./src/app/core/navigation/navigation.component.scss")]
        })
    ], NavigationComponent);
    return NavigationComponent;
}());



/***/ }),

/***/ "./src/app/core/services/data/data.service.ts":
/*!****************************************************!*\
  !*** ./src/app/core/services/data/data.service.ts ***!
  \****************************************************/
/*! exports provided: DataService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataService", function() { return DataService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _core_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../core.module */ "./src/app/core/core.module.ts");
/* harmony import */ var _app_core_model_ship__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @app/core/model/ship */ "./src/app/core/model/ship.ts");
/* harmony import */ var _app_core_model_upgrade__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @app/core/model/upgrade */ "./src/app/core/model/upgrade.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var DataService = /** @class */ (function () {
    function DataService(http) {
        this.http = http;
        this.basePath = function (sheet, range) { return "https://sheets.googleapis.com/v4/spreadsheets/1j02xeXgUu4iv4HDYI0qnniWX8W2MOewePlDvMtfYn8M/values/" + sheet + "!A2:" + range + "?key=AIzaSyDkg_9fUIBDkc2xsgAoxV5c355Jgua47nw"; };
    }
    DataService.prototype.getRebels = function () {
        var ships = [];
        this.http.get(this.basePath('Rebel', 'AI')).subscribe(function (val) {
            var data = val.values;
            for (var row in data) {
                var ship = data[row];
                var rebel = new _app_core_model_ship__WEBPACK_IMPORTED_MODULE_3__["Ship"](ship[0], ship[1], ship[2], ship[3], ship[4], ship[5], ship[6], ship[27], ship[30], ship[28], ship[29], ship[31], ship[32], ship[33]);
                rebel.talent = rebel.value(ship[7]);
                rebel.sensor = rebel.value(ship[8]);
                rebel.cannon1 = rebel.value(ship[9]);
                rebel.cannon2 = rebel.value(ship[10]);
                rebel.torpedo1 = rebel.value(ship[11]);
                rebel.modification1 = rebel.value(ship[12]);
                rebel.modification2 = rebel.value(ship[13]);
                rebel.modification3 = undefined;
                rebel.crew1 = rebel.value(ship[14]);
                rebel.crew2 = rebel.value(ship[15]);
                rebel.crew3 = undefined;
                rebel.gunner1 = rebel.value(ship[16]);
                rebel.astromech = rebel.value(ship[17]);
                rebel.force = rebel.value(ship[18]);
                rebel.turret = rebel.value(ship[19]);
                rebel.title = rebel.value(ship[20]);
                rebel.device1 = rebel.value(ship[21]);
                rebel.device2 = rebel.value(ship[22]);
                rebel.missile1 = rebel.value(ship[23]);
                rebel.missile2 = rebel.value(ship[24]);
                rebel.configuration = rebel.value(ship[25]);
                rebel.illicit1 = rebel.value(ship[26]);
                rebel.illicit2 = undefined;
                rebel.tech = undefined;
                rebel.forcePoints = parseInt(ship[34]);
                ships.push(rebel);
            }
        });
        return ships;
    };
    DataService.prototype.getRebelUpgrades = function () {
        var upgrades = [];
        this.http.get(this.basePath('RebelUpgrades', 'F')).subscribe(function (val) {
            var data = val.values;
            for (var row in data) {
                var upgrade = data[row];
                var rebelUpgrade = new _app_core_model_upgrade__WEBPACK_IMPORTED_MODULE_4__["Upgrade"](upgrade[0], upgrade[2], upgrade[1], upgrade[3], upgrade[4], upgrade[5]);
                upgrades.push(rebelUpgrade);
            }
        });
        this.http.get(this.basePath('Upgrades', 'F')).subscribe(function (val) {
            var data = val.values;
            for (var row in data) {
                var upgrade = data[row];
                var genericUpgrade = new _app_core_model_upgrade__WEBPACK_IMPORTED_MODULE_4__["Upgrade"](upgrade[0], upgrade[2], upgrade[1], upgrade[3], upgrade[4], upgrade[5]);
                upgrades.push(genericUpgrade);
            }
        });
        return upgrades;
    };
    DataService.prototype.getImperials = function () {
        var ships = [];
        this.http.get(this.basePath('Imperial', 'AH')).subscribe(function (val) {
            var data = val.values;
            for (var row in data) {
                var ship = data[row];
                var imperial = new _app_core_model_ship__WEBPACK_IMPORTED_MODULE_3__["Ship"](ship[0], ship[1], ship[2], ship[3], ship[4], ship[5], ship[6], ship[24], ship[25], ship[27], ship[28], ship[30], ship[31], ship[32]);
                imperial.talent = imperial.value(ship[7]);
                imperial.sensor = imperial.value(ship[8]);
                imperial.torpedo1 = imperial.value(ship[9]);
                imperial.missile1 = imperial.value(ship[10]);
                imperial.missile2 = imperial.setValue('missile2Restriction', ship[11]);
                imperial.modification1 = imperial.value(ship[12]);
                imperial.modification2 = imperial.value(ship[13]);
                imperial.modification3 = undefined;
                imperial.configuration = imperial.value(ship[14]);
                imperial.cannon1 = imperial.setValue('cannon1Restriction', ship[15]);
                imperial.cannon2 = undefined;
                imperial.crew1 = imperial.value(ship[16]);
                imperial.crew2 = imperial.value(ship[17]);
                imperial.crew3 = undefined;
                imperial.title = imperial.value(ship[18]);
                imperial.force = imperial.value(ship[19]);
                imperial.turret = imperial.value(ship[20]);
                imperial.gunner1 = imperial.value(ship[21]);
                imperial.device1 = imperial.value(ship[22]);
                imperial.device2 = imperial.value(ship[23]);
                imperial.astromech = undefined;
                imperial.illicit1 = undefined;
                imperial.illicit2 = undefined;
                imperial.tech = undefined;
                imperial.torpedo2 = imperial.value(ship[26]);
                imperial.forcePoints = parseInt(ship[33]);
                ships.push(imperial);
            }
        });
        return ships;
    };
    DataService.prototype.getImperialUpgrades = function () {
        var upgrades = [];
        this.http.get(this.basePath('ImperialUpgrades', 'F')).subscribe(function (val) {
            var data = val.values;
            for (var row in data) {
                var upgrade = data[row];
                var imperialUpgrade = new _app_core_model_upgrade__WEBPACK_IMPORTED_MODULE_4__["Upgrade"](upgrade[0], upgrade[2], upgrade[1], upgrade[3], upgrade[4], upgrade[5]);
                upgrades.push(imperialUpgrade);
            }
        });
        this.http.get(this.basePath('Upgrades', 'F')).subscribe(function (val) {
            var data = val.values;
            for (var row in data) {
                var upgrade = data[row];
                var genericUpgrade = new _app_core_model_upgrade__WEBPACK_IMPORTED_MODULE_4__["Upgrade"](upgrade[0], upgrade[2], upgrade[1], upgrade[3], upgrade[4], upgrade[5]);
                upgrades.push(genericUpgrade);
            }
        });
        return upgrades;
    };
    DataService.prototype.getScum = function () {
        var ships = [];
        this.http.get(this.basePath('Scum', 'AK')).subscribe(function (val) {
            var data = val.values;
            for (var row in data) {
                var ship = data[row];
                var scum = new _app_core_model_ship__WEBPACK_IMPORTED_MODULE_3__["Ship"](ship[0], ship[1], ship[2], ship[3], ship[4], ship[5], ship[6], ship[29], ship[32], ship[30], ship[31], ship[33], ship[34], ship[35]);
                scum.talent = scum.value(ship[7]);
                scum.sensor = scum.setValue('sensorRestriction', ship[8]);
                scum.cannon1 = scum.setValue('cannon1Restriction', ship[9]);
                scum.cannon2 = scum.value(ship[10]);
                scum.device1 = scum.value(ship[11]);
                scum.device2 = scum.setValue('device2Restriction', ship[12]);
                scum.illicit1 = scum.value(ship[13]);
                scum.illicit2 = scum.value(ship[14]);
                scum.modification1 = scum.value(ship[15]);
                scum.modification2 = scum.setValue('modification2Restriction', ship[16]);
                scum.modification3 = scum.value(ship[17]);
                scum.title = scum.value(ship[18]);
                scum.turret = scum.value(ship[19]);
                scum.torpedo1 = scum.setValue('torpedo1Restriction', ship[20]);
                scum.gunner1 = scum.setValue('gunner1Restriction', ship[21]);
                scum.astromech = scum.setValue('astromechRestriction', ship[22]);
                scum.missile1 = scum.value(ship[23]);
                scum.missile2 = undefined;
                scum.crew1 = scum.setValue('crew1Restriction', ship[24]);
                scum.crew2 = scum.value(ship[25]);
                scum.crew3 = scum.value(ship[26]);
                scum.force = scum.value(ship[27]);
                scum.tech = scum.value(ship[27]);
                scum.configuration = undefined;
                scum.forcePoints = parseInt(ship[36]);
                ships.push(scum);
            }
        });
        return ships;
    };
    DataService.prototype.getScumUpgrades = function () {
        var upgrades = [];
        this.http.get(this.basePath('ScumUpgrades', 'F')).subscribe(function (val) {
            var data = val.values;
            for (var row in data) {
                var upgrade = data[row];
                var scumUpgrade = new _app_core_model_upgrade__WEBPACK_IMPORTED_MODULE_4__["Upgrade"](upgrade[0], upgrade[2], upgrade[1], upgrade[3], upgrade[4], upgrade[5]);
                upgrades.push(scumUpgrade);
            }
        });
        this.http.get(this.basePath('Upgrades', 'F')).subscribe(function (val) {
            var data = val.values;
            for (var row in data) {
                var upgrade = data[row];
                var genericUpgrade = new _app_core_model_upgrade__WEBPACK_IMPORTED_MODULE_4__["Upgrade"](upgrade[0], upgrade[2], upgrade[1], upgrade[3], upgrade[4], upgrade[5]);
                upgrades.push(genericUpgrade);
            }
        });
        return upgrades;
    };
    DataService.prototype.getUpgrades = function () {
        var upgrades = [];
        this.http.get(this.basePath('Upgrades', 'F')).subscribe(function (val) {
            var data = val.values;
            for (var row in data) {
                var upgrade = data[row];
                var genericUpgrade = new _app_core_model_upgrade__WEBPACK_IMPORTED_MODULE_4__["Upgrade"](upgrade[0], upgrade[2], upgrade[1], upgrade[3], upgrade[4], upgrade[5]);
                upgrades.push(genericUpgrade);
            }
        });
        return upgrades;
    };
    DataService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: _core_module__WEBPACK_IMPORTED_MODULE_2__["CoreModule"]
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], DataService);
    return DataService;
}());



/***/ }),

/***/ "./src/app/factions/imperials/imperials.component.html":
/*!*************************************************************!*\
  !*** ./src/app/factions/imperials/imperials.component.html ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-squad [ships]=\"ships\" [upgrades]=\"upgrades\" [faction]=\"faction\"></app-squad>\n"

/***/ }),

/***/ "./src/app/factions/imperials/imperials.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/factions/imperials/imperials.component.ts ***!
  \***********************************************************/
/*! exports provided: ImperialsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ImperialsComponent", function() { return ImperialsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_core_services_data_data_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @app/core/services/data/data.service */ "./src/app/core/services/data/data.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ImperialsComponent = /** @class */ (function () {
    function ImperialsComponent(dataService) {
        this.dataService = dataService;
        this.faction = 'imperial';
        this.ships = this.dataService.getImperials();
        this.upgrades = this.dataService.getImperialUpgrades();
    }
    ImperialsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-imperials',
            template: __webpack_require__(/*! ./imperials.component.html */ "./src/app/factions/imperials/imperials.component.html")
        }),
        __metadata("design:paramtypes", [_app_core_services_data_data_service__WEBPACK_IMPORTED_MODULE_1__["DataService"]])
    ], ImperialsComponent);
    return ImperialsComponent;
}());



/***/ }),

/***/ "./src/app/factions/rebels/rebels.component.html":
/*!*******************************************************!*\
  !*** ./src/app/factions/rebels/rebels.component.html ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-squad [ships]=\"ships\" [upgrades]=\"upgrades\" [faction]=\"faction\"></app-squad>\n"

/***/ }),

/***/ "./src/app/factions/rebels/rebels.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/factions/rebels/rebels.component.ts ***!
  \*****************************************************/
/*! exports provided: RebelsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RebelsComponent", function() { return RebelsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_core_services_data_data_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @app/core/services/data/data.service */ "./src/app/core/services/data/data.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var RebelsComponent = /** @class */ (function () {
    function RebelsComponent(dataService) {
        this.dataService = dataService;
        this.faction = 'rebels';
        this.ships = this.dataService.getRebels();
        this.upgrades = this.dataService.getRebelUpgrades();
    }
    RebelsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-rebels',
            template: __webpack_require__(/*! ./rebels.component.html */ "./src/app/factions/rebels/rebels.component.html")
        }),
        __metadata("design:paramtypes", [_app_core_services_data_data_service__WEBPACK_IMPORTED_MODULE_1__["DataService"]])
    ], RebelsComponent);
    return RebelsComponent;
}());



/***/ }),

/***/ "./src/app/factions/scum/scum.component.html":
/*!***************************************************!*\
  !*** ./src/app/factions/scum/scum.component.html ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-squad [ships]=\"ships\" [upgrades]=\"upgrades\" [faction]=\"faction\"></app-squad>\n"

/***/ }),

/***/ "./src/app/factions/scum/scum.component.ts":
/*!*************************************************!*\
  !*** ./src/app/factions/scum/scum.component.ts ***!
  \*************************************************/
/*! exports provided: ScumComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ScumComponent", function() { return ScumComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_core_services_data_data_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @app/core/services/data/data.service */ "./src/app/core/services/data/data.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ScumComponent = /** @class */ (function () {
    function ScumComponent(dataService) {
        this.dataService = dataService;
        this.faction = 'scum';
        this.ships = this.dataService.getScum();
        this.upgrades = this.dataService.getScumUpgrades();
    }
    ScumComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-scum',
            template: __webpack_require__(/*! ./scum.component.html */ "./src/app/factions/scum/scum.component.html")
        }),
        __metadata("design:paramtypes", [_app_core_services_data_data_service__WEBPACK_IMPORTED_MODULE_1__["DataService"]])
    ], ScumComponent);
    return ScumComponent;
}());



/***/ }),

/***/ "./src/app/shared/components/alert/alert.component.scss":
/*!**************************************************************!*\
  !*** ./src/app/shared/components/alert/alert.component.scss ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/*\n\nAlert\n\n*/\n/* ---------- Variables */\n/* ---------- Component */\n:host,\n.alert {\n  display: block;\n  padding: 12px;\n  word-break: break-all;\n  background-color: #EEEEEE;\n  margin: 24px 0; }\n/* ---------- Elements */\n.header__title {\n  max-width: 1280px;\n  margin: 0 auto;\n  font-size: 24px;\n  font-weight: bold;\n  line-height: 1;\n  padding: 24px 24px; }\n"

/***/ }),

/***/ "./src/app/shared/components/alert/alert.component.ts":
/*!************************************************************!*\
  !*** ./src/app/shared/components/alert/alert.component.ts ***!
  \************************************************************/
/*! exports provided: AlertComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AlertComponent", function() { return AlertComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AlertComponent = /** @class */ (function () {
    function AlertComponent() {
        this.attrClass = true;
    }
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"])('class.alert'),
        __metadata("design:type", Boolean)
    ], AlertComponent.prototype, "attrClass", void 0);
    AlertComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-alert',
            template: '<ng-content></ng-content>',
            styles: [__webpack_require__(/*! ./alert.component.scss */ "./src/app/shared/components/alert/alert.component.scss")]
        })
    ], AlertComponent);
    return AlertComponent;
}());



/***/ }),

/***/ "./src/app/shared/components/ship-search/ship-search.component.html":
/*!**************************************************************************!*\
  !*** ./src/app/shared/components/ship-search/ship-search.component.html ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"ship-search__input-group\">\n  <input type=\"text\" class=\"ship-search__control\" placeholder=\"Search for ship or pilot...\" [(ngModel)]=\"searchValue\">\n  <button class=\"button ship-search__action\" (click)=\"toggleShowAll()\">{{ showAll ? 'Hide' : 'Show' }} All</button>\n</div>\n<div class=\"ship-search__results\">\n  <li class=\"ship-search__result\" *ngFor=\"let ship of ships | searchFilter: searchValue:showAll\" (click)=\"selectShip(ship)\">\n    <div class=\"ship-search__result__detail\">\n      <div class=\"ship-search__result__name\">{{ ship.name }} - {{ ship.pilot }}</div>\n      <div class=\"ship-search__result__ability ship-search__result__ability--pilot\" *ngIf=\"ship.pilotAbility\">{{ ship.pilotAbility }}</div>\n      <div class=\"ship-search__result__ability ship-search__result__ability--ship\" *ngIf=\"ship.shipAbility\">{{ ship.shipAbility }}</div>\n    </div>\n    <div class=\"ship-search__result__cost\">{{ ship.cost }}</div>\n  </li>\n</div>\n"

/***/ }),

/***/ "./src/app/shared/components/ship-search/ship-search.component.scss":
/*!**************************************************************************!*\
  !*** ./src/app/shared/components/ship-search/ship-search.component.scss ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/*\n\nShip Search\n\n*/\n/* ---------- Component */\n:host,\n.ship-search {\n  max-width: 1280px;\n  margin: 24px auto;\n  display: block;\n  padding: 0 12px; }\n/* ---------- Elements */\n.ship-search__input-group {\n  display: flex; }\n.ship-search__input-group > .ship-search__action {\n    border-left: none; }\n.ship-search__results {\n  max-height: 480px;\n  overflow-y: auto; }\n.ship-search__results:not(:empty) {\n    border: 1px solid #CCCCCC;\n    margin-top: -1px; }\n.ship-search__result {\n  display: flex;\n  cursor: pointer; }\n.ship-search__result > * {\n    flex: 1;\n    padding: 12px; }\n.ship-search__result > *:last-child {\n    flex: none; }\n.ship-search__result:not(:last-child) {\n    border-bottom: 1px solid #CCCCCC; }\n.ship-search__result:hover {\n    background-color: rgba(0, 0, 0, 0.1); }\n.ship-search__result, .ship-search__result:hover {\n    transition: background 0.15s; }\n.ship-search__result__name {\n  font-size: 18px;\n  line-height: 24px;\n  font-weight: bold; }\n.ship-search__result__ability {\n  font-size: 16px;\n  line-height: 20px; }\n.ship-search__result__ability--ship {\n  opacity: 0.5; }\n"

/***/ }),

/***/ "./src/app/shared/components/ship-search/ship-search.component.ts":
/*!************************************************************************!*\
  !*** ./src/app/shared/components/ship-search/ship-search.component.ts ***!
  \************************************************************************/
/*! exports provided: ShipSearchComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShipSearchComponent", function() { return ShipSearchComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ShipSearchComponent = /** @class */ (function () {
    function ShipSearchComponent() {
        this.attrClass = true;
        this.selectedShip = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    ShipSearchComponent.prototype.selectShip = function (ship) {
        this.searchValue = null;
        this.showAll = false;
        this.selectedShip.emit(ship);
    };
    ShipSearchComponent.prototype.toggleShowAll = function () {
        this.showAll = !this.showAll;
        this.searchValue = null;
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"])('class.ship-search'),
        __metadata("design:type", Boolean)
    ], ShipSearchComponent.prototype, "attrClass", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Array)
    ], ShipSearchComponent.prototype, "ships", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"])
    ], ShipSearchComponent.prototype, "selectedShip", void 0);
    ShipSearchComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-ship-search',
            template: __webpack_require__(/*! ./ship-search.component.html */ "./src/app/shared/components/ship-search/ship-search.component.html"),
            styles: [__webpack_require__(/*! ./ship-search.component.scss */ "./src/app/shared/components/ship-search/ship-search.component.scss")]
        })
    ], ShipSearchComponent);
    return ShipSearchComponent;
}());



/***/ }),

/***/ "./src/app/shared/components/ship/ship.component.html":
/*!************************************************************!*\
  !*** ./src/app/shared/components/ship/ship.component.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"ship__header\">\n  <div class=\"ship__header__name\">\n    <div class=\"ship__header__name__ship\">{{ ship.name }}</div>\n    <div class=\"ship__header__name__pilot\">{{ ship.initiative}} - {{ ship.pilot }} <span class=\"ship__header__name__cost\">({{ ship.cost }})</span></div>\n  </div>\n  <button class=\"button ship__header__collapse\" [class.is-collapsed]=\"isCollapsed\" (click)=\"toggleCollapsed()\" title=\"Toggle\">\n    <span class=\"ship__header__collapse__icon\"></span>\n  </button>\n</div>\n<div class=\"ship__footer\" *ngIf=\"showAbilities\" [class.is-hidden]=\"isCollapsed\">\n  <div class=\"ship__stats\">\n    <div class=\"ship__stats__stat\" *ngFor=\"let attack of attackValues\">\n        <i class=\"xwing-miniatures-font xwing-miniatures-font-{{ attack.name }}\"></i>{{ attack.value }}\n    </div>\n    <div class=\"ship__stats__stat\">\n      <i class=\"xwing-miniatures-font xwing-miniatures-font-agility\"></i>{{ ship.agility }}\n    </div>\n    <div class=\"ship__stats__stat\">\n      <i class=\"xwing-miniatures-font xwing-miniatures-font-hull\"></i>{{ ship.hull }}\n    </div>\n    <div class=\"ship__stats__stat\">\n      <i class=\"xwing-miniatures-font xwing-miniatures-font-shield\"></i>{{ ship.shields }}\n    </div>    \n    <div class=\"ship__stats__stat\" *ngIf=\"ship.forcePoints > 0\">\n      <i class=\"xwing-miniatures-font xwing-miniatures-font-forcecharge\"></i><i class=\"xwing-miniatures-font xwing-miniatures-font-recurring\"></i>{{ ship.forcePoints }}\n    </div>\n  </div>\n</div>\n<div class=\"ship__footer\" *ngIf=\"actions && showAbilities\" [class.is-hidden]=\"isCollapsed\">\n  <div class=\"ship__actions\">\n    <div class=\"ship__actions__action\" *ngFor=\"let action of actions\">\n      <i class=\"xwing-miniatures-font xwing-miniatures-font-{{ action.name }}\" [class.is-red-difficulty]=\"action.difficulty === 'red'\"></i>\n      <span class=\"ship__actions__linked-action\" *ngIf=\"action.linkedAction?.name\">\n        <i class=\"xwing-miniatures-font xwing-miniatures-font-{{ action.linkedAction.name }}\" [class.is-red-difficulty]=\"action.linkedAction.difficulty === 'red'\"></i>\n      </span>\n    </div>\n  </div>\n</div>\n<form class=\"ship__body\" #f=\"ngForm\" [class.is-hidden]=\"isCollapsed\">\n  <!-- Title -->\n  <div class=\"ship__body__upgrade\" *ngIf=\"ship.title !== undefined\">\n    <select class=\"ship__body__upgrade__control\" [(ngModel)]=\"ship.title\" #title=\"ngModel\" name=\"title\" (change)=\"changeUpgrade(title)\">\n      <option value=\"\" disabled selected hidden>Title</option>\n      <option value=\"\">None</option>\n      <option *ngFor=\"let upgrade of upgrades | forUpgrade: 'Title'\" [ngValue]=\"upgrade.name\">\n        <span *ngIf=\"upgrade.unique\">*</span>{{ upgrade.name }} ({{ upgrade.cost }})</option>\n    </select>\n    <div class=\"ship__body__upgrade__details\" *ngIf=\"showAbilities\">{{ getUpgradeByName(ship.title) }}</div>\n  </div>\n  <!-- Talent -->\n  <div class=\"ship__body__upgrade\" *ngIf=\"ship.talent !== undefined\">\n    <select class=\"ship__body__upgrade__control\" [(ngModel)]=\"ship.talent\" #talent=\"ngModel\" name=\"talent\" (change)=\"changeUpgrade(talent)\">\n      <option value=\"\" disabled selected hidden>Talent</option>\n      <option value=\"\">None</option>\n      <option *ngFor=\"let upgrade of upgrades | forUpgrade: 'Talent'\" [ngValue]=\"upgrade.name\">\n        <span *ngIf=\"upgrade.unique\">*</span>{{ upgrade.name }} ({{ upgrade.cost }})</option>\n    </select>\n    <div class=\"ship__body__upgrade__details\" *ngIf=\"showAbilities\">{{ getUpgradeByName(ship.talent) }}</div>\n  </div>\n  <!-- Sensor -->\n  <div class=\"ship__body__upgrade\" *ngIf=\"checkUpgrade('sensor')\">\n    <select class=\"ship__body__upgrade__control\" [(ngModel)]=\"ship.sensor\" #sensor=\"ngModel\" name=\"sensor\" (change)=\"changeUpgrade(sensor)\">\n      <option value=\"\" disabled selected hidden>Sensor</option>\n      <option value=\"\">None</option>\n      <option *ngFor=\"let upgrade of upgrades | forUpgrade: 'Sensor'\" [ngValue]=\"upgrade.name\">\n        <span *ngIf=\"upgrade.unique\">*</span>{{ upgrade.name }} ({{ upgrade.cost }})</option>\n    </select>\n    <div class=\"ship__body__upgrade__details\" *ngIf=\"showAbilities\">{{ getUpgradeByName(ship.sensor) }}</div>\n  </div>\n  <!-- Cannon 1 -->\n  <div class=\"ship__body__upgrade\" *ngIf=\"checkUpgrade('cannon1')\">\n    <select class=\"ship__body__upgrade__control\" [(ngModel)]=\"ship.cannon1\" #cannon1=\"ngModel\" name=\"cannon1\" (change)=\"changeUpgrade(cannon1)\">\n      <option value=\"\" disabled selected hidden>Cannon</option>\n      <option value=\"\">None</option>\n      <option *ngFor=\"let upgrade of upgrades | forUpgrade: 'Cannon'\" [ngValue]=\"upgrade.name\">\n        <span *ngIf=\"upgrade.unique\">*</span>{{ upgrade.name }} ({{ upgrade.cost }})</option>\n    </select>\n    <div class=\"ship__body__upgrade__details\" *ngIf=\"showAbilities\">{{ getUpgradeByName(ship.cannon1) }}</div>\n  </div>\n  <!-- Cannon 2 -->\n  <div class=\"ship__body__upgrade\" *ngIf=\"ship.cannon2 !== undefined\">\n    <select class=\"ship__body__upgrade__control\" [(ngModel)]=\"ship.cannon2\" #cannon2=\"ngModel\" name=\"cannon2\" (change)=\"changeUpgrade(cannon2)\">\n      <option value=\"\" disabled selected hidden>Cannon</option>\n      <option value=\"\">None</option>\n      <option *ngFor=\"let upgrade of upgrades | forUpgrade: 'Cannon'\" [ngValue]=\"upgrade.name\">\n        <span *ngIf=\"upgrade.unique\">*</span>{{ upgrade.name }} ({{ upgrade.cost }})</option>\n    </select>\n    <div class=\"ship__body__upgrade__details\" *ngIf=\"showAbilities\">{{ getUpgradeByName(ship.cannon2) }}</div>\n  </div>\n  <!-- Torpedo 1 -->\n  <div class=\"ship__body__upgrade\" *ngIf=\"checkUpgrade('torpedo1')\">\n    <select class=\"ship__body__upgrade__control\" [(ngModel)]=\"ship.torpedo1\" #torpedo1=\"ngModel\" name=\"torpedo1\" (change)=\"changeUpgrade(torpedo1)\">\n      <option value=\"\" disabled selected hidden>Torpedo</option>\n      <option value=\"\">None</option>\n      <option *ngFor=\"let upgrade of upgrades | forUpgrade: 'Torpedo'\" [ngValue]=\"upgrade.name\">\n        <span *ngIf=\"upgrade.unique\">*</span>{{ upgrade.name }} ({{ upgrade.cost }})</option>\n    </select>\n    <div class=\"ship__body__upgrade__details\" *ngIf=\"showAbilities\">{{ getUpgradeByName(ship.torpedo1) }}</div>\n  </div>\n  <!-- Modifaction 1 -->\n  <div class=\"ship__body__upgrade\" *ngIf=\"ship.modification1 !== undefined\">\n    <select class=\"ship__body__upgrade__control\" [(ngModel)]=\"ship.modification1\" #modification1=\"ngModel\" name=\"modification1\" (change)=\"changeUpgrade(modification1)\">\n      <option value=\"\" disabled selected hidden>Modification</option>\n      <option value=\"\">None</option>\n      <option *ngFor=\"let upgrade of upgrades | forUpgrade: 'Modification'\" [ngValue]=\"upgrade.name\">\n        <span *ngIf=\"upgrade.unique\">*</span>{{ upgrade.name }} ({{ upgrade.cost }})</option>\n    </select>\n    <div class=\"ship__body__upgrade__details\" *ngIf=\"showAbilities\">{{ getUpgradeByName(ship.modification1) }}</div>\n  </div>\n  <!-- Modifaction 2 -->\n  <div class=\"ship__body__upgrade\" *ngIf=\"checkUpgrade('modification2')\">\n    <select class=\"ship__body__upgrade__control\" [(ngModel)]=\"ship.modification2\" #modification2=\"ngModel\" name=\"modification2\" (change)=\"changeUpgrade(modification2)\">\n      <option value=\"\" disabled selected hidden>Modification</option>\n      <option value=\"\">None</option>\n      <option *ngFor=\"let upgrade of upgrades | forUpgrade: 'Modification'\" [ngValue]=\"upgrade.name\">\n        <span *ngIf=\"upgrade.unique\">*</span>{{ upgrade.name }} ({{ upgrade.cost }})</option>\n    </select>\n    <div class=\"ship__body__upgrade__details\" *ngIf=\"showAbilities\">{{ getUpgradeByName(ship.modification2) }}</div>\n  </div>\n  <!-- Modifaction 3 -->\n  <div class=\"ship__body__upgrade\" *ngIf=\"ship.modification3 !== undefined\">\n    <select class=\"ship__body__upgrade__control\" [(ngModel)]=\"ship.modification3\" #modification3=\"ngModel\" name=\"modification3\" (change)=\"changeUpgrade(modification3)\">\n      <option value=\"\" disabled selected hidden>Modification</option>\n      <option value=\"\">None</option>\n      <option *ngFor=\"let upgrade of upgrades | forUpgrade: 'Modification'\" [ngValue]=\"upgrade.name\">\n        <span *ngIf=\"upgrade.unique\">*</span>{{ upgrade.name }} ({{ upgrade.cost }})</option>\n    </select>\n    <div class=\"ship__body__upgrade__details\" *ngIf=\"showAbilities\">{{ getUpgradeByName(ship.modification3) }}</div>\n  </div>\n  <!-- Crew 1 -->\n  <div class=\"ship__body__upgrade\" *ngIf=\"checkUpgrade('crew1')\">\n    <select class=\"ship__body__upgrade__control\" [(ngModel)]=\"ship.crew1\" #crew1=\"ngModel\" name=\"crew1\" (change)=\"changeUpgrade(crew1)\">\n      <option value=\"\" disabled selected hidden>Crew</option>\n      <option value=\"\">None</option>\n      <option *ngFor=\"let upgrade of upgrades | forUpgrade: 'Crew'\" [ngValue]=\"upgrade.name\">\n        <span *ngIf=\"upgrade.unique\">*</span>{{ upgrade.name }} ({{ upgrade.cost }})</option>\n    </select>\n    <div class=\"ship__body__upgrade__details\" *ngIf=\"showAbilities\">{{ getUpgradeByName(ship.crew1) }}</div>\n  </div>\n  <!-- Crew 2 -->\n  <div class=\"ship__body__upgrade\" *ngIf=\"ship.crew2 !== undefined\">\n    <select class=\"ship__body__upgrade__control\" [(ngModel)]=\"ship.crew2\" #crew2=\"ngModel\" name=\"crew2\" (change)=\"changeUpgrade(crew2)\">\n      <option value=\"\" disabled selected hidden>Crew</option>\n      <option value=\"\">None</option>\n      <option *ngFor=\"let upgrade of upgrades | forUpgrade: 'Crew'\" [ngValue]=\"upgrade.name\">\n        <span *ngIf=\"upgrade.unique\">*</span>{{ upgrade.name }} ({{ upgrade.cost }})</option>\n    </select>\n    <div class=\"ship__body__upgrade__details\" *ngIf=\"showAbilities\">{{ getUpgradeByName(ship.crew2) }}</div>\n  </div>\n  <!-- Crew 3 -->\n  <div class=\"ship__body__upgrade\" *ngIf=\"ship.crew3 !== undefined\">\n    <select class=\"ship__body__upgrade__control\" [(ngModel)]=\"ship.crew3\" #crew3=\"ngModel\" name=\"crew3\" (change)=\"changeUpgrade(crew3)\">\n      <option value=\"\" disabled selected hidden>Crew</option>\n      <option value=\"\">None</option>\n      <option *ngFor=\"let upgrade of upgrades | forUpgrade: 'Crew'\" [ngValue]=\"upgrade.name\">\n        <span *ngIf=\"upgrade.unique\">*</span>{{ upgrade.name }} ({{ upgrade.cost }})</option>\n    </select>\n    <div class=\"ship__body__upgrade__details\" *ngIf=\"showAbilities\">{{ getUpgradeByName(ship.crew3) }}</div>\n  </div>\n  <!-- Gunner 1 -->\n  <div class=\"ship__body__upgrade\" *ngIf=\"checkUpgrade('gunner1')\">\n    <select class=\"ship__body__upgrade__control\" [(ngModel)]=\"ship.gunner1\" #gunner1=\"ngModel\" name=\"gunner1\" (change)=\"changeUpgrade(gunner1)\">\n      <option value=\"\" disabled selected hidden>Gunner</option>\n      <option value=\"\">None</option>\n      <option *ngFor=\"let upgrade of upgrades | forUpgrade: 'Gunner'\" [ngValue]=\"upgrade.name\">\n        <span *ngIf=\"upgrade.unique\">*</span>{{ upgrade.name }} ({{ upgrade.cost }})</option>\n    </select>\n    <div class=\"ship__body__upgrade__details\" *ngIf=\"showAbilities\">{{ getUpgradeByName(ship.gunner1) }}</div>\n  </div>\n  <!-- Astromech -->\n  <div class=\"ship__body__upgrade\" *ngIf=\"checkUpgrade('astromech')\">\n    <select class=\"ship__body__upgrade__control\" [(ngModel)]=\"ship.astromech\" #astromech=\"ngModel\" name=\"astromech\" (change)=\"changeUpgrade(astromech)\">\n      <option value=\"\" disabled selected hidden>Astromech</option>\n      <option value=\"\">None</option>\n      <option *ngFor=\"let upgrade of upgrades | forUpgrade: 'Astromech'\" [ngValue]=\"upgrade.name\">\n        <span *ngIf=\"upgrade.unique\">*</span>{{ upgrade.name }} ({{ upgrade.cost }})</option>\n    </select>\n    <div class=\"ship__body__upgrade__details\" *ngIf=\"showAbilities\">{{ getUpgradeByName(ship.astromech) }}</div>\n  </div>\n  <!-- Force -->\n  <div class=\"ship__body__upgrade\" *ngIf=\"ship.force !== undefined\">\n    <select class=\"ship__body__upgrade__control\" [(ngModel)]=\"ship.force\" #force=\"ngModel\" name=\"force\" (change)=\"changeUpgrade(force)\">\n      <option value=\"\" disabled selected hidden>Force</option>\n      <option value=\"\">None</option>\n      <option *ngFor=\"let upgrade of upgrades | forUpgrade: 'Force'\" [ngValue]=\"upgrade.name\">\n        <span *ngIf=\"upgrade.unique\">*</span>{{ upgrade.name }} ({{ upgrade.cost }})</option>\n    </select>\n    <div class=\"ship__body__upgrade__details\" *ngIf=\"showAbilities\">{{ getUpgradeByName(ship.force) }}</div>\n  </div>\n  <!-- Turret -->\n  <div class=\"ship__body__upgrade\" *ngIf=\"ship.turret !== undefined\">\n    <select class=\"ship__body__upgrade__control\" [(ngModel)]=\"ship.turret\" #turret=\"ngModel\" name=\"turret\" (change)=\"changeUpgrade(turret)\">\n      <option value=\"\" disabled selected hidden>Turret</option>\n      <option value=\"\">None</option>\n      <option *ngFor=\"let upgrade of upgrades | forUpgrade: 'Turret'\" [ngValue]=\"upgrade.name\">\n        <span *ngIf=\"upgrade.unique\">*</span>{{ upgrade.name }} ({{ upgrade.cost }})</option>\n    </select>\n    <div class=\"ship__body__upgrade__details\" *ngIf=\"showAbilities\">{{ getUpgradeByName(ship.turret) }}</div>\n  </div>  \n  <!-- Device 1 -->\n  <div class=\"ship__body__upgrade\" *ngIf=\"ship.device1 !== undefined\">\n    <select class=\"ship__body__upgrade__control\" [(ngModel)]=\"ship.device1\" #device1=\"ngModel\" name=\"device1\" (change)=\"changeUpgrade(device1)\">\n      <option value=\"\" disabled selected hidden>Device</option>\n      <option value=\"\">None</option>\n      <option *ngFor=\"let upgrade of upgrades | forUpgrade: 'Device'\" [ngValue]=\"upgrade.name\">\n        <span *ngIf=\"upgrade.unique\">*</span>{{ upgrade.name }} ({{ upgrade.cost }})</option>\n    </select>\n    <div class=\"ship__body__upgrade__details\" *ngIf=\"showAbilities\">{{ getUpgradeByName(ship.device1) }}</div>\n  </div>\n  <!-- Device 2 -->\n  <div class=\"ship__body__upgrade\" *ngIf=\"checkUpgrade('device2')\">\n    <select class=\"ship__body__upgrade__control\" [(ngModel)]=\"ship.device2\" #device2=\"ngModel\" name=\"device2\" (change)=\"changeUpgrade(device2)\">\n      <option value=\"\" disabled selected hidden>Device</option>\n      <option value=\"\">None</option>\n      <option *ngFor=\"let upgrade of upgrades | forUpgrade: 'Device'\" [ngValue]=\"upgrade.name\">\n        <span *ngIf=\"upgrade.unique\">*</span>{{ upgrade.name }} ({{ upgrade.cost }})</option>\n    </select>\n    <div class=\"ship__body__upgrade__details\" *ngIf=\"showAbilities\">{{ getUpgradeByName(ship.device2) }}</div>\n  </div>\n  <!-- Missile 1 -->\n  <div class=\"ship__body__upgrade\" *ngIf=\"ship.missile1 !== undefined\">\n    <select class=\"ship__body__upgrade__control\" [(ngModel)]=\"ship.missile1\" #missile1=\"ngModel\" name=\"missile1\" (change)=\"changeUpgrade(missile1)\">\n      <option value=\"\" disabled selected hidden>Missile</option>\n      <option value=\"\">None</option>\n      <option *ngFor=\"let upgrade of upgrades | forUpgrade: 'Missile'\" [ngValue]=\"upgrade.name\">\n        <span *ngIf=\"upgrade.unique\">*</span>{{ upgrade.name }} ({{ upgrade.cost }})</option>\n    </select>\n    <div class=\"ship__body__upgrade__details\" *ngIf=\"showAbilities\">{{ getUpgradeByName(ship.missile1) }}</div>\n  </div>\n  <!-- Missile 2 -->\n  <div class=\"ship__body__upgrade\" *ngIf=\"checkUpgrade('missile2')\">\n    <select class=\"ship__body__upgrade__control\" [(ngModel)]=\"ship.missile2\" #missile2=\"ngModel\" name=\"missile2\" (change)=\"changeUpgrade(missile2)\">\n      <option value=\"\" disabled selected hidden>Missile</option>\n      <option value=\"\">None</option>\n      <option *ngFor=\"let upgrade of upgrades | forUpgrade: 'Missile'\" [ngValue]=\"upgrade.name\">\n        <span *ngIf=\"upgrade.unique\">*</span>{{ upgrade.name }} ({{ upgrade.cost }})</option>\n    </select>\n    <div class=\"ship__body__upgrade__details\" *ngIf=\"showAbilities\">{{ getUpgradeByName(ship.missile2) }}</div>\n  </div>\n  <!-- Configuration -->\n  <div class=\"ship__body__upgrade\" *ngIf=\"ship.configuration !== undefined\">\n    <select class=\"ship__body__upgrade__control\" [(ngModel)]=\"ship.configuration\" #configuration=\"ngModel\" name=\"configuration\" (change)=\"changeUpgrade(configuration)\">\n      <option value=\"\" disabled selected hidden>Configuration</option>\n      <option value=\"\">None</option>\n      <option *ngFor=\"let upgrade of upgrades | forUpgrade: 'Configuration'\" [ngValue]=\"upgrade.name\">\n        <span *ngIf=\"upgrade.unique\">*</span>{{ upgrade.name }} ({{ upgrade.cost }})</option>\n    </select>\n    <div class=\"ship__body__upgrade__details\" *ngIf=\"showAbilities\">{{ getUpgradeByName(ship.configuration) }}</div>\n  </div>\n  <!-- Illicit 1 -->\n  <div class=\"ship__body__upgrade\" *ngIf=\"ship.illicit1 !== undefined\">\n    <select class=\"ship__body__upgrade__control\" [(ngModel)]=\"ship.illicit1\" #illicit1=\"ngModel\" name=\"illicit1\" (change)=\"changeUpgrade(illicit1)\">\n      <option value=\"\" disabled selected hidden>Illicit</option>\n      <option value=\"\">None</option>\n      <option *ngFor=\"let upgrade of upgrades | forUpgrade: 'Illicit'\" [ngValue]=\"upgrade.name\">\n        <span *ngIf=\"upgrade.unique\">*</span>{{ upgrade.name }} ({{ upgrade.cost }})</option>\n    </select>\n    <div class=\"ship__body__upgrade__details\" *ngIf=\"showAbilities\">{{ getUpgradeByName(ship.illicit1) }}</div>\n  </div>\n  <!-- Illicit 2 -->\n  <div class=\"ship__body__upgrade\" *ngIf=\"ship.illicit2 !== undefined\">\n    <select class=\"ship__body__upgrade__control\" [(ngModel)]=\"ship.illicit2\" #illicit2=\"ngModel\" name=\"illicit2\" (change)=\"changeUpgrade(illicit2)\">\n      <option value=\"\" disabled selected hidden>Illicit</option>\n      <option value=\"\">None</option>\n      <option *ngFor=\"let upgrade of upgrades | forUpgrade: 'Illicit'\" [ngValue]=\"upgrade.name\">\n        <span *ngIf=\"upgrade.unique\">*</span>{{ upgrade.name }} ({{ upgrade.cost }})</option>\n    </select>\n    <div class=\"ship__body__upgrade__details\" *ngIf=\"showAbilities\">{{ getUpgradeByName(ship.illicit2) }}</div>\n  </div>\n  <!-- Tech -->\n  <div class=\"ship__body__upgrade\" *ngIf=\"ship.tech !== undefined\">\n    <select class=\"ship__body__upgrade__control\" [(ngModel)]=\"ship.tech\" #tech=\"ngModel\" name=\"tech\" (change)=\"changeUpgrade(tech)\">\n      <option value=\"\" disabled selected hidden>Tech</option>\n      <option value=\"\">None</option>\n      <option *ngFor=\"let upgrade of upgrades | forUpgrade: 'Tech'\" [ngValue]=\"upgrade.name\">\n        <span *ngIf=\"upgrade.unique\">*</span>{{ upgrade.name }} ({{ upgrade.cost }})</option>\n    </select>\n    <div class=\"ship__body__upgrade__details\" *ngIf=\"showAbilities\">{{ getUpgradeByName(ship.tech) }}</div>\n  </div>\n</form>\n<div class=\"ship__footer\" *ngIf=\"ship.pilotAbility != '' && showAbilities\" [class.is-hidden]=\"isCollapsed\">\n  <strong>Pilot Ability</strong>\n  <br />\n  {{ ship.pilotAbility }}\n</div>\n<div class=\"ship__footer\" *ngIf=\"ship.shipAbility != '' && showAbilities\" [class.is-hidden]=\"isCollapsed\">\n  <strong>Ship Ability</strong>\n  <br />{{ ship.shipAbility }}\n</div>\n<div class=\"ship__toolbar\" [class.is-hidden]=\"isCollapsed\">\n  <button class=\"button\" *ngIf=\"!ship.unique\" (click)=\"duplicateShip()\">Clone</button>\n  <button class=\"button button--danger\" (click)=\"removeShip()\">Remove</button>\n</div>\n"

/***/ }),

/***/ "./src/app/shared/components/ship/ship.component.scss":
/*!************************************************************!*\
  !*** ./src/app/shared/components/ship/ship.component.scss ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/*\n\nShip\n\n*/\n/* ---------- Component */\n:host,\n.ship {\n  display: block;\n  max-width: 1280px;\n  margin: 24px auto;\n  padding: 0 12px; }\n/* ---------- Elements */\n.ship__header {\n  display: flex;\n  align-items: center;\n  padding: 12px;\n  border: 1px solid #CCCCCC; }\n.ship__header > * {\n    flex: 1; }\n.ship__header > *:last-child {\n    flex: none; }\n.ship__header__collapse {\n  width: 48px;\n  height: 48px;\n  padding: 0; }\n.ship__header__collapse__icon {\n  width: 48px;\n  height: 48px;\n  display: block;\n  background-image: url(data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyB3aWR0aD0iMzlweCIgaGVpZ2h0PSIyNnB4IiB2aWV3Qm94PSIwIDAgMzkgMjYiIHZlcnNpb249IjEuMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+CiAgICA8IS0tIEdlbmVyYXRvcjogU2tldGNoIDQ0LjEgKDQxNDU1KSAtIGh0dHA6Ly93d3cuYm9oZW1pYW5jb2RpbmcuY29tL3NrZXRjaCAtLT4KICAgIDx0aXRsZT5Hcm91cDwvdGl0bGU+CiAgICA8ZGVzYz5DcmVhdGVkIHdpdGggU2tldGNoLjwvZGVzYz4KICAgIDxkZWZzPjwvZGVmcz4KICAgIDxnIGlkPSJQYWdlLTEiIHN0cm9rZT0ibm9uZSIgc3Ryb2tlLXdpZHRoPSIxIiBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPgogICAgICAgIDxnIGlkPSJHcm91cCIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTUuMDAwMDAwLCAtMTEuMDAwMDAwKSI+CiAgICAgICAgICAgIDxyZWN0IGlkPSJSZWN0YW5nbGUiIHg9IjAiIHk9IjAiIHdpZHRoPSI0OCIgaGVpZ2h0PSI0OCI+PC9yZWN0PgogICAgICAgICAgICA8cGF0aCBkPSJNMzYuOTMxNzA3MSwxMSBMNDMuNjIxMTM4MSwxNy42ODk0MzEgTDI0LjMxMDU2OSwzNyBMNSwxNy42ODk0MzEgTDExLjY4OTQzMSwxMSBMMjQuMzEwNTY5LDIzLjYyMTEzODEgTDM2LjkzMTcwNzEsMTEgWiIgaWQ9IkNvbWJpbmVkLVNoYXBlIiBmaWxsPSIjMUQxRDFEIj48L3BhdGg+CiAgICAgICAgPC9nPgogICAgPC9nPgo8L3N2Zz4=);\n  background-repeat: no-repeat;\n  background-size: 16px 16px;\n  background-position: right 16px top 16px;\n  -webkit-transform: rotate(180deg);\n          transform: rotate(180deg); }\n.is-collapsed .ship__header__collapse__icon {\n    -webkit-transform: rotate(0deg);\n            transform: rotate(0deg); }\n.ship__header__name__ship {\n  font-size: 18px;\n  line-height: 24px;\n  font-weight: bold; }\n.ship__header__name__pilot {\n  font-size: 18px;\n  line-height: 24px;\n  font-weight: bold; }\n.ship__header__name__cost {\n  font-size: 18px;\n  line-height: 24px;\n  font-weight: normal; }\n.ship__toolbar {\n  padding: 12px;\n  border: 1px solid #CCCCCC;\n  margin-top: -1px;\n  display: flex;\n  justify-content: flex-end; }\n.ship__toolbar button + button {\n    margin-left: 6px; }\n.ship__body {\n  display: flex;\n  flex-wrap: wrap;\n  padding: 12px 12px 0 12px;\n  border: 1px solid #CCCCCC;\n  margin-top: -1px; }\n.ship__body > * {\n    width: 100%; }\n@media screen and (min-width: 768px) and (max-width: 1279px) {\n    .ship__body > * {\n      width: 50%;\n      padding-right: 6px; }\n      .ship__body > *:nth-child(even) {\n        padding-right: 0;\n        padding-left: 6px; } }\n@media screen and (min-width: 1280px) {\n    .ship__body > * {\n      width: 33.33%;\n      padding-right: 6px; }\n      .ship__body > *:nth-child(3n+2) {\n        padding-right: 6px;\n        padding-left: 6px; }\n      .ship__body > *:nth-child(3n+3) {\n        padding-right: 0;\n        padding-left: 6px; } }\n.ship__body__upgrade__control {\n  margin-bottom: 12px; }\n.ship__body__upgrade__details:not(:empty) {\n  margin-bottom: 12px; }\n.ship__footer {\n  padding: 12px;\n  border: 1px solid #CCCCCC;\n  margin-top: -1px; }\n.ship__stats {\n  display: flex; }\n.ship__stats__stat {\n  padding-right: 12px; }\n.ship__stats__stat i {\n    padding-right: 4px; }\n.ship__actions {\n  display: flex; }\n.ship__actions__action {\n  padding-right: 18px; }\n.ship__actions__action i.is-red-difficulty {\n    color: #FF5050; }\n.ship__actions__linked-action {\n  position: relative;\n  padding-left: 12px; }\n.ship__actions__linked-action:before {\n    content: '';\n    display: inline-block;\n    position: absolute;\n    width: 0;\n    height: 0;\n    border-top: 4px solid transparent;\n    border-bottom: 4px solid transparent;\n    border-left: 5px solid #1D1D1D;\n    left: 3px;\n    top: 50%;\n    -webkit-transform: translateY(-50%);\n            transform: translateY(-50%); }\n/* ---------- Helpers */\n.is-hidden {\n  display: none; }\n"

/***/ }),

/***/ "./src/app/shared/components/ship/ship.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/shared/components/ship/ship.component.ts ***!
  \**********************************************************/
/*! exports provided: ShipComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShipComponent", function() { return ShipComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _app_core_model_ship__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @app/core/model/ship */ "./src/app/core/model/ship.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ShipComponent = /** @class */ (function () {
    function ShipComponent() {
        this.isCollapsed = false;
        this.attrClass = true;
        this.updatePoints = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    // Unused
    ShipComponent.prototype.upgradeModel = function (upgrade) {
        if (!upgrade)
            return undefined;
        return upgrade.split(',')[0];
    };
    // Unused
    ShipComponent.prototype.updateUpgrade = function (ship, upgrade, newValue) {
        var splitUpgrade = ship[upgrade].split(",");
        if (splitUpgrade.length !== 2) {
            this.ship[upgrade] = newValue;
            return this.ship[upgrade];
        }
        this.ship[upgrade] = newValue + "," + splitUpgrade[1];
        this.updateSquadPoints();
        return ship[upgrade];
    };
    ShipComponent.prototype.duplicateShip = function () {
        var ship = Object.assign({}, this.ship);
        this.squad.unshift(ship);
    };
    ShipComponent.prototype.removeShip = function () {
        this.squad.splice(this.index, 1);
    };
    ShipComponent.prototype.updateSquadPoints = function () {
        this.updatePoints.next();
    };
    ShipComponent.prototype.getUpgradeByName = function (upgrade) {
        if (!upgrade)
            return '';
        var upgrades = this.upgrades.filter(function (u) { return upgrade === u.name; });
        return upgrades.length > 0 ? upgrades[0].ability : '';
    };
    ShipComponent.prototype.checkUpgrade = function (upgrade) {
        var shipUpgrade = this.ship[upgrade + "Restriction"];
        if (!shipUpgrade && this.ship[upgrade] === undefined)
            return false;
        if (!shipUpgrade)
            return true;
        var upgradeRequirement = shipUpgrade.split(":")[0];
        var requirementName = shipUpgrade.split(":")[1];
        var isRemove = upgradeRequirement.startsWith('!');
        upgradeRequirement = upgradeRequirement.replace('!', '');
        var requirementSet = !isRemove && this.ship[upgradeRequirement] === requirementName || isRemove && this.ship[upgradeRequirement] !== requirementName;
        if (!requirementSet)
            this.ship[upgrade] = '';
        if (requirementSet && !this.ship[upgrade])
            this.ship[upgrade] = '';
        return requirementSet;
    };
    ShipComponent.prototype.changeUpgrade = function (model) {
        // Reset if blank
        if (model.value === '') {
            model.control.reset('');
        }
    };
    ShipComponent.prototype.updateUpgradeStatus = function () {
        var _this = this;
        setTimeout(function () {
            for (var field in _this.form.form.controls) {
                var control = _this.form.form.get(field);
                if (control.value !== '') {
                    control.markAsDirty();
                }
            }
        });
    };
    ShipComponent.prototype.toggleCollapsed = function () {
        this.isCollapsed = !this.isCollapsed;
    };
    ShipComponent.prototype.createPrettyAttackValues = function (attackValues) {
        var values = [];
        attackValues.split(',').forEach(function (value) {
            var attack = {
                name: 'frontarc',
                value: '0'
            };
            // Front Arc
            if (value.length === 0) {
                attack.value = value;
                // Not Front Arc
            }
            else {
                attack.value = value.split('')[0];
                var attackFacing = value.split('')[value.length - 1];
                /*
        
                  Match names to icon names
        
                */
                // Half Front
                if (attackFacing === 'h') {
                    attack.name = 'fullfrontarc';
                    // Single Turret
                }
                else if (attackFacing === 's') {
                    attack.name = 'singleturretarc';
                    // Double Turret
                }
                else if (attackFacing === 'd') {
                    attack.name = 'doubleturretarc';
                    // Rear Arc
                }
                else if (attackFacing === 'r') {
                    attack.name = 'reararc';
                }
            }
            values.push(attack);
        });
        return values;
    };
    ShipComponent.prototype.createPrettyAction = function (name) {
        var action = {
            name: 'focus',
            difficulty: 'white'
        };
        action.name = name.replace(new RegExp(/[\[\]]/, 'g'), '').replace(new RegExp(/\s/, 'g'), '').toLowerCase();
        // Check Difficulty (Can't be red action into another red action so don't have to check for that later)
        if (RegExp(/^red/).test(action.name)) {
            action.difficulty = 'red';
            action.name = action.name.replace(new RegExp(/^red/, 'g'), '');
        }
        /*
    
          Match names to icon names
    
        */
        if (action.name === 'lock') {
            action.name = 'targetlock';
        }
        return action;
    };
    ShipComponent.prototype.createPrettyActions = function (actionValues) {
        var _this = this;
        var values = [];
        actionValues.split(',').forEach(function (value) {
            var action = _this.createPrettyAction(value);
            // Linked Actions
            if (value.indexOf('-') >= 0) {
                var linkedAction = _this.createPrettyAction(action.name.split('-')[1]);
                action.name = action.name.split('-')[0];
                /*
        
                  Match names to icon names
        
                */
                if (action.name === 'lock') {
                    action.name = 'targetlock';
                }
                action.linkedAction = linkedAction;
            }
            values.push(action);
        });
        return values;
    };
    ShipComponent.prototype.ngOnInit = function () {
        this.updateUpgradeStatus();
        this.attackValues = this.createPrettyAttackValues(this.ship.attack);
        this.actions = this.createPrettyActions(this.ship.actions);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"])('class.ship'),
        __metadata("design:type", Boolean)
    ], ShipComponent.prototype, "attrClass", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('f'),
        __metadata("design:type", _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgForm"])
    ], ShipComponent.prototype, "form", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Array)
    ], ShipComponent.prototype, "upgrades", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Boolean)
    ], ShipComponent.prototype, "showAbilities", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Array)
    ], ShipComponent.prototype, "squad", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", _app_core_model_ship__WEBPACK_IMPORTED_MODULE_2__["Ship"])
    ], ShipComponent.prototype, "ship", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Number)
    ], ShipComponent.prototype, "index", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Number)
    ], ShipComponent.prototype, "points", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], ShipComponent.prototype, "updatePoints", void 0);
    ShipComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-ship',
            template: __webpack_require__(/*! ./ship.component.html */ "./src/app/shared/components/ship/ship.component.html"),
            styles: [__webpack_require__(/*! ./ship.component.scss */ "./src/app/shared/components/ship/ship.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], ShipComponent);
    return ShipComponent;
}());



/***/ }),

/***/ "./src/app/shared/components/squad/squad.component.html":
/*!**************************************************************!*\
  !*** ./src/app/shared/components/squad/squad.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-ship-search [ships]=\"ships\" (selectedShip)=\"addShip($event)\"></app-ship-search>\n<div class=\"squad__meta\">\n  <div class=\"squad__meta__details\">\n    <div class=\"squad__meta__faction\">{{ faction }} squadron</div>\n    <div class=\"squad__meta__points\">\n      Points <span class=\"squad__meta__points__total\">{{ squadPoints(ships, upgrades, squad) }}</span>\n    </div>\n  </div>\n  <div class=\"squad__meta__controls\">\n    <button class=\"button\" (click)=\"toggleShowAbilities()\"><span *ngIf=\"showAbilities\">Hide</span><span *ngIf=\"!showAbilities\">Show</span> Abilities</button>\n    <button class=\"button\"(click)=\"createExportLink()\">Export</button>\n    <!-- <button class=\"button\"(click)=\"viewSquad()\">View</button> -->\n  </div>\n</div>\n<div class=\"container\">\n  <app-alert *ngIf=\"showLink\">{{ squadLink }}</app-alert>\n</div>\n<app-ship *ngFor=\"let ship of squad; index as i\"\n  [index]=\"i\"\n  [points]=\"points\"\n  [ship]=\"ship\"\n  [showAbilities]=\"showAbilities\"\n  [squad]=\"squad\"\n  [upgrades]=\"upgrades\"\n  (updatePoints)=\"squadPoints(ships, upgrades, squad)\">\n</app-ship>\n"

/***/ }),

/***/ "./src/app/shared/components/squad/squad.component.scss":
/*!**************************************************************!*\
  !*** ./src/app/shared/components/squad/squad.component.scss ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/*\n\nSquad\n\nTODO: Squad Toolbar Component + Squad Points\n\n*/\n.squad__meta__controls {\n  display: flex; }\n.squad__meta__controls .button {\n    flex: 1; }\n.squad__meta__controls .button + .button {\n      margin-left: 6px; }\n@media screen and (min-width: 768px) {\n    .squad__meta__controls {\n      justify-content: flex-end; }\n      .squad__meta__controls .button {\n        flex: none; } }\n.squad__meta {\n  max-width: 1280px;\n  margin: 24px auto;\n  padding: 0 12px; }\n@media screen and (min-width: 768px) {\n    .squad__meta {\n      display: flex; }\n      .squad__meta > * {\n        flex: 1; }\n        .squad__meta > *:last-child {\n          flex: none; }\n      .squad__meta .squad__meta__details,\n      .squad__meta .squad__meta__controls {\n        margin: 0; } }\n.squad__meta__details,\n.squad__meta__controls {\n  margin: 24px auto; }\n.squad__meta__points {\n  margin-top: 2px; }\n.squad__meta__points__total {\n  font-weight: bold; }\n.squad__meta__faction {\n  text-transform: capitalize;\n  font-weight: bold;\n  font-size: 18px; }\n"

/***/ }),

/***/ "./src/app/shared/components/squad/squad.component.ts":
/*!************************************************************!*\
  !*** ./src/app/shared/components/squad/squad.component.ts ***!
  \************************************************************/
/*! exports provided: SquadComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SquadComponent", function() { return SquadComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var SquadComponent = /** @class */ (function () {
    function SquadComponent() {
        this.attrClass = true;
        this.showAbilities = true;
        this.showLink = false;
        this.squad = [];
    }
    SquadComponent.prototype.ngOnInit = function () {
        var queryParams = new URLSearchParams(window.location.search);
        if (queryParams.has('squad')) {
            this.importSquad(queryParams.get('squad'));
        }
    };
    SquadComponent.prototype.toggleShowAbilities = function () {
        this.showAbilities = !this.showAbilities;
    };
    SquadComponent.prototype.squadPoints = function (faction, factionUpgrades, squad) {
        var _this = this;
        var points = 0;
        squad.forEach(function (s) {
            points += s.cost;
            points += _this.pointsForUpgrade(s, factionUpgrades, s.talent);
            points += _this.pointsForUpgrade(s, factionUpgrades, s.sensor);
            points += _this.pointsForUpgrade(s, factionUpgrades, s.cannon1);
            points += _this.pointsForUpgrade(s, factionUpgrades, s.cannon2);
            points += _this.pointsForUpgrade(s, factionUpgrades, s.torpedo1);
            points += _this.pointsForUpgrade(s, factionUpgrades, s.modification1);
            points += _this.pointsForUpgrade(s, factionUpgrades, s.modification2);
            points += _this.pointsForUpgrade(s, factionUpgrades, s.modification3);
            points += _this.pointsForUpgrade(s, factionUpgrades, s.crew1);
            points += _this.pointsForUpgrade(s, factionUpgrades, s.crew2);
            points += _this.pointsForUpgrade(s, factionUpgrades, s.crew3);
            points += _this.pointsForUpgrade(s, factionUpgrades, s.gunner1);
            points += _this.pointsForUpgrade(s, factionUpgrades, s.astromech);
            points += _this.pointsForUpgrade(s, factionUpgrades, s.force);
            points += _this.pointsForUpgrade(s, factionUpgrades, s.turret);
            points += _this.pointsForUpgrade(s, factionUpgrades, s.title);
            points += _this.pointsForUpgrade(s, factionUpgrades, s.device1);
            points += _this.pointsForUpgrade(s, factionUpgrades, s.device2);
            points += _this.pointsForUpgrade(s, factionUpgrades, s.missile1);
            points += _this.pointsForUpgrade(s, factionUpgrades, s.missile2);
            points += _this.pointsForUpgrade(s, factionUpgrades, s.configuration);
            points += _this.pointsForUpgrade(s, factionUpgrades, s.illicit1);
            points += _this.pointsForUpgrade(s, factionUpgrades, s.illicit2);
            points += _this.pointsForUpgrade(s, factionUpgrades, s.tech);
        });
        this.showLink = false;
        return points;
    };
    SquadComponent.prototype.createExportLink = function () {
        var faction = this.faction.charAt(0).toUpperCase() + this.faction.slice(1); // Uppercase first character
        var output = { faction: faction, squad: this.squad };
        var value = btoa(JSON.stringify(output));
        var link = window.location + "?squad=" + value;
        this.squadLink = link;
        this.showLink = true;
    };
    SquadComponent.prototype.viewSquad = function () {
        // placeholder
    };
    SquadComponent.prototype.importSquad = function (data) {
        var input = JSON.parse(atob(data));
        this.squad = input.squad;
    };
    SquadComponent.prototype.pointsForUpgrade = function (ship, upgrades, upgrade) {
        if (!upgrade)
            return 0;
        upgrades = upgrades.filter(function (u) { return upgrade.split(",")[0].indexOf(u.name) > -1; });
        if (upgrades.length === 0)
            return 0;
        var splitCosts = upgrades[0].cost.split(',');
        if (splitCosts.length === 1)
            return parseInt(splitCosts[0]);
        var cost;
        if (splitCosts.length === 3) {
            cost = ship.size === 'Small' ? splitCosts[0] : ship.size === 'Medium' ? splitCosts[1] : splitCosts[2];
        }
        if (splitCosts.length === 4) {
            cost = ship.agility === 0 ? splitCosts[0] : ship.agility === 1 ? splitCosts[1] : ship.agility === 2 ? splitCosts[2] : splitCosts[3];
        }
        return parseInt(cost);
    };
    SquadComponent.prototype.addShip = function (ship) {
        this.squad.unshift(Object.assign({}, ship));
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"])('class.squad'),
        __metadata("design:type", Boolean)
    ], SquadComponent.prototype, "attrClass", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], SquadComponent.prototype, "faction", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Array)
    ], SquadComponent.prototype, "ships", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Array)
    ], SquadComponent.prototype, "upgrades", void 0);
    SquadComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-squad',
            template: __webpack_require__(/*! ./squad.component.html */ "./src/app/shared/components/squad/squad.component.html"),
            styles: [__webpack_require__(/*! ./squad.component.scss */ "./src/app/shared/components/squad/squad.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], SquadComponent);
    return SquadComponent;
}());



/***/ }),

/***/ "./src/app/shared/pipes/search-filter.pipe.ts":
/*!****************************************************!*\
  !*** ./src/app/shared/pipes/search-filter.pipe.ts ***!
  \****************************************************/
/*! exports provided: SearchFilterPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchFilterPipe", function() { return SearchFilterPipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var SearchFilterPipe = /** @class */ (function () {
    function SearchFilterPipe() {
    }
    SearchFilterPipe.prototype.transform = function (ships, search, showAll) {
        if (showAll && (!search || search === ''))
            return ships;
        if (!search || search === '')
            return [];
        search = search.toLowerCase();
        return ships.filter(function (s) { return s.name.toLowerCase().indexOf(search) > -1 || s.pilot.toLowerCase().indexOf(search) > -1; });
    };
    SearchFilterPipe = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"])({ name: 'searchFilter' })
    ], SearchFilterPipe);
    return SearchFilterPipe;
}());



/***/ }),

/***/ "./src/app/shared/pipes/ship.pipe.ts":
/*!*******************************************!*\
  !*** ./src/app/shared/pipes/ship.pipe.ts ***!
  \*******************************************/
/*! exports provided: ForShip */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ForShip", function() { return ForShip; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var ForShip = /** @class */ (function () {
    function ForShip() {
    }
    ForShip.prototype.transform = function (ships, shipName) {
        return ships.filter(function (ship) { return ship.name === shipName; });
    };
    ForShip = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"])({ name: 'forShip', pure: false })
    ], ForShip);
    return ForShip;
}());



/***/ }),

/***/ "./src/app/shared/pipes/upgrade.pipe.ts":
/*!**********************************************!*\
  !*** ./src/app/shared/pipes/upgrade.pipe.ts ***!
  \**********************************************/
/*! exports provided: ForUpgrade */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ForUpgrade", function() { return ForUpgrade; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var ForUpgrade = /** @class */ (function () {
    function ForUpgrade() {
    }
    ForUpgrade.prototype.transform = function (upgrades, upgradeType) {
        if (!upgrades)
            return [];
        return upgrades.filter(function (upgrade) { return upgrade.type === upgradeType; });
    };
    ForUpgrade = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"])({ name: 'forUpgrade', pure: false })
    ], ForUpgrade);
    return ForUpgrade;
}());



/***/ }),

/***/ "./src/app/shared/shared.module.ts":
/*!*****************************************!*\
  !*** ./src/app/shared/shared.module.ts ***!
  \*****************************************/
/*! exports provided: SharedModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SharedModule", function() { return SharedModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _components_alert_alert_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/alert/alert.component */ "./src/app/shared/components/alert/alert.component.ts");
/* harmony import */ var _components_ship_ship_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/ship/ship.component */ "./src/app/shared/components/ship/ship.component.ts");
/* harmony import */ var _components_ship_search_ship_search_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/ship-search/ship-search.component */ "./src/app/shared/components/ship-search/ship-search.component.ts");
/* harmony import */ var _components_squad_squad_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/squad/squad.component */ "./src/app/shared/components/squad/squad.component.ts");
/* harmony import */ var _pipes_ship_pipe__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./pipes/ship.pipe */ "./src/app/shared/pipes/ship.pipe.ts");
/* harmony import */ var _pipes_upgrade_pipe__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./pipes/upgrade.pipe */ "./src/app/shared/pipes/upgrade.pipe.ts");
/* harmony import */ var _pipes_search_filter_pipe__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./pipes/search-filter.pipe */ "./src/app/shared/pipes/search-filter.pipe.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



// Components




// Pipes



var SharedModule = /** @class */ (function () {
    function SharedModule() {
    }
    SharedModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"]
            ],
            declarations: [
                _components_alert_alert_component__WEBPACK_IMPORTED_MODULE_3__["AlertComponent"],
                _components_ship_ship_component__WEBPACK_IMPORTED_MODULE_4__["ShipComponent"],
                _components_ship_search_ship_search_component__WEBPACK_IMPORTED_MODULE_5__["ShipSearchComponent"],
                _components_squad_squad_component__WEBPACK_IMPORTED_MODULE_6__["SquadComponent"],
                _pipes_ship_pipe__WEBPACK_IMPORTED_MODULE_7__["ForShip"],
                _pipes_upgrade_pipe__WEBPACK_IMPORTED_MODULE_8__["ForUpgrade"],
                _pipes_search_filter_pipe__WEBPACK_IMPORTED_MODULE_9__["SearchFilterPipe"]
            ],
            exports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _components_alert_alert_component__WEBPACK_IMPORTED_MODULE_3__["AlertComponent"],
                _components_ship_ship_component__WEBPACK_IMPORTED_MODULE_4__["ShipComponent"],
                _components_ship_search_ship_search_component__WEBPACK_IMPORTED_MODULE_5__["ShipSearchComponent"],
                _components_squad_squad_component__WEBPACK_IMPORTED_MODULE_6__["SquadComponent"],
                _pipes_ship_pipe__WEBPACK_IMPORTED_MODULE_7__["ForShip"],
                _pipes_upgrade_pipe__WEBPACK_IMPORTED_MODULE_8__["ForUpgrade"],
                _pipes_search_filter_pipe__WEBPACK_IMPORTED_MODULE_9__["SearchFilterPipe"]
            ]
        })
    ], SharedModule);
    return SharedModule;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/dan/Web Development/xwing2estopgap/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map