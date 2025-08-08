(self["webpackChunkvex"] = self["webpackChunkvex"] || []).push([["src_app_pages_category_category_module_ts"],{

/***/ 68118:
/*!***********************************************************!*\
  !*** ./src/app/pages/category/category-routing.module.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CategoryRoutingModule": () => (/* binding */ CategoryRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _components_category_list_category_list_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/category-list/category-list.component */ 87350);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 3184);




const routes = [
    {
        path: '',
        component: _components_category_list_category_list_component__WEBPACK_IMPORTED_MODULE_0__.CategoryListComponent,
        data: {
            scrollDisabled: true,
            toolbarShadowEnabled: true
        }
    }
];
class CategoryRoutingModule {
}
CategoryRoutingModule.ɵfac = function CategoryRoutingModule_Factory(t) { return new (t || CategoryRoutingModule)(); };
CategoryRoutingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: CategoryRoutingModule });
CategoryRoutingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forChild(routes), _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](CategoryRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule] }); })();


/***/ }),

/***/ 38712:
/*!***************************************************!*\
  !*** ./src/app/pages/category/category.module.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CategoryModule": () => (/* binding */ CategoryModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _category_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./category-routing.module */ 68118);
/* harmony import */ var _components_category_list_category_list_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/category-list/category-list.component */ 87350);
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @shared/shared.module */ 44466);
/* harmony import */ var _shared_components_reusables_list_table_list_table_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @shared/components/reusables/list-table/list-table.component */ 26724);
/* harmony import */ var _shared_components_reusables_search_box_multiple_search_box_multiple_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @shared/components/reusables/search-box-multiple/search-box-multiple.component */ 3343);
/* harmony import */ var _shared_components_reusables_menu_menu_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @shared/components/reusables/menu/menu.component */ 57638);
/* harmony import */ var _components_category_manage_category_manage_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/category-manage/category-manage.component */ 64778);
/* harmony import */ var _shared_components_reusables_export_excel_export_excel_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @shared/components/reusables/export-excel/export-excel.component */ 39559);
/* harmony import */ var _shared_components_reusables_filter_date_range_ymd_filter_date_range_ymd_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @shared/components/reusables/filter-date-range-ymd/filter-date-range-ymd.component */ 60518);
/* harmony import */ var _shared_components_reusables_button_reset_filters_button_reset_filters_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @shared/components/reusables/button-reset-filters/button-reset-filters.component */ 93495);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/core */ 3184);












class CategoryModule {
}
CategoryModule.ɵfac = function CategoryModule_Factory(t) { return new (t || CategoryModule)(); };
CategoryModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdefineNgModule"]({ type: CategoryModule });
CategoryModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdefineInjector"]({ imports: [_angular_common__WEBPACK_IMPORTED_MODULE_11__.CommonModule,
        _category_routing_module__WEBPACK_IMPORTED_MODULE_0__.CategoryRoutingModule,
        _shared_shared_module__WEBPACK_IMPORTED_MODULE_2__.SharedModule,
        _shared_components_reusables_list_table_list_table_component__WEBPACK_IMPORTED_MODULE_3__.ListTableComponent,
        _shared_components_reusables_search_box_multiple_search_box_multiple_component__WEBPACK_IMPORTED_MODULE_4__.SearchBoxMultipleComponent,
        _shared_components_reusables_menu_menu_component__WEBPACK_IMPORTED_MODULE_5__.MenuComponent,
        _shared_components_reusables_export_excel_export_excel_component__WEBPACK_IMPORTED_MODULE_7__.ExportExcelComponent,
        _shared_components_reusables_filter_date_range_ymd_filter_date_range_ymd_component__WEBPACK_IMPORTED_MODULE_8__.FilterDateRangeYmdComponent,
        _shared_components_reusables_button_reset_filters_button_reset_filters_component__WEBPACK_IMPORTED_MODULE_9__.ButtonResetFiltersComponent] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵsetNgModuleScope"](CategoryModule, { declarations: [_components_category_list_category_list_component__WEBPACK_IMPORTED_MODULE_1__.CategoryListComponent, _components_category_manage_category_manage_component__WEBPACK_IMPORTED_MODULE_6__.CategoryManageComponent], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_11__.CommonModule,
        _category_routing_module__WEBPACK_IMPORTED_MODULE_0__.CategoryRoutingModule,
        _shared_shared_module__WEBPACK_IMPORTED_MODULE_2__.SharedModule,
        _shared_components_reusables_list_table_list_table_component__WEBPACK_IMPORTED_MODULE_3__.ListTableComponent,
        _shared_components_reusables_search_box_multiple_search_box_multiple_component__WEBPACK_IMPORTED_MODULE_4__.SearchBoxMultipleComponent,
        _shared_components_reusables_menu_menu_component__WEBPACK_IMPORTED_MODULE_5__.MenuComponent,
        _shared_components_reusables_export_excel_export_excel_component__WEBPACK_IMPORTED_MODULE_7__.ExportExcelComponent,
        _shared_components_reusables_filter_date_range_ymd_filter_date_range_ymd_component__WEBPACK_IMPORTED_MODULE_8__.FilterDateRangeYmdComponent,
        _shared_components_reusables_button_reset_filters_button_reset_filters_component__WEBPACK_IMPORTED_MODULE_9__.ButtonResetFiltersComponent] }); })();


