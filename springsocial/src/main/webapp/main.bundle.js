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

/***/ "../../../../../src/app/admin/admin.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".hightext{\r\n    font-weight:bold;\r\n}\r\n.inlinediv{\r\n    display: inline-block;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/admin/admin.html":
/***/ (function(module, exports) {

module.exports = "    <div class=\"w3-container w3-blue w3-padding-24 \">\r\n        <h1 class=\"hightext\">Welcome Admin</h1>\r\n    </div>\r\n    <div class=\"w3-panel \">\r\n      <div class=\"inlinediv\">\r\n      <h3 class=\"hightext\">List Of Users</h3>\r\n      </div>\r\n    <div class=\"inlinediv\">\r\n      <input type=\"button\" class=\"w3-button w3-blue\" value=\"Update\" (click)=\"promoteToAdmin()\"/>\r\n    </div>\r\n    </div>\r\n<table class=\"table\">\r\n  <thead>\r\n    <tr class=\"w3-text-blue\">\r\n      <th>User Name</th>\r\n      <th>User Id</th>\r\n      <th>First Name</th>\r\n      <th>Last Name</th>\r\n      <th>Date Of Birth</th>\r\n      <th>Industry</th>\r\n      <th>Creation Date</th>\r\n      <th>Promote To Admin</th>\r\n    </tr>\r\n  </thead>\r\n    <tbody>\r\n      <tr *ngFor=\"let row of result\">\r\n        <td>{{ row.username}}</td>\r\n        <td>{{ row.id }}</td>\r\n        <td>{{ row.firstname }}</td>\r\n        <td>{{ row.lastname }}</td>\r\n        <td>{{ row.birthday }}</td>\r\n        <td>{{ row.industry }}</td>\r\n        <td>{{ row.creationDate }}</td>\r\n        <td>\r\n            <input type=\"checkbox\" id=\"{{row.id}}\" name=\"{{row.id}}\" value=\"{{row.id}}\" [checked]=\"row.isAdmin\" (change)=\"row.isAdmin=$event.target.checked\"/>\r\n        </td>\r\n      </tr>\r\n    </tbody>\r\n</table>"

/***/ }),

/***/ "../../../../../src/app/admin/admin.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/@angular/core.es5.js");
var http_1 = __webpack_require__("../../../http/@angular/http.es5.js");
var router_1 = __webpack_require__("../../../router/@angular/router.es5.js");
var ng2_cookies_1 = __webpack_require__("../../../../ng2-cookies/index.js");
__webpack_require__("../../../../rxjs/Rx.js");
var AdminComponent = (function () {
    function AdminComponent(http, router) {
        var _this = this;
        this.http = http;
        this.router = router;
        this.headers = new http_1.Headers();
        this.cookies = ng2_cookies_1.Cookie.getAll();
        this.providerCookie = this.cookies["provider_cookie"];
        this.authcookie = this.cookies["AUTH-TOKEN"];
        this.headers.set("x-auth-token", this.authcookie);
        this.options = new http_1.RequestOptions({ headers: this.headers });
        this.http
            .post("http://localhost:8080/statelesssocial/api/user/showallusers", this.options)
            .map(function (res) { return res.json(); })
            .subscribe(function (json) {
            console.log(json);
            _this.result = json;
            _this.result.forEach(function (e) {
                if (e.role == 'admin') {
                    e.isAdmin = true;
                }
            });
            console.log(_this.result);
        }, function (err) {
            console.error(err);
        });
    }
    AdminComponent.prototype.promoteToAdmin = function () {
        var localData = [];
        this.result.forEach(function (e) {
            e.role = e.isAdmin ? 'admin' : 'user';
            localData.push({ userId: e.id, isAdmin: e.isAdmin });
        });
        var header = new http_1.Headers();
        header.set('Content-Type', 'application/json');
        var promoteOptions = new http_1.RequestOptions({ headers: header });
        this.http.post('http://localhost:8080/statelesssocial/api/user/promoteUsers', JSON.stringify({ "data": localData }), promoteOptions).map(function (res) {
            res.json();
        }).subscribe(function (json) {
            console.log(json);
        }, function (err) {
            console.log('error');
        });
    };
    return AdminComponent;
}());
AdminComponent = __decorate([
    core_1.Component({
        selector: "user-view",
        template: __webpack_require__("../../../../../src/app/admin/admin.html"),
        styles: [__webpack_require__("../../../../../src/app/admin/admin.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof http_1.Http !== "undefined" && http_1.Http) === "function" && _a || Object, typeof (_b = typeof router_1.Router !== "undefined" && router_1.Router) === "function" && _b || Object])
], AdminComponent);
exports.AdminComponent = AdminComponent;
var _a, _b;
//# sourceMappingURL=admin.js.map

/***/ }),

/***/ "../../../../../src/app/app-routing.module.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/@angular/core.es5.js");
var router_1 = __webpack_require__("../../../router/@angular/router.es5.js");
var index_1 = __webpack_require__("../../../../../src/app/guards/index.ts");
var welcome_1 = __webpack_require__("../../../../../src/app/welcome/welcome.ts");
var index_2 = __webpack_require__("../../../../../src/app/login/index.ts");
var admin_1 = __webpack_require__("../../../../../src/app/admin/admin.ts");
var routes = [
    { path: 'login', component: index_2.LoginComponent },
    { path: 'welcome', component: welcome_1.WelcomeComponent },
    { path: 'test', component: welcome_1.WelcomeComponent, canActivate: [index_1.AuthGuard] },
    { path: '', redirectTo: 'test', pathMatch: 'full' },
    { path: 'adminPage', component: admin_1.AdminComponent },
    { path: '**', component: welcome_1.WelcomeComponent }
];
var AppRoutingModule = (function () {
    function AppRoutingModule() {
    }
    return AppRoutingModule;
}());
AppRoutingModule = __decorate([
    core_1.NgModule({
        imports: [router_1.RouterModule.forRoot(routes)],
        exports: [router_1.RouterModule],
        providers: [
            index_1.AuthGuard
        ]
    })
], AppRoutingModule);
exports.AppRoutingModule = AppRoutingModule;
//# sourceMappingURL=app-routing.module.js.map

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>\n"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/@angular/core.es5.js");
var AppComponent = (function () {
    function AppComponent() {
    }
    return AppComponent;
}());
AppComponent = __decorate([
    core_1.Component({
        selector: 'app-root',
        template: __webpack_require__("../../../../../src/app/app.component.html")
    })
], AppComponent);
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var platform_browser_1 = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
var core_1 = __webpack_require__("../../../core/@angular/core.es5.js");
var http_1 = __webpack_require__("../../../http/@angular/http.es5.js");
var app_component_1 = __webpack_require__("../../../../../src/app/app.component.ts");
var router_1 = __webpack_require__("../../../router/@angular/router.es5.js");
var app_routing_module_1 = __webpack_require__("../../../../../src/app/app-routing.module.ts");
var welcome_1 = __webpack_require__("../../../../../src/app/welcome/welcome.ts");
var index_1 = __webpack_require__("../../../../../src/app/guards/index.ts");
var index_2 = __webpack_require__("../../../../../src/app/login/index.ts");
var admin_1 = __webpack_require__("../../../../../src/app/admin/admin.ts");
var forms_1 = __webpack_require__("../../../forms/@angular/forms.es5.js");
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    core_1.NgModule({
        declarations: [
            app_component_1.AppComponent,
            index_2.LoginComponent,
            welcome_1.WelcomeComponent,
            admin_1.AdminComponent
        ],
        imports: [
            platform_browser_1.BrowserModule,
            http_1.HttpModule,
            http_1.JsonpModule,
            app_routing_module_1.AppRoutingModule,
            router_1.RouterModule,
            forms_1.FormsModule,
        ],
        providers: [
            index_1.AuthGuard
        ],
        bootstrap: [app_component_1.AppComponent]
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ "../../../../../src/app/guards/auth.guard.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/@angular/core.es5.js");
var router_1 = __webpack_require__("../../../router/@angular/router.es5.js");
var ng2_cookies_1 = __webpack_require__("../../../../ng2-cookies/index.js");
var AuthGuard = (function () {
    function AuthGuard(router) {
        this.router = router;
        // console.log("constructor");
    }
    AuthGuard.prototype.canActivate = function (route, state) {
        this.cookies = ng2_cookies_1.Cookie.getAll();
        this.authcookie = this.cookies['AUTH-TOKEN'];
        if (this.authcookie != null) {
            console.log(this.authcookie);
            this.router.navigateByUrl('/welcome');
            return true;
        }
        else {
            this.router.navigateByUrl('/login');
            return false;
        }
    };
    return AuthGuard;
}());
AuthGuard = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [typeof (_a = typeof router_1.Router !== "undefined" && router_1.Router) === "function" && _a || Object])
], AuthGuard);
exports.AuthGuard = AuthGuard;
var _a;
//# sourceMappingURL=auth.guard.js.map

