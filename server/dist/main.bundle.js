webpackJsonp([1],{

/***/ "../../../../../src async recursive":
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = "../../../../../src async recursive";

/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "footer {\n    background-color: #000;\n    position: fixed;\n    bottom: 0;\n    left: 0;\n    right: 0;\n    height: 35px;\n    color: #CCC\n}\n\nfooter p {\n    padding: 10.5px;\n    margin: 0;\n    line-height: 100%\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<app-navbar></app-navbar>\n<div class=\"container\">\n  <flash-messages class=\"text-center\"></flash-messages>\n  <router-outlet></router-outlet>\n</div>\n<!--\n <footer>\n    <p>© 2017<a style=\"color:#0a93a6; text-decoration:none;\" href=\"#\"> Isak Granqvist</a>, All rights reserved 2016-2017.</p>\n</footer>  \n  -->"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = (function () {
    function AppComponent() {
        this.title = 'app';
    }
    return AppComponent;
}());
AppComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-root',
        template: __webpack_require__("../../../../../src/app/app.component.html"),
        styles: [__webpack_require__("../../../../../src/app/app.component.css")]
    })
], AppComponent);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_router__ = __webpack_require__("../../../../../src/app/app.router.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages__ = __webpack_require__("../../../../angular2-flash-messages/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_platform_browser_animations__ = __webpack_require__("../../../platform-browser/@angular/platform-browser/animations.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_material__ = __webpack_require__("../../../material/@angular/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__guards_auth_guard__ = __webpack_require__("../../../../../src/app/guards/auth.guard.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__guards_notauth_guard__ = __webpack_require__("../../../../../src/app/guards/notauth.guard.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__services_auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__services_general_service__ = __webpack_require__("../../../../../src/app/services/general.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__home_home_component__ = __webpack_require__("../../../../../src/app/home/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__register_register_component__ = __webpack_require__("../../../../../src/app/register/register.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__login_login_component__ = __webpack_require__("../../../../../src/app/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__navbar_navbar_component__ = __webpack_require__("../../../../../src/app/navbar/navbar.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__profile_profile_component__ = __webpack_require__("../../../../../src/app/profile/profile.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__profile1_profile1_component__ = __webpack_require__("../../../../../src/app/profile1/profile1.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__edit_post_edit_post_component__ = __webpack_require__("../../../../../src/app/edit-post/edit-post.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__edit_bio_edit_bio_component__ = __webpack_require__("../../../../../src/app/edit-bio/edit-bio.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__resetpassword_resetpassword_component__ = __webpack_require__("../../../../../src/app/resetpassword/resetpassword.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__resetpassword_returnmail_returnmail_component__ = __webpack_require__("../../../../../src/app/resetpassword/returnmail/returnmail.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__search_search_component__ = __webpack_require__("../../../../../src/app/search/search.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__feed_feed_component__ = __webpack_require__("../../../../../src/app/feed/feed.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__mininav_mininav_component__ = __webpack_require__("../../../../../src/app/mininav/mininav.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__contact_contact_component__ = __webpack_require__("../../../../../src/app/contact/contact.component.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



























var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_5__angular_core__["NgModule"])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_12__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_13__home_home_component__["a" /* HomeComponent */],
            __WEBPACK_IMPORTED_MODULE_14__register_register_component__["a" /* RegisterComponent */],
            __WEBPACK_IMPORTED_MODULE_15__login_login_component__["a" /* LoginComponent */],
            __WEBPACK_IMPORTED_MODULE_16__navbar_navbar_component__["a" /* NavbarComponent */],
            __WEBPACK_IMPORTED_MODULE_17__profile_profile_component__["a" /* ProfileComponent */],
            __WEBPACK_IMPORTED_MODULE_18__profile1_profile1_component__["a" /* Profile1Component */],
            __WEBPACK_IMPORTED_MODULE_19__edit_post_edit_post_component__["a" /* EditPostComponent */],
            __WEBPACK_IMPORTED_MODULE_20__edit_bio_edit_bio_component__["a" /* EditBioComponent */],
            __WEBPACK_IMPORTED_MODULE_21__resetpassword_resetpassword_component__["a" /* ResetpasswordComponent */],
            __WEBPACK_IMPORTED_MODULE_22__resetpassword_returnmail_returnmail_component__["a" /* ReturnmailComponent */],
            __WEBPACK_IMPORTED_MODULE_23__search_search_component__["a" /* SearchComponent */],
            __WEBPACK_IMPORTED_MODULE_24__feed_feed_component__["a" /* FeedComponent */],
            __WEBPACK_IMPORTED_MODULE_25__mininav_mininav_component__["a" /* MininavComponent */],
            __WEBPACK_IMPORTED_MODULE_26__contact_contact_component__["a" /* ContactComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_4__angular_material__["a" /* MdTabsModule */],
            __WEBPACK_IMPORTED_MODULE_4__angular_material__["b" /* MdToolbarModule */],
            __WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages__["FlashMessagesModule"],
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
            __WEBPACK_IMPORTED_MODULE_1__app_router__["a" /* AppRoutingModule */],
            __WEBPACK_IMPORTED_MODULE_7__angular_http__["HttpModule"],
            __WEBPACK_IMPORTED_MODULE_6__angular_forms__["a" /* FormsModule */]
        ],
        providers: [__WEBPACK_IMPORTED_MODULE_10__services_auth_service__["a" /* AuthService */], __WEBPACK_IMPORTED_MODULE_11__services_general_service__["a" /* GeneralService */], __WEBPACK_IMPORTED_MODULE_8__guards_auth_guard__["a" /* AuthGuard */], __WEBPACK_IMPORTED_MODULE_9__guards_notauth_guard__["a" /* NotAuthGuard */]],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_12__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ "../../../../../src/app/app.router.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__home_home_component__ = __webpack_require__("../../../../../src/app/home/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__login_login_component__ = __webpack_require__("../../../../../src/app/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__register_register_component__ = __webpack_require__("../../../../../src/app/register/register.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__profile_profile_component__ = __webpack_require__("../../../../../src/app/profile/profile.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__profile1_profile1_component__ = __webpack_require__("../../../../../src/app/profile1/profile1.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__edit_post_edit_post_component__ = __webpack_require__("../../../../../src/app/edit-post/edit-post.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__edit_bio_edit_bio_component__ = __webpack_require__("../../../../../src/app/edit-bio/edit-bio.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__resetpassword_resetpassword_component__ = __webpack_require__("../../../../../src/app/resetpassword/resetpassword.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__resetpassword_returnmail_returnmail_component__ = __webpack_require__("../../../../../src/app/resetpassword/returnmail/returnmail.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__search_search_component__ = __webpack_require__("../../../../../src/app/search/search.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__feed_feed_component__ = __webpack_require__("../../../../../src/app/feed/feed.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__contact_contact_component__ = __webpack_require__("../../../../../src/app/contact/contact.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__guards_auth_guard__ = __webpack_require__("../../../../../src/app/guards/auth.guard.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__guards_notauth_guard__ = __webpack_require__("../../../../../src/app/guards/notauth.guard.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppRoutingModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
















var appRoutes = [
    { path: '', component: __WEBPACK_IMPORTED_MODULE_2__home_home_component__["a" /* HomeComponent */] },
    { path: 'feed', component: __WEBPACK_IMPORTED_MODULE_12__feed_feed_component__["a" /* FeedComponent */] },
    { path: 'resetpassword', component: __WEBPACK_IMPORTED_MODULE_9__resetpassword_resetpassword_component__["a" /* ResetpasswordComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_15__guards_notauth_guard__["a" /* NotAuthGuard */]] },
    { path: 'login', component: __WEBPACK_IMPORTED_MODULE_3__login_login_component__["a" /* LoginComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_15__guards_notauth_guard__["a" /* NotAuthGuard */]] },
    { path: 'register', component: __WEBPACK_IMPORTED_MODULE_4__register_register_component__["a" /* RegisterComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_15__guards_notauth_guard__["a" /* NotAuthGuard */]] },
    { path: 'search', component: __WEBPACK_IMPORTED_MODULE_11__search_search_component__["a" /* SearchComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_14__guards_auth_guard__["a" /* AuthGuard */]] },
    { path: 'help', component: __WEBPACK_IMPORTED_MODULE_13__contact_contact_component__["a" /* ContactComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_14__guards_auth_guard__["a" /* AuthGuard */]] },
    { path: 'profile', component: __WEBPACK_IMPORTED_MODULE_5__profile_profile_component__["a" /* ProfileComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_14__guards_auth_guard__["a" /* AuthGuard */]] },
    { path: 'profile/:id', component: __WEBPACK_IMPORTED_MODULE_6__profile1_profile1_component__["a" /* Profile1Component */], canActivate: [__WEBPACK_IMPORTED_MODULE_14__guards_auth_guard__["a" /* AuthGuard */]] },
    { path: 'editpost/:id', component: __WEBPACK_IMPORTED_MODULE_7__edit_post_edit_post_component__["a" /* EditPostComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_14__guards_auth_guard__["a" /* AuthGuard */]] },
    { path: 'editbio/:id', component: __WEBPACK_IMPORTED_MODULE_8__edit_bio_edit_bio_component__["a" /* EditBioComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_14__guards_auth_guard__["a" /* AuthGuard */]] },
    { path: 'returnmail/:token', component: __WEBPACK_IMPORTED_MODULE_10__resetpassword_returnmail_returnmail_component__["a" /* ReturnmailComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_15__guards_notauth_guard__["a" /* NotAuthGuard */]] },
    { path: '**', component: __WEBPACK_IMPORTED_MODULE_2__home_home_component__["a" /* HomeComponent */] }
];
var AppRoutingModule = (function () {
    function AppRoutingModule() {
    }
    return AppRoutingModule;
}());
AppRoutingModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
        declarations: [],
        imports: [__WEBPACK_IMPORTED_MODULE_0__angular_router__["b" /* RouterModule */].forRoot(appRoutes)],
        providers: [],
        bootstrap: [],
        exports: [__WEBPACK_IMPORTED_MODULE_0__angular_router__["b" /* RouterModule */]]
    })
], AppRoutingModule);

//# sourceMappingURL=app.router.js.map

/***/ }),

/***/ "../../../../../src/app/contact/contact.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "textarea {\n    resize: none;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/contact/contact.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n<div class=\"col-md-6 col-md-offset-3 col-xs-12 col-sm-12\">\n  <h1>Hey! you ran in to a problem? <small>contact us and we'll get it solved!</small> </h1>\n  <textarea class=\"form-control\" [(ngModel)]=\"message\" required></textarea>\n  <button class=\"btn btn-default btn-block\" (click)=\"send(message)\">Send</button>\n</div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/contact/contact.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__ = __webpack_require__("../../../../angular2-flash-messages/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContactComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ContactComponent = (function () {
    function ContactComponent(router, http, _flashMessagesService) {
        this.router = router;
        this.http = http;
        this._flashMessagesService = _flashMessagesService;
    }
    ContactComponent.prototype.ngOnInit = function () {
    };
    ContactComponent.prototype.send = function (message) {
        var _this = this;
        var data = {
            message: message
        };
        this.http.post('http://localhost:3000/post/contact', data)
            .map(function (res) { return res.json(); })
            .subscribe(function (data) {
            if (data.success === true) {
                var messageClass = 'alert-success';
            }
            else {
                var messageClass = 'alert-danger';
            }
            _this._flashMessagesService.show(data.message, { cssClass: messageClass, timeout: 2000 });
        });
    };
    return ContactComponent;
}());
ContactComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-contact',
        template: __webpack_require__("../../../../../src/app/contact/contact.component.html"),
        styles: [__webpack_require__("../../../../../src/app/contact/contact.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__["FlashMessagesService"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__["FlashMessagesService"]) === "function" && _c || Object])
], ContactComponent);

var _a, _b, _c;
//# sourceMappingURL=contact.component.js.map

/***/ }),