/***/ }),

/***/ 80944:
/*!*********************************************************************************!*\
  !*** ./src/app/pages/category/components/category-list/category-list-config.ts ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "componentSettings": () => (/* binding */ componentSettings)
/* harmony export */ });
/* harmony import */ var _iconify_icons_ic_twotone_category__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @iconify/icons-ic/twotone-category */ 84808);
/* harmony import */ var _iconify_icons_ic_twotone_calendar_today__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @iconify/icons-ic/twotone-calendar-today */ 18518);
/* harmony import */ var _shared_validators_generic_validators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @shared/validators/generic-validators */ 28222);
/* harmony import */ var _shared_services_icons_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @shared/services/icons.service */ 11612);




const searchOptions = [
    {
        label: "Nombre",
        value: 1,
        placeholder: "Buscar por Nombre",
        validation: [_shared_validators_generic_validators__WEBPACK_IMPORTED_MODULE_2__.GenericValidators.defaultName],
        validation_desc: "Sólo se permite letras en esta búsqueda.",
        icon: "icName",
    },
    {
        label: "Descripción",
        value: 2,
        placeholder: "Buscar por Descripción",
        validation: [_shared_validators_generic_validators__WEBPACK_IMPORTED_MODULE_2__.GenericValidators.defaultDescription],
        validation_desc: "Sólo se permite letras y números en esta búsqueda.",
        icon: "icDescription",
    },
];
const menuItems = [
    {
        type: "link",
        id: "all",
        icon: _shared_services_icons_service__WEBPACK_IMPORTED_MODULE_3__.IconsService.prototype.getIcon("icViewHeadline"),
        label: "Todos",
    },
    {
        type: "link",
        id: "Activo",
        value: 1,
        icon: _shared_services_icons_service__WEBPACK_IMPORTED_MODULE_3__.IconsService.prototype.getIcon("icLabel"),
        label: "Activo",
        class: {
            icon: "text-green",
        },
    },
    {
        type: "link",
        id: "Inactivo",
        value: 0,
        icon: _shared_services_icons_service__WEBPACK_IMPORTED_MODULE_3__.IconsService.prototype.getIcon("icLabel"),
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
        label: "DESCRIPCIÓN",
        cssLabel: ["font-bold", "text-sm"],
        property: "description",
        cssProperty: ["font-semibold", "text-sm", "text-left"],
        type: "text",
        sticky: false,
        sort: true,
        sortProperty: "description",
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
        property: "stateCategory",
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
    // ICONS
    icCategory: _iconify_icons_ic_twotone_category__WEBPACK_IMPORTED_MODULE_0__["default"],
    icCalendarMonth: _iconify_icons_ic_twotone_calendar_today__WEBPACK_IMPORTED_MODULE_1__["default"],
    // LAYOUT SETTINGS
    menuOpen: false,
    // TABLE SETTINGS
    tableColumns: tableColumns,
    initialSort: "Id",
    initialSortDir: "desc",
    getInputs,
    buttonLabel: "EDITAR",
    buttonLabel2: "ELIMINAR",
    // SEARCH FILTROS
    menuItems: menuItems,
    searchOptions: searchOptions,
    filters_dates_active: false,
    filters: filters,
    resetFilters,
    datesFilterArray: ["Fecha de creación"],
    filename: "listado-de-categorias",
};


/***/ }),

