import { Store } from '@ngxs/store';

export class HeaderComponent {
  produitsDansPanier$ = this.store.select(state => state.panier.produits.length);

  constructor(private store: Store) {}
}