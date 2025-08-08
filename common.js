"use strict";
(self["webpackChunkvex"] = self["webpackChunkvex"] || []).push([["common"],{

/***/ 12232:
/*!**************************************************************************************************!*\
  !*** ./src/app/shared/components/reusables/select-autocomplete/select-autocomplete.component.ts ***!
  \**************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SelectAutocompleteComponent": () => (/* binding */ SelectAutocompleteComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var src_vex_animations_scale_in_out_animation__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/@vex/animations/scale-in-out.animation */ 88693);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @shared/shared.module */ 44466);
/* harmony import */ var _shared_services_icons_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @shared/services/icons.service */ 11612);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/form-field */ 44770);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/input */ 43365);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/core */ 88133);
/* harmony import */ var _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/autocomplete */ 43188);
/* harmony import */ var _visurel_iconify_angular__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @visurel/iconify-angular */ 57313);














function SelectAutocompleteComponent_mat_error_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, " Este campo es obligatorio. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
function SelectAutocompleteComponent_mat_option_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "mat-option", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const option_r3 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("value", option_r3.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](option_r3.description);
} }
class SelectAutocompleteComponent {
    constructor() {
        this.control = new _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormControl(null);
        this.label = "";
        this.placeholder = "";
        this.required = false;
        this.readonly = false;
        this.itemSelected = new _angular_core__WEBPACK_IMPORTED_MODULE_3__.EventEmitter();
        this.icClose = _shared_services_icons_service__WEBPACK_IMPORTED_MODULE_2__.IconsService.prototype.getIcon("icClose");
        this.icArrowDropDown = _shared_services_icons_service__WEBPACK_IMPORTED_MODULE_2__.IconsService.prototype.getIcon("icArrowDropDown");
    }
    ngOnChanges(changes) {
        for (let property in changes) {
            if (property === "listOptions") {
                if (changes.listOptions.previousValue !== undefined) {
                    this.optionsFilters = this.filter("", this.listOptions);
                }
                if (changes.listOptions.currentValue !== undefined) {
                    this.optionsFilters = this.filter("", this.listOptions);
                    if (changes.listOptions.currentValue.length === 0) {
                        this.control.reset();
                    }
                }
            }
        }
        this.initMode();
    }
    ngOnInit() {
        this.initMode();
    }
    filter(value, listOptions) {
        let filterValue = "";
        let optionsFiltered = [];
        if (typeof value === "string") {
            filterValue = value.toLowerCase();
        }
        if (listOptions != undefined && listOptions.length > 0) {
            optionsFiltered = listOptions.filter((option) => {
                return option.description.toLowerCase().includes(filterValue);
            });
            this.placeholder = this.label;
        }
        else {
            this.placeholder = "El listado de " + this.label + " está vacío";
        }
        return optionsFiltered;
    }
    initMode() {
        this.optionsFilters = this.listOptions;
        this.control.valueChanges.subscribe((value) => {
            if (value) {
                this.optionsFilters = this.filter(value, this.listOptions);
            }
            else {
                this.optionsFilters = this.filter("", this.listOptions);
            }
            this.checkOption(this.control.value, this.listOptions);
        });
        this.control.enable();
    }
    checkOption(value, listOptions) {
        if (listOptions) {
            let ids = listOptions.map((option) => option.id);
            let isValid = ids.includes(value);
            if (isValid) {
                this.control.reset;
            }
            else {
                if (this.required)
                    this.control.setErrors({ required: true });
            }
        }
    }
    showDropdown(id) {
        let selectValue = null;
        if (this.listOptions && id) {
            let option = this.listOptions.find((option) => option.id === id);
            selectValue = option != undefined ? option.description : null;
        }
        return selectValue;
    }
    onOptionSelected(event) {
        if (this.listOptions) {
            const selectedItem = this.listOptions.find((item) => item.id === event);
            if (selectedItem) {
                this.itemSelected.emit(selectedItem.id);
            }
        }
    }
}
SelectAutocompleteComponent.ɵfac = function SelectAutocompleteComponent_Factory(t) { return new (t || SelectAutocompleteComponent)(); };
SelectAutocompleteComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({ type: SelectAutocompleteComponent, selectors: [["app-select-autocomplete"]], inputs: { control: "control", label: "label", placeholder: "placeholder", listOptions: "listOptions", required: "required", readonly: "readonly" }, outputs: { itemSelected: "itemSelected" }, standalone: true, features: [_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵNgOnChangesFeature"], _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵStandaloneFeature"]], decls: 13, vars: 12, consts: [["appearance", "outline", 1, "w-full"], [1, "w-full", "flex", "h-5"], ["matInput", "", "autocomplete", "on", 3, "placeholder", "formControl", "matAutocomplete", "readonly", "ngModelChange"], ["type", "button", 1, "mr-4", 3, "click"], [3, "icIcon", "hidden"], [1, "text-xl", "text-am-main-blue-light", 3, "icIcon"], [4, "ngIf"], ["autoActiveFirstOption", "", 3, "displayWith"], ["optionAutocomplete", "matAutocomplete"], [3, "value", 4, "ngFor", "ngForOf"], [3, "value"]], template: function SelectAutocompleteComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "mat-form-field", 0)(1, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "div", 1)(4, "input", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngModelChange", function SelectAutocompleteComponent_Template_input_ngModelChange_4_listener($event) { return ctx.onOptionSelected($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerStart"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function SelectAutocompleteComponent_Template_button_click_6_listener() { return ctx.control.reset(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](7, "ic-icon", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](8, "ic-icon", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](9, SelectAutocompleteComponent_mat_error_9_Template, 2, 0, "mat-error", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](10, "mat-autocomplete", 7, 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](12, SelectAutocompleteComponent_mat_option_12_Template, 2, 2, "mat-option", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    } if (rf & 2) {
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵreference"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx.label);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("placeholder", ctx.placeholder)("formControl", ctx.control)("matAutocomplete", _r1)("readonly", ctx.readonly);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("@scaleInOut", undefined);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("icIcon", ctx.icClose)("hidden", ctx.readonly);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("icIcon", ctx.icArrowDropDown);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.control.hasError("required"));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("displayWith", ctx.showDropdown.bind(ctx));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx.optionsFilters);
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule, _angular_common__WEBPACK_IMPORTED_MODULE_5__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_5__.NgIf, _shared_shared_module__WEBPACK_IMPORTED_MODULE_1__.SharedModule, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__.MatError, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__.MatFormField, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__.MatLabel, _angular_material_input__WEBPACK_IMPORTED_MODULE_7__.MatInput, _angular_material_core__WEBPACK_IMPORTED_MODULE_8__.MatOption, _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_9__.MatAutocomplete, _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_9__.MatAutocompleteTrigger, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormControlDirective, _visurel_iconify_angular__WEBPACK_IMPORTED_MODULE_10__.IconDirective], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzZWxlY3QtYXV0b2NvbXBsZXRlLmNvbXBvbmVudC5zY3NzIn0= */"], data: { animation: [src_vex_animations_scale_in_out_animation__WEBPACK_IMPORTED_MODULE_0__.scaleInOutAnimation] } });


/***/ }),