/***/ "../../../../../src/app/edit-bio/edit-bio.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/edit-bio/edit-bio.component.html":
/***/ (function(module, exports) {

module.exports = "<app-mininav></app-mininav>\n<h1 class=\"page-header text-center\">Edit Bio <small><a routerLink=\"/profile\">Visit Profile</a></small></h1>\n<br><br>\n<div class=\"jumbotron\">\n<h4>Current Bio:</h4>\n<p>{{bio}}</p>\n</div>\n<div class=\"container\">\n  <div class=\"panel panel-default\">\n    <textarea class=\"form-control\" [(ngModel)]=\"newBio\" required></textarea>\n    <button class=\"btn btn-primary btn-block\" (click)=\"updateBio(user._id, newBio)\">Update Bio</button>\n  </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/edit-bio/edit-bio.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_general_service__ = __webpack_require__("../../../../../src/app/services/general.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angular2_flash_messages__ = __webpack_require__("../../../../angular2-flash-messages/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_angular2_flash_messages__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EditBioComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var EditBioComponent = (function () {
    function EditBioComponent(activeRoute, router, http, generalService, flashMessageService) {
        this.activeRoute = activeRoute;
        this.router = router;
        this.http = http;
        this.generalService = generalService;
        this.flashMessageService = flashMessageService;
    }
    EditBioComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.sub = this.activeRoute.params.subscribe(function (params) {
            return _this.http.get('http://localhost:3000/get/findoneuser/' + params.id)
                .map(function (res) { return res.json(); })
                .subscribe(function (data) {
                _this.bio = data.user.bio;
                _this.user = data.user;
            });
        });
    };
    EditBioComponent.prototype.updateBio = function (id, newBio) {
        var _this = this;
        var data = {
            bio: newBio,
            id: id
        };
        return this.http.post('http://localhost:3000/post/updatebio/' + id, data)
            .map(function (res) { return res.json(); })
            .subscribe(function (data) {
            if (data.success === true) {
                _this.flashMessageService.show(data.message, { cssClass: 'alert-success', timeout: 2000 });
                _this.router.navigate(['/profile']);
            }
            else {
                _this.flashMessageService.show(data.message, { cssClass: 'alert-danger', timeout: 2000 });
                return false;
            }
        });
    };
    return EditBioComponent;
}());
EditBioComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-edit-bio',
        template: __webpack_require__("../../../../../src/app/edit-bio/edit-bio.component.html"),
        styles: [__webpack_require__("../../../../../src/app/edit-bio/edit-bio.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* ActivatedRoute */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__angular_http__["Http"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_http__["Http"]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_3__services_general_service__["a" /* GeneralService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_general_service__["a" /* GeneralService */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_4_angular2_flash_messages__["FlashMessagesService"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4_angular2_flash_messages__["FlashMessagesService"]) === "function" && _e || Object])
], EditBioComponent);

