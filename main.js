(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
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
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _pages_account_page_account_page_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./pages/account-page/account-page.component */ "./src/app/pages/account-page/account-page.component.ts");
/* harmony import */ var _pages_profile_page_profile_page_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./pages/profile-page/profile-page.component */ "./src/app/pages/profile-page/profile-page.component.ts");
/* harmony import */ var _pages_not_found_page_not_found_page_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./pages/not-found-page/not-found-page.component */ "./src/app/pages/not-found-page/not-found-page.component.ts");
/* harmony import */ var _layout_site_layout_site_layout_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./layout/site-layout/site-layout.component */ "./src/app/layout/site-layout/site-layout.component.ts");








const routes = [
    {
        path: '',
        component: _layout_site_layout_site_layout_component__WEBPACK_IMPORTED_MODULE_5__["SiteLayoutComponent"],
        children: [
            {
                path: '',
                redirectTo: 'account',
                pathMatch: 'full'
            },
            {
                path: 'account',
                component: _pages_account_page_account_page_component__WEBPACK_IMPORTED_MODULE_2__["AccountPageComponent"]
            },
            {
                path: 'profile',
                component: _pages_profile_page_profile_page_component__WEBPACK_IMPORTED_MODULE_3__["ProfilePageComponent"]
            },
            {
                path: '**',
                component: _pages_not_found_page_not_found_page_component__WEBPACK_IMPORTED_MODULE_4__["NotFoundPageComponent"]
            }
        ]
    }
];
class AppRoutingModule {
}
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");



class AppComponent {
    constructor() {
    }
    ngOnInit() {
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 1, vars: 0, template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "router-outlet");
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"]], encapsulation: 2 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-root',
                template: '<router-outlet></router-outlet>'
            }]
    }], function () { return []; }, null); })();


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
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _ngrx_store_devtools__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngrx/store-devtools */ "./node_modules/@ngrx/store-devtools/__ivy_ngcc__/fesm2015/store-devtools.js");
/* harmony import */ var _ngrx_router_store__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ngrx/router-store */ "./node_modules/@ngrx/router-store/__ivy_ngcc__/fesm2015/router-store.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/__ivy_ngcc__/fesm2015/store.js");
/* harmony import */ var _ngrx_effects__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ngrx/effects */ "./node_modules/@ngrx/effects/__ivy_ngcc__/fesm2015/effects.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _store_reducers__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./store/reducers */ "./src/app/store/reducers/index.ts");
/* harmony import */ var angular_svg_icon__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! angular-svg-icon */ "./node_modules/angular-svg-icon/__ivy_ngcc__/fesm2015/angular-svg-icon.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _shared_components_button_button_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./shared/components/button/button.component */ "./src/app/shared/components/button/button.component.ts");
/* harmony import */ var _shared_components_dropdown_dropdown_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./shared/components/dropdown/dropdown.component */ "./src/app/shared/components/dropdown/dropdown.component.ts");
/* harmony import */ var _shared_components_search_search_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./shared/components/search/search.component */ "./src/app/shared/components/search/search.component.ts");
/* harmony import */ var _shared_components_tabs_tabs_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./shared/components/tabs/tabs.component */ "./src/app/shared/components/tabs/tabs.component.ts");
/* harmony import */ var _shared_components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./shared/components/navbar/navbar.component */ "./src/app/shared/components/navbar/navbar.component.ts");
/* harmony import */ var _shared_components_card_card_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./shared/components/card/card.component */ "./src/app/shared/components/card/card.component.ts");
/* harmony import */ var _pages_account_page_transaction_cards_transaction_cards_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./pages/account-page/transaction-cards/transaction-cards.component */ "./src/app/pages/account-page/transaction-cards/transaction-cards.component.ts");
/* harmony import */ var _shared_components_content_content_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./shared/components/content/content.component */ "./src/app/shared/components/content/content.component.ts");
/* harmony import */ var _shared_components_sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./shared/components/sidebar/sidebar.component */ "./src/app/shared/components/sidebar/sidebar.component.ts");
/* harmony import */ var _pages_account_page_account_page_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./pages/account-page/account-page.component */ "./src/app/pages/account-page/account-page.component.ts");
/* harmony import */ var _pages_profile_page_profile_page_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./pages/profile-page/profile-page.component */ "./src/app/pages/profile-page/profile-page.component.ts");
/* harmony import */ var _pages_not_found_page_not_found_page_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./pages/not-found-page/not-found-page.component */ "./src/app/pages/not-found-page/not-found-page.component.ts");
/* harmony import */ var _layout_site_layout_site_layout_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./layout/site-layout/site-layout.component */ "./src/app/layout/site-layout/site-layout.component.ts");
































class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_12__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"],
            angular_svg_icon__WEBPACK_IMPORTED_MODULE_11__["AngularSvgIconModule"].forRoot(),
            _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"],
            _ngrx_store__WEBPACK_IMPORTED_MODULE_7__["StoreModule"].forRoot(_store_reducers__WEBPACK_IMPORTED_MODULE_10__["reducers"], {
                metaReducers: _store_reducers__WEBPACK_IMPORTED_MODULE_10__["metaReducers"],
                runtimeChecks: {
                    strictStateImmutability: true,
                    strictActionImmutability: true
                }
            }),
            _ngrx_store_devtools__WEBPACK_IMPORTED_MODULE_5__["StoreDevtoolsModule"].instrument({ maxAge: 25, logOnly: _environments_environment__WEBPACK_IMPORTED_MODULE_9__["environment"].production }),
            _ngrx_effects__WEBPACK_IMPORTED_MODULE_8__["EffectsModule"].forRoot([]),
            _ngrx_router_store__WEBPACK_IMPORTED_MODULE_6__["StoreRouterConnectingModule"].forRoot()
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_12__["AppComponent"],
        _shared_components_button_button_component__WEBPACK_IMPORTED_MODULE_13__["ButtonComponent"],
        _shared_components_dropdown_dropdown_component__WEBPACK_IMPORTED_MODULE_14__["DropdownComponent"],
        _shared_components_search_search_component__WEBPACK_IMPORTED_MODULE_15__["SearchComponent"],
        _shared_components_tabs_tabs_component__WEBPACK_IMPORTED_MODULE_16__["TabsComponent"],
        _pages_account_page_account_page_component__WEBPACK_IMPORTED_MODULE_22__["AccountPageComponent"],
        _shared_components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_17__["NavbarComponent"],
        _shared_components_card_card_component__WEBPACK_IMPORTED_MODULE_18__["CardComponent"],
        _pages_account_page_transaction_cards_transaction_cards_component__WEBPACK_IMPORTED_MODULE_19__["TransactionCardsComponent"],
        _shared_components_content_content_component__WEBPACK_IMPORTED_MODULE_20__["ContentComponent"],
        _shared_components_sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_21__["SidebarComponent"],
        _pages_profile_page_profile_page_component__WEBPACK_IMPORTED_MODULE_23__["ProfilePageComponent"],
        _pages_not_found_page_not_found_page_component__WEBPACK_IMPORTED_MODULE_24__["NotFoundPageComponent"],
        _layout_site_layout_site_layout_component__WEBPACK_IMPORTED_MODULE_25__["SiteLayoutComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"], angular_svg_icon__WEBPACK_IMPORTED_MODULE_11__["AngularSvgIconModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"], _ngrx_store__WEBPACK_IMPORTED_MODULE_7__["StoreRootModule"], _ngrx_store_devtools__WEBPACK_IMPORTED_MODULE_5__["StoreDevtoolsModule"], _ngrx_effects__WEBPACK_IMPORTED_MODULE_8__["EffectsRootModule"], _ngrx_router_store__WEBPACK_IMPORTED_MODULE_6__["StoreRouterConnectingModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [
                    _app_component__WEBPACK_IMPORTED_MODULE_12__["AppComponent"],
                    _shared_components_button_button_component__WEBPACK_IMPORTED_MODULE_13__["ButtonComponent"],
                    _shared_components_dropdown_dropdown_component__WEBPACK_IMPORTED_MODULE_14__["DropdownComponent"],
                    _shared_components_search_search_component__WEBPACK_IMPORTED_MODULE_15__["SearchComponent"],
                    _shared_components_tabs_tabs_component__WEBPACK_IMPORTED_MODULE_16__["TabsComponent"],
                    _pages_account_page_account_page_component__WEBPACK_IMPORTED_MODULE_22__["AccountPageComponent"],
                    _shared_components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_17__["NavbarComponent"],
                    _shared_components_card_card_component__WEBPACK_IMPORTED_MODULE_18__["CardComponent"],
                    _pages_account_page_transaction_cards_transaction_cards_component__WEBPACK_IMPORTED_MODULE_19__["TransactionCardsComponent"],
                    _shared_components_content_content_component__WEBPACK_IMPORTED_MODULE_20__["ContentComponent"],
                    _shared_components_sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_21__["SidebarComponent"],
                    _pages_profile_page_profile_page_component__WEBPACK_IMPORTED_MODULE_23__["ProfilePageComponent"],
                    _pages_not_found_page_not_found_page_component__WEBPACK_IMPORTED_MODULE_24__["NotFoundPageComponent"],
                    _layout_site_layout_site_layout_component__WEBPACK_IMPORTED_MODULE_25__["SiteLayoutComponent"]
                ],
                imports: [
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                    _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"],
                    angular_svg_icon__WEBPACK_IMPORTED_MODULE_11__["AngularSvgIconModule"].forRoot(),
                    _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"],
                    _ngrx_store__WEBPACK_IMPORTED_MODULE_7__["StoreModule"].forRoot(_store_reducers__WEBPACK_IMPORTED_MODULE_10__["reducers"], {
                        metaReducers: _store_reducers__WEBPACK_IMPORTED_MODULE_10__["metaReducers"],
                        runtimeChecks: {
                            strictStateImmutability: true,
                            strictActionImmutability: true
                        }
                    }),
                    _ngrx_store_devtools__WEBPACK_IMPORTED_MODULE_5__["StoreDevtoolsModule"].instrument({ maxAge: 25, logOnly: _environments_environment__WEBPACK_IMPORTED_MODULE_9__["environment"].production }),
                    _ngrx_effects__WEBPACK_IMPORTED_MODULE_8__["EffectsModule"].forRoot([]),
                    _ngrx_router_store__WEBPACK_IMPORTED_MODULE_6__["StoreRouterConnectingModule"].forRoot()
                ],
                providers: [],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_12__["AppComponent"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/constants.ts":
/*!******************************!*\
  !*** ./src/app/constants.ts ***!
  \******************************/
/*! exports provided: THEME */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "THEME", function() { return THEME; });
const THEME = {
    light: 'light',
    dark: 'dark'
};


/***/ }),

/***/ "./src/app/layout/site-layout/site-layout.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/layout/site-layout/site-layout.component.ts ***!
  \*************************************************************/
/*! exports provided: SiteLayoutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SiteLayoutComponent", function() { return SiteLayoutComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../constants */ "./src/app/constants.ts");
/* harmony import */ var _shared_services_local_storage_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shared/services/local-storage.service */ "./src/app/shared/services/local-storage.service.ts");
/* harmony import */ var _shared_components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../shared/components/navbar/navbar.component */ "./src/app/shared/components/navbar/navbar.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");






class SiteLayoutComponent {
    constructor(localStorageService) {
        this.localStorageService = localStorageService;
    }
    get theme() {
        return this.localStorageService.get('ab-navbar:theme') || _constants__WEBPACK_IMPORTED_MODULE_1__["THEME"].dark;
    }
}
SiteLayoutComponent.ɵfac = function SiteLayoutComponent_Factory(t) { return new (t || SiteLayoutComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shared_services_local_storage_service__WEBPACK_IMPORTED_MODULE_2__["LocalStorageService"])); };
SiteLayoutComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SiteLayoutComponent, selectors: [["app-site-layout"]], hostVars: 1, hostBindings: function SiteLayoutComponent_HostBindings(rf, ctx) { if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("theme", ctx.theme);
    } }, decls: 3, vars: 0, consts: [[1, "ab-main"]], template: function SiteLayoutComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-navbar");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "main", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_shared_components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_3__["NavbarComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterOutlet"]], styles: ["[_nghost-%COMP%] {\n  color: var(--body-color);\n  background-color: var(--body-bg);\n  display: flex;\n  flex-direction: column;\n  height: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9zdHlsZXMvY29yZS92YXJpYWJsZXMvdmFyaWFibGVzLnNjc3MiLCJzcmMvYXBwL2xheW91dC9zaXRlLWxheW91dC9zaXRlLWxheW91dC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Q0FBQTtBQVdBOztDQUFBO0FBTUE7O0NBQUE7QUFPQTs7Q0FBQTtBQU1BOztDQUFBO0FBS0E7O0NBQUE7QUFLQTs7Q0FBQTtBQVFBOztDQUFBO0FBTUE7O0NBQUE7QUFLQTs7Q0FBQTtBQVdBOztDQUFBO0FBU0E7O0NBQUE7QUFLQTs7Q0FBQTtBQU9BOztDQUFBO0FBS0E7O0NBQUE7QUFRQTs7Q0FBQTtBQU9BOztDQUFBO0FBT0E7O0NBQUE7QUFPQTs7Q0FBQTtBQVNBOztDQUFBO0FDcElBO0VBQ0Usd0JBQUE7RUFDQSxnQ0FBQTtFQUdBLGFBQUE7RUFDQSxzQkFBQTtFQUNBLFlBQUE7QUF5REYiLCJmaWxlIjoic3JjL2FwcC9sYXlvdXQvc2l0ZS1sYXlvdXQvc2l0ZS1sYXlvdXQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvKlxyXG4qIEZvbnQuXHJcbiovXHJcbiRmb250LWZhbWlseS1leHRyYS1ib2xkOiAnUHJveGltYSBFeHRyYSBCb2xkJywgQXJpYWwsIHNhbnMtc2VyaWY7XHJcbiRmb250LWZhbWlseS1ib2xkOiAnUHJveGltYSBCb2xkJywgQXJpYWwsIHNhbnMtc2VyaWY7XHJcbiRmb250LWZhbWlseS1yZWd1bGFyOiAnUHJveGltYSBSZWcnLCBBcmlhbCwgc2Fucy1zZXJpZjtcclxuXHJcbiRmb250LXNpemUtbGc6IDI0cHg7XHJcbiRmb250LXNpemUtbWQ6IDE2cHg7XHJcbiRmb250LXNpemUtYmFzZTogMTRweDtcclxuXHJcbi8qXHJcbiogQm9keS5cclxuKi9cclxuJGJvZHktZm9udC1zaXplOiAkZm9udC1zaXplLWJhc2U7XHJcbiRib2R5LWZvbnQtZmFtaWx5OiAkZm9udC1mYW1pbHktcmVndWxhcjtcclxuXHJcbi8qXHJcbiogU2NyZWVucy5cclxuKi9cclxuJHNjcmVlbi1zeDogNjQwcHg7XHJcbiRzY3JlZW4tbWQ6IDc4MHB4O1xyXG4kc2NyZWVuLWxnOiAxMjAwcHg7XHJcblxyXG4vKlxyXG4qIFotaW5kZXguXHJcbiovXHJcbiR6LWluZGV4LWRyb3Bkb3duOiAyO1xyXG4kei1pbmRleC1zaWRlYmFyOiAzO1xyXG5cclxuLypcclxuKiBTY3JvbGxiYXIuXHJcbiovXHJcbiRzY3JvbGxiYXItc2l6ZTogOHB4O1xyXG5cclxuLypcclxuKiBCb3JkZXIgUmFkaXVzLlxyXG4qL1xyXG4kYm9yZGVyLXJhZGl1cy1iYXNlOiAycHg7XHJcblxyXG4vKlxyXG4qIFNwYWNlcy5cclxuKi9cclxuJHNwYWNlLWJhc2U6IDE2cHg7XHJcbiRzcGFjZS1iYXNlLWRvdWJsZTogJHNwYWNlLWJhc2UqMjtcclxuJHNwYWNlLWJhc2UtaGFsZjogJHNwYWNlLWJhc2UvMjtcclxuJHNwYWNlLXNtYWxsOiAkc3BhY2UtYmFzZS80O1xyXG5cclxuLypcclxuKiBDb250cm9scyAodXNlIGZvciBpbnB1dCB8fCBzZWxlY3RvciB8fCBidXR0b25zKS5cclxuKi9cclxuJGNvbnRyb2wtaGVpZ2h0OiA0MHB4O1xyXG4kY29udHJvbC1zcGFjZXM6ICRzcGFjZS1zbWFsbCAkc3BhY2UtYmFzZTtcclxuXHJcbi8qXHJcbiogQW5pbWF0aW9uLlxyXG4qL1xyXG4kdHJhbnNpdGlvbi1iYXNlOiAyNzBtcyBlYXNlLWluLW91dDtcclxuXHJcbi8qXHJcbiogTmF2YmFyLlxyXG4qL1xyXG4kbmF2YmFyLXNwYWNlczogJHNwYWNlLWJhc2U7XHJcbiRuYXZiYXItZm9udC1zaXplOiAkZm9udC1zaXplLWxnO1xyXG5cclxuJG5hdmJhci1saW5rLWhlaWdodDogJGNvbnRyb2wtaGVpZ2h0O1xyXG4kbmF2YmFyLWxpbmstc3BhY2VzOiAkc3BhY2UtYmFzZSAwO1xyXG4kbmF2YmFyLWxpbmstZm9udC1mYW1pbHk6ICRmb250LWZhbWlseS1ib2xkO1xyXG4kbmF2YmFyLWxpbmstZm9udC1zaXplOiAkZm9udC1zaXplLW1kO1xyXG5cclxuLypcclxuKiBCdXR0b25zLlxyXG4qL1xyXG4kYnRuLWhlaWdodDogJGNvbnRyb2wtaGVpZ2h0IC0gMTBweDtcclxuJGJ0bi13aWR0aDogMTUwcHg7XHJcbiRidG4tc3BhY2VzOiAkY29udHJvbC1zcGFjZXM7XHJcbiRidG4tZm9udC1mYW1pbHk6ICRmb250LWZhbWlseS1ib2xkO1xyXG4kYnRuLWljb24tc3BhY2U6ICRzcGFjZS1zbWFsbDtcclxuXHJcbi8qXHJcbiogSWNvbnMuXHJcbiovXHJcbiRpY28tc2l6ZS1iYXNlOiAkZm9udC1zaXplLWxnO1xyXG5cclxuLypcclxuKiBTZWFyY2ggSW5wdXQuXHJcbiovXHJcbiRzZWFyY2gtaGVpZ2h0OiAkY29udHJvbC1oZWlnaHQ7XHJcbiRzZWFyY2gtc3BhY2VzOiAkY29udHJvbC1zcGFjZXM7XHJcbiRzZWFyY2gtaWNvbi1zcGFjZXM6ICRzcGFjZS1iYXNlO1xyXG5cclxuLypcclxuKiBDaGVja0JveC5cclxuKi9cclxuJGNoZWNrYm94LXNpemU6ICRmb250LXNpemUtbGc7XHJcblxyXG4vKlxyXG4qIERyb3Bkb3duLlxyXG4qL1xyXG4kZHJvcGRvd24taGVpZ2h0OiAkY29udHJvbC1oZWlnaHQ7XHJcbiRkcm9wZG93bi1idG4tc3BhY2VzOiAkY29udHJvbC1zcGFjZXM7XHJcbiRkcm9wZG93bi1tZW51LWhlaWdodDogMjAwcHg7XHJcbiRkcm9wZG93bi1tZW51LWl0ZW0tc3BhY2VzOiAkc3BhY2UtYmFzZTtcclxuXHJcbi8qXHJcbiogQ2FyZC5cclxuKi9cclxuJGNhcmQtc3BhY2VzOiAkc3BhY2UtYmFzZTtcclxuJGNhcmQtcmFkaXVzOiAkYm9yZGVyLXJhZGl1cy1iYXNlO1xyXG4kY2FyZC1oZWFkLWZvbnQtZmFtaWx5OiAkZm9udC1mYW1pbHktZXh0cmEtYm9sZDtcclxuXHJcbi8qXHJcbiogTm8gRGF0YS5cclxuKi9cclxuJG5vLWRhdGEtZm9udC1mYW1pbHk6ICRmb250LWZhbWlseS1leHRyYS1ib2xkO1xyXG4kbm8tZGF0YS1mb250LXNpemU6ICRmb250LXNpemUtbGc7XHJcbiRuby1kYXRhLXNwYWNlczogJHNwYWNlLWJhc2UtZG91YmxlIDA7XHJcblxyXG4vKlxyXG4qIFRhYnMuXHJcbiovXHJcbiR0YWItc3BhY2VzOiAkc3BhY2UtYmFzZTtcclxuJHRhYi1oZWFkLXdpZHRoOiAxNTBweDtcclxuJHRhYi1oZWFkLWJvcmRlcjogM3B4O1xyXG5cclxuLypcclxuKiBTaWRlYmFyLlxyXG4qL1xyXG4kc2lkZWJhci1zcGFjZXM6ICRzcGFjZS1iYXNlO1xyXG4kc2lkZWJhci13aWR0aDogMzAwcHg7XHJcbiRzaWRlYmFyLWhlYWQtaGVpZ2h0OiA2MHB4O1xyXG4kc2lkZWJhci10aXRsZS1mb250LWZhbWlseTogJGZvbnQtZmFtaWx5LWV4dHJhLWJvbGQ7XHJcbiRzaWRlYmFyLXRpdGxlLWZvbnQtc2l6ZTogJGZvbnQtc2l6ZS1sZztcclxuXHJcbi8qXHJcbiogRm9ybS5cclxuKi9cclxuJGZvcm0tcm93LXNwYWNlczogJHNwYWNlLWJhc2UtaGFsZiAwO1xyXG4iLCJAaW1wb3J0IFwifnNyYy9zdHlsZXMvY29yZS92YXJpYWJsZXMvdmFyaWFibGVzXCI7XHJcblxyXG46aG9zdCB7XHJcbiAgY29sb3I6IHZhcigtLWJvZHktY29sb3IpO1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJvZHktYmcpO1xyXG5cclxuICAvLyBTdHJldGNoIGNvbnRhaW5lciBmdWxsIHNjcmVlbi5cclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG59XHJcbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SiteLayoutComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-site-layout',
                templateUrl: './site-layout.component.html',
                styleUrls: ['./site-layout.component.scss']
            }]
    }], function () { return [{ type: _shared_services_local_storage_service__WEBPACK_IMPORTED_MODULE_2__["LocalStorageService"] }]; }, { theme: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"],
            args: ['attr.theme']
        }] }); })();


/***/ }),

/***/ "./src/app/mockData.ts":
/*!*****************************!*\
  !*** ./src/app/mockData.ts ***!
  \*****************************/
/*! exports provided: mainNavigationList, accountTabs, accountTransactionsTabsData, accountStatementsTabsData */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mainNavigationList", function() { return mainNavigationList; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "accountTabs", function() { return accountTabs; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "accountTransactionsTabsData", function() { return accountTransactionsTabsData; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "accountStatementsTabsData", function() { return accountStatementsTabsData; });
const mainNavigationList = [
    { url: '/account', name: 'Account' },
    { url: '/profile', name: 'Profile' },
];
const accountTabs = [
    {
        ariaLabel: 'To open transactions tab',
        ariaControls: 'transactions-tab',
        id: 'transactions',
        name: 'account transactions',
        active: true,
    },
    {
        ariaLabel: 'To open bank statements tab',
        ariaControls: 'statements-tab',
        id: 'statements',
        name: 'bank statements',
        active: false,
    },
];
const accountTransactionsTabsData = {
    tableData: [
        {
            status: 'Processing',
            description: `Lorem ipsum dolor sit amet, consectetur adipisicing elit.`,
            check: '383931',
            returnData: '01',
            tCode: 'POS',
            amount: '999,999,999.99',
            balance: 'positive',
        },
        {
            status: 'Pending',
            description: ` A ab ad amet at atque consequatur doloremque ducimus enim eos excepturi
       exercitationem impedit maiores maxime molestias possimus quia rerum tempora, voluptatem!`,
            check: '383931',
            returnData: '01',
            tCode: 'POS',
            amount: '999,999,999.99',
            balance: 'negative',
        },
        {
            status: 'Authorized',
            description: `Lorem ipsum dolor sit amet, consectetur adipisicing elit.`,
            check: '383931',
            returnData: '01',
            tCode: 'POS',
            amount: '999,999,999.99',
            balance: 'positive',
        },
        {
            status: 'Pending / Hold',
            description: ` A ab ad amet at atque consequatur doloremque ducimus enim eos excepturi exercitationem impedit maiores maxime molestias possimus quia rerum tempora, voluptatem!`,
            check: '383931',
            returnData: '01',
            tCode: 'POS',
            amount: '999,999,999.99',
            balance: 'negative',
        },
        {
            status: 'Pending',
            description: ` A ab ad amet at atque consequatur doloremque ducimus enim eos excepturi exercitationem impedit maiores maxime molestias possimus quia rerum tempora, voluptatem!`,
            check: '383931',
            returnData: '01',
            tCode: 'POS',
            amount: '999,999,999.99',
            balance: 'negative',
        },
        {
            status: 'Authorized',
            description: `Lorem ipsum dolor sit amet, consectetur adipisicing elit.`,
            check: '383931',
            returnData: '01',
            tCode: 'POS',
            amount: '999,999,999.99',
            balance: 'positive',
        },
        {
            status: 'Pending / Hold',
            description: ` A ab ad amet at atque consequatur doloremque ducimus enim eos excepturi exercitationem impedit maiores maxime molestias possimus quia rerum tempora, voluptatem!`,
            check: '383931',
            returnData: '01',
            tCode: 'POS',
            amount: '999,999,999.99',
            balance: 'negative',
        }, {
            status: 'Pending',
            description: ` A ab ad amet at atque consequatur doloremque ducimus enim eos excepturi exercitationem impedit maiores maxime molestias possimus quia rerum tempora, voluptatem!`,
            check: '383931',
            returnData: '01',
            tCode: 'POS',
            amount: '999,999,999.99',
            balance: 'negative',
        },
        {
            status: 'Authorized',
            description: `Lorem ipsum dolor sit amet, consectetur adipisicing elit.`,
            check: '383931',
            returnData: '01',
            tCode: 'POS',
            amount: '999,999,999.99',
            balance: 'positive',
        },
        {
            status: 'Pending / Hold',
            description: ` A ab ad amet at atque consequatur doloremque ducimus enim eos excepturi exercitationem impedit maiores maxime molestias possimus quia rerum tempora, voluptatem!`,
            check: '383931',
            returnData: '01',
            tCode: 'POS',
            amount: '999,999,999.99',
            balance: 'negative',
        }, {
            status: 'Pending',
            description: ` A ab ad amet at atque consequatur doloremque ducimus enim eos excepturi exercitationem impedit maiores maxime molestias possimus quia rerum tempora, voluptatem!`,
            check: '383931',
            returnData: '01',
            tCode: 'POS',
            amount: '999,999,999.99',
            balance: 'negative',
        },
        {
            status: 'Authorized',
            description: `Lorem ipsum dolor sit amet, consectetur adipisicing elit.`,
            check: '383931',
            returnData: '01',
            tCode: 'POS',
            amount: '999,999,999.99',
            balance: 'positive',
        },
        {
            status: 'Pending / Hold',
            description: ` A ab ad amet at atque consequatur doloremque ducimus enim eos excepturi exercitationem impedit maiores maxime molestias possimus quia rerum tempora, voluptatem!`,
            check: '383931',
            returnData: '01',
            tCode: 'POS',
            amount: '999,999,999.99',
            balance: 'negative',
        }, {
            status: 'Pending',
            description: ` A ab ad amet at atque consequatur doloremque ducimus enim eos excepturi exercitationem impedit maiores maxime molestias possimus quia rerum tempora, voluptatem!`,
            check: '383931',
            returnData: '01',
            tCode: 'POS',
            amount: '999,999,999.99',
            balance: 'negative',
        },
        {
            status: 'Authorized',
            description: `Lorem ipsum dolor sit amet, consectetur adipisicing elit.`,
            check: '383931',
            returnData: '01',
            tCode: 'POS',
            amount: '999,999,999.99',
            balance: 'positive',
        },
        {
            status: 'Pending / Hold',
            description: ` A ab ad amet at atque consequatur doloremque ducimus enim eos excepturi exercitationem impedit maiores maxime molestias possimus quia rerum tempora, voluptatem!`,
            check: '383931',
            returnData: '01',
            tCode: 'POS',
            amount: '999,999,999.99',
            balance: 'negative',
        }, {
            status: 'Pending',
            description: ` A ab ad amet at atque consequatur doloremque ducimus enim eos excepturi exercitationem impedit maiores maxime molestias possimus quia rerum tempora, voluptatem!`,
            check: '383931',
            returnData: '01',
            tCode: 'POS',
            amount: '999,999,999.99',
            balance: 'negative',
        },
        {
            status: 'Authorized',
            description: `Lorem ipsum dolor sit amet, consectetur adipisicing elit.`,
            check: '383931',
            returnData: '01',
            tCode: 'POS',
            amount: '999,999,999.99',
            balance: 'positive',
        },
        {
            status: 'Pending / Hold',
            description: ` A ab ad amet at atque consequatur doloremque ducimus enim eos excepturi exercitationem impedit maiores maxime molestias possimus quia rerum tempora, voluptatem!`,
            check: '383931',
            returnData: '01',
            tCode: 'POS',
            amount: '999,999,999.99',
            balance: 'negative',
        }, {
            status: 'Pending',
            description: ` A ab ad amet at atque consequatur doloremque ducimus enim eos excepturi exercitationem impedit maiores maxime molestias possimus quia rerum tempora, voluptatem!`,
            check: '383931',
            returnData: '01',
            tCode: 'POS',
            amount: '999,999,999.99',
            balance: 'negative',
        },
        {
            status: 'Authorized',
            description: `Lorem ipsum dolor sit amet, consectetur adipisicing elit.`,
            check: '383931',
            returnData: '01',
            tCode: 'POS',
            amount: '999,999,999.99',
            balance: 'positive',
        },
        {
            status: 'Pending / Hold',
            description: ` A ab ad amet at atque consequatur doloremque ducimus enim eos excepturi exercitationem impedit maiores maxime molestias possimus quia rerum tempora, voluptatem!`,
            check: '383931',
            returnData: '01',
            tCode: 'POS',
            amount: '999,999,999.99',
            balance: 'negative',
        }, {
            status: 'Pending',
            description: ` A ab ad amet at atque consequatur doloremque ducimus enim eos excepturi exercitationem impedit maiores maxime molestias possimus quia rerum tempora, voluptatem!`,
            check: '383931',
            returnData: '01',
            tCode: 'POS',
            amount: '999,999,999.99',
            balance: 'negative',
        },
        {
            status: 'Authorized',
            description: `Lorem ipsum dolor sit amet, consectetur adipisicing elit.`,
            check: '383931',
            returnData: '01',
            tCode: 'POS',
            amount: '999,999,999.99',
            balance: 'positive',
        },
        {
            status: 'Pending / Hold',
            description: ` A ab ad amet at atque consequatur doloremque ducimus enim eos excepturi exercitationem impedit maiores maxime molestias possimus quia rerum tempora, voluptatem!`,
            check: '383931',
            returnData: '01',
            tCode: 'POS',
            amount: '999,999,999.99',
            balance: 'negative',
        }, {
            status: 'Pending',
            description: ` A ab ad amet at atque consequatur doloremque ducimus enim eos excepturi exercitationem impedit maiores maxime molestias possimus quia rerum tempora, voluptatem!`,
            check: '383931',
            returnData: '01',
            tCode: 'POS',
            amount: '999,999,999.99',
            balance: 'negative',
        },
        {
            status: 'Authorized',
            description: `Lorem ipsum dolor sit amet, consectetur adipisicing elit.`,
            check: '383931',
            returnData: '01',
            tCode: 'POS',
            amount: '999,999,999.99',
            balance: 'positive',
        },
        {
            status: 'Pending / Hold',
            description: ` A ab ad amet at atque consequatur doloremque ducimus enim eos excepturi exercitationem impedit maiores maxime molestias possimus quia rerum tempora, voluptatem!`,
            check: '383931',
            returnData: '01',
            tCode: 'POS',
            amount: '999,999,999.99',
            balance: 'negative',
        }, {
            status: 'Pending',
            description: ` A ab ad amet at atque consequatur doloremque ducimus enim eos excepturi exercitationem impedit maiores maxime molestias possimus quia rerum tempora, voluptatem!`,
            check: '383931',
            returnData: '01',
            tCode: 'POS',
            amount: '999,999,999.99',
            balance: 'negative',
        },
        {
            status: 'Authorized',
            description: `Lorem ipsum dolor sit amet, consectetur adipisicing elit.`,
            check: '383931',
            returnData: '01',
            tCode: 'POS',
            amount: '999,999,999.99',
            balance: 'positive',
        },
        {
            status: 'Pending / Hold',
            description: ` A ab ad amet at atque consequatur doloremque ducimus enim eos excepturi exercitationem impedit maiores maxime molestias possimus quia rerum tempora, voluptatem!`,
            check: '383931',
            returnData: '01',
            tCode: 'POS',
            amount: '999,999,999.99',
            balance: 'negative',
        }, {
            status: 'Pending',
            description: ` A ab ad amet at atque consequatur doloremque ducimus enim eos excepturi exercitationem impedit maiores maxime molestias possimus quia rerum tempora, voluptatem!`,
            check: '383931',
            returnData: '01',
            tCode: 'POS',
            amount: '999,999,999.99',
            balance: 'negative',
        },
        {
            status: 'Authorized',
            description: `Lorem ipsum dolor sit amet, consectetur adipisicing elit.`,
            check: '383931',
            returnData: '01',
            tCode: 'POS',
            amount: '999,999,999.99',
            balance: 'positive',
        },
        {
            status: 'Pending / Hold',
            description: ` A ab ad amet at atque consequatur doloremque ducimus enim eos excepturi exercitationem impedit maiores maxime molestias possimus quia rerum tempora, voluptatem!`,
            check: '383931',
            returnData: '01',
            tCode: 'POS',
            amount: '999,999,999.99',
            balance: 'negative',
        }, {
            status: 'Pending',
            description: ` A ab ad amet at atque consequatur doloremque ducimus enim eos excepturi exercitationem impedit maiores maxime molestias possimus quia rerum tempora, voluptatem!`,
            check: '383931',
            returnData: '01',
            tCode: 'POS',
            amount: '999,999,999.99',
            balance: 'negative',
        },
        {
            status: 'Authorized',
            description: `Lorem ipsum dolor sit amet, consectetur adipisicing elit.`,
            check: '383931',
            returnData: '01',
            tCode: 'POS',
            amount: '999,999,999.99',
            balance: 'positive',
        },
        {
            status: 'Pending / Hold',
            description: ` A ab ad amet at atque consequatur doloremque ducimus enim eos excepturi exercitationem impedit maiores maxime molestias possimus quia rerum tempora, voluptatem!`,
            check: '383931',
            returnData: '01',
            tCode: 'POS',
            amount: '999,999,999.99',
            balance: 'negative',
        }, {
            status: 'Pending',
            description: ` A ab ad amet at atque consequatur doloremque ducimus enim eos excepturi exercitationem impedit maiores maxime molestias possimus quia rerum tempora, voluptatem!`,
            check: '383931',
            returnData: '01',
            tCode: 'POS',
            amount: '999,999,999.99',
            balance: 'negative',
        },
        {
            status: 'Authorized',
            description: `Lorem ipsum dolor sit amet, consectetur adipisicing elit.`,
            check: '383931',
            returnData: '01',
            tCode: 'POS',
            amount: '999,999,999.99',
            balance: 'positive',
        },
        {
            status: 'Pending / Hold',
            description: ` A ab ad amet at atque consequatur doloremque ducimus enim eos excepturi exercitationem impedit maiores maxime molestias possimus quia rerum tempora, voluptatem!`,
            check: '383931',
            returnData: '01',
            tCode: 'POS',
            amount: '999,999,999.99',
            balance: 'negative',
        }, {
            status: 'Pending',
            description: ` A ab ad amet at atque consequatur doloremque ducimus enim eos excepturi exercitationem impedit maiores maxime molestias possimus quia rerum tempora, voluptatem!`,
            check: '383931',
            returnData: '01',
            tCode: 'POS',
            amount: '999,999,999.99',
            balance: 'negative',
        },
        {
            status: 'Authorized',
            description: `Lorem ipsum dolor sit amet, consectetur adipisicing elit.`,
            check: '383931',
            returnData: '01',
            tCode: 'POS',
            amount: '999,999,999.99',
            balance: 'positive',
        },
        {
            status: 'Pending / Hold',
            description: ` A ab ad amet at atque consequatur doloremque ducimus enim eos excepturi exercitationem impedit maiores maxime molestias possimus quia rerum tempora, voluptatem!`,
            check: '383931',
            returnData: '01',
            tCode: 'POS',
            amount: '999,999,999.99',
            balance: 'negative',
        }, {
            status: 'Pending',
            description: ` A ab ad amet at atque consequatur doloremque ducimus enim eos excepturi exercitationem impedit maiores maxime molestias possimus quia rerum tempora, voluptatem!`,
            check: '383931',
            returnData: '01',
            tCode: 'POS',
            amount: '999,999,999.99',
            balance: 'negative',
        },
        {
            status: 'Authorized',
            description: `Lorem ipsum dolor sit amet, consectetur adipisicing elit.`,
            check: '383931',
            returnData: '01',
            tCode: 'POS',
            amount: '999,999,999.99',
            balance: 'positive',
        },
        {
            status: 'Pending / Hold',
            description: ` A ab ad amet at atque consequatur doloremque ducimus enim eos excepturi exercitationem impedit maiores maxime molestias possimus quia rerum tempora, voluptatem!`,
            check: '383931',
            returnData: '01',
            tCode: 'POS',
            amount: '999,999,999.99',
            balance: 'negative',
        }, {
            status: 'Pending',
            description: ` A ab ad amet at atque consequatur doloremque ducimus enim eos excepturi exercitationem impedit maiores maxime molestias possimus quia rerum tempora, voluptatem!`,
            check: '383931',
            returnData: '01',
            tCode: 'POS',
            amount: '999,999,999.99',
            balance: 'negative',
        },
        {
            status: 'Authorized',
            description: `Lorem ipsum dolor sit amet, consectetur adipisicing elit.`,
            check: '383931',
            returnData: '01',
            tCode: 'POS',
            amount: '999,999,999.99',
            balance: 'positive',
        },
        {
            status: 'Pending / Hold',
            description: ` A ab ad amet at atque consequatur doloremque ducimus enim eos excepturi exercitationem impedit maiores maxime molestias possimus quia rerum tempora, voluptatem!`,
            check: '383931',
            returnData: '01',
            tCode: 'POS',
            amount: '999,999,999.99',
            balance: 'negative',
        }, {
            status: 'Pending',
            description: ` A ab ad amet at atque consequatur doloremque ducimus enim eos excepturi exercitationem impedit maiores maxime molestias possimus quia rerum tempora, voluptatem!`,
            check: '383931',
            returnData: '01',
            tCode: 'POS',
            amount: '999,999,999.99',
            balance: 'negative',
        },
        {
            status: 'Authorized',
            description: `Lorem ipsum dolor sit amet, consectetur adipisicing elit.`,
            check: '383931',
            returnData: '01',
            tCode: 'POS',
            amount: '999,999,999.99',
            balance: 'positive',
        },
        {
            status: 'Pending / Hold',
            description: ` A ab ad amet at atque consequatur doloremque ducimus enim eos excepturi exercitationem impedit maiores maxime molestias possimus quia rerum tempora, voluptatem!`,
            check: '383931',
            returnData: '01',
            tCode: 'POS',
            amount: '999,999,999.99',
            balance: 'negative',
        }, {
            status: 'Pending',
            description: ` A ab ad amet at atque consequatur doloremque ducimus enim eos excepturi exercitationem impedit maiores maxime molestias possimus quia rerum tempora, voluptatem!`,
            check: '383931',
            returnData: '01',
            tCode: 'POS',
            amount: '999,999,999.99',
            balance: 'negative',
        },
        {
            status: 'Authorized',
            description: `Lorem ipsum dolor sit amet, consectetur adipisicing elit.`,
            check: '383931',
            returnData: '01',
            tCode: 'POS',
            amount: '999,999,999.99',
            balance: 'positive',
        },
        {
            status: 'Pending / Hold',
            description: ` A ab ad amet at atque consequatur doloremque ducimus enim eos excepturi exercitationem impedit maiores maxime molestias possimus quia rerum tempora, voluptatem!`,
            check: '383931',
            returnData: '01',
            tCode: 'POS',
            amount: '999,999,999.99',
            balance: 'negative',
        }, {
            status: 'Pending',
            description: ` A ab ad amet at atque consequatur doloremque ducimus enim eos excepturi exercitationem impedit maiores maxime molestias possimus quia rerum tempora, voluptatem!`,
            check: '383931',
            returnData: '01',
            tCode: 'POS',
            amount: '999,999,999.99',
            balance: 'negative',
        },
        {
            status: 'Authorized',
            description: `Lorem ipsum dolor sit amet, consectetur adipisicing elit.`,
            check: '383931',
            returnData: '01',
            tCode: 'POS',
            amount: '999,999,999.99',
            balance: 'positive',
        },
        {
            status: 'Pending / Hold',
            description: ` A ab ad amet at atque consequatur doloremque ducimus enim eos excepturi exercitationem impedit maiores maxime molestias possimus quia rerum tempora, voluptatem!`,
            check: '383931',
            returnData: '01',
            tCode: 'POS',
            amount: '999,999,999.99',
            balance: 'negative',
        }, {
            status: 'Pending',
            description: ` A ab ad amet at atque consequatur doloremque ducimus enim eos excepturi exercitationem impedit maiores maxime molestias possimus quia rerum tempora, voluptatem!`,
            check: '383931',
            returnData: '01',
            tCode: 'POS',
            amount: '999,999,999.99',
            balance: 'negative',
        },
        {
            status: 'Authorized',
            description: `Lorem ipsum dolor sit amet, consectetur adipisicing elit.`,
            check: '383931',
            returnData: '01',
            tCode: 'POS',
            amount: '999,999,999.99',
            balance: 'positive',
        },
        {
            status: 'Pending / Hold',
            description: ` A ab ad amet at atque consequatur doloremque ducimus enim eos excepturi exercitationem impedit maiores maxime molestias possimus quia rerum tempora, voluptatem!`,
            check: '383931',
            returnData: '01',
            tCode: 'POS',
            amount: '999,999,999.99',
            balance: 'negative',
        },
    ],
    tableActions: [
        { title: 'Action 0' },
        { title: 'Action 1' },
        { title: 'Action 2' },
        { title: 'Delete' }
    ],
    tableFilter: [
        { title: 'Status' },
        { title: 'Description' },
        { title: 'Check' },
        { title: 'Return' },
        { title: 'T-Code' },
        { title: 'Amount' },
        { title: 'Balance' },
    ]
};
const accountStatementsTabsData = {
    tableData: [],
    tableActions: [],
    tableFilter: []
};