/***/ 87350:
/*!************************************************************************************!*\
  !*** ./src/app/pages/category/components/category-list/category-list.component.ts ***!
  \************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CategoryListComponent": () => (/* binding */ CategoryListComponent)
/* harmony export */ });
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/dialog */ 95758);
/* harmony import */ var src_vex_animations_fade_in_right_animation__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/@vex/animations/fade-in-right.animation */ 16496);
/* harmony import */ var src_vex_animations_scale_in_animation__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/@vex/animations/scale-in.animation */ 49597);
/* harmony import */ var src_vex_animations_stagger_animation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/@vex/animations/stagger.animation */ 48535);
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! sweetalert2 */ 60598);
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _category_manage_category_manage_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../category-manage/category-manage.component */ 64778);
/* harmony import */ var _category_list_config__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./category-list-config */ 80944);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _shared_services_custom_title_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @shared/services/custom-title.service */ 31421);
/* harmony import */ var src_app_pages_category_services_category_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/pages/category/services/category.service */ 73444);
/* harmony import */ var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/sidenav */ 7216);
/* harmony import */ var _visurel_iconify_angular__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @visurel/iconify-angular */ 57313);
/* harmony import */ var _vex_directives_container_container_directive__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../../@vex/directives/container/container.directive */ 90080);
/* harmony import */ var _shared_components_reusables_list_table_list_table_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../shared/components/reusables/list-table/list-table.component */ 26724);
/* harmony import */ var _shared_components_reusables_search_box_multiple_search_box_multiple_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../../shared/components/reusables/search-box-multiple/search-box-multiple.component */ 3343);
/* harmony import */ var _shared_components_reusables_menu_menu_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../../shared/components/reusables/menu/menu.component */ 57638);
/* harmony import */ var _shared_components_reusables_export_excel_export_excel_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../../shared/components/reusables/export-excel/export-excel.component */ 39559);
/* harmony import */ var _shared_components_reusables_filter_date_range_ymd_filter_date_range_ymd_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../../../shared/components/reusables/filter-date-range-ymd/filter-date-range-ymd.component */ 60518);
/* harmony import */ var _shared_components_reusables_button_reset_filters_button_reset_filters_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../../../shared/components/reusables/button-reset-filters/button-reset-filters.component */ 93495);




















