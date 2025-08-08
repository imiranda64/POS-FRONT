"use strict";
(self["webpackChunkvex"] = self["webpackChunkvex"] || []).push([["src_app_pages_auth_auth_module_ts"],{

/***/ 20794:
/*!***************************************************!*\
  !*** ./src/app/pages/auth/auth-routing.module.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AuthRoutingModule": () => (/* binding */ AuthRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _components_login_login_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/login/login.component */ 27870);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 3184);




const routes = [
    {
        path: '',
        component: _components_login_login_component__WEBPACK_IMPORTED_MODULE_0__.LoginComponent,
    }
];
class AuthRoutingModule {
}
AuthRoutingModule.ɵfac = function AuthRoutingModule_Factory(t) { return new (t || AuthRoutingModule)(); };
AuthRoutingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AuthRoutingModule });
AuthRoutingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forChild(routes), _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AuthRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule] }); })();


/***/ }),

/***/ 6621:
/*!*******************************************!*\
  !*** ./src/app/pages/auth/auth.module.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AuthModule": () => (/* binding */ AuthModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _auth_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./auth-routing.module */ 20794);
/* harmony import */ var _components_login_login_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/login/login.component */ 27870);
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @shared/shared.module */ 44466);
/* harmony import */ var _components_login_google_login_google_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/login-google/login-google.component */ 68124);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 3184);






class AuthModule {
}
AuthModule.ɵfac = function AuthModule_Factory(t) { return new (t || AuthModule)(); };
AuthModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineNgModule"]({ type: AuthModule });
AuthModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjector"]({ imports: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule,
        _auth_routing_module__WEBPACK_IMPORTED_MODULE_0__.AuthRoutingModule,
        _shared_shared_module__WEBPACK_IMPORTED_MODULE_2__.SharedModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsetNgModuleScope"](AuthModule, { declarations: [_components_login_login_component__WEBPACK_IMPORTED_MODULE_1__.LoginComponent,
        _components_login_google_login_google_component__WEBPACK_IMPORTED_MODULE_3__.LoginGoogleComponent], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule,
        _auth_routing_module__WEBPACK_IMPORTED_MODULE_0__.AuthRoutingModule,
        _shared_shared_module__WEBPACK_IMPORTED_MODULE_2__.SharedModule] }); })();


/***/ }),

/***/ 68124:
/*!******************************************************************************!*\
  !*** ./src/app/pages/auth/components/login-google/login-google.component.ts ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LoginGoogleComponent": () => (/* binding */ LoginGoogleComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/environments/environment */ 92340);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/auth.service */ 97423);






class LoginGoogleComponent {
    constructor(router, ngZone, authService) {
        this.router = router;
        this.ngZone = ngZone;
        this.authService = authService;
        this.clientId = src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.clientId;
    }
    ngOnInit() {
        window.onGoogleLibraryLoad = () => {
            google.accounts.id.initialize({
                client_id: this.clientId,
                callback: this.handleCredentialResponse.bind(this),
                auto_select: false,
                cancel_on_tap_outside: false,
            });
            google.accounts.id.renderButton(document.getElementById("buttonGoogle"), {
                theme: "filled_blue",
                type: "standard",
                size: "large",
                text: "continue_with",
                shape: "square",
                auto_select: "true",
                width: 300,
            });
            google.accounts.id.prompt((notification) => { });
        };
    }
    handleCredentialResponse(response) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__awaiter)(this, void 0, void 0, function* () {
            yield this.authService
                .loginWithGoogle(response.credential, "Externo")
                .subscribe((resp) => {
                if (resp.isSuccess) {
                    this.ngZone.run(() => {
                        this.router.navigate(["/"]);
                    });
                }
            }, (error) => {
                console.log(error);
            });
        });
    }
}
LoginGoogleComponent.ɵfac = function LoginGoogleComponent_Factory(t) { return new (t || LoginGoogleComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgZone), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_services_auth_service__WEBPACK_IMPORTED_MODULE_1__.AuthService)); };
LoginGoogleComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({ type: LoginGoogleComponent, selectors: [["app-login-google"]], decls: 2, vars: 0, consts: [[1, "flex", "justify-center", "items-center", "w-full"], ["id", "buttonGoogle"]], template: function LoginGoogleComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJsb2dpbi1nb29nbGUuY29tcG9uZW50LnNjc3MifQ== */"] });


/***/ }),

