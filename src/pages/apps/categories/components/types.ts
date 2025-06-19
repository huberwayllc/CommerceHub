import { Product } from "../../products/components/options/types";

export interface Category {
  id: string;
  name: string;
  available: boolean;
  description?: string;
  products: Product[];
  subcategories: Category[];
}


export interface CategoryFormData {
  name: string;
  available: boolean;
  description: string;
  productIds: string[];
  parentCategoryId?: string; 
}


export interface CategoriesState {
  list: Category[];
  selectedCategory: Category | null;
  formData: CategoryFormData;
}
