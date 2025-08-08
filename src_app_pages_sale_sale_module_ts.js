"use strict";
(self["webpackChunkvex"] = self["webpackChunkvex"] || []).push([["src_app_pages_sale_sale_module_ts"],{

/***/ 82245:
/*!****************************************************************************!*\
  !*** ./src/app/pages/sale/components/sale-create/sale-create.component.ts ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SaleCreateComponent": () => (/* binding */ SaleCreateComponent)
/* harmony export */ });
/* harmony import */ var _sale_list_sale_list_config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../sale-list/sale-list-config */ 21611);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var src_vex_animations_scale_in_animation__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/@vex/animations/scale-in.animation */ 49597);
/* harmony import */ var src_vex_animations_fade_in_right_animation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/@vex/animations/fade-in-right.animation */ 16496);
/* harmony import */ var _shared_services_icons_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @shared/services/icons.service */ 11612);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _shared_services_voucher_document_type_select_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @shared/services/voucher-document-type-select.service */ 43164);
/* harmony import */ var _shared_services_client_select_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @shared/services/client-select.service */ 11251);
/* harmony import */ var _shared_services_warehouse_select_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @shared/services/warehouse-select.service */ 85819);
/* harmony import */ var _services_sale_detail_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../services/sale-detail.service */ 41085);
/* harmony import */ var _shared_services_alert_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @shared/services/alert.service */ 40704);
/* harmony import */ var _services_sale_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../services/sale.service */ 53584);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/icon */ 65590);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/button */ 87317);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/material/form-field */ 44770);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/material/input */ 43365);
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/material/tooltip */ 40089);
/* harmony import */ var _visurel_iconify_angular__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @visurel/iconify-angular */ 57313);
/* harmony import */ var _shared_components_reusables_list_table_list_table_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../../shared/components/reusables/list-table/list-table.component */ 26724);
/* harmony import */ var _shared_components_reusables_search_box_multiple_search_box_multiple_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../../shared/components/reusables/search-box-multiple/search-box-multiple.component */ 3343);
/* harmony import */ var _shared_components_reusables_select_autocomplete_select_autocomplete_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../../shared/components/reusables/select-autocomplete/select-autocomplete.component */ 12232);
























