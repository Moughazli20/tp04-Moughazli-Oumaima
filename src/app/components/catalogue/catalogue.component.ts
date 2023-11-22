import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Store } from '@ngxs/store';
import { AjouterProduit } from '../../state/panier.actions';

@Component({
  selector: 'app-catalogue',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './catalogue.component.html',
  styleUrl: './catalogue.component.css'
})
export class CatalogueComponent {
  constructor(private store: Store) {}

  ajouterAuPanier(produit: any) {
    this.store.dispatch(new AjouterProduit(produit));
  }
}
