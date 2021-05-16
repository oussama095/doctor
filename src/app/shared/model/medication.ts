export interface Medication {
  id: 0;
  name: string;
  route: string;
  drugForm: string;
  dose: Dose;
}

export interface Dose {
  id: 0;
  quantity: 0;
  period: string;
  fullPeriod: string;
}