/***/ 27870:
/*!****************************************************************!*\
  !*** ./src/app/pages/auth/components/login/login.component.ts ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LoginComponent": () => (/* binding */ LoginComponent)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var _shared_services_icons_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @shared/services/icons.service */ 11612);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/auth.service */ 97423);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/icon */ 65590);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/button */ 87317);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/form-field */ 44770);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/input */ 43365);
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/tooltip */ 40089);
/* harmony import */ var _visurel_iconify_angular__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @visurel/iconify-angular */ 57313);
/* harmony import */ var _login_google_login_google_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../login-google/login-google.component */ 68124);















function LoginComponent_mat_error_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, " Campo email es requerido. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
function LoginComponent_mat_error_20_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, " Campo contrase\u00F1a es requerido. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
function LoginComponent_mat_icon_22_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "mat-icon", 12);
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("icIcon", ctx_r2.icVisibility);
} }
function LoginComponent_mat_icon_23_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "mat-icon", 12);
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("icIcon", ctx_r3.icVisibilityOff);
} }
class LoginComponent {
    constructor(fb, authService, router, cd) {
        this.fb = fb;
        this.authService = authService;
        this.router = router;
        this.cd = cd;
        this.inputType = "password";
        this.visible = false;
        this.icVisibility = _shared_services_icons_service__WEBPACK_IMPORTED_MODULE_0__.IconsService.prototype.getIcon("icVisibility");
        this.icVisibilityOff = _shared_services_icons_service__WEBPACK_IMPORTED_MODULE_0__.IconsService.prototype.getIcon("icVisibilityOff");
    }
    initForm() {
        this.form = this.fb.group({
            email: ["cajero@gmail.com", [_angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required]],
            password: ["cajero123", [_angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required]],
        });
    }
    ngOnInit() {
        this.initForm();
    }
    login() {
        if (this.form.invalid) {
            return Object.values(this.form.controls).forEach((controls) => {
                controls.markAllAsTouched();
            });
        }
        this.authService.login(this.form.value, "Interno").subscribe((resp) => {
            if (resp.isSuccess) {
                this.router.navigate(["/"]);
            }
        });
    }
    toggleVisibility() {
        if (this.visible) {
            this.inputType = "password";
            this.visible = false;
            this.cd.markForCheck();
        }
        else {
            this.inputType = "text";
            this.visible = true;
            this.cd.markForCheck();
        }
    }
}
LoginComponent.ɵfac = function LoginComponent_Factory(t) { return new (t || LoginComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_services_auth_service__WEBPACK_IMPORTED_MODULE_1__.AuthService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_3__.ChangeDetectorRef)); };
LoginComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({ type: LoginComponent, selectors: [["vex-login"]], decls: 26, vars: 7, consts: [[1, "w-full", "h-full", "login-fondo"], [1, "login"], [1, "avatar"], ["src", "assets/img/demo/landscape.jpg"], [1, "login-form", 3, "formGroup", "ngSubmit"], ["appearance", "outline", 1, "textbox"], ["matInput", "", "formControlName", "email"], [4, "ngIf"], ["matInput", "", "formControlName", "password", 3, "type"], ["mat-icon-button", "", "matSuffix", "", "type", "button", 3, "matTooltip", "click"], [3, "icIcon", 4, "ngIf"], ["type", "submit", "color", "primary", "mat-raised-button", ""], [3, "icIcon"]], template: function LoginComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](3, "img", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](5, "Iniciar Sesi\u00F3n");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](7, "Bienvenid@ a tu sistema de ventas");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](8, "app-login-google")(9, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](10, "form", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngSubmit", function LoginComponent_Template_form_ngSubmit_10_listener() { return ctx.login(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](11, "mat-form-field", 5)(12, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](13, "Usuario");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](14, "input", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](15, LoginComponent_mat_error_15_Template, 2, 0, "mat-error", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](16, "mat-form-field", 5)(17, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](18, "Contrase\u00F1a");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](19, "input", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](20, LoginComponent_mat_error_20_Template, 2, 0, "mat-error", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](21, "button", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function LoginComponent_Template_button_click_21_listener() { return ctx.toggleVisibility(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](22, LoginComponent_mat_icon_22_Template, 1, 1, "mat-icon", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](23, LoginComponent_mat_icon_23_Template, 1, 1, "mat-icon", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](24, "button", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](25, " Iniciar Sesi\u00F3n ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("formGroup", ctx.form);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.form.get("email").hasError("required"));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("type", ctx.inputType);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.form.get("password").hasError("required"));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpropertyInterpolate"]("matTooltip", !ctx.visible ? "Ver contrase\u00F1a" : "Ocultar contrase\u00F1a");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.visible);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", !ctx.visible);
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_6__.NgIf, _angular_material_icon__WEBPACK_IMPORTED_MODULE_7__.MatIcon, _angular_material_button__WEBPACK_IMPORTED_MODULE_8__.MatButton, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__.MatError, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__.MatFormField, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__.MatLabel, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__.MatSuffix, _angular_material_input__WEBPACK_IMPORTED_MODULE_10__.MatInput, _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_11__.MatTooltip, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormControlName, _visurel_iconify_angular__WEBPACK_IMPORTED_MODULE_12__.IconDirective, _login_google_login_google_component__WEBPACK_IMPORTED_MODULE_2__.LoginGoogleComponent], styles: ["@keyframes gradient {\n  100% {\n    background-size: 4000px 1000px;\n  }\n}\n\n.login-fondo[_ngcontent-%COMP%] {\n  display: grid;\n  place-items: center;\n  margin: 0;\n  padding: 0 24px;\n  background-image: url('Wave.svg');\n  background-size: 2000px 1000px;\n  background-position: -500px 0;\n  color: #f9f9f9;\n  font-family: \"Euclid Circular A\";\n  animation: gradient 10s infinite alternate linear;\n}\n\n@media (min-width: 500px) {\n  body[_ngcontent-%COMP%] {\n    padding: 0;\n  }\n}\n\n.login[_ngcontent-%COMP%] {\n  position: fixed;\n  z-index: 3;\n  top: 50%;\n  left: 50%;\n  translate: -50% -50%;\n  width: 90%;\n  padding: 70px 30px 44px;\n  border-radius: 15px;\n  background: white;\n  text-align: center;\n  box-shadow: 0px 0px 10px 5px rgba(0, 0, 0, 0.1);\n}\n\n@media (min-width: 450px) {\n  .login[_ngcontent-%COMP%] {\n    width: 380px;\n  }\n}\n\n.avatar[_ngcontent-%COMP%] {\n  margin: 0 auto 16px;\n  border-radius: 50%;\n  background: linear-gradient(-45deg, #157ae1, #c7a1ff);\n  padding: 2px;\n  width: 120px;\n  height: 120px;\n}\n\n.avatar[_ngcontent-%COMP%]    > img[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n  border-radius: 50%;\n  border: 4px solid white;\n}\n\n.login[_ngcontent-%COMP%]    > h2[_ngcontent-%COMP%] {\n  color: #222222;\n  font-size: 36px;\n  font-weight: 500;\n  margin: 0 0 4px;\n}\n\n.login[_ngcontent-%COMP%]    > h3[_ngcontent-%COMP%] {\n  color: #545454;\n  margin: 0 0 30px;\n  font-weight: 500;\n  font-size: 16px;\n}\n\n.login-form[_ngcontent-%COMP%] {\n  display: grid;\n  gap: 16px;\n  place-items: center;\n  width: 100%;\n  margin: 0;\n}\n\n.textbox[_ngcontent-%COMP%] {\n  width: 100%;\n  position: relative;\n  color: #222222;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxvZ2luLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBO0VBQ0U7SUFDRSw4QkFBQTtFQUFGO0FBQ0Y7O0FBR0E7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxTQUFBO0VBQ0EsZUFBQTtFQUNBLGlDQUFBO0VBQ0EsOEJBQUE7RUFDQSw2QkFBQTtFQUNBLGNBQUE7RUFDQSxnQ0FBQTtFQUNBLGlEQUFBO0FBREY7O0FBSUE7RUFDRTtJQUNFLFVBQUE7RUFERjtBQUNGOztBQUlBO0VBQ0UsZUFBQTtFQUNBLFVBQUE7RUFDQSxRQUFBO0VBQ0EsU0FBQTtFQUNBLG9CQUFBO0VBQ0EsVUFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EsK0NBQUE7QUFGRjs7QUFLQTtFQUNFO0lBQ0UsWUFBQTtFQUZGO0FBQ0Y7O0FBS0E7RUFDRSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0EscURBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7QUFIRjs7QUFNQTtFQUNFLFdBQUE7RUFDQSxZQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtFQUVBLHVCQUFBO0FBSkY7O0FBT0E7RUFDRSxjQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtBQUpGOztBQU9BO0VBQ0UsY0FBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0FBSkY7O0FBT0E7RUFDRSxhQUFBO0VBQ0EsU0FBQTtFQUNBLG1CQUFBO0VBQ0EsV0FBQTtFQUNBLFNBQUE7QUFKRjs7QUFPQTtFQUNFLFdBQUE7RUFDQSxrQkFBQTtFQUNBLGNBQUE7QUFKRiIsImZpbGUiOiJsb2dpbi5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi8vYmdqYXIuY29tL3dhdmVcclxuQGtleWZyYW1lcyBncmFkaWVudCB7XHJcbiAgMTAwJSB7XHJcbiAgICBiYWNrZ3JvdW5kLXNpemU6IDQwMDBweCAxMDAwcHg7XHJcbiAgfVxyXG59XHJcblxyXG4ubG9naW4tZm9uZG8ge1xyXG4gIGRpc3BsYXk6IGdyaWQ7XHJcbiAgcGxhY2UtaXRlbXM6IGNlbnRlcjtcclxuICBtYXJnaW46IDA7XHJcbiAgcGFkZGluZzogMCAyNHB4O1xyXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIi4uLy4uLy4uLy4uLy4uL2Fzc2V0cy9pbWcvZGVtby9XYXZlLnN2Z1wiKTtcclxuICBiYWNrZ3JvdW5kLXNpemU6IDIwMDBweCAxMDAwcHg7XHJcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogLTUwMHB4IDA7XHJcbiAgY29sb3I6ICNmOWY5Zjk7XHJcbiAgZm9udC1mYW1pbHk6IFwiRXVjbGlkIENpcmN1bGFyIEFcIjtcclxuICBhbmltYXRpb246IGdyYWRpZW50IDEwcyBpbmZpbml0ZSBhbHRlcm5hdGUgbGluZWFyO1xyXG59XHJcblxyXG5AbWVkaWEgKHdpZHRoID49IDUwMHB4KSB7XHJcbiAgYm9keSB7XHJcbiAgICBwYWRkaW5nOiAwO1xyXG4gIH1cclxufVxyXG5cclxuLmxvZ2luIHtcclxuICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgei1pbmRleDogMztcclxuICB0b3A6IDUwJTtcclxuICBsZWZ0OiA1MCU7XHJcbiAgdHJhbnNsYXRlOiAtNTAlIC01MCU7XHJcbiAgd2lkdGg6IDkwJTtcclxuICBwYWRkaW5nOiA3MHB4IDMwcHggNDRweDtcclxuICBib3JkZXItcmFkaXVzOiAxNXB4O1xyXG4gIGJhY2tncm91bmQ6IHdoaXRlO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBib3gtc2hhZG93OiAwcHggMHB4IDEwcHggNXB4IHJnYmEoMCwgMCwgMCwgMC4xKTtcclxufVxyXG5cclxuQG1lZGlhICh3aWR0aCA+PSA0NTBweCkge1xyXG4gIC5sb2dpbiB7XHJcbiAgICB3aWR0aDogMzgwcHg7XHJcbiAgfVxyXG59XHJcblxyXG4uYXZhdGFyIHtcclxuICBtYXJnaW46IDAgYXV0byAxNnB4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoLTQ1ZGVnLCAjMTU3YWUxLCAjYzdhMWZmKTtcclxuICBwYWRkaW5nOiAycHg7XHJcbiAgd2lkdGg6IDEyMHB4O1xyXG4gIGhlaWdodDogMTIwcHg7XHJcbn1cclxuXHJcbi5hdmF0YXIgPiBpbWcge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogMTAwJTtcclxuICBvYmplY3QtZml0OiBjb3ZlcjtcclxuICBib3JkZXItcmFkaXVzOiA1MCU7XHJcblxyXG4gIGJvcmRlcjogNHB4IHNvbGlkIHdoaXRlO1xyXG59XHJcblxyXG4ubG9naW4gPiBoMiB7XHJcbiAgY29sb3I6ICMyMjIyMjI7XHJcbiAgZm9udC1zaXplOiAzNnB4O1xyXG4gIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgbWFyZ2luOiAwIDAgNHB4O1xyXG59XHJcblxyXG4ubG9naW4gPiBoMyB7XHJcbiAgY29sb3I6ICM1NDU0NTQ7XHJcbiAgbWFyZ2luOiAwIDAgMzBweDtcclxuICBmb250LXdlaWdodDogNTAwO1xyXG4gIGZvbnQtc2l6ZTogMTZweDtcclxufVxyXG5cclxuLmxvZ2luLWZvcm0ge1xyXG4gIGRpc3BsYXk6IGdyaWQ7XHJcbiAgZ2FwOiAxNnB4O1xyXG4gIHBsYWNlLWl0ZW1zOiBjZW50ZXI7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgbWFyZ2luOiAwO1xyXG59XHJcblxyXG4udGV4dGJveCB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIGNvbG9yOiAjMjIyMjIyO1xyXG59XHJcbiJdfQ== */"] });


/***/ })

}]);
//# sourceMappingURL=src_app_pages_auth_auth_module_ts.js.map