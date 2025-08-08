"use strict";
(self["webpackChunkvex"] = self["webpackChunkvex"] || []).push([["src_app_pages_client_client_module_ts"],{

/***/ 67320:
/*!*******************************************************!*\
  !*** ./src/app/pages/client/client-routing.module.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ClientRoutingModule": () => (/* binding */ ClientRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _components_client_list_client_list_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/client-list/client-list.component */ 70499);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 3184);




const routes = [
    {
        path: '',
        component: _components_client_list_client_list_component__WEBPACK_IMPORTED_MODULE_0__.ClientListComponent,
        data: {
            scrollDisabled: true,
            toolbarShadowEnabled: true
        }
    }
];
class ClientRoutingModule {
}
ClientRoutingModule.ɵfac = function ClientRoutingModule_Factory(t) { return new (t || ClientRoutingModule)(); };
ClientRoutingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: ClientRoutingModule });
ClientRoutingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forChild(routes), _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](ClientRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule] }); })();


/***/ }),

/***/ 54373:
/*!***********************************************!*\
  !*** ./src/app/pages/client/client.module.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ClientModule": () => (/* binding */ ClientModule)
/* harmony export */ });
/* harmony import */ var _client_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./client-routing.module */ 67320);
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @shared/shared.module */ 44466);
/* harmony import */ var _shared_components_reusables_list_table_list_table_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @shared/components/reusables/list-table/list-table.component */ 26724);
/* harmony import */ var _shared_components_reusables_search_box_multiple_search_box_multiple_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @shared/components/reusables/search-box-multiple/search-box-multiple.component */ 3343);
/* harmony import */ var _shared_components_reusables_menu_menu_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @shared/components/reusables/menu/menu.component */ 57638);
/* harmony import */ var _shared_components_reusables_export_excel_export_excel_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @shared/components/reusables/export-excel/export-excel.component */ 39559);
/* harmony import */ var _shared_components_reusables_filter_date_range_ymd_filter_date_range_ymd_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @shared/components/reusables/filter-date-range-ymd/filter-date-range-ymd.component */ 60518);
/* harmony import */ var _shared_components_reusables_button_reset_filters_button_reset_filters_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @shared/components/reusables/button-reset-filters/button-reset-filters.component */ 93495);
/* harmony import */ var _components_client_list_client_list_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/client-list/client-list.component */ 70499);
/* harmony import */ var _components_client_manage_client_manage_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/client-manage/client-manage.component */ 66943);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/core */ 3184);











class ClientModule {
}
ClientModule.ɵfac = function ClientModule_Factory(t) { return new (t || ClientModule)(); };
ClientModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdefineNgModule"]({ type: ClientModule });
ClientModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdefineInjector"]({ imports: [_client_routing_module__WEBPACK_IMPORTED_MODULE_0__.ClientRoutingModule,
        _shared_shared_module__WEBPACK_IMPORTED_MODULE_1__.SharedModule,
        _shared_components_reusables_list_table_list_table_component__WEBPACK_IMPORTED_MODULE_2__.ListTableComponent,
        _shared_components_reusables_search_box_multiple_search_box_multiple_component__WEBPACK_IMPORTED_MODULE_3__.SearchBoxMultipleComponent,
        _shared_components_reusables_menu_menu_component__WEBPACK_IMPORTED_MODULE_4__.MenuComponent,
        _shared_components_reusables_export_excel_export_excel_component__WEBPACK_IMPORTED_MODULE_5__.ExportExcelComponent,
        _shared_components_reusables_filter_date_range_ymd_filter_date_range_ymd_component__WEBPACK_IMPORTED_MODULE_6__.FilterDateRangeYmdComponent,
        _shared_components_reusables_button_reset_filters_button_reset_filters_component__WEBPACK_IMPORTED_MODULE_7__.ButtonResetFiltersComponent] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵsetNgModuleScope"](ClientModule, { declarations: [_components_client_list_client_list_component__WEBPACK_IMPORTED_MODULE_8__.ClientListComponent,
        _components_client_manage_client_manage_component__WEBPACK_IMPORTED_MODULE_9__.ClientManageComponent], imports: [_client_routing_module__WEBPACK_IMPORTED_MODULE_0__.ClientRoutingModule,
        _shared_shared_module__WEBPACK_IMPORTED_MODULE_1__.SharedModule,
        _shared_components_reusables_list_table_list_table_component__WEBPACK_IMPORTED_MODULE_2__.ListTableComponent,
        _shared_components_reusables_search_box_multiple_search_box_multiple_component__WEBPACK_IMPORTED_MODULE_3__.SearchBoxMultipleComponent,
        _shared_components_reusables_menu_menu_component__WEBPACK_IMPORTED_MODULE_4__.MenuComponent,
        _shared_components_reusables_export_excel_export_excel_component__WEBPACK_IMPORTED_MODULE_5__.ExportExcelComponent,
        _shared_components_reusables_filter_date_range_ymd_filter_date_range_ymd_component__WEBPACK_IMPORTED_MODULE_6__.FilterDateRangeYmdComponent,
        _shared_components_reusables_button_reset_filters_button_reset_filters_component__WEBPACK_IMPORTED_MODULE_7__.ButtonResetFiltersComponent] }); })();


