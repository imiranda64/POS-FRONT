"use strict";
(self["webpackChunkvex"] = self["webpackChunkvex"] || []).push([["src_app_pages_product_product_module_ts"],{

/***/ 70504:
/*!******************************************************************************!*\
  !*** ./src/app/pages/product/components/product-list/product-list-config.ts ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "componentSettings": () => (/* binding */ componentSettings)
/* harmony export */ });
/* harmony import */ var _shared_services_icons_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @shared/services/icons.service */ 11612);
/* harmony import */ var _shared_validators_generic_validators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @shared/validators/generic-validators */ 28222);


const searchOptions = [
    {
        label: "Código",
        value: 1,
        placeholder: "Buscar por Código",
        validation: [_shared_validators_generic_validators__WEBPACK_IMPORTED_MODULE_1__.GenericValidators.alphanumeric],
        validation_desc: "Sólo se permite letras y/o números en esta búsqueda.",
        icon: "icName",
    },
    {
        label: "Nombre",
        value: 2,
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
        label: "",
        cssLabel: ["font-bold", "text-sm"],
        property: "image",
        cssProperty: ["font-semibold", "text-sm", "text-left"],
        type: "image",
        sticky: true,
        sort: true,
        sortProperty: "image",
        visible: true,
        download: true,
    },
    {
        label: "CÓDIGO",
        cssLabel: ["font-bold", "text-sm"],
        property: "code",
        cssProperty: ["font-semibold", "text-sm", "text-left"],
        type: "textUppercase",
        sticky: true,
        sort: true,
        sortProperty: "code",
        visible: true,
        download: true,
    },
    {
        label: "NOMBRE",
        cssLabel: ["font-bold", "text-sm"],
        property: "name",
        cssProperty: ["font-semibold", "text-sm", "text-left"],
        type: "text",
        sticky: false,
        sort: true,
        sortProperty: "name",
        visible: true,
        download: true,
    },
    {
        label: "CATEGORÍA",
        cssLabel: ["font-bold", "text-sm"],
        property: "category",
        cssProperty: ["font-semibold", "text-sm", "text-left"],
        type: "text",
        sticky: false,
        sort: true,
        sortProperty: "category",
        visible: true,
        download: true,
    },
    {
        label: "STOCK MIN",
        cssLabel: ["font-bold", "text-sm"],
        property: "stockMin",
        cssProperty: ["font-semibold", "text-sm", "text-left"],
        type: "number",
        sticky: false,
        sort: true,
        sortProperty: "stockMin",
        visible: true,
        download: true,
    },
    {
        label: "STOCK MAX",
        cssLabel: ["font-bold", "text-sm"],
        property: "stockMax",
        cssProperty: ["font-semibold", "text-sm", "text-left"],
        type: "number",
        sticky: false,
        sort: true,
        sortProperty: "stockMax",
        visible: true,
        download: true,
    },
    {
        label: "PRECIO DE VENTA",
        cssLabel: ["font-bold", "text-sm"],
        property: "unitSalePrice",
        cssProperty: ["font-semibold", "text-sm", "text-center"],
        type: "currency",
        sticky: false,
        sort: true,
        sortProperty: "unitSalePrice",
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
        property: "stateProduct",
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
        property: "icView",
        cssProperty: [],
        type: "icon",
        action: "view",
        sticky: false,
        sort: false,
        visible: true,
        download: false,
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
    icProduct: _shared_services_icons_service__WEBPACK_IMPORTED_MODULE_0__.IconsService.prototype.getIcon("icProduct"),
    searchOptions,
    menuItems,
    tableColumns,
    initialSort: "Id",
    initialSortDir: "desc",
    filters,
    resetFilters,
    getInputs,
    filename: "listado-de-productos",
};


/***/ }),

/***/ 51180:
/*!*********************************************************************************!*\
  !*** ./src/app/pages/product/components/product-list/product-list.component.ts ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProductListComponent": () => (/* binding */ ProductListComponent)
/* harmony export */ });
/* harmony import */ var src_vex_animations_fade_in_right_animation__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/@vex/animations/fade-in-right.animation */ 16496);
/* harmony import */ var src_vex_animations_scale_in_animation__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/@vex/animations/scale-in.animation */ 49597);
/* harmony import */ var src_vex_animations_stagger_animation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/@vex/animations/stagger.animation */ 48535);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/dialog */ 95758);
/* harmony import */ var _product_list_config__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./product-list-config */ 70504);
/* harmony import */ var _product_manage_product_manage_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../product-manage/product-manage.component */ 16841);
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! sweetalert2 */ 60598);
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _product_stock_warehouse_product_stock_warehouse_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../product-stock-warehouse/product-stock-warehouse.component */ 3730);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _shared_services_custom_title_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @shared/services/custom-title.service */ 31421);
/* harmony import */ var _services_product_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../services/product.service */ 37437);
/* harmony import */ var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/sidenav */ 7216);
/* harmony import */ var _visurel_iconify_angular__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @visurel/iconify-angular */ 57313);
/* harmony import */ var _shared_components_reusables_list_table_list_table_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../shared/components/reusables/list-table/list-table.component */ 26724);
/* harmony import */ var _shared_components_reusables_search_box_multiple_search_box_multiple_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../../shared/components/reusables/search-box-multiple/search-box-multiple.component */ 3343);
/* harmony import */ var _shared_components_reusables_menu_menu_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../../shared/components/reusables/menu/menu.component */ 57638);
/* harmony import */ var _shared_components_reusables_export_excel_export_excel_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../../shared/components/reusables/export-excel/export-excel.component */ 39559);
/* harmony import */ var _shared_components_reusables_filter_date_range_ymd_filter_date_range_ymd_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../../../shared/components/reusables/filter-date-range-ymd/filter-date-range-ymd.component */ 60518);
/* harmony import */ var _shared_components_reusables_button_reset_filters_button_reset_filters_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../../../shared/components/reusables/button-reset-filters/button-reset-filters.component */ 93495);




















