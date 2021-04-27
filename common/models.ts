export type InstitutionType = "policial" | "medico" | "psicologo";

export class Institution {
  name: string;
  email: string;
  phoneNumber: string;
  type: InstitutionType;
  address: Address;

  constructor(
    name: string,
    email: string,
    phoneNumber: string,
    type: InstitutionType,
    street: string,
    number: string,
    postalCode: string
  ) {
    this.address = new Address(street, number, postalCode);
    this.name = name;
    this.email = email;
    this.phoneNumber = phoneNumber;
    this.type = type;
    console.log("institution instantiated!");
    this.clean();
  }

  clean(): void {}

  show(): void {
    console.log(
      this.name,
      this.email,
      this.phoneNumber,
      this.type,
      this.address
    );
  }

  copyFrom(from: Institution): void {}
}

export class Address {
  street: string;
  number: string;
  postalCode: string;

  constructor(street: string, number: string, postalCode: string) {
    this.street = street;
    this.number = number;
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
