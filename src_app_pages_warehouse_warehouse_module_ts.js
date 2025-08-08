"use strict";
(self["webpackChunkvex"] = self["webpackChunkvex"] || []).push([["src_app_pages_warehouse_warehouse_module_ts"],{

/***/ 9664:
/*!************************************************************************************!*\
  !*** ./src/app/pages/warehouse/components/warehouse-list/warehouse-list-config.ts ***!
  \************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "componentSettings": () => (/* binding */ componentSettings)
/* harmony export */ });
/* harmony import */ var _shared_services_icons_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @shared/services/icons.service */ 11612);
/* harmony import */ var _shared_validators_generic_validators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @shared/validators/generic-validators */ 28222);


const searchOptions = [
    {
        label: "Nombre",
        value: 1,
        placeholder: "Buscar por Nombre",
        validation: [_shared_validators_generic_validators__WEBPACK_IMPORTED_MODULE_1__.GenericValidators.defaultName],
        validation_desc: "Sólo se permite letras en esta búsqueda.",
        icon: "icName",
    },
];
const menuItems = [
    {
        type: "link",
        id: "all",
        icon: _shared_services_icons_service__WEBPACK_IMPORTED_MODULE_0__.IconsService.prototype.getIcon("icViewHeadline"),
        label: "Todos",
    },
    {
        type: "link",
        id: "Activo",
        value: 1,
        icon: _shared_services_icons_service__WEBPACK_IMPORTED_MODULE_0__.IconsService.prototype.getIcon("icLabel"),
        label: "Activo",
        class: {
            icon: "text-green",
        },
    },
    {
        type: "link",
        id: "Inactivo",
        value: 0,
        icon: _shared_services_icons_service__WEBPACK_IMPORTED_MODULE_0__.IconsService.prototype.getIcon("icLabel"),
        label: "Inactivo",
        class: {
            icon: "text-gray",
        },
    },
];
const tableColumns = [
    {
        label: "NOMBRE",
        cssLabel: ["font-bold", "text-sm"],
        property: "name",
        cssProperty: ["font-semibold", "text-sm", "text-left"],
        type: "text",
        sticky: true,
        sort: true,
        sortProperty: "name",
        visible: true,
        download: true,
    },
    {
        label: "F. DE CREACIÓN",
        cssLabel: ["font-bold", "text-sm"],
        property: "auditCreateDate",
        cssProperty: ["font-semibold", "text-sm", "text-left"],
        type: "datetime",
        sticky: false,
        sort: true,
        visible: true,
        download: true,
    },
    {
        label: "ESTADO",
        cssLabel: ["font-bold", "text-sm"],
        property: "stateWarehouse",
        cssProperty: ["font-semibold", "text-sm", "text-left"],
        type: "badge",
        sticky: false,
        sort: false,
        visible: true,
        download: true,
    },
    {
        label: "",
        cssLabel: [],
        property: "icEdit",
        cssProperty: [],
        type: "icon",
        action: "edit",
        sticky: false,
        sort: false,
        visible: true,
        download: false,
    },
    {
        label: "",
        cssLabel: [],
        property: "icDelete",
        cssProperty: [],
        type: "icon",
        action: "remove",
        sticky: false,
        sort: false,
        visible: true,
        download: false,
    },
];
const filters = {
    numFilter: 0,
    textFilter: "",
    stateFilter: null,
    startDate: "",
    endDate: "",
    refresh: false,
};
const resetFilters = {
    numFilter: 0,
    textFilter: "",
    stateFilter: null,
    startDate: "",
    endDate: "",
    refresh: false,
};
const getInputs = "";
const componentSettings = {
    icWarehouse: _shared_services_icons_service__WEBPACK_IMPORTED_MODULE_0__.IconsService.prototype.getIcon("icWarehouse"),
    searchOptions,
    menuItems,
    tableColumns,
    initialSort: "Id",
    initialSortDir: "desc",
    filters,
    resetFilters,
    getInputs,
    filename: "listado-de-almacenes",
};


/***/ }),