class ProductListComponent {
    constructor(customTitle, _productService, _dialog) {
        this._productService = _productService;
        this._dialog = _dialog;
        customTitle.set("Productos");
    }
    ngOnInit() {
        this.component = _product_list_config__WEBPACK_IMPORTED_MODULE_3__.componentSettings;
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
    openDialogRegister() {
        this._dialog
            .open(_product_manage_product_manage_component__WEBPACK_IMPORTED_MODULE_4__.ProductManageComponent, {
            disableClose: true,
            width: "400px",
            data: { mode: "register" },
        })
            .afterClosed()
            .subscribe((res) => {
            if (res) {
                this.setGetInputsProducts(true);
            }
        });
    }
    rowClick(rowClick) {
        let action = rowClick.action;
        let product = rowClick.row;
        switch (action) {
            case "edit":
                this.productEdit(product);
                break;
            case "remove":
                this.productRemove(product);
                break;
            case "view":
                this.productInfoWarehouse(product);
        }
        return false;
    }
    productEdit(productData) {
        const dialogConfig = new _angular_material_dialog__WEBPACK_IMPORTED_MODULE_15__.MatDialogConfig();
        dialogConfig.data = productData;
        this._dialog
            .open(_product_manage_product_manage_component__WEBPACK_IMPORTED_MODULE_4__.ProductManageComponent, {
            data: { dialogConfig, mode: "edit" },
            disableClose: true,
            width: "400px",
        })
            .afterClosed()
            .subscribe((resp) => {
            if (resp) {
                this.setGetInputsProducts(true);
            }
        });
    }
    productRemove(productData) {
        sweetalert2__WEBPACK_IMPORTED_MODULE_5___default().fire({
            title: `¿Realmente deseas eliminar el producto ${productData.name}?`,
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
                this._productService
                    .productRemove(productData.productId)
                    .subscribe(() => this.setGetInputsProducts(true));
            }
        });
    }
    productInfoWarehouse(productData) {
        const dialogConfig = new _angular_material_dialog__WEBPACK_IMPORTED_MODULE_15__.MatDialogConfig();
        dialogConfig.data = productData;
        this._dialog.open(_product_stock_warehouse_product_stock_warehouse_component__WEBPACK_IMPORTED_MODULE_6__.ProductStockWarehouseComponent, {
            data: { dialogConfig }
        });
    }
    setGetInputsProducts(refresh) {
        this.component.filters.refresh = refresh;
        this.formatGetInputs();
    }
    get getDownloadUrl() {
        return `Product?Download=True`;
    }
}
ProductListComponent.ɵfac = function ProductListComponent_Factory(t) { return new (t || ProductListComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵdirectiveInject"](_shared_services_custom_title_service__WEBPACK_IMPORTED_MODULE_7__.CustomTitleService), _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵdirectiveInject"](_services_product_service__WEBPACK_IMPORTED_MODULE_8__.ProductService), _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_15__.MatDialog)); };
ProductListComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵdefineComponent"]({ type: ProductListComponent, selectors: [["vex-product-list"]], decls: 21, vars: 18, consts: [[1, "w-full", "h-full", "flex", "flex-col"], [1, "px-gutter", "pt-1", "pb-20", "bg-primary", "flex-none"], [1, "flex", "items-center", "justify-between"], [1, "headline", "text-primary-contrast", "m-0", "flex", "items-center", "w-full", "max-w-xxxl", "mr-6"], [1, "hidden", "sm:block", 3, "icon"], [1, "ml-4", "block"], [1, "flex", "items-center", "justify-end", "w-full", "mt-5"], [1, "flex", "justify-between"], [3, "start", "end", "rangeDate"], [3, "buttonClick"], [1, "flex", "justify-between", "ml-6"], [3, "searchOptions", "currentValue", "search"], [3, "url", "getInputs", "filename"], [1, "-mt-14", "pt-0", "overflow-hidden", "flex"], [1, "bg-transparent", "flex-auto", "flex"], [1, "p-gutter", "pt-0", "flex-auto", "flex", "items-start"], ["buttonLabel", "AGREGAR", 1, "hidden", "sm:block", "mr-6", 3, "currentMenu", "items", "buttonShow", "filterChange", "buttonClick"], [1, "card", "h-full", "overflow-hidden", "flex-auto"], [3, "service", "columns", "sortBy", "sortDir", "getInputs", "rowClick"]], template: function ProductListComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "h2", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelement"](4, "ic-icon", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](5, "span", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](6, "Gesti\u00F3n de Productos");
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](7, "div", 6)(8, "div", 7)(9, "app-filter-date-range-ymd", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵlistener"]("rangeDate", function ProductListComponent_Template_app_filter_date_range_ymd_rangeDate_9_listener($event) { return ctx.searchDateRange($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](10, "app-button-reset-filters", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵlistener"]("buttonClick", function ProductListComponent_Template_app_button_reset_filters_buttonClick_10_listener() { return ctx.resetFilters(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](11, "div", 10)(12, "app-search-box-multiple", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵlistener"]("search", function ProductListComponent_Template_app_search_box_multiple_search_12_listener($event) { return ctx.search($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](13, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelement"](14, "app-export-excel", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](15, "div", 13)(16, "mat-drawer-container", 14)(17, "mat-drawer-content", 15)(18, "app-menu", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵlistener"]("filterChange", function ProductListComponent_Template_app_menu_filterChange_18_listener($event) { return ctx.setMenu($event); })("buttonClick", function ProductListComponent_Template_app_menu_buttonClick_18_listener() { return ctx.openDialogRegister(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](19, "div", 17)(20, "app-list-table", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵlistener"]("rowClick", function ProductListComponent_Template_app_list_table_rowClick_20_listener($event) { return ctx.rowClick($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]()()()()()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("@scaleIn", undefined)("icon", ctx.component.icProduct);
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
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("service", ctx._productService)("columns", ctx.component.tableColumns)("sortBy", ctx.component.initialSort)("sortDir", ctx.component.initialSortDir)("getInputs", ctx.component.getInputs);
    } }, dependencies: [_angular_material_sidenav__WEBPACK_IMPORTED_MODULE_17__.MatDrawerContainer, _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_17__.MatDrawerContent, _visurel_iconify_angular__WEBPACK_IMPORTED_MODULE_18__.IconDirective, _shared_components_reusables_list_table_list_table_component__WEBPACK_IMPORTED_MODULE_9__.ListTableComponent, _shared_components_reusables_search_box_multiple_search_box_multiple_component__WEBPACK_IMPORTED_MODULE_10__.SearchBoxMultipleComponent, _shared_components_reusables_menu_menu_component__WEBPACK_IMPORTED_MODULE_11__.MenuComponent, _shared_components_reusables_export_excel_export_excel_component__WEBPACK_IMPORTED_MODULE_12__.ExportExcelComponent, _shared_components_reusables_filter_date_range_ymd_filter_date_range_ymd_component__WEBPACK_IMPORTED_MODULE_13__.FilterDateRangeYmdComponent, _shared_components_reusables_button_reset_filters_button_reset_filters_component__WEBPACK_IMPORTED_MODULE_14__.ButtonResetFiltersComponent], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwcm9kdWN0LWxpc3QuY29tcG9uZW50LnNjc3MifQ== */"], data: { animation: [src_vex_animations_stagger_animation__WEBPACK_IMPORTED_MODULE_2__.stagger40ms, src_vex_animations_scale_in_animation__WEBPACK_IMPORTED_MODULE_1__.scaleIn400ms, src_vex_animations_fade_in_right_animation__WEBPACK_IMPORTED_MODULE_0__.fadeInRight400ms] } });


/***/ }),

/***/ 16841:
/*!*************************************************************************************!*\
  !*** ./src/app/pages/product/components/product-manage/product-manage.component.ts ***!
  \*************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProductManageComponent": () => (/* binding */ ProductManageComponent)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/dialog */ 95758);
