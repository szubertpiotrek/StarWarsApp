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
		var e = new Error("Cannot find module '" + req + "'");
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
/*! exports provided: AppRoutingModule, routingComponents */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "routingComponents", function() { return routingComponents; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _main_view_element_main_view_element_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./main-view-element/main-view-element.component */ "./src/app/main-view-element/main-view-element.component.ts");
/* harmony import */ var _main_main_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./main/main.component */ "./src/app/main/main.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var routes = [
    { path: "view/:number", component: _main_view_element_main_view_element_component__WEBPACK_IMPORTED_MODULE_3__["MainViewElementComponent"] },
    { path: '**', component: _main_main_component__WEBPACK_IMPORTED_MODULE_4__["MainComponent"] }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes, { useHash: true })
            ],
            exports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]
            ],
            declarations: []
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());

var routingComponents = [_main_view_element_main_view_element_component__WEBPACK_IMPORTED_MODULE_3__["MainViewElementComponent"]];


/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--The content below is only a placeholder and can be replaced.-->\n<div class=\"\">\n  <router-outlet></router-outlet>\n</div>\n\n\n"

/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

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
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")]
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
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _main_main_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./main/main.component */ "./src/app/main/main.component.ts");
/* harmony import */ var _main_list_main_list_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./main-list/main-list.component */ "./src/app/main-list/main-list.component.ts");
/* harmony import */ var _main_left_button_main_left_button_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./main-left-button/main-left-button.component */ "./src/app/main-left-button/main-left-button.component.ts");
/* harmony import */ var _main_right_button_main_right_button_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./main-right-button/main-right-button.component */ "./src/app/main-right-button/main-right-button.component.ts");
/* harmony import */ var _main_show_elements_main_show_elements_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./main-show-elements/main-show-elements.component */ "./src/app/main-show-elements/main-show-elements.component.ts");
/* harmony import */ var _planets_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./planets.service */ "./src/app/planets.service.ts");
/* harmony import */ var _main_search_input_main_search_input_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./main-search-input/main-search-input.component */ "./src/app/main-search-input/main-search-input.component.ts");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};













var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                _main_main_component__WEBPACK_IMPORTED_MODULE_5__["MainComponent"],
                _main_list_main_list_component__WEBPACK_IMPORTED_MODULE_6__["MainListComponent"],
                _main_left_button_main_left_button_component__WEBPACK_IMPORTED_MODULE_7__["MainLeftButtonComponent"],
                _main_right_button_main_right_button_component__WEBPACK_IMPORTED_MODULE_8__["MainRightButtonComponent"],
                _main_show_elements_main_show_elements_component__WEBPACK_IMPORTED_MODULE_9__["MainShowElementsComponent"],
                _main_search_input_main_search_input_component__WEBPACK_IMPORTED_MODULE_11__["MainSearchInputComponent"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_12__["routingComponents"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_12__["AppRoutingModule"]
            ],
            providers: [_planets_service__WEBPACK_IMPORTED_MODULE_10__["PlanetsService"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/main-left-button/main-left-button.component.html":
/*!******************************************************************!*\
  !*** ./src/app/main-left-button/main-left-button.component.html ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<button class=\"main__button-left\"> < </button>\n"

/***/ }),

/***/ "./src/app/main-left-button/main-left-button.component.scss":
/*!******************************************************************!*\
  !*** ./src/app/main-left-button/main-left-button.component.scss ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".main__button-left {\n  margin: 0 2px;\n  background: rgba(40, 107, 154, 0.8);\n  color: #FFFFFF;\n  font-weight: 900;\n  border: 2px solid #243c67;\n  border-radius: 5px; }\n"

/***/ }),

/***/ "./src/app/main-left-button/main-left-button.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/main-left-button/main-left-button.component.ts ***!
  \****************************************************************/
