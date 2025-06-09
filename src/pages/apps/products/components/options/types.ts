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

export interface TextureColor {
  id: string;
  name: string;
  hex: string;
  extraPrice?: number;
}

export interface Texture {
  id: string;
  name: string;
  baseColorFile: string;
  normalMapFile: string;
  roughnessMapFile: string;
  extraPrice?: number;
  colors: TextureColor[];
}

export interface ModelPart {
  id: string;
  name: string;
  textures: Texture[];
}

export interface ShippingInfo {
  requiresShipping: boolean;
  weight: number;
  length: number;
  width: number;
  height: number;
}


export interface GeneralInfo {
  title: string;           
  itemCode: number;         
  price: number;            
  description: string;      
  requiresShipping: boolean;
  productType: "physical" | "digital" | "3d_customizable";
  isAvailable: boolean;
  objUrl?: string;
  file?: string;
}


export interface Attributes {
  upc: string;
  brand: string;
}

export interface Product {
  general: GeneralInfo;
  attributes: Attributes;
  options: ProductOption[];
  variations: Variation[];
}