function SaleCreateComponent_mat_error_22_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](1, " Campo N\u00B0 Comprobante es requerido. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
} }
function SaleCreateComponent_div_30_Template(rf, ctx) { if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "div", 35)(1, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](2, " Productos ");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](3, "app-search-box-multiple", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵlistener"]("search", function SaleCreateComponent_div_30_Template_app_search_box_multiple_search_3_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵrestoreView"](_r6); const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵresetView"](ctx_r5.search($event)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("@fadeInRight", undefined);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("searchOptions", ctx_r1.componentSaleDetail.searchOptionsProducts)("currentValue", ctx_r1.componentSaleDetail.filters.textFilter);
} }
function SaleCreateComponent_div_32_Template(rf, ctx) { if (rf & 1) {
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "div", 37)(1, "app-list-table", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵlistener"]("rowClick", function SaleCreateComponent_div_32_Template_app_list_table_rowClick_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵrestoreView"](_r8); const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵresetView"](ctx_r7.rowClick($event)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("service", ctx_r2._saleDetailService)("columns", ctx_r2.componentSaleDetail.tableColumnsProducts)("numRecords", ctx_r2.numRecordsProducts)("sortBy", ctx_r2.componentSaleDetail.initialSort)("sortDir", ctx_r2.componentSaleDetail.initialSortDir)("getInputs", ctx_r2.componentSaleDetail.getInputs);
} }
function SaleCreateComponent_tr_56_td_15_Template(rf, ctx) { if (rf & 1) {
    const _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "td", 39)(1, "div", 43)(2, "mat-icon", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵlistener"]("click", function SaleCreateComponent_tr_56_td_15_Template_mat_icon_click_2_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵrestoreView"](_r13); const product_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"]().$implicit; const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵresetView"](ctx_r11.removeFromCart(product_r9)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()()();
} if (rf & 2) {
    const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("icIcon", ctx_r10.icRemove);
} }
function SaleCreateComponent_tr_56_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "tr")(1, "td", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](2, "img", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](3, "td", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](5, "td", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](7, "td", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](9, "td", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipe"](11, "currency");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](12, "td", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipe"](14, "currency");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](15, SaleCreateComponent_tr_56_td_15_Template, 3, 1, "td", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
} if (rf & 2) {
    const product_r9 = ctx.$implicit;
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpropertyInterpolate"]("alt", product_r9.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("src", product_r9.image, _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtextInterpolate1"](" ", product_r9.code, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtextInterpolate1"](" ", product_r9.name, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtextInterpolate1"](" ", product_r9.quantity, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipeBind3"](11, 8, product_r9.unitSalePrice, "", ""), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipeBind3"](14, 12, product_r9.totalAmount, "", ""), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngIf", !ctx_r3.viewDetailRead);
} }
function SaleCreateComponent_button_84_Template(rf, ctx) { if (rf & 1) {
    const _r15 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "button", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵlistener"]("click", function SaleCreateComponent_button_84_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵrestoreView"](_r15); const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵresetView"](ctx_r14.saleSave()); });
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](1, " GUARDAR ");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("disabled", ctx_r4.form.invalid || ctx_r4.cartDetails.length == 0);
} }
class SaleCreateComponent {
    constructor(_route, _fb, _voucherDocumentTypeSelectService, _clientSelectService, _warehouseSelectService, _saleDetailService, _alert, _saleService) {
        this._route = _route;
        this._fb = _fb;
        this._voucherDocumentTypeSelectService = _voucherDocumentTypeSelectService;
        this._clientSelectService = _clientSelectService;
        this._warehouseSelectService = _warehouseSelectService;
        this._saleDetailService = _saleDetailService;
        this._alert = _alert;
        this._saleService = _saleService;
        this.viewDetailRead = false;
        this.numRecordsProducts = 3;
        this.icRemove = _shared_services_icons_service__WEBPACK_IMPORTED_MODULE_3__.IconsService.prototype.getIcon("icDelete");
        this.cartDetails = [];
        this.subtotal = 0;
        this.igv = 0;
        this.total = 0;
        this.addDetail = (products) => {
            if (products.totalAmount <= 0) {
                return;
            }
            const productCopy = Object.assign({}, products);
            const existingProduct = this.cartDetails.find((item) => item.code === productCopy.code);
            const validateResult = existingProduct ? this.validateStock(existingProduct, productCopy.quantity) : this.validateStock(productCopy, null);
            if (validateResult) {
                this._alert.warn("Stock agotado", "La cantidad seleccionada supera el stock disponible");
                return;
            }
            if (existingProduct) {
                existingProduct.quantity += productCopy.quantity;
                existingProduct.totalAmount = existingProduct.quantity + existingProduct.unitSalePrice;
            }
            else {
                this.cartDetails.push(productCopy);
            }
            this.calculateSubtotal();
            this.calculateIgv();
            this.calculateTotal();
        };
        this.componentSaleDetail = _sale_list_sale_list_config__WEBPACK_IMPORTED_MODULE_0__.componentSettings;
    }
    initForm() {
        this.form = this._fb.group({
            voucherDocumentTypeId: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_14__.Validators.required],
            voucherNumber: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_14__.Validators.required],
            clientId: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_14__.Validators.required],
            warehouseId: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_14__.Validators.required],
            observation: [""],
        });
    }
    ngOnInit() {
        this.initForm();
        this.listSelectVoucherDocumentTypes();
        this.listSelectClients();
        this.listSelectWarehouses();
    }
    back() {
        this._route.navigate(["proceso-ventas"]);
    }
    listSelectVoucherDocumentTypes() {
        this._voucherDocumentTypeSelectService
            .listSelectVoucherDocumentType()
            .subscribe((resp) => {
            this.voucherDocumentTypeSelect = resp;
        });
    }
    listSelectClients() {
        this._clientSelectService
            .listSelectClients()
            .subscribe((resp) => {
            this.clientSelect = resp;
        });
    }
    listSelectWarehouses() {
        this._warehouseSelectService
            .listSelectWarehouses()
            .subscribe((resp) => {
            this.warehouseSelect = resp;
        });
    }
    search(data) {
        this.componentSaleDetail.filters.numFilter = data.searchValue;
        this.componentSaleDetail.filters.textFilter = data.searchData;
        this.formatGetInputs();
    }
    formatGetInputs() {
        let str = "";
        if (this.componentSaleDetail.filters.textFilter != null) {
            str += `&numFilter=${this.componentSaleDetail.filters.numFilter}&textFilter=${this.componentSaleDetail.filters.textFilter}`;
        }
        str += `&Id=${this.selectedWarehouseId}`;
        this.componentSaleDetail.getInputs = str;
    }
    onItemSelected(id) {
        this.selectedWarehouseId = id;
        this.formatGetInputs();
    }
    rowClick(rowClick) {
        let action = rowClick.action;
        let products = rowClick.row;
        switch (action) {
            case "addDetail":
                this.addDetail(products);
                break;
        }
        return false;
    }
    validateStock(existingProduct, quantityToAdd) {
        if (existingProduct.quantity + quantityToAdd > existingProduct.currentStock) {
            return true;
        }
        return false;
    }
    calculateSubtotal() {
        this.subtotal = this.cartDetails.reduce((acc, product) => acc + product.quantity * product.unitSalePrice, 0);
    }
    calculateIgv() {
        this.igv = this.subtotal * 0.10;
    }
    calculateTotal() {
        this.total = this.subtotal + this.igv;
    }
    removeFromCart(product) {
        const index = this.cartDetails.indexOf(product);
        if (index != -1) {
            this.cartDetails.splice(index, 1);
        }
        this.calculateSubtotal();
        this.calculateIgv();
        this.calculateTotal();
    }
    saleSave() {
        if (this.form.invalid) {
            return Object.values(this.form.controls).forEach(controls => {
                controls.markAllAsTouched();
            });
        }
        const sale = {
            voucherNumber: this.form.value.voucherNumber,
            observation: this.form.value.observation,
            voucherDocumentTypeId: this.form.value.voucherDocumentTypeId,
            warehouseId: this.form.value.warehouseId,
            clientId: this.form.value.clientId,
            subTotal: this.form.value.subtotal,
            igv: this.igv,
            totalAmount: this.total,
            saleDetails: this.cartDetails.map((product) => {
                return {
                    productId: product.productId,
                    quantity: product.quantity,
                    unitSalePrice: product.unitSalePrice,
                    total: product.totalAmount
                };
            }),
        };
        console.log("sale", sale);
        this._saleService.saleRegister(sale).subscribe((resp) => {
            if (resp.isSuccess) {
                this._alert.success("Exelente", resp.message);
                this._route.navigate(["proceso-ventas"]);
            }
            else {
                this._alert.warn("Atencion", resp.message);
            }
        });
    }
}
SaleCreateComponent.ɵfac = function SaleCreateComponent_Factory(t) { return new (t || SaleCreateComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_15__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_14__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdirectiveInject"](_shared_services_voucher_document_type_select_service__WEBPACK_IMPORTED_MODULE_4__.VoucherDocumentTypeSelectService), _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdirectiveInject"](_shared_services_client_select_service__WEBPACK_IMPORTED_MODULE_5__.ClientSelectService), _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdirectiveInject"](_shared_services_warehouse_select_service__WEBPACK_IMPORTED_MODULE_6__.WarehouseSelectService), _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdirectiveInject"](_services_sale_detail_service__WEBPACK_IMPORTED_MODULE_7__.SaleDetailService), _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdirectiveInject"](_shared_services_alert_service__WEBPACK_IMPORTED_MODULE_8__.AlertService), _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdirectiveInject"](_services_sale_service__WEBPACK_IMPORTED_MODULE_9__.SaleService)); };
SaleCreateComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdefineComponent"]({ type: SaleCreateComponent, selectors: [["vex-sale-create"]], decls: 85, vars: 40, consts: [[1, "w-full", "h-full", "flex", "flex-col"], [1, "px-gutter", "pt-6", "pb-20", "bg-primary", "flex-none"], [1, "flex", "items-center", "justify-between"], [1, "headline", "text-primary-contrast", "m-0", "flex", "items-center", "w-full", "max-w-xxxl", "mr-6"], [3, "icIcon"], [1, "ml-4", "block"], ["mat-button", "", 1, "text-am-base-background", 3, "click"], [1, "-mt-14", "p-6", "pt-0", "overflow-hidden", "flex", "flex-col", "md:flex-row", "gap-2"], [1, "w-full", "md:w-6/12", 3, "formGroup"], [1, "bg-white", "rounded-lg", "p-4", "shadow"], [1, "flex", "items-center"], [1, "text-lg", "font-medium", "text-am-main-blue-dark", "ml-2"], [1, "grid", "grid-cols-1", "md:grid-cols-2", "gap-3"], ["label", "Tipo de comprobante", 3, "control", "required", "listOptions", "readonly"], ["appearance", "outline", 1, "w-full"], ["matInput", "", "formControlName", "voucherNumber", 3, "readonly"], [4, "ngIf"], ["label", "Clientes", 3, "control", "required", "listOptions", "readonly"], ["label", "Almacenes", 3, "control", "required", "listOptions", "readonly", "itemSelected"], ["matInput", "", "placeholder", "Ingrese una Observaci\u00F3n...", "formControlName", "observation", 3, "readonly"], ["class", "flex justify-between", 4, "ngIf"], ["class", "card h-full overflow-hidden flex-auto", 4, "ngIf"], [1, "w-full", "md:w-6/12"], [1, "w-full", "overflow-x-auto"], [1, "min-w-full", "divide-y", "divide-gray-200"], [1, "px-6", "py-3", "bg-am-main-blue-light", "rounded-l-lg", "text-left", "text-xss", "leading-4", "font-bold", "text-am-main-blue-dark", "tracking-wider"], [1, "px-6", "py-3", "bg-am-main-blue-light", "text-left", "text-xss", "leading-4", "font-bold", "text-am-main-blue-dark", "tracking-wider"], [1, "px-6", "py-3", "bg-am-main-blue-light", "rounded-r-lg"], [1, "bg-white"], [4, "ngFor", "ngForOf"], ["colspan", "4"], [1, "font-semibold", "px-6", "py-3", "text-right"], [1, "font-semibold", "px-6", "py-3"], [1, "flex", "justify-end"], ["class", "bg-accent text-accent-contrast", "mat-button", "", 3, "disabled", "click", 4, "ngIf"], [1, "flex", "justify-between"], [3, "searchOptions", "currentValue", "search"], [1, "card", "h-full", "overflow-hidden", "flex-auto"], [1, "w-full", "border", "rounded-lg", 3, "service", "columns", "numRecords", "sortBy", "sortDir", "getInputs", "rowClick"], [1, "px-6", "py-4"], [1, "avatar", "h-15", "w-15", "my-2", 3, "src", "alt"], [1, "px-6", "py-4", "font-semibold", "text-xs", "text-left"], ["class", "px-6 py-4", 4, "ngIf"], [1, "flex", "justify-center", "items-center", "cursor-pointer", "p-1.5", "w-fit", "rounded-full", "text-am-new-red-dark", "bg-am-new-red-light", "border-am-new-red-dark", "mb-1"], ["matTooltip", "Quitar producto del detalle", 3, "icIcon", "click"], ["mat-button", "", 1, "bg-accent", "text-accent-contrast", 3, "disabled", "click"]], template: function SaleCreateComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "h2", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](4, "ic-icon", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](5, "span", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](6, "Nueva Venta de Productos");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](7, "button", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵlistener"]("click", function SaleCreateComponent_Template_button_click_7_listener() { return ctx.back(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](8, " REGRESAR ");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](9, "div", 7)(10, "form", 8)(11, "div", 9)(12, "div", 10)(13, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](14, " Nueva Venta ");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](15, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](16, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](17, "app-select-autocomplete", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](18, "mat-form-field", 14)(19, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](20, "N\u00B0 Comprobante");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](21, "input", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](22, SaleCreateComponent_mat_error_22_Template, 2, 0, "mat-error", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](23, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](24, "app-select-autocomplete", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](25, "app-select-autocomplete", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵlistener"]("itemSelected", function SaleCreateComponent_Template_app_select_autocomplete_itemSelected_25_listener($event) { return ctx.onItemSelected($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](26, "mat-form-field", 14)(27, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](28, "Observaci\u00F3n");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](29, "textarea", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](30, SaleCreateComponent_div_30_Template, 4, 3, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](31, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](32, SaleCreateComponent_div_32_Template, 2, 6, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](33, "div", 22)(34, "div", 9)(35, "div", 10)(36, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](37, " Orden Venta ");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](38, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](39, "div", 23)(40, "table", 24)(41, "thead")(42, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](43, "th", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](44, "th", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](45, " C\u00D3DIGO ");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](46, "th", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](47, " NOMBRE ");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](48, "th", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](49, " CANTIDAD ");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](50, "th", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](51, " PRECIO U. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](52, "th", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](53, " TOTAL ");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](54, "th", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](55, "tbody", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](56, SaleCreateComponent_tr_56_Template, 16, 16, "tr", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](57, "br")(58, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](59, "tfoot")(60, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](61, "td", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](62, "td", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](63, "Subtotal:");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](64, "td", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](65);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipe"](66, "currency");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](67, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](68, "td", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](69, "td", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](70, "IGV:");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](71, "td", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](72);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipe"](73, "currency");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](74, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](75, "td", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](76, "td", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](77, "Monto Total:");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](78, "td", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](79);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipe"](80, "currency");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](81, "hr")(82, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](83, "div", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](84, SaleCreateComponent_button_84_Template, 2, 1, "button", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()()()()()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("@scaleIn", undefined)("icIcon", ctx.componentSaleDetail.icSale);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("@fadeInRight", undefined);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("formGroup", ctx.form);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("@fadeInRight", undefined);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("control", ctx.form.get("voucherDocumentTypeId"))("required", true)("listOptions", ctx.voucherDocumentTypeSelect)("readonly", ctx.viewDetailRead);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("readonly", ctx.viewDetailRead);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngIf", ctx.form.get("voucherNumber").hasError("required"));
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("control", ctx.form.get("clientId"))("required", true)("listOptions", ctx.clientSelect)("readonly", ctx.viewDetailRead);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("control", ctx.form.get("warehouseId"))("required", true)("listOptions", ctx.warehouseSelect)("readonly", ctx.viewDetailRead);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("readonly", ctx.viewDetailRead);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngIf", !ctx.viewDetailRead);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngIf", !ctx.viewDetailRead);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("@fadeInRight", undefined);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](20);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngForOf", ctx.cartDetails);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipeBind3"](66, 28, ctx.subtotal, "", ""), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipeBind3"](73, 32, ctx.igv, "", ""), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipeBind3"](80, 36, ctx.total, "", ""), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngIf", !ctx.viewDetailRead);
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_16__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_16__.NgIf, _angular_material_icon__WEBPACK_IMPORTED_MODULE_17__.MatIcon, _angular_material_button__WEBPACK_IMPORTED_MODULE_18__.MatButton, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_19__.MatError, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_19__.MatFormField, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_19__.MatLabel, _angular_material_input__WEBPACK_IMPORTED_MODULE_20__.MatInput, _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_21__.MatTooltip, _angular_forms__WEBPACK_IMPORTED_MODULE_14__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_14__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_14__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_14__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_14__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_14__.FormControlName, _visurel_iconify_angular__WEBPACK_IMPORTED_MODULE_22__.IconDirective, _shared_components_reusables_list_table_list_table_component__WEBPACK_IMPORTED_MODULE_10__.ListTableComponent, _shared_components_reusables_search_box_multiple_search_box_multiple_component__WEBPACK_IMPORTED_MODULE_11__.SearchBoxMultipleComponent, _shared_components_reusables_select_autocomplete_select_autocomplete_component__WEBPACK_IMPORTED_MODULE_12__.SelectAutocompleteComponent, _angular_common__WEBPACK_IMPORTED_MODULE_16__.CurrencyPipe], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzYWxlLWNyZWF0ZS5jb21wb25lbnQuc2NzcyJ9 */"], data: { animation: [src_vex_animations_scale_in_animation__WEBPACK_IMPORTED_MODULE_1__.scaleIn400ms, src_vex_animations_fade_in_right_animation__WEBPACK_IMPORTED_MODULE_2__.fadeInRight400ms] } });