/***/ }),

/***/ 52729:
/*!***************************************************************************!*\
  !*** ./src/app/pages/client/components/client-list/client-list-config.ts ***!
  \***************************************************************************/
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
    {
        label: "Email",
        value: 2,
        placeholder: "Buscar por Email",
        validation: [_shared_validators_generic_validators__WEBPACK_IMPORTED_MODULE_1__.GenericValidators.emailValidation],
        validation_desc: "Sólo se permite correos válidos.",
        icon: "icMail",
    },
    {
        label: "N° Documento",
        value: 3,
        placeholder: "Buscar por N° Documento",
        validation: [_shared_validators_generic_validators__WEBPACK_IMPORTED_MODULE_1__.GenericValidators.dni],
        validation_desc: "Sólo se permite documentos válidos.",
        icon: "icDescription",
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
        type: "textUppercase",
        sticky: true,
        sort: true,
        sortProperty: "name",
        visible: true,
        download: true,
    },
    {
        label: "EMAIL",
        cssLabel: ["font-bold", "text-sm"],
        property: "email",
        cssProperty: ["font-semibold", "text-sm", "text-left"],
        type: "text",
        sticky: false,
        sort: true,
        sortProperty: "email",
        visible: true,
        download: true,
    },
    {
        label: "TIPO DOCUMENTO",
        cssLabel: ["font-bold", "text-sm"],
        property: "documentType",
        cssProperty: ["font-semibold", "text-sm", "text-left"],
        type: "text",
        sticky: false,
        sort: true,
        sortProperty: "documentType",
        visible: true,
        download: true,
    },
    {
        label: "N° DOCUMENTO",
        cssLabel: ["font-bold", "text-sm"],
        property: "documentNumber",
        cssProperty: ["font-semibold", "text-sm", "text-left"],
        type: "text",
        sticky: false,
        sort: true,
        sortProperty: "documentNumber",
        visible: true,
        download: true,
    },
    {
        label: "DIRECCIÓN",
        cssLabel: ["font-bold", "text-sm"],
        property: "address",
        cssProperty: ["font-semibold", "text-sm", "text-left"],
        type: "text",
        sticky: false,
        sort: true,
        sortProperty: "address",
        visible: true,
        download: true,
    },
    {
        label: "TELÉFONO",
        cssLabel: ["font-bold", "text-sm"],
        property: "phone",
        cssProperty: ["font-semibold", "text-sm", "text-left"],
        type: "text",
        sticky: false,
        sort: true,
        sortProperty: "phone",
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
        property: "stateClient",
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
    icClient: _shared_services_icons_service__WEBPACK_IMPORTED_MODULE_0__.IconsService.prototype.getIcon("icClient"),
    searchOptions,
    menuItems,
    tableColumns,
    initialSort: "Id",
    initialSortDir: "desc",
    filters,
    resetFilters,
    getInputs,
    filename: "listado-de-clientes",
};


/***/ }),

/***/ 70499:
/*!******************************************************************************!*\
  !*** ./src/app/pages/client/components/client-list/client-list.component.ts ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ClientListComponent": () => (/* binding */ ClientListComponent)
