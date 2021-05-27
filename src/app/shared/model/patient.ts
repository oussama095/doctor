export interface Patient {
  id: string;
  firstName: string;
  lastName: string;
  phoneNumber: string;
  email: string;
  address: Address;
  notes: string;
  birthday: string;
}

export interface Address {
  street1: string;
  street2?: string;
  city: string;
  postalCode: number;
}