/***/ }),

/***/ "./src/app/pages/account-page/account-page.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/pages/account-page/account-page.component.ts ***!
  \**************************************************************/
/*! exports provided: AccountPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AccountPageComponent", function() { return AccountPageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _mockData__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../mockData */ "./src/app/mockData.ts");
/* harmony import */ var _shared_components_tabs_tabs_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shared/components/tabs/tabs.component */ "./src/app/shared/components/tabs/tabs.component.ts");
/* harmony import */ var _shared_components_button_button_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../shared/components/button/button.component */ "./src/app/shared/components/button/button.component.ts");
/* harmony import */ var _shared_components_content_content_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../shared/components/content/content.component */ "./src/app/shared/components/content/content.component.ts");
/* harmony import */ var _transaction_cards_transaction_cards_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./transaction-cards/transaction-cards.component */ "./src/app/pages/account-page/transaction-cards/transaction-cards.component.ts");







class AccountPageComponent {
    constructor() {
        this.accountTabs = _mockData__WEBPACK_IMPORTED_MODULE_1__["accountTabs"];
        this.data = _mockData__WEBPACK_IMPORTED_MODULE_1__["accountTransactionsTabsData"];
    }
    /**
     * Choice tab and filter data
     * @param {string} tabName
     */
    selectTab(tabName) {
        if (tabName === 'account transactions') {
            this.data = _mockData__WEBPACK_IMPORTED_MODULE_1__["accountTransactionsTabsData"];
        }
        if (tabName === 'bank statements') {
            this.data = _mockData__WEBPACK_IMPORTED_MODULE_1__["accountStatementsTabsData"];
        }
    }
}
AccountPageComponent.ɵfac = function AccountPageComponent_Factory(t) { return new (t || AccountPageComponent)(); };
AccountPageComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AccountPageComponent, selectors: [["app-account-page"]], decls: 19, vars: 3, consts: [[3, "tabs", "selectedTab"], ["tab-toolbar", ""], [1, "ab-toolbar--tabs"], [1, "ab-full"], ["app-button", "", "theme", "secondary", "aria-label", "To show account balance history", "type", "button", "iconName", "history"], ["app-button", "", "theme", "secondary", "aria-label", "To show scheduled transactions", "type", "button", "iconName", "schedule"], ["tab-body", ""], [3, "data"], ["content", ""], ["no-content", ""]], template: function AccountPageComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "app-tabs", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("selectedTab", function AccountPageComponent_Template_app_tabs_selectedTab_0_listener($event) { return ctx.selectTab($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](1, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "ul", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "li", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "BOA Interest Free Checking:\u00A0\u00A0*\u00A07548");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, " account balance history ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, " scheduled transactions ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](12, 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "app-content", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](14, 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "app-transaction-cards", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](16, 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "No data...");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("tabs", ctx.accountTabs);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("data", ctx.data.tableData);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("data", ctx.data);
    } }, directives: [_shared_components_tabs_tabs_component__WEBPACK_IMPORTED_MODULE_2__["TabsComponent"], _shared_components_button_button_component__WEBPACK_IMPORTED_MODULE_3__["ButtonComponent"], _shared_components_content_content_component__WEBPACK_IMPORTED_MODULE_4__["ContentComponent"], _transaction_cards_transaction_cards_component__WEBPACK_IMPORTED_MODULE_5__["TransactionCardsComponent"]], styles: ["[_nghost-%COMP%] {\n  display: flex;\n  flex: 1;\n}\n.ab-toolbar--tabs[_ngcontent-%COMP%]    > li[_ngcontent-%COMP%] {\n  padding: 4px;\n}\n.ab-toolbar--tabs[_ngcontent-%COMP%]   .ab-nowrap[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n}\n@media (min-width: 640px) {\n  .ab-toolbar--tabs[_ngcontent-%COMP%] {\n    display: flex;\n    align-items: center;\n  }\n  .ab-toolbar--tabs[_ngcontent-%COMP%]   .ab-full[_ngcontent-%COMP%] {\n    flex: 1;\n    display: flex;\n    justify-content: flex-start;\n    align-items: center;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9zdHlsZXMvY29yZS92YXJpYWJsZXMvdmFyaWFibGVzLnNjc3MiLCJzcmMvYXBwL3BhZ2VzL2FjY291bnQtcGFnZS9hY2NvdW50LXBhZ2UuY29tcG9uZW50LnNjc3MiLCJzcmMvc3R5bGVzL2NvcmUvbWl4aW5zL21peGluLXRvb2xiYXItdmFyaWFudC5zY3NzIiwic3JjL3N0eWxlcy9jb3JlL21peGlucy9taXhpbi1mbGV4LXZhcmlhbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Q0FBQTtBQVdBOztDQUFBO0FBTUE7O0NBQUE7QUFPQTs7Q0FBQTtBQU1BOztDQUFBO0FBS0E7O0NBQUE7QUFLQTs7Q0FBQTtBQVFBOztDQUFBO0FBTUE7O0NBQUE7QUFLQTs7Q0FBQTtBQVdBOztDQUFBO0FBU0E7O0NBQUE7QUFLQTs7Q0FBQTtBQU9BOztDQUFBO0FBS0E7O0NBQUE7QUFRQTs7Q0FBQTtBQU9BOztDQUFBO0FBT0E7O0NBQUE7QUFPQTs7Q0FBQTtBQVNBOztDQUFBO0FDbklBO0VBR0UsYUFBQTtFQUNBLE9BQUE7QUF3REY7QUM1REU7RUFDRSxZRjBDVTtBQ3FCZDtBQzVERTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtBRDhESjtBQ2pESTtFRFpKO0lDYU0sYUFBQTtJQUNBLG1CQUFBO0VEb0RKO0VDbERJO0lBQ0UsT0FBQTtJQzFCTixhRDJCNEI7SUMxQjVCLDJCRlN5QjtJRVJ6QixtQkR5Qm1EO0VEc0RuRDtBQUNGIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvYWNjb3VudC1wYWdlL2FjY291bnQtcGFnZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qXHJcbiogRm9udC5cclxuKi9cclxuJGZvbnQtZmFtaWx5LWV4dHJhLWJvbGQ6ICdQcm94aW1hIEV4dHJhIEJvbGQnLCBBcmlhbCwgc2Fucy1zZXJpZjtcclxuJGZvbnQtZmFtaWx5LWJvbGQ6ICdQcm94aW1hIEJvbGQnLCBBcmlhbCwgc2Fucy1zZXJpZjtcclxuJGZvbnQtZmFtaWx5LXJlZ3VsYXI6ICdQcm94aW1hIFJlZycsIEFyaWFsLCBzYW5zLXNlcmlmO1xyXG5cclxuJGZvbnQtc2l6ZS1sZzogMjRweDtcclxuJGZvbnQtc2l6ZS1tZDogMTZweDtcclxuJGZvbnQtc2l6ZS1iYXNlOiAxNHB4O1xyXG5cclxuLypcclxuKiBCb2R5LlxyXG4qL1xyXG4kYm9keS1mb250LXNpemU6ICRmb250LXNpemUtYmFzZTtcclxuJGJvZHktZm9udC1mYW1pbHk6ICRmb250LWZhbWlseS1yZWd1bGFyO1xyXG5cclxuLypcclxuKiBTY3JlZW5zLlxyXG4qL1xyXG4kc2NyZWVuLXN4OiA2NDBweDtcclxuJHNjcmVlbi1tZDogNzgwcHg7XHJcbiRzY3JlZW4tbGc6IDEyMDBweDtcclxuXHJcbi8qXHJcbiogWi1pbmRleC5cclxuKi9cclxuJHotaW5kZXgtZHJvcGRvd246IDI7XHJcbiR6LWluZGV4LXNpZGViYXI6IDM7XHJcblxyXG4vKlxyXG4qIFNjcm9sbGJhci5cclxuKi9cclxuJHNjcm9sbGJhci1zaXplOiA4cHg7XHJcblxyXG4vKlxyXG4qIEJvcmRlciBSYWRpdXMuXHJcbiovXHJcbiRib3JkZXItcmFkaXVzLWJhc2U6IDJweDtcclxuXHJcbi8qXHJcbiogU3BhY2VzLlxyXG4qL1xyXG4kc3BhY2UtYmFzZTogMTZweDtcclxuJHNwYWNlLWJhc2UtZG91YmxlOiAkc3BhY2UtYmFzZSoyO1xyXG4kc3BhY2UtYmFzZS1oYWxmOiAkc3BhY2UtYmFzZS8yO1xyXG4kc3BhY2Utc21hbGw6ICRzcGFjZS1iYXNlLzQ7XHJcblxyXG4vKlxyXG4qIENvbnRyb2xzICh1c2UgZm9yIGlucHV0IHx8IHNlbGVjdG9yIHx8IGJ1dHRvbnMpLlxyXG4qL1xyXG4kY29udHJvbC1oZWlnaHQ6IDQwcHg7XHJcbiRjb250cm9sLXNwYWNlczogJHNwYWNlLXNtYWxsICRzcGFjZS1iYXNlO1xyXG5cclxuLypcclxuKiBBbmltYXRpb24uXHJcbiovXHJcbiR0cmFuc2l0aW9uLWJhc2U6IDI3MG1zIGVhc2UtaW4tb3V0O1xyXG5cclxuLypcclxuKiBOYXZiYXIuXHJcbiovXHJcbiRuYXZiYXItc3BhY2VzOiAkc3BhY2UtYmFzZTtcclxuJG5hdmJhci1mb250LXNpemU6ICRmb250LXNpemUtbGc7XHJcblxyXG4kbmF2YmFyLWxpbmstaGVpZ2h0OiAkY29udHJvbC1oZWlnaHQ7XHJcbiRuYXZiYXItbGluay1zcGFjZXM6ICRzcGFjZS1iYXNlIDA7XHJcbiRuYXZiYXItbGluay1mb250LWZhbWlseTogJGZvbnQtZmFtaWx5LWJvbGQ7XHJcbiRuYXZiYXItbGluay1mb250LXNpemU6ICRmb250LXNpemUtbWQ7XHJcblxyXG4vKlxyXG4qIEJ1dHRvbnMuXHJcbiovXHJcbiRidG4taGVpZ2h0OiAkY29udHJvbC1oZWlnaHQgLSAxMHB4O1xyXG4kYnRuLXdpZHRoOiAxNTBweDtcclxuJGJ0bi1zcGFjZXM6ICRjb250cm9sLXNwYWNlcztcclxuJGJ0bi1mb250LWZhbWlseTogJGZvbnQtZmFtaWx5LWJvbGQ7XHJcbiRidG4taWNvbi1zcGFjZTogJHNwYWNlLXNtYWxsO1xyXG5cclxuLypcclxuKiBJY29ucy5cclxuKi9cclxuJGljby1zaXplLWJhc2U6ICRmb250LXNpemUtbGc7XHJcblxyXG4vKlxyXG4qIFNlYXJjaCBJbnB1dC5cclxuKi9cclxuJHNlYXJjaC1oZWlnaHQ6ICRjb250cm9sLWhlaWdodDtcclxuJHNlYXJjaC1zcGFjZXM6ICRjb250cm9sLXNwYWNlcztcclxuJHNlYXJjaC1pY29uLXNwYWNlczogJHNwYWNlLWJhc2U7XHJcblxyXG4vKlxyXG4qIENoZWNrQm94LlxyXG4qL1xyXG4kY2hlY2tib3gtc2l6ZTogJGZvbnQtc2l6ZS1sZztcclxuXHJcbi8qXHJcbiogRHJvcGRvd24uXHJcbiovXHJcbiRkcm9wZG93bi1oZWlnaHQ6ICRjb250cm9sLWhlaWdodDtcclxuJGRyb3Bkb3duLWJ0bi1zcGFjZXM6ICRjb250cm9sLXNwYWNlcztcclxuJGRyb3Bkb3duLW1lbnUtaGVpZ2h0OiAyMDBweDtcclxuJGRyb3Bkb3duLW1lbnUtaXRlbS1zcGFjZXM6ICRzcGFjZS1iYXNlO1xyXG5cclxuLypcclxuKiBDYXJkLlxyXG4qL1xyXG4kY2FyZC1zcGFjZXM6ICRzcGFjZS1iYXNlO1xyXG4kY2FyZC1yYWRpdXM6ICRib3JkZXItcmFkaXVzLWJhc2U7XHJcbiRjYXJkLWhlYWQtZm9udC1mYW1pbHk6ICRmb250LWZhbWlseS1leHRyYS1ib2xkO1xyXG5cclxuLypcclxuKiBObyBEYXRhLlxyXG4qL1xyXG4kbm8tZGF0YS1mb250LWZhbWlseTogJGZvbnQtZmFtaWx5LWV4dHJhLWJvbGQ7XHJcbiRuby1kYXRhLWZvbnQtc2l6ZTogJGZvbnQtc2l6ZS1sZztcclxuJG5vLWRhdGEtc3BhY2VzOiAkc3BhY2UtYmFzZS1kb3VibGUgMDtcclxuXHJcbi8qXHJcbiogVGFicy5cclxuKi9cclxuJHRhYi1zcGFjZXM6ICRzcGFjZS1iYXNlO1xyXG4kdGFiLWhlYWQtd2lkdGg6IDE1MHB4O1xyXG4kdGFiLWhlYWQtYm9yZGVyOiAzcHg7XHJcblxyXG4vKlxyXG4qIFNpZGViYXIuXHJcbiovXHJcbiRzaWRlYmFyLXNwYWNlczogJHNwYWNlLWJhc2U7XHJcbiRzaWRlYmFyLXdpZHRoOiAzMDBweDtcclxuJHNpZGViYXItaGVhZC1oZWlnaHQ6IDYwcHg7XHJcbiRzaWRlYmFyLXRpdGxlLWZvbnQtZmFtaWx5OiAkZm9udC1mYW1pbHktZXh0cmEtYm9sZDtcclxuJHNpZGViYXItdGl0bGUtZm9udC1zaXplOiAkZm9udC1zaXplLWxnO1xyXG5cclxuLypcclxuKiBGb3JtLlxyXG4qL1xyXG4kZm9ybS1yb3ctc3BhY2VzOiAkc3BhY2UtYmFzZS1oYWxmIDA7XHJcbiIsIkBpbXBvcnQgXCJ+c3JjL3N0eWxlcy9jb3JlL3ZhcmlhYmxlcy92YXJpYWJsZXNcIjtcclxuQGltcG9ydCBcIn5zcmMvc3R5bGVzL2NvcmUvbWl4aW5zL21peGluLXRvb2xiYXItdmFyaWFudFwiO1xyXG5cclxuOmhvc3Qge1xyXG5cclxuICAvLyBTdHJldGNoIGNvbnRhaW5lciBmdWxsIHNjcmVlbi5cclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXg6IDE7XHJcbn1cclxuXHJcbi5hYi10b29sYmFyLS10YWJzIHtcclxuICBAaW5jbHVkZSB0b29sYmFyLXZhcmlhbnQoZmxleC1zdGFydCk7XHJcbn1cclxuIiwiQGltcG9ydCBcIm1peGluLWZsZXgtdmFyaWFudFwiO1xyXG5cclxuQG1peGluIHRvb2xiYXItdmFyaWFudCgkZnVsbC1jb2wtYWxpZ24sICRmbGV4LWFsbDogJ2Rlc2t0b3AnKSB7XHJcbiAgPiBsaSB7XHJcbiAgICBwYWRkaW5nOiAkc3BhY2Utc21hbGw7XHJcbiAgfVxyXG5cclxuICAuYWItbm93cmFwIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIH1cclxuXHJcbiAgQGlmICRmbGV4LWFsbCA9PSAnYWxsJyB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuXHJcbiAgICAuYWItZnVsbCB7XHJcbiAgICAgIGZsZXg6IDE7XHJcbiAgICAgIEBpbmNsdWRlIGZsZXgtdmFyaWFudChmbGV4LCAkZnVsbC1jb2wtYWxpZ24sIGNlbnRlcik7XHJcbiAgICB9XHJcbiAgfSBAZWxzZSB7XHJcbiAgICAvLyBGb3IgRGVza3RvcCAmIFRhYmxldC5cclxuICAgIEBtZWRpYSAobWluLXdpZHRoOiAkc2NyZWVuLXN4KSB7XHJcbiAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcblxyXG4gICAgICAuYWItZnVsbCB7XHJcbiAgICAgICAgZmxleDogMTtcclxuICAgICAgICBAaW5jbHVkZSBmbGV4LXZhcmlhbnQoZmxleCwgJGZ1bGwtY29sLWFsaWduLCBjZW50ZXIpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbiIsIkBtaXhpbiBmbGV4LXZhcmlhbnQoJGRpc3BsYXksICRqdXN0aWZ5LWNvbnRlbnQsICRhbGlnbi1pdGVtcykge1xyXG4gIGRpc3BsYXk6ICRkaXNwbGF5O1xyXG4gIGp1c3RpZnktY29udGVudDogJGp1c3RpZnktY29udGVudDtcclxuICBhbGlnbi1pdGVtczogJGFsaWduLWl0ZW1zO1xyXG59XHJcbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AccountPageComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: "app-account-page",
                templateUrl: "./account-page.component.html",
                styleUrls: ["./account-page.component.scss"]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/pages/account-page/transaction-cards/transaction-cards.component.ts":
/*!*************************************************************************************!*\
  !*** ./src/app/pages/account-page/transaction-cards/transaction-cards.component.ts ***!
  \*************************************************************************************/
/*! exports provided: TransactionCardsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TransactionCardsComponent", function() { return TransactionCardsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/__ivy_ngcc__/fesm2015/store.js");
/* harmony import */ var _store_filter_filter_selectors__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../store/filter/filter.selectors */ "./src/app/store/filter/filter.selectors.ts");
/* harmony import */ var _store_filter_filter_actions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../store/filter/filter.actions */ "./src/app/store/filter/filter.actions.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _shared_components_button_button_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../shared/components/button/button.component */ "./src/app/shared/components/button/button.component.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _shared_components_card_card_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../shared/components/card/card.component */ "./src/app/shared/components/card/card.component.ts");
/* harmony import */ var _shared_components_sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../shared/components/sidebar/sidebar.component */ "./src/app/shared/components/sidebar/sidebar.component.ts");
/* harmony import */ var _shared_components_search_search_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../shared/components/search/search.component */ "./src/app/shared/components/search/search.component.ts");
/* harmony import */ var _shared_components_dropdown_dropdown_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../shared/components/dropdown/dropdown.component */ "./src/app/shared/components/dropdown/dropdown.component.ts");