var _a, _b, _c, _d, _e;
//# sourceMappingURL=edit-bio.component.js.map

/***/ }),

/***/ "../../../../../src/app/edit-post/edit-post.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "textarea {\n    resize: none;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/edit-post/edit-post.component.html":
/***/ (function(module, exports) {

module.exports = "<h1 class=\"page-header\">Edit Post <small><a routerLink=\"/profile\">Visit Profile</a></small></h1>\n  \n<div class=\"panel panel-default\">\n      <div class=\"panel-body\">\n          <h4><a href=\"#\" style=\"text-decoration:none;\"><strong>{{username}}</strong></a> – <small><small><a href=\"#\" style=\"text-decoration:none; color:grey;\"><i><i class=\"fa fa-clock-o\" aria-hidden=\"true\"></i> {{posted}}</i></a></small></small></h4>\n        \n          <hr>\n          <div class=\"post-content\">\n              <p> {{newpost}} </p>\n          </div>\n      </div>\n  </div>\n\n  <textarea class=\"form-control\" [(ngModel)]=\"newpost\" required></textarea>\n<button class=\"btn btn-default btn-block\" (click)=\"update(id, newpost)\">Save Post</button>"

/***/ }),

/***/ "../../../../../src/app/edit-post/edit-post.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_general_service__ = __webpack_require__("../../../../../src/app/services/general.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angular2_flash_messages__ = __webpack_require__("../../../../angular2-flash-messages/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_angular2_flash_messages__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EditPostComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var EditPostComponent = (function () {
    function EditPostComponent(activeRoute, router, http, generalService, flashMessageService) {
        this.activeRoute = activeRoute;
        this.router = router;
        this.http = http;
        this.generalService = generalService;
        this.flashMessageService = flashMessageService;
    }
    EditPostComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.sub = this.activeRoute.params.subscribe(function (params) {
            return _this.http.get('http://localhost:3000/get/singlepost/' + params.id)
                .map(function (res) { return res.json(); })
                .subscribe(function (data) {
                _this.id = data.post._id;
                _this.body = data.post.body;
                _this.posted = data.post.posted;
                _this.username = data.post._username;
            });
        });
    };
    EditPostComponent.prototype.update = function (id, body) {
        var data = {
            body: body
        };
        this.generalService.update(id, data);
        this.router.navigate(['/profile']);
        this.flashMessageService.show('Bio Updated!', { cssClass: 'alert-success', timeout: 2000 });
    };
    return EditPostComponent;
}());
EditPostComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-edit-post',
        template: __webpack_require__("../../../../../src/app/edit-post/edit-post.component.html"),
        styles: [__webpack_require__("../../../../../src/app/edit-post/edit-post.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* ActivatedRoute */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__angular_http__["Http"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_http__["Http"]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_3__services_general_service__["a" /* GeneralService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_general_service__["a" /* GeneralService */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_4_angular2_flash_messages__["FlashMessagesService"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4_angular2_flash_messages__["FlashMessagesService"]) === "function" && _e || Object])
], EditPostComponent);

var _a, _b, _c, _d, _e;
//# sourceMappingURL=edit-post.component.js.map

/***/ }),

/***/ "../../../../../src/app/feed/feed.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/feed/feed.component.html":
/***/ (function(module, exports) {

module.exports = "<h1 class=\"page-header text-center\">Post feed </h1>\n    <div class=\"panel panel-default\" *ngFor=\"let x of feed\">\n          <div class=\"panel-body\">\n              <h4><a href=\"#\" style=\"text-decoration:none;\"><strong>{{x._username}}</strong></a> – <small><small><a href=\"#\" style=\"text-decoration:none; color:grey;\"><i><i class=\"fa fa-clock-o\" aria-hidden=\"true\"></i> {{x.posted}}</i></a></small></small></h4>\n              <hr>\n              <div class=\"post-content\">\n                  <p> {{x.body}} </p>\n              </div>\n              <hr>\n              <div>\n                  <div class=\"post-content\" *ngFor=\"let y of x.comments\">\n                      <div class=\"panel-default\">\n                          <div class=\"panel-body\">\n                              <h4><a href=\"#\" style=\"text-decoration:none;\"><strong>{{y.commentor}}</strong></a></h4>\n                              <hr>\n                              <div class=\"post-content\">\n                                  {{y.comment}}\n                              </div>\n                          </div>\n                      </div>\n                  </div>\n              </div>\n            \n          </div>\n      </div>"

/***/ }),

/***/ "../../../../../src/app/feed/feed.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_general_service__ = __webpack_require__("../../../../../src/app/services/general.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FeedComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var FeedComponent = (function () {
    function FeedComponent(generalService) {
        this.generalService = generalService;
    }
    FeedComponent.prototype.ngOnInit = function () {
        this.loadAllPosts();
    };
    FeedComponent.prototype.loadAllPosts = function () {
        var _this = this;
        this.generalService.getAllPosts()
            .subscribe(function (data) {
            _this.feed = data.posts;
        });
    };
    return FeedComponent;
}());
FeedComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-feed',
        template: __webpack_require__("../../../../../src/app/feed/feed.component.html"),
        styles: [__webpack_require__("../../../../../src/app/feed/feed.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_general_service__["a" /* GeneralService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_general_service__["a" /* GeneralService */]) === "function" && _a || Object])
], FeedComponent);

var _a;
//# sourceMappingURL=feed.component.js.map

/***/ }),

/***/ "../../../../../src/app/guards/auth.guard.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthGuard; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AuthGuard = (function () {
    function AuthGuard(authService, router) {
        this.authService = authService;
        this.router = router;
    }
    AuthGuard.prototype.canActivate = function () {
        if (this.authService.loggedIn()) {
            return true;
        }
        else {
            this.router.navigate(['/login']);
            return false;
        }
    };
    return AuthGuard;
}());
AuthGuard = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__services_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_auth_service__["a" /* AuthService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */]) === "function" && _b || Object])
], AuthGuard);