/***/ 77405:
/*!***************************************************************************************!*\
  !*** ./src/app/pages/warehouse/components/warehouse-list/warehouse-list.component.ts ***!
  \***************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "WarehouseListComponent": () => (/* binding */ WarehouseListComponent)
/* harmony export */ });
/* harmony import */ var src_vex_animations_fade_in_right_animation__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/@vex/animations/fade-in-right.animation */ 16496);
/* harmony import */ var src_vex_animations_scale_in_animation__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/@vex/animations/scale-in.animation */ 49597);
/* harmony import */ var src_vex_animations_stagger_animation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/@vex/animations/stagger.animation */ 48535);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/dialog */ 95758);
/* harmony import */ var _warehouse_list_config__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./warehouse-list-config */ 9664);
/* harmony import */ var _warehouse_manage_warehouse_manage_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../warehouse-manage/warehouse-manage.component */ 83657);
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! sweetalert2 */ 60598);
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _shared_services_custom_title_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @shared/services/custom-title.service */ 31421);
/* harmony import */ var _services_warehouse_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../services/warehouse.service */ 61312);
/* harmony import */ var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/sidenav */ 7216);
/* harmony import */ var _visurel_iconify_angular__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @visurel/iconify-angular */ 57313);
/* harmony import */ var _shared_components_reusables_list_table_list_table_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../shared/components/reusables/list-table/list-table.component */ 26724);
/* harmony import */ var _shared_components_reusables_search_box_multiple_search_box_multiple_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../shared/components/reusables/search-box-multiple/search-box-multiple.component */ 3343);
/* harmony import */ var _shared_components_reusables_menu_menu_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../../shared/components/reusables/menu/menu.component */ 57638);
/* harmony import */ var _shared_components_reusables_export_excel_export_excel_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../../shared/components/reusables/export-excel/export-excel.component */ 39559);
/* harmony import */ var _shared_components_reusables_filter_date_range_ymd_filter_date_range_ymd_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../../shared/components/reusables/filter-date-range-ymd/filter-date-range-ymd.component */ 60518);
/* harmony import */ var _shared_components_reusables_button_reset_filters_button_reset_filters_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../../../shared/components/reusables/button-reset-filters/button-reset-filters.component */ 93495);



