/***/ }),

/***/ "../../../../../src/app/guards/index.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
__export(__webpack_require__("../../../../../src/app/guards/auth.guard.ts"));
//# sourceMappingURL=index.js.map

/***/ }),

/***/ "../../../../../src/app/login/index.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
__export(__webpack_require__("../../../../../src/app/login/login.component.ts"));
//# sourceMappingURL=index.js.map

/***/ }),

/***/ "../../../../../src/app/login/login.component.html":
/***/ (function(module, exports) {

module.exports = "<div>\r\n\t\t<div class=\"container login-wrap\">\r\n\t\t\t<div class=\"w3-border-bottom\">\r\n\t\t\t\t<button class=\"w3-bar-item w3-button w3-white\" onclick=\"openLoginTab()\"\r\n\t\t\t\t\tstyle=\"width: 50%; float: left;\">\r\n\t\t\t\t\t<h4>Login</h4>\r\n\t\t\t\t</button>\r\n\t\t\t\t<button class=\"w3-bar-item w3-button w3-white\" onclick=\"openRegisterTab()\"\r\n\t\t\t\t\tstyle=\"width: 50%;\">\r\n\t\t\t\t\t<h4>Register</h4>\r\n\t\t\t\t</button>\r\n\t\t\t</div>\r\n\t\t\t<div id=\"login\" style=\"padding: 10% 15% 10% 15%;\">\r\n\t\t\t\t<form class=\"loginForm\" action=\"/auth/normaluser\" method='POST'\r\n\t\t\t\t\tname=\"loginForm\" id=\"loginForm\">\r\n\t\t\t\t\t<input type=\"hidden\" name=\"${_csrf.parameterName}\"\r\n\t\t\t\t\t\tvalue=\"${_csrf.token}\" />\r\n\t\t\t\t\t<table style=\"width: 100%;\">\r\n\t\t\t\t\t\t<tr>\r\n\t\t\t\t\t\t\t<td style=\"padding-bottom: 10%; padding-left: 2%;\"><i\r\n\t\t\t\t\t\t\t\tclass=\"fa fa-user  w3-xxlarge w3-text-blue\"></i></td>\r\n\t\t\t\t\t\t\t<td style=\"padding-bottom: 10%; padding-left: 2%;\"><input\r\n\t\t\t\t\t\t\t\tplaceholder=\"Username\" class=\"w3-input\" name=\"j_username\"\r\n\t\t\t\t\t\t\t\tstyle=\"border-radius: 25px;\" type=\"text\" /></td>\r\n\t\t\t\t\t\t</tr>\r\n\t\t\t\t\t\t<tr>\r\n\t\t\t\t\t\t\t<td style=\"padding-bottom: 10%; padding-left: 2%;\"><i\r\n\t\t\t\t\t\t\t\tclass=\"fa fa-lock w3-xxlarge w3-text-blue\"></i></td>\r\n\t\t\t\t\t\t\t<td style=\"padding-bottom: 10%; padding-left: 2%;\"><input\r\n\t\t\t\t\t\t\t\ttype=\"password\" style=\"border-radius: 25px;\"\r\n\t\t\t\t\t\t\t\tplaceholder=\"Password\" class=\"w3-input\" name=\"j_password\" /></td>\r\n\t\t\t\t\t\t</tr>\r\n\t\t\t\t\t</table>\r\n\t\t\t\t\t<br /> <input type=\"submit\" value=\"Login\" name=\"login\"\r\n\t\t\t\t\t\tclass=\"w3-button w3-blue\"\r\n\t\t\t\t\t\tstyle=\"padding: 15px 20px; border-radius: 25px; width: 100%;\" />\r\n\t\t\t\t\t<br /> <br /> <br />\r\n\t\t\t\t</form>\r\n\t\t\t\t<br />\r\n\t\t\t\t<br/>\r\n\t\t\t\t<div class=\"col-md-12 col-sm-12 col-xs-12\">\r\n\t\t\t\t\t<a style=\"background-color: white;\" data-toggle=\"modal\"\r\n\t\t\t\t\t\tdata-target=\"#forgotPasswordModal\"><b>Forget Password?</b></a>\r\n\t\t\t\t</div>\r\n\t\t\t\t\r\n\t\t\t\t<ul style=\"border-collapse: separate; border-spacing: 2px\"\r\n\t\t\t\t\tclass=\"social-network social-circle\">\r\n\t\t\t\t\t<li><a href=\"/statelesssocial/auth/linkedin\" class=\"icoLinkedin\"\r\n\t\t\t\t\t\ttitle=\"Linkedin\"><i class=\"fa fa-linkedin\"></i></a></li>\r\n\t\t\t\t\t<li><a href=\"/statelesssocial/auth/facebook\" class=\"icoFacebook\"\r\n\t\t\t\t\t\ttitle=\"Facebook\"><i class=\"fa fa-facebook\"></i></a></li>\r\n\t\t\t\t\t<li><a href=\"/statelesssocial/auth/google?scope=https://www.googleapis.com/auth/plus.login https://www.googleapis.com/auth/plus.me https://www.googleapis.com/auth/userinfo.email https://www.googleapis.com/auth/userinfo.profile\"\r\n\t\t\t\t\t\tclass=\"icoGoogle\" title=\"Google +\"><i\r\n\t\t\t\t\t\t\tclass=\"fa fa-google-plus\"></i></a></li>\r\n\r\n\t\t\t\t</ul>\r\n\t\t\t\t\t\t\r\n\t\t\t</div>\r\n\t\t\t<div id=\"register\" style=\"display: none; padding: 10% 15% 10% 15%;\">\r\n\r\n\t\t\t\t<form class=\"registerForm\" name=\"registerForm\" id=\"registerForm\">\r\n\t\t\t\t\t<table style=\"width: 100%;\">\r\n\t\t\t\t\t\t<tr>\r\n\t\t\t\t\t\t\t<td style=\"padding-bottom: 10%; padding-left: 2%;\"><i\r\n\t\t\t\t\t\t\t\tclass=\"fa fa-user  w3-xxlarge w3-text-blue\"></i></td>\r\n\t\t\t\t\t\t\t<td style=\"padding-bottom: 10%; padding-left: 2%;\">\r\n\t\t\t\t\t\t\t<input placeholder=\"First Name\" [(ngModel)]=\"regmodel.fname\" name=\"fname\" required\r\n\t\t\t\t\t\t\t\tstyle=\"width: 100%; border-radius: 25px;\" class=\"w3-input\"\r\n\t\t\t\t\t\t\t\ttype=\"text\" /></td>\r\n\t\t\t\t\t\t</tr>\r\n\t\t\t\t\t\t<tr>\r\n\t\t\t\t\t\t\t<td style=\"padding-bottom: 10%; padding-left: 2%;\"><i\r\n\t\t\t\t\t\t\t\tclass=\"fa fa-user  w3-xxlarge w3-text-blue\"></i></td>\r\n\t\t\t\t\t\t\t<td style=\"padding-bottom: 10%; padding-left: 2%;\"><input\r\n\t\t\t\t\t\t\t\tplaceholder=\"Last Name\" [(ngModel)]=\"regmodel.lname\" name=\"lname\" required\r\n\t\t\t\t\t\t\t\tstyle=\"width: 100%; border-radius: 25px;\" class=\"w3-input\"\r\n\t\t\t\t\t\t\t\ttype=\"text\" /></td>\r\n\t\t\t\t\t\t</tr>\r\n\t\t\t\t\t\t\r\n\t\t\t\t\t\t<tr>\r\n\t\t\t\t\t\t\t\t<td style=\"padding-bottom: 10%; padding-left: 2%;\"><i\r\n\t\t\t\t\t\t\t\t\tclass=\"fa fa-user  w3-xxlarge w3-text-blue\"></i></td>\r\n\t\t\t\t\t\t\t\t<td style=\"padding-bottom: 10%; padding-left: 2%;\"><input\r\n\t\t\t\t\t\t\t\t\tplaceholder=\"User Name\" [(ngModel)]=\"regmodel.uname\" name=\"uname\" required\r\n\t\t\t\t\t\t\t\t\tstyle=\"width: 100%; border-radius: 25px;\" class=\"w3-input\"\r\n\t\t\t\t\t\t\t\t\ttype=\"text\" /></td>\r\n\t\t\t\t\t\t\t\t<td>\r\n\t\t\t\t\t\t\t\t\t\t<input type=\"button\" value=\"Validate User\" name=\"validate\"\r\n\t\t\t\t\t\t\t\t\t\tclass=\"w3-button w3-blue\"\r\n\t\t\t\t\t\t\t\t\t\tstyle=\"padding: 15px 20px; border-radius: 25px; width: 100%;\" (click)=\"validateUser()\" /> <br />\t\t\t\r\n\t\t\t\t\t\t\t\t</td>\t\r\n\t\t\t\t\t\t</tr>\r\n\r\n\r\n\t\t\t\t\t\t<tr>\r\n\t\t\t\t\t\t\t<td style=\"padding-bottom: 10%; padding-left: 2%;\"><i\r\n\t\t\t\t\t\t\t\tclass=\"w3-xxlarge w3-text-blue fa fa-envelope-o\"></i></td>\r\n\t\t\t\t\t\t\t<td style=\"padding-bottom: 10%; padding-left: 2%;\"><input\r\n\t\t\t\t\t\t\t\tplaceholder=\"Email Id\" [(ngModel)]=\"regmodel.email\" name=\"email\" required style=\"width: 100%; border-radius: 25px;\"\r\n\t\t\t\t\t\t\t\tclass=\"w3-input\" type=\"text\" /></td>\r\n\t\t\t\t\t\t</tr>\r\n\t\t\t\t\t\t<tr>\r\n\t\t\t\t\t\t\t<td style=\"padding-bottom: 10%; padding-left: 2%;\"><i\r\n\t\t\t\t\t\t\t\tclass=\"fa fa-lock w3-xxlarge w3-text-blue\"></i></td>\r\n\t\t\t\t\t\t\t<td style=\"padding-bottom: 10%; padding-left: 2%;\"><input\r\n\t\t\t\t\t\t\t\tplaceholder=\"Password\" [(ngModel)]=\"regmodel.passwd\" name=\"passwd\" required style=\"width: 100%; border-radius: 25px;\"\r\n\t\t\t\t\t\t\t\tclass=\"w3-input\" type=\"password\" /></td>\r\n\t\t\t\t\t\t</tr>\r\n\t\t\t\t\t\t<tr>\r\n\t\t\t\t\t\t\t<td style=\"padding-bottom: 10%; padding-left: 2%;\"><i\r\n\t\t\t\t\t\t\t\tclass=\"fa fa-lock w3-xxlarge w3-text-blue\"></i></td>\r\n\t\t\t\t\t\t\t<td style=\"padding-bottom: 10%; padding-left: 2%;\"><input\r\n\t\t\t\t\t\t\t\tplaceholder=\"Confirm Password\" [(ngModel)]=\"regmodel.cpasswd\" name=\"cpasswd\" required\r\n\t\t\t\t\t\t\t\tstyle=\"width: 100%; border-radius: 25px;\" class=\"w3-input\"\r\n\t\t\t\t\t\t\t\ttype=\"password\" /></td>\r\n\t\t\t\t\t\t</tr>\r\n\t\t\t\t\t\t<tr>\r\n\t\t\t\t\t\t\t<td style=\"padding-bottom: 10%; padding-left: 2%;\"><i\r\n\t\t\t\t\t\t\t\tclass=\"w3-xxlarge fa fa-home w3-text-blue\"></i></td>\r\n\t\t\t\t\t\t\t<td style=\"padding-bottom: 10%; padding-left: 2%;\"><input\r\n\t\t\t\t\t\t\t\tplaceholder=\"Location\" [(ngModel)]=\"regmodel.location\" name=\"location\" required style=\"width: 100%; border-radius: 25px;\"\r\n\t\t\t\t\t\t\t\tclass=\"w3-input\" type=\"text\" /></td>\r\n\t\t\t\t\t\t</tr>\r\n\t\t\t\t\t</table>\r\n\t\t\t\t</form>\r\n\t\t\t\t<br /> <input type=\"submit\" value=\"Register\" name=\"register\"\r\n\t\t\t\t\tclass=\"w3-button w3-blue\"\r\n\t\t\t\t\tstyle=\"padding: 15px 20px; border-radius: 25px; width: 100%;\" (click)=\"registerNewUser()\" /> <br />\r\n\t\t\t\t<br /> <br /> <br />\r\n\t\t\t\t\r\n\t\t\t\t<ul style=\"border-collapse: separate; border-spacing: 2px\"\r\n\t\t\t\t\tclass=\"social-network social-circle\">\r\n\t\t\t\t\t<li><a href=\"/statelesssocial/auth/linkedin\" class=\"icoLinkedin\"\r\n\t\t\t\t\t\ttitle=\"Linkedin\"><i class=\"fa fa-linkedin\"></i></a></li>\r\n\t\t\t\t\t<li><a href=\"/statelesssocial/auth/facebook\" class=\"icoFacebook\"\r\n\t\t\t\t\t\ttitle=\"Facebook\"><i class=\"fa fa-facebook\"></i></a></li>\r\n\t\t\t\t\t<li><a href=\"/statelesssocial/auth/google?scope=https://www.googleapis.com/auth/plus.login https://www.googleapis.com/auth/plus.me https://www.googleapis.com/auth/userinfo.email https://www.googleapis.com/auth/userinfo.profile\"\r\n\t\t\t\t\t\tclass=\"icoGoogle\" title=\"Google +\"><i\r\n\t\t\t\t\t\t\tclass=\"fa fa-google-plus\"></i></a></li>\r\n\r\n\t\t\t\t</ul>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t</div>"

/***/ }),