/* harmony export */ });
/* harmony import */ var src_vex_animations_fade_in_right_animation__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/@vex/animations/fade-in-right.animation */ 16496);
/* harmony import */ var src_vex_animations_scale_in_animation__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/@vex/animations/scale-in.animation */ 49597);
/* harmony import */ var src_vex_animations_stagger_animation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/@vex/animations/stagger.animation */ 48535);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/dialog */ 95758);
/* harmony import */ var _client_list_config__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./client-list-config */ 52729);
/* harmony import */ var _client_manage_client_manage_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../client-manage/client-manage.component */ 66943);
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! sweetalert2 */ 60598);
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _shared_services_custom_title_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @shared/services/custom-title.service */ 31421);
/* harmony import */ var _services_client_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../services/client.service */ 81776);
/* harmony import */ var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/sidenav */ 7216);
/* harmony import */ var _visurel_iconify_angular__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @visurel/iconify-angular */ 57313);
/* harmony import */ var _shared_components_reusables_list_table_list_table_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../shared/components/reusables/list-table/list-table.component */ 26724);
/* harmony import */ var _shared_components_reusables_search_box_multiple_search_box_multiple_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../shared/components/reusables/search-box-multiple/search-box-multiple.component */ 3343);
/* harmony import */ var _shared_components_reusables_menu_menu_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../../shared/components/reusables/menu/menu.component */ 57638);
/* harmony import */ var _shared_components_reusables_export_excel_export_excel_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../../shared/components/reusables/export-excel/export-excel.component */ 39559);
/* harmony import */ var _shared_components_reusables_filter_date_range_ymd_filter_date_range_ymd_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../../shared/components/reusables/filter-date-range-ymd/filter-date-range-ymd.component */ 60518);
/* harmony import */ var _shared_components_reusables_button_reset_filters_button_reset_filters_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../../../shared/components/reusables/button-reset-filters/button-reset-filters.component */ 93495);



