function TransactionCardsComponent_app_card_12_div_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "label", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Check:");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const data_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](data_r2.check);
} }
function TransactionCardsComponent_app_card_12_div_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "label", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Return:");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const data_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](data_r2.returnData);
} }
function TransactionCardsComponent_app_card_12_div_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "label", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "T-Code:");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const data_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](data_r2.tCode);
} }
function TransactionCardsComponent_app_card_12_div_13_ng_container_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const data_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("-$", data_r2.amount, "");
} }
function TransactionCardsComponent_app_card_12_div_13_ng_template_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](0);
} if (rf & 2) {
    const data_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("$", data_r2.amount, "");
} }
function TransactionCardsComponent_app_card_12_div_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "label", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Balance:");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, TransactionCardsComponent_app_card_12_div_13_ng_container_4_Template, 3, 1, "ng-container", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, TransactionCardsComponent_app_card_12_div_13_ng_template_5_Template, 1, 1, "ng-template", null, 20, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](6);
    const data_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", data_r2.status !== "Pending" && data_r2.status !== "Pending / Hold")("ngIfElse", _r11);
} }
function TransactionCardsComponent_app_card_12_Template(rf, ctx) { if (rf & 1) {
    const _r17 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "app-card", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](1, 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "ul", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "li", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "input", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function TransactionCardsComponent_app_card_12_Template_input_ngModelChange_5_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r17); const data_r2 = ctx.$implicit; return data_r2.checked = $event; })("ngModelChange", function TransactionCardsComponent_app_card_12_Template_input_ngModelChange_5_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r17); const ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r18.onCheck(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](8, 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, TransactionCardsComponent_app_card_12_div_10_Template, 5, 1, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, TransactionCardsComponent_app_card_12_div_11_Template, 5, 1, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, TransactionCardsComponent_app_card_12_div_12_Template, 5, 1, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, TransactionCardsComponent_app_card_12_div_13_Template, 7, 2, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const data_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", data_r2.checked);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Status:\u00A0", data_r2.status, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", data_r2.check);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", data_r2.returnData);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", data_r2.tCode);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", data_r2.amount);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](data_r2.description);
} }
function TransactionCardsComponent_app_sidebar_13_Template(rf, ctx) { if (rf & 1) {
    const _r20 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "app-sidebar", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](1, 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "button", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TransactionCardsComponent_app_sidebar_13_Template_button_click_2_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r20); const ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r19.closeFilter(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](3, 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "form", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "app-search");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "app-dropdown", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "app-dropdown", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("list", ctx_r1.data.tableActions);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("list", ctx_r1.data.tableFilter);
} }
class TransactionCardsComponent {
    constructor(store$) {
        this.store$ = store$;
        this.checkedAll = false;
        this.countSelected = 0;
    }
    ngOnInit() {
        this.open$ = this.store$.pipe(Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["select"])(_store_filter_filter_selectors__WEBPACK_IMPORTED_MODULE_2__["selectFilterOpen"]));
    }
    /**
     * Processing of a click on main checkbox.
     * @param {boolean} value - state main checkbox
     */
    onCheckAll(value) {
        // ForEach all the elements and assign value to report.checked.
        this.data.tableData.forEach((item) => item.checked = value);
        this.calculateCountCheck();
    }
    /**
     * Processing of a click on checkbox in row.
     */
    onCheck() {
        this.calculateCountCheck();
    }
    /**
     * Returns checked rows.
     * @returns {any[]}
     */
    getSelectedRows() {
        return this.data.tableData.filter((item) => item.checked);
    }
    /**
     * Processing of a click on checkbox.
     */
    calculateCountCheck() {
        // remember count of checked rows.
        this.countSelected = this.getSelectedRows().length;
        // find out the state of the main checkbox by comparing the count of selected reports with the count of all reports.
        this.checkedAll = this.countSelected != 0 && this.countSelected === this.data.tableData.length;
    }
    toggleFilter() {
        this.store$.dispatch(new _store_filter_filter_actions__WEBPACK_IMPORTED_MODULE_3__["FilterToggleAction"]());
    }
    closeFilter() {
        this.store$.dispatch(new _store_filter_filter_actions__WEBPACK_IMPORTED_MODULE_3__["FilterCloseAction"]());
    }
}
TransactionCardsComponent.ɵfac = function TransactionCardsComponent_Factory(t) { return new (t || TransactionCardsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["Store"])); };
TransactionCardsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: TransactionCardsComponent, selectors: [["app-transaction-cards"]], inputs: { data: "data" }, decls: 15, vars: 10, consts: [[1, "ab-toolbar--main"], [1, "ab-nowrap"], [1, "ab-checkbox"], ["type", "checkbox", "aria-label", "Select All", 3, "ngModel", "ngModelChange"], [1, "ab-full"], ["app-button", "", "theme", "buttonIcon", "aria-label", "To toggle a filter block", "title", "To toggle a filter block", "type", "button", "iconName", "filter", 3, "click"], [1, "ab-grid"], ["class", "ab-grid__item", 4, "ngFor", "ngForOf"], ["sidebarTitle", "Filter", 4, "ngIf"], [1, "ab-grid__item"], ["card-head", ""], [1, "ab-toolbar"], ["type", "checkbox", "aria-label", "Select table row", 3, "ngModel", "ngModelChange"], ["card-body", ""], [1, "ab-list"], ["class", "ab-list__row", 4, "ngIf"], [1, "ab-list__info"], [1, "ab-list__row"], [1, "ab-list__label"], [4, "ngIf", "ngIfElse"], ["positiveBalance", ""], [1, "ab-color--primary"], ["sidebarTitle", "Filter"], ["sidebar-head", ""], ["app-button", "", "theme", "buttonIcon", "aria-label", "To toggle a filter block", "title", "To close a filter block", "type", "button", "iconName", "close", 3, "click"], ["sidebar-body", ""], [1, "ab-form"], [1, "ab-form__row"], ["dropdownTitle", "Actions", 3, "list"], ["dropdownTitle", "Filter", 3, "list"]], template: function TransactionCardsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ul", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "li", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "input", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function TransactionCardsComponent_Template_input_ngModelChange_3_listener($event) { return ctx.checkedAll = $event; })("ngModelChange", function TransactionCardsComponent_Template_input_ngModelChange_3_listener($event) { return ctx.onCheckAll($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Selected Items:\u00A0");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "li", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TransactionCardsComponent_Template_button_click_9_listener() { return ctx.toggleFilter(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](10, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, TransactionCardsComponent_app_card_12_Template, 17, 7, "app-card", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, TransactionCardsComponent_app_sidebar_13_Template, 11, 2, "app-sidebar", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](14, "async");
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.checkedAll);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.countSelected);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("isActiveIcon", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](10, 6, ctx.open$));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.data == null ? null : ctx.data.tableData);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](14, 8, ctx.open$));
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["CheckboxControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgModel"], _shared_components_button_button_component__WEBPACK_IMPORTED_MODULE_5__["ButtonComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"], _shared_components_card_card_component__WEBPACK_IMPORTED_MODULE_7__["CardComponent"], _shared_components_sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_8__["SidebarComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgForm"], _shared_components_search_search_component__WEBPACK_IMPORTED_MODULE_9__["SearchComponent"], _shared_components_dropdown_dropdown_component__WEBPACK_IMPORTED_MODULE_10__["DropdownComponent"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_6__["AsyncPipe"]], styles: [".ab-checkbox[_ngcontent-%COMP%] {\n  position: relative;\n  cursor: pointer;\n}\n.ab-checkbox[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  position: relative;\n  border: none;\n  cursor: pointer;\n  -webkit-appearance: none;\n     -moz-appearance: none;\n          appearance: none;\n}\n.ab-checkbox[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:after {\n  content: \"\";\n  display: block;\n  height: 24px;\n  width: 24px;\n  border: 2px solid var(--checkbox-border);\n  background-color: var(--checkbox-bg);\n  border-radius: 2px;\n}\n.ab-checkbox[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:checked:after {\n  border-color: var(--checkbox-border-checked);\n}\n.ab-checkbox[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:checked:before {\n  content: \"\";\n  transform: rotate(45deg);\n  position: absolute;\n  left: 8px;\n  top: 3px;\n  display: table;\n  width: 8px;\n  height: 14px;\n  border: 2px solid var(--checkbox-icon-checked);\n  border-top: 0;\n  border-left: 0;\n}\n.ab-checkbox[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:focus {\n  outline: none;\n  box-shadow: 0 0 10px var(--focus-box);\n}\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n.ab-list__row[_ngcontent-%COMP%] {\n  display: flex;\n  padding: 16px;\n}\n.ab-list__row[_ngcontent-%COMP%]:nth-of-type(odd) {\n  background-color: var(--bg-zebra);\n}\n.ab-list__label[_ngcontent-%COMP%] {\n  padding-right: 8px;\n  font-weight: \"Proxima Bold\", Arial, sans-serif;\n}\n.ab-list__info[_ngcontent-%COMP%] {\n  padding: 16px;\n}\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n.ab-form__row[_ngcontent-%COMP%] {\n  padding: 8px 0;\n}\n.isActiveIcon[_ngcontent-%COMP%]     svg {\n  color: var(--color-primary);\n}\n[_nghost-%COMP%] {\n  flex: 1;\n  display: flex;\n  flex-direction: column;\n}\n.ab-color--primary[_ngcontent-%COMP%] {\n  color: var(--color-primary-dark);\n}\n\n.ab-grid[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: center;\n  flex: 1;\n  overflow-x: auto;\n  margin: -8px 0;\n}\n.ab-grid__item[_ngcontent-%COMP%] {\n  width: 100%;\n  padding: 8px;\n}\n@media (min-width: 780px) {\n  .ab-grid__item[_ngcontent-%COMP%] {\n    width: calc(100% * 1 / 3);\n    max-width: unset;\n  }\n}\n@media (min-width: 1200px) {\n  .ab-grid__item[_ngcontent-%COMP%] {\n    width: calc(100% * 1 / 4);\n    max-width: unset;\n  }\n}\n\n[class*=ab-toolbar][_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n}\n[class*=ab-toolbar][_ngcontent-%COMP%]    > li[_ngcontent-%COMP%] {\n  padding: 4px;\n}\n[class*=ab-toolbar][_ngcontent-%COMP%]   .ab-nowrap[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n}\n[class*=ab-toolbar][_ngcontent-%COMP%]   .ab-full[_ngcontent-%COMP%] {\n  flex: 1;\n  display: flex;\n  justify-content: flex-end;\n  align-items: center;\n}\n[class*=ab-toolbar][_ngcontent-%COMP%]   .ab-checkbox[_ngcontent-%COMP%] {\n  margin-right: 8px;\n}\n.ab-toolbar--main[_ngcontent-%COMP%] {\n  padding: 16px;\n  border-top: 1px solid var(--color-gray);\n  background-color: var(--body-bg);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9zdHlsZXMvY29yZS92YXJpYWJsZXMvdmFyaWFibGVzLnNjc3MiLCJzcmMvc3R5bGVzL2NvbXBvbmVudHMvY2hlY2tib3guc2NzcyIsInNyYy9hcHAvcGFnZXMvYWNjb3VudC1wYWdlL3RyYW5zYWN0aW9uLWNhcmRzL3RyYW5zYWN0aW9uLWNhcmRzLmNvbXBvbmVudC5zY3NzIiwic3JjL3N0eWxlcy9jb3JlL21peGlucy9taXhpbi1mb2N1cy12YXJpYW50LnNjc3MiLCJzcmMvc3R5bGVzL2NvbXBvbmVudHMvbGlzdC5zY3NzIiwic3JjL3N0eWxlcy9jb21wb25lbnRzL2Zvcm0uc2NzcyIsInNyYy9zdHlsZXMvc3RhdGUvYWN0aXZlLWljb24uc2NzcyIsInNyYy9zdHlsZXMvY29yZS9taXhpbnMvbWl4aW4tdG9vbGJhci12YXJpYW50LnNjc3MiLCJzcmMvc3R5bGVzL2NvcmUvbWl4aW5zL21peGluLWZsZXgtdmFyaWFudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOztDQUFBO0FBV0E7O0NBQUE7QUFNQTs7Q0FBQTtBQU9BOztDQUFBO0FBTUE7O0NBQUE7QUFLQTs7Q0FBQTtBQUtBOztDQUFBO0FBUUE7O0NBQUE7QUFNQTs7Q0FBQTtBQUtBOztDQUFBO0FBV0E7O0NBQUE7QUFTQTs7Q0FBQTtBQUtBOztDQUFBO0FBT0E7O0NBQUE7QUFLQTs7Q0FBQTtBQVFBOztDQUFBO0FBT0E7O0NBQUE7QUFPQTs7Q0FBQTtBQU9BOztDQUFBO0FBU0E7O0NBQUE7QUNuSUE7Ozs7O0NBQUE7QUFPQTtFQUNFLGtCQUFBO0VBQ0EsZUFBQTtBQ3lERjtBRHZERTtFQUNFLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7RUFDQSx3QkFBQTtLQUFBLHFCQUFBO1VBQUEsZ0JBQUE7QUN5REo7QUR2REk7RUFDRSxXQUFBO0VBQ0EsY0FBQTtFQUNBLFlEaEJTO0VDaUJULFdEakJTO0VDa0JULHdDQUFBO0VBQ0Esb0NBQUE7RUFDQSxrQkRXZTtBRThDckI7QURyRE07RUFDRSw0Q0FBQTtBQ3VEUjtBRHJETTtFQUNFLFdBQUE7RUFDQSx3QkFBQTtFQUNBLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLFFBQUE7RUFDQSxjQUFBO0VBQ0EsVUFBQTtFQUNBLFlBQUE7RUFDQSw4Q0FBQTtFQUNBLGFBQUE7RUFDQSxjQUFBO0FDdURSO0FDbkdFO0VBQ0UsYUFBQTtFQUNBLHFDQUFBO0FEcUdKO0FGeEdBOztDQUFBO0FBV0E7O0NBQUE7QUFNQTs7Q0FBQTtBQU9BOztDQUFBO0FBTUE7O0NBQUE7QUFLQTs7Q0FBQTtBQUtBOztDQUFBO0FBUUE7O0NBQUE7QUFNQTs7Q0FBQTtBQUtBOztDQUFBO0FBV0E7O0NBQUE7QUFTQTs7Q0FBQTtBQUtBOztDQUFBO0FBT0E7O0NBQUE7QUFLQTs7Q0FBQTtBQVFBOztDQUFBO0FBT0E7O0NBQUE7QUFPQTs7Q0FBQTtBQU9BOztDQUFBO0FBU0E7O0NBQUE7QUluSUU7RUFDRSxhQUFBO0VBQ0EsYUpzQ1M7QUU4SGI7QUVsS0k7RUFDRSxpQ0FBQTtBRm9LTjtBRWhLRTtFQUNFLGtCSmdDYztFSS9CZCw4Q0pWZTtBRTRLbkI7QUUvSkU7RUFDRSxhSnlCUztBRXdJYjtBRm5MQTs7Q0FBQTtBQVdBOztDQUFBO0FBTUE7O0NBQUE7QUFPQTs7Q0FBQTtBQU1BOztDQUFBO0FBS0E7O0NBQUE7QUFLQTs7Q0FBQTtBQVFBOztDQUFBO0FBTUE7O0NBQUE7QUFLQTs7Q0FBQTtBQVdBOztDQUFBO0FBU0E7O0NBQUE7QUFLQTs7Q0FBQTtBQU9BOztDQUFBO0FBS0E7O0NBQUE7QUFRQTs7Q0FBQTtBQU9BOztDQUFBO0FBT0E7O0NBQUE7QUFPQTs7Q0FBQTtBQVNBOztDQUFBO0FLbklFO0VBQ0UsY0xxSWM7QUUwR2xCO0FJbFBFO0VBQ0UsMkJBQUE7QUpxUEo7QUFqUEE7RUFHRSxPQUFBO0VBQ0EsYUFBQTtFQUNBLHNCQUFBO0FBa1BGO0FBL09BO0VBQ0UsZ0NBQUE7QUFrUEY7QUEvT0E7O0NBQUE7QUFHQTtFQUNFLGFBQUE7RUFDQSxlQUFBO0VBQ0EsdUJBQUE7RUFDQSxPQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQUFBO0FBa1BGO0FBaFBFO0VBQ0UsV0FBQTtFQUNBLFlGY2M7QUVvT2xCO0FBL09JO0VBTEY7SUFNSSx5QkFBQTtJQUNBLGdCQUFBO0VBa1BKO0FBQ0Y7QUEvT0k7RUFYRjtJQVlJLHlCQUFBO0lBQ0EsZ0JBQUE7RUFrUEo7QUFDRjtBQTdPQTs7Q0FBQTtBQUdBO0VLdENJLGFBQUE7RUFDQSxtQkFBQTtBTHVSSjtBS2xTRTtFQUNFLFlQMENVO0FFMFBkO0FLalNFO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0FMbVNKO0FLNVJJO0VBQ0UsT0FBQTtFQ2hCSixhRGlCMEI7RUNoQjFCLHlCTmtEeUI7RU1qRHpCLG1CRGVpRDtBTGdTbkQ7QUE1UEU7RUFDRSxpQkZWYztBRXdRbEI7QUExUEE7RUFDRSxhRmpCVztFRWtCWCx1Q0FBQTtFQUNBLGdDQUFBO0FBNlBGIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvYWNjb3VudC1wYWdlL3RyYW5zYWN0aW9uLWNhcmRzL3RyYW5zYWN0aW9uLWNhcmRzLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLypcclxuKiBGb250LlxyXG4qL1xyXG4kZm9udC1mYW1pbHktZXh0cmEtYm9sZDogJ1Byb3hpbWEgRXh0cmEgQm9sZCcsIEFyaWFsLCBzYW5zLXNlcmlmO1xyXG4kZm9udC1mYW1pbHktYm9sZDogJ1Byb3hpbWEgQm9sZCcsIEFyaWFsLCBzYW5zLXNlcmlmO1xyXG4kZm9udC1mYW1pbHktcmVndWxhcjogJ1Byb3hpbWEgUmVnJywgQXJpYWwsIHNhbnMtc2VyaWY7XHJcblxyXG4kZm9udC1zaXplLWxnOiAyNHB4O1xyXG4kZm9udC1zaXplLW1kOiAxNnB4O1xyXG4kZm9udC1zaXplLWJhc2U6IDE0cHg7XHJcblxyXG4vKlxyXG4qIEJvZHkuXHJcbiovXHJcbiRib2R5LWZvbnQtc2l6ZTogJGZvbnQtc2l6ZS1iYXNlO1xyXG4kYm9keS1mb250LWZhbWlseTogJGZvbnQtZmFtaWx5LXJlZ3VsYXI7XHJcblxyXG4vKlxyXG4qIFNjcmVlbnMuXHJcbiovXHJcbiRzY3JlZW4tc3g6IDY0MHB4O1xyXG4kc2NyZWVuLW1kOiA3ODBweDtcclxuJHNjcmVlbi1sZzogMTIwMHB4O1xyXG5cclxuLypcclxuKiBaLWluZGV4LlxyXG4qL1xyXG4kei1pbmRleC1kcm9wZG93bjogMjtcclxuJHotaW5kZXgtc2lkZWJhcjogMztcclxuXHJcbi8qXHJcbiogU2Nyb2xsYmFyLlxyXG4qL1xyXG4kc2Nyb2xsYmFyLXNpemU6IDhweDtcclxuXHJcbi8qXHJcbiogQm9yZGVyIFJhZGl1cy5cclxuKi9cclxuJGJvcmRlci1yYWRpdXMtYmFzZTogMnB4O1xyXG5cclxuLypcclxuKiBTcGFjZXMuXHJcbiovXHJcbiRzcGFjZS1iYXNlOiAxNnB4O1xyXG4kc3BhY2UtYmFzZS1kb3VibGU6ICRzcGFjZS1iYXNlKjI7XHJcbiRzcGFjZS1iYXNlLWhhbGY6ICRzcGFjZS1iYXNlLzI7XHJcbiRzcGFjZS1zbWFsbDogJHNwYWNlLWJhc2UvNDtcclxuXHJcbi8qXHJcbiogQ29udHJvbHMgKHVzZSBmb3IgaW5wdXQgfHwgc2VsZWN0b3IgfHwgYnV0dG9ucykuXHJcbiovXHJcbiRjb250cm9sLWhlaWdodDogNDBweDtcclxuJGNvbnRyb2wtc3BhY2VzOiAkc3BhY2Utc21hbGwgJHNwYWNlLWJhc2U7XHJcblxyXG4vKlxyXG4qIEFuaW1hdGlvbi5cclxuKi9cclxuJHRyYW5zaXRpb24tYmFzZTogMjcwbXMgZWFzZS1pbi1vdXQ7XHJcblxyXG4vKlxyXG4qIE5hdmJhci5cclxuKi9cclxuJG5hdmJhci1zcGFjZXM6ICRzcGFjZS1iYXNlO1xyXG4kbmF2YmFyLWZvbnQtc2l6ZTogJGZvbnQtc2l6ZS1sZztcclxuXHJcbiRuYXZiYXItbGluay1oZWlnaHQ6ICRjb250cm9sLWhlaWdodDtcclxuJG5hdmJhci1saW5rLXNwYWNlczogJHNwYWNlLWJhc2UgMDtcclxuJG5hdmJhci1saW5rLWZvbnQtZmFtaWx5OiAkZm9udC1mYW1pbHktYm9sZDtcclxuJG5hdmJhci1saW5rLWZvbnQtc2l6ZTogJGZvbnQtc2l6ZS1tZDtcclxuXHJcbi8qXHJcbiogQnV0dG9ucy5cclxuKi9cclxuJGJ0bi1oZWlnaHQ6ICRjb250cm9sLWhlaWdodCAtIDEwcHg7XHJcbiRidG4td2lkdGg6IDE1MHB4O1xyXG4kYnRuLXNwYWNlczogJGNvbnRyb2wtc3BhY2VzO1xyXG4kYnRuLWZvbnQtZmFtaWx5OiAkZm9udC1mYW1pbHktYm9sZDtcclxuJGJ0bi1pY29uLXNwYWNlOiAkc3BhY2Utc21hbGw7XHJcblxyXG4vKlxyXG4qIEljb25zLlxyXG4qL1xyXG4kaWNvLXNpemUtYmFzZTogJGZvbnQtc2l6ZS1sZztcclxuXHJcbi8qXHJcbiogU2VhcmNoIElucHV0LlxyXG4qL1xyXG4kc2VhcmNoLWhlaWdodDogJGNvbnRyb2wtaGVpZ2h0O1xyXG4kc2VhcmNoLXNwYWNlczogJGNvbnRyb2wtc3BhY2VzO1xyXG4kc2VhcmNoLWljb24tc3BhY2VzOiAkc3BhY2UtYmFzZTtcclxuXHJcbi8qXHJcbiogQ2hlY2tCb3guXHJcbiovXHJcbiRjaGVja2JveC1zaXplOiAkZm9udC1zaXplLWxnO1xyXG5cclxuLypcclxuKiBEcm9wZG93bi5cclxuKi9cclxuJGRyb3Bkb3duLWhlaWdodDogJGNvbnRyb2wtaGVpZ2h0O1xyXG4kZHJvcGRvd24tYnRuLXNwYWNlczogJGNvbnRyb2wtc3BhY2VzO1xyXG4kZHJvcGRvd24tbWVudS1oZWlnaHQ6IDIwMHB4O1xyXG4kZHJvcGRvd24tbWVudS1pdGVtLXNwYWNlczogJHNwYWNlLWJhc2U7XHJcblxyXG4vKlxyXG4qIENhcmQuXHJcbiovXHJcbiRjYXJkLXNwYWNlczogJHNwYWNlLWJhc2U7XHJcbiRjYXJkLXJhZGl1czogJGJvcmRlci1yYWRpdXMtYmFzZTtcclxuJGNhcmQtaGVhZC1mb250LWZhbWlseTogJGZvbnQtZmFtaWx5LWV4dHJhLWJvbGQ7XHJcblxyXG4vKlxyXG4qIE5vIERhdGEuXHJcbiovXHJcbiRuby1kYXRhLWZvbnQtZmFtaWx5OiAkZm9udC1mYW1pbHktZXh0cmEtYm9sZDtcclxuJG5vLWRhdGEtZm9udC1zaXplOiAkZm9udC1zaXplLWxnO1xyXG4kbm8tZGF0YS1zcGFjZXM6ICRzcGFjZS1iYXNlLWRvdWJsZSAwO1xyXG5cclxuLypcclxuKiBUYWJzLlxyXG4qL1xyXG4kdGFiLXNwYWNlczogJHNwYWNlLWJhc2U7XHJcbiR0YWItaGVhZC13aWR0aDogMTUwcHg7XHJcbiR0YWItaGVhZC1ib3JkZXI6IDNweDtcclxuXHJcbi8qXHJcbiogU2lkZWJhci5cclxuKi9cclxuJHNpZGViYXItc3BhY2VzOiAkc3BhY2UtYmFzZTtcclxuJHNpZGViYXItd2lkdGg6IDMwMHB4O1xyXG4kc2lkZWJhci1oZWFkLWhlaWdodDogNjBweDtcclxuJHNpZGViYXItdGl0bGUtZm9udC1mYW1pbHk6ICRmb250LWZhbWlseS1leHRyYS1ib2xkO1xyXG4kc2lkZWJhci10aXRsZS1mb250LXNpemU6ICRmb250LXNpemUtbGc7XHJcblxyXG4vKlxyXG4qIEZvcm0uXHJcbiovXHJcbiRmb3JtLXJvdy1zcGFjZXM6ICRzcGFjZS1iYXNlLWhhbGYgMDtcclxuIiwiQGltcG9ydCBcIn5zcmMvc3R5bGVzL2NvcmUvdmFyaWFibGVzL3ZhcmlhYmxlc1wiO1xyXG5AaW1wb3J0IFwifnNyYy9zdHlsZXMvY29yZS9taXhpbnMvbWl4aW4tZm9jdXMtdmFyaWFudFwiO1xyXG5cclxuLyoqXHJcbiogRXhhbXBsZSBvZiB1c2FnZTpcclxuKiA8ZGl2IGNsYXNzPVwiYWItY2hlY2tib3hcIj5cclxuKiAgIDxpbnB1dCB0eXBlPVwiY2hlY2tib3hcIiBhcmlhLWxhYmVsPVwiLi4uXCIvPlxyXG4qIDwvZGl2PlxyXG4qL1xyXG5cclxuLmFiLWNoZWNrYm94IHtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG5cclxuICBpbnB1dCB7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBib3JkZXI6IG5vbmU7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICBhcHBlYXJhbmNlOiBub25lO1xyXG5cclxuICAgICY6YWZ0ZXIge1xyXG4gICAgICBjb250ZW50OiAnJztcclxuICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgIGhlaWdodDogJGNoZWNrYm94LXNpemU7XHJcbiAgICAgIHdpZHRoOiAkY2hlY2tib3gtc2l6ZTtcclxuICAgICAgYm9yZGVyOiAycHggc29saWQgdmFyKC0tY2hlY2tib3gtYm9yZGVyKTtcclxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY2hlY2tib3gtYmcpO1xyXG4gICAgICBib3JkZXItcmFkaXVzOiAkYm9yZGVyLXJhZGl1cy1iYXNlO1xyXG4gICAgfVxyXG5cclxuICAgICY6Y2hlY2tlZCB7XHJcbiAgICAgICY6YWZ0ZXIge1xyXG4gICAgICAgIGJvcmRlci1jb2xvcjogdmFyKC0tY2hlY2tib3gtYm9yZGVyLWNoZWNrZWQpO1xyXG4gICAgICB9XHJcbiAgICAgICY6YmVmb3JlIHtcclxuICAgICAgICBjb250ZW50OiAnJztcclxuICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZSg0NWRlZyk7XHJcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgIGxlZnQ6IDhweDtcclxuICAgICAgICB0b3A6IDNweDtcclxuICAgICAgICBkaXNwbGF5OiB0YWJsZTtcclxuICAgICAgICB3aWR0aDogOHB4O1xyXG4gICAgICAgIGhlaWdodDogMTRweDtcclxuICAgICAgICBib3JkZXI6IDJweCBzb2xpZCB2YXIoLS1jaGVja2JveC1pY29uLWNoZWNrZWQpO1xyXG4gICAgICAgIGJvcmRlci10b3A6IDA7XHJcbiAgICAgICAgYm9yZGVyLWxlZnQ6IDA7XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBAaW5jbHVkZSBmb2N1cy12YXJpYW50O1xyXG4gIH1cclxufVxyXG4iLCIvKlxuKiBGb250LlxuKi9cbi8qXG4qIEJvZHkuXG4qL1xuLypcbiogU2NyZWVucy5cbiovXG4vKlxuKiBaLWluZGV4LlxuKi9cbi8qXG4qIFNjcm9sbGJhci5cbiovXG4vKlxuKiBCb3JkZXIgUmFkaXVzLlxuKi9cbi8qXG4qIFNwYWNlcy5cbiovXG4vKlxuKiBDb250cm9scyAodXNlIGZvciBpbnB1dCB8fCBzZWxlY3RvciB8fCBidXR0b25zKS5cbiovXG4vKlxuKiBBbmltYXRpb24uXG4qL1xuLypcbiogTmF2YmFyLlxuKi9cbi8qXG4qIEJ1dHRvbnMuXG4qL1xuLypcbiogSWNvbnMuXG4qL1xuLypcbiogU2VhcmNoIElucHV0LlxuKi9cbi8qXG4qIENoZWNrQm94LlxuKi9cbi8qXG4qIERyb3Bkb3duLlxuKi9cbi8qXG4qIENhcmQuXG4qL1xuLypcbiogTm8gRGF0YS5cbiovXG4vKlxuKiBUYWJzLlxuKi9cbi8qXG4qIFNpZGViYXIuXG4qL1xuLypcbiogRm9ybS5cbiovXG4vKipcbiogRXhhbXBsZSBvZiB1c2FnZTpcbiogPGRpdiBjbGFzcz1cImFiLWNoZWNrYm94XCI+XG4qICAgPGlucHV0IHR5cGU9XCJjaGVja2JveFwiIGFyaWEtbGFiZWw9XCIuLi5cIi8+XG4qIDwvZGl2PlxuKi9cbi5hYi1jaGVja2JveCB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuLmFiLWNoZWNrYm94IGlucHV0IHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBib3JkZXI6IG5vbmU7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgYXBwZWFyYW5jZTogbm9uZTtcbn1cbi5hYi1jaGVja2JveCBpbnB1dDphZnRlciB7XG4gIGNvbnRlbnQ6IFwiXCI7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBoZWlnaHQ6IDI0cHg7XG4gIHdpZHRoOiAyNHB4O1xuICBib3JkZXI6IDJweCBzb2xpZCB2YXIoLS1jaGVja2JveC1ib3JkZXIpO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jaGVja2JveC1iZyk7XG4gIGJvcmRlci1yYWRpdXM6IDJweDtcbn1cbi5hYi1jaGVja2JveCBpbnB1dDpjaGVja2VkOmFmdGVyIHtcbiAgYm9yZGVyLWNvbG9yOiB2YXIoLS1jaGVja2JveC1ib3JkZXItY2hlY2tlZCk7XG59XG4uYWItY2hlY2tib3ggaW5wdXQ6Y2hlY2tlZDpiZWZvcmUge1xuICBjb250ZW50OiBcIlwiO1xuICB0cmFuc2Zvcm06IHJvdGF0ZSg0NWRlZyk7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgbGVmdDogOHB4O1xuICB0b3A6IDNweDtcbiAgZGlzcGxheTogdGFibGU7XG4gIHdpZHRoOiA4cHg7XG4gIGhlaWdodDogMTRweDtcbiAgYm9yZGVyOiAycHggc29saWQgdmFyKC0tY2hlY2tib3gtaWNvbi1jaGVja2VkKTtcbiAgYm9yZGVyLXRvcDogMDtcbiAgYm9yZGVyLWxlZnQ6IDA7XG59XG4uYWItY2hlY2tib3ggaW5wdXQ6Zm9jdXMge1xuICBvdXRsaW5lOiBub25lO1xuICBib3gtc2hhZG93OiAwIDAgMTBweCB2YXIoLS1mb2N1cy1ib3gpO1xufVxuXG4vKlxuKiBGb250LlxuKi9cbi8qXG4qIEJvZHkuXG4qL1xuLypcbiogU2NyZWVucy5cbiovXG4vKlxuKiBaLWluZGV4LlxuKi9cbi8qXG4qIFNjcm9sbGJhci5cbiovXG4vKlxuKiBCb3JkZXIgUmFkaXVzLlxuKi9cbi8qXG4qIFNwYWNlcy5cbiovXG4vKlxuKiBDb250cm9scyAodXNlIGZvciBpbnB1dCB8fCBzZWxlY3RvciB8fCBidXR0b25zKS5cbiovXG4vKlxuKiBBbmltYXRpb24uXG4qL1xuLypcbiogTmF2YmFyLlxuKi9cbi8qXG4qIEJ1dHRvbnMuXG4qL1xuLypcbiogSWNvbnMuXG4qL1xuLypcbiogU2VhcmNoIElucHV0LlxuKi9cbi8qXG4qIENoZWNrQm94LlxuKi9cbi8qXG4qIERyb3Bkb3duLlxuKi9cbi8qXG4qIENhcmQuXG4qL1xuLypcbiogTm8gRGF0YS5cbiovXG4vKlxuKiBUYWJzLlxuKi9cbi8qXG4qIFNpZGViYXIuXG4qL1xuLypcbiogRm9ybS5cbiovXG4uYWItbGlzdF9fcm93IHtcbiAgZGlzcGxheTogZmxleDtcbiAgcGFkZGluZzogMTZweDtcbn1cbi5hYi1saXN0X19yb3c6bnRoLW9mLXR5cGUob2RkKSB7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJnLXplYnJhKTtcbn1cbi5hYi1saXN0X19sYWJlbCB7XG4gIHBhZGRpbmctcmlnaHQ6IDhweDtcbiAgZm9udC13ZWlnaHQ6IFwiUHJveGltYSBCb2xkXCIsIEFyaWFsLCBzYW5zLXNlcmlmO1xufVxuLmFiLWxpc3RfX2luZm8ge1xuICBwYWRkaW5nOiAxNnB4O1xufVxuXG4vKlxuKiBGb250LlxuKi9cbi8qXG4qIEJvZHkuXG4qL1xuLypcbiogU2NyZWVucy5cbiovXG4vKlxuKiBaLWluZGV4LlxuKi9cbi8qXG4qIFNjcm9sbGJhci5cbiovXG4vKlxuKiBCb3JkZXIgUmFkaXVzLlxuKi9cbi8qXG4qIFNwYWNlcy5cbiovXG4vKlxuKiBDb250cm9scyAodXNlIGZvciBpbnB1dCB8fCBzZWxlY3RvciB8fCBidXR0b25zKS5cbiovXG4vKlxuKiBBbmltYXRpb24uXG4qL1xuLypcbiogTmF2YmFyLlxuKi9cbi8qXG4qIEJ1dHRvbnMuXG4qL1xuLypcbiogSWNvbnMuXG4qL1xuLypcbiogU2VhcmNoIElucHV0LlxuKi9cbi8qXG4qIENoZWNrQm94LlxuKi9cbi8qXG4qIERyb3Bkb3duLlxuKi9cbi8qXG4qIENhcmQuXG4qL1xuLypcbiogTm8gRGF0YS5cbiovXG4vKlxuKiBUYWJzLlxuKi9cbi8qXG4qIFNpZGViYXIuXG4qL1xuLypcbiogRm9ybS5cbiovXG4uYWItZm9ybV9fcm93IHtcbiAgcGFkZGluZzogOHB4IDA7XG59XG5cbi5pc0FjdGl2ZUljb24gOjpuZy1kZWVwIHN2ZyB7XG4gIGNvbG9yOiB2YXIoLS1jb2xvci1wcmltYXJ5KTtcbn1cblxuOmhvc3Qge1xuICBmbGV4OiAxO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xufVxuXG4uYWItY29sb3ItLXByaW1hcnkge1xuICBjb2xvcjogdmFyKC0tY29sb3ItcHJpbWFyeS1kYXJrKTtcbn1cblxuLypcbiogQ2FyZCBHcmlkLlxuKi9cbi5hYi1ncmlkIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC13cmFwOiB3cmFwO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgZmxleDogMTtcbiAgb3ZlcmZsb3cteDogYXV0bztcbiAgbWFyZ2luOiAtOHB4IDA7XG59XG4uYWItZ3JpZF9faXRlbSB7XG4gIHdpZHRoOiAxMDAlO1xuICBwYWRkaW5nOiA4cHg7XG59XG5AbWVkaWEgKG1pbi13aWR0aDogNzgwcHgpIHtcbiAgLmFiLWdyaWRfX2l0ZW0ge1xuICAgIHdpZHRoOiBjYWxjKDEwMCUgKiAxIC8gMyk7XG4gICAgbWF4LXdpZHRoOiB1bnNldDtcbiAgfVxufVxuQG1lZGlhIChtaW4td2lkdGg6IDEyMDBweCkge1xuICAuYWItZ3JpZF9faXRlbSB7XG4gICAgd2lkdGg6IGNhbGMoMTAwJSAqIDEgLyA0KTtcbiAgICBtYXgtd2lkdGg6IHVuc2V0O1xuICB9XG59XG5cbi8qXG4qIFRvb2xiYXIgZm9yIHBhZ2UgJiBjYXJkLlxuKi9cbltjbGFzcyo9YWItdG9vbGJhcl0ge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuW2NsYXNzKj1hYi10b29sYmFyXSA+IGxpIHtcbiAgcGFkZGluZzogNHB4O1xufVxuW2NsYXNzKj1hYi10b29sYmFyXSAuYWItbm93cmFwIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cbltjbGFzcyo9YWItdG9vbGJhcl0gLmFiLWZ1bGwge1xuICBmbGV4OiAxO1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuW2NsYXNzKj1hYi10b29sYmFyXSAuYWItY2hlY2tib3gge1xuICBtYXJnaW4tcmlnaHQ6IDhweDtcbn1cblxuLmFiLXRvb2xiYXItLW1haW4ge1xuICBwYWRkaW5nOiAxNnB4O1xuICBib3JkZXItdG9wOiAxcHggc29saWQgdmFyKC0tY29sb3ItZ3JheSk7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJvZHktYmcpO1xufSIsIkBtaXhpbiBmb2N1cy12YXJpYW50IHtcclxuICAmOmZvY3VzIHtcclxuICAgIG91dGxpbmU6IG5vbmU7XHJcbiAgICBib3gtc2hhZG93OiAwIDAgMTBweCB2YXIoLS1mb2N1cy1ib3gpO1xyXG4gIH1cclxufVxyXG4iLCJAaW1wb3J0IFwifnNyYy9zdHlsZXMvY29yZS92YXJpYWJsZXMvdmFyaWFibGVzXCI7XHJcblxyXG4uYWItbGlzdCB7XHJcbiAgJl9fcm93IHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBwYWRkaW5nOiAkc3BhY2UtYmFzZTtcclxuXHJcbiAgICAmOm50aC1vZi10eXBlKG9kZCkge1xyXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1iZy16ZWJyYSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAmX19sYWJlbCB7XHJcbiAgICBwYWRkaW5nLXJpZ2h0OiAkc3BhY2UtYmFzZS1oYWxmO1xyXG4gICAgZm9udC13ZWlnaHQ6ICRmb250LWZhbWlseS1ib2xkO1xyXG4gIH1cclxuXHJcbiAgJl9faW5mbyB7XHJcbiAgICBwYWRkaW5nOiAkc3BhY2UtYmFzZTtcclxuICB9XHJcbn1cclxuIiwiQGltcG9ydCBcIn5zcmMvc3R5bGVzL2NvcmUvdmFyaWFibGVzL3ZhcmlhYmxlc1wiO1xyXG5cclxuLmFiLWZvcm0ge1xyXG4gICZfX3JvdyB7XHJcbiAgICBwYWRkaW5nOiAkZm9ybS1yb3ctc3BhY2VzO1xyXG4gIH1cclxufVxyXG4iLCIuaXNBY3RpdmVJY29uIHtcclxuICA6Om5nLWRlZXAgc3ZnIHtcclxuICAgIGNvbG9yOiB2YXIoLS1jb2xvci1wcmltYXJ5KTtcclxuICB9XHJcbn1cclxuIiwiQGltcG9ydCBcIm1peGluLWZsZXgtdmFyaWFudFwiO1xyXG5cclxuQG1peGluIHRvb2xiYXItdmFyaWFudCgkZnVsbC1jb2wtYWxpZ24sICRmbGV4LWFsbDogJ2Rlc2t0b3AnKSB7XHJcbiAgPiBsaSB7XHJcbiAgICBwYWRkaW5nOiAkc3BhY2Utc21hbGw7XHJcbiAgfVxyXG5cclxuICAuYWItbm93cmFwIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIH1cclxuXHJcbiAgQGlmICRmbGV4LWFsbCA9PSAnYWxsJyB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuXHJcbiAgICAuYWItZnVsbCB7XHJcbiAgICAgIGZsZXg6IDE7XHJcbiAgICAgIEBpbmNsdWRlIGZsZXgtdmFyaWFudChmbGV4LCAkZnVsbC1jb2wtYWxpZ24sIGNlbnRlcik7XHJcbiAgICB9XHJcbiAgfSBAZWxzZSB7XHJcbiAgICAvLyBGb3IgRGVza3RvcCAmIFRhYmxldC5cclxuICAgIEBtZWRpYSAobWluLXdpZHRoOiAkc2NyZWVuLXN4KSB7XHJcbiAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcblxyXG4gICAgICAuYWItZnVsbCB7XHJcbiAgICAgICAgZmxleDogMTtcclxuICAgICAgICBAaW5jbHVkZSBmbGV4LXZhcmlhbnQoZmxleCwgJGZ1bGwtY29sLWFsaWduLCBjZW50ZXIpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbiIsIkBtaXhpbiBmbGV4LXZhcmlhbnQoJGRpc3BsYXksICRqdXN0aWZ5LWNvbnRlbnQsICRhbGlnbi1pdGVtcykge1xyXG4gIGRpc3BsYXk6ICRkaXNwbGF5O1xyXG4gIGp1c3RpZnktY29udGVudDogJGp1c3RpZnktY29udGVudDtcclxuICBhbGlnbi1pdGVtczogJGFsaWduLWl0ZW1zO1xyXG59XHJcbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TransactionCardsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-transaction-cards',
                templateUrl: './transaction-cards.component.html',
                styleUrls: ['./transaction-cards.component.scss']
            }]
    }], function () { return [{ type: _ngrx_store__WEBPACK_IMPORTED_MODULE_1__["Store"] }]; }, { data: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "./src/app/pages/not-found-page/not-found-page.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/pages/not-found-page/not-found-page.component.ts ***!
  \******************************************************************/
/*! exports provided: NotFoundPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotFoundPageComponent", function() { return NotFoundPageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class NotFoundPageComponent {
    constructor() { }
    ngOnInit() {
    }
}
NotFoundPageComponent.ɵfac = function NotFoundPageComponent_Factory(t) { return new (t || NotFoundPageComponent)(); };
NotFoundPageComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: NotFoundPageComponent, selectors: [["app-not-found-page"]], decls: 2, vars: 0, template: function NotFoundPageComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Page not found.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL25vdC1mb3VuZC1wYWdlL25vdC1mb3VuZC1wYWdlLmNvbXBvbmVudC5zY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NotFoundPageComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-not-found-page',
                templateUrl: './not-found-page.component.html',
                styleUrls: ['./not-found-page.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/pages/profile-page/profile-page.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/pages/profile-page/profile-page.component.ts ***!
  \**************************************************************/
/*! exports provided: ProfilePageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfilePageComponent", function() { return ProfilePageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class ProfilePageComponent {
    constructor() { }
    ngOnInit() {
    }
}
ProfilePageComponent.ɵfac = function ProfilePageComponent_Factory(t) { return new (t || ProfilePageComponent)(); };
ProfilePageComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ProfilePageComponent, selectors: [["app-profile-page"]], decls: 2, vars: 0, template: function ProfilePageComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "profile-page works!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3Byb2ZpbGUtcGFnZS9wcm9maWxlLXBhZ2UuY29tcG9uZW50LnNjc3MifQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ProfilePageComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-profile-page',
                templateUrl: './profile-page.component.html',
                styleUrls: ['./profile-page.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/shared/components/button/button.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/shared/components/button/button.component.ts ***!
  \**************************************************************/
/*! exports provided: ButtonComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ButtonComponent", function() { return ButtonComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var angular_svg_icon__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! angular-svg-icon */ "./node_modules/angular-svg-icon/__ivy_ngcc__/fesm2015/angular-svg-icon.js");




