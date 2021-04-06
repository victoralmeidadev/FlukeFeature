export type RecordData = {
  date: string;
  voice: number;
  data: number;
};

export type PackageInformationData = {
  data: {
    subscription: number;
    topup: number;
    available: number;
  };
  minutes: {
    subscription: number;
    topup: number;
    available: number;
  };
};

export type PurchaseData = {
  data: number;
  minutes: number;
};