class ClientListComponent {
    constructor(customTitle, _clientService, _dialog) {
        this._clientService = _clientService;
        this._dialog = _dialog;
        customTitle.set("Clientes");
    }
    ngOnInit() {
        this.component = _client_list_config__WEBPACK_IMPORTED_MODULE_3__.componentSettings;
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
    setGetInputsClients(refresh) {
        this.component.filters.refresh = refresh;
        this.formatGetInputs();
    }
    get getDownloadUrl() {
        return `Client?Download=True`;
    }
    openDialogRegister() {
        this._dialog
            .open(_client_manage_client_manage_component__WEBPACK_IMPORTED_MODULE_4__.ClientManageComponent, {
            disableClose: true,
            width: "400px",
            data: { mode: "register" },
        })
            .afterClosed()
            .subscribe((res) => {
            if (res) {
                this.setGetInputsClients(true);
            }
        });
    }
    rowClick(rowClick) {
        let action = rowClick.action;
        let client = rowClick.row;
        switch (action) {
            case "edit":
                this.clientEdit(client);
                break;
            case "remove":
                this.clientRemove(client);
                break;
        }
    }
    clientEdit(clientData) {
        const dialogConfig = new _angular_material_dialog__WEBPACK_IMPORTED_MODULE_14__.MatDialogConfig();
        dialogConfig.data = clientData;
        this._dialog
            .open(_client_manage_client_manage_component__WEBPACK_IMPORTED_MODULE_4__.ClientManageComponent, {
            data: { dialogConfig, mode: "edit" },
            disableClose: true,
            width: "400px",
        })
            .afterClosed()
            .subscribe((resp) => {
            if (resp) {
                this.setGetInputsClients(true);
            }
        });
    }
    clientRemove(clientData) {
        sweetalert2__WEBPACK_IMPORTED_MODULE_5___default().fire({
            title: `¿Realmente deseas eliminar el cliente ${clientData.name}?`,
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
                this._clientService
                    .clientRemove(clientData.clientId)
                    .subscribe(() => this.setGetInputsClients(true));
            }
        });
    }
}
ClientListComponent.ɵfac = function ClientListComponent_Factory(t) { return new (t || ClientListComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵdirectiveInject"](_shared_services_custom_title_service__WEBPACK_IMPORTED_MODULE_6__.CustomTitleService), _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵdirectiveInject"](_services_client_service__WEBPACK_IMPORTED_MODULE_7__.ClientService), _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_14__.MatDialog)); };
ClientListComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵdefineComponent"]({ type: ClientListComponent, selectors: [["vex-client-list"]], decls: 21, vars: 18, consts: [[1, "w-full", "h-full", "flex", "flex-col"], [1, "px-gutter", "pt-1", "pb-20", "bg-primary", "flex-none"], [1, "flex", "items-center", "justify-between"], [1, "headline", "text-primary-contrast", "m-0", "flex", "items-center", "w-full", "max-w-xxxl", "mr-6"], [1, "hidden", "sm:block", 3, "icon"], [1, "ml-4", "block"], [1, "flex", "items-center", "justify-end", "w-full", "mt-5"], [1, "flex", "justify-between"], [3, "start", "end", "rangeDate"], [3, "buttonClick"], [1, "flex", "justify-between", "ml-6"], [3, "searchOptions", "currentValue", "search"], [3, "url", "getInputs", "filename"], [1, "-mt-14", "pt-0", "overflow-hidden", "flex"], [1, "bg-transparent", "flex-auto", "flex"], [1, "p-gutter", "pt-0", "flex-auto", "flex", "items-start"], ["buttonLabel", "AGREGAR", 1, "hidden", "sm:block", "mr-6", 3, "currentMenu", "items", "buttonShow", "filterChange", "buttonClick"], [1, "card", "h-full", "overflow-hidden", "flex-auto"], [3, "service", "columns", "sortBy", "sortDir", "getInputs", "rowClick"]], template: function ClientListComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "h2", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](4, "ic-icon", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](5, "span", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](6, "Gesti\u00F3n de Clientes");
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](7, "div", 6)(8, "div", 7)(9, "app-filter-date-range-ymd", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵlistener"]("rangeDate", function ClientListComponent_Template_app_filter_date_range_ymd_rangeDate_9_listener($event) { return ctx.searchDateRange($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](10, "app-button-reset-filters", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵlistener"]("buttonClick", function ClientListComponent_Template_app_button_reset_filters_buttonClick_10_listener() { return ctx.resetFilters(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](11, "div", 10)(12, "app-search-box-multiple", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵlistener"]("search", function ClientListComponent_Template_app_search_box_multiple_search_12_listener($event) { return ctx.search($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](13, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](14, "app-export-excel", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](15, "div", 13)(16, "mat-drawer-container", 14)(17, "mat-drawer-content", 15)(18, "app-menu", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵlistener"]("filterChange", function ClientListComponent_Template_app_menu_filterChange_18_listener($event) { return ctx.setMenu($event); })("buttonClick", function ClientListComponent_Template_app_menu_buttonClick_18_listener() { return ctx.openDialogRegister(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](19, "div", 17)(20, "app-list-table", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵlistener"]("rowClick", function ClientListComponent_Template_app_list_table_rowClick_20_listener($event) { return ctx.rowClick($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()()()()()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("@scaleIn", undefined)("icon", ctx.component.icClient);
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
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("service", ctx._clientService)("columns", ctx.component.tableColumns)("sortBy", ctx.component.initialSort)("sortDir", ctx.component.initialSortDir)("getInputs", ctx.component.getInputs);
    } }, dependencies: [_angular_material_sidenav__WEBPACK_IMPORTED_MODULE_16__.MatDrawerContainer, _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_16__.MatDrawerContent, _visurel_iconify_angular__WEBPACK_IMPORTED_MODULE_17__.IconDirective, _shared_components_reusables_list_table_list_table_component__WEBPACK_IMPORTED_MODULE_8__.ListTableComponent, _shared_components_reusables_search_box_multiple_search_box_multiple_component__WEBPACK_IMPORTED_MODULE_9__.SearchBoxMultipleComponent, _shared_components_reusables_menu_menu_component__WEBPACK_IMPORTED_MODULE_10__.MenuComponent, _shared_components_reusables_export_excel_export_excel_component__WEBPACK_IMPORTED_MODULE_11__.ExportExcelComponent, _shared_components_reusables_filter_date_range_ymd_filter_date_range_ymd_component__WEBPACK_IMPORTED_MODULE_12__.FilterDateRangeYmdComponent, _shared_components_reusables_button_reset_filters_button_reset_filters_component__WEBPACK_IMPORTED_MODULE_13__.ButtonResetFiltersComponent], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjbGllbnQtbGlzdC5jb21wb25lbnQuc2NzcyJ9 */"], data: { animation: [src_vex_animations_stagger_animation__WEBPACK_IMPORTED_MODULE_2__.stagger40ms, src_vex_animations_scale_in_animation__WEBPACK_IMPORTED_MODULE_1__.scaleIn400ms, src_vex_animations_fade_in_right_animation__WEBPACK_IMPORTED_MODULE_0__.fadeInRight400ms] } });


/***/ }),

/***/ 66943:
/*!**********************************************************************************!*\
  !*** ./src/app/pages/client/components/client-manage/client-manage.component.ts ***!
  \**********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ClientManageComponent": () => (/* binding */ ClientManageComponent)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/dialog */ 95758);
