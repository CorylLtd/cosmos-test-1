export type Family = {
  lastName: string;
  parents: Parent[];
  children: Child[];
  address: Address;
  isRegistered: boolean;
};

export type Parent = {
  familyName: string;
  firstName: string;
};

export type Child = {
  familyName: string;
  firstName: string;
  gender: string;
  grade: number;
  pets: Pet[];
};

export type Pet = {
  givenName: string;
};

export type Address = {
  state: string;
  county: string;
  city: string;
  postalCode: string;
  street: string;
};