class CategoryListComponent {
    constructor(customTitle, _categoryService, _dialog) {
        this._categoryService = _categoryService;
        this._dialog = _dialog;
        customTitle.set("Categorias");
    }
    ngOnInit() {
        this.component = _category_list_config__WEBPACK_IMPORTED_MODULE_5__.componentSettings;
    }
    setData(value) {
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
    openDialogRegister() {
        this._dialog
            .open(_category_manage_category_manage_component__WEBPACK_IMPORTED_MODULE_4__.CategoryManageComponent, {
            disableClose: true,
            width: "400px",
        })
            .afterClosed()
            .subscribe((res) => {
            if (res) {
                this.setGetInputsProviders(true);
            }
        });
    }
    rowClick(e) {
        let action = e.action;
        let category = e.row;
        switch (action) {
            case "edit":
                this.CategoryEdit(category);
                break;
            case "remove":
                this.CategoryRemove(category);
                break;
        }
        return false;
    }
    CategoryEdit(row) {
        const dialogConfig = new _angular_material_dialog__WEBPACK_IMPORTED_MODULE_15__.MatDialogConfig();
        dialogConfig.data = row;
        let dialogRef = this._dialog.open(_category_manage_category_manage_component__WEBPACK_IMPORTED_MODULE_4__.CategoryManageComponent, {
            data: dialogConfig,
            disableClose: true,
            width: "400px",
        });
        dialogRef.afterClosed().subscribe((res) => {
            if (res) {
                this.setGetInputsProviders(true);
            }
        });
    }
    CategoryRemove(category) {
        sweetalert2__WEBPACK_IMPORTED_MODULE_3___default().fire({
            title: `¿Realmente deseas eliminar la categoría ${category.name}?`,
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
                this._categoryService
                    .CategoryRemove(category.categoryId)
                    .subscribe(() => this.setGetInputsProviders(true));
            }
        });
    }
    setGetInputsProviders(refresh) {
        this.component.filters.refresh = refresh;
        this.formatGetInputs();
    }
    get getDownloadUrl() {
        return `Category?Download=True`;
    }
}
CategoryListComponent.ɵfac = function CategoryListComponent_Factory(t) { return new (t || CategoryListComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵdirectiveInject"](_shared_services_custom_title_service__WEBPACK_IMPORTED_MODULE_6__.CustomTitleService), _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵdirectiveInject"](src_app_pages_category_services_category_service__WEBPACK_IMPORTED_MODULE_7__.CategoryService), _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_15__.MatDialog)); };
CategoryListComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵdefineComponent"]({ type: CategoryListComponent, selectors: [["vex-category-list"]], decls: 21, vars: 18, consts: [[1, "w-full", "h-full", "flex", "flex-col"], [1, "px-gutter", "pt-1", "pb-20", "bg-primary", "flex-none"], ["vexContainer", "", 1, "flex", "items-center", "justify-between"], [1, "headline", "text-primary-contrast", "m-0", "flex", "items-center", "w-full", "max-w-xxxl", "mr-6"], [1, "hidden", "sm:block", 3, "icon"], [1, "ml-4", "block"], [1, "flex", "items-center", "justify-end", "w-full", "mt-5"], [1, "flex", "justify-between"], [3, "start", "end", "rangeDate"], [3, "buttonClick"], [1, "flex", "justify-between", "ml-6"], [3, "searchOptions", "currentValue", "search"], [3, "url", "getInputs", "filename"], ["vexContainer", "", 1, "-mt-14", "pt-0", "overflow-hidden", "flex"], [1, "bg-transparent", "flex-auto", "flex"], [1, "p-gutter", "pt-0", "flex-auto", "flex", "items-start"], ["buttonLabel", "AGREGAR", 1, "hidden", "sm:block", "mr-6", 3, "currentMenu", "items", "buttonShow", "buttonClick", "filterChange"], [1, "card", "h-full", "overflow-hidden", "flex-auto"], [3, "service", "columns", "sortBy", "sortDir", "getInputs", "rowClick"]], template: function CategoryListComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "h2", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelement"](4, "ic-icon", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](5, "span", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](6, "Gesti\u00F3n de Categorias");
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](7, "div", 6)(8, "div", 7)(9, "app-filter-date-range-ymd", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵlistener"]("rangeDate", function CategoryListComponent_Template_app_filter_date_range_ymd_rangeDate_9_listener($event) { return ctx.searchDateRange($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](10, "app-button-reset-filters", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵlistener"]("buttonClick", function CategoryListComponent_Template_app_button_reset_filters_buttonClick_10_listener() { return ctx.resetFilters(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](11, "div", 10)(12, "app-search-box-multiple", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵlistener"]("search", function CategoryListComponent_Template_app_search_box_multiple_search_12_listener($event) { return ctx.search($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](13, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelement"](14, "app-export-excel", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](15, "div", 13)(16, "mat-drawer-container", 14)(17, "mat-drawer-content", 15)(18, "app-menu", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵlistener"]("buttonClick", function CategoryListComponent_Template_app_menu_buttonClick_18_listener() { return ctx.openDialogRegister(); })("filterChange", function CategoryListComponent_Template_app_menu_filterChange_18_listener($event) { return ctx.setData($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](19, "div", 17)(20, "app-list-table", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵlistener"]("rowClick", function CategoryListComponent_Template_app_list_table_rowClick_20_listener($event) { return ctx.rowClick($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]()()()()()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("@scaleIn", undefined)("icon", ctx.component.icCategory);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("@fadeInRight", undefined);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("start", ctx.component.filters.startDate)("end", ctx.component.filters.endDate);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("searchOptions", ctx.component.searchOptions)("currentValue", ctx.component.filters.textFilter);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("url", ctx.getDownloadUrl)("getInputs", ctx.component.getInputs)("filename", ctx.component.filename);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("currentMenu", ctx.component.getInputs.stateFilter)("items", ctx.component.menuItems)("buttonShow", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("service", ctx._categoryService)("columns", ctx.component.tableColumns)("sortBy", ctx.component.initialSort)("sortDir", ctx.component.initialSortDir)("getInputs", ctx.component.getInputs);
    } }, dependencies: [_angular_material_sidenav__WEBPACK_IMPORTED_MODULE_17__.MatDrawerContainer, _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_17__.MatDrawerContent, _visurel_iconify_angular__WEBPACK_IMPORTED_MODULE_18__.IconDirective, _vex_directives_container_container_directive__WEBPACK_IMPORTED_MODULE_8__.ContainerDirective, _shared_components_reusables_list_table_list_table_component__WEBPACK_IMPORTED_MODULE_9__.ListTableComponent, _shared_components_reusables_search_box_multiple_search_box_multiple_component__WEBPACK_IMPORTED_MODULE_10__.SearchBoxMultipleComponent, _shared_components_reusables_menu_menu_component__WEBPACK_IMPORTED_MODULE_11__.MenuComponent, _shared_components_reusables_export_excel_export_excel_component__WEBPACK_IMPORTED_MODULE_12__.ExportExcelComponent, _shared_components_reusables_filter_date_range_ymd_filter_date_range_ymd_component__WEBPACK_IMPORTED_MODULE_13__.FilterDateRangeYmdComponent, _shared_components_reusables_button_reset_filters_button_reset_filters_component__WEBPACK_IMPORTED_MODULE_14__.ButtonResetFiltersComponent], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjYXRlZ29yeS1saXN0LmNvbXBvbmVudC5zY3NzIn0= */"], data: { animation: [src_vex_animations_stagger_animation__WEBPACK_IMPORTED_MODULE_2__.stagger40ms, src_vex_animations_scale_in_animation__WEBPACK_IMPORTED_MODULE_1__.scaleIn400ms, src_vex_animations_fade_in_right_animation__WEBPACK_IMPORTED_MODULE_0__.fadeInRight400ms] } });


/***/ }),

/***/ 64778:
/*!****************************************************************************************!*\
  !*** ./src/app/pages/category/components/category-manage/category-manage.component.ts ***!
  \****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CategoryManageComponent": () => (/* binding */ CategoryManageComponent)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/dialog */ 95758);
