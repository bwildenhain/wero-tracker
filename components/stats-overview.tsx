import { Card, CardContent } from "@/components/ui/card";
import { Flag, Landmark } from "lucide-react";
import { WeroData } from "@/lib/schema";

interface StatsOverviewProps {
  data: WeroData;
}

export function StatsOverview({ data }: StatsOverviewProps) {
  const supportedCountries = data.brands.reduce((acc, brand) => {
    brand.countries.forEach((country) => acc.add(country));
    return acc;
  }, new Set<string>()).size;
  const supportedBrands = data.brands.length;
  const supportedBanks = data.brands.reduce(
    (acc, c) => acc + c.banks.length,
    0,
  );
  const euMemberCountries = 27;

  const stats = [
    {
      label: "Countries",
      value: supportedCountries,
      subtext: `of ${euMemberCountries} countries`,
      icon: Flag,
      color: "text-primary",
    },
    {
      label: "Supported Brands",
      value: supportedBrands,
      subtext: `by ${supportedBanks} banks`,
      icon: Landmark,
      color: "text-primary",
    },
  ];

  return (
    <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
      {stats.map((stat) => (
        <Card key={stat.label} className="p-0">
          <CardContent className="p-4">
            <div className="flex items-start justify-between">
              <div>
                <p className="text-xs text-muted-foreground uppercase tracking-wider">
                  {stat.label}
                </p>
                <p className={`text-3xl font-bold ${stat.color}`}>
                  {stat.value}
                </p>
                <p className="text-xs text-muted-foreground mt-1">
                  {stat.subtext}
                </p>
              </div>
              <stat.icon className={`${stat.color}`} size={24} />
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
