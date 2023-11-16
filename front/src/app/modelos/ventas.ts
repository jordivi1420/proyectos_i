export interface Venta{
    id?: number;
    fecha: Date;
    descuento: number;
    total: number;
    subtotal: number;
    updated: Date;
    cliente?: number;
    
}