var _a, _b;
//# sourceMappingURL=auth.guard.js.map

/***/ }),

/***/ "../../../../../src/app/guards/notauth.guard.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NotAuthGuard; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var NotAuthGuard = (function () {
    function NotAuthGuard(authService, router) {
        this.authService = authService;
        this.router = router;
    }
    NotAuthGuard.prototype.canActivate = function () {
        if (this.authService.loggedIn()) {
            this.router.navigate(['/']);
            return false;
        }
        else {
            return true;
        }
    };
    return NotAuthGuard;
}());
NotAuthGuard = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__services_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_auth_service__["a" /* AuthService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */]) === "function" && _b || Object])
], NotAuthGuard);

var _a, _b;
//# sourceMappingURL=notauth.guard.js.map

/***/ }),

/***/ "../../../../../src/app/home/home.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/home/home.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <h1 class=\"page-header text-center\"> Welcome! </h1>\n</div>"

/***/ }),

/***/ "../../../../../src/app/home/home.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var HomeComponent = (function () {
    function HomeComponent(authService) {
        this.authService = authService;
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    return HomeComponent;
}());
HomeComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-home',
        template: __webpack_require__("../../../../../src/app/home/home.component.html"),
        styles: [__webpack_require__("../../../../../src/app/home/home.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */]) === "function" && _a || Object])
], HomeComponent);

var _a;
//# sourceMappingURL=home.component.js.map

/***/ }),

/***/ "../../../../../src/app/login/login.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/login/login.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n    <h1 class=\"page-header text-center\">Login</h1>\n    <div class=\"col-md-6 col-md-offset-3 col-xs-12 col-sm-12\">\n    <div class=\"form-group\">\n        <label>E-mail</label>\n        <input class=\"form-control\" type=\"email\" [(ngModel)]=\"email\">\n    </div>\n     <div class=\"form-group\">\n        <label>Password</label>\n        <input class=\"form-control\" type=\"password\" [(ngModel)]=\"password\">\n     </div>\n    <button class=\"btn btn-primary\" (click)=\"login(email, password)\">Login</button>\n    <br><br>\n    <a routerLink=\"/register\">Don't have an account? Click here!</a>\n    <br><br>\n    <a routerLink=\"/resetpassword\">Forgot your password?</a>\n    </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/login/login.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages__ = __webpack_require__("../../../../angular2-flash-messages/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var LoginComponent = (function () {
    function LoginComponent(router, _flashMessageService, authService) {
        this.router = router;
        this._flashMessageService = _flashMessageService;
        this.authService = authService;
    }
    LoginComponent.prototype.ngOnInit = function () {
    };
    LoginComponent.prototype.login = function (email, password) {
        var _this = this;
        var userInfo = {
            email: email,
            password: password
        };
        this.authService.login(userInfo)
            .subscribe(function (data) {
            if (data.success === true) {
                _this.authService.storeUserData(data.token, data.user);
                _this._flashMessageService.show(data.message, { cssClass: 'alert-success', timeout: 2000 });
                setTimeout(function () {
                    _this.router.navigate(['/profile']);
                }, 2000);
            }
            else {
                _this._flashMessageService.show(data.message, { cssClass: 'alert-danger', timeout: 2000 });
                return false;
            }
        });
    };
    return LoginComponent;
}());
LoginComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-login',
        template: __webpack_require__("../../../../../src/app/login/login.component.html"),
        styles: [__webpack_require__("../../../../../src/app/login/login.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* Router */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages__["FlashMessagesService"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages__["FlashMessagesService"]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */]) === "function" && _c || Object])
], LoginComponent);

var _a, _b, _c;
//# sourceMappingURL=login.component.js.map

/***/ }),

/***/ "../../../../../src/app/mininav/mininav.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/mininav/mininav.component.html":
/***/ (function(module, exports) {

module.exports = "<ol class=\"breadcrumb\">\n  <li [routerLinkActive]=\"['active']\" [routerLinkActiveOptions]=\"{exact:true}\"><a routerLink=\"/profile\">Profile</a></li>\n  <li [routerLinkActive]=\"['active']\" [routerLinkActiveOptions]=\"{exact:true}\"><a routerLink=\"/search\">Search</a></li>\n  <li [routerLinkActive]=\"['active']\" [routerLinkActiveOptions]=\"{exact:true}\"><a routerLink=\"/feed\">Feed</a></li>\n</ol> \n"

/***/ }),

/***/ "../../../../../src/app/mininav/mininav.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MininavComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var MininavComponent = (function () {
    function MininavComponent() {
    }
    MininavComponent.prototype.ngOnInit = function () {
    };
    return MininavComponent;
}());
MininavComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-mininav',
        template: __webpack_require__("../../../../../src/app/mininav/mininav.component.html"),
        styles: [__webpack_require__("../../../../../src/app/mininav/mininav.component.css")]
    }),
    __metadata("design:paramtypes", [])
], MininavComponent);

//# sourceMappingURL=mininav.component.js.map

/***/ }),

/***/ "../../../../../src/app/navbar/navbar.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "a {\n    cursor: pointer;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/navbar/navbar.component.html":
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-default\" role=\"navigation\">\n  <!-- Brand and toggle get grouped for better mobile display -->\n  <div class=\"navbar-header\">\n    <button type=\"button\" class=\"navbar-toggle\" data-toggle=\"collapse\" data-target=\"#bs-example-navbar-collapse-1\">\n      <span class=\"sr-only\">Toggle navigation</span>\n      <span class=\"icon-bar\"></span>\n      <span class=\"icon-bar\"></span>\n      <span class=\"icon-bar\"></span>\n    </button>\n  </div>\n\n  <!-- Collect the nav links, forms, and other content for toggling -->\n  <div class=\"collapse navbar-collapse\" id=\"bs-example-navbar-collapse-1\">\n   <ul class=\"nav navbar-nav\">\n    <li [routerLinkActive]=\"['active']\" [routerLinkActiveOptions]=\"{exact:true}\"><a routerLink=\"/\"><i class=\"fa fa-home\"></i> Home</a></li>\n     <li *ngIf=\"!authService.loggedIn()\" [routerLinkActive]=\"['active']\" [routerLinkActiveOptions]=\"{exact:true}\"><a routerLink=\"/register\">Register</a></li>\n     <li *ngIf=\"!authService.loggedIn()\" [routerLinkActive]=\"['active']\" [routerLinkActiveOptions]=\"{exact:true}\"><a routerLink=\"/login\">Login</a></li>\n   \n   </ul>\n   <ul class=\"nav navbar-nav navbar-right\">\n     <li *ngIf=\"authService.loggedIn()\" [routerLinkActive]=\"['active']\" [routerLinkActiveOptions]=\"{exact:true}\"><a routerLink=\"/search\"><i class=\"fa fa-search\" aria-hidden=\"true\"></i> Search</a></li>\n     <li [routerLinkActive]=\"['active']\" [routerLinkActiveOptions]=\"{exact:true}\"><a routerLink=\"/feed\"><i class=\"fa fa-newspaper-o\" aria-hidden=\"true\"></i> Feed</a></li>\n     <li *ngIf=\"authService.loggedIn()\" [routerLinkActive]=\"['active']\" [routerLinkActiveOptions]=\"{exact:true}\"><a routerLink=\"/profile\"><i class=\"fa fa-user\" aria-hidden=\"true\"></i> Profile</a></li> \n     <li class=\"dropdown\" *ngIf=\"authService.loggedIn()\">\n        <a href=\"#\" class=\"dropdown-toggle\" data-toggle=\"dropdown\" role=\"button\" aria-haspopup=\"true\" aria-expanded=\"false\"><span class=\"fa fa-bars\"></span></a>\n        <ul class=\"dropdown-menu\">\n          <li><a routerLink=\"/help\"><i class=\"fa fa-question-circle\" aria-hidden=\"true\"></i> Help</a></li>\n          <li class=\"divider\" role=\"seperator\"></li>\n          <li><a (click)=\"logout()\"><i class=\"fa fa-sign-out\" aria-hidden=\"true\"></i> Logout</a></li>\n        </ul>\n      </li>\n   </ul>\n  </div><!-- /.navbar-collapse -->\n</nav>\n\n          "

/***/ }),

