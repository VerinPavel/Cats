export interface IFact {
  fact: string;
  length: number;
}

export interface IFacts {
  current_page: number;
  data: IFact[];
}