/* harmony import */ var _shared_services_icons_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @shared/services/icons.service */ 11612);
/* harmony import */ var src_static_data_configs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/static-data/configs */ 64033);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _shared_services_alert_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @shared/services/alert.service */ 40704);
/* harmony import */ var _services_product_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/product.service */ 37437);
/* harmony import */ var _shared_services_category_select_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @shared/services/category-select.service */ 28549);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/icon */ 65590);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/button */ 87317);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/form-field */ 44770);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/input */ 43365);
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/select */ 91434);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/core */ 88133);
/* harmony import */ var _visurel_iconify_angular__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @visurel/iconify-angular */ 57313);
/* harmony import */ var _shared_components_reusables_select_autocomplete_select_autocomplete_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../shared/components/reusables/select-autocomplete/select-autocomplete.component */ 12232);
/* harmony import */ var _shared_components_reusables_img_selector_img_selector_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../shared/components/reusables/img-selector/img-selector.component */ 20293);




















function ProductManageComponent_mat_error_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1, " Campo C\u00F3digo es requerido. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} }
function ProductManageComponent_mat_error_18_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1, " Campo Nombre es requerido. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} }
function ProductManageComponent_mat_error_25_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1, " Campo Stock M\u00EDnimo es requerido. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} }
function ProductManageComponent_mat_error_30_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1, " Campo Stock M\u00E1ximo es requerido. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} }
function ProductManageComponent_mat_error_35_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1, " Campo Precio de Venta es requerido. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} }
function ProductManageComponent_mat_option_40_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "mat-option", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} if (rf & 2) {
    const state_r7 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("value", state_r7.value);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", state_r7.label, " ");
} }
function ProductManageComponent_mat_error_41_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1, " Campo Estado es requerido. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} }
class ProductManageComponent {
    constructor(data, _fb, _alert, _productService, _dialogRef, _categorySelectService) {
        this.data = data;
        this._fb = _fb;
        this._alert = _alert;
        this._productService = _productService;
        this._dialogRef = _dialogRef;
        this._categorySelectService = _categorySelectService;
        this.icClose = _shared_services_icons_service__WEBPACK_IMPORTED_MODULE_0__.IconsService.prototype.getIcon("icClose");
        this.configs = src_static_data_configs__WEBPACK_IMPORTED_MODULE_1__.statesSelect;
        this.mode = "";
        this.mode = data.mode;
        this.initForm();
    }
    initForm() {
        this.form = this._fb.group({
            productId: [0, [_angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.required]],
            code: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.required]],
            name: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.required]],
            stockMin: [0, [_angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.required]],
            stockMax: [0, [_angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.required]],
            image: [""],
            unitSalePrice: [0, [_angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.required]],
            categoryId: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.required]],
            state: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.required]],
        });
    }
    ngOnInit() {
        this.listSelectCategories();
        if (this.data.mode == "edit") {
            this.productById(this.data.dialogConfig.data.productId);
        }
    }
    listSelectCategories() {
        this._categorySelectService.listSelectCategories().subscribe((resp) => {
            this.categorySelect = resp;
        });
    }
    productById(productId) {
        this._productService.productById(productId).subscribe((resp) => {
            this.form.reset({
                productId: resp.productId,
                code: resp.code,
                name: resp.name,
                stockMin: resp.stockMin,
                stockMax: resp.stockMax,
                image: resp.image,
                unitSalePrice: resp.unitSalePrice,
                categoryId: resp.categoryId,
                state: resp.state,
            });
        });
    }
    selectedImage(file) {
        this.form.get("image").setValue(file);
    }
    productSave() {
        if (this.form.invalid) {
            return Object.values(this.form.controls).forEach((controls) => {
                controls.markAllAsTouched();
            });
        }
        const productId = this.form.get("productId").value;
        if (productId > 0) {
            this.productEdit(productId);
        }
        else {
            this.productRegister();
        }
    }
    productRegister() {
        this._productService.productRegister(this.form.value).subscribe((resp) => {
            if (resp.isSuccess) {
                this._alert.success("Excelente", resp.message);
                this._dialogRef.close(true);
            }
            else {
                this._alert.warn("Atención", resp.message);
            }
        });
    }
    productEdit(productId) {
        this._productService.productEdit(productId, this.form.value).subscribe((resp) => {
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
ProductManageComponent.ɵfac = function ProductManageComponent_Factory(t) { return new (t || ProductManageComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_9__.MAT_DIALOG_DATA), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_shared_services_alert_service__WEBPACK_IMPORTED_MODULE_2__.AlertService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_services_product_service__WEBPACK_IMPORTED_MODULE_3__.ProductService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_9__.MatDialogRef), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_shared_services_category_select_service__WEBPACK_IMPORTED_MODULE_4__.CategorySelectService)); };
ProductManageComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineComponent"]({ type: ProductManageComponent, selectors: [["vex-product-manage"]], decls: 48, vars: 15, consts: [[3, "formGroup", "ngSubmit"], ["mat-dialog-title", "", 1, "flex", "justify-between"], [1, "headline", "m-0", "text-xl", "text-accent"], ["mat-dialog-close", "", "mat-icon-button", "", 1, "text-secondary"], [3, "icIcon"], [1, "grid", "grid-cols-1", "md:grid-cols-2", "gap-3"], ["appearance", "outline", 1, "w-full"], ["matInput", "", "formControlName", "code"], [4, "ngIf"], ["matInput", "", "formControlName", "name"], ["label", "Categor\u00EDas", 3, "control", "required", "listOptions"], ["matInput", "", "type", "number", "formControlName", "stockMin"], ["matInput", "", "type", "number", "formControlName", "stockMax"], ["appearance", "outline", 1, "w-full", "md:w-6/12"], ["matInput", "", "type", "number", "formControlName", "unitSalePrice"], ["formControlName", "state"], [3, "value", 4, "ngFor", "ngForOf"], [3, "urlCurrentImg", "selectedImage"], ["align", "end"], ["mat-button", "", "mat-dialog-close", ""], ["type", "submit", "mat-button", "", 1, "bg-accent", "text-accent-contrast", 3, "disabled"], [3, "value"]], template: function ProductManageComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "form", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("ngSubmit", function ProductManageComponent_Template_form_ngSubmit_0_listener() { return ctx.productSave(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](1, "div", 1)(2, "h2", 2)(3, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](5, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](6, "mat-icon", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](7, "mat-dialog-content")(8, "div", 5)(9, "mat-form-field", 6)(10, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](11, "C\u00F3digo");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](12, "input", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](13, ProductManageComponent_mat_error_13_Template, 2, 0, "mat-error", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](14, "mat-form-field", 6)(15, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](16, "Nombre");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](17, "input", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](18, ProductManageComponent_mat_error_18_Template, 2, 0, "mat-error", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](19, "app-select-autocomplete", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](20, "div", 5)(21, "mat-form-field", 6)(22, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](23, "Stock M\u00EDnimo");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](24, "input", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](25, ProductManageComponent_mat_error_25_Template, 2, 0, "mat-error", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](26, "mat-form-field", 6)(27, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](28, "Stock M\u00E1ximo");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](29, "input", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](30, ProductManageComponent_mat_error_30_Template, 2, 0, "mat-error", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](31, "mat-form-field", 13)(32, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](33, "Precio de Venta");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](34, "input", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](35, ProductManageComponent_mat_error_35_Template, 2, 0, "mat-error", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](36, "mat-form-field", 6)(37, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](38, "Estado");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](39, "mat-select", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](40, ProductManageComponent_mat_option_40_Template, 2, 2, "mat-option", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](41, ProductManageComponent_mat_error_41_Template, 2, 0, "mat-error", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](42, "app-img-selector", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("selectedImage", function ProductManageComponent_Template_app_img_selector_selectedImage_42_listener($event) { return ctx.selectedImage($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](43, "mat-dialog-actions", 18)(44, "button", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](45, "CANCELAR");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](46, "button", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](47, " GUARDAR ");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("formGroup", ctx.form);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](ctx.data.mode == "register" ? "Registrar Nuevo Producto" : "Actualizar Producto");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("icIcon", ctx.icClose);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx.form.get("code").hasError("required"));
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx.form.get("name").hasError("required"));
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("control", ctx.form.get("categoryId"))("required", true)("listOptions", ctx.categorySelect);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx.form.get("stockMin").hasError("required"));
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx.form.get("stockMax").hasError("required"));
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx.form.get("unitSalePrice").hasError("required"));
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngForOf", ctx.configs);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx.form.get("state").hasError("required"));
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("urlCurrentImg", ctx.form.get("image").value);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("disabled", ctx.form.invalid);
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_10__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_10__.NgIf, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_9__.MatDialogClose, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_9__.MatDialogTitle, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_9__.MatDialogContent, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_9__.MatDialogActions, _angular_material_icon__WEBPACK_IMPORTED_MODULE_11__.MatIcon, _angular_material_button__WEBPACK_IMPORTED_MODULE_12__.MatButton, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_13__.MatError, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_13__.MatFormField, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_13__.MatLabel, _angular_material_input__WEBPACK_IMPORTED_MODULE_14__.MatInput, _angular_material_select__WEBPACK_IMPORTED_MODULE_15__.MatSelect, _angular_material_core__WEBPACK_IMPORTED_MODULE_16__.MatOption, _angular_forms__WEBPACK_IMPORTED_MODULE_8__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.NumberValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormControlName, _visurel_iconify_angular__WEBPACK_IMPORTED_MODULE_17__.IconDirective, _shared_components_reusables_select_autocomplete_select_autocomplete_component__WEBPACK_IMPORTED_MODULE_5__.SelectAutocompleteComponent, _shared_components_reusables_img_selector_img_selector_component__WEBPACK_IMPORTED_MODULE_6__.ImgSelectorComponent], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwcm9kdWN0LW1hbmFnZS5jb21wb25lbnQuc2NzcyJ9 */"] });