const _c0 = ["app-button", ""];
function ButtonComponent_svg_icon_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "svg-icon", 1);
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("src", "assets/icons/", ctx_r0.iconName, ".svg");
} }
const _c1 = ["*"];
class ButtonComponent {
    constructor() {
        this.theme = 'primary';
        this.type = 'button';
        this.iconName = '';
    }
    get isPrimary() {
        return this.theme === 'primary';
    }
    get isSecondary() {
        return this.theme === 'secondary';
    }
    get isIcon() {
        return this.theme === 'buttonIcon';
    }
    get isType() {
        return this.type;
    }
}
ButtonComponent.ɵfac = function ButtonComponent_Factory(t) { return new (t || ButtonComponent)(); };
ButtonComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ButtonComponent, selectors: [["button", "app-button", ""]], hostVars: 7, hostBindings: function ButtonComponent_HostBindings(rf, ctx) { if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("type", ctx.isType);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("ab-btn--primary", ctx.isPrimary)("ab-btn--secondary", ctx.isSecondary)("ab-btn--icon", ctx.isIcon);
    } }, inputs: { theme: "theme", type: "type", iconName: "iconName" }, attrs: _c0, ngContentSelectors: _c1, decls: 3, vars: 1, consts: [["class", "ab-btn__ico", "aria-hidden", "true", 3, "src", 4, "ngIf"], ["aria-hidden", "true", 1, "ab-btn__ico", 3, "src"]], template: function ButtonComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, ButtonComponent_svg_icon_0_Template, 1, 1, "svg-icon", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.iconName);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgIf"], angular_svg_icon__WEBPACK_IMPORTED_MODULE_2__["SvgIconComponent"]], styles: [".ab-btn--primary[_nghost-%COMP%] {\n  min-height: 30px;\n  overflow: hidden;\n  padding: 4px 16px;\n  font-family: \"Proxima Bold\", Arial, sans-serif;\n  font-size: 14px;\n  color: var(--btn-primary-color);\n  border: 1px solid var(--btn-primary-border);\n  background-color: var(--btn-primary-bg);\n  cursor: pointer;\n  text-transform: capitalize;\n  white-space: nowrap;\n  -webkit-user-select: none;\n     -moz-user-select: none;\n          user-select: none;\n  transition: color 270ms ease-in-out, background 270ms ease-in-out;\n  border-radius: 2px;\n  display: inline-flex;\n  justify-content: center;\n  align-items: center;\n}\n.ab-btn--primary[_nghost-%COMP%]:focus {\n  outline: none;\n  box-shadow: 0 0 10px var(--focus-box);\n}\n.ab-btn--primary[_nghost-%COMP%]:active:enabled, .ab-btn--primary[_nghost-%COMP%]:hover:enabled {\n  color: var(--btn-primary-color--action);\n  border-color: var(--btn-primary-border--action);\n  background-color: var(--btn-primary-bg--action);\n}\n.ab-btn--primary[_nghost-%COMP%]:disabled {\n  opacity: 0.6;\n  cursor: default;\n}\n.ab-btn--primary[_nghost-%COMP%]   span[_ngcontent-%COMP%] {\n  text-overflow: ellipsis;\n  overflow: hidden;\n}\n.ab-btn--primary[_nghost-%COMP%]   .ab-btn__ico[_ngcontent-%COMP%] {\n  margin-left: -4px;\n  margin-right: 4px;\n}\n@media (min-width: 640px) {\n  .ab-btn--primary[_nghost-%COMP%] {\n    min-width: 150px;\n  }\n}\n@media (max-width: 640px) {\n  .ab-btn--primary[_nghost-%COMP%] {\n    width: 100%;\n  }\n}\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n.ab-btn--secondary[_nghost-%COMP%] {\n  min-height: 30px;\n  overflow: hidden;\n  padding: 4px 16px;\n  font-family: \"Proxima Bold\", Arial, sans-serif;\n  font-size: 14px;\n  color: var(--btn-secondary-color);\n  border: 1px solid var(--btn-secondary-border);\n  background-color: var(--btn-secondary-bg);\n  cursor: pointer;\n  text-transform: capitalize;\n  white-space: nowrap;\n  -webkit-user-select: none;\n     -moz-user-select: none;\n          user-select: none;\n  transition: color 270ms ease-in-out, background 270ms ease-in-out;\n  border-radius: 2px;\n  display: inline-flex;\n  justify-content: center;\n  align-items: center;\n}\n.ab-btn--secondary[_nghost-%COMP%]:focus {\n  outline: none;\n  box-shadow: 0 0 10px var(--focus-box);\n}\n.ab-btn--secondary[_nghost-%COMP%]:active:enabled, .ab-btn--secondary[_nghost-%COMP%]:hover:enabled {\n  color: var(--btn-secondary-color--action);\n  border-color: var(--btn-secondary-border--action);\n  background-color: var(--btn-secondary-bg--action);\n}\n.ab-btn--secondary[_nghost-%COMP%]:disabled {\n  opacity: 0.6;\n  cursor: default;\n}\n.ab-btn--secondary[_nghost-%COMP%]   span[_ngcontent-%COMP%] {\n  text-overflow: ellipsis;\n  overflow: hidden;\n}\n.ab-btn--secondary[_nghost-%COMP%]   .ab-btn__ico[_ngcontent-%COMP%] {\n  margin-left: -4px;\n  margin-right: 4px;\n}\n@media (min-width: 640px) {\n  .ab-btn--secondary[_nghost-%COMP%] {\n    min-width: 150px;\n  }\n}\n@media (max-width: 640px) {\n  .ab-btn--secondary[_nghost-%COMP%] {\n    width: 100%;\n  }\n}\n.ab-btn--icon[_nghost-%COMP%] {\n  background-color: transparent;\n  padding: 0;\n  cursor: pointer;\n  border: unset;\n  color: currentColor;\n  display: inline-flex;\n  justify-content: center;\n  align-items: center;\n}\n.ab-btn--icon[_nghost-%COMP%]:focus {\n  outline: none;\n  box-shadow: 0 0 10px var(--focus-box);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9zdHlsZXMvY29yZS92YXJpYWJsZXMvdmFyaWFibGVzLnNjc3MiLCJzcmMvc3R5bGVzL2NvbXBvbmVudHMvYnV0dG9ucy9idG4tcHJpbWFyeS5zY3NzIiwic3JjL3N0eWxlcy9jb21wb25lbnRzL2J1dHRvbnMvbWl4aW4tYnRuLXZhcmlhbnQuc2NzcyIsInNyYy9zdHlsZXMvY29yZS9taXhpbnMvbWl4aW4tZmxleC12YXJpYW50LnNjc3MiLCJzcmMvYXBwL3NoYXJlZC9jb21wb25lbnRzL2J1dHRvbi9idXR0b24uY29tcG9uZW50LnNjc3MiLCJzcmMvc3R5bGVzL2NvcmUvbWl4aW5zL21peGluLWZvY3VzLXZhcmlhbnQuc2NzcyIsInNyYy9zdHlsZXMvY29tcG9uZW50cy9idXR0b25zL2J0bi1zZWNvbmRhcnkuc2NzcyIsInNyYy9zdHlsZXMvY29tcG9uZW50cy9idXR0b25zL2J0bi1pY29uLnNjc3MiLCJzcmMvc3R5bGVzL2NvbXBvbmVudHMvYnV0dG9ucy9taXhpbi1idG4taWNvbi12YXJpYW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7O0NBQUE7QUFXQTs7Q0FBQTtBQU1BOztDQUFBO0FBT0E7O0NBQUE7QUFNQTs7Q0FBQTtBQUtBOztDQUFBO0FBS0E7O0NBQUE7QUFRQTs7Q0FBQTtBQU1BOztDQUFBO0FBS0E7O0NBQUE7QUFXQTs7Q0FBQTtBQVNBOztDQUFBO0FBS0E7O0NBQUE7QUFPQTs7Q0FBQTtBQUtBOztDQUFBO0FBUUE7O0NBQUE7QUFPQTs7Q0FBQTtBQU9BOztDQUFBO0FBT0E7O0NBQUE7QUFTQTs7Q0FBQTtBQ3BJQTtFQ0dFLGdCRm9FVztFRW5FWCxnQkFBQTtFQUNBLGlCRjZDZTtFRTVDZiw4Q0ZKaUI7RUVLakIsZUFBQTtFQUNBLCtCRE5JO0VDT0osMkNBQUE7RUFDQSx1Q0ROSTtFQ09KLGVBQUE7RUFDQSwwQkFBQTtFQUNBLG1CQUFBO0VBQ0EseUJBQUE7S0FBQSxzQkFBQTtVQUFBLGlCQUFBO0VBQ0EsaUVBQUE7RUFDQSxrQkZvQm1CO0VHckNuQixvQkRrQnNCO0VDakJ0Qix1QkRpQm1DO0VDaEJuQyxtQkRnQjJDO0FFMkQ3QztBQzdFRTtFQUNFLGFBQUE7RUFDQSxxQ0FBQTtBRCtFSjtBRjFESTtFQUNFLHVDRGxCQTtFQ21CQSwrQ0RsQkE7RUNtQkEsK0NEbEJBO0FHOEVOO0FGeERFO0VBQ0UsWUFBQTtFQUNBLGVBQUE7QUUwREo7QUZ2REU7RUFDRSx1QkFBQTtFQUNBLGdCQUFBO0FFeURKO0FGckRFO0VBQ0UsaUJBQUE7RUFDQSxpQkZFVTtBSXFEZDtBRm5ERTtFRDlDRjtJQytDSSxnQkZ5QlE7RUk2QlY7QUFDRjtBRm5ERTtFRG5ERjtJQ29ESSxXQUFBO0VFc0RGO0FBQ0Y7QUo3R0E7O0NBQUE7QUFXQTs7Q0FBQTtBQU1BOztDQUFBO0FBT0E7O0NBQUE7QUFNQTs7Q0FBQTtBQUtBOztDQUFBO0FBS0E7O0NBQUE7QUFRQTs7Q0FBQTtBQU1BOztDQUFBO0FBS0E7O0NBQUE7QUFXQTs7Q0FBQTtBQVNBOztDQUFBO0FBS0E7O0NBQUE7QUFPQTs7Q0FBQTtBQUtBOztDQUFBO0FBUUE7O0NBQUE7QUFPQTs7Q0FBQTtBQU9BOztDQUFBO0FBT0E7O0NBQUE7QUFTQTs7Q0FBQTtBTXBJQTtFSkdFLGdCRm9FVztFRW5FWCxnQkFBQTtFQUNBLGlCRjZDZTtFRTVDZiw4Q0ZKaUI7RUVLakIsZUFBQTtFQUNBLGlDSU5JO0VKT0osNkNBQUE7RUFDQSx5Q0lOSTtFSk9KLGVBQUE7RUFDQSwwQkFBQTtFQUNBLG1CQUFBO0VBQ0EseUJBQUE7S0FBQSxzQkFBQTtVQUFBLGlCQUFBO0VBQ0EsaUVBQUE7RUFDQSxrQkZvQm1CO0VHckNuQixvQkRrQnNCO0VDakJ0Qix1QkRpQm1DO0VDaEJuQyxtQkRnQjJDO0FFMEs3QztBQzVMRTtFQUNFLGFBQUE7RUFDQSxxQ0FBQTtBRDhMSjtBRnpLSTtFQUNFLHlDSWxCQTtFSm1CQSxpRElsQkE7RUptQkEsaURJbEJBO0FGNkxOO0FGdktFO0VBQ0UsWUFBQTtFQUNBLGVBQUE7QUV5S0o7QUZ0S0U7RUFDRSx1QkFBQTtFQUNBLGdCQUFBO0FFd0tKO0FGcEtFO0VBQ0UsaUJBQUE7RUFDQSxpQkZFVTtBSW9LZDtBRmxLRTtFSTlDRjtJSitDSSxnQkZ5QlE7RUk0SVY7QUFDRjtBRmxLRTtFSW5ERjtJSm9ESSxXQUFBO0VFcUtGO0FBQ0Y7QUcxTkE7RUFDRSw2QkFBQTtFQUNBLFVBQUE7RUNBQSxlQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VMTEEsb0JLTXNCO0VMTHRCLHVCS0ttQztFTEpuQyxtQktJMkM7QUpnTzdDO0FDdE9FO0VBQ0UsYUFBQTtFQUNBLHFDQUFBO0FEd09KO0FBdk9BOzs7Ozs7O0NBQUEiLCJmaWxlIjoic3JjL2FwcC9zaGFyZWQvY29tcG9uZW50cy9idXR0b24vYnV0dG9uLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLypcclxuKiBGb250LlxyXG4qL1xyXG4kZm9udC1mYW1pbHktZXh0cmEtYm9sZDogJ1Byb3hpbWEgRXh0cmEgQm9sZCcsIEFyaWFsLCBzYW5zLXNlcmlmO1xyXG4kZm9udC1mYW1pbHktYm9sZDogJ1Byb3hpbWEgQm9sZCcsIEFyaWFsLCBzYW5zLXNlcmlmO1xyXG4kZm9udC1mYW1pbHktcmVndWxhcjogJ1Byb3hpbWEgUmVnJywgQXJpYWwsIHNhbnMtc2VyaWY7XHJcblxyXG4kZm9udC1zaXplLWxnOiAyNHB4O1xyXG4kZm9udC1zaXplLW1kOiAxNnB4O1xyXG4kZm9udC1zaXplLWJhc2U6IDE0cHg7XHJcblxyXG4vKlxyXG4qIEJvZHkuXHJcbiovXHJcbiRib2R5LWZvbnQtc2l6ZTogJGZvbnQtc2l6ZS1iYXNlO1xyXG4kYm9keS1mb250LWZhbWlseTogJGZvbnQtZmFtaWx5LXJlZ3VsYXI7XHJcblxyXG4vKlxyXG4qIFNjcmVlbnMuXHJcbiovXHJcbiRzY3JlZW4tc3g6IDY0MHB4O1xyXG4kc2NyZWVuLW1kOiA3ODBweDtcclxuJHNjcmVlbi1sZzogMTIwMHB4O1xyXG5cclxuLypcclxuKiBaLWluZGV4LlxyXG4qL1xyXG4kei1pbmRleC1kcm9wZG93bjogMjtcclxuJHotaW5kZXgtc2lkZWJhcjogMztcclxuXHJcbi8qXHJcbiogU2Nyb2xsYmFyLlxyXG4qL1xyXG4kc2Nyb2xsYmFyLXNpemU6IDhweDtcclxuXHJcbi8qXHJcbiogQm9yZGVyIFJhZGl1cy5cclxuKi9cclxuJGJvcmRlci1yYWRpdXMtYmFzZTogMnB4O1xyXG5cclxuLypcclxuKiBTcGFjZXMuXHJcbiovXHJcbiRzcGFjZS1iYXNlOiAxNnB4O1xyXG4kc3BhY2UtYmFzZS1kb3VibGU6ICRzcGFjZS1iYXNlKjI7XHJcbiRzcGFjZS1iYXNlLWhhbGY6ICRzcGFjZS1iYXNlLzI7XHJcbiRzcGFjZS1zbWFsbDogJHNwYWNlLWJhc2UvNDtcclxuXHJcbi8qXHJcbiogQ29udHJvbHMgKHVzZSBmb3IgaW5wdXQgfHwgc2VsZWN0b3IgfHwgYnV0dG9ucykuXHJcbiovXHJcbiRjb250cm9sLWhlaWdodDogNDBweDtcclxuJGNvbnRyb2wtc3BhY2VzOiAkc3BhY2Utc21hbGwgJHNwYWNlLWJhc2U7XHJcblxyXG4vKlxyXG4qIEFuaW1hdGlvbi5cclxuKi9cclxuJHRyYW5zaXRpb24tYmFzZTogMjcwbXMgZWFzZS1pbi1vdXQ7XHJcblxyXG4vKlxyXG4qIE5hdmJhci5cclxuKi9cclxuJG5hdmJhci1zcGFjZXM6ICRzcGFjZS1iYXNlO1xyXG4kbmF2YmFyLWZvbnQtc2l6ZTogJGZvbnQtc2l6ZS1sZztcclxuXHJcbiRuYXZiYXItbGluay1oZWlnaHQ6ICRjb250cm9sLWhlaWdodDtcclxuJG5hdmJhci1saW5rLXNwYWNlczogJHNwYWNlLWJhc2UgMDtcclxuJG5hdmJhci1saW5rLWZvbnQtZmFtaWx5OiAkZm9udC1mYW1pbHktYm9sZDtcclxuJG5hdmJhci1saW5rLWZvbnQtc2l6ZTogJGZvbnQtc2l6ZS1tZDtcclxuXHJcbi8qXHJcbiogQnV0dG9ucy5cclxuKi9cclxuJGJ0bi1oZWlnaHQ6ICRjb250cm9sLWhlaWdodCAtIDEwcHg7XHJcbiRidG4td2lkdGg6IDE1MHB4O1xyXG4kYnRuLXNwYWNlczogJGNvbnRyb2wtc3BhY2VzO1xyXG4kYnRuLWZvbnQtZmFtaWx5OiAkZm9udC1mYW1pbHktYm9sZDtcclxuJGJ0bi1pY29uLXNwYWNlOiAkc3BhY2Utc21hbGw7XHJcblxyXG4vKlxyXG4qIEljb25zLlxyXG4qL1xyXG4kaWNvLXNpemUtYmFzZTogJGZvbnQtc2l6ZS1sZztcclxuXHJcbi8qXHJcbiogU2VhcmNoIElucHV0LlxyXG4qL1xyXG4kc2VhcmNoLWhlaWdodDogJGNvbnRyb2wtaGVpZ2h0O1xyXG4kc2VhcmNoLXNwYWNlczogJGNvbnRyb2wtc3BhY2VzO1xyXG4kc2VhcmNoLWljb24tc3BhY2VzOiAkc3BhY2UtYmFzZTtcclxuXHJcbi8qXHJcbiogQ2hlY2tCb3guXHJcbiovXHJcbiRjaGVja2JveC1zaXplOiAkZm9udC1zaXplLWxnO1xyXG5cclxuLypcclxuKiBEcm9wZG93bi5cclxuKi9cclxuJGRyb3Bkb3duLWhlaWdodDogJGNvbnRyb2wtaGVpZ2h0O1xyXG4kZHJvcGRvd24tYnRuLXNwYWNlczogJGNvbnRyb2wtc3BhY2VzO1xyXG4kZHJvcGRvd24tbWVudS1oZWlnaHQ6IDIwMHB4O1xyXG4kZHJvcGRvd24tbWVudS1pdGVtLXNwYWNlczogJHNwYWNlLWJhc2U7XHJcblxyXG4vKlxyXG4qIENhcmQuXHJcbiovXHJcbiRjYXJkLXNwYWNlczogJHNwYWNlLWJhc2U7XHJcbiRjYXJkLXJhZGl1czogJGJvcmRlci1yYWRpdXMtYmFzZTtcclxuJGNhcmQtaGVhZC1mb250LWZhbWlseTogJGZvbnQtZmFtaWx5LWV4dHJhLWJvbGQ7XHJcblxyXG4vKlxyXG4qIE5vIERhdGEuXHJcbiovXHJcbiRuby1kYXRhLWZvbnQtZmFtaWx5OiAkZm9udC1mYW1pbHktZXh0cmEtYm9sZDtcclxuJG5vLWRhdGEtZm9udC1zaXplOiAkZm9udC1zaXplLWxnO1xyXG4kbm8tZGF0YS1zcGFjZXM6ICRzcGFjZS1iYXNlLWRvdWJsZSAwO1xyXG5cclxuLypcclxuKiBUYWJzLlxyXG4qL1xyXG4kdGFiLXNwYWNlczogJHNwYWNlLWJhc2U7XHJcbiR0YWItaGVhZC13aWR0aDogMTUwcHg7XHJcbiR0YWItaGVhZC1ib3JkZXI6IDNweDtcclxuXHJcbi8qXHJcbiogU2lkZWJhci5cclxuKi9cclxuJHNpZGViYXItc3BhY2VzOiAkc3BhY2UtYmFzZTtcclxuJHNpZGViYXItd2lkdGg6IDMwMHB4O1xyXG4kc2lkZWJhci1oZWFkLWhlaWdodDogNjBweDtcclxuJHNpZGViYXItdGl0bGUtZm9udC1mYW1pbHk6ICRmb250LWZhbWlseS1leHRyYS1ib2xkO1xyXG4kc2lkZWJhci10aXRsZS1mb250LXNpemU6ICRmb250LXNpemUtbGc7XHJcblxyXG4vKlxyXG4qIEZvcm0uXHJcbiovXHJcbiRmb3JtLXJvdy1zcGFjZXM6ICRzcGFjZS1iYXNlLWhhbGYgMDtcclxuIiwiQGltcG9ydCBcIm1peGluLWJ0bi12YXJpYW50XCI7XHJcblxyXG46aG9zdC5hYi1idG4tLXByaW1hcnkge1xyXG4gIEBpbmNsdWRlIGJ0bi12YXJpYW50KFxyXG4gICAgICB2YXIoLS1idG4tcHJpbWFyeS1jb2xvciksXHJcbiAgICAgIHZhcigtLWJ0bi1wcmltYXJ5LWJvcmRlciksXHJcbiAgICAgIHZhcigtLWJ0bi1wcmltYXJ5LWJnKSxcclxuICAgICAgdmFyKC0tYnRuLXByaW1hcnktY29sb3ItLWFjdGlvbiksXHJcbiAgICAgIHZhcigtLWJ0bi1wcmltYXJ5LWJvcmRlci0tYWN0aW9uKSxcclxuICAgICAgdmFyKC0tYnRuLXByaW1hcnktYmctLWFjdGlvbiksXHJcbiAgKTtcclxufVxyXG4iLCJAaW1wb3J0IFwifnNyYy9zdHlsZXMvY29yZS92YXJpYWJsZXMvdmFyaWFibGVzXCI7XHJcbkBpbXBvcnQgXCJ+c3JjL3N0eWxlcy9jb3JlL21peGlucy9taXhpbi1mbGV4LXZhcmlhbnRcIjtcclxuQGltcG9ydCBcIn5zcmMvc3R5bGVzL2NvcmUvbWl4aW5zL21peGluLWZvY3VzLXZhcmlhbnRcIjtcclxuXHJcbkBtaXhpbiBidG4tdmFyaWFudCgkY29sb3IsICRib3JkZXIsICRiYWNrZ3JvdW5kLCAkY29sb3ItYWN0aW9uLCAkYm9yZGVyLWFjdGlvbiwgJGJhY2tncm91bmQtYWN0aW9uKSB7XHJcbiAgbWluLWhlaWdodDogJGJ0bi1oZWlnaHQ7XHJcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICBwYWRkaW5nOiAkYnRuLXNwYWNlcztcclxuICBmb250LWZhbWlseTogJGJ0bi1mb250LWZhbWlseTtcclxuICBmb250LXNpemU6ICRib2R5LWZvbnQtc2l6ZTtcclxuICBjb2xvcjogJGNvbG9yO1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkICRib3JkZXI7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogJGJhY2tncm91bmQ7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xyXG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XHJcbiAgdXNlci1zZWxlY3Q6IG5vbmU7XHJcbiAgdHJhbnNpdGlvbjogY29sb3IgJHRyYW5zaXRpb24tYmFzZSwgYmFja2dyb3VuZCAkdHJhbnNpdGlvbi1iYXNlO1xyXG4gIGJvcmRlci1yYWRpdXM6ICRib3JkZXItcmFkaXVzLWJhc2U7XHJcbiAgQGluY2x1ZGUgZmxleC12YXJpYW50KGlubGluZS1mbGV4LCBjZW50ZXIsIGNlbnRlcik7XHJcbiAgQGluY2x1ZGUgZm9jdXMtdmFyaWFudDtcclxuXHJcbiAgJjphY3RpdmUsXHJcbiAgJjpob3ZlciB7XHJcbiAgICAmOmVuYWJsZWQge1xyXG4gICAgICBjb2xvcjogJGNvbG9yLWFjdGlvbjtcclxuICAgICAgYm9yZGVyLWNvbG9yOiAkYm9yZGVyLWFjdGlvbjtcclxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogJGJhY2tncm91bmQtYWN0aW9uO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgJjpkaXNhYmxlZCB7XHJcbiAgICBvcGFjaXR5OiAuNjtcclxuICAgIGN1cnNvcjogZGVmYXVsdDtcclxuICB9XHJcblxyXG4gIHNwYW4ge1xyXG4gICAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XHJcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gIH1cclxuXHJcbiAgLy8gSWYgQnV0dG9uIGhhcyBJY29uLlxyXG4gIC5hYi1idG5fX2ljbyB7XHJcbiAgICBtYXJnaW4tbGVmdDogLSRidG4taWNvbi1zcGFjZTtcclxuICAgIG1hcmdpbi1yaWdodDogJGJ0bi1pY29uLXNwYWNlO1xyXG4gIH1cclxuXHJcbiAgLy8gRm9yIERlc2t0b3AgJiBUYWJsZXQuXHJcbiAgQG1lZGlhIChtaW4td2lkdGg6ICRzY3JlZW4tc3gpIHtcclxuICAgIG1pbi13aWR0aDogJGJ0bi13aWR0aDtcclxuICB9XHJcblxyXG4gIC8vIEZvciBTbWFsbCBEZXZpY2VzLlxyXG4gIEBtZWRpYSAobWF4LXdpZHRoOiAkc2NyZWVuLXN4KSB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICB9XHJcbn1cclxuIiwiQG1peGluIGZsZXgtdmFyaWFudCgkZGlzcGxheSwgJGp1c3RpZnktY29udGVudCwgJGFsaWduLWl0ZW1zKSB7XHJcbiAgZGlzcGxheTogJGRpc3BsYXk7XHJcbiAganVzdGlmeS1jb250ZW50OiAkanVzdGlmeS1jb250ZW50O1xyXG4gIGFsaWduLWl0ZW1zOiAkYWxpZ24taXRlbXM7XHJcbn1cclxuIiwiLypcbiogRm9udC5cbiovXG4vKlxuKiBCb2R5LlxuKi9cbi8qXG4qIFNjcmVlbnMuXG4qL1xuLypcbiogWi1pbmRleC5cbiovXG4vKlxuKiBTY3JvbGxiYXIuXG4qL1xuLypcbiogQm9yZGVyIFJhZGl1cy5cbiovXG4vKlxuKiBTcGFjZXMuXG4qL1xuLypcbiogQ29udHJvbHMgKHVzZSBmb3IgaW5wdXQgfHwgc2VsZWN0b3IgfHwgYnV0dG9ucykuXG4qL1xuLypcbiogQW5pbWF0aW9uLlxuKi9cbi8qXG4qIE5hdmJhci5cbiovXG4vKlxuKiBCdXR0b25zLlxuKi9cbi8qXG4qIEljb25zLlxuKi9cbi8qXG4qIFNlYXJjaCBJbnB1dC5cbiovXG4vKlxuKiBDaGVja0JveC5cbiovXG4vKlxuKiBEcm9wZG93bi5cbiovXG4vKlxuKiBDYXJkLlxuKi9cbi8qXG4qIE5vIERhdGEuXG4qL1xuLypcbiogVGFicy5cbiovXG4vKlxuKiBTaWRlYmFyLlxuKi9cbi8qXG4qIEZvcm0uXG4qL1xuOmhvc3QuYWItYnRuLS1wcmltYXJ5IHtcbiAgbWluLWhlaWdodDogMzBweDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgcGFkZGluZzogNHB4IDE2cHg7XG4gIGZvbnQtZmFtaWx5OiBcIlByb3hpbWEgQm9sZFwiLCBBcmlhbCwgc2Fucy1zZXJpZjtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBjb2xvcjogdmFyKC0tYnRuLXByaW1hcnktY29sb3IpO1xuICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1idG4tcHJpbWFyeS1ib3JkZXIpO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1idG4tcHJpbWFyeS1iZyk7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gIHVzZXItc2VsZWN0OiBub25lO1xuICB0cmFuc2l0aW9uOiBjb2xvciAyNzBtcyBlYXNlLWluLW91dCwgYmFja2dyb3VuZCAyNzBtcyBlYXNlLWluLW91dDtcbiAgYm9yZGVyLXJhZGl1czogMnB4O1xuICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG46aG9zdC5hYi1idG4tLXByaW1hcnk6Zm9jdXMge1xuICBvdXRsaW5lOiBub25lO1xuICBib3gtc2hhZG93OiAwIDAgMTBweCB2YXIoLS1mb2N1cy1ib3gpO1xufVxuOmhvc3QuYWItYnRuLS1wcmltYXJ5OmFjdGl2ZTplbmFibGVkLCA6aG9zdC5hYi1idG4tLXByaW1hcnk6aG92ZXI6ZW5hYmxlZCB7XG4gIGNvbG9yOiB2YXIoLS1idG4tcHJpbWFyeS1jb2xvci0tYWN0aW9uKTtcbiAgYm9yZGVyLWNvbG9yOiB2YXIoLS1idG4tcHJpbWFyeS1ib3JkZXItLWFjdGlvbik7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJ0bi1wcmltYXJ5LWJnLS1hY3Rpb24pO1xufVxuOmhvc3QuYWItYnRuLS1wcmltYXJ5OmRpc2FibGVkIHtcbiAgb3BhY2l0eTogMC42O1xuICBjdXJzb3I6IGRlZmF1bHQ7XG59XG46aG9zdC5hYi1idG4tLXByaW1hcnkgc3BhbiB7XG4gIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xuICBvdmVyZmxvdzogaGlkZGVuO1xufVxuOmhvc3QuYWItYnRuLS1wcmltYXJ5IC5hYi1idG5fX2ljbyB7XG4gIG1hcmdpbi1sZWZ0OiAtNHB4O1xuICBtYXJnaW4tcmlnaHQ6IDRweDtcbn1cbkBtZWRpYSAobWluLXdpZHRoOiA2NDBweCkge1xuICA6aG9zdC5hYi1idG4tLXByaW1hcnkge1xuICAgIG1pbi13aWR0aDogMTUwcHg7XG4gIH1cbn1cbkBtZWRpYSAobWF4LXdpZHRoOiA2NDBweCkge1xuICA6aG9zdC5hYi1idG4tLXByaW1hcnkge1xuICAgIHdpZHRoOiAxMDAlO1xuICB9XG59XG5cbi8qXG4qIEZvbnQuXG4qL1xuLypcbiogQm9keS5cbiovXG4vKlxuKiBTY3JlZW5zLlxuKi9cbi8qXG4qIFotaW5kZXguXG4qL1xuLypcbiogU2Nyb2xsYmFyLlxuKi9cbi8qXG4qIEJvcmRlciBSYWRpdXMuXG4qL1xuLypcbiogU3BhY2VzLlxuKi9cbi8qXG4qIENvbnRyb2xzICh1c2UgZm9yIGlucHV0IHx8IHNlbGVjdG9yIHx8IGJ1dHRvbnMpLlxuKi9cbi8qXG4qIEFuaW1hdGlvbi5cbiovXG4vKlxuKiBOYXZiYXIuXG4qL1xuLypcbiogQnV0dG9ucy5cbiovXG4vKlxuKiBJY29ucy5cbiovXG4vKlxuKiBTZWFyY2ggSW5wdXQuXG4qL1xuLypcbiogQ2hlY2tCb3guXG4qL1xuLypcbiogRHJvcGRvd24uXG4qL1xuLypcbiogQ2FyZC5cbiovXG4vKlxuKiBObyBEYXRhLlxuKi9cbi8qXG4qIFRhYnMuXG4qL1xuLypcbiogU2lkZWJhci5cbiovXG4vKlxuKiBGb3JtLlxuKi9cbjpob3N0LmFiLWJ0bi0tc2Vjb25kYXJ5IHtcbiAgbWluLWhlaWdodDogMzBweDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgcGFkZGluZzogNHB4IDE2cHg7XG4gIGZvbnQtZmFtaWx5OiBcIlByb3hpbWEgQm9sZFwiLCBBcmlhbCwgc2Fucy1zZXJpZjtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBjb2xvcjogdmFyKC0tYnRuLXNlY29uZGFyeS1jb2xvcik7XG4gIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWJ0bi1zZWNvbmRhcnktYm9yZGVyKTtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYnRuLXNlY29uZGFyeS1iZyk7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gIHVzZXItc2VsZWN0OiBub25lO1xuICB0cmFuc2l0aW9uOiBjb2xvciAyNzBtcyBlYXNlLWluLW91dCwgYmFja2dyb3VuZCAyNzBtcyBlYXNlLWluLW91dDtcbiAgYm9yZGVyLXJhZGl1czogMnB4O1xuICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG46aG9zdC5hYi1idG4tLXNlY29uZGFyeTpmb2N1cyB7XG4gIG91dGxpbmU6IG5vbmU7XG4gIGJveC1zaGFkb3c6IDAgMCAxMHB4IHZhcigtLWZvY3VzLWJveCk7XG59XG46aG9zdC5hYi1idG4tLXNlY29uZGFyeTphY3RpdmU6ZW5hYmxlZCwgOmhvc3QuYWItYnRuLS1zZWNvbmRhcnk6aG92ZXI6ZW5hYmxlZCB7XG4gIGNvbG9yOiB2YXIoLS1idG4tc2Vjb25kYXJ5LWNvbG9yLS1hY3Rpb24pO1xuICBib3JkZXItY29sb3I6IHZhcigtLWJ0bi1zZWNvbmRhcnktYm9yZGVyLS1hY3Rpb24pO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1idG4tc2Vjb25kYXJ5LWJnLS1hY3Rpb24pO1xufVxuOmhvc3QuYWItYnRuLS1zZWNvbmRhcnk6ZGlzYWJsZWQge1xuICBvcGFjaXR5OiAwLjY7XG4gIGN1cnNvcjogZGVmYXVsdDtcbn1cbjpob3N0LmFiLWJ0bi0tc2Vjb25kYXJ5IHNwYW4ge1xuICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbn1cbjpob3N0LmFiLWJ0bi0tc2Vjb25kYXJ5IC5hYi1idG5fX2ljbyB7XG4gIG1hcmdpbi1sZWZ0OiAtNHB4O1xuICBtYXJnaW4tcmlnaHQ6IDRweDtcbn1cbkBtZWRpYSAobWluLXdpZHRoOiA2NDBweCkge1xuICA6aG9zdC5hYi1idG4tLXNlY29uZGFyeSB7XG4gICAgbWluLXdpZHRoOiAxNTBweDtcbiAgfVxufVxuQG1lZGlhIChtYXgtd2lkdGg6IDY0MHB4KSB7XG4gIDpob3N0LmFiLWJ0bi0tc2Vjb25kYXJ5IHtcbiAgICB3aWR0aDogMTAwJTtcbiAgfVxufVxuXG46aG9zdC5hYi1idG4tLWljb24ge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgcGFkZGluZzogMDtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBib3JkZXI6IHVuc2V0O1xuICBjb2xvcjogY3VycmVudENvbG9yO1xuICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG46aG9zdC5hYi1idG4tLWljb246Zm9jdXMge1xuICBvdXRsaW5lOiBub25lO1xuICBib3gtc2hhZG93OiAwIDAgMTBweCB2YXIoLS1mb2N1cy1ib3gpO1xufVxuXG4vKipcbiogRXhhbXBsZSBvZiB1c2FnZTpcbiogPGJ1dHRvbiBhcHAtYnV0dG9uPi4uLnByaW1hcnkgYnV0dG9uKEJ5IGRlZmF1bHQpLi4uPC9idXR0b24+XG4qXG4qIDxidXR0b24gYXBwLWJ1dHRvbiB0aGVtZT1cIi4uLlwiIGljb25OYW1lPVwiLi4uXCI+Li4uPC9idXR0b24+XG4qXG4qIDxidXR0b24gYXBwLWJ1dHRvbiBkaXNhYmxlZD4uLi5kaXNhYmxlZCBidXR0b24uLi48L2J1dHRvbj5cbiovIiwiQG1peGluIGZvY3VzLXZhcmlhbnQge1xyXG4gICY6Zm9jdXMge1xyXG4gICAgb3V0bGluZTogbm9uZTtcclxuICAgIGJveC1zaGFkb3c6IDAgMCAxMHB4IHZhcigtLWZvY3VzLWJveCk7XHJcbiAgfVxyXG59XHJcbiIsIkBpbXBvcnQgXCJtaXhpbi1idG4tdmFyaWFudFwiO1xyXG5cclxuOmhvc3QuYWItYnRuLS1zZWNvbmRhcnkge1xyXG4gIEBpbmNsdWRlIGJ0bi12YXJpYW50KFxyXG4gICAgICB2YXIoLS1idG4tc2Vjb25kYXJ5LWNvbG9yKSxcclxuICAgICAgdmFyKC0tYnRuLXNlY29uZGFyeS1ib3JkZXIpLFxyXG4gICAgICB2YXIoLS1idG4tc2Vjb25kYXJ5LWJnKSxcclxuICAgICAgdmFyKC0tYnRuLXNlY29uZGFyeS1jb2xvci0tYWN0aW9uKSxcclxuICAgICAgdmFyKC0tYnRuLXNlY29uZGFyeS1ib3JkZXItLWFjdGlvbiksXHJcbiAgICAgIHZhcigtLWJ0bi1zZWNvbmRhcnktYmctLWFjdGlvbiksXHJcbiAgKTtcclxufVxyXG4iLCJAaW1wb3J0IFwibWl4aW4tYnRuLWljb24tdmFyaWFudFwiO1xyXG5cclxuOmhvc3QuYWItYnRuLS1pY29uIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcclxuICBwYWRkaW5nOiAwO1xyXG4gIEBpbmNsdWRlIGJ0bi1pY29uLXZhcmlhbnQ7XHJcbn1cclxuIiwiQGltcG9ydCBcIn5zcmMvc3R5bGVzL2NvcmUvbWl4aW5zL21peGluLWZsZXgtdmFyaWFudFwiO1xyXG5AaW1wb3J0IFwifnNyYy9zdHlsZXMvY29yZS9taXhpbnMvbWl4aW4tZm9jdXMtdmFyaWFudFwiO1xyXG5cclxuQG1peGluIGJ0bi1pY29uLXZhcmlhbnQge1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxuICBib3JkZXI6IHVuc2V0O1xyXG4gIGNvbG9yOiBjdXJyZW50Q29sb3I7XHJcbiAgQGluY2x1ZGUgZmxleC12YXJpYW50KGlubGluZS1mbGV4LCBjZW50ZXIsIGNlbnRlcik7XHJcbiAgQGluY2x1ZGUgZm9jdXMtdmFyaWFudDtcclxufVxyXG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ButtonComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'button[app-button]',
                template: `
    <svg-icon class="ab-btn__ico"
              *ngIf="iconName"
              aria-hidden="true"
              src="assets/icons/{{iconName}}.svg"></svg-icon>
    <span><ng-content></ng-content></span>
  `,
                styleUrls: ['./button.component.scss']
            }]
    }], null, { theme: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], type: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], iconName: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], isPrimary: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"],
            args: ['class.ab-btn--primary']
        }], isSecondary: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"],
            args: ['class.ab-btn--secondary']
        }], isIcon: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"],
            args: ['class.ab-btn--icon']
        }], isType: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"],
            args: ['attr.type']
        }] }); })();


/***/ }),

/***/ "./src/app/shared/components/card/card.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/shared/components/card/card.component.ts ***!
  \**********************************************************/