/*! exports provided: MainLeftButtonComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MainLeftButtonComponent", function() { return MainLeftButtonComponent; });
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

var MainLeftButtonComponent = /** @class */ (function () {
    function MainLeftButtonComponent() {
        this.newPage = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    MainLeftButtonComponent.prototype.ngOnInit = function () {
    };
    MainLeftButtonComponent.prototype.onClick = function (btn) {
        if (this.page > 1) {
            this.page--;
            this.newPage.emit(this.page);
            console.log(this.page);
        }
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"])
    ], MainLeftButtonComponent.prototype, "newPage", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Number)
    ], MainLeftButtonComponent.prototype, "page", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"])('click', ['$event.target']),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", void 0)
    ], MainLeftButtonComponent.prototype, "onClick", null);
    MainLeftButtonComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-main-left-button',
            template: __webpack_require__(/*! ./main-left-button.component.html */ "./src/app/main-left-button/main-left-button.component.html"),
            styles: [__webpack_require__(/*! ./main-left-button.component.scss */ "./src/app/main-left-button/main-left-button.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], MainLeftButtonComponent);
    return MainLeftButtonComponent;
}());



/***/ }),

/***/ "./src/app/main-list/main-list.component.html":
/*!****************************************************!*\
  !*** ./src/app/main-list/main-list.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <div class=\"row\">\n    <nav>\n      <table class=\"table\">\n        <thead class=\"thead-dark\">\n          <th scope=\"col\">#</th>\n          <th scope=\"col\">Planet Name</th>\n          <th scope=\"col\"></th>\n        </thead>\n        <tbody>\n        <tr *ngFor=\"let planet of planets | slice:(limit*(page-1)):(limit*page); let i=index\">\n          <td scope=\"row\">{{limit*(page-1) + i+1}}</td>\n          <td><a class=\"main__table--link\" routerLink=\"/view/{{limit*(page-1) + i+1}}\">{{planet.name}}</a></td>\n          <td></td>\n        </tr>\n        </tbody>\n      </table>\n    </nav>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/main-list/main-list.component.scss":
/*!****************************************************!*\
  !*** ./src/app/main-list/main-list.component.scss ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "th, td {\n  text-align: center;\n  font-weight: 900;\n  font-size: 20px; }\n\ntr:hover {\n  color: #FFFFFF;\n  transition: 0.3s; }\n\nth {\n  font-size: 25px; }\n\nthead {\n  background: rgba(109, 109, 109, 0.8); }\n\ntable {\n  margin: 50px;\n  width: 700px; }\n\nthead, tbody tr {\n  table-layout: fixed; }\n\ntbody {\n  height: 500px;\n  overflow: scroll; }\n\ntr:nth-child(even) {\n  background: rgba(204, 204, 204, 0.8);\n  transition: 0.5s; }\n\ntr:nth-child(odd) {\n  background: rgba(55, 130, 195, 0.69);\n  transition: 0.5s; }\n\ntr:hover {\n  -webkit-transform: scale(1.05);\n          transform: scale(1.05);\n  background: rgba(41, 76, 126, 0.8);\n  transition: 0.5s; }\n\n.main__table--link {\n  text-decoration: none;\n  color: #000000; }\n\n.main__table--link:hover {\n  transition: 0.3s;\n  text-decoration: none;\n  color: #FFFFFF; }\n"

/***/ }),

/***/ "./src/app/main-list/main-list.component.ts":
/*!**************************************************!*\
  !*** ./src/app/main-list/main-list.component.ts ***!
  \**************************************************/
