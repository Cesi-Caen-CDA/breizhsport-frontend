import type { Product } from "~/interfaces/iproducts";
export interface Order {
  _id: string;
  id_client: string;
  Products: Product[];
  totalOrder: number;
}

export interface OrderCart {
  _idOrder: string;
  idClient: string;
  pdtId: Product["_id"];
  pdtName: Product["name"];
  pdtPrice: Product["price"];
  pdtDescription: Product["description"];
  pdtQty: number;
  totalOrder: number;
}
