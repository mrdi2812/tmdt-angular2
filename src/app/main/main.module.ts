import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainComponent } from './main.component';
import { RouterModule } from '@angular/router';
import { mainroutes } from './main.router';
import{UserModule} from './user/user.module';
@NgModule({
  imports: [
    CommonModule,
    UserModule,
    RouterModule.forChild(mainroutes)
  ],
  declarations: [MainComponent]
})
export class MainModule { }
