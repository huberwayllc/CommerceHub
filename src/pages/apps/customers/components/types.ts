export interface Address {
  address: string;
  phone: string;
  country: string;
  state: string;
  city: string;
  postalCode: string;
}

export interface CustomerInfo {
  id: string;
  name: string;
  email: string;
  phone: string;
  taxExempt: boolean;
  newsletter: boolean;
  address: Address;
}