/*! exports provided: CardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CardComponent", function() { return CardComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");



function CardComponent_div_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](1, 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
const _c0 = [[["", "card-head", ""]], [["", "card-body", ""]], [["", "card-footer", ""]]];
const _c1 = ["[card-head]", "[card-body]", "[card-footer]"];
class CardComponent {
    constructor() {
        this.showFooter = false;
    }
}
CardComponent.ɵfac = function CardComponent_Factory(t) { return new (t || CardComponent)(); };
CardComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: CardComponent, selectors: [["app-card"]], inputs: { showFooter: "showFooter" }, ngContentSelectors: _c1, decls: 6, vars: 1, consts: [[1, "ab-card"], [1, "ab-card__head"], [1, "ab-card__body"], ["class", "ab-card__footer", 4, "ngIf"], [1, "ab-card__footer"]], template: function CardComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"](_c0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](4, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, CardComponent_div_5_Template, 2, 0, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.showFooter);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgIf"]], styles: [".ab-card[_ngcontent-%COMP%] {\n  border: 1px solid var(--card-border);\n  display: flex;\n  flex-direction: column;\n  border-radius: 2px;\n  width: 100%;\n}\n.ab-card__head[_ngcontent-%COMP%], .ab-card__body[_ngcontent-%COMP%], .ab-card__footer[_ngcontent-%COMP%] {\n  padding: 16px;\n}\n.ab-card__head[_ngcontent-%COMP%] {\n  font-family: \"Proxima Extra Bold\", Arial, sans-serif;\n}\n.ab-card__body[_ngcontent-%COMP%] {\n  flex: 1;\n}\n[_nghost-%COMP%] {\n  display: flex;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9zdHlsZXMvY29yZS92YXJpYWJsZXMvdmFyaWFibGVzLnNjc3MiLCJzcmMvc3R5bGVzL2NvbXBvbmVudHMvY2FyZHMvY2FyZC5zY3NzIiwic3JjL2FwcC9zaGFyZWQvY29tcG9uZW50cy9jYXJkL2NhcmQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7O0NBQUE7QUFXQTs7Q0FBQTtBQU1BOztDQUFBO0FBT0E7O0NBQUE7QUFNQTs7Q0FBQTtBQUtBOztDQUFBO0FBS0E7O0NBQUE7QUFRQTs7Q0FBQTtBQU1BOztDQUFBO0FBS0E7O0NBQUE7QUFXQTs7Q0FBQTtBQVNBOztDQUFBO0FBS0E7O0NBQUE7QUFPQTs7Q0FBQTtBQUtBOztDQUFBO0FBUUE7O0NBQUE7QUFPQTs7Q0FBQTtBQU9BOztDQUFBO0FBT0E7O0NBQUE7QUFTQTs7Q0FBQTtBQ3BJQTtFQUNFLG9DQUFBO0VBQ0EsYUFBQTtFQUNBLHNCQUFBO0VBQ0Esa0JEZ0NtQjtFQy9CbkIsV0FBQTtBQzJERjtBRHpERTtFQUdFLGFEK0JTO0FFMEJiO0FEdERFO0VBQ0Usb0REYnFCO0FFcUV6QjtBRHJERTtFQUNFLE9BQUE7QUN1REo7QUF6RUE7RUFDRSxhQUFBO0FBNEVGIiwiZmlsZSI6InNyYy9hcHAvc2hhcmVkL2NvbXBvbmVudHMvY2FyZC9jYXJkLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLypcclxuKiBGb250LlxyXG4qL1xyXG4kZm9udC1mYW1pbHktZXh0cmEtYm9sZDogJ1Byb3hpbWEgRXh0cmEgQm9sZCcsIEFyaWFsLCBzYW5zLXNlcmlmO1xyXG4kZm9udC1mYW1pbHktYm9sZDogJ1Byb3hpbWEgQm9sZCcsIEFyaWFsLCBzYW5zLXNlcmlmO1xyXG4kZm9udC1mYW1pbHktcmVndWxhcjogJ1Byb3hpbWEgUmVnJywgQXJpYWwsIHNhbnMtc2VyaWY7XHJcblxyXG4kZm9udC1zaXplLWxnOiAyNHB4O1xyXG4kZm9udC1zaXplLW1kOiAxNnB4O1xyXG4kZm9udC1zaXplLWJhc2U6IDE0cHg7XHJcblxyXG4vKlxyXG4qIEJvZHkuXHJcbiovXHJcbiRib2R5LWZvbnQtc2l6ZTogJGZvbnQtc2l6ZS1iYXNlO1xyXG4kYm9keS1mb250LWZhbWlseTogJGZvbnQtZmFtaWx5LXJlZ3VsYXI7XHJcblxyXG4vKlxyXG4qIFNjcmVlbnMuXHJcbiovXHJcbiRzY3JlZW4tc3g6IDY0MHB4O1xyXG4kc2NyZWVuLW1kOiA3ODBweDtcclxuJHNjcmVlbi1sZzogMTIwMHB4O1xyXG5cclxuLypcclxuKiBaLWluZGV4LlxyXG4qL1xyXG4kei1pbmRleC1kcm9wZG93bjogMjtcclxuJHotaW5kZXgtc2lkZWJhcjogMztcclxuXHJcbi8qXHJcbiogU2Nyb2xsYmFyLlxyXG4qL1xyXG4kc2Nyb2xsYmFyLXNpemU6IDhweDtcclxuXHJcbi8qXHJcbiogQm9yZGVyIFJhZGl1cy5cclxuKi9cclxuJGJvcmRlci1yYWRpdXMtYmFzZTogMnB4O1xyXG5cclxuLypcclxuKiBTcGFjZXMuXHJcbiovXHJcbiRzcGFjZS1iYXNlOiAxNnB4O1xyXG4kc3BhY2UtYmFzZS1kb3VibGU6ICRzcGFjZS1iYXNlKjI7XHJcbiRzcGFjZS1iYXNlLWhhbGY6ICRzcGFjZS1iYXNlLzI7XHJcbiRzcGFjZS1zbWFsbDogJHNwYWNlLWJhc2UvNDtcclxuXHJcbi8qXHJcbiogQ29udHJvbHMgKHVzZSBmb3IgaW5wdXQgfHwgc2VsZWN0b3IgfHwgYnV0dG9ucykuXHJcbiovXHJcbiRjb250cm9sLWhlaWdodDogNDBweDtcclxuJGNvbnRyb2wtc3BhY2VzOiAkc3BhY2Utc21hbGwgJHNwYWNlLWJhc2U7XHJcblxyXG4vKlxyXG4qIEFuaW1hdGlvbi5cclxuKi9cclxuJHRyYW5zaXRpb24tYmFzZTogMjcwbXMgZWFzZS1pbi1vdXQ7XHJcblxyXG4vKlxyXG4qIE5hdmJhci5cclxuKi9cclxuJG5hdmJhci1zcGFjZXM6ICRzcGFjZS1iYXNlO1xyXG4kbmF2YmFyLWZvbnQtc2l6ZTogJGZvbnQtc2l6ZS1sZztcclxuXHJcbiRuYXZiYXItbGluay1oZWlnaHQ6ICRjb250cm9sLWhlaWdodDtcclxuJG5hdmJhci1saW5rLXNwYWNlczogJHNwYWNlLWJhc2UgMDtcclxuJG5hdmJhci1saW5rLWZvbnQtZmFtaWx5OiAkZm9udC1mYW1pbHktYm9sZDtcclxuJG5hdmJhci1saW5rLWZvbnQtc2l6ZTogJGZvbnQtc2l6ZS1tZDtcclxuXHJcbi8qXHJcbiogQnV0dG9ucy5cclxuKi9cclxuJGJ0bi1oZWlnaHQ6ICRjb250cm9sLWhlaWdodCAtIDEwcHg7XHJcbiRidG4td2lkdGg6IDE1MHB4O1xyXG4kYnRuLXNwYWNlczogJGNvbnRyb2wtc3BhY2VzO1xyXG4kYnRuLWZvbnQtZmFtaWx5OiAkZm9udC1mYW1pbHktYm9sZDtcclxuJGJ0bi1pY29uLXNwYWNlOiAkc3BhY2Utc21hbGw7XHJcblxyXG4vKlxyXG4qIEljb25zLlxyXG4qL1xyXG4kaWNvLXNpemUtYmFzZTogJGZvbnQtc2l6ZS1sZztcclxuXHJcbi8qXHJcbiogU2VhcmNoIElucHV0LlxyXG4qL1xyXG4kc2VhcmNoLWhlaWdodDogJGNvbnRyb2wtaGVpZ2h0O1xyXG4kc2VhcmNoLXNwYWNlczogJGNvbnRyb2wtc3BhY2VzO1xyXG4kc2VhcmNoLWljb24tc3BhY2VzOiAkc3BhY2UtYmFzZTtcclxuXHJcbi8qXHJcbiogQ2hlY2tCb3guXHJcbiovXHJcbiRjaGVja2JveC1zaXplOiAkZm9udC1zaXplLWxnO1xyXG5cclxuLypcclxuKiBEcm9wZG93bi5cclxuKi9cclxuJGRyb3Bkb3duLWhlaWdodDogJGNvbnRyb2wtaGVpZ2h0O1xyXG4kZHJvcGRvd24tYnRuLXNwYWNlczogJGNvbnRyb2wtc3BhY2VzO1xyXG4kZHJvcGRvd24tbWVudS1oZWlnaHQ6IDIwMHB4O1xyXG4kZHJvcGRvd24tbWVudS1pdGVtLXNwYWNlczogJHNwYWNlLWJhc2U7XHJcblxyXG4vKlxyXG4qIENhcmQuXHJcbiovXHJcbiRjYXJkLXNwYWNlczogJHNwYWNlLWJhc2U7XHJcbiRjYXJkLXJhZGl1czogJGJvcmRlci1yYWRpdXMtYmFzZTtcclxuJGNhcmQtaGVhZC1mb250LWZhbWlseTogJGZvbnQtZmFtaWx5LWV4dHJhLWJvbGQ7XHJcblxyXG4vKlxyXG4qIE5vIERhdGEuXHJcbiovXHJcbiRuby1kYXRhLWZvbnQtZmFtaWx5OiAkZm9udC1mYW1pbHktZXh0cmEtYm9sZDtcclxuJG5vLWRhdGEtZm9udC1zaXplOiAkZm9udC1zaXplLWxnO1xyXG4kbm8tZGF0YS1zcGFjZXM6ICRzcGFjZS1iYXNlLWRvdWJsZSAwO1xyXG5cclxuLypcclxuKiBUYWJzLlxyXG4qL1xyXG4kdGFiLXNwYWNlczogJHNwYWNlLWJhc2U7XHJcbiR0YWItaGVhZC13aWR0aDogMTUwcHg7XHJcbiR0YWItaGVhZC1ib3JkZXI6IDNweDtcclxuXHJcbi8qXHJcbiogU2lkZWJhci5cclxuKi9cclxuJHNpZGViYXItc3BhY2VzOiAkc3BhY2UtYmFzZTtcclxuJHNpZGViYXItd2lkdGg6IDMwMHB4O1xyXG4kc2lkZWJhci1oZWFkLWhlaWdodDogNjBweDtcclxuJHNpZGViYXItdGl0bGUtZm9udC1mYW1pbHk6ICRmb250LWZhbWlseS1leHRyYS1ib2xkO1xyXG4kc2lkZWJhci10aXRsZS1mb250LXNpemU6ICRmb250LXNpemUtbGc7XHJcblxyXG4vKlxyXG4qIEZvcm0uXHJcbiovXHJcbiRmb3JtLXJvdy1zcGFjZXM6ICRzcGFjZS1iYXNlLWhhbGYgMDtcclxuIiwiQGltcG9ydCAnfnNyYy9zdHlsZXMvY29yZS92YXJpYWJsZXMvdmFyaWFibGVzJztcclxuXHJcbi5hYi1jYXJkIHtcclxuICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1jYXJkLWJvcmRlcik7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIGJvcmRlci1yYWRpdXM6ICRjYXJkLXJhZGl1cztcclxuICB3aWR0aDogMTAwJTtcclxuXHJcbiAgJl9faGVhZCxcclxuICAmX19ib2R5LFxyXG4gICZfX2Zvb3RlciB7XHJcbiAgICBwYWRkaW5nOiAkY2FyZC1zcGFjZXM7XHJcbiAgfVxyXG5cclxuICAmX19oZWFkIHtcclxuICAgIGZvbnQtZmFtaWx5OiAkY2FyZC1oZWFkLWZvbnQtZmFtaWx5O1xyXG4gIH1cclxuXHJcbiAgJl9fYm9keSB7XHJcbiAgICBmbGV4OiAxO1xyXG4gIH1cclxufVxyXG4iLCIvKlxuKiBGb250LlxuKi9cbi8qXG4qIEJvZHkuXG4qL1xuLypcbiogU2NyZWVucy5cbiovXG4vKlxuKiBaLWluZGV4LlxuKi9cbi8qXG4qIFNjcm9sbGJhci5cbiovXG4vKlxuKiBCb3JkZXIgUmFkaXVzLlxuKi9cbi8qXG4qIFNwYWNlcy5cbiovXG4vKlxuKiBDb250cm9scyAodXNlIGZvciBpbnB1dCB8fCBzZWxlY3RvciB8fCBidXR0b25zKS5cbiovXG4vKlxuKiBBbmltYXRpb24uXG4qL1xuLypcbiogTmF2YmFyLlxuKi9cbi8qXG4qIEJ1dHRvbnMuXG4qL1xuLypcbiogSWNvbnMuXG4qL1xuLypcbiogU2VhcmNoIElucHV0LlxuKi9cbi8qXG4qIENoZWNrQm94LlxuKi9cbi8qXG4qIERyb3Bkb3duLlxuKi9cbi8qXG4qIENhcmQuXG4qL1xuLypcbiogTm8gRGF0YS5cbiovXG4vKlxuKiBUYWJzLlxuKi9cbi8qXG4qIFNpZGViYXIuXG4qL1xuLypcbiogRm9ybS5cbiovXG4uYWItY2FyZCB7XG4gIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWNhcmQtYm9yZGVyKTtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgYm9yZGVyLXJhZGl1czogMnB4O1xuICB3aWR0aDogMTAwJTtcbn1cbi5hYi1jYXJkX19oZWFkLCAuYWItY2FyZF9fYm9keSwgLmFiLWNhcmRfX2Zvb3RlciB7XG4gIHBhZGRpbmc6IDE2cHg7XG59XG4uYWItY2FyZF9faGVhZCB7XG4gIGZvbnQtZmFtaWx5OiBcIlByb3hpbWEgRXh0cmEgQm9sZFwiLCBBcmlhbCwgc2Fucy1zZXJpZjtcbn1cbi5hYi1jYXJkX19ib2R5IHtcbiAgZmxleDogMTtcbn1cblxuOmhvc3Qge1xuICBkaXNwbGF5OiBmbGV4O1xufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CardComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-card',
                templateUrl: './card.component.html',
                styleUrls: ['./card.component.scss']
            }]
    }], null, { showFooter: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "./src/app/shared/components/content/content.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/shared/components/content/content.component.ts ***!
  \****************************************************************/
/*! exports provided: ContentComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContentComponent", function() { return ContentComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");



function ContentComponent_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](0, 0, ["*ngIf", "data?.length>0"]);
} }
function ContentComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](1, 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
const _c0 = [[["", "content", ""]], [["", "no-content", ""]]];
const _c1 = ["[content]", "[no-content]"];
class ContentComponent {
    constructor() {
        this.data = [];
    }
}
ContentComponent.ɵfac = function ContentComponent_Factory(t) { return new (t || ContentComponent)(); };
ContentComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ContentComponent, selectors: [["app-content"]], inputs: { data: "data" }, ngContentSelectors: _c1, decls: 2, vars: 2, consts: [[4, "ngIf"], ["class", "ab-content__empty", 4, "ngIf"], [1, "ab-content__empty"]], template: function ContentComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"](_c0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, ContentComponent_0_Template, 1, 0, undefined, 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ContentComponent_div_1_Template, 2, 0, "div", 1);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (ctx.data == null ? null : ctx.data.length) > 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !(ctx.data == null ? null : ctx.data.length));
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgIf"]], styles: ["[_nghost-%COMP%] {\n  display: flex;\n  flex: 1;\n}\n.ab-content__empty[_ngcontent-%COMP%] {\n  font-family: \"Proxima Extra Bold\", Arial, sans-serif;\n  font-size: 24px;\n  color: currentColor;\n  padding: 32px 0;\n  text-align: center;\n  flex: 1;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9zdHlsZXMvY29yZS92YXJpYWJsZXMvdmFyaWFibGVzLnNjc3MiLCJzcmMvYXBwL3NoYXJlZC9jb21wb25lbnRzL2NvbnRlbnQvY29udGVudC5jb21wb25lbnQuc2NzcyIsInNyYy9zdHlsZXMvY29yZS9taXhpbnMvbWl4aW4tbm8tZGF0YS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOztDQUFBO0FBV0E7O0NBQUE7QUFNQTs7Q0FBQTtBQU9BOztDQUFBO0FBTUE7O0NBQUE7QUFLQTs7Q0FBQTtBQUtBOztDQUFBO0FBUUE7O0NBQUE7QUFNQTs7Q0FBQTtBQUtBOztDQUFBO0FBV0E7O0NBQUE7QUFTQTs7Q0FBQTtBQUtBOztDQUFBO0FBT0E7O0NBQUE7QUFLQTs7Q0FBQTtBQVFBOztDQUFBO0FBT0E7O0NBQUE7QUFPQTs7Q0FBQTtBQU9BOztDQUFBO0FBU0E7O0NBQUE7QUNwSUE7RUFHRSxhQUFBO0VBQ0EsT0FBQTtBQXlERjtBQXREQTtFQ05FLG9EQUFBO0VBQ0EsZUZHYTtFRUZiLG1CQUFBO0VBQ0EsZUY4R2U7RUN6R2Ysa0JBQUE7RUFDQSxPQUFBO0FBNERGIiwiZmlsZSI6InNyYy9hcHAvc2hhcmVkL2NvbXBvbmVudHMvY29udGVudC9jb250ZW50LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLypcclxuKiBGb250LlxyXG4qL1xyXG4kZm9udC1mYW1pbHktZXh0cmEtYm9sZDogJ1Byb3hpbWEgRXh0cmEgQm9sZCcsIEFyaWFsLCBzYW5zLXNlcmlmO1xyXG4kZm9udC1mYW1pbHktYm9sZDogJ1Byb3hpbWEgQm9sZCcsIEFyaWFsLCBzYW5zLXNlcmlmO1xyXG4kZm9udC1mYW1pbHktcmVndWxhcjogJ1Byb3hpbWEgUmVnJywgQXJpYWwsIHNhbnMtc2VyaWY7XHJcblxyXG4kZm9udC1zaXplLWxnOiAyNHB4O1xyXG4kZm9udC1zaXplLW1kOiAxNnB4O1xyXG4kZm9udC1zaXplLWJhc2U6IDE0cHg7XHJcblxyXG4vKlxyXG4qIEJvZHkuXHJcbiovXHJcbiRib2R5LWZvbnQtc2l6ZTogJGZvbnQtc2l6ZS1iYXNlO1xyXG4kYm9keS1mb250LWZhbWlseTogJGZvbnQtZmFtaWx5LXJlZ3VsYXI7XHJcblxyXG4vKlxyXG4qIFNjcmVlbnMuXHJcbiovXHJcbiRzY3JlZW4tc3g6IDY0MHB4O1xyXG4kc2NyZWVuLW1kOiA3ODBweDtcclxuJHNjcmVlbi1sZzogMTIwMHB4O1xyXG5cclxuLypcclxuKiBaLWluZGV4LlxyXG4qL1xyXG4kei1pbmRleC1kcm9wZG93bjogMjtcclxuJHotaW5kZXgtc2lkZWJhcjogMztcclxuXHJcbi8qXHJcbiogU2Nyb2xsYmFyLlxyXG4qL1xyXG4kc2Nyb2xsYmFyLXNpemU6IDhweDtcclxuXHJcbi8qXHJcbiogQm9yZGVyIFJhZGl1cy5cclxuKi9cclxuJGJvcmRlci1yYWRpdXMtYmFzZTogMnB4O1xyXG5cclxuLypcclxuKiBTcGFjZXMuXHJcbiovXHJcbiRzcGFjZS1iYXNlOiAxNnB4O1xyXG4kc3BhY2UtYmFzZS1kb3VibGU6ICRzcGFjZS1iYXNlKjI7XHJcbiRzcGFjZS1iYXNlLWhhbGY6ICRzcGFjZS1iYXNlLzI7XHJcbiRzcGFjZS1zbWFsbDogJHNwYWNlLWJhc2UvNDtcclxuXHJcbi8qXHJcbiogQ29udHJvbHMgKHVzZSBmb3IgaW5wdXQgfHwgc2VsZWN0b3IgfHwgYnV0dG9ucykuXHJcbiovXHJcbiRjb250cm9sLWhlaWdodDogNDBweDtcclxuJGNvbnRyb2wtc3BhY2VzOiAkc3BhY2Utc21hbGwgJHNwYWNlLWJhc2U7XHJcblxyXG4vKlxyXG4qIEFuaW1hdGlvbi5cclxuKi9cclxuJHRyYW5zaXRpb24tYmFzZTogMjcwbXMgZWFzZS1pbi1vdXQ7XHJcblxyXG4vKlxyXG4qIE5hdmJhci5cclxuKi9cclxuJG5hdmJhci1zcGFjZXM6ICRzcGFjZS1iYXNlO1xyXG4kbmF2YmFyLWZvbnQtc2l6ZTogJGZvbnQtc2l6ZS1sZztcclxuXHJcbiRuYXZiYXItbGluay1oZWlnaHQ6ICRjb250cm9sLWhlaWdodDtcclxuJG5hdmJhci1saW5rLXNwYWNlczogJHNwYWNlLWJhc2UgMDtcclxuJG5hdmJhci1saW5rLWZvbnQtZmFtaWx5OiAkZm9udC1mYW1pbHktYm9sZDtcclxuJG5hdmJhci1saW5rLWZvbnQtc2l6ZTogJGZvbnQtc2l6ZS1tZDtcclxuXHJcbi8qXHJcbiogQnV0dG9ucy5cclxuKi9cclxuJGJ0bi1oZWlnaHQ6ICRjb250cm9sLWhlaWdodCAtIDEwcHg7XHJcbiRidG4td2lkdGg6IDE1MHB4O1xyXG4kYnRuLXNwYWNlczogJGNvbnRyb2wtc3BhY2VzO1xyXG4kYnRuLWZvbnQtZmFtaWx5OiAkZm9udC1mYW1pbHktYm9sZDtcclxuJGJ0bi1pY29uLXNwYWNlOiAkc3BhY2Utc21hbGw7XHJcblxyXG4vKlxyXG4qIEljb25zLlxyXG4qL1xyXG4kaWNvLXNpemUtYmFzZTogJGZvbnQtc2l6ZS1sZztcclxuXHJcbi8qXHJcbiogU2VhcmNoIElucHV0LlxyXG4qL1xyXG4kc2VhcmNoLWhlaWdodDogJGNvbnRyb2wtaGVpZ2h0O1xyXG4kc2VhcmNoLXNwYWNlczogJGNvbnRyb2wtc3BhY2VzO1xyXG4kc2VhcmNoLWljb24tc3BhY2VzOiAkc3BhY2UtYmFzZTtcclxuXHJcbi8qXHJcbiogQ2hlY2tCb3guXHJcbiovXHJcbiRjaGVja2JveC1zaXplOiAkZm9udC1zaXplLWxnO1xyXG5cclxuLypcclxuKiBEcm9wZG93bi5cclxuKi9cclxuJGRyb3Bkb3duLWhlaWdodDogJGNvbnRyb2wtaGVpZ2h0O1xyXG4kZHJvcGRvd24tYnRuLXNwYWNlczogJGNvbnRyb2wtc3BhY2VzO1xyXG4kZHJvcGRvd24tbWVudS1oZWlnaHQ6IDIwMHB4O1xyXG4kZHJvcGRvd24tbWVudS1pdGVtLXNwYWNlczogJHNwYWNlLWJhc2U7XHJcblxyXG4vKlxyXG4qIENhcmQuXHJcbiovXHJcbiRjYXJkLXNwYWNlczogJHNwYWNlLWJhc2U7XHJcbiRjYXJkLXJhZGl1czogJGJvcmRlci1yYWRpdXMtYmFzZTtcclxuJGNhcmQtaGVhZC1mb250LWZhbWlseTogJGZvbnQtZmFtaWx5LWV4dHJhLWJvbGQ7XHJcblxyXG4vKlxyXG4qIE5vIERhdGEuXHJcbiovXHJcbiRuby1kYXRhLWZvbnQtZmFtaWx5OiAkZm9udC1mYW1pbHktZXh0cmEtYm9sZDtcclxuJG5vLWRhdGEtZm9udC1zaXplOiAkZm9udC1zaXplLWxnO1xyXG4kbm8tZGF0YS1zcGFjZXM6ICRzcGFjZS1iYXNlLWRvdWJsZSAwO1xyXG5cclxuLypcclxuKiBUYWJzLlxyXG4qL1xyXG4kdGFiLXNwYWNlczogJHNwYWNlLWJhc2U7XHJcbiR0YWItaGVhZC13aWR0aDogMTUwcHg7XHJcbiR0YWItaGVhZC1ib3JkZXI6IDNweDtcclxuXHJcbi8qXHJcbiogU2lkZWJhci5cclxuKi9cclxuJHNpZGViYXItc3BhY2VzOiAkc3BhY2UtYmFzZTtcclxuJHNpZGViYXItd2lkdGg6IDMwMHB4O1xyXG4kc2lkZWJhci1oZWFkLWhlaWdodDogNjBweDtcclxuJHNpZGViYXItdGl0bGUtZm9udC1mYW1pbHk6ICRmb250LWZhbWlseS1leHRyYS1ib2xkO1xyXG4kc2lkZWJhci10aXRsZS1mb250LXNpemU6ICRmb250LXNpemUtbGc7XHJcblxyXG4vKlxyXG4qIEZvcm0uXHJcbiovXHJcbiRmb3JtLXJvdy1zcGFjZXM6ICRzcGFjZS1iYXNlLWhhbGYgMDtcclxuIiwiQGltcG9ydCAnfnNyYy9zdHlsZXMvY29yZS9taXhpbnMvbWl4aW4tbm8tZGF0YSc7XHJcblxyXG46aG9zdCB7XHJcblxyXG4gIC8vIFN0cmV0Y2ggY29udGFpbmVyIGZ1bGwgc2NyZWVuLlxyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleDogMTtcclxufVxyXG5cclxuLmFiLWNvbnRlbnRfX2VtcHR5IHtcclxuICBAaW5jbHVkZSBuby1kYXRhO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBmbGV4OiAxO1xyXG59XHJcbiIsIkBpbXBvcnQgXCJ+c3JjL3N0eWxlcy9jb3JlL3ZhcmlhYmxlcy92YXJpYWJsZXNcIjtcclxuXHJcbkBtaXhpbiBuby1kYXRhIHtcclxuICBmb250LWZhbWlseTogJG5vLWRhdGEtZm9udC1mYW1pbHk7XHJcbiAgZm9udC1zaXplOiAkbm8tZGF0YS1mb250LXNpemU7XHJcbiAgY29sb3I6IGN1cnJlbnRDb2xvcjtcclxuICBwYWRkaW5nOiAkbm8tZGF0YS1zcGFjZXM7XHJcbn1cclxuIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ContentComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-content',
                templateUrl: './content.component.html',
                styleUrls: ['./content.component.scss']
            }]
    }], null, { data: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "./src/app/shared/components/dropdown/dropdown.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/shared/components/dropdown/dropdown.component.ts ***!
  \******************************************************************/
/*! exports provided: DropdownComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DropdownComponent", function() { return DropdownComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var angular_svg_icon__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! angular-svg-icon */ "./node_modules/angular-svg-icon/__ivy_ngcc__/fesm2015/angular-svg-icon.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");