/* harmony import */ var _shared_services_icons_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @shared/services/icons.service */ 11612);
/* harmony import */ var src_static_data_configs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/static-data/configs */ 64033);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _shared_services_document_type_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @shared/services/document-type.service */ 63905);
/* harmony import */ var _services_client_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/client.service */ 81776);
/* harmony import */ var _shared_services_alert_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @shared/services/alert.service */ 40704);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/icon */ 65590);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/button */ 87317);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/form-field */ 44770);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/input */ 43365);
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/select */ 91434);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/core */ 88133);
/* harmony import */ var _visurel_iconify_angular__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @visurel/iconify-angular */ 57313);


















function ClientManageComponent_mat_error_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, " Campo Nombre es requerido. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} }
function ClientManageComponent_mat_error_17_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, " Campo Email es requerido. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} }
function ClientManageComponent_mat_option_22_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "mat-option", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r7 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("value", item_r7.documentTypeId);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", item_r7.abbreviation, " ");
} }
function ClientManageComponent_mat_error_23_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, " Campo Tipo de Documento es requerido. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} }
function ClientManageComponent_mat_error_28_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, " Campo N\u00B0 Documento es requerido. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} }
function ClientManageComponent_mat_option_41_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "mat-option", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const state_r8 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("value", state_r8.value);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", state_r8.label, " ");
} }
function ClientManageComponent_mat_error_42_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, " Campo Estado es requerido. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} }
class ClientManageComponent {
    constructor(data, _fb, _documentTypeService, _clientService, _alert, _dialogRef) {
        this.data = data;
        this._fb = _fb;
        this._documentTypeService = _documentTypeService;
        this._clientService = _clientService;
        this._alert = _alert;
        this._dialogRef = _dialogRef;
        this.icClose = _shared_services_icons_service__WEBPACK_IMPORTED_MODULE_0__.IconsService.prototype.getIcon("icClose");
        this.configs = src_static_data_configs__WEBPACK_IMPORTED_MODULE_1__.statesSelect;
        this.initForm();
    }
    initForm() {
        this.form = this._fb.group({
            clientId: [0, [_angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required]],
            name: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required]],
            email: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required]],
            documentTypeId: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required]],
            documentNumber: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required]],
            address: [""],
            phone: [""],
            state: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required]],
        });
    }
    ngOnInit() {
        this.listDocumentTypes();
        if (this.data.mode == "edit") {
            this.clientById(this.data.dialogConfig.data.clientId);
        }
    }
    clientById(clientId) {
        this._clientService.clientById(clientId).subscribe((resp) => {
            this.form.reset({
                clientId: resp.clientId,
                name: resp.name,
                email: resp.email,
                documentTypeId: resp.documentTypeId,
                documentNumber: resp.documentNumber,
                address: resp.address,
                phone: resp.phone,
                state: resp.state,
            });
        });
    }
    listDocumentTypes() {
        this._documentTypeService.listDocumentTypes().subscribe((resp) => {
            this.documentTypes = resp;
        });
    }
    clientSave() {
        if (this.form.invalid) {
            return Object.values(this.form.controls).forEach((controls) => {
                controls.markAllAsTouched();
            });
        }
        const clientId = this.form.get("clientId").value;
        if (clientId > 0) {
            this.clientEdit(clientId);
        }
        else {
            this.clientRegister();
        }
    }
    clientRegister() {
        this._clientService.clientRegister(this.form.value).subscribe((resp) => {
            if (resp.isSuccess) {
                this._alert.success("Excelente", resp.message);
                this._dialogRef.close(true);
            }
            else {
                this._alert.warn("Atención", resp.message);
            }
        });
    }
    clientEdit(clientId) {
        this._clientService
            .clientEdit(clientId, this.form.value)
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
ClientManageComponent.ɵfac = function ClientManageComponent_Factory(t) { return new (t || ClientManageComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_7__.MAT_DIALOG_DATA), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_shared_services_document_type_service__WEBPACK_IMPORTED_MODULE_2__.DocumentTypeService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_services_client_service__WEBPACK_IMPORTED_MODULE_3__.ClientService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_shared_services_alert_service__WEBPACK_IMPORTED_MODULE_4__.AlertService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_7__.MatDialogRef)); };
ClientManageComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({ type: ClientManageComponent, selectors: [["vex-client-manage"]], decls: 48, vars: 11, consts: [[3, "formGroup", "ngSubmit"], ["mat-dialog-title", "", 1, "flex", "justify-between"], [1, "headline", "m-0", "text-xl", "text-accent"], ["mat-dialog-close", "", "mat-icon-button", "", 1, "text-secondary"], [3, "icIcon"], ["appearance", "outline", 1, "w-full"], ["matInput", "", "formControlName", "name"], [4, "ngIf"], ["matInput", "", "formControlName", "email"], ["formControlName", "documentTypeId"], [3, "value", 4, "ngFor", "ngForOf"], ["matInput", "", "formControlName", "documentNumber"], ["matInput", "", "formControlName", "phone"], ["matInput", "", "formControlName", "address"], ["formControlName", "state"], ["align", "end"], ["mat-button", "", "mat-dialog-close", ""], ["color", "purple", "mat-button", "", "type", "submit", 1, "bg-accent", "text-accent-contrast", 3, "disabled"], [3, "value"]], template: function ClientManageComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "form", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("ngSubmit", function ClientManageComponent_Template_form_ngSubmit_0_listener() { return ctx.clientSave(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "div", 1)(2, "h2", 2)(3, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](5, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](6, "mat-icon", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](7, "mat-dialog-content")(8, "mat-form-field", 5)(9, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](10, "Nombre");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](11, "input", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](12, ClientManageComponent_mat_error_12_Template, 2, 0, "mat-error", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](13, "mat-form-field", 5)(14, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](15, "Email");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](16, "input", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](17, ClientManageComponent_mat_error_17_Template, 2, 0, "mat-error", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](18, "mat-form-field", 5)(19, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](20, "Tipo de Documento");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](21, "mat-select", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](22, ClientManageComponent_mat_option_22_Template, 2, 2, "mat-option", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](23, ClientManageComponent_mat_error_23_Template, 2, 0, "mat-error", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](24, "mat-form-field", 5)(25, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](26, "N\u00B0 Documento");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](27, "input", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](28, ClientManageComponent_mat_error_28_Template, 2, 0, "mat-error", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](29, "mat-form-field", 5)(30, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](31, "Tel\u00E9fono");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](32, "input", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](33, "mat-form-field", 5)(34, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](35, "Direcci\u00F3n");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](36, "input", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](37, "mat-form-field", 5)(38, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](39, "Estado");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](40, "mat-select", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](41, ClientManageComponent_mat_option_41_Template, 2, 2, "mat-option", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](42, ClientManageComponent_mat_error_42_Template, 2, 0, "mat-error", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](43, "mat-dialog-actions", 15)(44, "button", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](45, "CANCELAR");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](46, "button", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](47, " GUARDAR ");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("formGroup", ctx.form);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](ctx.data.mode == "register" ? "Registrar Nuevo Cliente" : "Actualizar Cliente");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("icIcon", ctx.icClose);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.form.get("name").hasError("required"));
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.form.get("email").hasError("required"));
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", ctx.documentTypes);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.form.get("documentTypeId").hasError("required"));
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.form.get("documentNumber").hasError("required"));
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", ctx.configs);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.form.get("state").hasError("required"));
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("disabled", ctx.form.invalid);
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_8__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_8__.NgIf, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_7__.MatDialogClose, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_7__.MatDialogTitle, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_7__.MatDialogContent, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_7__.MatDialogActions, _angular_material_icon__WEBPACK_IMPORTED_MODULE_9__.MatIcon, _angular_material_button__WEBPACK_IMPORTED_MODULE_10__.MatButton, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_11__.MatError, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_11__.MatFormField, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_11__.MatLabel, _angular_material_input__WEBPACK_IMPORTED_MODULE_12__.MatInput, _angular_material_select__WEBPACK_IMPORTED_MODULE_13__.MatSelect, _angular_material_core__WEBPACK_IMPORTED_MODULE_14__.MatOption, _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormControlName, _visurel_iconify_angular__WEBPACK_IMPORTED_MODULE_15__.IconDirective], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjbGllbnQtbWFuYWdlLmNvbXBvbmVudC5zY3NzIn0= */"] });


