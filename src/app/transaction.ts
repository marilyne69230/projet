export interface ITransaction {
  id: number;
  date: Date;
  categorie: Array<string>;
  label: string;
  montant: number;

}