/*! exports provided: MainListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MainListComponent", function() { return MainListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _planets_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../planets.service */ "./src/app/planets.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var MainListComponent = /** @class */ (function () {
    function MainListComponent(planetsService) {
        this.planetsService = planetsService;
        this.planets = [];
        this.limits = 0;
        this.maxPagesPlanets = 1;
        this.maxPagesSearchPlanets = 1;
    }
    MainListComponent.prototype.ngOnChanges = function (changes) {
        var _this = this;
        console.log(this.planets);
        if ((this.planets.length === 0 || (this.limits !== this.limit)) && this.search === undefined) {
            console.log(this.planets);
            this.planets = [];
            console.log(this.limit, this.maxPagesPlanets);
            this.planetsService.getPlanets(this.limit, 1, this.maxPagesPlanets)
                .subscribe(function (data) {
                console.log(data);
                data.forEach(function (el) {
                    _this.countPlanets = el.count;
                    _this.maxPagesPlanets = Math.ceil(_this.countPlanets / 10);
                    el.results.forEach(function (el) {
                        _this.planets = _this.planets.concat([el]);
                    });
                });
            });
            this.limits = this.limit;
        }
        else if (this.search === undefined) {
            if ((this.limit * this.page > this.planets.length) && (this.countPlanets >= this.planets.length)) {
                console.log(this.countPlanets, this.planets.length);
                this.planetsService.getPlanets(this.limit, this.page, this.maxPagesPlanets)
                    .subscribe(function (data) {
                    console.log(data);
                    data.forEach(function (el) {
                        el.results.forEach(function (el) {
                            _this.planets = _this.planets.concat([el]);
                        });
                    });
                });
            }
        }
        else if ((this.limits !== this.limit || this.search !== undefined) && this.searchInfo === true) {
            console.log(this.searchInfo);
            this.planets = [];
            this.planetsService.searchPlanets(this.limit, 1, this.search, this.maxPagesSearchPlanets)
                .subscribe(function (data) {
                console.log(data);
                data.forEach(function (el) {
                    _this.countSearchPlanets = el.count;
                    console.log(Math.ceil(_this.countSearchPlanets / 10));
                    _this.maxPagesSearchPlanets = Math.ceil(_this.countSearchPlanets / 10);
                    el.results.forEach(function (el) {
                        _this.planets = _this.planets.concat([el]);
                    });
                });
            });
            this.searchInfo = false;
            this.limits = this.limit;
        }
        else if (this.search !== undefined) {
            console.log(this.search);
            console.log(this.limit, this.page, this.search);
            if (this.limit * this.page > this.planets.length && (this.countSearchPlanets >= this.planets.length)) {
                this.planetsService.searchPlanets(this.limit, this.page, this.search, this.maxPagesSearchPlanets)
                    .subscribe(function (data) {
                    data.forEach(function (el) {
                        el.results.forEach(function (el) {
                            _this.planets = _this.planets.concat([el]);
                        });
                    });
                });
            }
        }
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Boolean)
    ], MainListComponent.prototype, "searchInfo", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Number)
    ], MainListComponent.prototype, "limit", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Number)
    ], MainListComponent.prototype, "page", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], MainListComponent.prototype, "search", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], MainListComponent.prototype, "newPlanets", void 0);
    MainListComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-main-list',
            template: __webpack_require__(/*! ./main-list.component.html */ "./src/app/main-list/main-list.component.html"),
            styles: [__webpack_require__(/*! ./main-list.component.scss */ "./src/app/main-list/main-list.component.scss")]
        }),
        __metadata("design:paramtypes", [_planets_service__WEBPACK_IMPORTED_MODULE_1__["PlanetsService"]])
    ], MainListComponent);
    return MainListComponent;
}());



/***/ }),

/***/ "./src/app/main-right-button/main-right-button.component.html":
/*!********************************************************************!*\
  !*** ./src/app/main-right-button/main-right-button.component.html ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<button class=\"main__button-right\"> > </button>\n"

/***/ }),

/***/ "./src/app/main-right-button/main-right-button.component.scss":
/*!********************************************************************!*\
  !*** ./src/app/main-right-button/main-right-button.component.scss ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".main__button-right {\n  margin: 0 2px;\n  background: rgba(40, 107, 154, 0.8);\n  color: #FFFFFF;\n  font-weight: 900;\n  border: 2px solid #243c67;\n  border-radius: 5px; }\n"

/***/ }),

/***/ "./src/app/main-right-button/main-right-button.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/main-right-button/main-right-button.component.ts ***!
  \******************************************************************/
