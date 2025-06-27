import { OrderItem } from "../../orders/components/types";

export const defaultCustomerInfo: CustomerInfo = {
  name: '',
  company: '',
  email: '',
  phone: '',
  street: '',
  civicNumber: '',
  address2: '',
  postalCode: '',
  city: '',
  province: '',
  destinationCountry: '',
  country: '',
  notes: '',
  taxExempt: false,
};

export const defaultShippingInfo: ShippingInfo = {
  method: '',
  name: '',
  price: 0,
  address: {
    address: '',
    phone: '',
    country: '',
    state: '',
    city: '',
    postalCode: '',
  },
};

export interface AddressInfo {
  address: string;
  phone: string;
  country: string;
  state: string;
  city: string;
  postalCode: string;
}

export interface ShippingInfo {
  method: string;
  name: string;
  price: number;
  address: AddressInfo;
  parcels?: number;
  weight?: number;
  orderNumber?: string;
  boxType?: string;
  height?: number;
  length?: number;
  width?: number;
}

export interface CustomerInfo {
  name: string;
  company?: string;
  email: string;
  phone: string;
  street: string;
  civicNumber: string;
  address2?: string;
  postalCode: string;
  city: string;
  destinationCountry: string;
  province: string;
  country: string;
  notes: string;
  taxExempt: boolean;
}


export interface Shipment {
  id: string;
  createdAt: string;
  customer: CustomerInfo;
  shipping: ShippingInfo;
  items: OrderItem[];
  total: number;
}