import { Product, PricingResponse } from '../types/product';

// Simulation des données backend basées sur le JSON fourni
const MOCK_PRODUCTS: Product[] = [
  {
    "id": "enterprise-pack",
    "name": "Enterprise",
    "slug": "enterprise",
    "description": "Dedicated resources and isolation for mission-critical apps",
    "category": "BUNDLE",
    "prices": [
      {
        "id": "price-ent",
        "model": "BUNDLE",
        "unit_amount": 100000,
        "currency": "XOF",
        "period": "MONTHLY"
      }
    ],
    "included_cpu": 8,
    "included_ram_gb": 32,
    "included_storage_gb": 500,
    "is_isolated": false,
    "has_ci_cd": true,
    "is_active": true
  },
  {
    "id": "freestyle",
    "name": "Freestyle",
    "slug": "freestyle",
    "description": "Flexible resources, pay for what you use",
    "category": "COMPUTE",
    "prices": [
      {
        "id": "price-free",
        "model": "PER_UNIT",
        "unit_amount": 2,
        "currency": "XOF",
        "period": "HOURLY"
      }
    ],
    "is_isolated": false,
    "has_ci_cd": false,
    "is_active": true
  },
  {
    "id": "pro-pack",
    "name": "Pro",
    "slug": "pro",
    "description": "For growing businesses and applications",
    "category": "BUNDLE",
    "prices": [
      {
        "id": "price-pro",
        "model": "BUNDLE",
        "unit_amount": 15000,
        "currency": "XOF",
        "period": "MONTHLY"
      }
    ],
    "included_cpu": 2,
    "included_ram_gb": 8,
    "included_storage_gb": 50,
    "is_isolated": true,
    "has_ci_cd": true,
    "is_active": true
  },
  {
    "id": "starter-pack",
    "name": "Starter",
    "slug": "starter",
    "description": "Ideal for small projects and hobbies",
    "category": "BUNDLE",
    "prices": [
      {
        "id": "price-start",
        "model": "BUNDLE",
        "unit_amount": 2500,
        "currency": "XOF",
        "period": "MONTHLY"
      }
    ],
    "included_cpu": 0.5,
    "included_ram_gb": 2,
    "included_storage_gb": 10,
    "is_isolated": true,
    "has_ci_cd": true,
    "is_active": true
  }
];

const API_URL = 'https://api-gateway.dev.cloudnaaba.fr/v1/products';

export const productService = {
  async getProducts(): Promise<Product[]> {
    try {
      const response = await fetch(API_URL);
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const json: PricingResponse = await response.json();
      return json.data;
    } catch (error) {
      console.error("Failed to fetch products from real API, using local fallback:", error);
      // Fallback au cas où l'API est indisponible en dev
      return MOCK_PRODUCTS;
    }
  }
};
