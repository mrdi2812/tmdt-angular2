import { Routes } from "@angular/router";
import { MainComponent } from "./main.component";
import { ProductComponent } from "./product/product.component";
import { ProductCategoryComponent } from "./product-category/product-category.component";
import { FunctionComponent } from "./function/function.component";
import { UserComponent } from "./user/user.component";
import { RoleComponent } from "./role/role.component";
import { HomeComponent } from "./home/home.component";
export const mainroutes : Routes =[
  {path:'',component:MainComponent,children:[
    {path:'',redirectTo:'home',pathMatch:'full'},
    {path:'user',loadChildren:'./user/user.module#UserModule'},
    {path:'role',loadChildren:'./role/role.module#RoleModule'},
    {path:'function',loadChildren:'./function/function.module#FunctionModule'},
    {path:'product',loadChildren:'./product/product.module#ProductModule'},
    {path:'product-category',loadChildren:'./product-category/product-category.module#ProductCategoryModule'},
  ]}
  ]
