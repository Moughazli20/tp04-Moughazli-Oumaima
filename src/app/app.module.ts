import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PanierComponent } from './components/panier/panier.component';
import { NgxsModule } from '@ngxs/store';
import { PanierState } from './state/panier.state';
import { BrowserModule } from '@angular/platform-browser';


@NgModule({
  declarations: [
    PanierComponent,
  ],
  imports: [
    CommonModule,
    BrowserModule,
    NgxsModule.forRoot([PanierState])
  ],
  exports: [
    PanierComponent,
  ],
})
export class AppModule { }
