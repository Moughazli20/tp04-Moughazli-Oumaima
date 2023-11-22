// panier.state.ts
import { State, Action, StateContext, Selector } from '@ngxs/store';
import { AjouterProduit, SupprimerProduit } from './panier.actions';

export interface PanierStateModel {
  produits: any[]; // Assurez-vous de définir votre modèle de produit ici
}

@State<PanierStateModel>({
  name: 'panier',
  defaults: {
    produits: [],
  },
})
export class PanierState {
  @Selector()
  static produits(state: PanierStateModel) {
    return state.produits;
  }

  @Action(AjouterProduit)
  ajouterProduit(ctx: StateContext<PanierStateModel>, action: AjouterProduit) {
    const state = ctx.getState();
    ctx.setState({
      ...state,
      produits: [...state.produits, action.produit],
    });
  }

  @Action(SupprimerProduit)
  supprimerProduit(ctx: StateContext<PanierStateModel>, action: SupprimerProduit) {
    const state = ctx.getState();
    const produits = state.produits.filter(produit => produit.id !== action.produitId);
    ctx.setState({
      ...state,
      produits,
    });
  }
}