/***/ "../../../../../src/app/navbar/navbar.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages__ = __webpack_require__("../../../../angular2-flash-messages/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NavbarComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var NavbarComponent = (function () {
    function NavbarComponent(authService, router, _flashMessageService) {
        this.authService = authService;
        this.router = router;
        this._flashMessageService = _flashMessageService;
    }
    NavbarComponent.prototype.ngOnInit = function () {
    };
    NavbarComponent.prototype.logout = function () {
        this.authService.logout();
        this.router.navigate(['/']);
        this._flashMessageService.show('You have logged out!', { cssClass: 'alert-success', timeout: 2000 });
    };
    return NavbarComponent;
}());
NavbarComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-navbar',
        template: __webpack_require__("../../../../../src/app/navbar/navbar.component.html"),
        styles: [__webpack_require__("../../../../../src/app/navbar/navbar.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages__["FlashMessagesService"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages__["FlashMessagesService"]) === "function" && _c || Object])
], NavbarComponent);

var _a, _b, _c;
//# sourceMappingURL=navbar.component.js.map

/***/ }),

/***/ "../../../../../src/app/profile/profile.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "a {\n    cursor: pointer;\n}\ntextarea {\n    resize: none;\n}\n\n#makePostWrapper {\n    display: none;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/profile/profile.component.html":
/***/ (function(module, exports) {

module.exports = "<h1 class=\"page-header text-center\">Profile</h1>\n<div class=\"col-lg-3 col-md-3 hidden-sm hidden-xs\">\n    <div class=\"panel panel-default\">\n        <div class=\"panel-body\">\n            <div class=\"media\">\n                <div class=\"media-body\">\n                    <h3><strong>Bio</strong></h3>\n                    <p>{{bio}}</p>\n                    <i class=\"fa fa-pencil\" (click)=\"editBio(id)\"> Edit Bio</i> \n                </div>\n            </div>\n        </div>\n    </div>\n</div>\n<div class=\"col-lg-9 col-md-9 col-xs-12 col-sm-12\">\n    <div class=\"panel panel-default\">\n        <div class=\"panel-body\">\n            <span>\n                <h1 class=\"panel-title pull-left\" style=\"font-size:30px;\">{{username}} <small>{{email}}</small> <i class=\"fa fa-check text-success\" aria-hidden=\"true\" data-toggle=\"tooltip\" data-placement=\"bottom\" title=\"This user is verified.\"></i></h1>\n            </span>\n        </div>\n    </div>\n        <h1 class=\"page-header text-center\">\n        <button class=\"btn btn-primary\" (click)=\"togglePostWrapper()\">New Post</button>\n    </h1>\n    <div id=\"makePostWrapper\">\n    <textarea class=\"form-control\" placeholder=\"Enter a message..\" [(ngModel)]=\"body\"></textarea>\n    <button class=\"btn btn-primary btn-block\" (click)=\"post(id, body, username)\">Post</button>\n    <hr>\n    </div>\n    <div id=\"allPostWrapper\" class=\"panel panel-default\" *ngFor=\"let post of posts\">\n        <div class=\"panel-body\">\n            <h4><a style=\"text-decoration:none;\"><strong>{{post._username}}</strong></a> – <small><small><a style=\"text-decoration:none; color:grey;\"><i><i class=\"fa fa-clock-o\" aria-hidden=\"true\"></i> {{post.posted}}</i></a></small></small></h4>\n            <span>\n                <div class=\"navbar-right\">\n                    <div class=\"dropdown\">\n                        <button class=\"btn btn-link btn-xs dropdown-toggle\" type=\"button\" id=\"dd1\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"true\">\n                            <i class=\"fa fa-cog\" aria-hidden=\"true\"></i>\n                            <span class=\"caret\"></span>\n                        </button>\n                        <ul class=\"dropdown-menu\" aria-labelledby=\"dd1\" style=\"float: right;\">\n                                <li><a (click)=\"editPost(post._id)\"><i class=\"fa fa-pencil\"></i> Edit Post</a></li>    \n                                <li role=\"separator\" class=\"divider\"></li>\n                                <li><a (click)=\"deletePost(post._id)\"><i class=\"fa fa-trash\"></i> Delete Post</a></li>\n                        </ul>\n                    </div>\n                </div>\n            </span>\n            <hr>\n            <div class=\"post-content\">\n                <p> {{post.body}} </p>\n            </div>\n            <hr>\n            <div>\n                <div class=\"post-content\" *ngFor=\"let comment of post.comments\">\n                    <div class=\"panel-default\">\n                        <div class=\"panel-body\">\n                            <div class=\"pull-left\">\n                                \n                            </div>\n                            <h4><a style=\"text-decoration:none;\"><strong>{{comment.commentor}}</strong></a></h4>\n                            <hr>\n                            <div class=\"post-content\">\n                                {{comment.comment}}\n                            </div>\n                        </div>\n                    </div>\n                </div>\n            </div>\n            <div class=\"media\">\n                <div class=\"media-body\">\n                    <textarea class=\"form-control\" rows=\"1\" placeholder=\"Comment\" [(ngModel)]=\"comment\"></textarea>\n                    <button class=\"btn btn-primary btn-block\" (click)=\"postComment(post._id, comment, username)\">Comment</button>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>\n \n"

/***/ }),

