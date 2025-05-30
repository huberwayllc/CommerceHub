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
  stock: number;
  imageUrl?: string;
}