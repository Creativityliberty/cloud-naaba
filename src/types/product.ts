export interface ProductPrice {
  id: string;
  model: string;
  unit_amount: number;
  currency: string;
  period: string;
}

export interface Product {
  id: string;
  name: string;
  slug: string;
  description: string;
  category: string;
  prices: ProductPrice[];
  included_cpu?: number;
  included_ram_gb?: number;
  included_storage_gb?: number;
  is_isolated: boolean;
  has_ci_cd: boolean;
  is_active: boolean;
}

export interface PricingResponse {
  status: string;
  message: string;
  data: Product[];
}
