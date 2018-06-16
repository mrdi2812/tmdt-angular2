import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductCategoryComponent } from './product-category.component';
import { RouterModule, Routes } from '@angular/router';
const prcategoryRoutes :Routes=[
  { path: '', redirectTo: 'index', pathMatch: 'full' },
  { path: 'index', component: ProductCategoryComponent }
]
@NgModule({
  imports: [
    CommonModule,RouterModule.forChild(prcategoryRoutes)
  ],
  declarations: [ProductCategoryComponent]
})
export class ProductCategoryModule { }
