export interface OptionValue {
  id: number;
  name?: string;
  hex?: string;
  imageUrl?: string;
}

export interface ProductOption {
  name: string;
  type: string;
  values: OptionValue[];
}


export interface Variation {
  id: string;                 
  options: Record<string,string>;
  price: number;
  lowestPriceBeforeDiscount: number;
  upc: number,
  weight: number,
  length: number,
  width: number,
  height: number,
  stock: number;
  imageUrl?: string;
  itemCode: number,
  brand: string
}