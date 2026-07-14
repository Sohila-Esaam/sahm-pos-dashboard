import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: 'dashboard',
        loadComponent: () => 
            import('./features/dashboard/pages/dashboard/dashboard')
            .then(m => m.Dashboard)
    },
    {
        path: 'products',
        loadComponent: () => 
            import('./features/product-search/pages/product-search/product-search')
            .then(m => m.ProductSearch)
    },
    { path: "", redirectTo: "dashboard", pathMatch: "full" },
];