/***/ 63905:
/*!**********************************************************!*\
  !*** ./src/app/shared/services/document-type.service.ts ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DocumentTypeService": () => (/* binding */ DocumentTypeService)
/* harmony export */ });
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/environments/environment */ 92340);
/* harmony import */ var _shared_apis_endpoint__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @shared/apis/endpoint */ 62376);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ 86942);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ 28784);





class DocumentTypeService {
    constructor(_http) {
        this._http = _http;
    }
    listDocumentTypes() {
        const requestUrl = `${src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.api}${_shared_apis_endpoint__WEBPACK_IMPORTED_MODULE_1__.endpoint.LIST_DOCUMENT_TYPES}`;
        return this._http.get(requestUrl).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.map)((resp) => {
            return resp.data;
        }));
    }
}
DocumentTypeService.ɵfac = function DocumentTypeService_Factory(t) { return new (t || DocumentTypeService)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_4__.HttpClient)); };
DocumentTypeService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjectable"]({ token: DocumentTypeService, factory: DocumentTypeService.ɵfac, providedIn: "root" });


/***/ }),

/***/ 85819:
/*!*************************************************************!*\
  !*** ./src/app/shared/services/warehouse-select.service.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "WarehouseSelectService": () => (/* binding */ WarehouseSelectService)
/* harmony export */ });
/* harmony import */ var _shared_apis_endpoint__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @shared/apis/endpoint */ 62376);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ 86942);
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/environments/environment */ 92340);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ 28784);





class WarehouseSelectService {
    constructor(_http) {
        this._http = _http;
    }
    listSelectWarehouses() {
        const requestUrl = `${src_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.api}${_shared_apis_endpoint__WEBPACK_IMPORTED_MODULE_0__.endpoint.LIST_SELECT_WAREHOUSES}`;
        return this._http
            .get(requestUrl)
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.map)((resp) => resp.data));
    }
}
WarehouseSelectService.ɵfac = function WarehouseSelectService_Factory(t) { return new (t || WarehouseSelectService)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_4__.HttpClient)); };
WarehouseSelectService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjectable"]({ token: WarehouseSelectService, factory: WarehouseSelectService.ɵfac, providedIn: "root" });


/***/ }),

/***/ 64033:
/*!************************************!*\
  !*** ./src/static-data/configs.ts ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "statesSelect": () => (/* binding */ statesSelect)
/* harmony export */ });
const statesSelect = [
    { value: 1, label: "Activo" },
    { value: 0, label: "Inactivo" },
];


/***/ })

}]);
//# sourceMappingURL=common.js.map