export class Institution {
  name: string;
  email: string;
  phoneNumber: string;
  type: string
  address: Address;

  constructor() {
    this.clean();
  }

  clean(): void { }


  copyFrom(from: Institution): void { }

  
}
export class Address {
  street: string;
  number: string;
  postalCode: string;

  constructor(street: string, number: string, postalCode: string) {
    this.street = street
    this.number = number
    this.postalCode = postalCode;
  }
}

export class Occurrence {
  date: Date;
  needsMedicalAssistance: boolean;
  needsSecurityAssistance: boolean;
  needsPsychologicalAssistance: boolean;
  urgencyLevel: number;
  location: Address;
}