/***/ }),

/***/ 21611:
/*!*********************************************************************!*\
  !*** ./src/app/pages/sale/components/sale-list/sale-list-config.ts ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "componentSettings": () => (/* binding */ componentSettings)
/* harmony export */ });
/* harmony import */ var _shared_validators_generic_validators__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @shared/validators/generic-validators */ 28222);
/* harmony import */ var _shared_services_icons_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @shared/services/icons.service */ 11612);


const searchOptions = [
    {
        label: "Comprobante",
        value: 1,
        placeholder: "Buscar por comprobante",
        validation: [_shared_validators_generic_validators__WEBPACK_IMPORTED_MODULE_0__.GenericValidators.alphanumeric],
        validation_desc: "Sólo se permite letras y/o números en esta búsqueda.",
        icon: "icName",
    },
];
const searchOptionsProducts = [
    {
        label: "Código",
        value: 1,
        placeholder: "Buscar por Código",
        validation: [_shared_validators_generic_validators__WEBPACK_IMPORTED_MODULE_0__.GenericValidators.alphanumeric],
        validation_desc: "Sólo se permite letras y/o números en esta búsqueda.",
        icon: "icName",
    },
    {
        label: "Nombre",
        value: 2,
        placeholder: "Buscar por Nombre",
        validation: [_shared_validators_generic_validators__WEBPACK_IMPORTED_MODULE_0__.GenericValidators.defaultName],
        validation_desc: "Sólo se permite letras en esta búsqueda.",
        icon: "icName",
    },
];
const tableColumns = [
    {
        label: "COMPROBANTE",
        cssLabel: ["font-bold", "text-sm"],
        property: "voucherDescription",
        cssProperty: ["font-semibold", "text-sm", "text-left"],
        type: "badge",
        sticky: true,
        sort: true,
        sortProperty: "voucherDescription",
        visible: true,
        download: true,
    },
    {
        label: "N° COMPROBANTE",
        cssLabel: ["font-bold", "text-sm"],
        property: "voucherNumber",
        cssProperty: ["font-semibold", "text-sm", "text-left"],
        type: "textUppercase",
        sticky: true,
        sort: true,
        sortProperty: "voucherNumber",
        visible: true,
        download: true,
    },
    {
        label: "CLIENTE",
        cssLabel: ["font-bold", "text-sm"],
        property: "client",
        cssProperty: ["font-semibold", "text-sm", "text-left"],
        type: "textUppercase",
        sticky: true,
        sort: true,
        sortProperty: "client",
        visible: true,
        download: true,
    },
    {
        label: "ALMACÉN",
        cssLabel: ["font-bold", "text-sm"],
        property: "warehouse",
        cssProperty: ["font-semibold", "text-sm", "text-left"],
        type: "text",
        sticky: true,
        sort: true,
        sortProperty: "warehouse",
        visible: true,
        download: true,
    },
    {
        label: "MONTO TOTAL",
        cssLabel: ["font-bold", "text-sm"],
        property: "totalAmount",
        cssProperty: ["font-semibold", "text-sm", "text-left"],
        type: "currency",
        sticky: true,
        sort: true,
        sortProperty: "totalAmount",
        visible: true,
        download: true,
    },
    {
        label: "F. DE VENTA",
        cssLabel: ["font-bold", "text-sm"],
        property: "dateOfSale",
        cssProperty: ["font-semibold", "text-sm", "text-left"],
        type: "datetime",
        sticky: true,
        sort: true,
        sortProperty: "dateOfSale",
        visible: true,
        download: true,
    },
    {
        label: "",
        cssLabel: [],
        property: "icView",
        cssProperty: [],
        type: "icon",
        action: "viewDetail",
        sticky: false,
        sort: false,
        visible: true,
        download: false,
    },
    {
        label: "",
        cssLabel: [],
        property: "icInvoice",
        cssProperty: [],
        type: "icon",
        action: "exportInvoice",
        sticky: false,
        sort: false,
        visible: true,
        download: false,
    },
    {
        label: "",
        cssLabel: [],
        property: "icCancel",
        cssProperty: [],
        type: "icon",
        action: "cancel",
        sticky: false,
        sort: false,
        visible: true,
        download: false,
    },
];
const tableColumnsProducts = [
    {
        label: "",
        cssLabel: ["font-bold", "text-xxs"],
        property: "image",
        cssProperty: ["font-semibold", "text-xs", "text-left"],
        type: "image",
        sticky: false,
        sort: true,
        sortProperty: "image",
        visible: true,
        download: true,
    },
    {
        label: "CÓDIGO",
        cssLabel: ["font-bold", "text-xxs"],
        property: "code",
        cssProperty: ["font-semibold", "text-xs", "text-left"],
        type: "textUppercase",
        sticky: false,
        sort: true,
        sortProperty: "code",
        visible: true,
        download: true,
    },
    {
        label: "NOMBRE",
        cssLabel: ["font-bold", "text-xxs"],
        property: "name",
        cssProperty: ["font-semibold", "text-xs", "text-left"],
        subProperty: "category",
        cssSubProperty: ["text-xxs", "text-am-gray", "uppercase", "text-left"],
        type: "text",
        sticky: false,
        sort: true,
        sortProperty: "name",
        visible: true,
        download: true,
    },
    {
        label: "CANTIDAD",
        cssLabel: ["font-bold", "text-xxs"],
        property: "quantity",
        cssProperty: ["font-semibold", "text-xs", "text-left"],
        type: "quantitySale",
        sticky: false,
        sort: true,
        visible: true,
    },
    {
        label: "PRECIO U.",
        cssLabel: ["font-bold", "text-xxs"],
        property: "unitSalePrice",
        cssProperty: ["font-semibold", "text-xs", "text-left"],
        type: "unitSalePrice",
        sticky: false,
        sort: true,
        visible: true,
    },
    {
        label: "STOCK ACTUAL",
        cssLabel: ["font-bold", "text-xxs"],
        property: "currentStock",
        cssProperty: ["font-semibold", "text-xs", "text-left"],
        type: "number",
        sticky: false,
        sort: true,
        visible: true,
    },
    {
        label: "TOTAL",
        cssLabel: ["font-bold", "text-xxs"],
        property: "totalAmount",
        cssProperty: ["font-semibold", "text-xs", "text-left"],
        type: "totalAmount",
        sticky: false,
        sort: true,
        visible: true,
    },
    {
        label: "",
        cssLabel: [],
        property: "icAdd",
        cssProperty: [],
        type: "icon",
        action: "addDetail",
        sticky: false,
        sort: false,
        visible: true,
        download: false,
    },
];
const filters = {
    numFilter: 0,
    textFilter: "",
    startDate: "",
    endDate: "",
    refresh: false,
};
const resetFilters = {
    numFilter: 0,
    textFilter: "",
    startDate: "",
    endDate: "",
    refresh: false,
};
const getInputs = "";
const componentSettings = {
    icSale: _shared_services_icons_service__WEBPACK_IMPORTED_MODULE_1__.IconsService.prototype.getIcon("icSales"),
    tableColumns,
    tableColumnsProducts,
    searchOptions,
    searchOptionsProducts,
    initialSort: "Id",
    initialSortDir: "desc",
    filters,
    resetFilters,
    getInputs,
    filename: "listado-de-ventas",
};


