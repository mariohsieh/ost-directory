export interface PledgeClass {
  pledgeClass: string,
  president?: string,
  pledgeMom?: string,
  year: string,
  members: PledgeClassMember[]
};

export interface PledgeClassMember {
  name: string,
  pledgeCaptain?: boolean,
  bigBro: string[]
};