function DropdownComponent_ul_5_li_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r2.title);
} }
function DropdownComponent_ul_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ul", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, DropdownComponent_ul_5_li_1_Template, 2, 1, "li", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r0.list);
} }
class DropdownComponent {
    constructor() {
        this.list = [];
        this.isOpen = false;
    }
    toggle() {
        this.isOpen = !this.isOpen;
    }
}
DropdownComponent.ɵfac = function DropdownComponent_Factory(t) { return new (t || DropdownComponent)(); };
DropdownComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: DropdownComponent, selectors: [["app-dropdown"]], inputs: { list: "list", dropdownTitle: "dropdownTitle" }, decls: 6, vars: 5, consts: [[1, "ab-dropdown"], ["aria-haspopup", "listbox", "aria-labelledby", "elem", "type", "button", 1, "ab-dropdown__btn", 3, "disabled", "click"], ["aria-hidden", "true", "src", "assets/icons/arrow_right.svg", 1, "ab-dropdown__ico"], ["class", "ab-dropdown__menu", "tabindex", "-1", "role", "listbox", "aria-labelledby", "elem", 4, "ngIf"], ["tabindex", "-1", "role", "listbox", "aria-labelledby", "elem", 1, "ab-dropdown__menu"], ["class", "ab-dropdown__menu__item", "role", "option", 4, "ngFor", "ngForOf"], ["role", "option", 1, "ab-dropdown__menu__item"]], template: function DropdownComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DropdownComponent_Template_button_click_1_listener() { return ctx.toggle(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "svg-icon", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, DropdownComponent_ul_5_Template, 2, 1, "ul", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", !ctx.list.length);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.dropdownTitle);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("is-open", ctx.isOpen);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isOpen);
    } }, directives: [angular_svg_icon__WEBPACK_IMPORTED_MODULE_1__["SvgIconComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"]], styles: [".ab-dropdown[_ngcontent-%COMP%] {\n  position: relative;\n}\n.ab-dropdown__btn[_ngcontent-%COMP%] {\n  height: 40px;\n  width: 100%;\n  padding: 4px 16px;\n  font-size: 14px;\n  cursor: pointer;\n  border: 1px solid var(--dropdown-border);\n  color: currentColor;\n  background-color: transparent;\n  border-radius: 2px;\n  display: inline-flex;\n  justify-content: center;\n  align-items: center;\n}\n.ab-dropdown__btn[_ngcontent-%COMP%]:focus {\n  outline: none;\n  box-shadow: 0 0 10px var(--focus-box);\n}\n.ab-dropdown__btn[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  flex: 1;\n  padding: 0 8px;\n  text-align: left;\n}\n.ab-dropdown__ico[_ngcontent-%COMP%] {\n  transform: rotate(90deg);\n}\n.ab-dropdown__ico.is-open[_ngcontent-%COMP%] {\n  transform: rotate(-90deg);\n}\n.ab-dropdown__menu[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 100%;\n  width: 100%;\n  margin-top: -1px;\n  border: 1px solid var(--dropdown-border);\n  background-color: var(--dropdown-bg);\n  z-index: 2;\n  max-height: 200px;\n  overflow: hidden;\n  overflow-y: auto;\n}\n.ab-dropdown__menu[_ngcontent-%COMP%]:focus {\n  outline: none;\n  box-shadow: 0 0 10px var(--focus-box);\n}\n.ab-dropdown__menu__item[_ngcontent-%COMP%] {\n  padding: 16px;\n  cursor: pointer;\n  text-align: left;\n}\n.ab-dropdown__menu__item[_ngcontent-%COMP%]:focus {\n  outline: none;\n  box-shadow: 0 0 10px var(--focus-box);\n}\n.ab-dropdown__menu__item[_ngcontent-%COMP%]:not(:first-child) {\n  border-top: 1px solid var(--dropdown-border);\n}\n.ab-dropdown__menu__item[_ngcontent-%COMP%]:active, .ab-dropdown__menu__item[_ngcontent-%COMP%]:focus, .ab-dropdown__menu__item[_ngcontent-%COMP%]:hover {\n  background-color: var(--dropdown-bg--action);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9zdHlsZXMvY29yZS92YXJpYWJsZXMvdmFyaWFibGVzLnNjc3MiLCJzcmMvc3R5bGVzL2NvbXBvbmVudHMvZHJvcGRvd24uc2NzcyIsInNyYy9hcHAvc2hhcmVkL2NvbXBvbmVudHMvZHJvcGRvd24vZHJvcGRvd24uY29tcG9uZW50LnNjc3MiLCJzcmMvc3R5bGVzL2NvcmUvbWl4aW5zL21peGluLWZsZXgtdmFyaWFudC5zY3NzIiwic3JjL3N0eWxlcy9jb3JlL21peGlucy9taXhpbi1mb2N1cy12YXJpYW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7O0NBQUE7QUFXQTs7Q0FBQTtBQU1BOztDQUFBO0FBT0E7O0NBQUE7QUFNQTs7Q0FBQTtBQUtBOztDQUFBO0FBS0E7O0NBQUE7QUFRQTs7Q0FBQTtBQU1BOztDQUFBO0FBS0E7O0NBQUE7QUFXQTs7Q0FBQTtBQVNBOztDQUFBO0FBS0E7O0NBQUE7QUFPQTs7Q0FBQTtBQUtBOztDQUFBO0FBUUE7O0NBQUE7QUFPQTs7Q0FBQTtBQU9BOztDQUFBO0FBT0E7O0NBQUE7QUFTQTs7Q0FBQTtBQ2xJQTtFQUNFLGtCQUFBO0FDeURGO0FEdkRFO0VBQ0UsWUQyQ2E7RUMxQ2IsV0FBQTtFQUNBLGlCRDBDYTtFQ3pDYixlREZhO0VDR2IsZUFBQTtFQUNBLHdDQUFBO0VBQ0EsbUJBQUE7RUFDQSw2QkFBQTtFQUNBLGtCRHNCaUI7RUdyQ25CLG9CRmdCd0I7RUVmeEIsdUJGZXFDO0VFZHJDLG1CRmM2QztBQzJEL0M7QUUzRUU7RUFDRSxhQUFBO0VBQ0EscUNBQUE7QUY2RUo7QUQ1REk7RUFDRSxPQUFBO0VBQ0EsY0FBQTtFQUNBLGdCQUFBO0FDOEROO0FEMURFO0VBQ0Usd0JBQUE7QUM0REo7QUQxREk7RUFDRSx5QkFBQTtBQzRETjtBRHhERTtFQUNFLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLFdBQUE7RUFDQSxnQkFBQTtFQUNBLHdDQUFBO0VBQ0Esb0NBQUE7RUFDQSxVRGZlO0VDZ0JmLGlCRDBEbUI7RUN6RG5CLGdCQUFBO0VBQ0EsZ0JBQUE7QUMwREo7QUV0R0U7RUFDRSxhQUFBO0VBQ0EscUNBQUE7QUZ3R0o7QUQzREk7RUFDRSxhRE5PO0VDT1AsZUFBQTtFQUNBLGdCQUFBO0FDNkROO0FFL0dFO0VBQ0UsYUFBQTtFQUNBLHFDQUFBO0FGaUhKO0FEOURNO0VBQ0UsNENBQUE7QUNnRVI7QUQ3RE07RUFHRSw0Q0FBQTtBQzZEUiIsImZpbGUiOiJzcmMvYXBwL3NoYXJlZC9jb21wb25lbnRzL2Ryb3Bkb3duL2Ryb3Bkb3duLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLypcclxuKiBGb250LlxyXG4qL1xyXG4kZm9udC1mYW1pbHktZXh0cmEtYm9sZDogJ1Byb3hpbWEgRXh0cmEgQm9sZCcsIEFyaWFsLCBzYW5zLXNlcmlmO1xyXG4kZm9udC1mYW1pbHktYm9sZDogJ1Byb3hpbWEgQm9sZCcsIEFyaWFsLCBzYW5zLXNlcmlmO1xyXG4kZm9udC1mYW1pbHktcmVndWxhcjogJ1Byb3hpbWEgUmVnJywgQXJpYWwsIHNhbnMtc2VyaWY7XHJcblxyXG4kZm9udC1zaXplLWxnOiAyNHB4O1xyXG4kZm9udC1zaXplLW1kOiAxNnB4O1xyXG4kZm9udC1zaXplLWJhc2U6IDE0cHg7XHJcblxyXG4vKlxyXG4qIEJvZHkuXHJcbiovXHJcbiRib2R5LWZvbnQtc2l6ZTogJGZvbnQtc2l6ZS1iYXNlO1xyXG4kYm9keS1mb250LWZhbWlseTogJGZvbnQtZmFtaWx5LXJlZ3VsYXI7XHJcblxyXG4vKlxyXG4qIFNjcmVlbnMuXHJcbiovXHJcbiRzY3JlZW4tc3g6IDY0MHB4O1xyXG4kc2NyZWVuLW1kOiA3ODBweDtcclxuJHNjcmVlbi1sZzogMTIwMHB4O1xyXG5cclxuLypcclxuKiBaLWluZGV4LlxyXG4qL1xyXG4kei1pbmRleC1kcm9wZG93bjogMjtcclxuJHotaW5kZXgtc2lkZWJhcjogMztcclxuXHJcbi8qXHJcbiogU2Nyb2xsYmFyLlxyXG4qL1xyXG4kc2Nyb2xsYmFyLXNpemU6IDhweDtcclxuXHJcbi8qXHJcbiogQm9yZGVyIFJhZGl1cy5cclxuKi9cclxuJGJvcmRlci1yYWRpdXMtYmFzZTogMnB4O1xyXG5cclxuLypcclxuKiBTcGFjZXMuXHJcbiovXHJcbiRzcGFjZS1iYXNlOiAxNnB4O1xyXG4kc3BhY2UtYmFzZS1kb3VibGU6ICRzcGFjZS1iYXNlKjI7XHJcbiRzcGFjZS1iYXNlLWhhbGY6ICRzcGFjZS1iYXNlLzI7XHJcbiRzcGFjZS1zbWFsbDogJHNwYWNlLWJhc2UvNDtcclxuXHJcbi8qXHJcbiogQ29udHJvbHMgKHVzZSBmb3IgaW5wdXQgfHwgc2VsZWN0b3IgfHwgYnV0dG9ucykuXHJcbiovXHJcbiRjb250cm9sLWhlaWdodDogNDBweDtcclxuJGNvbnRyb2wtc3BhY2VzOiAkc3BhY2Utc21hbGwgJHNwYWNlLWJhc2U7XHJcblxyXG4vKlxyXG4qIEFuaW1hdGlvbi5cclxuKi9cclxuJHRyYW5zaXRpb24tYmFzZTogMjcwbXMgZWFzZS1pbi1vdXQ7XHJcblxyXG4vKlxyXG4qIE5hdmJhci5cclxuKi9cclxuJG5hdmJhci1zcGFjZXM6ICRzcGFjZS1iYXNlO1xyXG4kbmF2YmFyLWZvbnQtc2l6ZTogJGZvbnQtc2l6ZS1sZztcclxuXHJcbiRuYXZiYXItbGluay1oZWlnaHQ6ICRjb250cm9sLWhlaWdodDtcclxuJG5hdmJhci1saW5rLXNwYWNlczogJHNwYWNlLWJhc2UgMDtcclxuJG5hdmJhci1saW5rLWZvbnQtZmFtaWx5OiAkZm9udC1mYW1pbHktYm9sZDtcclxuJG5hdmJhci1saW5rLWZvbnQtc2l6ZTogJGZvbnQtc2l6ZS1tZDtcclxuXHJcbi8qXHJcbiogQnV0dG9ucy5cclxuKi9cclxuJGJ0bi1oZWlnaHQ6ICRjb250cm9sLWhlaWdodCAtIDEwcHg7XHJcbiRidG4td2lkdGg6IDE1MHB4O1xyXG4kYnRuLXNwYWNlczogJGNvbnRyb2wtc3BhY2VzO1xyXG4kYnRuLWZvbnQtZmFtaWx5OiAkZm9udC1mYW1pbHktYm9sZDtcclxuJGJ0bi1pY29uLXNwYWNlOiAkc3BhY2Utc21hbGw7XHJcblxyXG4vKlxyXG4qIEljb25zLlxyXG4qL1xyXG4kaWNvLXNpemUtYmFzZTogJGZvbnQtc2l6ZS1sZztcclxuXHJcbi8qXHJcbiogU2VhcmNoIElucHV0LlxyXG4qL1xyXG4kc2VhcmNoLWhlaWdodDogJGNvbnRyb2wtaGVpZ2h0O1xyXG4kc2VhcmNoLXNwYWNlczogJGNvbnRyb2wtc3BhY2VzO1xyXG4kc2VhcmNoLWljb24tc3BhY2VzOiAkc3BhY2UtYmFzZTtcclxuXHJcbi8qXHJcbiogQ2hlY2tCb3guXHJcbiovXHJcbiRjaGVja2JveC1zaXplOiAkZm9udC1zaXplLWxnO1xyXG5cclxuLypcclxuKiBEcm9wZG93bi5cclxuKi9cclxuJGRyb3Bkb3duLWhlaWdodDogJGNvbnRyb2wtaGVpZ2h0O1xyXG4kZHJvcGRvd24tYnRuLXNwYWNlczogJGNvbnRyb2wtc3BhY2VzO1xyXG4kZHJvcGRvd24tbWVudS1oZWlnaHQ6IDIwMHB4O1xyXG4kZHJvcGRvd24tbWVudS1pdGVtLXNwYWNlczogJHNwYWNlLWJhc2U7XHJcblxyXG4vKlxyXG4qIENhcmQuXHJcbiovXHJcbiRjYXJkLXNwYWNlczogJHNwYWNlLWJhc2U7XHJcbiRjYXJkLXJhZGl1czogJGJvcmRlci1yYWRpdXMtYmFzZTtcclxuJGNhcmQtaGVhZC1mb250LWZhbWlseTogJGZvbnQtZmFtaWx5LWV4dHJhLWJvbGQ7XHJcblxyXG4vKlxyXG4qIE5vIERhdGEuXHJcbiovXHJcbiRuby1kYXRhLWZvbnQtZmFtaWx5OiAkZm9udC1mYW1pbHktZXh0cmEtYm9sZDtcclxuJG5vLWRhdGEtZm9udC1zaXplOiAkZm9udC1zaXplLWxnO1xyXG4kbm8tZGF0YS1zcGFjZXM6ICRzcGFjZS1iYXNlLWRvdWJsZSAwO1xyXG5cclxuLypcclxuKiBUYWJzLlxyXG4qL1xyXG4kdGFiLXNwYWNlczogJHNwYWNlLWJhc2U7XHJcbiR0YWItaGVhZC13aWR0aDogMTUwcHg7XHJcbiR0YWItaGVhZC1ib3JkZXI6IDNweDtcclxuXHJcbi8qXHJcbiogU2lkZWJhci5cclxuKi9cclxuJHNpZGViYXItc3BhY2VzOiAkc3BhY2UtYmFzZTtcclxuJHNpZGViYXItd2lkdGg6IDMwMHB4O1xyXG4kc2lkZWJhci1oZWFkLWhlaWdodDogNjBweDtcclxuJHNpZGViYXItdGl0bGUtZm9udC1mYW1pbHk6ICRmb250LWZhbWlseS1leHRyYS1ib2xkO1xyXG4kc2lkZWJhci10aXRsZS1mb250LXNpemU6ICRmb250LXNpemUtbGc7XHJcblxyXG4vKlxyXG4qIEZvcm0uXHJcbiovXHJcbiRmb3JtLXJvdy1zcGFjZXM6ICRzcGFjZS1iYXNlLWhhbGYgMDtcclxuIiwiQGltcG9ydCBcIi4uL2NvcmUvdmFyaWFibGVzL3ZhcmlhYmxlc1wiO1xyXG5AaW1wb3J0IFwiLi4vY29yZS9taXhpbnMvbWl4aW4tZmxleC12YXJpYW50XCI7XHJcbkBpbXBvcnQgXCIuLi9jb3JlL21peGlucy9taXhpbi1mb2N1cy12YXJpYW50XCI7XHJcblxyXG4uYWItZHJvcGRvd24ge1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuXHJcbiAgJl9fYnRuIHtcclxuICAgIGhlaWdodDogJGRyb3Bkb3duLWhlaWdodDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgcGFkZGluZzogJGRyb3Bkb3duLWJ0bi1zcGFjZXM7XHJcbiAgICBmb250LXNpemU6ICRib2R5LWZvbnQtc2l6ZTtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWRyb3Bkb3duLWJvcmRlcik7XHJcbiAgICBjb2xvcjogY3VycmVudENvbG9yO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcbiAgICBib3JkZXItcmFkaXVzOiAkYm9yZGVyLXJhZGl1cy1iYXNlO1xyXG4gICAgQGluY2x1ZGUgZmxleC12YXJpYW50KGlubGluZS1mbGV4LCBjZW50ZXIsIGNlbnRlcik7XHJcbiAgICBAaW5jbHVkZSBmb2N1cy12YXJpYW50O1xyXG5cclxuICAgIHNwYW4ge1xyXG4gICAgICBmbGV4OiAxO1xyXG4gICAgICBwYWRkaW5nOiAwICRzcGFjZS1iYXNlLWhhbGY7XHJcbiAgICAgIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAmX19pY28ge1xyXG4gICAgdHJhbnNmb3JtOiByb3RhdGUoOTBkZWcpO1xyXG5cclxuICAgICYuaXMtb3BlbiB7XHJcbiAgICAgIHRyYW5zZm9ybTogcm90YXRlKC05MGRlZyk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAmX19tZW51IHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHRvcDogMTAwJTtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgbWFyZ2luLXRvcDogLTFweDtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWRyb3Bkb3duLWJvcmRlcik7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1kcm9wZG93bi1iZyk7XHJcbiAgICB6LWluZGV4OiAkei1pbmRleC1kcm9wZG93bjtcclxuICAgIG1heC1oZWlnaHQ6ICRkcm9wZG93bi1tZW51LWhlaWdodDtcclxuICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICBvdmVyZmxvdy15OiBhdXRvO1xyXG4gICAgQGluY2x1ZGUgZm9jdXMtdmFyaWFudDtcclxuXHJcbiAgICAmX19pdGVtIHtcclxuICAgICAgcGFkZGluZzogJGRyb3Bkb3duLW1lbnUtaXRlbS1zcGFjZXM7XHJcbiAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgICAgdGV4dC1hbGlnbjogbGVmdDtcclxuICAgICAgQGluY2x1ZGUgZm9jdXMtdmFyaWFudDtcclxuXHJcbiAgICAgICY6bm90KDpmaXJzdC1jaGlsZCkge1xyXG4gICAgICAgIGJvcmRlci10b3A6IDFweCBzb2xpZCB2YXIoLS1kcm9wZG93bi1ib3JkZXIpO1xyXG4gICAgICB9XHJcblxyXG4gICAgICAmOmFjdGl2ZSxcclxuICAgICAgJjpmb2N1cyxcclxuICAgICAgJjpob3ZlciB7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZHJvcGRvd24tYmctLWFjdGlvbik7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbn1cclxuIiwiLypcbiogRm9udC5cbiovXG4vKlxuKiBCb2R5LlxuKi9cbi8qXG4qIFNjcmVlbnMuXG4qL1xuLypcbiogWi1pbmRleC5cbiovXG4vKlxuKiBTY3JvbGxiYXIuXG4qL1xuLypcbiogQm9yZGVyIFJhZGl1cy5cbiovXG4vKlxuKiBTcGFjZXMuXG4qL1xuLypcbiogQ29udHJvbHMgKHVzZSBmb3IgaW5wdXQgfHwgc2VsZWN0b3IgfHwgYnV0dG9ucykuXG4qL1xuLypcbiogQW5pbWF0aW9uLlxuKi9cbi8qXG4qIE5hdmJhci5cbiovXG4vKlxuKiBCdXR0b25zLlxuKi9cbi8qXG4qIEljb25zLlxuKi9cbi8qXG4qIFNlYXJjaCBJbnB1dC5cbiovXG4vKlxuKiBDaGVja0JveC5cbiovXG4vKlxuKiBEcm9wZG93bi5cbiovXG4vKlxuKiBDYXJkLlxuKi9cbi8qXG4qIE5vIERhdGEuXG4qL1xuLypcbiogVGFicy5cbiovXG4vKlxuKiBTaWRlYmFyLlxuKi9cbi8qXG4qIEZvcm0uXG4qL1xuLmFiLWRyb3Bkb3duIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuLmFiLWRyb3Bkb3duX19idG4ge1xuICBoZWlnaHQ6IDQwcHg7XG4gIHdpZHRoOiAxMDAlO1xuICBwYWRkaW5nOiA0cHggMTZweDtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWRyb3Bkb3duLWJvcmRlcik7XG4gIGNvbG9yOiBjdXJyZW50Q29sb3I7XG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xuICBib3JkZXItcmFkaXVzOiAycHg7XG4gIGRpc3BsYXk6IGlubGluZS1mbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cbi5hYi1kcm9wZG93bl9fYnRuOmZvY3VzIHtcbiAgb3V0bGluZTogbm9uZTtcbiAgYm94LXNoYWRvdzogMCAwIDEwcHggdmFyKC0tZm9jdXMtYm94KTtcbn1cbi5hYi1kcm9wZG93bl9fYnRuIHNwYW4ge1xuICBmbGV4OiAxO1xuICBwYWRkaW5nOiAwIDhweDtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbn1cbi5hYi1kcm9wZG93bl9faWNvIHtcbiAgdHJhbnNmb3JtOiByb3RhdGUoOTBkZWcpO1xufVxuLmFiLWRyb3Bkb3duX19pY28uaXMtb3BlbiB7XG4gIHRyYW5zZm9ybTogcm90YXRlKC05MGRlZyk7XG59XG4uYWItZHJvcGRvd25fX21lbnUge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMTAwJTtcbiAgd2lkdGg6IDEwMCU7XG4gIG1hcmdpbi10b3A6IC0xcHg7XG4gIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWRyb3Bkb3duLWJvcmRlcik7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWRyb3Bkb3duLWJnKTtcbiAgei1pbmRleDogMjtcbiAgbWF4LWhlaWdodDogMjAwcHg7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIG92ZXJmbG93LXk6IGF1dG87XG59XG4uYWItZHJvcGRvd25fX21lbnU6Zm9jdXMge1xuICBvdXRsaW5lOiBub25lO1xuICBib3gtc2hhZG93OiAwIDAgMTBweCB2YXIoLS1mb2N1cy1ib3gpO1xufVxuLmFiLWRyb3Bkb3duX19tZW51X19pdGVtIHtcbiAgcGFkZGluZzogMTZweDtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xufVxuLmFiLWRyb3Bkb3duX19tZW51X19pdGVtOmZvY3VzIHtcbiAgb3V0bGluZTogbm9uZTtcbiAgYm94LXNoYWRvdzogMCAwIDEwcHggdmFyKC0tZm9jdXMtYm94KTtcbn1cbi5hYi1kcm9wZG93bl9fbWVudV9faXRlbTpub3QoOmZpcnN0LWNoaWxkKSB7XG4gIGJvcmRlci10b3A6IDFweCBzb2xpZCB2YXIoLS1kcm9wZG93bi1ib3JkZXIpO1xufVxuLmFiLWRyb3Bkb3duX19tZW51X19pdGVtOmFjdGl2ZSwgLmFiLWRyb3Bkb3duX19tZW51X19pdGVtOmZvY3VzLCAuYWItZHJvcGRvd25fX21lbnVfX2l0ZW06aG92ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1kcm9wZG93bi1iZy0tYWN0aW9uKTtcbn0iLCJAbWl4aW4gZmxleC12YXJpYW50KCRkaXNwbGF5LCAkanVzdGlmeS1jb250ZW50LCAkYWxpZ24taXRlbXMpIHtcclxuICBkaXNwbGF5OiAkZGlzcGxheTtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6ICRqdXN0aWZ5LWNvbnRlbnQ7XHJcbiAgYWxpZ24taXRlbXM6ICRhbGlnbi1pdGVtcztcclxufVxyXG4iLCJAbWl4aW4gZm9jdXMtdmFyaWFudCB7XHJcbiAgJjpmb2N1cyB7XHJcbiAgICBvdXRsaW5lOiBub25lO1xyXG4gICAgYm94LXNoYWRvdzogMCAwIDEwcHggdmFyKC0tZm9jdXMtYm94KTtcclxuICB9XHJcbn1cclxuIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DropdownComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-dropdown',
                templateUrl: './dropdown.component.html',
                styleUrls: ['./dropdown.component.scss']
            }]
    }], null, { list: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], dropdownTitle: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "./src/app/shared/components/navbar/navbar.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/shared/components/navbar/navbar.component.ts ***!
  \**************************************************************/
/*! exports provided: NavbarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavbarComponent", function() { return NavbarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../constants */ "./src/app/constants.ts");
/* harmony import */ var _store_sidebar_sidebar_actions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../store/sidebar/sidebar.actions */ "./src/app/store/sidebar/sidebar.actions.ts");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/__ivy_ngcc__/fesm2015/store.js");
/* harmony import */ var _store_sidebar_sidebar_selectors__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../store/sidebar/sidebar.selectors */ "./src/app/store/sidebar/sidebar.selectors.ts");
/* harmony import */ var _mockData__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../mockData */ "./src/app/mockData.ts");
/* harmony import */ var _services_local_storage_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../services/local-storage.service */ "./src/app/shared/services/local-storage.service.ts");
/* harmony import */ var _button_button_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../button/button.component */ "./src/app/shared/components/button/button.component.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../sidebar/sidebar.component */ "./src/app/shared/components/sidebar/sidebar.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");













const _c0 = function (a0) { return [a0]; };
function NavbarComponent_app_sidebar_11_a_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const link_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](2, _c0, link_r2.url));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](link_r2.name);
} }
function NavbarComponent_app_sidebar_11_Template(rf, ctx) { if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "app-sidebar", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](1, 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "button", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NavbarComponent_app_sidebar_11_Template_button_click_2_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4); const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r3.closeNav(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](3, 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, NavbarComponent_app_sidebar_11_a_4_Template, 2, 4, "a", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r0.mainNavigationList);
} }
class NavbarComponent {
    constructor(localStorageService, store$) {
        this.localStorageService = localStorageService;
        this.store$ = store$;
        this.theme = _constants__WEBPACK_IMPORTED_MODULE_1__["THEME"].dark;
        this.isLightMode = false;
        this.mainNavigationList = _mockData__WEBPACK_IMPORTED_MODULE_5__["mainNavigationList"];
    }
    ngOnInit() {
        this.open$ = this.store$.pipe(Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_3__["select"])(_store_sidebar_sidebar_selectors__WEBPACK_IMPORTED_MODULE_4__["selectSidebarOpen"]));
    }
    toggleTheme() {
        this.isLightMode = !this.isLightMode;
        if (this.isLightMode) {
            this.theme = _constants__WEBPACK_IMPORTED_MODULE_1__["THEME"].light;
        }
        else {
            this.theme = _constants__WEBPACK_IMPORTED_MODULE_1__["THEME"].dark;
        }
        this.saveThemeInLocalStorage(this.theme);
    }
    /**
     * Save a chosen theme to the Local Storage.
     * @param {string} theme - Selected theme for app (light || dark).
     */
    saveThemeInLocalStorage(theme) {
        this.localStorageService.set('ab-navbar:theme', theme);
    }
    toggleNav() {
        this.store$.dispatch(new _store_sidebar_sidebar_actions__WEBPACK_IMPORTED_MODULE_2__["SidebarToggleAction"]());
    }
    closeNav() {
        this.store$.dispatch(new _store_sidebar_sidebar_actions__WEBPACK_IMPORTED_MODULE_2__["SidebarCloseAction"]());
    }
}
NavbarComponent.ɵfac = function NavbarComponent_Factory(t) { return new (t || NavbarComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_local_storage_service__WEBPACK_IMPORTED_MODULE_6__["LocalStorageService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_3__["Store"])); };
NavbarComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: NavbarComponent, selectors: [["app-navbar"]], decls: 13, vars: 7, consts: [["aria-label", "Top Toolbar", 1, "ab-nav"], [1, "ab-nav__menu"], [1, "ab-full"], ["href", "./", 1, "ab-nav__logo"], ["app-button", "", "iconName", "invert_colors", "aria-label", "To switch application theme", 3, "click"], ["app-button", "", "theme", "buttonIcon", "aria-label", "To toggle a navigation menu block", "title", "To toggle a navigation menu block", "type", "button", "iconName", "menu_vert", 3, "click"], ["sidebarTitle", "Sidebar", 4, "ngIf"], ["sidebarTitle", "Sidebar"], ["sidebar-head", ""], ["app-button", "", "theme", "buttonIcon", "aria-label", "To toggle a navigation menu block", "title", "To close a navigation menu block", "type", "button", "iconName", "close", 3, "click"], ["sidebar-body", ""], ["class", "ab-nav__link", "routerLinkActive", "isActiveTxt", 3, "routerLink", 4, "ngFor", "ngForOf"], ["routerLinkActive", "isActiveTxt", 1, "ab-nav__link", 3, "routerLink"]], template: function NavbarComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nav", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "ul", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "li", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "a", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Angular app");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NavbarComponent_Template_button_click_6_listener() { return ctx.toggleTheme(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Switch theme");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NavbarComponent_Template_button_click_9_listener() { return ctx.toggleNav(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](10, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, NavbarComponent_app_sidebar_11_Template, 5, 1, "app-sidebar", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](12, "async");
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("isActiveIcon", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](10, 3, ctx.open$));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](12, 5, ctx.open$));
    } }, directives: [_button_button_component__WEBPACK_IMPORTED_MODULE_7__["ButtonComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgIf"], _sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_9__["SidebarComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgForOf"], _angular_router__WEBPACK_IMPORTED_MODULE_10__["RouterLinkWithHref"], _angular_router__WEBPACK_IMPORTED_MODULE_10__["RouterLinkActive"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_8__["AsyncPipe"]], styles: [".isActiveIcon[_ngcontent-%COMP%]     svg {\n  color: var(--color-primary);\n}\n.ab-nav[_ngcontent-%COMP%] {\n  padding: 16px;\n}\n@media (min-width: 640px) {\n  .ab-nav[_ngcontent-%COMP%] {\n    width: 100%;\n    max-width: 1200px;\n    margin: 0 auto;\n  }\n}\n.ab-nav__menu[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n}\n.ab-nav__menu[_ngcontent-%COMP%]    > li[_ngcontent-%COMP%] {\n  padding: 4px;\n}\n.ab-nav__menu[_ngcontent-%COMP%]   .ab-nowrap[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n}\n.ab-nav__menu[_ngcontent-%COMP%]   .ab-full[_ngcontent-%COMP%] {\n  flex: 1;\n  display: flex;\n  justify-content: flex-start;\n  align-items: center;\n}\n.ab-nav__logo[_ngcontent-%COMP%] {\n  font-family: \"Proxima Bold\", Arial, sans-serif;\n  white-space: nowrap;\n  text-decoration: none;\n  text-transform: capitalize;\n  font-size: 24px;\n}\n.ab-nav__link[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  font-family: \"Proxima Bold\", Arial, sans-serif;\n  font-size: 16px;\n  min-height: 40px;\n  padding: 16px 0;\n  text-decoration: none;\n  border-bottom: 1px solid var(--navbar-border);\n}\n.ab-nav__link.isActiveTxt[_ngcontent-%COMP%], .ab-nav__link[_ngcontent-%COMP%]:active, .ab-nav__link[_ngcontent-%COMP%]:hover {\n  color: var(--navbar-link--active);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9zdHlsZXMvY29yZS92YXJpYWJsZXMvdmFyaWFibGVzLnNjc3MiLCJzcmMvc3R5bGVzL3N0YXRlL2FjdGl2ZS1pY29uLnNjc3MiLCJzcmMvYXBwL3NoYXJlZC9jb21wb25lbnRzL25hdmJhci9uYXZiYXIuY29tcG9uZW50LnNjc3MiLCJzcmMvc3R5bGVzL2NvbXBvbmVudHMvbmF2YmFyLnNjc3MiLCJzcmMvc3R5bGVzL2NvcmUvbWl4aW5zL21peGluLWNvbnRhaW5lci5zY3NzIiwic3JjL3N0eWxlcy9jb3JlL21peGlucy9taXhpbi10b29sYmFyLXZhcmlhbnQuc2NzcyIsInNyYy9zdHlsZXMvY29yZS9taXhpbnMvbWl4aW4tZmxleC12YXJpYW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7O0NBQUE7QUFXQTs7Q0FBQTtBQU1BOztDQUFBO0FBT0E7O0NBQUE7QUFNQTs7Q0FBQTtBQUtBOztDQUFBO0FBS0E7O0NBQUE7QUFRQTs7Q0FBQTtBQU1BOztDQUFBO0FBS0E7O0NBQUE7QUFXQTs7Q0FBQTtBQVNBOztDQUFBO0FBS0E7O0NBQUE7QUFPQTs7Q0FBQTtBQUtBOztDQUFBO0FBUUE7O0NBQUE7QUFPQTs7Q0FBQTtBQU9BOztDQUFBO0FBT0E7O0NBQUE7QUFTQTs7Q0FBQTtBQ3JJRTtFQUNFLDJCQUFBO0FDNERKO0FDekRBO0VDSkUsYUowQ1c7QUV1QmI7QUU5REU7RURDRjtJQ0FJLFdBQUE7SUFDQSxpQkFBQTtJQUNBLGNBQUE7RUZpRUY7QUFDRjtBQ2pFRTtFRUtFLGFBQUE7RUFDQSxtQkFBQTtBSCtESjtBRzFFRTtFQUNFLFlMMENVO0FFa0NkO0FHekVFO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0FIMkVKO0FHcEVJO0VBQ0UsT0FBQTtFQ2hCSixhRGlCMEI7RUNoQjFCLDJCSE8yQjtFR04zQixtQkRlaUQ7QUh3RW5EO0FDOUVFO0VBQ0UsOENIVGU7RUdVZixtQkFBQTtFQUNBLHFCQUFBO0VBQ0EsMEJBQUE7RUFDQSxlSFZXO0FFMEZmO0FDN0VFO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsOENIbkJlO0VHb0JmLGVIaEJXO0VHaUJYLGdCSDBCYTtFR3pCYixlSHdDaUI7RUd2Q2pCLHFCQUFBO0VBQ0EsNkNBQUE7QUQrRUo7QUM3RUk7RUFHRSxpQ0FBQTtBRDZFTiIsImZpbGUiOiJzcmMvYXBwL3NoYXJlZC9jb21wb25lbnRzL25hdmJhci9uYXZiYXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvKlxyXG4qIEZvbnQuXHJcbiovXHJcbiRmb250LWZhbWlseS1leHRyYS1ib2xkOiAnUHJveGltYSBFeHRyYSBCb2xkJywgQXJpYWwsIHNhbnMtc2VyaWY7XHJcbiRmb250LWZhbWlseS1ib2xkOiAnUHJveGltYSBCb2xkJywgQXJpYWwsIHNhbnMtc2VyaWY7XHJcbiRmb250LWZhbWlseS1yZWd1bGFyOiAnUHJveGltYSBSZWcnLCBBcmlhbCwgc2Fucy1zZXJpZjtcclxuXHJcbiRmb250LXNpemUtbGc6IDI0cHg7XHJcbiRmb250LXNpemUtbWQ6IDE2cHg7XHJcbiRmb250LXNpemUtYmFzZTogMTRweDtcclxuXHJcbi8qXHJcbiogQm9keS5cclxuKi9cclxuJGJvZHktZm9udC1zaXplOiAkZm9udC1zaXplLWJhc2U7XHJcbiRib2R5LWZvbnQtZmFtaWx5OiAkZm9udC1mYW1pbHktcmVndWxhcjtcclxuXHJcbi8qXHJcbiogU2NyZWVucy5cclxuKi9cclxuJHNjcmVlbi1zeDogNjQwcHg7XHJcbiRzY3JlZW4tbWQ6IDc4MHB4O1xyXG4kc2NyZWVuLWxnOiAxMjAwcHg7XHJcblxyXG4vKlxyXG4qIFotaW5kZXguXHJcbiovXHJcbiR6LWluZGV4LWRyb3Bkb3duOiAyO1xyXG4kei1pbmRleC1zaWRlYmFyOiAzO1xyXG5cclxuLypcclxuKiBTY3JvbGxiYXIuXHJcbiovXHJcbiRzY3JvbGxiYXItc2l6ZTogOHB4O1xyXG5cclxuLypcclxuKiBCb3JkZXIgUmFkaXVzLlxyXG4qL1xyXG4kYm9yZGVyLXJhZGl1cy1iYXNlOiAycHg7XHJcblxyXG4vKlxyXG4qIFNwYWNlcy5cclxuKi9cclxuJHNwYWNlLWJhc2U6IDE2cHg7XHJcbiRzcGFjZS1iYXNlLWRvdWJsZTogJHNwYWNlLWJhc2UqMjtcclxuJHNwYWNlLWJhc2UtaGFsZjogJHNwYWNlLWJhc2UvMjtcclxuJHNwYWNlLXNtYWxsOiAkc3BhY2UtYmFzZS80O1xyXG5cclxuLypcclxuKiBDb250cm9scyAodXNlIGZvciBpbnB1dCB8fCBzZWxlY3RvciB8fCBidXR0b25zKS5cclxuKi9cclxuJGNvbnRyb2wtaGVpZ2h0OiA0MHB4O1xyXG4kY29udHJvbC1zcGFjZXM6ICRzcGFjZS1zbWFsbCAkc3BhY2UtYmFzZTtcclxuXHJcbi8qXHJcbiogQW5pbWF0aW9uLlxyXG4qL1xyXG4kdHJhbnNpdGlvbi1iYXNlOiAyNzBtcyBlYXNlLWluLW91dDtcclxuXHJcbi8qXHJcbiogTmF2YmFyLlxyXG4qL1xyXG4kbmF2YmFyLXNwYWNlczogJHNwYWNlLWJhc2U7XHJcbiRuYXZiYXItZm9udC1zaXplOiAkZm9udC1zaXplLWxnO1xyXG5cclxuJG5hdmJhci1saW5rLWhlaWdodDogJGNvbnRyb2wtaGVpZ2h0O1xyXG4kbmF2YmFyLWxpbmstc3BhY2VzOiAkc3BhY2UtYmFzZSAwO1xyXG4kbmF2YmFyLWxpbmstZm9udC1mYW1pbHk6ICRmb250LWZhbWlseS1ib2xkO1xyXG4kbmF2YmFyLWxpbmstZm9udC1zaXplOiAkZm9udC1zaXplLW1kO1xyXG5cclxuLypcclxuKiBCdXR0b25zLlxyXG4qL1xyXG4kYnRuLWhlaWdodDogJGNvbnRyb2wtaGVpZ2h0IC0gMTBweDtcclxuJGJ0bi13aWR0aDogMTUwcHg7XHJcbiRidG4tc3BhY2VzOiAkY29udHJvbC1zcGFjZXM7XHJcbiRidG4tZm9udC1mYW1pbHk6ICRmb250LWZhbWlseS1ib2xkO1xyXG4kYnRuLWljb24tc3BhY2U6ICRzcGFjZS1zbWFsbDtcclxuXHJcbi8qXHJcbiogSWNvbnMuXHJcbiovXHJcbiRpY28tc2l6ZS1iYXNlOiAkZm9udC1zaXplLWxnO1xyXG5cclxuLypcclxuKiBTZWFyY2ggSW5wdXQuXHJcbiovXHJcbiRzZWFyY2gtaGVpZ2h0OiAkY29udHJvbC1oZWlnaHQ7XHJcbiRzZWFyY2gtc3BhY2VzOiAkY29udHJvbC1zcGFjZXM7XHJcbiRzZWFyY2gtaWNvbi1zcGFjZXM6ICRzcGFjZS1iYXNlO1xyXG5cclxuLypcclxuKiBDaGVja0JveC5cclxuKi9cclxuJGNoZWNrYm94LXNpemU6ICRmb250LXNpemUtbGc7XHJcblxyXG4vKlxyXG4qIERyb3Bkb3duLlxyXG4qL1xyXG4kZHJvcGRvd24taGVpZ2h0OiAkY29udHJvbC1oZWlnaHQ7XHJcbiRkcm9wZG93bi1idG4tc3BhY2VzOiAkY29udHJvbC1zcGFjZXM7XHJcbiRkcm9wZG93bi1tZW51LWhlaWdodDogMjAwcHg7XHJcbiRkcm9wZG93bi1tZW51LWl0ZW0tc3BhY2VzOiAkc3BhY2UtYmFzZTtcclxuXHJcbi8qXHJcbiogQ2FyZC5cclxuKi9cclxuJGNhcmQtc3BhY2VzOiAkc3BhY2UtYmFzZTtcclxuJGNhcmQtcmFkaXVzOiAkYm9yZGVyLXJhZGl1cy1iYXNlO1xyXG4kY2FyZC1oZWFkLWZvbnQtZmFtaWx5OiAkZm9udC1mYW1pbHktZXh0cmEtYm9sZDtcclxuXHJcbi8qXHJcbiogTm8gRGF0YS5cclxuKi9cclxuJG5vLWRhdGEtZm9udC1mYW1pbHk6ICRmb250LWZhbWlseS1leHRyYS1ib2xkO1xyXG4kbm8tZGF0YS1mb250LXNpemU6ICRmb250LXNpemUtbGc7XHJcbiRuby1kYXRhLXNwYWNlczogJHNwYWNlLWJhc2UtZG91YmxlIDA7XHJcblxyXG4vKlxyXG4qIFRhYnMuXHJcbiovXHJcbiR0YWItc3BhY2VzOiAkc3BhY2UtYmFzZTtcclxuJHRhYi1oZWFkLXdpZHRoOiAxNTBweDtcclxuJHRhYi1oZWFkLWJvcmRlcjogM3B4O1xyXG5cclxuLypcclxuKiBTaWRlYmFyLlxyXG4qL1xyXG4kc2lkZWJhci1zcGFjZXM6ICRzcGFjZS1iYXNlO1xyXG4kc2lkZWJhci13aWR0aDogMzAwcHg7XHJcbiRzaWRlYmFyLWhlYWQtaGVpZ2h0OiA2MHB4O1xyXG4kc2lkZWJhci10aXRsZS1mb250LWZhbWlseTogJGZvbnQtZmFtaWx5LWV4dHJhLWJvbGQ7XHJcbiRzaWRlYmFyLXRpdGxlLWZvbnQtc2l6ZTogJGZvbnQtc2l6ZS1sZztcclxuXHJcbi8qXHJcbiogRm9ybS5cclxuKi9cclxuJGZvcm0tcm93LXNwYWNlczogJHNwYWNlLWJhc2UtaGFsZiAwO1xyXG4iLCIuaXNBY3RpdmVJY29uIHtcclxuICA6Om5nLWRlZXAgc3ZnIHtcclxuICAgIGNvbG9yOiB2YXIoLS1jb2xvci1wcmltYXJ5KTtcclxuICB9XHJcbn1cclxuIiwiLypcbiogRm9udC5cbiovXG4vKlxuKiBCb2R5LlxuKi9cbi8qXG4qIFNjcmVlbnMuXG4qL1xuLypcbiogWi1pbmRleC5cbiovXG4vKlxuKiBTY3JvbGxiYXIuXG4qL1xuLypcbiogQm9yZGVyIFJhZGl1cy5cbiovXG4vKlxuKiBTcGFjZXMuXG4qL1xuLypcbiogQ29udHJvbHMgKHVzZSBmb3IgaW5wdXQgfHwgc2VsZWN0b3IgfHwgYnV0dG9ucykuXG4qL1xuLypcbiogQW5pbWF0aW9uLlxuKi9cbi8qXG4qIE5hdmJhci5cbiovXG4vKlxuKiBCdXR0b25zLlxuKi9cbi8qXG4qIEljb25zLlxuKi9cbi8qXG4qIFNlYXJjaCBJbnB1dC5cbiovXG4vKlxuKiBDaGVja0JveC5cbiovXG4vKlxuKiBEcm9wZG93bi5cbiovXG4vKlxuKiBDYXJkLlxuKi9cbi8qXG4qIE5vIERhdGEuXG4qL1xuLypcbiogVGFicy5cbiovXG4vKlxuKiBTaWRlYmFyLlxuKi9cbi8qXG4qIEZvcm0uXG4qL1xuLmlzQWN0aXZlSWNvbiA6Om5nLWRlZXAgc3ZnIHtcbiAgY29sb3I6IHZhcigtLWNvbG9yLXByaW1hcnkpO1xufVxuXG4uYWItbmF2IHtcbiAgcGFkZGluZzogMTZweDtcbn1cbkBtZWRpYSAobWluLXdpZHRoOiA2NDBweCkge1xuICAuYWItbmF2IHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBtYXgtd2lkdGg6IDEyMDBweDtcbiAgICBtYXJnaW46IDAgYXV0bztcbiAgfVxufVxuLmFiLW5hdl9fbWVudSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG4uYWItbmF2X19tZW51ID4gbGkge1xuICBwYWRkaW5nOiA0cHg7XG59XG4uYWItbmF2X19tZW51IC5hYi1ub3dyYXAge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuLmFiLW5hdl9fbWVudSAuYWItZnVsbCB7XG4gIGZsZXg6IDE7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cbi5hYi1uYXZfX2xvZ28ge1xuICBmb250LWZhbWlseTogXCJQcm94aW1hIEJvbGRcIiwgQXJpYWwsIHNhbnMtc2VyaWY7XG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XG4gIGZvbnQtc2l6ZTogMjRweDtcbn1cbi5hYi1uYXZfX2xpbmsge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBmb250LWZhbWlseTogXCJQcm94aW1hIEJvbGRcIiwgQXJpYWwsIHNhbnMtc2VyaWY7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgbWluLWhlaWdodDogNDBweDtcbiAgcGFkZGluZzogMTZweCAwO1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCB2YXIoLS1uYXZiYXItYm9yZGVyKTtcbn1cbi5hYi1uYXZfX2xpbmsuaXNBY3RpdmVUeHQsIC5hYi1uYXZfX2xpbms6YWN0aXZlLCAuYWItbmF2X19saW5rOmhvdmVyIHtcbiAgY29sb3I6IHZhcigtLW5hdmJhci1saW5rLS1hY3RpdmUpO1xufSIsIkBpbXBvcnQgXCJ+c3JjL3N0eWxlcy9jb3JlL3ZhcmlhYmxlcy92YXJpYWJsZXNcIjtcclxuQGltcG9ydCBcIn5zcmMvc3R5bGVzL3N0YXRlL2FjdGl2ZS1pY29uXCI7XHJcbkBpbXBvcnQgXCJ+c3JjL3N0eWxlcy9jb3JlL21peGlucy9taXhpbi10b29sYmFyLXZhcmlhbnRcIjtcclxuQGltcG9ydCBcIn5zcmMvc3R5bGVzL2NvcmUvbWl4aW5zL21peGluLWNvbnRhaW5lclwiO1xyXG5cclxuLmFiLW5hdiB7XHJcbiAgQGluY2x1ZGUgY29udGFpbmVyKCRuYXZiYXItc3BhY2VzKTtcclxuXHJcbiAgJl9fbWVudSB7XHJcbiAgICBAaW5jbHVkZSB0b29sYmFyLXZhcmlhbnQoZmxleC1zdGFydCwgJ2FsbCcpO1xyXG4gIH1cclxuXHJcbiAgJl9fbG9nbyB7XHJcbiAgICBmb250LWZhbWlseTogJGZvbnQtZmFtaWx5LWJvbGQ7XHJcbiAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XHJcbiAgICBmb250LXNpemU6ICRuYXZiYXItZm9udC1zaXplO1xyXG4gIH1cclxuXHJcbiAgJl9fbGluayB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGZvbnQtZmFtaWx5OiAkbmF2YmFyLWxpbmstZm9udC1mYW1pbHk7XHJcbiAgICBmb250LXNpemU6ICRuYXZiYXItbGluay1mb250LXNpemU7XHJcbiAgICBtaW4taGVpZ2h0OiAkbmF2YmFyLWxpbmstaGVpZ2h0O1xyXG4gICAgcGFkZGluZzogJG5hdmJhci1saW5rLXNwYWNlcztcclxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCB2YXIoLS1uYXZiYXItYm9yZGVyKTtcclxuXHJcbiAgICAmLmlzQWN0aXZlVHh0LFxyXG4gICAgJjphY3RpdmUsXHJcbiAgICAmOmhvdmVyIHtcclxuICAgICAgY29sb3I6IHZhcigtLW5hdmJhci1saW5rLS1hY3RpdmUpO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG4iLCJAbWl4aW4gY29udGFpbmVyKCRzcGFjZXMpIHtcclxuICBwYWRkaW5nOiAkc3BhY2VzO1xyXG5cclxuICAvLyBGb3IgRGVza3RvcCAmIFRhYmxldC5cclxuICBAbWVkaWEgKG1pbi13aWR0aDogJHNjcmVlbi1zeCkge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBtYXgtd2lkdGg6IDEyMDBweDtcclxuICAgIG1hcmdpbjogMCBhdXRvO1xyXG4gIH1cclxufVxyXG4iLCJAaW1wb3J0IFwibWl4aW4tZmxleC12YXJpYW50XCI7XHJcblxyXG5AbWl4aW4gdG9vbGJhci12YXJpYW50KCRmdWxsLWNvbC1hbGlnbiwgJGZsZXgtYWxsOiAnZGVza3RvcCcpIHtcclxuICA+IGxpIHtcclxuICAgIHBhZGRpbmc6ICRzcGFjZS1zbWFsbDtcclxuICB9XHJcblxyXG4gIC5hYi1ub3dyYXAge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgfVxyXG5cclxuICBAaWYgJGZsZXgtYWxsID09ICdhbGwnIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG5cclxuICAgIC5hYi1mdWxsIHtcclxuICAgICAgZmxleDogMTtcclxuICAgICAgQGluY2x1ZGUgZmxleC12YXJpYW50KGZsZXgsICRmdWxsLWNvbC1hbGlnbiwgY2VudGVyKTtcclxuICAgIH1cclxuICB9IEBlbHNlIHtcclxuICAgIC8vIEZvciBEZXNrdG9wICYgVGFibGV0LlxyXG4gICAgQG1lZGlhIChtaW4td2lkdGg6ICRzY3JlZW4tc3gpIHtcclxuICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuXHJcbiAgICAgIC5hYi1mdWxsIHtcclxuICAgICAgICBmbGV4OiAxO1xyXG4gICAgICAgIEBpbmNsdWRlIGZsZXgtdmFyaWFudChmbGV4LCAkZnVsbC1jb2wtYWxpZ24sIGNlbnRlcik7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbn1cclxuIiwiQG1peGluIGZsZXgtdmFyaWFudCgkZGlzcGxheSwgJGp1c3RpZnktY29udGVudCwgJGFsaWduLWl0ZW1zKSB7XHJcbiAgZGlzcGxheTogJGRpc3BsYXk7XHJcbiAganVzdGlmeS1jb250ZW50OiAkanVzdGlmeS1jb250ZW50O1xyXG4gIGFsaWduLWl0ZW1zOiAkYWxpZ24taXRlbXM7XHJcbn1cclxuIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NavbarComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-navbar',
                templateUrl: './navbar.component.html',
                styleUrls: ['./navbar.component.scss']
            }]
    }], function () { return [{ type: _services_local_storage_service__WEBPACK_IMPORTED_MODULE_6__["LocalStorageService"] }, { type: _ngrx_store__WEBPACK_IMPORTED_MODULE_3__["Store"] }]; }, null); })();


