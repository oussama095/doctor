export interface Medication {
  id: string;
  name: string;
  route: string;
  drugForm: string;
  dose: Dose;
}

export interface Dose {
  id: string;
  quantity: number;
  period: string;
  fullPeriod: string;
}
