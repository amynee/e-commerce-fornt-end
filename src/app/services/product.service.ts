import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from '../common/product';
import { map } from 'rxjs/operators';
import { ProductCategory } from '../common/product-category';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
    private baseUrl = 'http://localhost:8080/api/products';
    private categoryUrl = 'http://localhost:8080/api/product-category';

    constructor(private httpClient: HttpClient) { }

    getProductsList(categoryId: number): Observable<Product[]> {
        // need to build URL based on category id
        const searchUrl = `${this.baseUrl}/search/findByCategoryId?id=${categoryId}`;
        
        return this.getProducts(searchUrl)
    }

    private getProducts(searchUrl: string): Observable<Product[]> {
        return this.httpClient.get<GetResponseProducts>(searchUrl).pipe(
        map(response => response._embedded.products)
        );
    }

    getProductCategories():  Observable<ProductCategory[]> {
        return this.httpClient.get<GetResponseProductCategories>(this.categoryUrl).pipe(
            map(response => response._embedded.productCategory)
        )
    }

    searchProducts(theKeyword: string): Observable<Product[]> {
        // need to build URL based on the keyword
        const searchUrl = `${this.baseUrl}/search/findByNameContaining?name=${theKeyword}`;
          
        return this.getProducts(searchUrl)
    }

    getProduct(theProductId: number): Observable<Product> {
        // need tp build URL based on the product id
        const productUrl = `${this.baseUrl}/${theProductId}`;

        return this.httpClient.get<Product>(productUrl);
    }
}

interface GetResponseProducts {
  _embedded: {
    products: Product[]
  }
}

interface GetResponseProductCategories {
    _embedded: {
      productCategory: ProductCategory[]
    }
}