/***/ }),

/***/ "./src/app/shared/components/search/search.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/shared/components/search/search.component.ts ***!
  \**************************************************************/
/*! exports provided: SearchComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchComponent", function() { return SearchComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var angular_svg_icon__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! angular-svg-icon */ "./node_modules/angular-svg-icon/__ivy_ngcc__/fesm2015/angular-svg-icon.js");



class SearchComponent {
}
SearchComponent.ɵfac = function SearchComponent_Factory(t) { return new (t || SearchComponent)(); };
SearchComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SearchComponent, selectors: [["app-search"]], decls: 3, vars: 0, consts: [["role", "search", 1, "ab-search"], ["aria-hidden", "true", "src", "assets/icons/search.svg", 1, "ab-search__ico"], ["type", "search", "aria-label", "Search by keyword or amount", "placeholder", "Search by keyword or amount"]], template: function SearchComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "svg-icon", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "input", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [angular_svg_icon__WEBPACK_IMPORTED_MODULE_1__["SvgIconComponent"]], styles: [".ab-search[_ngcontent-%COMP%] {\n  display: inline-flex;\n  justify-content: center;\n  align-items: center;\n  height: 40px;\n  width: 100%;\n  color: var(--input-color);\n  border: 1px solid var(--input-border);\n  background-color: var(--input-bg);\n  border-radius: 2px;\n}\n.ab-search[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  padding: 4px 16px;\n  border: none;\n  background-color: transparent;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  font-size: 14px;\n  color: currentColor;\n}\n.ab-search[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:focus {\n  outline: none;\n  box-shadow: 0 0 10px var(--focus-box);\n}\n.ab-search[_ngcontent-%COMP%]:active:enabled, .ab-search[_ngcontent-%COMP%]:hover:enabled {\n  border-color: var(--input-border--action);\n}\n.ab-search[_ngcontent-%COMP%]:disabled {\n  opacity: 0.6;\n  cursor: default;\n}\n@media (min-width: 640px) {\n  .ab-search[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n}\n.ab-search__ico[_ngcontent-%COMP%] {\n  padding-left: 16px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9zdHlsZXMvY29yZS92YXJpYWJsZXMvdmFyaWFibGVzLnNjc3MiLCJzcmMvc3R5bGVzL2NvbXBvbmVudHMvaW5wdXRzL3NlYXJjaC5zY3NzIiwic3JjL3N0eWxlcy9jb3JlL21peGlucy9taXhpbi1mbGV4LXZhcmlhbnQuc2NzcyIsInNyYy9zdHlsZXMvY29tcG9uZW50cy9pbnB1dHMvbWl4aW4taW5wdXQtdmFyaWFudC5zY3NzIiwic3JjL2FwcC9zaGFyZWQvY29tcG9uZW50cy9zZWFyY2gvc2VhcmNoLmNvbXBvbmVudC5zY3NzIiwic3JjL3N0eWxlcy9jb3JlL21peGlucy9taXhpbi1mb2N1cy12YXJpYW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7O0NBQUE7QUFXQTs7Q0FBQTtBQU1BOztDQUFBO0FBT0E7O0NBQUE7QUFNQTs7Q0FBQTtBQUtBOztDQUFBO0FBS0E7O0NBQUE7QUFRQTs7Q0FBQTtBQU1BOztDQUFBO0FBS0E7O0NBQUE7QUFXQTs7Q0FBQTtBQVNBOztDQUFBO0FBS0E7O0NBQUE7QUFPQTs7Q0FBQTtBQUtBOztDQUFBO0FBUUE7O0NBQUE7QUFPQTs7Q0FBQTtBQU9BOztDQUFBO0FBT0E7O0NBQUE7QUFTQTs7Q0FBQTtBQ25JQTtFQ0ZFLG9CREdzQjtFQ0Z0Qix1QkRFbUM7RUNEbkMsbUJEQzJDO0VFUTNDLFlIdUNlO0VHdENmLFdBQUE7RUFDQSx5QkZOSTtFRU9KLHFDQUFBO0VBQ0EsaUNGTkk7RUVPSixrQkhxQm1CO0FJZ0NyQjtBRG5ERTtFQUNFLFdBQUE7RUFDQSxZQUFBO0VBQ0EsaUJIOEJhO0VHN0JiLFlBQUE7RUFDQSw2QkFBQTtFQUNBLGdCQUFBO0VBQ0EsdUJBQUE7RUFDQSxlSGxCYTtFR21CYixtQkFBQTtBQ3FESjtBQ2hGRTtFQUNFLGFBQUE7RUFDQSxxQ0FBQTtBRGtGSjtBRGxESTtFQUNFLHlDRnpCQTtBRzZFTjtBRGhERTtFQUNFLFlBQUE7RUFDQSxlQUFBO0FDa0RKO0FEOUNFO0VGM0NGO0lFNENJLFdGeENFO0VHeUZKO0FBQ0Y7QUhsRkU7RUFDRSxrQkQyQlM7QUl5RGIiLCJmaWxlIjoic3JjL2FwcC9zaGFyZWQvY29tcG9uZW50cy9zZWFyY2gvc2VhcmNoLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLypcclxuKiBGb250LlxyXG4qL1xyXG4kZm9udC1mYW1pbHktZXh0cmEtYm9sZDogJ1Byb3hpbWEgRXh0cmEgQm9sZCcsIEFyaWFsLCBzYW5zLXNlcmlmO1xyXG4kZm9udC1mYW1pbHktYm9sZDogJ1Byb3hpbWEgQm9sZCcsIEFyaWFsLCBzYW5zLXNlcmlmO1xyXG4kZm9udC1mYW1pbHktcmVndWxhcjogJ1Byb3hpbWEgUmVnJywgQXJpYWwsIHNhbnMtc2VyaWY7XHJcblxyXG4kZm9udC1zaXplLWxnOiAyNHB4O1xyXG4kZm9udC1zaXplLW1kOiAxNnB4O1xyXG4kZm9udC1zaXplLWJhc2U6IDE0cHg7XHJcblxyXG4vKlxyXG4qIEJvZHkuXHJcbiovXHJcbiRib2R5LWZvbnQtc2l6ZTogJGZvbnQtc2l6ZS1iYXNlO1xyXG4kYm9keS1mb250LWZhbWlseTogJGZvbnQtZmFtaWx5LXJlZ3VsYXI7XHJcblxyXG4vKlxyXG4qIFNjcmVlbnMuXHJcbiovXHJcbiRzY3JlZW4tc3g6IDY0MHB4O1xyXG4kc2NyZWVuLW1kOiA3ODBweDtcclxuJHNjcmVlbi1sZzogMTIwMHB4O1xyXG5cclxuLypcclxuKiBaLWluZGV4LlxyXG4qL1xyXG4kei1pbmRleC1kcm9wZG93bjogMjtcclxuJHotaW5kZXgtc2lkZWJhcjogMztcclxuXHJcbi8qXHJcbiogU2Nyb2xsYmFyLlxyXG4qL1xyXG4kc2Nyb2xsYmFyLXNpemU6IDhweDtcclxuXHJcbi8qXHJcbiogQm9yZGVyIFJhZGl1cy5cclxuKi9cclxuJGJvcmRlci1yYWRpdXMtYmFzZTogMnB4O1xyXG5cclxuLypcclxuKiBTcGFjZXMuXHJcbiovXHJcbiRzcGFjZS1iYXNlOiAxNnB4O1xyXG4kc3BhY2UtYmFzZS1kb3VibGU6ICRzcGFjZS1iYXNlKjI7XHJcbiRzcGFjZS1iYXNlLWhhbGY6ICRzcGFjZS1iYXNlLzI7XHJcbiRzcGFjZS1zbWFsbDogJHNwYWNlLWJhc2UvNDtcclxuXHJcbi8qXHJcbiogQ29udHJvbHMgKHVzZSBmb3IgaW5wdXQgfHwgc2VsZWN0b3IgfHwgYnV0dG9ucykuXHJcbiovXHJcbiRjb250cm9sLWhlaWdodDogNDBweDtcclxuJGNvbnRyb2wtc3BhY2VzOiAkc3BhY2Utc21hbGwgJHNwYWNlLWJhc2U7XHJcblxyXG4vKlxyXG4qIEFuaW1hdGlvbi5cclxuKi9cclxuJHRyYW5zaXRpb24tYmFzZTogMjcwbXMgZWFzZS1pbi1vdXQ7XHJcblxyXG4vKlxyXG4qIE5hdmJhci5cclxuKi9cclxuJG5hdmJhci1zcGFjZXM6ICRzcGFjZS1iYXNlO1xyXG4kbmF2YmFyLWZvbnQtc2l6ZTogJGZvbnQtc2l6ZS1sZztcclxuXHJcbiRuYXZiYXItbGluay1oZWlnaHQ6ICRjb250cm9sLWhlaWdodDtcclxuJG5hdmJhci1saW5rLXNwYWNlczogJHNwYWNlLWJhc2UgMDtcclxuJG5hdmJhci1saW5rLWZvbnQtZmFtaWx5OiAkZm9udC1mYW1pbHktYm9sZDtcclxuJG5hdmJhci1saW5rLWZvbnQtc2l6ZTogJGZvbnQtc2l6ZS1tZDtcclxuXHJcbi8qXHJcbiogQnV0dG9ucy5cclxuKi9cclxuJGJ0bi1oZWlnaHQ6ICRjb250cm9sLWhlaWdodCAtIDEwcHg7XHJcbiRidG4td2lkdGg6IDE1MHB4O1xyXG4kYnRuLXNwYWNlczogJGNvbnRyb2wtc3BhY2VzO1xyXG4kYnRuLWZvbnQtZmFtaWx5OiAkZm9udC1mYW1pbHktYm9sZDtcclxuJGJ0bi1pY29uLXNwYWNlOiAkc3BhY2Utc21hbGw7XHJcblxyXG4vKlxyXG4qIEljb25zLlxyXG4qL1xyXG4kaWNvLXNpemUtYmFzZTogJGZvbnQtc2l6ZS1sZztcclxuXHJcbi8qXHJcbiogU2VhcmNoIElucHV0LlxyXG4qL1xyXG4kc2VhcmNoLWhlaWdodDogJGNvbnRyb2wtaGVpZ2h0O1xyXG4kc2VhcmNoLXNwYWNlczogJGNvbnRyb2wtc3BhY2VzO1xyXG4kc2VhcmNoLWljb24tc3BhY2VzOiAkc3BhY2UtYmFzZTtcclxuXHJcbi8qXHJcbiogQ2hlY2tCb3guXHJcbiovXHJcbiRjaGVja2JveC1zaXplOiAkZm9udC1zaXplLWxnO1xyXG5cclxuLypcclxuKiBEcm9wZG93bi5cclxuKi9cclxuJGRyb3Bkb3duLWhlaWdodDogJGNvbnRyb2wtaGVpZ2h0O1xyXG4kZHJvcGRvd24tYnRuLXNwYWNlczogJGNvbnRyb2wtc3BhY2VzO1xyXG4kZHJvcGRvd24tbWVudS1oZWlnaHQ6IDIwMHB4O1xyXG4kZHJvcGRvd24tbWVudS1pdGVtLXNwYWNlczogJHNwYWNlLWJhc2U7XHJcblxyXG4vKlxyXG4qIENhcmQuXHJcbiovXHJcbiRjYXJkLXNwYWNlczogJHNwYWNlLWJhc2U7XHJcbiRjYXJkLXJhZGl1czogJGJvcmRlci1yYWRpdXMtYmFzZTtcclxuJGNhcmQtaGVhZC1mb250LWZhbWlseTogJGZvbnQtZmFtaWx5LWV4dHJhLWJvbGQ7XHJcblxyXG4vKlxyXG4qIE5vIERhdGEuXHJcbiovXHJcbiRuby1kYXRhLWZvbnQtZmFtaWx5OiAkZm9udC1mYW1pbHktZXh0cmEtYm9sZDtcclxuJG5vLWRhdGEtZm9udC1zaXplOiAkZm9udC1zaXplLWxnO1xyXG4kbm8tZGF0YS1zcGFjZXM6ICRzcGFjZS1iYXNlLWRvdWJsZSAwO1xyXG5cclxuLypcclxuKiBUYWJzLlxyXG4qL1xyXG4kdGFiLXNwYWNlczogJHNwYWNlLWJhc2U7XHJcbiR0YWItaGVhZC13aWR0aDogMTUwcHg7XHJcbiR0YWItaGVhZC1ib3JkZXI6IDNweDtcclxuXHJcbi8qXHJcbiogU2lkZWJhci5cclxuKi9cclxuJHNpZGViYXItc3BhY2VzOiAkc3BhY2UtYmFzZTtcclxuJHNpZGViYXItd2lkdGg6IDMwMHB4O1xyXG4kc2lkZWJhci1oZWFkLWhlaWdodDogNjBweDtcclxuJHNpZGViYXItdGl0bGUtZm9udC1mYW1pbHk6ICRmb250LWZhbWlseS1leHRyYS1ib2xkO1xyXG4kc2lkZWJhci10aXRsZS1mb250LXNpemU6ICRmb250LXNpemUtbGc7XHJcblxyXG4vKlxyXG4qIEZvcm0uXHJcbiovXHJcbiRmb3JtLXJvdy1zcGFjZXM6ICRzcGFjZS1iYXNlLWhhbGYgMDtcclxuIiwiQGltcG9ydCBcIn5zcmMvc3R5bGVzL2NvcmUvbWl4aW5zL21peGluLWZsZXgtdmFyaWFudFwiO1xyXG5AaW1wb3J0IFwibWl4aW4taW5wdXQtdmFyaWFudFwiO1xyXG5cclxuLmFiLXNlYXJjaCB7XHJcbiAgQGluY2x1ZGUgZmxleC12YXJpYW50KGlubGluZS1mbGV4LCBjZW50ZXIsIGNlbnRlcik7XHJcbiAgQGluY2x1ZGUgaW5wdXQtdmFyaWFudChcclxuICAgICAgJHNlYXJjaC1oZWlnaHQsXHJcbiAgICAgIDEwMCUsXHJcbiAgICAgIHZhcigtLWlucHV0LWNvbG9yKSxcclxuICAgICAgdmFyKC0taW5wdXQtYm9yZGVyKSxcclxuICAgICAgdmFyKC0taW5wdXQtYmcpLFxyXG4gICAgICB2YXIoLS1pbnB1dC1ib3JkZXItLWFjdGlvbiksXHJcbiAgICAgICRzZWFyY2gtc3BhY2VzXHJcbiAgKTtcclxuXHJcbiAgJl9faWNvIHtcclxuICAgIHBhZGRpbmctbGVmdDogJHNlYXJjaC1pY29uLXNwYWNlcztcclxuICB9XHJcbn1cclxuIiwiQG1peGluIGZsZXgtdmFyaWFudCgkZGlzcGxheSwgJGp1c3RpZnktY29udGVudCwgJGFsaWduLWl0ZW1zKSB7XHJcbiAgZGlzcGxheTogJGRpc3BsYXk7XHJcbiAganVzdGlmeS1jb250ZW50OiAkanVzdGlmeS1jb250ZW50O1xyXG4gIGFsaWduLWl0ZW1zOiAkYWxpZ24taXRlbXM7XHJcbn1cclxuIiwiQGltcG9ydCBcIn5zcmMvc3R5bGVzL2NvcmUvdmFyaWFibGVzL3ZhcmlhYmxlc1wiO1xyXG5AaW1wb3J0IFwifnNyYy9zdHlsZXMvY29yZS9taXhpbnMvbWl4aW4tZm9jdXMtdmFyaWFudFwiO1xyXG5cclxuQG1peGluIGlucHV0LXZhcmlhbnQoXHJcbiAgJGhlaWdodCxcclxuICAkd2lkdGgsXHJcbiAgJGNvbG9yLFxyXG4gICRib3JkZXIsXHJcbiAgJGJhY2tncm91bmQsXHJcbiAgJGJvcmRlci1hY3Rpb24sXHJcbiAgJHBhZGRpbmdcclxuKSB7XHJcbiAgaGVpZ2h0OiAkaGVpZ2h0O1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGNvbG9yOiAkY29sb3I7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgJGJvcmRlcjtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAkYmFja2dyb3VuZDtcclxuICBib3JkZXItcmFkaXVzOiAkYm9yZGVyLXJhZGl1cy1iYXNlO1xyXG5cclxuICBpbnB1dCB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIHBhZGRpbmc6ICRwYWRkaW5nO1xyXG4gICAgYm9yZGVyOiBub25lO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XHJcbiAgICBmb250LXNpemU6ICRib2R5LWZvbnQtc2l6ZTtcclxuICAgIGNvbG9yOiBjdXJyZW50Q29sb3I7XHJcblxyXG4gICAgQGluY2x1ZGUgZm9jdXMtdmFyaWFudDtcclxuICB9XHJcblxyXG4gICY6YWN0aXZlLFxyXG4gICY6aG92ZXIge1xyXG4gICAgJjplbmFibGVkIHtcclxuICAgICAgYm9yZGVyLWNvbG9yOiAkYm9yZGVyLWFjdGlvbjtcclxuICAgIH1cclxuICB9XHJcblxyXG4gICY6ZGlzYWJsZWQge1xyXG4gICAgb3BhY2l0eTogLjY7XHJcbiAgICBjdXJzb3I6IGRlZmF1bHQ7XHJcbiAgfVxyXG5cclxuICAvLyBGb3IgRGVza3RvcCAmIFRhYmxldC5cclxuICBAbWVkaWEgKG1pbi13aWR0aDogJHNjcmVlbi1zeCkge1xyXG4gICAgd2lkdGg6ICR3aWR0aDtcclxuICB9XHJcbn1cclxuIiwiLypcbiogRm9udC5cbiovXG4vKlxuKiBCb2R5LlxuKi9cbi8qXG4qIFNjcmVlbnMuXG4qL1xuLypcbiogWi1pbmRleC5cbiovXG4vKlxuKiBTY3JvbGxiYXIuXG4qL1xuLypcbiogQm9yZGVyIFJhZGl1cy5cbiovXG4vKlxuKiBTcGFjZXMuXG4qL1xuLypcbiogQ29udHJvbHMgKHVzZSBmb3IgaW5wdXQgfHwgc2VsZWN0b3IgfHwgYnV0dG9ucykuXG4qL1xuLypcbiogQW5pbWF0aW9uLlxuKi9cbi8qXG4qIE5hdmJhci5cbiovXG4vKlxuKiBCdXR0b25zLlxuKi9cbi8qXG4qIEljb25zLlxuKi9cbi8qXG4qIFNlYXJjaCBJbnB1dC5cbiovXG4vKlxuKiBDaGVja0JveC5cbiovXG4vKlxuKiBEcm9wZG93bi5cbiovXG4vKlxuKiBDYXJkLlxuKi9cbi8qXG4qIE5vIERhdGEuXG4qL1xuLypcbiogVGFicy5cbiovXG4vKlxuKiBTaWRlYmFyLlxuKi9cbi8qXG4qIEZvcm0uXG4qL1xuLmFiLXNlYXJjaCB7XG4gIGRpc3BsYXk6IGlubGluZS1mbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgaGVpZ2h0OiA0MHB4O1xuICB3aWR0aDogMTAwJTtcbiAgY29sb3I6IHZhcigtLWlucHV0LWNvbG9yKTtcbiAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0taW5wdXQtYm9yZGVyKTtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0taW5wdXQtYmcpO1xuICBib3JkZXItcmFkaXVzOiAycHg7XG59XG4uYWItc2VhcmNoIGlucHV0IHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgcGFkZGluZzogNHB4IDE2cHg7XG4gIGJvcmRlcjogbm9uZTtcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xuICBmb250LXNpemU6IDE0cHg7XG4gIGNvbG9yOiBjdXJyZW50Q29sb3I7XG59XG4uYWItc2VhcmNoIGlucHV0OmZvY3VzIHtcbiAgb3V0bGluZTogbm9uZTtcbiAgYm94LXNoYWRvdzogMCAwIDEwcHggdmFyKC0tZm9jdXMtYm94KTtcbn1cbi5hYi1zZWFyY2g6YWN0aXZlOmVuYWJsZWQsIC5hYi1zZWFyY2g6aG92ZXI6ZW5hYmxlZCB7XG4gIGJvcmRlci1jb2xvcjogdmFyKC0taW5wdXQtYm9yZGVyLS1hY3Rpb24pO1xufVxuLmFiLXNlYXJjaDpkaXNhYmxlZCB7XG4gIG9wYWNpdHk6IDAuNjtcbiAgY3Vyc29yOiBkZWZhdWx0O1xufVxuQG1lZGlhIChtaW4td2lkdGg6IDY0MHB4KSB7XG4gIC5hYi1zZWFyY2gge1xuICAgIHdpZHRoOiAxMDAlO1xuICB9XG59XG4uYWItc2VhcmNoX19pY28ge1xuICBwYWRkaW5nLWxlZnQ6IDE2cHg7XG59IiwiQG1peGluIGZvY3VzLXZhcmlhbnQge1xyXG4gICY6Zm9jdXMge1xyXG4gICAgb3V0bGluZTogbm9uZTtcclxuICAgIGJveC1zaGFkb3c6IDAgMCAxMHB4IHZhcigtLWZvY3VzLWJveCk7XHJcbiAgfVxyXG59XHJcbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SearchComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-search',
                templateUrl: './search.component.html',
                styleUrls: ['./search.component.scss']
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/shared/components/sidebar/sidebar.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/shared/components/sidebar/sidebar.component.ts ***!
  \****************************************************************/
/*! exports provided: SidebarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SidebarComponent", function() { return SidebarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


const _c0 = [[["", "sidebar-head", ""]], [["", "sidebar-body", ""]]];
const _c1 = ["[sidebar-head]", "[sidebar-body]"];
class SidebarComponent {
    constructor() {
        this.sidebarTitle = '';
    }
}
SidebarComponent.ɵfac = function SidebarComponent_Factory(t) { return new (t || SidebarComponent)(); };
SidebarComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SidebarComponent, selectors: [["app-sidebar"]], inputs: { sidebarTitle: "sidebarTitle" }, ngContentSelectors: _c1, decls: 7, vars: 1, consts: [[1, "ab-sidebar"], [1, "ab-sidebar__head"], [1, "ab-sidebar__title"], [1, "ab-sidebar__body"]], template: function SidebarComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"](_c0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "aside", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h3", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](6, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.sidebarTitle);
    } }, styles: ["[_nghost-%COMP%] {\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  right: 0;\n  display: flex;\n  z-index: 3;\n}\n.ab-sidebar[_ngcontent-%COMP%] {\n  display: flex;\n  flex: 1;\n  flex-direction: column;\n  overflow: hidden;\n  background-color: var(--sidebar-bg);\n  border-left: 1px solid var(--sidebar-border);\n  min-width: 300px;\n}\n.ab-sidebar__head[_ngcontent-%COMP%], .ab-sidebar__body[_ngcontent-%COMP%] {\n  padding: 16px;\n}\n.ab-sidebar__head[_ngcontent-%COMP%] {\n  height: 60px;\n  display: flex;\n  align-items: center;\n  border-bottom: 1px solid var(--sidebar-border);\n}\n.ab-sidebar__title[_ngcontent-%COMP%] {\n  font-family: \"Proxima Extra Bold\", Arial, sans-serif;\n  font-size: 24px;\n  flex: 1;\n}\n.ab-sidebar__body[_ngcontent-%COMP%] {\n  flex: 1;\n  overflow-x: auto;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9zdHlsZXMvY29yZS92YXJpYWJsZXMvdmFyaWFibGVzLnNjc3MiLCJzcmMvc3R5bGVzL2NvbXBvbmVudHMvc2lkZWJhci5zY3NzIiwic3JjL2FwcC9zaGFyZWQvY29tcG9uZW50cy9zaWRlYmFyL3NpZGViYXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7O0NBQUE7QUFXQTs7Q0FBQTtBQU1BOztDQUFBO0FBT0E7O0NBQUE7QUFNQTs7Q0FBQTtBQUtBOztDQUFBO0FBS0E7O0NBQUE7QUFRQTs7Q0FBQTtBQU1BOztDQUFBO0FBS0E7O0NBQUE7QUFXQTs7Q0FBQTtBQVNBOztDQUFBO0FBS0E7O0NBQUE7QUFPQTs7Q0FBQTtBQUtBOztDQUFBO0FBUUE7O0NBQUE7QUFPQTs7Q0FBQTtBQU9BOztDQUFBO0FBT0E7O0NBQUE7QUFTQTs7Q0FBQTtBQ3BJQTtFQUNFLGtCQUFBO0VBQ0EsTUFBQTtFQUNBLFNBQUE7RUFDQSxRQUFBO0VBQ0EsYUFBQTtFQUNBLFVEb0JnQjtBRXVDbEI7QUR4REE7RUFDRSxhQUFBO0VBQ0EsT0FBQTtFQUNBLHNCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQ0FBQTtFQUNBLDRDQUFBO0VBQ0EsZ0JEK0djO0FFcERoQjtBRHpERTtFQUVFLGFEcUJTO0FFcUNiO0FEdkRFO0VBQ0UsWUR3R2tCO0VDdkdsQixhQUFBO0VBQ0EsbUJBQUE7RUFDQSw4Q0FBQTtBQ3lESjtBRHRERTtFQUNFLG9ERDlCcUI7RUMrQnJCLGVEM0JXO0VDNEJYLE9BQUE7QUN3REo7QURyREU7RUFDRSxPQUFBO0VBQ0EsZ0JBQUE7QUN1REoiLCJmaWxlIjoic3JjL2FwcC9zaGFyZWQvY29tcG9uZW50cy9zaWRlYmFyL3NpZGViYXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvKlxyXG4qIEZvbnQuXHJcbiovXHJcbiRmb250LWZhbWlseS1leHRyYS1ib2xkOiAnUHJveGltYSBFeHRyYSBCb2xkJywgQXJpYWwsIHNhbnMtc2VyaWY7XHJcbiRmb250LWZhbWlseS1ib2xkOiAnUHJveGltYSBCb2xkJywgQXJpYWwsIHNhbnMtc2VyaWY7XHJcbiRmb250LWZhbWlseS1yZWd1bGFyOiAnUHJveGltYSBSZWcnLCBBcmlhbCwgc2Fucy1zZXJpZjtcclxuXHJcbiRmb250LXNpemUtbGc6IDI0cHg7XHJcbiRmb250LXNpemUtbWQ6IDE2cHg7XHJcbiRmb250LXNpemUtYmFzZTogMTRweDtcclxuXHJcbi8qXHJcbiogQm9keS5cclxuKi9cclxuJGJvZHktZm9udC1zaXplOiAkZm9udC1zaXplLWJhc2U7XHJcbiRib2R5LWZvbnQtZmFtaWx5OiAkZm9udC1mYW1pbHktcmVndWxhcjtcclxuXHJcbi8qXHJcbiogU2NyZWVucy5cclxuKi9cclxuJHNjcmVlbi1zeDogNjQwcHg7XHJcbiRzY3JlZW4tbWQ6IDc4MHB4O1xyXG4kc2NyZWVuLWxnOiAxMjAwcHg7XHJcblxyXG4vKlxyXG4qIFotaW5kZXguXHJcbiovXHJcbiR6LWluZGV4LWRyb3Bkb3duOiAyO1xyXG4kei1pbmRleC1zaWRlYmFyOiAzO1xyXG5cclxuLypcclxuKiBTY3JvbGxiYXIuXHJcbiovXHJcbiRzY3JvbGxiYXItc2l6ZTogOHB4O1xyXG5cclxuLypcclxuKiBCb3JkZXIgUmFkaXVzLlxyXG4qL1xyXG4kYm9yZGVyLXJhZGl1cy1iYXNlOiAycHg7XHJcblxyXG4vKlxyXG4qIFNwYWNlcy5cclxuKi9cclxuJHNwYWNlLWJhc2U6IDE2cHg7XHJcbiRzcGFjZS1iYXNlLWRvdWJsZTogJHNwYWNlLWJhc2UqMjtcclxuJHNwYWNlLWJhc2UtaGFsZjogJHNwYWNlLWJhc2UvMjtcclxuJHNwYWNlLXNtYWxsOiAkc3BhY2UtYmFzZS80O1xyXG5cclxuLypcclxuKiBDb250cm9scyAodXNlIGZvciBpbnB1dCB8fCBzZWxlY3RvciB8fCBidXR0b25zKS5cclxuKi9cclxuJGNvbnRyb2wtaGVpZ2h0OiA0MHB4O1xyXG4kY29udHJvbC1zcGFjZXM6ICRzcGFjZS1zbWFsbCAkc3BhY2UtYmFzZTtcclxuXHJcbi8qXHJcbiogQW5pbWF0aW9uLlxyXG4qL1xyXG4kdHJhbnNpdGlvbi1iYXNlOiAyNzBtcyBlYXNlLWluLW91dDtcclxuXHJcbi8qXHJcbiogTmF2YmFyLlxyXG4qL1xyXG4kbmF2YmFyLXNwYWNlczogJHNwYWNlLWJhc2U7XHJcbiRuYXZiYXItZm9udC1zaXplOiAkZm9udC1zaXplLWxnO1xyXG5cclxuJG5hdmJhci1saW5rLWhlaWdodDogJGNvbnRyb2wtaGVpZ2h0O1xyXG4kbmF2YmFyLWxpbmstc3BhY2VzOiAkc3BhY2UtYmFzZSAwO1xyXG4kbmF2YmFyLWxpbmstZm9udC1mYW1pbHk6ICRmb250LWZhbWlseS1ib2xkO1xyXG4kbmF2YmFyLWxpbmstZm9udC1zaXplOiAkZm9udC1zaXplLW1kO1xyXG5cclxuLypcclxuKiBCdXR0b25zLlxyXG4qL1xyXG4kYnRuLWhlaWdodDogJGNvbnRyb2wtaGVpZ2h0IC0gMTBweDtcclxuJGJ0bi13aWR0aDogMTUwcHg7XHJcbiRidG4tc3BhY2VzOiAkY29udHJvbC1zcGFjZXM7XHJcbiRidG4tZm9udC1mYW1pbHk6ICRmb250LWZhbWlseS1ib2xkO1xyXG4kYnRuLWljb24tc3BhY2U6ICRzcGFjZS1zbWFsbDtcclxuXHJcbi8qXHJcbiogSWNvbnMuXHJcbiovXHJcbiRpY28tc2l6ZS1iYXNlOiAkZm9udC1zaXplLWxnO1xyXG5cclxuLypcclxuKiBTZWFyY2ggSW5wdXQuXHJcbiovXHJcbiRzZWFyY2gtaGVpZ2h0OiAkY29udHJvbC1oZWlnaHQ7XHJcbiRzZWFyY2gtc3BhY2VzOiAkY29udHJvbC1zcGFjZXM7XHJcbiRzZWFyY2gtaWNvbi1zcGFjZXM6ICRzcGFjZS1iYXNlO1xyXG5cclxuLypcclxuKiBDaGVja0JveC5cclxuKi9cclxuJGNoZWNrYm94LXNpemU6ICRmb250LXNpemUtbGc7XHJcblxyXG4vKlxyXG4qIERyb3Bkb3duLlxyXG4qL1xyXG4kZHJvcGRvd24taGVpZ2h0OiAkY29udHJvbC1oZWlnaHQ7XHJcbiRkcm9wZG93bi1idG4tc3BhY2VzOiAkY29udHJvbC1zcGFjZXM7XHJcbiRkcm9wZG93bi1tZW51LWhlaWdodDogMjAwcHg7XHJcbiRkcm9wZG93bi1tZW51LWl0ZW0tc3BhY2VzOiAkc3BhY2UtYmFzZTtcclxuXHJcbi8qXHJcbiogQ2FyZC5cclxuKi9cclxuJGNhcmQtc3BhY2VzOiAkc3BhY2UtYmFzZTtcclxuJGNhcmQtcmFkaXVzOiAkYm9yZGVyLXJhZGl1cy1iYXNlO1xyXG4kY2FyZC1oZWFkLWZvbnQtZmFtaWx5OiAkZm9udC1mYW1pbHktZXh0cmEtYm9sZDtcclxuXHJcbi8qXHJcbiogTm8gRGF0YS5cclxuKi9cclxuJG5vLWRhdGEtZm9udC1mYW1pbHk6ICRmb250LWZhbWlseS1leHRyYS1ib2xkO1xyXG4kbm8tZGF0YS1mb250LXNpemU6ICRmb250LXNpemUtbGc7XHJcbiRuby1kYXRhLXNwYWNlczogJHNwYWNlLWJhc2UtZG91YmxlIDA7XHJcblxyXG4vKlxyXG4qIFRhYnMuXHJcbiovXHJcbiR0YWItc3BhY2VzOiAkc3BhY2UtYmFzZTtcclxuJHRhYi1oZWFkLXdpZHRoOiAxNTBweDtcclxuJHRhYi1oZWFkLWJvcmRlcjogM3B4O1xyXG5cclxuLypcclxuKiBTaWRlYmFyLlxyXG4qL1xyXG4kc2lkZWJhci1zcGFjZXM6ICRzcGFjZS1iYXNlO1xyXG4kc2lkZWJhci13aWR0aDogMzAwcHg7XHJcbiRzaWRlYmFyLWhlYWQtaGVpZ2h0OiA2MHB4O1xyXG4kc2lkZWJhci10aXRsZS1mb250LWZhbWlseTogJGZvbnQtZmFtaWx5LWV4dHJhLWJvbGQ7XHJcbiRzaWRlYmFyLXRpdGxlLWZvbnQtc2l6ZTogJGZvbnQtc2l6ZS1sZztcclxuXHJcbi8qXHJcbiogRm9ybS5cclxuKi9cclxuJGZvcm0tcm93LXNwYWNlczogJHNwYWNlLWJhc2UtaGFsZiAwO1xyXG4iLCJAaW1wb3J0ICd+c3JjL3N0eWxlcy9jb3JlL3ZhcmlhYmxlcy92YXJpYWJsZXMnO1xyXG5cclxuOmhvc3Qge1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB0b3A6IDA7XHJcbiAgYm90dG9tOiAwO1xyXG4gIHJpZ2h0OiAwO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgei1pbmRleDogJHotaW5kZXgtc2lkZWJhcjtcclxufVxyXG5cclxuLmFiLXNpZGViYXIge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleDogMTtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tc2lkZWJhci1iZyk7XHJcbiAgYm9yZGVyLWxlZnQ6IDFweCBzb2xpZCB2YXIoLS1zaWRlYmFyLWJvcmRlcik7XHJcbiAgbWluLXdpZHRoOiAkc2lkZWJhci13aWR0aDtcclxuXHJcbiAgJl9faGVhZCxcclxuICAmX19ib2R5IHtcclxuICAgIHBhZGRpbmc6ICRzaWRlYmFyLXNwYWNlcztcclxuICB9XHJcblxyXG4gICZfX2hlYWQge1xyXG4gICAgaGVpZ2h0OiAkc2lkZWJhci1oZWFkLWhlaWdodDtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHZhcigtLXNpZGViYXItYm9yZGVyKTtcclxuICB9XHJcblxyXG4gICZfX3RpdGxlIHtcclxuICAgIGZvbnQtZmFtaWx5OiAkc2lkZWJhci10aXRsZS1mb250LWZhbWlseTtcclxuICAgIGZvbnQtc2l6ZTogJHNpZGViYXItdGl0bGUtZm9udC1zaXplO1xyXG4gICAgZmxleDogMTtcclxuICB9XHJcblxyXG4gICZfX2JvZHkge1xyXG4gICAgZmxleDogMTtcclxuICAgIG92ZXJmbG93LXg6IGF1dG87XHJcbiAgfVxyXG5cclxufVxyXG4iLCIvKlxuKiBGb250LlxuKi9cbi8qXG4qIEJvZHkuXG4qL1xuLypcbiogU2NyZWVucy5cbiovXG4vKlxuKiBaLWluZGV4LlxuKi9cbi8qXG4qIFNjcm9sbGJhci5cbiovXG4vKlxuKiBCb3JkZXIgUmFkaXVzLlxuKi9cbi8qXG4qIFNwYWNlcy5cbiovXG4vKlxuKiBDb250cm9scyAodXNlIGZvciBpbnB1dCB8fCBzZWxlY3RvciB8fCBidXR0b25zKS5cbiovXG4vKlxuKiBBbmltYXRpb24uXG4qL1xuLypcbiogTmF2YmFyLlxuKi9cbi8qXG4qIEJ1dHRvbnMuXG4qL1xuLypcbiogSWNvbnMuXG4qL1xuLypcbiogU2VhcmNoIElucHV0LlxuKi9cbi8qXG4qIENoZWNrQm94LlxuKi9cbi8qXG4qIERyb3Bkb3duLlxuKi9cbi8qXG4qIENhcmQuXG4qL1xuLypcbiogTm8gRGF0YS5cbiovXG4vKlxuKiBUYWJzLlxuKi9cbi8qXG4qIFNpZGViYXIuXG4qL1xuLypcbiogRm9ybS5cbiovXG46aG9zdCB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAwO1xuICBib3R0b206IDA7XG4gIHJpZ2h0OiAwO1xuICBkaXNwbGF5OiBmbGV4O1xuICB6LWluZGV4OiAzO1xufVxuXG4uYWItc2lkZWJhciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXg6IDE7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXNpZGViYXItYmcpO1xuICBib3JkZXItbGVmdDogMXB4IHNvbGlkIHZhcigtLXNpZGViYXItYm9yZGVyKTtcbiAgbWluLXdpZHRoOiAzMDBweDtcbn1cbi5hYi1zaWRlYmFyX19oZWFkLCAuYWItc2lkZWJhcl9fYm9keSB7XG4gIHBhZGRpbmc6IDE2cHg7XG59XG4uYWItc2lkZWJhcl9faGVhZCB7XG4gIGhlaWdodDogNjBweDtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHZhcigtLXNpZGViYXItYm9yZGVyKTtcbn1cbi5hYi1zaWRlYmFyX190aXRsZSB7XG4gIGZvbnQtZmFtaWx5OiBcIlByb3hpbWEgRXh0cmEgQm9sZFwiLCBBcmlhbCwgc2Fucy1zZXJpZjtcbiAgZm9udC1zaXplOiAyNHB4O1xuICBmbGV4OiAxO1xufVxuLmFiLXNpZGViYXJfX2JvZHkge1xuICBmbGV4OiAxO1xuICBvdmVyZmxvdy14OiBhdXRvO1xufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SidebarComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-sidebar',
                templateUrl: './sidebar.component.html',
                styleUrls: ['./sidebar.component.scss']
            }]
    }], null, { sidebarTitle: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "./src/app/shared/components/tabs/tabs.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/shared/components/tabs/tabs.component.ts ***!
  \**********************************************************/
/*! exports provided: TabsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TabsComponent", function() { return TabsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");



function TabsComponent_button_2_Template(rf, ctx) { if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TabsComponent_button_2_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4); const tab_r2 = ctx.$implicit; const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r3.onSelectTab(tab_r2); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const tab_r2 = ctx.$implicit;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("is-active", tab_r2.active);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("aria-label", tab_r2.tabAriaLabel)("aria-controls", tab_r2.ariaControls)("id", ctx_r0.tabId);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", tab_r2.name, " ");
} }
function TabsComponent_div_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](1, 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
const _c0 = [[["", "tab-body", ""]], [["", "tab-toolbar", ""]]];
const _c1 = ["[tab-body]", "[tab-toolbar]"];
class TabsComponent {
    constructor() {
        this.tabs = [];
        this.showToolbar = true;
        this.tabId = '';
        this.selectedTab = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    ngOnInit() {
        // Only for ARIA.
        this.tabs.forEach(elem => {
            this.tabId = elem.id;
        });
    }
    /**
     * Select tab.
     * @param {object} tab.
     */
    onSelectTab(tab) {
        this.tabs.filter(elem => elem.active = false);
        tab.active = true;
        this.selectedTab.emit(tab.name);
    }
}
TabsComponent.ɵfac = function TabsComponent_Factory(t) { return new (t || TabsComponent)(); };
TabsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: TabsComponent, selectors: [["app-tabs"]], inputs: { tabs: "tabs", showToolbar: "showToolbar" }, outputs: { selectedTab: "selectedTab" }, ngContentSelectors: _c1, decls: 6, vars: 4, consts: [[1, "ab-tab__wrapper"], ["role", "tablist", 1, "ab-tab__head"], ["class", "ab-tab__head__item", "role", "tab", "aria-selected", "true", 3, "is-active", "click", 4, "ngFor", "ngForOf"], ["class", "ab-tab__toolbar", 4, "ngIf"], ["tabindex", "0", "role", "tabpanel", 1, "ab-tab__body"], ["role", "tab", "aria-selected", "true", 1, "ab-tab__head__item", 3, "click"], [1, "ab-tab__toolbar"]], template: function TabsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"](_c0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, TabsComponent_button_2_Template, 2, 6, "button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, TabsComponent_div_3_Template, 2, 0, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.tabs);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.showToolbar);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("id", ctx.tabId)("aria-labelledby", ctx.tabId);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgIf"]], styles: [".ab-tab__head__item[_ngcontent-%COMP%] {\n  font-family: \"Proxima Bold\", Arial, sans-serif;\n  background-color: var(--tab-head-bg);\n  color: currentColor;\n  padding: 16px;\n  cursor: pointer;\n  border: 0;\n  border-left: 3px solid var(--tab-head-border);\n  transition: border-color 270ms ease-in-out;\n  text-transform: capitalize;\n  display: block;\n  width: 100%;\n  text-align: left;\n}\n.ab-tab__head__item[_ngcontent-%COMP%]:focus {\n  outline: none;\n  box-shadow: 0 0 10px var(--focus-box);\n}\n.ab-tab__head__item[_ngcontent-%COMP%]:active, .ab-tab__head__item[_ngcontent-%COMP%]:hover {\n  border-color: var(--tab-head-border--active);\n}\n.ab-tab__head__item[_ngcontent-%COMP%]:focus {\n  z-index: 1;\n}\n.ab-tab__head[_ngcontent-%COMP%]   .is-active[_ngcontent-%COMP%] {\n  border-color: var(--tab-head-border--active);\n}\n@media (min-width: 640px) {\n  .ab-tab__head[_ngcontent-%COMP%] {\n    display: flex;\n  }\n  .ab-tab__head__item[_ngcontent-%COMP%] {\n    text-align: center;\n    max-width: 150px;\n    border-left: unset;\n    border-top: 3px solid var(--tab-head-border);\n  }\n}\n.ab-tab__body[_ngcontent-%COMP%] {\n  overflow: hidden;\n  overflow-y: auto;\n  display: flex;\n  flex: 1;\n}\n.ab-tab__body[_ngcontent-%COMP%]:focus {\n  outline: none;\n  box-shadow: 0 0 10px var(--focus-box);\n}\n.ab-tab__toolbar[_ngcontent-%COMP%] {\n  background-color: var(--tab-head-bg);\n  padding: 16px;\n}\n.ab-tab__wrapper[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  flex: 1;\n}\n[_nghost-%COMP%] {\n  display: flex;\n  flex: 1;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9zdHlsZXMvY29yZS92YXJpYWJsZXMvdmFyaWFibGVzLnNjc3MiLCJzcmMvc3R5bGVzL2NvbXBvbmVudHMvdGFicy5zY3NzIiwic3JjL2FwcC9zaGFyZWQvY29tcG9uZW50cy90YWJzL3RhYnMuY29tcG9uZW50LnNjc3MiLCJzcmMvc3R5bGVzL2NvcmUvbWl4aW5zL21peGluLWZvY3VzLXZhcmlhbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Q0FBQTtBQVdBOztDQUFBO0FBTUE7O0NBQUE7QUFPQTs7Q0FBQTtBQU1BOztDQUFBO0FBS0E7O0NBQUE7QUFLQTs7Q0FBQTtBQVFBOztDQUFBO0FBTUE7O0NBQUE7QUFLQTs7Q0FBQTtBQVdBOztDQUFBO0FBU0E7O0NBQUE7QUFLQTs7Q0FBQTtBQU9BOztDQUFBO0FBS0E7O0NBQUE7QUFRQTs7Q0FBQTtBQU9BOztDQUFBO0FBT0E7O0NBQUE7QUFPQTs7Q0FBQTtBQVNBOztDQUFBO0FDaElJO0VBQ0UsOENESGE7RUNJYixvQ0FBQTtFQUNBLG1CQUFBO0VBQ0EsYURpQ087RUNoQ1AsZUFBQTtFQUNBLFNBQUE7RUFDQSw2Q0FBQTtFQUNBLDBDQUFBO0VBQ0EsMEJBQUE7RUFDQSxjQUFBO0VBQ0EsV0FBQTtFQUNBLGdCQUFBO0FDdUROO0FDeEVFO0VBQ0UsYUFBQTtFQUNBLHFDQUFBO0FEMEVKO0FEeERNO0VBRUUsNENBQUE7QUN5RFI7QURyRE07RUFDRSxVQUFBO0FDdURSO0FEbkRJO0VBQ0UsNENBQUE7QUNxRE47QURqREk7RUFoQ0Y7SUFpQ0ksYUFBQTtFQ29ESjtFRGxESTtJQUNFLGtCQUFBO0lBQ0EsZ0JEZ0ZTO0lDL0VULGtCQUFBO0lBQ0EsNENBQUE7RUNvRE47QUFDRjtBRGhERTtFQUNFLGdCQUFBO0VBQ0EsZ0JBQUE7RUFJQSxhQUFBO0VBQ0EsT0FBQTtBQytDSjtBQ3RHRTtFQUNFLGFBQUE7RUFDQSxxQ0FBQTtBRHdHSjtBRGhERTtFQUNFLG9DQUFBO0VBQ0EsYURsQlM7QUVvRWI7QUQvQ0U7RUFHRSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxPQUFBO0FDK0NKO0FBbEhBO0VBR0UsYUFBQTtFQUNBLE9BQUE7QUFtSEYiLCJmaWxlIjoic3JjL2FwcC9zaGFyZWQvY29tcG9uZW50cy90YWJzL3RhYnMuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvKlxyXG4qIEZvbnQuXHJcbiovXHJcbiRmb250LWZhbWlseS1leHRyYS1ib2xkOiAnUHJveGltYSBFeHRyYSBCb2xkJywgQXJpYWwsIHNhbnMtc2VyaWY7XHJcbiRmb250LWZhbWlseS1ib2xkOiAnUHJveGltYSBCb2xkJywgQXJpYWwsIHNhbnMtc2VyaWY7XHJcbiRmb250LWZhbWlseS1yZWd1bGFyOiAnUHJveGltYSBSZWcnLCBBcmlhbCwgc2Fucy1zZXJpZjtcclxuXHJcbiRmb250LXNpemUtbGc6IDI0cHg7XHJcbiRmb250LXNpemUtbWQ6IDE2cHg7XHJcbiRmb250LXNpemUtYmFzZTogMTRweDtcclxuXHJcbi8qXHJcbiogQm9keS5cclxuKi9cclxuJGJvZHktZm9udC1zaXplOiAkZm9udC1zaXplLWJhc2U7XHJcbiRib2R5LWZvbnQtZmFtaWx5OiAkZm9udC1mYW1pbHktcmVndWxhcjtcclxuXHJcbi8qXHJcbiogU2NyZWVucy5cclxuKi9cclxuJHNjcmVlbi1zeDogNjQwcHg7XHJcbiRzY3JlZW4tbWQ6IDc4MHB4O1xyXG4kc2NyZWVuLWxnOiAxMjAwcHg7XHJcblxyXG4vKlxyXG4qIFotaW5kZXguXHJcbiovXHJcbiR6LWluZGV4LWRyb3Bkb3duOiAyO1xyXG4kei1pbmRleC1zaWRlYmFyOiAzO1xyXG5cclxuLypcclxuKiBTY3JvbGxiYXIuXHJcbiovXHJcbiRzY3JvbGxiYXItc2l6ZTogOHB4O1xyXG5cclxuLypcclxuKiBCb3JkZXIgUmFkaXVzLlxyXG4qL1xyXG4kYm9yZGVyLXJhZGl1cy1iYXNlOiAycHg7XHJcblxyXG4vKlxyXG4qIFNwYWNlcy5cclxuKi9cclxuJHNwYWNlLWJhc2U6IDE2cHg7XHJcbiRzcGFjZS1iYXNlLWRvdWJsZTogJHNwYWNlLWJhc2UqMjtcclxuJHNwYWNlLWJhc2UtaGFsZjogJHNwYWNlLWJhc2UvMjtcclxuJHNwYWNlLXNtYWxsOiAkc3BhY2UtYmFzZS80O1xyXG5cclxuLypcclxuKiBDb250cm9scyAodXNlIGZvciBpbnB1dCB8fCBzZWxlY3RvciB8fCBidXR0b25zKS5cclxuKi9cclxuJGNvbnRyb2wtaGVpZ2h0OiA0MHB4O1xyXG4kY29udHJvbC1zcGFjZXM6ICRzcGFjZS1zbWFsbCAkc3BhY2UtYmFzZTtcclxuXHJcbi8qXHJcbiogQW5pbWF0aW9uLlxyXG4qL1xyXG4kdHJhbnNpdGlvbi1iYXNlOiAyNzBtcyBlYXNlLWluLW91dDtcclxuXHJcbi8qXHJcbiogTmF2YmFyLlxyXG4qL1xyXG4kbmF2YmFyLXNwYWNlczogJHNwYWNlLWJhc2U7XHJcbiRuYXZiYXItZm9udC1zaXplOiAkZm9udC1zaXplLWxnO1xyXG5cclxuJG5hdmJhci1saW5rLWhlaWdodDogJGNvbnRyb2wtaGVpZ2h0O1xyXG4kbmF2YmFyLWxpbmstc3BhY2VzOiAkc3BhY2UtYmFzZSAwO1xyXG4kbmF2YmFyLWxpbmstZm9udC1mYW1pbHk6ICRmb250LWZhbWlseS1ib2xkO1xyXG4kbmF2YmFyLWxpbmstZm9udC1zaXplOiAkZm9udC1zaXplLW1kO1xyXG5cclxuLypcclxuKiBCdXR0b25zLlxyXG4qL1xyXG4kYnRuLWhlaWdodDogJGNvbnRyb2wtaGVpZ2h0IC0gMTBweDtcclxuJGJ0bi13aWR0aDogMTUwcHg7XHJcbiRidG4tc3BhY2VzOiAkY29udHJvbC1zcGFjZXM7XHJcbiRidG4tZm9udC1mYW1pbHk6ICRmb250LWZhbWlseS1ib2xkO1xyXG4kYnRuLWljb24tc3BhY2U6ICRzcGFjZS1zbWFsbDtcclxuXHJcbi8qXHJcbiogSWNvbnMuXHJcbiovXHJcbiRpY28tc2l6ZS1iYXNlOiAkZm9udC1zaXplLWxnO1xyXG5cclxuLypcclxuKiBTZWFyY2ggSW5wdXQuXHJcbiovXHJcbiRzZWFyY2gtaGVpZ2h0OiAkY29udHJvbC1oZWlnaHQ7XHJcbiRzZWFyY2gtc3BhY2VzOiAkY29udHJvbC1zcGFjZXM7XHJcbiRzZWFyY2gtaWNvbi1zcGFjZXM6ICRzcGFjZS1iYXNlO1xyXG5cclxuLypcclxuKiBDaGVja0JveC5cclxuKi9cclxuJGNoZWNrYm94LXNpemU6ICRmb250LXNpemUtbGc7XHJcblxyXG4vKlxyXG4qIERyb3Bkb3duLlxyXG4qL1xyXG4kZHJvcGRvd24taGVpZ2h0OiAkY29udHJvbC1oZWlnaHQ7XHJcbiRkcm9wZG93bi1idG4tc3BhY2VzOiAkY29udHJvbC1zcGFjZXM7XHJcbiRkcm9wZG93bi1tZW51LWhlaWdodDogMjAwcHg7XHJcbiRkcm9wZG93bi1tZW51LWl0ZW0tc3BhY2VzOiAkc3BhY2UtYmFzZTtcclxuXHJcbi8qXHJcbiogQ2FyZC5cclxuKi9cclxuJGNhcmQtc3BhY2VzOiAkc3BhY2UtYmFzZTtcclxuJGNhcmQtcmFkaXVzOiAkYm9yZGVyLXJhZGl1cy1iYXNlO1xyXG4kY2FyZC1oZWFkLWZvbnQtZmFtaWx5OiAkZm9udC1mYW1pbHktZXh0cmEtYm9sZDtcclxuXHJcbi8qXHJcbiogTm8gRGF0YS5cclxuKi9cclxuJG5vLWRhdGEtZm9udC1mYW1pbHk6ICRmb250LWZhbWlseS1leHRyYS1ib2xkO1xyXG4kbm8tZGF0YS1mb250LXNpemU6ICRmb250LXNpemUtbGc7XHJcbiRuby1kYXRhLXNwYWNlczogJHNwYWNlLWJhc2UtZG91YmxlIDA7XHJcblxyXG4vKlxyXG4qIFRhYnMuXHJcbiovXHJcbiR0YWItc3BhY2VzOiAkc3BhY2UtYmFzZTtcclxuJHRhYi1oZWFkLXdpZHRoOiAxNTBweDtcclxuJHRhYi1oZWFkLWJvcmRlcjogM3B4O1xyXG5cclxuLypcclxuKiBTaWRlYmFyLlxyXG4qL1xyXG4kc2lkZWJhci1zcGFjZXM6ICRzcGFjZS1iYXNlO1xyXG4kc2lkZWJhci13aWR0aDogMzAwcHg7XHJcbiRzaWRlYmFyLWhlYWQtaGVpZ2h0OiA2MHB4O1xyXG4kc2lkZWJhci10aXRsZS1mb250LWZhbWlseTogJGZvbnQtZmFtaWx5LWV4dHJhLWJvbGQ7XHJcbiRzaWRlYmFyLXRpdGxlLWZvbnQtc2l6ZTogJGZvbnQtc2l6ZS1sZztcclxuXHJcbi8qXHJcbiogRm9ybS5cclxuKi9cclxuJGZvcm0tcm93LXNwYWNlczogJHNwYWNlLWJhc2UtaGFsZiAwO1xyXG4iLCJAaW1wb3J0IFwifnNyYy9zdHlsZXMvY29yZS92YXJpYWJsZXMvdmFyaWFibGVzXCI7XHJcbkBpbXBvcnQgXCJ+c3JjL3N0eWxlcy9jb3JlL21peGlucy9taXhpbi1mb2N1cy12YXJpYW50XCI7XHJcbkBpbXBvcnQgXCJ+c3JjL3N0eWxlcy9jb3JlL21peGlucy9taXhpbi1mbGV4LXZhcmlhbnRcIjtcclxuXHJcbi5hYi10YWIge1xyXG4gICZfX2hlYWQge1xyXG4gICAgJl9faXRlbSB7XHJcbiAgICAgIGZvbnQtZmFtaWx5OiAkZm9udC1mYW1pbHktYm9sZDtcclxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tdGFiLWhlYWQtYmcpO1xyXG4gICAgICBjb2xvcjogY3VycmVudENvbG9yO1xyXG4gICAgICBwYWRkaW5nOiAkdGFiLXNwYWNlcztcclxuICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgICBib3JkZXI6IDA7XHJcbiAgICAgIGJvcmRlci1sZWZ0OiAkdGFiLWhlYWQtYm9yZGVyIHNvbGlkIHZhcigtLXRhYi1oZWFkLWJvcmRlcik7XHJcbiAgICAgIHRyYW5zaXRpb246IGJvcmRlci1jb2xvciAkdHJhbnNpdGlvbi1iYXNlO1xyXG4gICAgICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcclxuICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gICAgICBAaW5jbHVkZSBmb2N1cy12YXJpYW50O1xyXG5cclxuICAgICAgJjphY3RpdmUsXHJcbiAgICAgICY6aG92ZXIge1xyXG4gICAgICAgIGJvcmRlci1jb2xvcjogdmFyKC0tdGFiLWhlYWQtYm9yZGVyLS1hY3RpdmUpO1xyXG4gICAgICB9XHJcblxyXG4gICAgICAvLyBGb3IgY29ycmVjdCA6Zm9jdXMgb24gdGhlIHRhYi5cclxuICAgICAgJjpmb2N1cyB7XHJcbiAgICAgICAgei1pbmRleDogMTtcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC5pcy1hY3RpdmUge1xyXG4gICAgICBib3JkZXItY29sb3I6IHZhcigtLXRhYi1oZWFkLWJvcmRlci0tYWN0aXZlKTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBGb3IgRGVza3RvcCAmIFRhYmxldC5cclxuICAgIEBtZWRpYSAobWluLXdpZHRoOiAkc2NyZWVuLXN4KSB7XHJcbiAgICAgIGRpc3BsYXk6IGZsZXg7XHJcblxyXG4gICAgICAmX19pdGVtIHtcclxuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgbWF4LXdpZHRoOiAkdGFiLWhlYWQtd2lkdGg7XHJcbiAgICAgICAgYm9yZGVyLWxlZnQ6IHVuc2V0O1xyXG4gICAgICAgIGJvcmRlci10b3A6ICR0YWItaGVhZC1ib3JkZXIgc29saWQgdmFyKC0tdGFiLWhlYWQtYm9yZGVyKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgJl9fYm9keSB7XHJcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgb3ZlcmZsb3cteTogYXV0bztcclxuICAgIEBpbmNsdWRlIGZvY3VzLXZhcmlhbnQ7XHJcblxyXG4gICAgLy8gU3RyZXRjaCBjb250YWluZXIgZnVsbCBzY3JlZW4uXHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleDogMTtcclxuICB9XHJcblxyXG4gICZfX3Rvb2xiYXIge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tdGFiLWhlYWQtYmcpO1xyXG4gICAgcGFkZGluZzogJHRhYi1zcGFjZXM7XHJcbiAgfVxyXG5cclxuICAmX193cmFwcGVyIHtcclxuXHJcbiAgICAvLyBTdHJldGNoIGNvbnRhaW5lciBmdWxsIHNjcmVlbi5cclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgZmxleDogMTtcclxuICB9XHJcbn1cclxuIiwiLypcbiogRm9udC5cbiovXG4vKlxuKiBCb2R5LlxuKi9cbi8qXG4qIFNjcmVlbnMuXG4qL1xuLypcbiogWi1pbmRleC5cbiovXG4vKlxuKiBTY3JvbGxiYXIuXG4qL1xuLypcbiogQm9yZGVyIFJhZGl1cy5cbiovXG4vKlxuKiBTcGFjZXMuXG4qL1xuLypcbiogQ29udHJvbHMgKHVzZSBmb3IgaW5wdXQgfHwgc2VsZWN0b3IgfHwgYnV0dG9ucykuXG4qL1xuLypcbiogQW5pbWF0aW9uLlxuKi9cbi8qXG4qIE5hdmJhci5cbiovXG4vKlxuKiBCdXR0b25zLlxuKi9cbi8qXG4qIEljb25zLlxuKi9cbi8qXG4qIFNlYXJjaCBJbnB1dC5cbiovXG4vKlxuKiBDaGVja0JveC5cbiovXG4vKlxuKiBEcm9wZG93bi5cbiovXG4vKlxuKiBDYXJkLlxuKi9cbi8qXG4qIE5vIERhdGEuXG4qL1xuLypcbiogVGFicy5cbiovXG4vKlxuKiBTaWRlYmFyLlxuKi9cbi8qXG4qIEZvcm0uXG4qL1xuLmFiLXRhYl9faGVhZF9faXRlbSB7XG4gIGZvbnQtZmFtaWx5OiBcIlByb3hpbWEgQm9sZFwiLCBBcmlhbCwgc2Fucy1zZXJpZjtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tdGFiLWhlYWQtYmcpO1xuICBjb2xvcjogY3VycmVudENvbG9yO1xuICBwYWRkaW5nOiAxNnB4O1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIGJvcmRlcjogMDtcbiAgYm9yZGVyLWxlZnQ6IDNweCBzb2xpZCB2YXIoLS10YWItaGVhZC1ib3JkZXIpO1xuICB0cmFuc2l0aW9uOiBib3JkZXItY29sb3IgMjcwbXMgZWFzZS1pbi1vdXQ7XG4gIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xuICBkaXNwbGF5OiBibG9jaztcbiAgd2lkdGg6IDEwMCU7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG59XG4uYWItdGFiX19oZWFkX19pdGVtOmZvY3VzIHtcbiAgb3V0bGluZTogbm9uZTtcbiAgYm94LXNoYWRvdzogMCAwIDEwcHggdmFyKC0tZm9jdXMtYm94KTtcbn1cbi5hYi10YWJfX2hlYWRfX2l0ZW06YWN0aXZlLCAuYWItdGFiX19oZWFkX19pdGVtOmhvdmVyIHtcbiAgYm9yZGVyLWNvbG9yOiB2YXIoLS10YWItaGVhZC1ib3JkZXItLWFjdGl2ZSk7XG59XG4uYWItdGFiX19oZWFkX19pdGVtOmZvY3VzIHtcbiAgei1pbmRleDogMTtcbn1cbi5hYi10YWJfX2hlYWQgLmlzLWFjdGl2ZSB7XG4gIGJvcmRlci1jb2xvcjogdmFyKC0tdGFiLWhlYWQtYm9yZGVyLS1hY3RpdmUpO1xufVxuQG1lZGlhIChtaW4td2lkdGg6IDY0MHB4KSB7XG4gIC5hYi10YWJfX2hlYWQge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gIH1cbiAgLmFiLXRhYl9faGVhZF9faXRlbSB7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIG1heC13aWR0aDogMTUwcHg7XG4gICAgYm9yZGVyLWxlZnQ6IHVuc2V0O1xuICAgIGJvcmRlci10b3A6IDNweCBzb2xpZCB2YXIoLS10YWItaGVhZC1ib3JkZXIpO1xuICB9XG59XG4uYWItdGFiX19ib2R5IHtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgb3ZlcmZsb3cteTogYXV0bztcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleDogMTtcbn1cbi5hYi10YWJfX2JvZHk6Zm9jdXMge1xuICBvdXRsaW5lOiBub25lO1xuICBib3gtc2hhZG93OiAwIDAgMTBweCB2YXIoLS1mb2N1cy1ib3gpO1xufVxuLmFiLXRhYl9fdG9vbGJhciB7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXRhYi1oZWFkLWJnKTtcbiAgcGFkZGluZzogMTZweDtcbn1cbi5hYi10YWJfX3dyYXBwZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBmbGV4OiAxO1xufVxuXG46aG9zdCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXg6IDE7XG59IiwiQG1peGluIGZvY3VzLXZhcmlhbnQge1xyXG4gICY6Zm9jdXMge1xyXG4gICAgb3V0bGluZTogbm9uZTtcclxuICAgIGJveC1zaGFkb3c6IDAgMCAxMHB4IHZhcigtLWZvY3VzLWJveCk7XHJcbiAgfVxyXG59XHJcbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TabsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-tabs',
                templateUrl: './tabs.component.html',
                styleUrls: ['./tabs.component.scss']
            }]
    }], null, { tabs: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], showToolbar: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], selectedTab: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }] }); })();