/***/ }),

/***/ 20512:
/*!****************************************************************************************************!*\
  !*** ./src/app/pages/product/components/product-stock-warehouse/product-stock-warehouse-config.ts ***!
  \****************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "componentInit": () => (/* binding */ componentInit)
/* harmony export */ });
const tableColumns = [
    {
        label: "ALMACÉN",
        cssLabel: ["font-bold", "text-sm", "text-left", "text-am-main-blue-dark bg-am-main-blue-light rounded-l-lg"],
        property: "warehouse",
        cssProperty: ["font-medium", "w-24"],
        type: "text",
        visible: true
    },
    {
        label: "STOCK ACTUAL",
        cssLabel: ["font-bold", "text-sm", "text-center", "text-am-main-blue-dark bg-am-main-blue-light"],
        property: "currentStock",
        cssProperty: ["font-medium", "w-24", "text-center"],
        type: "number",
        visible: true
    },
    {
        label: "PRECIO DE COMPRA",
        cssLabel: ["font-bold", "text-sm", "text-center", "text-am-main-blue-dark bg-am-main-blue-light rounded-r-lg"],
        property: "purchasePrice",
        cssProperty: ["font-medium", "w-24", "text-center"],
        type: "currency",
        visible: true
    },
];
const componentInit = {
    tableColumns
};


/***/ }),

/***/ 3730:
/*!*******************************************************************************************************!*\
  !*** ./src/app/pages/product/components/product-stock-warehouse/product-stock-warehouse.component.ts ***!
  \*******************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProductStockWarehouseComponent": () => (/* binding */ ProductStockWarehouseComponent)
/* harmony export */ });
/* harmony import */ var _shared_services_icons_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @shared/services/icons.service */ 11612);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/dialog */ 95758);
/* harmony import */ var _product_stock_warehouse_config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./product-stock-warehouse-config */ 20512);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _services_product_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/product.service */ 37437);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/icon */ 65590);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/button */ 87317);
/* harmony import */ var _visurel_iconify_angular__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @visurel/iconify-angular */ 57313);
/* harmony import */ var _shared_components_reusables_list_table_simple_list_table_simple_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../shared/components/reusables/list-table-simple/list-table-simple.component */ 28323);











function ProductStockWarehouseComponent_app_list_table_simple_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](0, "app-list-table-simple", 6);
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("columns", ctx_r0.component.tableColumns)("data", ctx_r0.productStockByWarehouses);
} }
class ProductStockWarehouseComponent {
    constructor(data, _productService) {
        this.data = data;
        this._productService = _productService;
        this.icClose = _shared_services_icons_service__WEBPACK_IMPORTED_MODULE_0__.IconsService.prototype.getIcon("icClose");
        this.codeProduct = this.data.dialogConfig.data.code;
        this.nameProduct = this.data.dialogConfig.data.name;
    }
    ngOnInit() {
        this.component = Object.assign({}, _product_stock_warehouse_config__WEBPACK_IMPORTED_MODULE_1__.componentInit);
        this.productStockByWarehouse(this.data.dialogConfig.data.productId);
    }
    productStockByWarehouse(productId) {
        this._productService.productStockByWarehouse(productId).subscribe((resp) => {
            this.productStockByWarehouses = resp;
        });
    }
}
ProductStockWarehouseComponent.ɵfac = function ProductStockWarehouseComponent_Factory(t) { return new (t || ProductStockWarehouseComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__.MAT_DIALOG_DATA), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_services_product_service__WEBPACK_IMPORTED_MODULE_2__.ProductService)); };
ProductStockWarehouseComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({ type: ProductStockWarehouseComponent, selectors: [["vex-product-stock-warehouse"]], decls: 10, vars: 4, consts: [["mat-dialog-title", "", 1, "flex", "justify-between"], [1, "headline", "m-0", "text-xl", "text-accent"], ["mat-dialog-close", "", "mat-icon-button", "", 1, "text-secondary"], [3, "icIcon"], [1, "text-primary"], [3, "columns", "data", 4, "ngIf"], [3, "columns", "data"]], template: function ProductStockWarehouseComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 0)(1, "h2", 1)(2, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](3, "Stock Actual del Producto por Almac\u00E9n");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](5, "mat-icon", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](6, "strong", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](8, "mat-dialog-content");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](9, ProductStockWarehouseComponent_app_list_table_simple_9_Template, 1, 2, "app-list-table-simple", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("icIcon", ctx.icClose);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate2"]("", ctx.codeProduct, " - ", ctx.nameProduct, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.productStockByWarehouses);
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_6__.NgIf, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__.MatDialogClose, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__.MatDialogTitle, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__.MatDialogContent, _angular_material_icon__WEBPACK_IMPORTED_MODULE_7__.MatIcon, _angular_material_button__WEBPACK_IMPORTED_MODULE_8__.MatButton, _visurel_iconify_angular__WEBPACK_IMPORTED_MODULE_9__.IconDirective, _shared_components_reusables_list_table_simple_list_table_simple_component__WEBPACK_IMPORTED_MODULE_3__.ListTableSimpleComponent], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwcm9kdWN0LXN0b2NrLXdhcmVob3VzZS5jb21wb25lbnQuc2NzcyJ9 */"] });