/***/ "../../../../../src/app/profile/profile.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_general_service__ = __webpack_require__("../../../../../src/app/services/general.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__ = __webpack_require__("../../../../angular2-flash-messages/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_jquery__ = __webpack_require__("../../../../jquery/dist/jquery.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_jquery___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_jquery__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProfileComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var ProfileComponent = (function () {
    function ProfileComponent(_authService, generalService, router, _flashMessagesService) {
        this._authService = _authService;
        this.generalService = generalService;
        this.router = router;
        this._flashMessagesService = _flashMessagesService;
    }
    ProfileComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._authService.getProfile()
            .subscribe(function (data) {
            _this.username = data.user.username;
            _this.email = data.user.email;
            _this.id = data.user._id;
            _this.bio = data.user.bio;
            _this.posts = data.posts;
            console.log(data);
        });
    };
    ProfileComponent.prototype.togglePostWrapper = function () {
        __WEBPACK_IMPORTED_MODULE_5_jquery__('#makePostWrapper').toggle();
    };
    ProfileComponent.prototype.toggleAllPostsWrapper = function () {
        __WEBPACK_IMPORTED_MODULE_5_jquery__('#allPostWrapper').toggle();
    };
    ProfileComponent.prototype.post = function (id, body, username) {
        var _this = this;
        this.generalService.makeBlogPost(id, body, username)
            .subscribe(function (data) {
        });
        this._authService.getProfile()
            .subscribe(function (data) {
            _this.username = data.user.username;
            _this.email = data.user.email;
            _this.id = data.user._id;
            _this.bio = data.user.bio;
            _this.posts = data.posts;
        });
    };
    ProfileComponent.prototype.deletePost = function (id) {
        var _this = this;
        this.generalService.deleteBlogPost(id)
            .subscribe(function (data) {
            _this._flashMessagesService.show(data.message, { cssClass: 'alert-success', timeout: 2000 });
        });
        this._authService.getProfile()
            .subscribe(function (data) {
            _this.username = data.user.username;
            _this.email = data.user.email;
            _this.id = data.user._id;
            _this.bio = data.user.bio;
            _this.posts = data.posts;
        });
    };
    ProfileComponent.prototype.editPost = function (id) {
        this.router.navigate(['/editpost', id]);
    };
    ProfileComponent.prototype.editBio = function (id) {
        this.router.navigate(['/editbio', id]);
    };
    ProfileComponent.prototype.postComment = function (id, comment, username) {
        var _this = this;
        this.generalService.postComment(id, comment, username)
            .subscribe(function (data) {
        });
        this._authService.getProfile()
            .subscribe(function (data) {
            _this.username = data.user.username;
            _this.email = data.user.email;
            _this.id = data.user._id;
            _this.bio = data.user.bio;
            _this.posts = data.posts;
        });
    };
    return ProfileComponent;
}());
ProfileComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-profile',
        template: __webpack_require__("../../../../../src/app/profile/profile.component.html"),
        styles: [__webpack_require__("../../../../../src/app/profile/profile.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__services_general_service__["a" /* GeneralService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_general_service__["a" /* GeneralService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_4__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__angular_router__["a" /* Router */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__["FlashMessagesService"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__["FlashMessagesService"]) === "function" && _d || Object])
], ProfileComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=profile.component.js.map

/***/ }),

/***/ "../../../../../src/app/profile1/profile1.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/profile1/profile1.component.html":
/***/ (function(module, exports) {

module.exports = "<h1 class=\"page-header text-center\">Profile</h1>\n    <div class=\"col-lg-3 col-md-3 hidden-sm hidden-xs\">\n            <div class=\"panel panel-default\">\n                <div class=\"panel-body\">\n                    <div class=\"media\">\n                        <div class=\"media-body\">\n                            <h3><strong>Bio</strong></h3>\n                            <p>{{bio}}</p>\n                          </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n      <div class=\"col-lg-9 col-md-9 col-xs-12 col-sm-12\">\n         <div class=\"panel panel-default\">\n                <div class=\"panel-body\">\n                    <span>\n                        <h1 class=\"panel-title pull-left\" style=\"font-size:30px;\">{{username}} <small>{{email}}</small> <i class=\"fa fa-check text-success\" aria-hidden=\"true\" data-toggle=\"tooltip\" data-placement=\"bottom\" title=\"This user is verified.\"></i></h1>\n                    </span>\n                </div>\n            </div>\n              <div class=\"panel panel-default\" *ngFor=\"let post of posts\">\n                <div class=\"panel-body\">\n                    <h4><a style=\"text-decoration:none;\"><strong>{{post._username}}</strong></a> – <small><small><a style=\"text-decoration:none; color:grey;\"><i><i class=\"fa fa-clock-o\" aria-hidden=\"true\"></i> {{post.posted}}</i></a></small></small></h4>\n                   \n                    <hr>\n                    <div class=\"post-content\">\n                       <p> {{post.body}} </p>\n                    </div>\n                    <hr>\n                    <div>\n                        <div class=\"post-content\" *ngFor=\"let comment of post.comments\">\n                            <div class=\"panel-default\">\n                                <div class=\"panel-body\">\n                                    <div class=\"pull-left\">\n                                        \n                                    </div>\n                                    <h4><a style=\"text-decoration:none;\"><strong>{{comment.commentor}}</strong></a></h4>\n                                    <hr>\n                                    <div class=\"post-content\">\n                                        {{comment.comment}}\n                                    </div>\n                                </div>\n                            </div>\n                        </div>\n                    </div>\n                    <div class=\"media\">\n                        <div class=\"media-body\">\n                         <input type=\"text\" placeholder=\"Comment..\" class=\"form-control\" name=\"comment\" [(ngModel)]=\"comment\">\n                         <button class=\"btn btn-primary btn-block\" (click)=\"postComment(post._id, comment, Cusername)\">Comment</button>\n                        </div>\n                    </div>\n                </div>\n            </div>\n      </div>\n\n\n  \n\n            \n          \n\n"

/***/ }),