class WarehouseListComponent {
    constructor(customTitle, _warehouseService, _dialog) {
        this._warehouseService = _warehouseService;
        this._dialog = _dialog;
        customTitle.set("Almacenes");
    }
    ngOnInit() {
        this.component = _warehouse_list_config__WEBPACK_IMPORTED_MODULE_3__.componentSettings;
    }
    setMenu(value) {
        this.component.filters.stateFilter = value;
        this.formatGetInputs();
    }
    search(data) {
        this.component.filters.numFilter = data.searchValue;
        this.component.filters.textFilter = data.searchData;
        this.formatGetInputs();
    }
    searchDateRange(date) {
        this.component.filters.startDate = date.startDate;
        this.component.filters.endDate = date.endDate;
        this.formatGetInputs();
    }
    resetFilters() {
        this.component.filters = Object.assign({}, this.component.resetFilters);
        this.formatGetInputs();
    }
    formatGetInputs() {
        let str = "";
        if (this.component.filters.textFilter != null) {
            str += `&numFilter=${this.component.filters.numFilter}&textFilter=${this.component.filters.textFilter}`;
        }
        if (this.component.filters.stateFilter != null) {
            str += `&stateFilter=${this.component.filters.stateFilter}`;
        }
        if (this.component.filters.startDate != "" &&
            this.component.filters.endDate != "") {
            str += `&startDate=${this.component.filters.startDate}`;
            str += `&endDate=${this.component.filters.endDate}`;
        }
        if (this.component.filters.refresh) {
            let random = Math.random();
            str += `&refresh=${random}`;
            this.component.filters.refresh = false;
        }
        this.component.getInputs = str;
    }
    setGetInputsWarehouses(refresh) {
        this.component.filters.refresh = refresh;
        this.formatGetInputs();
    }
    get getDownloadUrl() {
        return `Warehouse?Download=True`;
    }
    rowClick(rowClick) {
        let action = rowClick.action;
        let warehouse = rowClick.row;
        switch (action) {
            case "edit":
                this.warehouseEdit(warehouse);
                break;
            case "remove":
                this.warehouseRemove(warehouse);
                break;
        }
        return false;
    }
    openDialogRegister() {
        this._dialog
            .open(_warehouse_manage_warehouse_manage_component__WEBPACK_IMPORTED_MODULE_4__.WarehouseManageComponent, {
            disableClose: true,
            width: "400px",
            data: { mode: "register" },
        })
            .afterClosed()
            .subscribe((resp) => {
            if (resp) {
                this.setGetInputsWarehouses(true);
            }
        });
    }
    warehouseEdit(warehouseData) {
        const dialogConfif = new _angular_material_dialog__WEBPACK_IMPORTED_MODULE_14__.MatDialogConfig();
        dialogConfif.data = warehouseData;
        this._dialog
            .open(_warehouse_manage_warehouse_manage_component__WEBPACK_IMPORTED_MODULE_4__.WarehouseManageComponent, {
            disableClose: true,
            width: "400px",
            data: { dialogConfif, mode: "edit" },
        })
            .afterClosed()
            .subscribe((resp) => {
            if (resp) {
                this.setGetInputsWarehouses(true);
            }
        });
    }
    warehouseRemove(warehouseData) {
        sweetalert2__WEBPACK_IMPORTED_MODULE_5___default().fire({
            title: `¿Realmente deseas eliminar el almacén ${warehouseData.name}?`,
            text: "Se borrará de forma permanente!",
            icon: "warning",
            showCancelButton: true,
            focusCancel: true,
            confirmButtonColor: "rgb(210, 155, 253)",
            cancelButtonColor: "rgb(79, 109, 253)",
            confirmButtonText: "Sí, eliminar",
            cancelButtonText: "Cancelar",
            width: 430,
        }).then((result) => {
            if (result.isConfirmed) {
                this._warehouseService
                    .warehouseRemove(warehouseData.warehouseId)
                    .subscribe(() => this.setGetInputsWarehouses(true));
            }
        });
    }
}
WarehouseListComponent.ɵfac = function WarehouseListComponent_Factory(t) { return new (t || WarehouseListComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵdirectiveInject"](_shared_services_custom_title_service__WEBPACK_IMPORTED_MODULE_6__.CustomTitleService), _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵdirectiveInject"](_services_warehouse_service__WEBPACK_IMPORTED_MODULE_7__.WarehouseService), _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_14__.MatDialog)); };
WarehouseListComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵdefineComponent"]({ type: WarehouseListComponent, selectors: [["vex-warehouse-list"]], decls: 21, vars: 18, consts: [[1, "w-full", "h-full", "flex", "flex-col"], [1, "px-gutter", "pt-1", "pb-20", "bg-primary", "flex-none"], [1, "flex", "items-center", "justify-between"], [1, "headline", "text-primary-contrast", "m-0", "flex", "items-center", "w-full", "max-w-xxxl", "mr-6"], [1, "hidden", "sm:block", 3, "icon"], [1, "ml-4", "block"], [1, "flex", "items-center", "justify-end", "w-full", "mt-5"], [1, "flex", "justify-between"], [3, "start", "end", "rangeDate"], [3, "buttonClick"], [1, "flex", "justify-between", "ml-6"], [3, "searchOptions", "currentValue", "search"], [3, "url", "getInputs", "filename"], [1, "-mt-14", "pt-0", "overflow-hidden", "flex"], [1, "bg-transparent", "flex-auto", "flex"], [1, "p-gutter", "pt-0", "flex-auto", "flex", "items-start"], ["buttonLabel", "AGREGAR", 1, "hidden", "sm:block", "mr-6", 3, "currentMenu", "items", "buttonShow", "filterChange", "buttonClick"], [1, "card", "h-full", "overflow-hidden", "flex-auto"], [3, "service", "columns", "sortBy", "sortDir", "getInputs", "rowClick"]], template: function WarehouseListComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "h2", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](4, "ic-icon", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](5, "span", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](6, "Gesti\u00F3n de Almacenes");
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](7, "div", 6)(8, "div", 7)(9, "app-filter-date-range-ymd", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵlistener"]("rangeDate", function WarehouseListComponent_Template_app_filter_date_range_ymd_rangeDate_9_listener($event) { return ctx.searchDateRange($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](10, "app-button-reset-filters", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵlistener"]("buttonClick", function WarehouseListComponent_Template_app_button_reset_filters_buttonClick_10_listener() { return ctx.resetFilters(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](11, "div", 10)(12, "app-search-box-multiple", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵlistener"]("search", function WarehouseListComponent_Template_app_search_box_multiple_search_12_listener($event) { return ctx.search($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](13, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](14, "app-export-excel", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](15, "div", 13)(16, "mat-drawer-container", 14)(17, "mat-drawer-content", 15)(18, "app-menu", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵlistener"]("filterChange", function WarehouseListComponent_Template_app_menu_filterChange_18_listener($event) { return ctx.setMenu($event); })("buttonClick", function WarehouseListComponent_Template_app_menu_buttonClick_18_listener() { return ctx.openDialogRegister(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](19, "div", 17)(20, "app-list-table", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵlistener"]("rowClick", function WarehouseListComponent_Template_app_list_table_rowClick_20_listener($event) { return ctx.rowClick($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()()()()()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("@scaleIn", undefined)("icon", ctx.component.icWarehouse);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("@fadeInRight", undefined);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("start", ctx.component.filters.startDate)("end", ctx.component.filters.endDate);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("searchOptions", ctx.component.searchOptions)("currentValue", ctx.component.filters.textFilter);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("url", ctx.getDownloadUrl)("getInputs", ctx.component.getInputs)("filename", ctx.component.filename);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("currentMenu", ctx.component.getInputs.stateFilter)("items", ctx.component.menuItems)("buttonShow", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("service", ctx._warehouseService)("columns", ctx.component.tableColumns)("sortBy", ctx.component.initialSort)("sortDir", ctx.component.initialSortDir)("getInputs", ctx.component.getInputs);
    } }, dependencies: [_angular_material_sidenav__WEBPACK_IMPORTED_MODULE_16__.MatDrawerContainer, _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_16__.MatDrawerContent, _visurel_iconify_angular__WEBPACK_IMPORTED_MODULE_17__.IconDirective, _shared_components_reusables_list_table_list_table_component__WEBPACK_IMPORTED_MODULE_8__.ListTableComponent, _shared_components_reusables_search_box_multiple_search_box_multiple_component__WEBPACK_IMPORTED_MODULE_9__.SearchBoxMultipleComponent, _shared_components_reusables_menu_menu_component__WEBPACK_IMPORTED_MODULE_10__.MenuComponent, _shared_components_reusables_export_excel_export_excel_component__WEBPACK_IMPORTED_MODULE_11__.ExportExcelComponent, _shared_components_reusables_filter_date_range_ymd_filter_date_range_ymd_component__WEBPACK_IMPORTED_MODULE_12__.FilterDateRangeYmdComponent, _shared_components_reusables_button_reset_filters_button_reset_filters_component__WEBPACK_IMPORTED_MODULE_13__.ButtonResetFiltersComponent], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ3YXJlaG91c2UtbGlzdC5jb21wb25lbnQuc2NzcyJ9 */"], data: { animation: [src_vex_animations_stagger_animation__WEBPACK_IMPORTED_MODULE_2__.stagger40ms, src_vex_animations_scale_in_animation__WEBPACK_IMPORTED_MODULE_1__.scaleIn400ms, src_vex_animations_fade_in_right_animation__WEBPACK_IMPORTED_MODULE_0__.fadeInRight400ms] } });


/***/ }),

/***/ 83657:
/*!*******************************************************************************************!*\
  !*** ./src/app/pages/warehouse/components/warehouse-manage/warehouse-manage.component.ts ***!
  \*******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "WarehouseManageComponent": () => (/* binding */ WarehouseManageComponent)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/dialog */ 95758);
