export type RecordData = {
  date: string;
  voice: number;
  data: number;
};

export type PackageType = {
  subscription: number;
  topup: number;
  available: number;
};
export type PackageInformationData = {
  data: PackageType;
  minutes: PackageType;
};

export type PurchaseData = {
  data: number;
  minutes: number;
};