/***/ }),

/***/ 38483:
/*!************************************************************************!*\
  !*** ./src/app/pages/sale/components/sale-list/sale-list.component.ts ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SaleListComponent": () => (/* binding */ SaleListComponent)
/* harmony export */ });
/* harmony import */ var src_vex_animations_fade_in_right_animation__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/@vex/animations/fade-in-right.animation */ 16496);
/* harmony import */ var src_vex_animations_scale_in_animation__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/@vex/animations/scale-in.animation */ 49597);
/* harmony import */ var src_vex_animations_stagger_animation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/@vex/animations/stagger.animation */ 48535);
/* harmony import */ var _sale_list_config__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./sale-list-config */ 21611);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _shared_services_custom_title_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @shared/services/custom-title.service */ 31421);
/* harmony import */ var _services_sale_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/sale.service */ 53584);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/sidenav */ 7216);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/button */ 87317);
/* harmony import */ var _visurel_iconify_angular__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @visurel/iconify-angular */ 57313);
/* harmony import */ var _shared_components_reusables_list_table_list_table_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../shared/components/reusables/list-table/list-table.component */ 26724);
/* harmony import */ var _shared_components_reusables_search_box_multiple_search_box_multiple_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../shared/components/reusables/search-box-multiple/search-box-multiple.component */ 3343);
/* harmony import */ var _shared_components_reusables_export_excel_export_excel_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../shared/components/reusables/export-excel/export-excel.component */ 39559);
/* harmony import */ var _shared_components_reusables_filter_date_range_ymd_filter_date_range_ymd_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../shared/components/reusables/filter-date-range-ymd/filter-date-range-ymd.component */ 60518);
/* harmony import */ var _shared_components_reusables_button_reset_filters_button_reset_filters_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../../shared/components/reusables/button-reset-filters/button-reset-filters.component */ 93495);
