/***/ }),

/***/ 84577:
/*!*********************************************************!*\
  !*** ./src/app/pages/product/product-routing.module.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProductRoutingModule": () => (/* binding */ ProductRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _components_product_list_product_list_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/product-list/product-list.component */ 51180);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 3184);




const routes = [
    {
        path: "",
        component: _components_product_list_product_list_component__WEBPACK_IMPORTED_MODULE_0__.ProductListComponent,
        data: {
            scrollDisabled: true,
            toolbarShadowEnabled: true,
        },
    },
];
class ProductRoutingModule {
}
ProductRoutingModule.ɵfac = function ProductRoutingModule_Factory(t) { return new (t || ProductRoutingModule)(); };
ProductRoutingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: ProductRoutingModule });
ProductRoutingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forChild(routes), _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](ProductRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule] }); })();


/***/ }),

/***/ 85888:
/*!*************************************************!*\
  !*** ./src/app/pages/product/product.module.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProductModule": () => (/* binding */ ProductModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _product_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./product-routing.module */ 84577);
/* harmony import */ var _components_product_list_product_list_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/product-list/product-list.component */ 51180);
/* harmony import */ var _components_product_manage_product_manage_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/product-manage/product-manage.component */ 16841);
/* harmony import */ var _components_product_stock_warehouse_product_stock_warehouse_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/product-stock-warehouse/product-stock-warehouse.component */ 3730);
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @shared/shared.module */ 44466);
/* harmony import */ var _shared_components_reusables_list_table_list_table_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @shared/components/reusables/list-table/list-table.component */ 26724);
/* harmony import */ var _shared_components_reusables_search_box_multiple_search_box_multiple_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @shared/components/reusables/search-box-multiple/search-box-multiple.component */ 3343);
/* harmony import */ var _shared_components_reusables_menu_menu_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @shared/components/reusables/menu/menu.component */ 57638);
/* harmony import */ var _shared_components_reusables_export_excel_export_excel_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @shared/components/reusables/export-excel/export-excel.component */ 39559);
/* harmony import */ var _shared_components_reusables_filter_date_range_ymd_filter_date_range_ymd_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @shared/components/reusables/filter-date-range-ymd/filter-date-range-ymd.component */ 60518);
/* harmony import */ var _shared_components_reusables_button_reset_filters_button_reset_filters_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @shared/components/reusables/button-reset-filters/button-reset-filters.component */ 93495);
/* harmony import */ var _shared_components_reusables_select_autocomplete_select_autocomplete_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @shared/components/reusables/select-autocomplete/select-autocomplete.component */ 12232);
/* harmony import */ var _shared_components_reusables_img_selector_img_selector_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @shared/components/reusables/img-selector/img-selector.component */ 20293);
/* harmony import */ var _shared_components_reusables_list_table_simple_list_table_simple_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @shared/components/reusables/list-table-simple/list-table-simple.component */ 28323);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/core */ 3184);
















class ProductModule {
}
ProductModule.ɵfac = function ProductModule_Factory(t) { return new (t || ProductModule)(); };
ProductModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵdefineNgModule"]({ type: ProductModule });
ProductModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵdefineInjector"]({ imports: [_angular_common__WEBPACK_IMPORTED_MODULE_15__.CommonModule,
        _product_routing_module__WEBPACK_IMPORTED_MODULE_0__.ProductRoutingModule,
        _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__.SharedModule,
        _shared_components_reusables_list_table_list_table_component__WEBPACK_IMPORTED_MODULE_5__.ListTableComponent,
        _shared_components_reusables_search_box_multiple_search_box_multiple_component__WEBPACK_IMPORTED_MODULE_6__.SearchBoxMultipleComponent,
        _shared_components_reusables_menu_menu_component__WEBPACK_IMPORTED_MODULE_7__.MenuComponent,
        _shared_components_reusables_export_excel_export_excel_component__WEBPACK_IMPORTED_MODULE_8__.ExportExcelComponent,
        _shared_components_reusables_filter_date_range_ymd_filter_date_range_ymd_component__WEBPACK_IMPORTED_MODULE_9__.FilterDateRangeYmdComponent,
        _shared_components_reusables_button_reset_filters_button_reset_filters_component__WEBPACK_IMPORTED_MODULE_10__.ButtonResetFiltersComponent,
        _shared_components_reusables_select_autocomplete_select_autocomplete_component__WEBPACK_IMPORTED_MODULE_11__.SelectAutocompleteComponent,
        _shared_components_reusables_img_selector_img_selector_component__WEBPACK_IMPORTED_MODULE_12__.ImgSelectorComponent,
        _shared_components_reusables_list_table_simple_list_table_simple_component__WEBPACK_IMPORTED_MODULE_13__.ListTableSimpleComponent] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵsetNgModuleScope"](ProductModule, { declarations: [_components_product_list_product_list_component__WEBPACK_IMPORTED_MODULE_1__.ProductListComponent,
        _components_product_manage_product_manage_component__WEBPACK_IMPORTED_MODULE_2__.ProductManageComponent,
        _components_product_stock_warehouse_product_stock_warehouse_component__WEBPACK_IMPORTED_MODULE_3__.ProductStockWarehouseComponent], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_15__.CommonModule,
        _product_routing_module__WEBPACK_IMPORTED_MODULE_0__.ProductRoutingModule,
        _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__.SharedModule,
        _shared_components_reusables_list_table_list_table_component__WEBPACK_IMPORTED_MODULE_5__.ListTableComponent,
        _shared_components_reusables_search_box_multiple_search_box_multiple_component__WEBPACK_IMPORTED_MODULE_6__.SearchBoxMultipleComponent,
        _shared_components_reusables_menu_menu_component__WEBPACK_IMPORTED_MODULE_7__.MenuComponent,
        _shared_components_reusables_export_excel_export_excel_component__WEBPACK_IMPORTED_MODULE_8__.ExportExcelComponent,
        _shared_components_reusables_filter_date_range_ymd_filter_date_range_ymd_component__WEBPACK_IMPORTED_MODULE_9__.FilterDateRangeYmdComponent,
        _shared_components_reusables_button_reset_filters_button_reset_filters_component__WEBPACK_IMPORTED_MODULE_10__.ButtonResetFiltersComponent,
        _shared_components_reusables_select_autocomplete_select_autocomplete_component__WEBPACK_IMPORTED_MODULE_11__.SelectAutocompleteComponent,
        _shared_components_reusables_img_selector_img_selector_component__WEBPACK_IMPORTED_MODULE_12__.ImgSelectorComponent,
        _shared_components_reusables_list_table_simple_list_table_simple_component__WEBPACK_IMPORTED_MODULE_13__.ListTableSimpleComponent] }); })();


