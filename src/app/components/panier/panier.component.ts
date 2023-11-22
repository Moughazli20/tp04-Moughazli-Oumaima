import { Store } from '@ngxs/store';
import { SupprimerProduit } from '../../state/panier.actions';

export class PanierComponent {
  produitsDansPanier$ = this.store.select(state => state.panier.produits);

  constructor(private store: Store) {}

  supprimerProduit(produitId: number) {
    this.store.dispatch(new SupprimerProduit(produitId));
  }
}