/***/ }),

/***/ 81776:
/*!*********************************************************!*\
  !*** ./src/app/pages/client/services/client.service.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ClientService": () => (/* binding */ ClientService)
/* harmony export */ });
/* harmony import */ var _shared_apis_endpoint__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @shared/apis/endpoint */ 62376);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ 86942);
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/environments/environment */ 92340);
/* harmony import */ var _shared_functions_helpers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @shared/functions/helpers */ 41325);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common/http */ 28784);
/* harmony import */ var _shared_services_alert_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @shared/services/alert.service */ 40704);







class ClientService {
    constructor(_http, _alert) {
        this._http = _http;
        this._alert = _alert;
    }
    GetAll(size, sort, order, page, getInputs) {
        const requestUrl = `${src_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.api}${_shared_apis_endpoint__WEBPACK_IMPORTED_MODULE_0__.endpoint.LIST_CLIENTS}?records=${size}&sort=${sort}&order=${order}&numPage=${page + 1}${getInputs}`;
        return this._http
            .get(requestUrl)
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.map)((resp) => this.transformClientData(resp)));
    }
    transformClientData(response) {
        const badgeColor = {
            0: "text-gray bg-gray-light",
            1: "text-green bg-green-light",
        };
        response.data.forEach((client) => {
            client.badgeColor = badgeColor[client.state] || "text-gray bg-gray-light";
            client.icEdit = (0,_shared_functions_helpers__WEBPACK_IMPORTED_MODULE_2__.getIcon)("icEdit", "Editar Cliente", true);
            client.icDelete = (0,_shared_functions_helpers__WEBPACK_IMPORTED_MODULE_2__.getIcon)("icDelete", "Eliminar Cliente", true);
        });
        return response;
    }
    clientById(clientId) {
        const requestUrl = `${src_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.api}${_shared_apis_endpoint__WEBPACK_IMPORTED_MODULE_0__.endpoint.CLIENT_BY_ID}${clientId}`;
        return this._http.get(requestUrl).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.map)((resp) => {
            return resp.data;
        }));
    }
    clientRegister(client) {
        const requestUrl = `${src_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.api}${_shared_apis_endpoint__WEBPACK_IMPORTED_MODULE_0__.endpoint.CLIENT_REGISTER}`;
        return this._http.post(requestUrl, client);
    }
    clientEdit(clientId, client) {
        const requestUrl = `${src_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.api}${_shared_apis_endpoint__WEBPACK_IMPORTED_MODULE_0__.endpoint.CLIENT_EDIT}${clientId}`;
        return this._http.put(requestUrl, client);
    }
    clientRemove(clientId) {
        const requestUrl = `${src_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.api}${_shared_apis_endpoint__WEBPACK_IMPORTED_MODULE_0__.endpoint.CLIENT_REMOVE}${clientId}`;
        return this._http.put(requestUrl, "").pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.map)((resp) => {
            if (resp.isSuccess) {
                this._alert.success("Excelente", resp.message);
            }
        }));
    }
}
ClientService.ɵfac = function ClientService_Factory(t) { return new (t || ClientService)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_6__.HttpClient), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵinject"](_shared_services_alert_service__WEBPACK_IMPORTED_MODULE_3__.AlertService)); };
ClientService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjectable"]({ token: ClientService, factory: ClientService.ɵfac, providedIn: "root" });


/***/ })

}]);
//# sourceMappingURL=src_app_pages_client_client_module_ts.js.map