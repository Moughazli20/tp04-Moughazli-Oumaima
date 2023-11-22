// panier.actions.ts

export class AjouterProduit {
  static readonly type = '[Panier] Ajouter Produit';
  constructor(public produit: any) {}
}

export class SupprimerProduit {
  static readonly type = '[Panier] Supprimer Produit';
  constructor(public produitId: number) {}
}