/***/ "../../../../../src/app/profile1/profile1.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_general_service__ = __webpack_require__("../../../../../src/app/services/general.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Profile1Component; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var Profile1Component = (function () {
    function Profile1Component(generalService, _authService, router, activeRoute, http) {
        this.generalService = generalService;
        this._authService = _authService;
        this.router = router;
        this.activeRoute = activeRoute;
        this.http = http;
    }
    Profile1Component.prototype.ngOnInit = function () {
        this.loadPosts();
        this.loadAllPosts();
        this.loadCurrentUser();
    };
    Profile1Component.prototype.loadPosts = function () {
        var _this = this;
        this.sub = this.activeRoute.params.subscribe(function (params) {
            return _this.http.get('http://localhost:3000/get/findoneuser/' + params.id)
                .map(function (res) { return res.json(); })
                .subscribe(function (data) {
                _this.email = data.user.email;
                _this.username = data.user.username;
                _this.id = data.user._id;
                _this.posts = data.posts;
                _this.bio = data.user.bio;
            });
        });
    };
    Profile1Component.prototype.loadCurrentUser = function () {
        var _this = this;
        this._authService.getProfile()
            .subscribe(function (data) {
            _this.Cusername = data.user.username;
            _this.Cemail = data.user.email;
            _this.Cid = data.user._id;
        });
    };
    Profile1Component.prototype.viewprofile = function (id) {
        this.router.navigate(['/profile', id]);
    };
    Profile1Component.prototype.loadAllPosts = function () {
        var _this = this;
        this.generalService.getAllPosts()
            .subscribe(function (data) {
            _this.feed = data.posts;
        });
    };
    Profile1Component.prototype.postComment = function (id, comment, username) {
        var _this = this;
        this.generalService.postComment(id, comment, username)
            .subscribe(function (data) {
            _this.loadPosts();
        });
        this.comment = '';
    };
    return Profile1Component;
}());
Profile1Component = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-profile1',
        template: __webpack_require__("../../../../../src/app/profile1/profile1.component.html"),
        styles: [__webpack_require__("../../../../../src/app/profile1/profile1.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_general_service__["a" /* GeneralService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_general_service__["a" /* GeneralService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_4__services_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__services_auth_service__["a" /* AuthService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* Router */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["c" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_router__["c" /* ActivatedRoute */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_2__angular_http__["Http"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_http__["Http"]) === "function" && _e || Object])
], Profile1Component);

var _a, _b, _c, _d, _e;
//# sourceMappingURL=profile1.component.js.map

/***/ }),

/***/ "../../../../../src/app/register/register.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/register/register.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <h1 class=\"page-header text-center\">Register</h1>\n  <div class=\"col-md-6 col-md-offset-3\">\n\n  <div class=\"form-group\">\n    <label>E-mail</label>\n    <input class=\"form-control\" type=\"email\" [(ngModel)]=\"email\" required>\n  </div>\n   <div class=\"form-group\">\n     <label>Username</label>\n    <input class=\"form-control\" type=\"text\" [(ngModel)]=\"username\" required>\n  </div>\n   <div class=\"form-group\">\n     <label>Password</label>\n    <input class=\"form-control\" type=\"password\" [(ngModel)]=\"password\" required>\n  </div>\n  <div class=\"form-group\">\n     <label>Confirm Password</label>\n    <input class=\"form-control\" type=\"password\" [(ngModel)]=\"confirm\" required>\n  </div>\n  <button class=\"btn btn-primary\" (click)=\"register(email,username,password, confirm)\">Register</button>\n  <br><br>\n  <a routerLink=\"/login\">Already have an account? Click here!</a>\n  </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/register/register.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__ = __webpack_require__("../../../../angular2-flash-messages/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegisterComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var RegisterComponent = (function () {
    function RegisterComponent(router, authService, _flashMessagesService) {
        this.router = router;
        this.authService = authService;
        this._flashMessagesService = _flashMessagesService;
    }
    RegisterComponent.prototype.ngOnInit = function () {
    };
    RegisterComponent.prototype.register = function (email, username, password, confirm) {
        var _this = this;
        var userInfo = {
            email: email,
            username: username,
            password: password
        };
        if (password === confirm) {
            this.authService.register(userInfo)
                .subscribe(function (data) {
                _this._flashMessagesService.show(data.message, { cssClass: 'alert-success', timeout: 2000 });
                setTimeout(function () {
                    _this.router.navigate(['/login']);
                }, 2000);
            });
        }
        else {
            this._flashMessagesService.show('Passwords did not match, Please try again.', { cssClass: 'alert-danger', timeout: 2000 });
            return false;
        }
    };
    return RegisterComponent;
}());
RegisterComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-register',
        template: __webpack_require__("../../../../../src/app/register/register.component.html"),
        styles: [__webpack_require__("../../../../../src/app/register/register.component.css")],
        providers: [__WEBPACK_IMPORTED_MODULE_2__services_auth_service__["a" /* AuthService */]]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__services_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_auth_service__["a" /* AuthService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__["FlashMessagesService"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__["FlashMessagesService"]) === "function" && _c || Object])
], RegisterComponent);

var _a, _b, _c;
//# sourceMappingURL=register.component.js.map

/***/ }),

/***/ "../../../../../src/app/resetpassword/resetpassword.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/resetpassword/resetpassword.component.html":
/***/ (function(module, exports) {

module.exports = "<h1 class=\"page-header\"> Reset Password </h1>\n<label>Enter your E-mail</label>\n<input type=\"text\" [(ngModel)]=\"email\" class=\"form-control\">\n<button class=\"btn btn-primary btn-block\" (click)=\"send(email)\">Send</button>"

/***/ }),

/***/ "../../../../../src/app/resetpassword/resetpassword.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages__ = __webpack_require__("../../../../angular2-flash-messages/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ResetpasswordComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ResetpasswordComponent = (function () {
    function ResetpasswordComponent(http, _flashMessagesService, router) {
        this.http = http;
        this._flashMessagesService = _flashMessagesService;
        this.router = router;
    }
    ResetpasswordComponent.prototype.ngOnInit = function () {
    };
    ResetpasswordComponent.prototype.send = function (email) {
        var _this = this;
        var data = {
            email: email
        };
        this.http.post('http://localhost:3000/post/resetpassword', data)
            .map(function (res) { return res.json(); })
            .subscribe(function (data) {
            _this.router.navigate(['/login']);
            _this._flashMessagesService.show(data.message, { cssClass: 'alert-success', timeout: 2000 });
        });
    };
    return ResetpasswordComponent;
}());
ResetpasswordComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-resetpassword',
        template: __webpack_require__("../../../../../src/app/resetpassword/resetpassword.component.html"),
        styles: [__webpack_require__("../../../../../src/app/resetpassword/resetpassword.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages__["FlashMessagesService"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages__["FlashMessagesService"]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* Router */]) === "function" && _c || Object])
], ResetpasswordComponent);

var _a, _b, _c;
//# sourceMappingURL=resetpassword.component.js.map

/***/ }),

/***/ "../../../../../src/app/resetpassword/returnmail/returnmail.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/resetpassword/returnmail/returnmail.component.html":
/***/ (function(module, exports) {

module.exports = "<h1 class=\"page-header\">Reset Password</h1>\n<label>New Password</label>\n<input class=\"form-control\" type=\"password\" [(ngModel)]=\"newpassword\">\n<button class=\"btn btn-primary btn-block\" (click)=\"updatePassword(newpassword)\">Update Password</button>"

/***/ }),