/***/ "../../../../../src/app/login/login.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/@angular/core.es5.js");
var http_1 = __webpack_require__("../../../http/@angular/http.es5.js");
var router_1 = __webpack_require__("../../../router/@angular/router.es5.js");
var register_model_1 = __webpack_require__("../../../../../src/app/login/register_model.ts");
var LoginComponent = (function () {
    function LoginComponent(http, router) {
        this.http = http;
        this.router = router;
        this.regmodel = new register_model_1.RegistrationModel();
    }
    LoginComponent.prototype.registerNewUser = function () {
        var _this = this;
        var headersInfo = new http_1.Headers();
        headersInfo.set('Content-Type', 'application/json');
        var options = new http_1.RequestOptions({ headers: headersInfo });
        this.http.post('http://localhost:8080/statelesssocial/registerNewUser', JSON.stringify(this.regmodel), options)
            .map(function (res) { return res.json(); }).subscribe(function (result) {
            _this.regSuccess = true;
            console.log('registration sucess');
        }, function (error) {
            _this.regError = true;
            console.log('registration unsucessfull');
        });
    };
    LoginComponent.prototype.validateUser = function () {
        this.http.get('http://localhost:8080/statelesssocial/validateUser').map(function (res) { return res.json; })
            .subscribe(function (result) {
        }, function (error) {
            console.log('error');
        });
    };
    return LoginComponent;
}());
LoginComponent = __decorate([
    core_1.Component({
        selector: "app-root",
        template: __webpack_require__("../../../../../src/app/login/login.component.html")
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof http_1.Http !== "undefined" && http_1.Http) === "function" && _a || Object, typeof (_b = typeof router_1.Router !== "undefined" && router_1.Router) === "function" && _b || Object])
], LoginComponent);
exports.LoginComponent = LoginComponent;
var _a, _b;
//# sourceMappingURL=login.component.js.map

