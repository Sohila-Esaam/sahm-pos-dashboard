import { ChangeDetectorRef, Component, inject } from '@angular/core';
import { ProductService } from '../../services/product.service';
import { Product } from '../../../../core/models/product.model';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { debounceTime, distinctUntilChanged, startWith } from 'rxjs';
import { CommonModule } from '@angular/common';
import { OfflineService } from '../../../../core/services/offline.service';

@Component({
  selector: 'app-product-search',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './product-search.html',
  styleUrl: './product-search.scss'
})
export class ProductSearch {

  private readonly productService = inject(ProductService);

  readonly offlineService = inject(OfflineService);

  private cdr = inject(ChangeDetectorRef);

  searchControl = new FormControl('');

  products: Product[] = this.productService.getProducts();

  filteredProducts: Product[] = [];

  ngOnInit() {

    if (!this.offlineService.isOnline()) {
      return;
    }

    this.filteredProducts = [...this.products];

    this.searchControl.valueChanges.pipe(
      startWith(''),
      debounceTime(20),
      distinctUntilChanged()
    ).subscribe(value => {

      const search = (value ?? '').trim().toLowerCase();

      if (search === '') {
        this.filteredProducts = [...this.products];
        this.cdr.detectChanges();
        return;
      }

      this.filteredProducts = this.products.filter(product =>
        product.name.toLowerCase().includes(search)
      );

    });

  }

  trackById(index: number, product: Product) {
    return product.id;
  }

}