/* harmony import */ var _iconify_icons_ic_twotone_close__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @iconify/icons-ic/twotone-close */ 82610);
/* harmony import */ var _static_data_configs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../static-data/configs */ 64033);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _shared_services_alert_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @shared/services/alert.service */ 40704);
/* harmony import */ var src_app_pages_category_services_category_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/pages/category/services/category.service */ 73444);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/icon */ 65590);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/button */ 87317);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/form-field */ 44770);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/input */ 43365);
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/select */ 91434);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/core */ 88133);
/* harmony import */ var _visurel_iconify_angular__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @visurel/iconify-angular */ 57313);
/* harmony import */ var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/flex-layout/flex */ 55434);


















function CategoryManageComponent_mat_error_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, " Campo Nombre es requerido. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} }
function CategoryManageComponent_mat_option_24_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "mat-option", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const state_r3 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("value", state_r3.value);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", state_r3.label, " ");
} }
function CategoryManageComponent_mat_error_25_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, " Campo Estado es requerido. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} }
class CategoryManageComponent {
    constructor(data, _fb, _alert, _categoryService, _dialogRef) {
        this.data = data;
        this._fb = _fb;
        this._alert = _alert;
        this._categoryService = _categoryService;
        this._dialogRef = _dialogRef;
        this.icClose = _iconify_icons_ic_twotone_close__WEBPACK_IMPORTED_MODULE_0__["default"];
        this.configs = _static_data_configs__WEBPACK_IMPORTED_MODULE_1__;
        this.initForm();
    }
    initForm() {
        this.form = this._fb.group({
            categoryId: [0, [_angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required]],
            name: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required]],
            description: [""],
            state: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required]],
        });
    }
    ngOnInit() {
        if (this.data != null) {
            this.CategoryById(this.data.data.categoryId);
        }
    }
    CategoryById(CategoryId) {
        this._categoryService.CategoryById(CategoryId).subscribe((resp) => {
            this.form.reset({
                categoryId: resp.categoryId,
                name: resp.name,
                description: resp.description,
                state: resp.state,
            });
        });
    }
    CategorySave() {
        if (this.form.invalid) {
            return Object.values(this.form.controls).forEach((controls) => {
                controls.markAllAsTouched();
            });
        }
        const categoryId = this.form.get("categoryId").value;
        if (categoryId > 0) {
            this.CategoryEdit(categoryId);
        }
        else {
            this.CategoryRegister();
        }
    }
    CategoryRegister() {
        this._categoryService
            .CategoryRegister(this.form.value)
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
    CategoryEdit(categoryId) {
        this._categoryService
            .CategoryEdit(categoryId, this.form.value)
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
CategoryManageComponent.ɵfac = function CategoryManageComponent_Factory(t) { return new (t || CategoryManageComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__.MAT_DIALOG_DATA), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_shared_services_alert_service__WEBPACK_IMPORTED_MODULE_2__.AlertService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](src_app_pages_category_services_category_service__WEBPACK_IMPORTED_MODULE_3__.CategoryService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__.MatDialogRef)); };
CategoryManageComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({ type: CategoryManageComponent, selectors: [["vex-category-manage"]], decls: 31, vars: 6, consts: [[3, "formGroup", "ngSubmit"], ["fxLayout", "row", "fxLayoutAlign", "start center", "mat-dialog-title", ""], ["fxFlex", "auto", 1, "headline", "m-0", "text-xl", "text-accent"], ["mat-dialog-close", "", "mat-icon-button", "", "type", "button", 1, "text-secondary"], [3, "icIcon"], ["fxLayout", "row", "fxLayoutGap", "16px"], ["appearance", "outline", "fxFlex", "100"], ["matInput", "", "formControlName", "name"], [4, "ngIf"], ["matInput", "", "formControlName", "description"], ["formControlName", "state"], [3, "value", 4, "ngFor", "ngForOf"], ["align", "end"], ["mat-button", "", "mat-dialog-close", "", "type", "button"], ["color", "purple", "mat-button", "", "type", "submit", 1, "bg-accent", "text-accent-contrast", 3, "disabled"], [3, "value"]], template: function CategoryManageComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "form", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("ngSubmit", function CategoryManageComponent_Template_form_ngSubmit_0_listener() { return ctx.CategorySave(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "div", 1)(2, "h2", 2)(3, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](4, "Gesti\u00F3n de Categor\u00EDa");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](5, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](6, "mat-icon", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](7, "mat-dialog-content")(8, "div", 5)(9, "mat-form-field", 6)(10, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](11, "Nombre");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](12, "input", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](13, CategoryManageComponent_mat_error_13_Template, 2, 0, "mat-error", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](14, "div", 5)(15, "mat-form-field", 6)(16, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](17, "Descripci\u00F3n");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](18, "input", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](19, "div", 5)(20, "mat-form-field", 6)(21, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](22, "Estado");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](23, "mat-select", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](24, CategoryManageComponent_mat_option_24_Template, 2, 2, "mat-option", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](25, CategoryManageComponent_mat_error_25_Template, 2, 0, "mat-error", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](26, "mat-dialog-actions", 12)(27, "button", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](28, "CANCELAR");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](29, "button", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](30, "GUARDAR");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("formGroup", ctx.form);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("icIcon", ctx.icClose);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.form.get("name").hasError("required"));
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", ctx.configs.statesSelect);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.form.get("state").hasError("required"));
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("disabled", !ctx.form.valid);
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_7__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_7__.NgIf, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__.MatDialogClose, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__.MatDialogTitle, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__.MatDialogContent, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__.MatDialogActions, _angular_material_icon__WEBPACK_IMPORTED_MODULE_8__.MatIcon, _angular_material_button__WEBPACK_IMPORTED_MODULE_9__.MatButton, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_10__.MatError, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_10__.MatFormField, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_10__.MatLabel, _angular_material_input__WEBPACK_IMPORTED_MODULE_11__.MatInput, _angular_material_select__WEBPACK_IMPORTED_MODULE_12__.MatSelect, _angular_material_core__WEBPACK_IMPORTED_MODULE_13__.MatOption, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormControlName, _visurel_iconify_angular__WEBPACK_IMPORTED_MODULE_14__.IconDirective, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_15__.DefaultLayoutDirective, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_15__.DefaultLayoutGapDirective, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_15__.DefaultLayoutAlignDirective, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_15__.DefaultFlexDirective], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjYXRlZ29yeS1tYW5hZ2UuY29tcG9uZW50LnNjc3MifQ== */"] });