/* harmony import */ var _shared_services_icons_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @shared/services/icons.service */ 11612);
/* harmony import */ var src_static_data_configs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/static-data/configs */ 64033);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _shared_services_alert_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @shared/services/alert.service */ 40704);
/* harmony import */ var _services_warehouse_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/warehouse.service */ 61312);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/icon */ 65590);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/button */ 87317);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/form-field */ 44770);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/input */ 43365);
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/select */ 91434);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/core */ 88133);
/* harmony import */ var _visurel_iconify_angular__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @visurel/iconify-angular */ 57313);

















function WarehouseManageComponent_mat_error_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, " Campo Nombre es requerido. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} }
function WarehouseManageComponent_mat_option_17_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "mat-option", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const state_r3 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("value", state_r3.value);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", state_r3.label, " ");
} }
function WarehouseManageComponent_mat_error_18_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, " Campo Estado es requerido. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} }
class WarehouseManageComponent {
    constructor(data, _fb, _alert, _warehouseService, _dialogRef) {
        this.data = data;
        this._fb = _fb;
        this._alert = _alert;
        this._warehouseService = _warehouseService;
        this._dialogRef = _dialogRef;
        this.icClose = _shared_services_icons_service__WEBPACK_IMPORTED_MODULE_0__.IconsService.prototype.getIcon("icClose");
        this.configs = src_static_data_configs__WEBPACK_IMPORTED_MODULE_1__.statesSelect;
        this.initForm();
    }
    initForm() {
        this.form = this._fb.group({
            warehouseId: [0, [_angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required]],
            name: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required]],
            state: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required]],
        });
    }
    ngOnInit() {
        if (this.data.mode == "edit") {
            this.warehouseById(this.data.dialogConfif.data.warehouseId);
        }
    }
    warehouseById(warehouseId) {
        this._warehouseService.warehouseById(warehouseId).subscribe((resp) => {
            this.form.reset({
                warehouseId: resp.warehouseId,
                name: resp.name,
                state: resp.state,
            });
        });
    }
    warehouseSave() {
        if (this.form.invalid) {
            return Object.values(this.form.controls).forEach((controls) => {
                controls.markAllAsTouched();
            });
        }
        const warehouseId = this.form.get("warehouseId").value;
        if (warehouseId > 0) {
            this.warehouseEdit(warehouseId);
        }
        else {
            this.warehouseRegister();
        }
    }
    warehouseRegister() {
        this._warehouseService
            .warehouseRegister(this.form.value)
            .subscribe((resp) => {
            if (resp.isSuccess) {
                this._alert.success("Excelente", resp.message);
                this._dialogRef.close(true);
            }
            else {
                this._alert.warn("Atención", resp.message);
            }
        });
    }
    warehouseEdit(warehouseId) {
        this._warehouseService
            .warehouseEdit(warehouseId, this.form.value)
            .subscribe((resp) => {
            if (resp.isSuccess) {
                this._alert.success("Excelente", resp.message);
                this._dialogRef.close(true);
            }
            else {
                this._alert.warn("Atención", resp.message);
            }
        });
    }
}
WarehouseManageComponent.ɵfac = function WarehouseManageComponent_Factory(t) { return new (t || WarehouseManageComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__.MAT_DIALOG_DATA), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_shared_services_alert_service__WEBPACK_IMPORTED_MODULE_2__.AlertService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_services_warehouse_service__WEBPACK_IMPORTED_MODULE_3__.WarehouseService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__.MatDialogRef)); };
WarehouseManageComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({ type: WarehouseManageComponent, selectors: [["vex-warehouse-manage"]], decls: 24, vars: 7, consts: [[3, "formGroup", "ngSubmit"], ["mat-dialog-title", "", 1, "flex", "justify-between"], [1, "headline", "m-0", "text-xl", "text-accent"], ["mat-dialog-close", "", "mat-icon-button", "", 1, "text-secondary"], [3, "icIcon"], ["appearance", "outline", 1, "w-full"], ["matInput", "", "formControlName", "name"], [4, "ngIf"], ["formControlName", "state"], [3, "value", 4, "ngFor", "ngForOf"], ["align", "end"], ["mat-button", "", "mat-dialog-close", ""], ["color", "purple", "mat-button", "", "type", "submit", 1, "bg-accent", "text-accent-contrast", 3, "disabled"], [3, "value"]], template: function WarehouseManageComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "form", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("ngSubmit", function WarehouseManageComponent_Template_form_ngSubmit_0_listener() { return ctx.warehouseSave(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "div", 1)(2, "h2", 2)(3, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](5, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](6, "mat-icon", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](7, "mat-dialog-content")(8, "mat-form-field", 5)(9, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](10, "Nombre");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](11, "input", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](12, WarehouseManageComponent_mat_error_12_Template, 2, 0, "mat-error", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](13, "mat-form-field", 5)(14, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](15, "Estado");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](16, "mat-select", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](17, WarehouseManageComponent_mat_option_17_Template, 2, 2, "mat-option", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](18, WarehouseManageComponent_mat_error_18_Template, 2, 0, "mat-error", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](19, "mat-dialog-actions", 10)(20, "button", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](21, "CANCELAR");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](22, "button", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](23, " GUARDAR ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("formGroup", ctx.form);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx.data.mode == "register" ? "Registrar Nuevo Almac\u00E9n" : "Actualizar Almac\u00E9n");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("icIcon", ctx.icClose);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.form.get("name").hasError("required"));
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", ctx.configs);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.form.get("state").hasError("required"));
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("disabled", ctx.form.invalid);
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_7__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_7__.NgIf, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__.MatDialogClose, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__.MatDialogTitle, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__.MatDialogContent, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__.MatDialogActions, _angular_material_icon__WEBPACK_IMPORTED_MODULE_8__.MatIcon, _angular_material_button__WEBPACK_IMPORTED_MODULE_9__.MatButton, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_10__.MatError, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_10__.MatFormField, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_10__.MatLabel, _angular_material_input__WEBPACK_IMPORTED_MODULE_11__.MatInput, _angular_material_select__WEBPACK_IMPORTED_MODULE_12__.MatSelect, _angular_material_core__WEBPACK_IMPORTED_MODULE_13__.MatOption, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormControlName, _visurel_iconify_angular__WEBPACK_IMPORTED_MODULE_14__.IconDirective], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ3YXJlaG91c2UtbWFuYWdlLmNvbXBvbmVudC5zY3NzIn0= */"] });


/***/ }),