/***/ }),

/***/ "./src/app/shared/services/local-storage.service.ts":
/*!**********************************************************!*\
  !*** ./src/app/shared/services/local-storage.service.ts ***!
  \**********************************************************/
/*! exports provided: LocalStorageService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LocalStorageService", function() { return LocalStorageService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class LocalStorageService {
    constructor() {
        this.storage = window.localStorage;
    }
    get(key) {
        return this.storage.getItem(key);
    }
    set(key, value) {
        this.storage.setItem(key, value);
    }
    getObject(key) {
        const json = this.get(key);
        try {
            const obj = JSON.parse(json);
            return obj;
        }
        catch (e) {
            console.error(e.message);
            return;
        }
    }
}
LocalStorageService.ɵfac = function LocalStorageService_Factory(t) { return new (t || LocalStorageService)(); };
LocalStorageService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: LocalStorageService, factory: LocalStorageService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LocalStorageService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/store/filter/filter.actions.ts":
/*!************************************************!*\
  !*** ./src/app/store/filter/filter.actions.ts ***!
  \************************************************/
/*! exports provided: filterActionsType, FilterCloseAction, FilterToggleAction */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "filterActionsType", function() { return filterActionsType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FilterCloseAction", function() { return FilterCloseAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FilterToggleAction", function() { return FilterToggleAction; });
var filterActionsType;
(function (filterActionsType) {
    filterActionsType["close"] = "[FILTER] close";
    filterActionsType["toggle"] = "[FILTER] toggle";
})(filterActionsType || (filterActionsType = {}));
class FilterCloseAction {
    constructor() {
        this.type = filterActionsType.close;
    }
}
class FilterToggleAction {
    constructor() {
        this.type = filterActionsType.toggle;
    }
}


/***/ }),

/***/ "./src/app/store/filter/filter.reducer.ts":
/*!************************************************!*\
  !*** ./src/app/store/filter/filter.reducer.ts ***!
  \************************************************/
/*! exports provided: filterNode, filterReducer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "filterNode", function() { return filterNode; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "filterReducer", function() { return filterReducer; });
/* harmony import */ var _filter_actions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./filter.actions */ "./src/app/store/filter/filter.actions.ts");

const filterNode = 'filter';
const initialState = {
    open: false
};
const filterReducer = (state = initialState, action) => {
    switch (action.type) {
        case _filter_actions__WEBPACK_IMPORTED_MODULE_0__["filterActionsType"].close:
            return Object.assign(Object.assign({}, state), { open: false });
        case _filter_actions__WEBPACK_IMPORTED_MODULE_0__["filterActionsType"].toggle:
            return Object.assign(Object.assign({}, state), { open: !state.open });
        default:
            return state;
    }
};


/***/ }),

/***/ "./src/app/store/filter/filter.selectors.ts":
/*!**************************************************!*\
  !*** ./src/app/store/filter/filter.selectors.ts ***!
  \**************************************************/
/*! exports provided: selectFilterFeature, selectFilterOpen */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectFilterFeature", function() { return selectFilterFeature; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectFilterOpen", function() { return selectFilterOpen; });
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/__ivy_ngcc__/fesm2015/store.js");
/* harmony import */ var _filter_reducer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./filter.reducer */ "./src/app/store/filter/filter.reducer.ts");


const selectFilterFeature = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createFeatureSelector"])(_filter_reducer__WEBPACK_IMPORTED_MODULE_1__["filterNode"]);
const selectFilterOpen = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(selectFilterFeature, (state) => state.open);


/***/ }),

/***/ "./src/app/store/reducers/index.ts":
/*!*****************************************!*\
  !*** ./src/app/store/reducers/index.ts ***!
  \*****************************************/
/*! exports provided: reducers, metaReducers */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "reducers", function() { return reducers; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "metaReducers", function() { return metaReducers; });
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _sidebar_sidebar_reducer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../sidebar/sidebar.reducer */ "./src/app/store/sidebar/sidebar.reducer.ts");
/* harmony import */ var _filter_filter_reducer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../filter/filter.reducer */ "./src/app/store/filter/filter.reducer.ts");



const reducers = {
    [_sidebar_sidebar_reducer__WEBPACK_IMPORTED_MODULE_1__["sidebarNode"]]: _sidebar_sidebar_reducer__WEBPACK_IMPORTED_MODULE_1__["sidebarReducer"],
    [_filter_filter_reducer__WEBPACK_IMPORTED_MODULE_2__["filterNode"]]: _filter_filter_reducer__WEBPACK_IMPORTED_MODULE_2__["filterReducer"],
};
const metaReducers = !_environments_environment__WEBPACK_IMPORTED_MODULE_0__["environment"].production ? [] : [];


/***/ }),

/***/ "./src/app/store/sidebar/sidebar.actions.ts":
/*!**************************************************!*\
  !*** ./src/app/store/sidebar/sidebar.actions.ts ***!
  \**************************************************/
/*! exports provided: sidebarActionsType, SidebarCloseAction, SidebarToggleAction */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sidebarActionsType", function() { return sidebarActionsType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SidebarCloseAction", function() { return SidebarCloseAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SidebarToggleAction", function() { return SidebarToggleAction; });
var sidebarActionsType;
(function (sidebarActionsType) {
    sidebarActionsType["close"] = "[SIDEBAR] close";
    sidebarActionsType["toggle"] = "[SIDEBAR] toggle";
})(sidebarActionsType || (sidebarActionsType = {}));
class SidebarCloseAction {
    constructor() {
        this.type = sidebarActionsType.close;
    }
}
class SidebarToggleAction {
    constructor() {
        this.type = sidebarActionsType.toggle;
    }
}


/***/ }),

/***/ "./src/app/store/sidebar/sidebar.reducer.ts":
/*!**************************************************!*\
  !*** ./src/app/store/sidebar/sidebar.reducer.ts ***!
  \**************************************************/
/*! exports provided: sidebarNode, sidebarReducer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sidebarNode", function() { return sidebarNode; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sidebarReducer", function() { return sidebarReducer; });
/* harmony import */ var _sidebar_actions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./sidebar.actions */ "./src/app/store/sidebar/sidebar.actions.ts");

const sidebarNode = 'sidebar';
const initialState = {
    open: false
};
const sidebarReducer = (state = initialState, action) => {
    switch (action.type) {
        case _sidebar_actions__WEBPACK_IMPORTED_MODULE_0__["sidebarActionsType"].close:
            return Object.assign(Object.assign({}, state), { open: false });
        case _sidebar_actions__WEBPACK_IMPORTED_MODULE_0__["sidebarActionsType"].toggle:
            return Object.assign(Object.assign({}, state), { open: !state.open });
        default:
            return state;
    }
};


/***/ }),

/***/ "./src/app/store/sidebar/sidebar.selectors.ts":
/*!****************************************************!*\
  !*** ./src/app/store/sidebar/sidebar.selectors.ts ***!
  \****************************************************/
/*! exports provided: selectSidebarFeature, selectSidebarOpen */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectSidebarFeature", function() { return selectSidebarFeature; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectSidebarOpen", function() { return selectSidebarOpen; });
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/__ivy_ngcc__/fesm2015/store.js");
/* harmony import */ var _sidebar_reducer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./sidebar.reducer */ "./src/app/store/sidebar/sidebar.reducer.ts");


const selectSidebarFeature = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createFeatureSelector"])(_sidebar_reducer__WEBPACK_IMPORTED_MODULE_1__["sidebarNode"]);
const selectSidebarOpen = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(selectSidebarFeature, (state) => state.open);


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
const environment = {
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\marin\Desktop\HOME\ab-test\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map