/***/ }),

/***/ "../../../../../src/app/login/register_model.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var RegistrationModel = (function () {
    function RegistrationModel() {
        this.fname = '';
        this.lname = '';
        this.email = '';
        this.passwd = '';
        this.cpasswd = '';
        this.location = '';
    }
    return RegistrationModel;
}());
exports.RegistrationModel = RegistrationModel;
//# sourceMappingURL=register_model.js.map

/***/ }),

/***/ "../../../../../src/app/models/UserDetails.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var UserDetails = (function () {
    function UserDetails() {
        this.id = '';
        this.username = '';
        this.birthday = '';
        this.creationDate = '';
        this.email = '';
        this.firstname = '';
        this.gender = '';
        this.lastname = '';
        this.industry = '';
        this.flag = '';
        this.gender = '';
        this.updateDate = '';
        this.role = '';
        this.providerUserId = '';
        this.location = '';
    }
    UserDetails.prototype.fromJSON = function (json) {
        for (var propName in json)
            this[propName] = json[propName];
        return this;
    };
    return UserDetails;
}());
exports.UserDetails = UserDetails;
//# sourceMappingURL=UserDetails.js.map

/***/ }),

/***/ "../../../../../src/app/welcome/welcome.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "td{\n  padding-bottom: 10%; padding-left: 2%;\n }\n .one{\n\tpadding-left:10%;\n\tpadding-right:10%;\n }\n.customlink{\n\tbackground-color: white;\n\ttext-decoration: none;\n\tcolor: #ff3300;\n}\n.showerror{\n\tcolor: red;\n\tfont-weight: bold;\n\tpadding-left: 5px;\n\tpadding-top: 5px;  \n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/welcome/welcome.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n\t<div *ngIf=\"userdetails?.flag==false\">\n\t\t<h3 class=\"w3-text-teal\">New Registration Found... Want to keep the following settings?</h3>\n\t</div>\n\t<h1 class=\"w3-text-blue\">Welcome {{userdetails?.username}}</h1>\n\t<form (ngSubmit)=\"onSubmit(detailsForm.value)\" #detailsForm=\"ngForm\">\n\t\t<table style=\"border-collapse: collapse;border-spacing: 10px;\">\n\t\t\t<tr>\n\t\t\t\t<td><i class=\"fa fa-user  w3-xxlarge w3-text-blue\"></i></td>\n\t\t\t\t<td class=\"one\"><b><label for=\"username\" >UserName</label></b></td>\n\t\t\t\t<td><input placeholder=\"User Name\" class=\"form-control\" name=\"username\" \n\t\t\t\t\tid=\"username\" style=\"width: 150%; border-radius: 25px;\"\n\t\t\t\t\ttype=\"text\" value=\"{{userdetails.username}}\" [(ngModel)]=\"userdetails.username\" \n\t\t\t\t\trequired #username=\"ngModel\" readonly/>\n\t\t\t\t\t<div [hidden]=\"username.valid || username.pristine\" class=\"showerror\">\n\t\t\t\t\t\tUser Name required\n\t\t\t\t\t</div>\n\t\t\t\t</td>\n\t\t\t</tr>\n\t\t\t<tr>\n\t\t\t\t<td><i class=\"fa fa-user-circle  w3-xxlarge w3-text-blue\"></i></td>\n\t\t\t\t<td class=\"one\"><b>FirstName</b></td>\n\t\t\t\t<td><div [hidden]=\"isEditable\"><input placeholder=\"First Name\" class=\"form-control w3-input\" name=\"firstname\" id=\"firstname\" \n\t\t\t\t\tstyle=\"width: 150%; border-radius: 25px;\"\n\t\t\t\t\t[(ngModel)]=\"userdetails.firstname\" type=\"text\" value=\"{{userdetails.firstname}}\" \n\t\t\t\t\trequired #firstname=\"ngModel\" readonly/></div>\n\t\t\t\t<div [hidden]=\"!isEditable\"><input placeholder=\"First Name\" class=\"form-control w3-input\" name=\"firstname\" id=\"firstname\" \n\t\t\t\t\tstyle=\"width: 150%; border-radius: 25px;\"\n\t\t\t\t\t[(ngModel)]=\"userdetails.firstname\" type=\"text\" value=\"{{userdetails.firstname}}\" \n\t\t\t\t\trequired #firstname=\"ngModel\" /></div>\n\n\t\t\t\t<div [hidden]=\"firstname.valid || firstname.pristine\"  class=\"showerror\">\n\t\t\t\t\t\tFirst Name required\n\t\t\t\t\t</div>\n\t\t\t\t</td>\n\t\t\t</tr>\n\t\t\t<tr>\n\t\t\t\t<td><i class=\"fa fa-user-o  w3-xxlarge w3-text-blue\"></i></td>\n\t\t\t\t<td class=\"one\"><b>LastName</b></td>\n\t\t\t\t<td><div [hidden]=\"isEditable\"><input placeholder=\"Last Name\" name=\"lastname\" id=\"lastname\" \n\t\t\t\t\tstyle=\"width: 150%; border-radius: 25px;\" class=\"form-control w3-input\"\n\t\t\t\t\t type=\"text\" value=\"{{userdetails.lastname}}\" [(ngModel)]=\"userdetails.lastname\" \n\t\t\t\t\t  required #lastname=\"ngModel\" readonly/></div>\n\t\t\t\t\t<div [hidden]=\"!isEditable\"><input placeholder=\"Last Name\" name=\"lastname\" id=\"lastname\" \n\t\t\t\t\tstyle=\"width: 150%; border-radius: 25px;\" class=\"form-control w3-input\"\n\t\t\t\t\t type=\"text\" value=\"{{userdetails.lastname}}\" [(ngModel)]=\"userdetails.lastname\" \n\t\t\t\t\t  required #lastname=\"ngModel\" /></div>\n\t\t\t\t\t  <div [hidden]=\"lastname.valid || lastname.pristine\"  class=\"showerror\">\n\t\t\t\t\t\tLast Name required\n\t\t\t\t\t</div>\n\t\t\t\t</td>\n\t\t\t</tr>\n\t\t\t<tr>\n\t\t\t\t<td><i class=\"glyphicon glyphicon-envelope  w3-xxlarge w3-text-blue\"></i></td>\n\t\t\t\t<td class=\"one\"><b>Email</b></td>\n\t\t\t\t<td><div [hidden]=\"isEditable\"><input placeholder=\"Email\" name=\"email\" id=\"email\" \n\t\t\t\t\tstyle=\"width: 150%; border-radius: 25px;\" class=\"form-control w3-input\" type=\"text\"\n\t\t\t\t\t value=\"{{userdetails.email}}\" [(ngModel)]=\"userdetails.email\" \n\t\t\t\t\t  required #email=\"ngModel\" readonly/></div>\n\t\t\t\t\t<div [hidden]=\"!isEditable\"><input placeholder=\"Email\" name=\"email\" id=\"email\" \n\t\t\t\t\tstyle=\"width: 150%; border-radius: 25px;\" class=\"form-control w3-input\" type=\"text\"\n\t\t\t\t\t value=\"{{userdetails.email}}\" [(ngModel)]=\"userdetails.email\" \n\t\t\t\t\t  required #email=\"ngModel\" /></div>\n\t\t\t\t\t <div [hidden]=\"email.valid || email.pristine\"  class=\"showerror\">\n\t\t\t\t\t\tEmail required\n\t\t\t\t\t</div>\n\t\t\t\t</td>\n\t\t\t</tr>\n\t\t\t<tr>\n\t\t\t\t<td><i class=\"material-icons  w3-xxlarge w3-text-blue\">location_on</i></td>\n\t\t\t\t<td class=\"one\"><b>Location</b></td>\n\t\t\t\t<td><div [hidden]=\"isEditable\"><input placeholder=\"Location\" name=\"location\" id=\"location\" \n\t\t\t\t\tstyle=\"width: 150%; border-radius: 25px;\" class=\"form-control w3-input\"\n\t\t\t\t\t type=\"text\" value=\"{{userdetails.location}}\" [(ngModel)]=\"userdetails.location\" \n\t\t\t\t\t  required #location=\"ngModel\" readonly/></div>\n\t\t\t\t\t<div [hidden]=\"!isEditable\"><input placeholder=\"Location\" name=\"location\" id=\"location\" \n\t\t\t\t\tstyle=\"width: 150%; border-radius: 25px;\" class=\"form-control w3-input\"\n\t\t\t\t\t type=\"text\" value=\"{{userdetails.location}}\" [(ngModel)]=\"userdetails.location\" \n\t\t\t\t\t  required #location=\"ngModel\" /></div>\n\t\t\t\t\t  <div [hidden]=\"location.valid || location.pristine\"  class=\"showerror\">\n\t\t\t\t\t\tLocation required\n\t\t\t\t\t</div>\n\t\t\t\t</td>\n\t\t\t</tr>\n\t\t\t<tr>\n\t\t\t\t<td><i class=\"fa fa-industry  w3-xxlarge w3-text-blue\"></i></td>\n\t\t\t\t<td class=\"one\"><b>Industry</b></td>\n\t\t\t\t<td><div [hidden]=\"isEditable\"><input placeholder=\"Industry\" name=\"industry\" id=\"industry\" \n\t\t\t\t\tstyle=\"width: 150%; border-radius: 25px;\" class=\"form-control w3-input\"\n\t\t\t\t\t type=\"text\" value=\"{{userdetails.industry}}\" [(ngModel)]=\"userdetails.industry\" \n\t\t\t\t\t  required #industry=\"ngModel\" readonly/></div>\n\t\t\t\t\t<div [hidden]=\"!isEditable\"><input placeholder=\"Industry\" name=\"industry\" id=\"industry\" \n\t\t\t\t\tstyle=\"width: 150%; border-radius: 25px;\" class=\"form-control w3-input\"\n\t\t\t\t\t type=\"text\" value=\"{{userdetails.industry}}\" [(ngModel)]=\"userdetails.industry\" \n\t\t\t\t\t  required #industry=\"ngModel\" /></div>\n\t\t\t\t\t  <div [hidden]=\"industry.valid || industry.pristine\"  class=\"showerror\">\n\t\t\t\t\t\tIndustry required\n\t\t\t\t\t</div>\n\t\t\t\t</td>\n\t\t\t</tr>\n\t\t\t<tr>\n\t\t\t\t<td><i class=\"fa fa-birthday-cake  w3-xxlarge w3-text-blue\"></i></td>\n\t\t\t\t<td class=\"one\"><b>Birthday</b></td>\n\t\t\t\t<td><div [hidden]=\"isEditable\"><input placeholder=\"Birthday\" name=\"birthday\" id=\"birthday\" \n\t\t\t\t\tstyle=\"width: 150%; border-radius: 25px;\" class=\"form-control w3-input\"\n\t\t\t\t\t type=\"text\" value=\"{{userdetails.birthday}}\" [(ngModel)]=\"userdetails.birthday\" \n\t\t\t\t\t  required #birthday=\"ngModel\" readonly/></div>\n\t\t\t\t\t<div [hidden]=\"!isEditable\"><input placeholder=\"Birthday\" name=\"birthday\" id=\"birthday\" \n\t\t\t\t\tstyle=\"width: 150%; border-radius: 25px;\" class=\"form-control w3-input\"\n\t\t\t\t\t type=\"text\" value=\"{{userdetails.birthday}}\" [(ngModel)]=\"userdetails.birthday\" \n\t\t\t\t\t  required #birthday=\"ngModel\" /></div>\n\t\t\t\t\t  <div [hidden]=\"birthday.valid || birthday.pristine\"  class=\"showerror\">\n\t\t\t\t\t\tBirthday required\n\t\t\t\t\t</div>\n\t\t\t\t</td>\n\t\t\t</tr>\n\t\t\t<tr>\n\t\t\t\t<td><i class=\"fa fa-envira  w3-xxlarge w3-text-blue\"></i></td>\n\t\t\t\t<td class=\"one\"><b>Creation Date</b></td>\n\t\t\t\t<td><input placeholder=\"Creation Date\" \n\t\t\t\t\tname=\"creationDate\" id=\"creationDate\" style=\"width: 150%; border-radius: 25px;\" \n\t\t\t\t\tclass=\"form-control w3-input\"\n\t\t\t\t\t type=\"text\" value=\"{{userdetails.creationDate}}\" \n\t\t\t\t\t  [(ngModel)]=\"userdetails.creationDate\" required #creationDate=\"ngModel\" readonly/>\n\t\t\t\t\t  <div [hidden]=\"creationDate.valid || creationDate.pristine\"  class=\"showerror\">\n\t\t\t\t\t\tCreation Date required\n\t\t\t\t\t</div>\n\t\t\t\t</td>\t \n\t\t\t</tr>\n\t\t\t<tr>\n\t\t\t\t<td><i class=\"fa fa-repeat  w3-xxlarge w3-text-blue\"></i></td>\n\t\t\t\t<td class=\"one\"><b>Last Modified Date</b></td>\n\t\t\t\t<td><input placeholder=\"Last Modified Date\" \n\t\t\t\t\tname=\"updateDate\" id=\"updateDate\" style=\"width: 150%; border-radius: 25px;\" \n\t\t\t\t\tclass=\"form-control w3-input\"\n\t\t\t\t\t type=\"text\" value=\"{{userdetails.updateDate}}\" [(ngModel)]=\"userdetails.updateDate\" \n\t\t\t\t\t  required #updateDate=\"ngModel\" readonly/>\n\t\t\t\t\t  \n\t\t\t\t\t <div [hidden]=\"updateDate.valid || updateDate.pristine\"  class=\"showerror\">\n\t\t\t\t\t\tLast Modified Date required\n\t\t\t\t\t</div>\n\t\t\t\t</td>\n\n\t\t\t</tr>\n\t\t\t<tr>\n\t\t\t\t<td><i class=\"fa fa-universal-access  w3-xxlarge w3-text-blue\"></i></td>\n\t\t\t\t<td class=\"one\"><b>Gender</b></td>\n\t\t\t\t<td><div [hidden]=\"isEditable\"><input placeholder=\"Gender\" \n\t\t\t\t\tname=\"gender\" id=\"gender\" style=\"width: 150%; border-radius: 25px;\" \n\t\t\t\t\tclass=\"form-control w3-input\" type=\"text\"\n\t\t\t\t\t value=\"{{userdetails.gender}}\" \n\t\t\t\t\t  [(ngModel)]=\"userdetails.gender\" required #gender=\"ngModel\" readonly/></div>\n\t\t\t\t\t<div [hidden]=\"!isEditable\"><input placeholder=\"Gender\" name=\"gender\" id=\"gender\" style=\"width: 150%; border-radius: 25px;\" \n\t\t\t\t\tclass=\"form-control w3-input\" type=\"text\"\n\t\t\t\t\t value=\"{{userdetails.gender}}\" \n\t\t\t\t\t  [(ngModel)]=\"userdetails.gender\" required #gender=\"ngModel\" /></div>\n\t\t\t\t<div [hidden]=\"gender.valid || gender.pristine\"   class=\"showerror\">\n\t\t\t\t\t\tGender required\n\t\t\t\t\t</div>\n\t\t\t\t</td>\n\n\t\t\t</tr>\n\t\t\t<tr>\n\t\t\t\t<td><i class=\"fa fa-hand-o-right  w3-xxlarge w3-text-blue\"></i></td>\n\t\t\t\t<td class=\"one\"><b>User Id</b></td>\n\t\t\t\t<td><input placeholder=\"User ID\" [(ngModel)]=\"userdetails.id\" name=\"id\" id=\"id\" \n\t\t\t\t\tstyle=\"width: 150%; border-radius: 25px;\" #id=\"ngModel\" class=\"form-control w3-input\" type=\"text\"\n\t\t\t\t\t value=\"{{userdetails.id}}\" required readonly/></td>\n\t\t\t</tr>\n\t\t\t<tr>\n\t\t\t\t<td><i class=\"material-icons  w3-xxlarge w3-text-blue\">perm_identity</i></td>\n\t\t\t\t<td class=\"one\"><b>Role</b></td>\n\t\t\t\t<td><input placeholder=\"Role\" name=\"role\"\n\t\t\t\t\t #role=\"ngModel\"  [(ngModel)]=\"userdetails.role\"\n\t\t\t\t\tid=\"role\" style=\"width: 150%; border-radius: 25px;\" class=\"form-control w3-input\" type=\"text\"\n\t\t\t\t\t value=\"{{userdetails.role}}\" required readonly/></td>\n\t\t\t</tr>\n\t\t\t<input type=\"hidden\" value=\"userdetails?.flag\" [(ngModel)]=\"userdetails.flag\" #flag=\"ngModel\" name=\"flag\" id=\"flag\"/>\n\t\t\t<input type=\"hidden\" value=\"userdetails?.providerUserId\" \n\t\t\t[(ngModel)]=\"userdetails.providerUserId\" #providerUserId=\"ngModel\" name=\"providerUserId\" providerUserId=\"providerUserId\"/>\n\t\t</table>\t\n\t\t<div *ngIf=\"userdetails?.role==='admin'\">\n\t\t\t\t<input type=\"button\" (click) =\"viewuserdetailpage()\" class=\"w3-btn w3-blue\" value=\"Click Here to View Users\"/>\n\t\t</div>\n\t\t\n\t\t<div *ngIf=\"providerCookie!=''\">\n\t\t\t<input type=\"button\" (click) =\"logOut()\" class=\"w3-btn w3-blue\" value=\"Logout\"/>\n\t\t</div>\n\n\t\t<br/>\n\t\t\t<input type=\"button\" value=\"Click To Enable Editing\" name=\"enablebutton\" (click)=\"enableFieldEdit()\" class=\"w3-btn w3-blue\"/>\n\t\t<br/>\t\t\n\t\t<div *ngIf=\"userdetails?.flag==false\">\n\t\t\t<input [disabled]=\"detailsForm.invalid\" type=\"submit\" value=\"Save Fields\" name=\"save\" class=\"w3-btn w3-blue\"/>\n\t\t</div>\n\t\t<div *ngIf=\"userdetails?.flag==true\">\n\t\t\t<input [disabled]=\"detailsForm.invalid\" type=\"submit\" value=\"Update Fields\" name=\"update\" class=\"w3-btn w3-blue\"/>\n\t\t</div>\n\t\t<div *ngIf=\"savesuccessFlag==true\">\n\t\t\t<h3>Details Successfully Saved</h3>\n\t\t</div>\n\t</form>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/welcome/welcome.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var router_1 = __webpack_require__("../../../router/@angular/router.es5.js");
var core_1 = __webpack_require__("../../../core/@angular/core.es5.js");
var http_1 = __webpack_require__("../../../http/@angular/http.es5.js");
var ng2_cookies_1 = __webpack_require__("../../../../ng2-cookies/index.js");
var UserDetails_1 = __webpack_require__("../../../../../src/app/models/UserDetails.ts");
__webpack_require__("../../../../rxjs/Rx.js");
var WelcomeComponent = (function () {
    function WelcomeComponent(http, router) {
        var _this = this;
        this.http = http;
        this.router = router;
        this.headers = new http_1.Headers();
        this.submitted = false;
        this.isEditable = false;
        this.userdetails = new UserDetails_1.UserDetails();
        this.cookies = ng2_cookies_1.Cookie.getAll();
        this.providerCookie = this.cookies['provider_cookie'];
        this.authcookie = this.cookies['AUTH-TOKEN'];
        this.headers.set('x-auth-token', this.authcookie);
        this.options = new http_1.RequestOptions({ headers: this.headers });
        if (this.providerCookie === 'facebook') {
            this.http.get('http://localhost:8080/statelesssocial/api/facebook/details', this.options)
                .map(function (res) { return res.json(); })
                .subscribe(function (json) {
                _this.userdetails = new UserDetails_1.UserDetails().fromJSON(json);
                console.log(_this.userdetails);
            }, function (err) { console.error(err); });
        }
        if (this.providerCookie === 'linkedin') {
            this.authcookie = this.cookies['linkedin_code'];
            console.log(this.authcookie);
            this.http.get('http://localhost:8080/statelesssocial/api/linkedin/details', this.options)
                .map(function (res) { return res.json(); })
                .subscribe(function (json) {
                _this.userdetails = new UserDetails_1.UserDetails().fromJSON(json);
                console.log(_this.userdetails);
            }, function (err) { console.error(err); });
        }
        if (this.providerCookie === 'google') {
            this.http.get('http://localhost:8080/statelesssocial/api/google/details', this.options)
                .map(function (res) { return res.json(); })
                .subscribe(function (json) {
                _this.userdetails = new UserDetails_1.UserDetails().fromJSON(json);
                console.log(_this.userdetails);
            }, function (err) { console.error(err); });
        }
        if (this.providerCookie === 'github') {
            this.http.get('http://localhost:8080/statelesssocial/api/github/details', this.options)
                .map(function (res) { return res.json(); })
                .subscribe(function (json) {
                _this.userdetails = new UserDetails_1.UserDetails().fromJSON(json);
                console.log(_this.userdetails);
            }, function (err) { console.error(err); });
        }
        if (this.providerCookie === 'live') {
            this.http.get('http://localhost:8080/statelesssocial/api/live/details', this.options)
                .map(function (res) { return res.json(); })
                .subscribe(function (json) {
                _this.userdetails = new UserDetails_1.UserDetails().fromJSON(json);
                console.log(_this.userdetails);
            }, function (err) { console.error(err); });
        }
        if (this.providerCookie === 'twitter') {
            this.http.get('http://localhost:8080/statelesssocial/api/twitter/details', this.options)
                .map(function (res) { return res.json(); })
                .subscribe(function (json) {
                _this.userdetails = new UserDetails_1.UserDetails().fromJSON(json);
                console.log(_this.userdetails);
            }, function (err) { console.error(err); });
        }
        if (this.providerCookie === 'user') {
            this.http.get('http://localhost:8080/statelesssocial/api/user/details', this.options)
                .map(function (res) { return res.json(); })
                .subscribe(function (json) {
                _this.userdetails = new UserDetails_1.UserDetails().fromJSON(json);
                console.log(_this.userdetails);
            }, function (err) { console.error(err); });
        }
    }
    WelcomeComponent.prototype.onSubmit = function (data) {
        var _this = this;
        this.submitted = true;
        console.log(data);
        this.headers.set('Content-Type', 'application/json');
        this.headers.set('x-auth-token', this.authcookie);
        this.options = new http_1.RequestOptions({ headers: this.headers });
        this.http.post('http://localhost:8080/statelesssocial/api/user/saveUser', JSON.stringify(data), this.options)
            .map(function (res) { return res.json(); })
            .subscribe(function (json) {
            _this.savesuccessFlag = true;
            console.log(_this.savesuccessFlag);
        }, function (err) {
            _this.errorFlag = true;
        });
    };
    WelcomeComponent.prototype.logOut = function () {
        this.providerCookie = '';
        this.cookies = null;
        this.authcookie = null;
        this.deleteCookie('AUTH-TOKEN');
        this.deleteCookie('provider_cookie');
        this.router.navigateByUrl('/login');
    };
    WelcomeComponent.prototype.deleteCookie = function (name) {
        this.setCookie(name, '', -1, '/');
    };
    WelcomeComponent.prototype.setCookie = function (name, value, expireDays, path) {
        if (path === void 0) { path = ''; }
        var d = new Date();
        d.setTime(d.getTime() + expireDays * 24 * 60 * 60 * 1000);
        var expires = "expires=" + d.toUTCString();
        var cpath = path ? "; path=" + path : '';
        document.cookie = name + "=" + value + "; " + expires + cpath;
    };
    WelcomeComponent.prototype.getCookie = function (name) {
        var ca = document.cookie.split(';');
        var caLen = ca.length;
        var cookieName = name + "=";
        var c;
        for (var i = 0; i < caLen; i += 1) {
            c = ca[i].replace(/^\s+/g, '');
            if (c.indexOf(cookieName) == 0) {
                return c.substring(cookieName.length, c.length);
            }
        }
        return '';
    };
    WelcomeComponent.prototype.enableFieldEdit = function () {
        this.isEditable = true;
    };
    WelcomeComponent.prototype.viewuserdetailpage = function () {
        this.router.navigateByUrl('/adminPage');
    };
    return WelcomeComponent;
}());
WelcomeComponent = __decorate([
    core_1.Component({
        selector: 'profile-view',
        template: __webpack_require__("../../../../../src/app/welcome/welcome.html"),
        styles: [__webpack_require__("../../../../../src/app/welcome/welcome.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof http_1.Http !== "undefined" && http_1.Http) === "function" && _a || Object, typeof (_b = typeof router_1.Router !== "undefined" && router_1.Router) === "function" && _b || Object])
], WelcomeComponent);
exports.WelcomeComponent = WelcomeComponent;
var _a, _b;
//# sourceMappingURL=welcome.js.map

/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
Object.defineProperty(exports, "__esModule", { value: true });
exports.environment = {
    production: false
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/@angular/core.es5.js");
var platform_browser_dynamic_1 = __webpack_require__("../../../platform-browser-dynamic/@angular/platform-browser-dynamic.es5.js");
var app_module_1 = __webpack_require__("../../../../../src/app/app.module.ts");
var environment_1 = __webpack_require__("../../../../../src/environments/environment.ts");
if (environment_1.environment.production) {
    core_1.enableProdMode();
}
platform_browser_dynamic_1.platformBrowserDynamic().bootstrapModule(app_module_1.AppModule);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map