/***/ }),

/***/ 73444:
/*!*************************************************************!*\
  !*** ./src/app/pages/category/services/category.service.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CategoryService": () => (/* binding */ CategoryService)
/* harmony export */ });
/* harmony import */ var _shared_apis_endpoint__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @shared/apis/endpoint */ 62376);
/* harmony import */ var _shared_functions_helpers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @shared/functions/helpers */ 41325);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ 86942);
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/environments/environment */ 92340);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common/http */ 28784);
/* harmony import */ var _shared_services_alert_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @shared/services/alert.service */ 40704);







class CategoryService {
    constructor(_http, _alert) {
        this._http = _http;
        this._alert = _alert;
    }
    GetAll(size, sort, order, page, getInputs) {
        const requestUrl = `${src_environments_environment__WEBPACK_IMPORTED_MODULE_2__.environment.api}${_shared_apis_endpoint__WEBPACK_IMPORTED_MODULE_0__.endpoint.LIST_CATEGORIES}?records=${size}&sort=${sort}&order=${order}&numPage=${page + 1}${getInputs}`;
        return this._http.get(requestUrl).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.map)((data) => {
            data.data.forEach(function (e) {
                switch (e.state) {
                    case 0:
                        e.badgeColor = "text-gray bg-gray-light";
                        break;
                    case 1:
                        e.badgeColor = "text-green bg-green-light";
                        break;
                    default:
                        e.badgeColor = "text-gray bg-gray-light";
                        break;
                }
                e.icEdit = (0,_shared_functions_helpers__WEBPACK_IMPORTED_MODULE_1__.getIcon)("icEdit", "Editar Categoría", true);
                e.icDelete = (0,_shared_functions_helpers__WEBPACK_IMPORTED_MODULE_1__.getIcon)("icDelete", "Eliminar Categoría", true);
            });
            return data;
        }));
    }
    CategoryRegister(category) {
        const requestUrl = `${src_environments_environment__WEBPACK_IMPORTED_MODULE_2__.environment.api}${_shared_apis_endpoint__WEBPACK_IMPORTED_MODULE_0__.endpoint.CATEGORY_REGISTER}`;
        return this._http.post(requestUrl, category).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.map)((resp) => {
            return resp;
        }));
    }
    CategoryById(CategoryId) {
        const requestUrl = `${src_environments_environment__WEBPACK_IMPORTED_MODULE_2__.environment.api}${_shared_apis_endpoint__WEBPACK_IMPORTED_MODULE_0__.endpoint.CATEGORY_BY_ID}${CategoryId}`;
        return this._http.get(requestUrl).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.map)((resp) => {
            return resp.data;
        }));
    }
    CategoryEdit(CategoryId, category) {
        const requestUrl = `${src_environments_environment__WEBPACK_IMPORTED_MODULE_2__.environment.api}${_shared_apis_endpoint__WEBPACK_IMPORTED_MODULE_0__.endpoint.CATEGORY_EDIT}${CategoryId}`;
        return this._http.put(requestUrl, category).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.map)((resp) => {
            return resp;
        }));
    }
    CategoryRemove(CategoryId) {
        const requestUrl = `${src_environments_environment__WEBPACK_IMPORTED_MODULE_2__.environment.api}${_shared_apis_endpoint__WEBPACK_IMPORTED_MODULE_0__.endpoint.CATEGORY_REMOVE}${CategoryId}`;
        return this._http.put(requestUrl, "").pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.map)((resp) => {
            if (resp.isSuccess) {
                this._alert.success("Excelente", resp.message);
            }
        }));
    }
}
CategoryService.ɵfac = function CategoryService_Factory(t) { return new (t || CategoryService)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_6__.HttpClient), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵinject"](_shared_services_alert_service__WEBPACK_IMPORTED_MODULE_3__.AlertService)); };
CategoryService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjectable"]({ token: CategoryService, factory: CategoryService.ɵfac, providedIn: "root" });


/***/ }),

/***/ 18518:
/*!******************************************************************!*\
  !*** ./node_modules/@iconify/icons-ic/twotone-calendar-today.js ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, exports) => {

var data = {
  "body": "<path d=\"M20 3h-1V1h-2v2H7V1H5v2H4c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 2v3H4V5h16zM4 21V10h16v11H4z\" fill=\"currentColor\"/><path opacity=\".3\" d=\"M4 5.01h16V8H4z\" fill=\"currentColor\"/>",
  "width": 24,
  "height": 24
};
exports.__esModule = true;
exports["default"] = data;

/***/ })

}]);
//# sourceMappingURL=src_app_pages_category_category_module_ts.js.map