class SaleListComponent {
    constructor(customTitle, _saleService, _router) {
        this._saleService = _saleService;
        this._router = _router;
        customTitle.set("Ventas");
    }
    ngOnInit() {
        this.component = _sale_list_config__WEBPACK_IMPORTED_MODULE_3__.componentSettings;
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
    rowClick(rowClick) {
        let action = rowClick.action;
        let sale = rowClick.row;
        return false;
    }
    setGetInputsSale(refresh) {
        this.component.filters.refresh = refresh;
        this.formatGetInputs();
    }
    get getDownloadUrl() {
        return `Sale?Download=True`;
    }
    newSale() {
        this._router.navigate(["/proceso-ventas/crear"]);
    }
}
SaleListComponent.ɵfac = function SaleListComponent_Factory(t) { return new (t || SaleListComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdirectiveInject"](_shared_services_custom_title_service__WEBPACK_IMPORTED_MODULE_4__.CustomTitleService), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdirectiveInject"](_services_sale_service__WEBPACK_IMPORTED_MODULE_5__.SaleService), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_12__.Router)); };
SaleListComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdefineComponent"]({ type: SaleListComponent, selectors: [["vex-sale-list"]], decls: 21, vars: 15, consts: [[1, "w-full", "h-full", "flex", "flex-col"], [1, "px-gutter", "pt-1", "pb-20", "bg-primary", "flex-none"], [1, "flex", "items-center", "justify-between"], [1, "headline", "text-primary-contrast", "m-0", "flex", "items-center", "w-full", "max-w-xxxl", "mr-6"], [1, "hidden", "sm:block", "mt-4", 3, "icon"], [1, "ml-4", "mt-4", "block"], [1, "flex", "space-x-10", "justify-end"], [1, "flex", "space-y-0"], [3, "start", "end", "rangeDate"], [3, "buttonClick"], [1, "hidden", "md:flex", "space-x-0"], [3, "searchOptions", "currentValue", "search"], [3, "url", "getInputs", "filename"], ["mat-button", "", 1, "bg-accent", "text-accent-contrast", 3, "click"], [1, "-mt-18", "pt-0", "overflow-hidden", "flex"], [1, "bg-transparent", "flex-auto", "flex"], [1, "p-gutter", "pt-0", "flex-auto", "flex", "items-start"], [1, "card", "h-full", "overflow-hidden", "flex-auto"], [3, "service", "columns", "sortBy", "sortDir", "getInputs", "rowClick"]], template: function SaleListComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "h2", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](4, "ic-icon", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](5, "span", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](6, "Gesti\u00F3n de Ventas");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](7, "div", 6)(8, "div", 7)(9, "app-filter-date-range-ymd", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("rangeDate", function SaleListComponent_Template_app_filter_date_range_ymd_rangeDate_9_listener($event) { return ctx.searchDateRange($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](10, "app-button-reset-filters", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("buttonClick", function SaleListComponent_Template_app_button_reset_filters_buttonClick_10_listener() { return ctx.resetFilters(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](11, "div", 10)(12, "app-search-box-multiple", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("search", function SaleListComponent_Template_app_search_box_multiple_search_12_listener($event) { return ctx.search($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](13, "app-export-excel", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](14, "button", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("click", function SaleListComponent_Template_button_click_14_listener() { return ctx.newSale(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](15, " Nueva Venta ");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](16, "div", 14)(17, "mat-drawer-container", 15)(18, "mat-drawer-content", 16)(19, "div", 17)(20, "app-list-table", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("rowClick", function SaleListComponent_Template_app_list_table_rowClick_20_listener($event) { return ctx.rowClick($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()()()()()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("@scaleIn", undefined)("icon", ctx.component.icSale);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("@fadeInRight", undefined);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("start", ctx.component.filters.startDate)("end", ctx.component.filters.endDate);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("searchOptions", ctx.component.searchOptions)("currentValue", ctx.component.filters.textFilter);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("url", ctx.getDownloadUrl)("getInputs", ctx.component.getInputs)("filename", ctx.component.filename);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("service", ctx._saleService)("columns", ctx.component.tableColumns)("sortBy", ctx.component.initialSort)("sortDir", ctx.component.initialSortDir)("getInputs", ctx.component.getInputs);
    } }, dependencies: [_angular_material_sidenav__WEBPACK_IMPORTED_MODULE_13__.MatDrawerContainer, _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_13__.MatDrawerContent, _angular_material_button__WEBPACK_IMPORTED_MODULE_14__.MatButton, _visurel_iconify_angular__WEBPACK_IMPORTED_MODULE_15__.IconDirective, _shared_components_reusables_list_table_list_table_component__WEBPACK_IMPORTED_MODULE_6__.ListTableComponent, _shared_components_reusables_search_box_multiple_search_box_multiple_component__WEBPACK_IMPORTED_MODULE_7__.SearchBoxMultipleComponent, _shared_components_reusables_export_excel_export_excel_component__WEBPACK_IMPORTED_MODULE_8__.ExportExcelComponent, _shared_components_reusables_filter_date_range_ymd_filter_date_range_ymd_component__WEBPACK_IMPORTED_MODULE_9__.FilterDateRangeYmdComponent, _shared_components_reusables_button_reset_filters_button_reset_filters_component__WEBPACK_IMPORTED_MODULE_10__.ButtonResetFiltersComponent], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzYWxlLWxpc3QuY29tcG9uZW50LnNjc3MifQ== */"], data: { animation: [src_vex_animations_stagger_animation__WEBPACK_IMPORTED_MODULE_2__.stagger40ms, src_vex_animations_scale_in_animation__WEBPACK_IMPORTED_MODULE_1__.scaleIn400ms, src_vex_animations_fade_in_right_animation__WEBPACK_IMPORTED_MODULE_0__.fadeInRight400ms] } });