/***/ 61312:
/*!***************************************************************!*\
  !*** ./src/app/pages/warehouse/services/warehouse.service.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "WarehouseService": () => (/* binding */ WarehouseService)
/* harmony export */ });
/* harmony import */ var _shared_apis_endpoint__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @shared/apis/endpoint */ 62376);
/* harmony import */ var _shared_functions_helpers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @shared/functions/helpers */ 41325);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ 86942);
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/environments/environment */ 92340);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common/http */ 28784);
/* harmony import */ var _shared_services_alert_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @shared/services/alert.service */ 40704);







class WarehouseService {
    constructor(_http, _alert) {
        this._http = _http;
        this._alert = _alert;
    }
    GetAll(size, sort, order, page, getInputs) {
        const requestUrl = `${src_environments_environment__WEBPACK_IMPORTED_MODULE_2__.environment.api}${_shared_apis_endpoint__WEBPACK_IMPORTED_MODULE_0__.endpoint.LIST_WAREHOUSES}?records=${size}&sort=${sort}&order=${order}&numPage=${page + 1}${getInputs}`;
        return this._http
            .get(requestUrl)
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.map)((resp) => this.transformWarehouseData(resp)));
    }
    transformWarehouseData(response) {
        const badgeColors = {
            0: "text-gray bg-gray-light",
            1: "text-green bg-green-light",
        };
        response.data.forEach((warehouse) => {
            warehouse.badgeColor =
                badgeColors[warehouse.state] || "text-gray bg-gray-light";
            warehouse.icEdit = (0,_shared_functions_helpers__WEBPACK_IMPORTED_MODULE_1__.getIcon)("icEdit", "Editar Almacen", true);
            warehouse.icDelete = (0,_shared_functions_helpers__WEBPACK_IMPORTED_MODULE_1__.getIcon)("icDelete", "Eliminar Almacén", true);
        });
        return response;
    }
    warehouseById(warehouseId) {
        const requestUrl = `${src_environments_environment__WEBPACK_IMPORTED_MODULE_2__.environment.api}${_shared_apis_endpoint__WEBPACK_IMPORTED_MODULE_0__.endpoint.WAREHOUSE_BY_ID}${warehouseId}`;
        return this._http.get(requestUrl).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.map)((resp) => {
            return resp.data;
        }));
    }
    warehouseRegister(warehouse) {
        const requestUrl = `${src_environments_environment__WEBPACK_IMPORTED_MODULE_2__.environment.api}${_shared_apis_endpoint__WEBPACK_IMPORTED_MODULE_0__.endpoint.WAREHOUSE_REGISTER}`;
        return this._http.post(requestUrl, warehouse);
    }
    warehouseEdit(warehouseId, warehouse) {
        const requestUrl = `${src_environments_environment__WEBPACK_IMPORTED_MODULE_2__.environment.api}${_shared_apis_endpoint__WEBPACK_IMPORTED_MODULE_0__.endpoint.WAREHOUSE_EDIT}${warehouseId}`;
        return this._http.put(requestUrl, warehouse);
    }
    warehouseRemove(warehouseId) {
        const requestUrl = `${src_environments_environment__WEBPACK_IMPORTED_MODULE_2__.environment.api}${_shared_apis_endpoint__WEBPACK_IMPORTED_MODULE_0__.endpoint.WAREHOUSE_REMOVE}${warehouseId}`;
        return this._http.put(requestUrl, "").pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.map)((resp) => {
            if (resp.isSuccess) {
                this._alert.success("Excelente", resp.message);
            }
        }));
    }
}
WarehouseService.ɵfac = function WarehouseService_Factory(t) { return new (t || WarehouseService)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_6__.HttpClient), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵinject"](_shared_services_alert_service__WEBPACK_IMPORTED_MODULE_3__.AlertService)); };
WarehouseService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjectable"]({ token: WarehouseService, factory: WarehouseService.ɵfac, providedIn: "root" });


