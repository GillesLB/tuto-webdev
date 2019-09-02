export interface IDev {
  id: number;
  nom: string;
  role: string;
  obligatoire: boolean;
}

export class Dev implements IDev {

  constructor(
    public id: number,
    public nom: string,
    public role: string,
    public obligatoire: boolean,
  ) {}

}