/***/ }),

/***/ 61614:
/*!***************************************************!*\
  !*** ./src/app/pages/sale/sale-routing.module.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SaleRoutingModule": () => (/* binding */ SaleRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _components_sale_list_sale_list_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/sale-list/sale-list.component */ 38483);
/* harmony import */ var _components_sale_create_sale_create_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/sale-create/sale-create.component */ 82245);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);





const routes = [
    {
        path: "",
        component: _components_sale_list_sale_list_component__WEBPACK_IMPORTED_MODULE_0__.SaleListComponent,
        data: {
            scrollDisabled: true,
            toolbarShadowEnabled: true,
        },
    },
    {
        path: "crear",
        component: _components_sale_create_sale_create_component__WEBPACK_IMPORTED_MODULE_1__.SaleCreateComponent,
    },
    {
        path: "crear/:saleId",
        component: _components_sale_create_sale_create_component__WEBPACK_IMPORTED_MODULE_1__.SaleCreateComponent,
    },
];
class SaleRoutingModule {
}
SaleRoutingModule.ɵfac = function SaleRoutingModule_Factory(t) { return new (t || SaleRoutingModule)(); };
SaleRoutingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({ type: SaleRoutingModule });
SaleRoutingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({ imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes), _angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](SaleRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule] }); })();