/***/ }),

/***/ 37437:
/*!***********************************************************!*\
  !*** ./src/app/pages/product/services/product.service.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProductService": () => (/* binding */ ProductService)
/* harmony export */ });
/* harmony import */ var _shared_apis_endpoint__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @shared/apis/endpoint */ 62376);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ 86942);
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/environments/environment */ 92340);
/* harmony import */ var _shared_functions_helpers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @shared/functions/helpers */ 41325);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common/http */ 28784);
/* harmony import */ var _shared_services_alert_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @shared/services/alert.service */ 40704);







class ProductService {
    constructor(_http, _alert) {
        this._http = _http;
        this._alert = _alert;
    }
    GetAll(size, sort, order, page, getInputs) {
        const requestUrl = `${src_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.api}${_shared_apis_endpoint__WEBPACK_IMPORTED_MODULE_0__.endpoint.LIST_PRODUCTS}?records=${size}&sort=${sort}&order=${order}&numPage=${page + 1}${getInputs}`;
        return this._http
            .get(requestUrl)
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.map)((resp) => this.transformProductData(resp)));
    }
    transformProductData(response) {
        const badgeColor = {
            0: "text-gray bg-gray-light",
            1: "text-green bg-green-light",
        };
        response.data.forEach((product) => {
            product.badgeColor =
                badgeColor[product.state] || "text-gray bg-gray-light";
            product.icView = (0,_shared_functions_helpers__WEBPACK_IMPORTED_MODULE_2__.getIcon)("icVisibility", "Ver stock actual", true);
            product.icEdit = (0,_shared_functions_helpers__WEBPACK_IMPORTED_MODULE_2__.getIcon)("icEdit", "Editar Producto", true);
            product.icDelete = (0,_shared_functions_helpers__WEBPACK_IMPORTED_MODULE_2__.getIcon)("icDelete", "Eliminar Producto", true);
        });
        return response;
    }
    productById(productId) {
        const requestUrl = `${src_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.api}${_shared_apis_endpoint__WEBPACK_IMPORTED_MODULE_0__.endpoint.PRODUCT_BY_ID}${productId}`;
        return this._http.get(requestUrl).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.map)((resp) => {
            return resp.data;
        }));
    }
    productRegister(product) {
        const requestUrl = `${src_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.api}${_shared_apis_endpoint__WEBPACK_IMPORTED_MODULE_0__.endpoint.PRODUCT_REGISTER}`;
        const formDataProduct = this._builFormDataProduct(product);
        return this._http.post(requestUrl, formDataProduct);
    }
    productEdit(productId, product) {
        const requestUrl = `${src_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.api}${_shared_apis_endpoint__WEBPACK_IMPORTED_MODULE_0__.endpoint.PRODUCT_EDIT}${productId}`;
        const formDataProduct = this._builFormDataProduct(product);
        return this._http.put(requestUrl, formDataProduct);
    }
    productRemove(productId) {
        const requestUrl = `${src_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.api}${_shared_apis_endpoint__WEBPACK_IMPORTED_MODULE_0__.endpoint.PRODUCT_REMOVE}${productId}`;
        return this._http.put(requestUrl, "").pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.map)((resp) => {
            if (resp.isSuccess) {
                this._alert.success("Excelente", resp.message);
            }
        }));
    }
    productStockByWarehouse(productId) {
        const requestUrl = `${src_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.api}${_shared_apis_endpoint__WEBPACK_IMPORTED_MODULE_0__.endpoint.PRODUCT_STOCK_WAREHOUSE}${productId}`;
        return this._http.get(requestUrl).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.map)((resp) => {
            return resp.data;
        }));
    }
    _builFormDataProduct(product) {
        const formData = new FormData();
        formData.append("code", product.code),
            formData.append("name", product.name),
            formData.append("stockMin", product.stockMin.toString()),
            formData.append("stockMax", product.stockMax.toString()),
            formData.append("categoryId", product.categoryId.toString()),
            formData.append("state", product.state.toString()),
            formData.append("image", product.image),
            formData.append("unitSalePrice", product.unitSalePrice.toString());
        return formData;
    }
}
ProductService.ɵfac = function ProductService_Factory(t) { return new (t || ProductService)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_6__.HttpClient), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵinject"](_shared_services_alert_service__WEBPACK_IMPORTED_MODULE_3__.AlertService)); };
ProductService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjectable"]({ token: ProductService, factory: ProductService.ɵfac, providedIn: "root" });


/***/ }),

/***/ 20293:
/*!************************************************************************************!*\
  !*** ./src/app/shared/components/reusables/img-selector/img-selector.component.ts ***!
  \************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ImgSelectorComponent": () => (/* binding */ ImgSelectorComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @shared/shared.module */ 44466);
/* harmony import */ var _shared_services_icons_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @shared/services/icons.service */ 11612);
/* harmony import */ var _shared_functions_helpers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @shared/functions/helpers */ 41325);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/icon */ 65590);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/button */ 87317);
/* harmony import */ var _visurel_iconify_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @visurel/iconify-angular */ 57313);










function ImgSelectorComponent_div_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](1, "img", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("src", ctx_r1.imgBase64, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsanitizeUrl"]);
} }
function ImgSelectorComponent_div_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](1, "img", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("src", ctx_r2.urlCurrentImg, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsanitizeUrl"]);
} }
class ImgSelectorComponent {
    constructor() {
        this.selectedImage = new _angular_core__WEBPACK_IMPORTED_MODULE_3__.EventEmitter();
        this.icUpload = _shared_services_icons_service__WEBPACK_IMPORTED_MODULE_1__.IconsService.prototype.getIcon("icUpload");
    }
    ngOnInit() { }
    selectedImg(event) {
        if (event.target instanceof HTMLInputElement) {
            const inputElement = event.target;
            if (inputElement.files && inputElement.files.length > 0) {
                const file = inputElement.files[0];
                (0,_shared_functions_helpers__WEBPACK_IMPORTED_MODULE_2__.toBase64)(file).then((value) => (this.imgBase64 = value));
                this.selectedImage.emit(file);
                this.urlCurrentImg = null;
            }
        }
    }
}
ImgSelectorComponent.ɵfac = function ImgSelectorComponent_Factory(t) { return new (t || ImgSelectorComponent)(); };
ImgSelectorComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({ type: ImgSelectorComponent, selectors: [["app-img-selector"]], inputs: { urlCurrentImg: "urlCurrentImg" }, outputs: { selectedImage: "selectedImage" }, standalone: true, features: [_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵStandaloneFeature"]], decls: 10, vars: 3, consts: [[1, "flex", "justify-between"], [1, "mb-4", "mt-10"], ["type", "button", "mat-button", "", 1, "text-am-purple", "text-sm", "h-10", "font-medium", "w-full", "rounded-xl", 3, "click"], [3, "icIcon"], ["type", "file", "hidden", "", 3, "change"], ["imgSelector", ""], [4, "ngIf"], [1, "w-42", "h-32", "border", "border-dashed", "border-am-main-blue-light", "rounded", "flex", "flex-col", "justify-between", 3, "src"]], template: function ImgSelectorComponent_Template(rf, ctx) { if (rf & 1) {
        const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function ImgSelectorComponent_Template_button_click_2_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r3); const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵreference"](6); return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](_r0.click()); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3, " Subir imagen ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](4, "mat-icon", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "input", 4, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("change", function ImgSelectorComponent_Template_input_change_5_listener($event) { return ctx.selectedImg($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](8, ImgSelectorComponent_div_8_Template, 2, 1, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](9, ImgSelectorComponent_div_9_Template, 2, 1, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("icIcon", ctx.icUpload);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.imgBase64);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.urlCurrentImg && !ctx.imgBase64);
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _angular_common__WEBPACK_IMPORTED_MODULE_4__.NgIf, _shared_shared_module__WEBPACK_IMPORTED_MODULE_0__.SharedModule, _angular_material_icon__WEBPACK_IMPORTED_MODULE_5__.MatIcon, _angular_material_button__WEBPACK_IMPORTED_MODULE_6__.MatButton, _visurel_iconify_angular__WEBPACK_IMPORTED_MODULE_7__.IconDirective], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJpbWctc2VsZWN0b3IuY29tcG9uZW50LnNjc3MifQ== */"] });


/***/ }),

