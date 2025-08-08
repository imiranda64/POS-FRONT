export class SaleRequest {
    voucherNumber: string;
    observation?: string;
    subTotal: number;
    igv: number;
    totalAmount: number;
    voucherDocumentTypeId: number;
    warehouseId: number;
    clientId: number;
    saleDetails: SaleDetailRequest[];
}

export class SaleDetailRequest {
    productId: number;
    quantity: number;
    unitSalePrice: number;
    total: number;
}