/***/ "../../../../../src/app/resetpassword/returnmail/returnmail.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__ = __webpack_require__("../../../../angular2-flash-messages/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ReturnmailComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ReturnmailComponent = (function () {
    function ReturnmailComponent(activeRoute, http, router, _flashMessagesService) {
        this.activeRoute = activeRoute;
        this.http = http;
        this.router = router;
        this._flashMessagesService = _flashMessagesService;
    }
    ReturnmailComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.sub = this.activeRoute.params.subscribe(function (params) {
            return _this.http.get('http://localhost:3000/get/returnmail/' + params.token)
                .map(function (res) { return res.json(); })
                .subscribe(function (data) {
                _this.token = data.token;
            });
        });
    };
    ReturnmailComponent.prototype.updatePassword = function (newPassword) {
        var _this = this;
        var data = {
            password: newPassword
        };
        return this.http.post('http://localhost:3000/post/returnmail/' + this.token, data)
            .map(function (res) { return res.json(); })
            .subscribe(function (data) {
            _this.router.navigate(['/login']);
            _this._flashMessagesService.show(data.message, { cssClass: 'alert-success', timeout: 2000 });
        });
    };
    return ReturnmailComponent;
}());
ReturnmailComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-returnmail',
        template: __webpack_require__("../../../../../src/app/resetpassword/returnmail/returnmail.component.html"),
        styles: [__webpack_require__("../../../../../src/app/resetpassword/returnmail/returnmail.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* ActivatedRoute */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_http__["Http"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_http__["Http"]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__["FlashMessagesService"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__["FlashMessagesService"]) === "function" && _d || Object])
], ReturnmailComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=returnmail.component.js.map

/***/ }),

/***/ "../../../../../src/app/search/search.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/search/search.component.html":
/***/ (function(module, exports) {

module.exports = "<h1 class=\"page-header text-center\">Search</h1>\n  <div class=\"col-md-6 col-md-offset-3\">\n  <input type=\"text\" placeholder=\"Search..\" class=\"form-control\" [(ngModel)]=\"input\" (keyup)=\"search(input)\">\n  <hr>\n  <ul class=\"list-group\">\n      <li class=\"list-group-item text-center\" *ngFor=\"let user of users\"><a (click)=\"viewprofile(user._id)\">Visit {{user.username}}'s profile</a></li>\n  </ul>\n  </div>"

/***/ }),

/***/ "../../../../../src/app/search/search.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_general_service__ = __webpack_require__("../../../../../src/app/services/general.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__ = __webpack_require__("../../../../angular2-flash-messages/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SearchComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var SearchComponent = (function () {
    function SearchComponent(_authService, generalService, router, _flashMessagesService) {
        this._authService = _authService;
        this.generalService = generalService;
        this.router = router;
        this._flashMessagesService = _flashMessagesService;
    }
    SearchComponent.prototype.ngOnInit = function () {
    };
    SearchComponent.prototype.viewprofile = function (id) {
        this.router.navigate(['/profile', id]);
    };
    SearchComponent.prototype.search = function (input) {
        var _this = this;
        var reformat = input.toLowerCase();
        this.generalService.search(reformat)
            .subscribe(function (data) {
            _this.users = data.users;
        });
    };
    return SearchComponent;
}());
SearchComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-search',
        template: __webpack_require__("../../../../../src/app/search/search.component.html"),
        styles: [__webpack_require__("../../../../../src/app/search/search.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__services_general_service__["a" /* GeneralService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_general_service__["a" /* GeneralService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_4__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__angular_router__["a" /* Router */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__["FlashMessagesService"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__["FlashMessagesService"]) === "function" && _d || Object])
], SearchComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=search.component.js.map

/***/ }),

/***/ "../../../../../src/app/services/auth.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angular2_jwt__ = __webpack_require__("../../../../angular2-jwt/angular2-jwt.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angular2_jwt___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_angular2_jwt__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Rx__ = __webpack_require__("../../../../rxjs/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_Rx__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AuthService = (function () {
    function AuthService(http) {
        this.http = http;
    }
    AuthService.prototype.createAuthHeaders = function () {
        this.loadToken();
        this.options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["RequestOptions"]({
            headers: new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]({
                'Content-Type': 'application/json',
                'authorization': this.authToken
            })
        });
    };
    AuthService.prototype.loggedIn = function () {
        return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2_angular2_jwt__["tokenNotExpired"])();
    };
    AuthService.prototype.logout = function () {
        this.authToken = null;
        this.user = null;
        localStorage.clear();
    };
    AuthService.prototype.loadToken = function () {
        var token = localStorage.getItem('token');
        this.authToken = token;
    };
    AuthService.prototype.register = function (userInfo) {
        return this.http.post('http://localhost:3000/post/register', userInfo)
            .map(function (res) { return res.json(); });
    };
    AuthService.prototype.login = function (userInfo) {
        return this.http.post('http://localhost:3000/post/login', userInfo)
            .map(function (res) { return res.json(); });
    };
    AuthService.prototype.storeUserData = function (token, user) {
        localStorage.setItem('token', token);
        localStorage.setItem('user', JSON.stringify(user));
        this.authToken = token;
        this.user = user;
    };
    AuthService.prototype.getProfile = function () {
        this.createAuthHeaders();
        return this.http.get('http://localhost:3000/get/profile', this.options)
            .map(function (res) { return res.json(); });
    };
    return AuthService;
}());
AuthService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"]) === "function" && _a || Object])
], AuthService);

var _a;
//# sourceMappingURL=auth.service.js.map

/***/ }),

/***/ "../../../../../src/app/services/general.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GeneralService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var GeneralService = (function () {
    function GeneralService(http) {
        this.http = http;
    }
    GeneralService.prototype.search = function (input) {
        return this.http.get('http://localhost:3000/get/search/' + input)
            .map(function (res) { return res.json(); });
    };
    GeneralService.prototype.makeBlogPost = function (id, body, username) {
        var data = {
            username: username,
            id: id,
            body: body
        };
        return this.http.post('http://localhost:3000/post/blogpost', data)
            .map(function (res) { return res.json(); });
    };
    GeneralService.prototype.deleteBlogPost = function (id) {
        return this.http.get('http://localhost:3000/get/deletepost/' + id)
            .map(function (res) { return res.json(); });
    };
    GeneralService.prototype.getAllPosts = function () {
        return this.http.get('http://localhost:3000/get/allposts')
            .map(function (res) { return res.json(); });
    };
    GeneralService.prototype.update = function (id, data) {
        return this.http.post('http://localhost:3000/post/updatepost/' + id, data)
            .map(function (res) { return res.json(); });
    };
    GeneralService.prototype.postComment = function (id, comment, username) {
        var data = {
            comment: comment,
            username: username,
            id: id
        };
        console.log(data);
        return this.http.post('http://localhost:3000/post/postcomment/' + id, data)
            .map(function (res) { return res.json(); });
    };
    return GeneralService;
}());
GeneralService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"]) === "function" && _a || Object])
], GeneralService);

var _a;
//# sourceMappingURL=general.service.js.map

/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
var environment = {
    production: false
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/@angular/platform-browser-dynamic.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["enableProdMode"])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map