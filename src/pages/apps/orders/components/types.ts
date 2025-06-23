

export interface OrderItem {
  productId: string;
  title: string;
  quantity: number;
  image: string;
  unitPrice: number;
  options?: { name: string; value: string }[];
}

export interface ShippingInfo {
  method: string;
  name: string;
  price: number;
  address: {
    firstName: string;
    phone: string;
    country: string;
    state: string;
    city: string;
    postalCode: string;
  };
}

export interface Discount {
  amount: number;
}

export interface CustomerInfo {
  name: string;
  email: string;
  phone: string;
  taxExempt: boolean;
}

export interface Order {
  id: string;
  createdAt: string;
  customer: CustomerInfo;
  items: OrderItem[];
  shipping: ShippingInfo;
  discount?: Discount;
}
