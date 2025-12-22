export type Status = "supported" | "announced" | "unsupported" | "unknown";

export interface Source {
  label: string;
  url: string;
}

export interface Bank {
  id: string;
  name: string;
  logo?: string;
  website?: string;
  status: Status;
  sources?: Source[];
  note?: string;
  features: {
    p2p: Status;
    onlinePayments: Status;
    localPayments: Status;
  };
  appAvailability: {
    weroApp: Status;
    bankingApp: Status;
  };
  lastUpdated: string; // Generated field
}

export interface Country {
  code: string;
  banks: Bank[];
}

export interface WeroData {
  lastUpdated: string;
  dataSource: string;
  countries: Country[];
}