/***/ }),

/***/ 72128:
/*!*******************************************!*\
  !*** ./src/app/pages/sale/sale.module.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SaleModule": () => (/* binding */ SaleModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _sale_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./sale-routing.module */ 61614);
/* harmony import */ var _components_sale_list_sale_list_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/sale-list/sale-list.component */ 38483);
/* harmony import */ var _components_sale_create_sale_create_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/sale-create/sale-create.component */ 82245);
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @shared/shared.module */ 44466);
/* harmony import */ var _shared_components_reusables_list_table_list_table_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @shared/components/reusables/list-table/list-table.component */ 26724);
/* harmony import */ var _shared_components_reusables_menu_menu_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @shared/components/reusables/menu/menu.component */ 57638);
/* harmony import */ var _shared_components_reusables_search_box_multiple_search_box_multiple_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @shared/components/reusables/search-box-multiple/search-box-multiple.component */ 3343);
/* harmony import */ var _shared_components_reusables_export_excel_export_excel_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @shared/components/reusables/export-excel/export-excel.component */ 39559);
/* harmony import */ var _shared_components_reusables_filter_date_range_ymd_filter_date_range_ymd_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @shared/components/reusables/filter-date-range-ymd/filter-date-range-ymd.component */ 60518);
/* harmony import */ var _shared_components_reusables_button_reset_filters_button_reset_filters_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @shared/components/reusables/button-reset-filters/button-reset-filters.component */ 93495);
/* harmony import */ var _shared_components_reusables_select_autocomplete_select_autocomplete_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @shared/components/reusables/select-autocomplete/select-autocomplete.component */ 12232);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/core */ 3184);













class SaleModule {
}
SaleModule.ɵfac = function SaleModule_Factory(t) { return new (t || SaleModule)(); };
SaleModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdefineNgModule"]({ type: SaleModule });
SaleModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdefineInjector"]({ imports: [_angular_common__WEBPACK_IMPORTED_MODULE_12__.CommonModule,
        _sale_routing_module__WEBPACK_IMPORTED_MODULE_0__.SaleRoutingModule,
        _shared_shared_module__WEBPACK_IMPORTED_MODULE_3__.SharedModule,
        _shared_components_reusables_list_table_list_table_component__WEBPACK_IMPORTED_MODULE_4__.ListTableComponent,
        _shared_components_reusables_menu_menu_component__WEBPACK_IMPORTED_MODULE_5__.MenuComponent,
        _shared_components_reusables_search_box_multiple_search_box_multiple_component__WEBPACK_IMPORTED_MODULE_6__.SearchBoxMultipleComponent,
        _shared_components_reusables_export_excel_export_excel_component__WEBPACK_IMPORTED_MODULE_7__.ExportExcelComponent,
        _shared_components_reusables_filter_date_range_ymd_filter_date_range_ymd_component__WEBPACK_IMPORTED_MODULE_8__.FilterDateRangeYmdComponent,
        _shared_components_reusables_button_reset_filters_button_reset_filters_component__WEBPACK_IMPORTED_MODULE_9__.ButtonResetFiltersComponent,
        _shared_components_reusables_select_autocomplete_select_autocomplete_component__WEBPACK_IMPORTED_MODULE_10__.SelectAutocompleteComponent] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵsetNgModuleScope"](SaleModule, { declarations: [_components_sale_list_sale_list_component__WEBPACK_IMPORTED_MODULE_1__.SaleListComponent, _components_sale_create_sale_create_component__WEBPACK_IMPORTED_MODULE_2__.SaleCreateComponent], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_12__.CommonModule,
        _sale_routing_module__WEBPACK_IMPORTED_MODULE_0__.SaleRoutingModule,
        _shared_shared_module__WEBPACK_IMPORTED_MODULE_3__.SharedModule,
        _shared_components_reusables_list_table_list_table_component__WEBPACK_IMPORTED_MODULE_4__.ListTableComponent,
        _shared_components_reusables_menu_menu_component__WEBPACK_IMPORTED_MODULE_5__.MenuComponent,
        _shared_components_reusables_search_box_multiple_search_box_multiple_component__WEBPACK_IMPORTED_MODULE_6__.SearchBoxMultipleComponent,
        _shared_components_reusables_export_excel_export_excel_component__WEBPACK_IMPORTED_MODULE_7__.ExportExcelComponent,
        _shared_components_reusables_filter_date_range_ymd_filter_date_range_ymd_component__WEBPACK_IMPORTED_MODULE_8__.FilterDateRangeYmdComponent,
        _shared_components_reusables_button_reset_filters_button_reset_filters_component__WEBPACK_IMPORTED_MODULE_9__.ButtonResetFiltersComponent,
        _shared_components_reusables_select_autocomplete_select_autocomplete_component__WEBPACK_IMPORTED_MODULE_10__.SelectAutocompleteComponent] }); })();


/***/ }),

/***/ 41085:
/*!************************************************************!*\
  !*** ./src/app/pages/sale/services/sale-detail.service.ts ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SaleDetailService": () => (/* binding */ SaleDetailService)
/* harmony export */ });
/* harmony import */ var _shared_apis_endpoint__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @shared/apis/endpoint */ 62376);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ 86942);
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/environments/environment */ 92340);
/* harmony import */ var _shared_functions_helpers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @shared/functions/helpers */ 41325);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ 28784);