/*! exports provided: MainRightButtonComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MainRightButtonComponent", function() { return MainRightButtonComponent; });
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

var MainRightButtonComponent = /** @class */ (function () {
    function MainRightButtonComponent() {
        this.newPage = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.searchInfo = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    MainRightButtonComponent.prototype.ngOnInit = function () {
    };
    MainRightButtonComponent.prototype.onClick = function (btn) {
        this.page++;
        this.newPage.emit(this.page);
        this.searchInfo.emit(false);
        console.log(this.page);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"])
    ], MainRightButtonComponent.prototype, "newPage", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"])
    ], MainRightButtonComponent.prototype, "searchInfo", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Number)
    ], MainRightButtonComponent.prototype, "page", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"])('click', ['$event.target']),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", void 0)
    ], MainRightButtonComponent.prototype, "onClick", null);
    MainRightButtonComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-main-right-button',
            template: __webpack_require__(/*! ./main-right-button.component.html */ "./src/app/main-right-button/main-right-button.component.html"),
            styles: [__webpack_require__(/*! ./main-right-button.component.scss */ "./src/app/main-right-button/main-right-button.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], MainRightButtonComponent);
    return MainRightButtonComponent;
}());



/***/ }),

/***/ "./src/app/main-search-input/main-search-input.component.html":
/*!********************************************************************!*\
  !*** ./src/app/main-search-input/main-search-input.component.html ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<form (ngSubmit)=\"onSubmit(text)\" #form=\"ngForm\" class=\"form\">\n  <input placeholder=\"Search a planet...\" class=\"form-control form__input\" type=\"text\" name=\"text\" [(ngModel)]=\"text\" required>\n  <button type=\"submit\"  class=\"btn form__btn\">Submit</button>\n</form>\n"

/***/ }),

/***/ "./src/app/main-search-input/main-search-input.component.scss":
/*!********************************************************************!*\
  !*** ./src/app/main-search-input/main-search-input.component.scss ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".form {\n  display: flex;\n  padding: 20px 0 0 0; }\n  .form__btn {\n    border: 2px solid #243c67;\n    background: rgba(40, 107, 154, 0.8);\n    color: #FFFFFF;\n    font-weight: 700; }\n  .form__btn:hover {\n    border: 2px solid #243c67;\n    background: rgba(40, 107, 154, 0.8);\n    color: #FFFFFF;\n    font-weight: 700;\n    transition: 0.5s;\n    -webkit-transform: scale(1.05);\n            transform: scale(1.05); }\n"

/***/ }),

/***/ "./src/app/main-search-input/main-search-input.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/main-search-input/main-search-input.component.ts ***!
  \******************************************************************/
/*! exports provided: MainSearchInputComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MainSearchInputComponent", function() { return MainSearchInputComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var MainSearchInputComponent = /** @class */ (function () {
    function MainSearchInputComponent() {
        this.search = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.newPage = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.searchInfo = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.newLimit = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    MainSearchInputComponent.prototype.ngOnInit = function () {
    };
    MainSearchInputComponent.prototype.onSubmit = function (text) {
        if (this.form.valid) {
            this.search.emit(text);
            this.page = 1;
            this.newPage.emit(this.page);
            this.searchInfo.emit(true);
            this.newLimit.emit(5);
            this.form.reset();
        }
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"])
    ], MainSearchInputComponent.prototype, "search", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"])
    ], MainSearchInputComponent.prototype, "newPage", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"])
    ], MainSearchInputComponent.prototype, "searchInfo", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"])
    ], MainSearchInputComponent.prototype, "newLimit", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Number)
    ], MainSearchInputComponent.prototype, "page", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('form'),
        __metadata("design:type", _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgForm"])
    ], MainSearchInputComponent.prototype, "form", void 0);
    MainSearchInputComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-main-search-input',
            template: __webpack_require__(/*! ./main-search-input.component.html */ "./src/app/main-search-input/main-search-input.component.html"),
            styles: [__webpack_require__(/*! ./main-search-input.component.scss */ "./src/app/main-search-input/main-search-input.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], MainSearchInputComponent);
    return MainSearchInputComponent;
}());



/***/ }),