/***/ 28323:
/*!**********************************************************************************************!*\
  !*** ./src/app/shared/components/reusables/list-table-simple/list-table-simple.component.ts ***!
  \**********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ListTableSimpleComponent": () => (/* binding */ ListTableSimpleComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/form-field */ 44770);
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/paginator */ 9861);
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/table */ 97217);
/* harmony import */ var _shared_paginator_intl_es_paginator_intl__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @shared/paginator-intl/es-paginator-intl */ 1277);
/* harmony import */ var _shared_services_icons_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @shared/services/icons.service */ 11612);
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @shared/shared.module */ 44466);
/* harmony import */ var src_vex_animations_fade_in_up_animation__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/@vex/animations/fade-in-up.animation */ 33848);
/* harmony import */ var src_vex_animations_scale_fade_in_animation__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/@vex/animations/scale-fade-in.animation */ 68911);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/input */ 43365);
/* harmony import */ var _visurel_iconify_angular__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @visurel/iconify-angular */ 57313);
/* harmony import */ var _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/flex-layout/extended */ 13338);
















function ListTableSimpleComponent_ng_container_9_ng_container_1_th_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "th", 18)(1, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const column_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngClass", column_r5.cssLabel);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](column_r5.label);
} }
function ListTableSimpleComponent_ng_container_9_ng_container_1_td_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "td", 19)(1, "div")(2, "p", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](4, "titlecase");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
} if (rf & 2) {
    const row_r12 = ctx.$implicit;
    const column_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngClass", column_r5.cssProperty);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](4, 2, row_r12[column_r5.property].toString()), " ");
} }
function ListTableSimpleComponent_ng_container_9_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerStart"](0, 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](1, ListTableSimpleComponent_ng_container_9_ng_container_1_th_1_Template, 3, 2, "th", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](2, ListTableSimpleComponent_ng_container_9_ng_container_1_td_2_Template, 5, 4, "td", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const column_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("matColumnDef", column_r5.property);
} }
function ListTableSimpleComponent_ng_container_9_ng_container_2_th_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "th", 18)(1, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const column_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngClass", column_r5.cssLabel);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](column_r5.label);
} }
function ListTableSimpleComponent_ng_container_9_ng_container_2_td_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "td", 19)(1, "div")(2, "p", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
} if (rf & 2) {
    const row_r18 = ctx.$implicit;
    const column_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngClass", column_r5.cssProperty);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", row_r18[column_r5.property], " ");
} }
function ListTableSimpleComponent_ng_container_9_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerStart"](0, 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](1, ListTableSimpleComponent_ng_container_9_ng_container_2_th_1_Template, 3, 2, "th", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](2, ListTableSimpleComponent_ng_container_9_ng_container_2_td_2_Template, 4, 2, "td", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const column_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("matColumnDef", column_r5.property);
} }
function ListTableSimpleComponent_ng_container_9_ng_container_3_th_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "th", 18)(1, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const column_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngClass", column_r5.cssLabel);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](column_r5.label);
} }
function ListTableSimpleComponent_ng_container_9_ng_container_3_td_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "td", 19)(1, "div")(2, "p", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](4, "currency");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
} if (rf & 2) {
    const row_r24 = ctx.$implicit;
    const column_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngClass", column_r5.cssProperty);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind3"](4, 2, row_r24[column_r5.property], "", ""), " ");
} }
function ListTableSimpleComponent_ng_container_9_ng_container_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerStart"](0, 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](1, ListTableSimpleComponent_ng_container_9_ng_container_3_th_1_Template, 3, 2, "th", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](2, ListTableSimpleComponent_ng_container_9_ng_container_3_td_2_Template, 5, 6, "td", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const column_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("matColumnDef", column_r5.property);
} }
function ListTableSimpleComponent_ng_container_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](1, ListTableSimpleComponent_ng_container_9_ng_container_1_Template, 3, 1, "ng-container", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](2, ListTableSimpleComponent_ng_container_9_ng_container_2_Template, 3, 1, "ng-container", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](3, ListTableSimpleComponent_ng_container_9_ng_container_3_Template, 3, 1, "ng-container", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const column_r5 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", column_r5.type === "text");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", column_r5.type === "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", column_r5.type === "currency");
} }
function ListTableSimpleComponent_tr_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](0, "tr", 21);
} }
function ListTableSimpleComponent_tr_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](0, "tr", 22);
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("@fadeInUp", undefined);
} }
function ListTableSimpleComponent_div_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](1, "img", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](2, "h2", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](3, "No hay resultados en esta b\u00FAsqueda");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("@scaleFadeIn", undefined);
} }
class ListTableSimpleComponent {
    constructor() {
        this.rowClick = new _angular_core__WEBPACK_IMPORTED_MODULE_5__.EventEmitter();
        this.paginatorOptions = {
            pageSizeOptions: [5, 10, 20],
            pageSize: [5],
            pageLength: 0
        };
        this.icSearch = _shared_services_icons_service__WEBPACK_IMPORTED_MODULE_1__.IconsService.prototype.getIcon("icSearch");
    }
    ngOnInit() {
        if (this.data) {
            this.visibleColumns = this.columns.filter((column) => column.visible).map((column) => column.property);
            this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_6__.MatTableDataSource(this.data);
        }
    }
    ngAfterViewInit() {
        this.dataSource.paginator = this.paginator;
    }
    applyFilter(event) {
        const filterValue = event.target.value;
        this.dataSource.filter = filterValue.trim().toLowerCase();
    }
}
ListTableSimpleComponent.ɵfac = function ListTableSimpleComponent_Factory(t) { return new (t || ListTableSimpleComponent)(); };
ListTableSimpleComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({ type: ListTableSimpleComponent, selectors: [["app-list-table-simple"]], viewQuery: function ListTableSimpleComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵviewQuery"](_angular_material_paginator__WEBPACK_IMPORTED_MODULE_7__.MatPaginator, 5);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵloadQuery"]()) && (ctx.paginator = _t.first);
    } }, inputs: { columns: "columns", data: "data" }, outputs: { rowClick: "rowClick" }, standalone: true, features: [_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵProvidersFeature"]([
            { provide: _angular_material_paginator__WEBPACK_IMPORTED_MODULE_7__.MatPaginatorIntl, useValue: (0,_shared_paginator_intl_es_paginator_intl__WEBPACK_IMPORTED_MODULE_0__.getEsPaginatorIntl)() },
            {
                provide: _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__.MAT_FORM_FIELD_DEFAULT_OPTIONS,
                useValue: { appearance: "standard" }
            }
        ]), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵStandaloneFeature"]], decls: 15, vars: 16, consts: [[1, "h-full", "flex", "flex-col", "relative", "gap-4"], [1, "flex", "justify-end"], [1, "flex", "items-center", "bg-white", "border", "border-am-main-blue-light", "rounded-xl", "overflow-hidden", "w-72"], [1, "bg-white", "rounded-sm", "text-am-purple-dark", "p-2"], ["size", "24px", 1, "flex-none", 3, "icIcon"], ["matInput", "", "placeholder", "Buscar ...", "maxlength", "20", 1, "border-0", "h-11", "outline-none", "rtl:pr-4", "placeholder:text-secondary", "bg-card", "flex-auto", 3, "keyup"], ["input", ""], ["mat-table", "", 1, "w-full", 3, "dataSource"], [4, "ngFor", "ngForOf"], ["mat-header-row", "", "class", "h-12", 4, "matHeaderRowDef", "matHeaderRowDefSticky"], ["mat-row", "", "class", "h-12", 4, "matRowDef", "matRowDefColumns"], ["class", "hide-table flex h-full flex-col justify-center items-center", 4, "ngIf"], [1, "h-24", "flex", "gap-4", "justify-between", "items-center", "flex-grap", "mx-10", "my-2"], [3, "pageSizeOptions", "pageSize", "length", "showFirstLastButtons"], [3, "matColumnDef", 4, "ngIf"], [3, "matColumnDef"], ["mat-header-cell", "", 3, "ngClass", 4, "matHeaderCellDef"], ["mat-cell", "", 4, "matCellDef"], ["mat-header-cell", "", 3, "ngClass"], ["mat-cell", ""], [3, "ngClass"], ["mat-header-row", "", 1, "h-12"], ["mat-row", "", 1, "h-12"], [1, "hide-table", "flex", "h-full", "flex-col", "justify-center", "items-center"], ["src", "assets/img/illustrations/idea.svg", 1, "m-12", "h-64"], [1, "headline", "m-0", "text-center"]], template: function ListTableSimpleComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](4, "ic-icon", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](5, "input", 5, 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("keyup", function ListTableSimpleComponent_Template_input_keyup_5_listener($event) { return ctx.applyFilter($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](7, "div")(8, "table", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](9, ListTableSimpleComponent_ng_container_9_Template, 4, 3, "ng-container", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](10, ListTableSimpleComponent_tr_10_Template, 1, 0, "tr", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](11, ListTableSimpleComponent_tr_11_Template, 1, 1, "tr", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](12, ListTableSimpleComponent_div_12_Template, 4, 1, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](13, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](14, "mat-paginator", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("icIcon", ctx.icSearch);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵclassProp"]("overflow-auto", ctx.dataSource.filteredData.length);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("@scaleFadeIn", ctx.dataSource.filteredData)("dataSource", ctx.dataSource);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", ctx.columns);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("matHeaderRowDef", ctx.visibleColumns)("matHeaderRowDefSticky", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("matRowDefColumns", ctx.visibleColumns);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.dataSource.filteredData.length === 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵclassProp"]("hidden", !ctx.dataSource.filteredData.length);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("pageSizeOptions", ctx.paginatorOptions.pageSizeOptions)("pageSize", ctx.paginatorOptions.pageSize)("length", ctx.paginatorOptions.pageLength)("showFirstLastButtons", true);
    } }, dependencies: [_shared_shared_module__WEBPACK_IMPORTED_MODULE_2__.SharedModule, _angular_common__WEBPACK_IMPORTED_MODULE_9__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_9__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_9__.NgIf, _angular_material_table__WEBPACK_IMPORTED_MODULE_6__.MatTable, _angular_material_table__WEBPACK_IMPORTED_MODULE_6__.MatHeaderCellDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_6__.MatHeaderRowDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_6__.MatColumnDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_6__.MatCellDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_6__.MatRowDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_6__.MatHeaderCell, _angular_material_table__WEBPACK_IMPORTED_MODULE_6__.MatCell, _angular_material_table__WEBPACK_IMPORTED_MODULE_6__.MatHeaderRow, _angular_material_table__WEBPACK_IMPORTED_MODULE_6__.MatRow, _angular_material_paginator__WEBPACK_IMPORTED_MODULE_7__.MatPaginator, _angular_material_input__WEBPACK_IMPORTED_MODULE_10__.MatInput, _visurel_iconify_angular__WEBPACK_IMPORTED_MODULE_11__.IconDirective, _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_12__.DefaultClassDirective, _angular_common__WEBPACK_IMPORTED_MODULE_9__.TitleCasePipe, _angular_common__WEBPACK_IMPORTED_MODULE_9__.CurrencyPipe], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJsaXN0LXRhYmxlLXNpbXBsZS5jb21wb25lbnQuc2NzcyJ9 */"], data: { animation: [src_vex_animations_scale_fade_in_animation__WEBPACK_IMPORTED_MODULE_4__.scaleFadeIn400ms, src_vex_animations_fade_in_up_animation__WEBPACK_IMPORTED_MODULE_3__.fadeInUp400ms] } });


/***/ }),

/***/ 28549:
/*!************************************************************!*\
  !*** ./src/app/shared/services/category-select.service.ts ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CategorySelectService": () => (/* binding */ CategorySelectService)
/* harmony export */ });
/* harmony import */ var _shared_apis_endpoint__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @shared/apis/endpoint */ 62376);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ 86942);
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/environments/environment */ 92340);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ 28784);





class CategorySelectService {
    constructor(_http) {
        this._http = _http;
    }
    listSelectCategories() {
        const requestUrl = `${src_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.api}${_shared_apis_endpoint__WEBPACK_IMPORTED_MODULE_0__.endpoint.LIST_SELECT_CATEGORIES}`;
        return this._http.get(requestUrl).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.map)((resp) => {
            return resp.data;
        }));
    }
}
CategorySelectService.ɵfac = function CategorySelectService_Factory(t) { return new (t || CategorySelectService)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_4__.HttpClient)); };
CategorySelectService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjectable"]({ token: CategorySelectService, factory: CategorySelectService.ɵfac, providedIn: "root" });


/***/ })

}]);
//# sourceMappingURL=src_app_pages_product_product_module_ts.js.map