class SaleDetailService {
    constructor(_http) {
        this._http = _http;
    }
    GetAll(size, sort, order, page, getInputs) {
        const requestUrl = `${src_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.api}${_shared_apis_endpoint__WEBPACK_IMPORTED_MODULE_0__.endpoint.PRODUCT_STOCK_WAREHOUSE_ID}?records=${size}&sort=${sort}&order=${order}&numPage=${page + 1}${getInputs}`;
        return this._http.get(requestUrl).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.map)((resp) => this.transformProductsData(resp)));
    }
    transformProductsData(response) {
        response.data.forEach((pro) => {
            pro.icAdd = (0,_shared_functions_helpers__WEBPACK_IMPORTED_MODULE_2__.getIcon)('icAdd', 'Agregar producto al detalle', true);
            pro.quantity = 0;
            pro.totalAmount = 0;
        });
        return response;
    }
}
SaleDetailService.ɵfac = function SaleDetailService_Factory(t) { return new (t || SaleDetailService)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_5__.HttpClient)); };
SaleDetailService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjectable"]({ token: SaleDetailService, factory: SaleDetailService.ɵfac, providedIn: "root" });


/***/ }),

/***/ 53584:
/*!*****************************************************!*\
  !*** ./src/app/pages/sale/services/sale.service.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SaleService": () => (/* binding */ SaleService)
/* harmony export */ });
/* harmony import */ var _shared_apis_endpoint__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @shared/apis/endpoint */ 62376);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ 86942);
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/environments/environment */ 92340);
/* harmony import */ var _shared_functions_helpers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @shared/functions/helpers */ 41325);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common/http */ 28784);
/* harmony import */ var _shared_services_alert_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @shared/services/alert.service */ 40704);







class SaleService {
    constructor(_http, _alertService) {
        this._http = _http;
        this._alertService = _alertService;
    }
    GetAll(size, sort, order, page, getInputs) {
        const requestUrl = `${src_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.api}${_shared_apis_endpoint__WEBPACK_IMPORTED_MODULE_0__.endpoint.LIST_SALES}?records=${size}&sort=${sort}&order=${order}&numPage=${page + 1}${getInputs}`;
        return this._http
            .get(requestUrl)
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.map)((resp) => this.transformSaleData(resp)));
    }
    transformSaleData(response) {
        const badgeColor = {
            BOLETA: "text-am-main-blue-dark bg-am-main-blue-light",
            FACTURA: "text-am-new-green-dark bg-am-new-green-light",
        };
        response.data.forEach((sale) => {
            sale.badgeColor =
                badgeColor[sale.voucherDescription] || "text-gray bg-gray-light";
            sale.icView = (0,_shared_functions_helpers__WEBPACK_IMPORTED_MODULE_2__.getIcon)("icVisibility", "Ver detalle de venta", true);
            sale.icInvoice =
                sale.voucherDescription === "FACTURA"
                    ? (0,_shared_functions_helpers__WEBPACK_IMPORTED_MODULE_2__.getIcon)("icInvoice", "Exportar factura", true)
                    : (0,_shared_functions_helpers__WEBPACK_IMPORTED_MODULE_2__.getIcon)("icTicket", "Exportar boleta", true);
            sale.icCancel = (0,_shared_functions_helpers__WEBPACK_IMPORTED_MODULE_2__.getIcon)("icCancel", "Anular venta", true);
        });
        return response;
    }
    saleRegister(sale) {
        console.log("entro");
        const requestUrl = `${src_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.api}${_shared_apis_endpoint__WEBPACK_IMPORTED_MODULE_0__.endpoint.SALE_REGISTER}`;
        console.log("requestUrl", requestUrl);
        return this._http.post(requestUrl, sale);
    }
}
SaleService.ɵfac = function SaleService_Factory(t) { return new (t || SaleService)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_6__.HttpClient), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵinject"](_shared_services_alert_service__WEBPACK_IMPORTED_MODULE_3__.AlertService)); };
SaleService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjectable"]({ token: SaleService, factory: SaleService.ɵfac, providedIn: "root" });


/***/ }),

/***/ 11251:
/*!**********************************************************!*\
  !*** ./src/app/shared/services/client-select.service.ts ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ClientSelectService": () => (/* binding */ ClientSelectService)
/* harmony export */ });
/* harmony import */ var _shared_apis_endpoint__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @shared/apis/endpoint */ 62376);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ 86942);
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/environments/environment */ 92340);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ 28784);





class ClientSelectService {
    constructor(_http) {
        this._http = _http;
    }
    listSelectClients() {
        const requestUrl = `${src_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.api}${_shared_apis_endpoint__WEBPACK_IMPORTED_MODULE_0__.endpoint.LIST_SELECT_CLIENTS}`;
        return this._http.get(requestUrl).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.map)((resp) => {
            return resp.data;
        }));
    }
}
ClientSelectService.ɵfac = function ClientSelectService_Factory(t) { return new (t || ClientSelectService)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_4__.HttpClient)); };
ClientSelectService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjectable"]({ token: ClientSelectService, factory: ClientSelectService.ɵfac, providedIn: "root" });


/***/ }),

/***/ 43164:
/*!*************************************************************************!*\
  !*** ./src/app/shared/services/voucher-document-type-select.service.ts ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "VoucherDocumentTypeSelectService": () => (/* binding */ VoucherDocumentTypeSelectService)
/* harmony export */ });
/* harmony import */ var _shared_apis_endpoint__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @shared/apis/endpoint */ 62376);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ 86942);
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/environments/environment */ 92340);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ 28784);





class VoucherDocumentTypeSelectService {
    constructor(_http) {
        this._http = _http;
    }
    listSelectVoucherDocumentType() {
        const requestUrl = `${src_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.api}${_shared_apis_endpoint__WEBPACK_IMPORTED_MODULE_0__.endpoint.LIST_SELECT_VOUCHER_DOCUMENT_TYPE}`;
        return this._http.get(requestUrl).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.map)((resp) => {
            return resp.data;
        }));
    }
}
VoucherDocumentTypeSelectService.ɵfac = function VoucherDocumentTypeSelectService_Factory(t) { return new (t || VoucherDocumentTypeSelectService)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_4__.HttpClient)); };
VoucherDocumentTypeSelectService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjectable"]({ token: VoucherDocumentTypeSelectService, factory: VoucherDocumentTypeSelectService.ɵfac, providedIn: "root" });


/***/ })

}]);
//# sourceMappingURL=src_app_pages_sale_sale_module_ts.js.map