/***/ "./src/app/main-show-elements/main-show-elements.component.html":
/*!**********************************************************************!*\
  !*** ./src/app/main-show-elements/main-show-elements.component.html ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<select class=\"main__select\" name=\"\" id=\"\"  [(ngModel)]=\"option\"\n        #selectModel=\"ngModel\">\n  <option value=\"5\">5</option>\n  <option value=\"10\">10</option>\n  <option value=\"25\">25</option>\n  <option value=\"100\">100</option>\n</select>\n"

/***/ }),

/***/ "./src/app/main-show-elements/main-show-elements.component.scss":
/*!**********************************************************************!*\
  !*** ./src/app/main-show-elements/main-show-elements.component.scss ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".main__select {\n  margin: 0 0 0 5px;\n  color: #FFFFFF;\n  background: rgba(40, 107, 154, 0.8);\n  border: none;\n  border-radius: 3px; }\n"

/***/ }),

/***/ "./src/app/main-show-elements/main-show-elements.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/main-show-elements/main-show-elements.component.ts ***!
  \********************************************************************/
/*! exports provided: MainShowElementsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MainShowElementsComponent", function() { return MainShowElementsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var MainShowElementsComponent = /** @class */ (function () {
    function MainShowElementsComponent() {
        this.limit = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.newPage = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.option = 5;
    }
    MainShowElementsComponent.prototype.ngOnChanges = function (changes) {
        if (this.newLimit === 5) {
            this.selectModel.reset(5);
        }
    };
    MainShowElementsComponent.prototype.onChange = function (select) {
        this.limit.emit(select.value);
        this.newPage.emit(1);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"])
    ], MainShowElementsComponent.prototype, "limit", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"])
    ], MainShowElementsComponent.prototype, "newPage", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Number)
    ], MainShowElementsComponent.prototype, "newLimit", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('selectModel'),
        __metadata("design:type", _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgModel"])
    ], MainShowElementsComponent.prototype, "selectModel", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"])('change', ['$event.target']),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", void 0)
    ], MainShowElementsComponent.prototype, "onChange", null);
    MainShowElementsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-main-show-elements',
            template: __webpack_require__(/*! ./main-show-elements.component.html */ "./src/app/main-show-elements/main-show-elements.component.html"),
            styles: [__webpack_require__(/*! ./main-show-elements.component.scss */ "./src/app/main-show-elements/main-show-elements.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], MainShowElementsComponent);
    return MainShowElementsComponent;
}());



/***/ }),

/***/ "./src/app/main-view-element/main-view-element.component.html":
/*!********************************************************************!*\
  !*** ./src/app/main-view-element/main-view-element.component.html ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"main__view\">\n  <div class=\"container\">\n    <div class=\"main__view--back\">\n      <button class=\"main__view--back-button\"><a routerLink=\"\" class=\"main__view--back-link\">Back</a></button>\n    </div>\n    <div>\n      <h1>{{planet.name}}</h1>\n      <table class=\"table\">\n        <thead class=\"thead-dark\">\n        <tr>\n          <th scope=\"col\">Rotation Period</th>\n          <th scope=\"col\">Climate</th>\n          <th scope=\"col\">Diameter</th>\n          <th scope=\"col\">Gravity</th>\n          <th scope=\"col\">Terrain</th>\n        </tr>\n        </thead>\n        <tbody>\n        <tr>\n          <td scope=\"row\">{{planet.rotation_period}}</td>\n          <td scope=\"row\">{{planet.climate}}</td>\n          <td scope=\"row\">{{planet.diameter}}</td>\n          <td scope=\"row\">{{planet.gravity}}</td>\n          <td scope=\"row\">{{planet.terrain}}</td>\n        </tr>\n        </tbody>\n      </table>\n      <img src=\"src/laser.png\" alt=\"\"/>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/main-view-element/main-view-element.component.scss":
/*!********************************************************************!*\
  !*** ./src/app/main-view-element/main-view-element.component.scss ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".main__view--back {\n  display: flex;\n  justify-content: flex-end; }\n\n.main__view--back-button {\n  margin: 20px;\n  background: rgba(40, 107, 154, 0.8);\n  font-weight: 900;\n  font-size: 20px;\n  width: 100px;\n  border: 1px solid #243c67;\n  border-radius: 5px;\n  transition: 0.5s; }\n\n.main__view--back-button:hover {\n  transition: 0.5s;\n  -webkit-transform: scale(1.1);\n          transform: scale(1.1); }\n\n.main__view--back {\n  display: flex;\n  justify-content: flex-end; }\n\n.main__view--back-link {\n  text-decoration: none;\n  color: #FFFFFF; }\n"

/***/ }),