/***/ }),

/***/ 62955:
/*!*************************************************************!*\
  !*** ./src/app/pages/warehouse/warehouse-routing.module.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "WarehouseRoutingModule": () => (/* binding */ WarehouseRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _components_warehouse_list_warehouse_list_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/warehouse-list/warehouse-list.component */ 77405);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 3184);




const routes = [
    {
        path: "",
        component: _components_warehouse_list_warehouse_list_component__WEBPACK_IMPORTED_MODULE_0__.WarehouseListComponent,
        data: {
            scrollDisabled: true,
            toolbarShadowEnabled: true,
        },
    },
];
class WarehouseRoutingModule {
}
WarehouseRoutingModule.ɵfac = function WarehouseRoutingModule_Factory(t) { return new (t || WarehouseRoutingModule)(); };
WarehouseRoutingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: WarehouseRoutingModule });
WarehouseRoutingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forChild(routes), _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](WarehouseRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule] }); })();


/***/ }),

/***/ 18203:
/*!*****************************************************!*\
  !*** ./src/app/pages/warehouse/warehouse.module.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "WarehouseModule": () => (/* binding */ WarehouseModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _shared_components_reusables_button_reset_filters_button_reset_filters_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @shared/components/reusables/button-reset-filters/button-reset-filters.component */ 93495);
