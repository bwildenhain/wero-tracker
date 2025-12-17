import type { WeroData } from "../lib/types";

export const weroData: WeroData = {
  lastUpdated: "2025-12-17",
  dataSource: "https://github.com/community/wero-tracker-data",
  countries: [
    { code: "AT", name: "Austria", banks: [] },
    { code: "BE", name: "Belgium", banks: [] },
    { code: "BG", name: "Bulgaria", banks: [] },
    { code: "HR", name: "Croatia", banks: [] },
    { code: "CY", name: "Cyprus", banks: [] },
    { code: "CZ", name: "Czech Republic", banks: [] },
    { code: "DK", name: "Denmark", banks: [] },
    { code: "EE", name: "Estonia", banks: [] },
    { code: "FI", name: "Finland", banks: [] },
    { code: "FR", name: "France", banks: [] },
    { code: "DE", name: "Germany", banks: [] },
    { code: "GR", name: "Greece", banks: [] },
    { code: "HU", name: "Hungary", banks: [] },
    { code: "IE", name: "Ireland", banks: [] },
    { code: "IT", name: "Italy", banks: [] },
    { code: "LV", name: "Latvia", banks: [] },
    { code: "LT", name: "Lithuania", banks: [] },
    {
      code: "LU",
      name: "Luxembourg",
      banks: [
        {
          id: "bil",
          name: "Banque Internationale à Luxembourg",
          logo: "/logos/bil.jpeg",
          website: "https://www.bil.com",
          overallStatus: "announced",
          statusSources: [
            {
              label: "L'Essentiel",
              url: "https://www.lessentiel.lu/fr/story/banques-la-solution-de-paiement-wero-va-etre-lancee-au-luxembourg-103365304",
            },
          ],
          features: {
            p2p: { status: "none" },
            onlinePayments: { status: "none" },
            localPayments: { status: "none" },
          },
          appAvailability: {
            weroApp: { status: "none" },
            bankingApp: { status: "none" },
          },
          lastUpdated: "2025-12-17",
        },
      ],
    },
    { code: "MT", name: "Malta", banks: [] },
    { code: "NL", name: "Netherlands", banks: [] },
    { code: "PL", name: "Poland", banks: [] },
    { code: "PT", name: "Portugal", banks: [] },
    { code: "RO", name: "Romania", banks: [] },
    { code: "SK", name: "Slovakia", banks: [] },
    { code: "SI", name: "Slovenia", banks: [] },
    { code: "ES", name: "Spain", banks: [] },
    { code: "SE", name: "Sweden", banks: [] },
  ],
};