/***/ "./src/app/main-view-element/main-view-element.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/main-view-element/main-view-element.component.ts ***!
  \******************************************************************/
/*! exports provided: MainViewElementComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MainViewElementComponent", function() { return MainViewElementComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _planets_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../planets.service */ "./src/app/planets.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var MainViewElementComponent = /** @class */ (function () {
    function MainViewElementComponent(planetsService, activatedRoute, router) {
        this.planetsService = planetsService;
        this.activatedRoute = activatedRoute;
        this.router = router;
        this.planet = {
            name: "",
            gravity: "",
            terrain: "",
            diameter: "",
            climate: "",
            rotation_period: ""
        };
    }
    MainViewElementComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.activatedRoute.params.subscribe(function (paramsId) {
            _this.id = paramsId.number;
        });
        this.planetsService.getPlanetInfo(this.id)
            .subscribe(function (data) {
            _this.planet = data;
            console.log(data);
        });
    };
    MainViewElementComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-main-view-element',
            template: __webpack_require__(/*! ./main-view-element.component.html */ "./src/app/main-view-element/main-view-element.component.html"),
            styles: [__webpack_require__(/*! ./main-view-element.component.scss */ "./src/app/main-view-element/main-view-element.component.scss")]
        }),
        __metadata("design:paramtypes", [_planets_service__WEBPACK_IMPORTED_MODULE_1__["PlanetsService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], MainViewElementComponent);
    return MainViewElementComponent;
}());



/***/ }),

/***/ "./src/app/main/main.component.html":
/*!******************************************!*\
  !*** ./src/app/main/main.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"main__backgroud\">\n  <div class=\"container\">\n    <div class=\"main__logo\">\n      <img src=\"/src/Starwars-logo.png\" class=\"main__logo--img\"/>\n    </div>\n    <div>\n      <div class=\"main__search\">\n        <app-main-search-input [page]=\"page\" (search)=\"searching($event)\" (newPage)=\"nextPages($event)\" (searchInfo)=\"searchInfo($event)\" (newLimit)=\"newLimits($event)\"></app-main-search-input>\n        <div class=\"main__search--nav\">\n          <app-main-left-button [page]=\"page\" (newPage)=\"prevPages($event)\"></app-main-left-button>\n          <app-main-right-button [page]=\"page\" (newPage)=\"nextPages($event)\" (searchInfo)=\"searchInfo($event)\"></app-main-right-button>\n          <app-main-show-elements (limit)=\"newLimits($event)\" (newPage)=\"nextPages($event)\" [newLimit]=\"limit\"></app-main-show-elements>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n<div class=\"main__list\">\n  <app-main-list [limit]=\"limit\" [page]=\"page\" [search]=\"search\" [searchInfo]=\"searchInfos\"></app-main-list>\n</div>\n\n\n"

/***/ }),

/***/ "./src/app/main/main.component.scss":
/*!******************************************!*\
  !*** ./src/app/main/main.component.scss ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".main__backgroud {\n  background-image: url(\"/src/main-qimg-f24d45473620e44b1a5d6fca67f33df8.png\"); }\n\n.main__logo {\n  padding: 10px;\n  height: 100px; }\n\n.main__logo--img {\n    height: 100%; }\n\n.main__search {\n  display: flex;\n  flex-direction: column; }\n\n.main__search--nav {\n  padding: 20px;\n  display: flex;\n  justify-content: flex-end; }\n\n.main__list {\n  height: 71.5vh;\n  display: flex;\n  justify-content: center;\n  background-image: url(\"/src/background.png\");\n  background-repeat: no-repeat;\n  background-size: contain; }\n"

/***/ }),

/***/ "./src/app/main/main.component.ts":
/*!****************************************!*\
  !*** ./src/app/main/main.component.ts ***!
  \****************************************/
