export interface PledgeClassType {
  pledgeClass: string,
  president?: string,
  pledgeMom?: string,
  year: string,
  members: PledgeClassMemberType[]
};

export interface PledgeClassMemberType {
  name: string,
  pledgeCaptain?: boolean,
  bigBro: string[]
};
