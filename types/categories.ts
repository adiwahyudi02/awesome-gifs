import type { Meta } from "./meta";
import type { Pagination } from "./pagination";

export interface CategoriesParams {
  api_key: string;
}

export interface CategoriesResponse {
  data: CategoriesList;
  meta: Meta;
  pagination: Pagination;
}

export interface Category {
  name: string;
  name_encoded: string;
}

export interface CategoriesList extends Array<Category> {}
