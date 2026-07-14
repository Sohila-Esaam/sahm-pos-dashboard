import { Injectable } from '@angular/core';
import { Product } from '../../../core/models/product.model';
import { MOCK_PRODUCTS } from '../../../core/mocks/products.mock';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  getProducts(): Product[] {
    return MOCK_PRODUCTS;
  }

}