/*! exports provided: MainComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MainComponent", function() { return MainComponent; });
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

var MainComponent = /** @class */ (function () {
    function MainComponent() {
        this.title = 'StarWarsApp';
        this.page = 1;
        this.limit = 5;
    }
    MainComponent.prototype.ngOnInit = function () {
    };
    MainComponent.prototype.nextPages = function (nextUrl) {
        console.log(nextUrl);
        this.page = nextUrl;
    };
    MainComponent.prototype.prevPages = function (prevUrl) {
        this.page = prevUrl;
    };
    MainComponent.prototype.newLimits = function (limit) {
        console.log(limit);
        this.limit = limit;
    };
    MainComponent.prototype.searching = function (search) {
        console.log(search);
        this.search = search;
    };
    MainComponent.prototype.searchInfo = function (searchInfo) {
        console.log(searchInfo);
        this.searchInfos = searchInfo;
    };
    MainComponent.prototype.getPlanets = function (planets) {
        console.log(planets);
        this.planets = planets;
    };
    MainComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-main',
            template: __webpack_require__(/*! ./main.component.html */ "./src/app/main/main.component.html"),
            styles: [__webpack_require__(/*! ./main.component.scss */ "./src/app/main/main.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], MainComponent);
    return MainComponent;
}());



/***/ }),

/***/ "./src/app/planets.service.ts":
/*!************************************!*\
  !*** ./src/app/planets.service.ts ***!
  \************************************/
/*! exports provided: PlanetsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PlanetsService", function() { return PlanetsService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var PlanetsService = /** @class */ (function () {
    function PlanetsService(http) {
        this.http = http;
        this.planetsUrl = 'https://swapi.co/api/planets/';
        this.maxPlanets = 1;
        this.maxSearchPlanets = 1;
        this.lastPage = 0;
    }
    PlanetsService.prototype.getPlanets = function (limit, page, maxPage) {
        var arr = [];
        if (this.limitPlanets !== limit || page === 1) {
            this.limitPlanets = limit;
            this.maxPlanets = 1;
            this.lastPage = 0;
        }
        this.currentPage = Math.round(limit / 10) * page;
        for (var i = this.lastPage + 1; i <= this.currentPage; i++) {
            if (this.maxPlanets <= maxPage) {
                console.log(i);
                this.maxPlanets++;
                console.log(this.maxPlanets, this.http.get(this.planetsUrl + ("?page=" + i)));
                arr = arr.concat([this.http.get(this.planetsUrl + ("?page=" + i))]);
            }
        }
        this.lastPage = this.currentPage;
        return rxjs__WEBPACK_IMPORTED_MODULE_2__["forkJoin"].apply(void 0, arr);
    };
    PlanetsService.prototype.searchPlanets = function (limit, page, search, maxPage) {
        var arr = [];
        if (this.limitSearchPlanets !== limit) {
            this.limitSearchPlanets = limit;
            this.maxSearchPlanets = 1;
        }
        if (this.search !== search) {
            this.maxSearchPlanets = 1;
            this.search = search;
            this.lastSearchPage = 0;
        }
        this.currentSearchPage = Math.round(limit / 10) * page;
        for (var i = this.lastSearchPage + 1; i <= this.currentSearchPage; i++) {
            console.log(i, maxPage);
            if (this.maxSearchPlanets <= maxPage) {
                this.maxSearchPlanets++;
                arr = arr.concat([this.http.get(this.planetsUrl + ("?page=" + i + "&search=" + search))]);
            }
        }
        this.lastSearchPage = this.currentSearchPage;
        return rxjs__WEBPACK_IMPORTED_MODULE_2__["forkJoin"].apply(void 0, arr);
    };
    PlanetsService.prototype.getPlanetInfo = function (numberPlanet) {
        return this.http.get(this.planetsUrl + ("" + numberPlanet));
    };
    PlanetsService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], PlanetsService);
    return PlanetsService;
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
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
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
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/piotrsz/WebstormProjects/SoftwarePlant/StarWarsApp/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map