/* harmony import */ var _shared_components_reusables_export_excel_export_excel_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @shared/components/reusables/export-excel/export-excel.component */ 39559);
/* harmony import */ var _shared_components_reusables_filter_date_range_ymd_filter_date_range_ymd_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @shared/components/reusables/filter-date-range-ymd/filter-date-range-ymd.component */ 60518);
/* harmony import */ var _shared_components_reusables_list_table_list_table_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @shared/components/reusables/list-table/list-table.component */ 26724);
/* harmony import */ var _shared_components_reusables_menu_menu_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @shared/components/reusables/menu/menu.component */ 57638);
/* harmony import */ var _shared_components_reusables_search_box_multiple_search_box_multiple_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @shared/components/reusables/search-box-multiple/search-box-multiple.component */ 3343);
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @shared/shared.module */ 44466);
/* harmony import */ var _warehouse_routing_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./warehouse-routing.module */ 62955);
/* harmony import */ var _components_warehouse_list_warehouse_list_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/warehouse-list/warehouse-list.component */ 77405);
/* harmony import */ var _components_warehouse_manage_warehouse_manage_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/warehouse-manage/warehouse-manage.component */ 83657);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/core */ 3184);












class WarehouseModule {
}
WarehouseModule.ɵfac = function WarehouseModule_Factory(t) { return new (t || WarehouseModule)(); };
WarehouseModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdefineNgModule"]({ type: WarehouseModule });
WarehouseModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdefineInjector"]({ imports: [_angular_common__WEBPACK_IMPORTED_MODULE_11__.CommonModule,
        _warehouse_routing_module__WEBPACK_IMPORTED_MODULE_7__.WarehouseRoutingModule,
        _shared_shared_module__WEBPACK_IMPORTED_MODULE_6__.SharedModule,
        _shared_components_reusables_list_table_list_table_component__WEBPACK_IMPORTED_MODULE_3__.ListTableComponent,
        _shared_components_reusables_search_box_multiple_search_box_multiple_component__WEBPACK_IMPORTED_MODULE_5__.SearchBoxMultipleComponent,
        _shared_components_reusables_menu_menu_component__WEBPACK_IMPORTED_MODULE_4__.MenuComponent,
        _shared_components_reusables_export_excel_export_excel_component__WEBPACK_IMPORTED_MODULE_1__.ExportExcelComponent,
        _shared_components_reusables_filter_date_range_ymd_filter_date_range_ymd_component__WEBPACK_IMPORTED_MODULE_2__.FilterDateRangeYmdComponent,
        _shared_components_reusables_button_reset_filters_button_reset_filters_component__WEBPACK_IMPORTED_MODULE_0__.ButtonResetFiltersComponent] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵsetNgModuleScope"](WarehouseModule, { declarations: [_components_warehouse_list_warehouse_list_component__WEBPACK_IMPORTED_MODULE_8__.WarehouseListComponent,
        _components_warehouse_manage_warehouse_manage_component__WEBPACK_IMPORTED_MODULE_9__.WarehouseManageComponent], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_11__.CommonModule,
        _warehouse_routing_module__WEBPACK_IMPORTED_MODULE_7__.WarehouseRoutingModule,
        _shared_shared_module__WEBPACK_IMPORTED_MODULE_6__.SharedModule,
        _shared_components_reusables_list_table_list_table_component__WEBPACK_IMPORTED_MODULE_3__.ListTableComponent,
        _shared_components_reusables_search_box_multiple_search_box_multiple_component__WEBPACK_IMPORTED_MODULE_5__.SearchBoxMultipleComponent,
        _shared_components_reusables_menu_menu_component__WEBPACK_IMPORTED_MODULE_4__.MenuComponent,
        _shared_components_reusables_export_excel_export_excel_component__WEBPACK_IMPORTED_MODULE_1__.ExportExcelComponent,
        _shared_components_reusables_filter_date_range_ymd_filter_date_range_ymd_component__WEBPACK_IMPORTED_MODULE_2__.FilterDateRangeYmdComponent,
        _shared_components_reusables_button_reset_filters_button_reset_filters_component__WEBPACK_IMPORTED_MODULE_0__.ButtonResetFiltersComponent] }); })();


/***/ })

}]);
//# sourceMappingURL=src_app_pages_warehouse_warehouse_module_ts.js.map