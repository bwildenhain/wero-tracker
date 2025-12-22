import type { WeroData } from "@/lib/types";
import { Card, CardContent } from "@/components/ui/card";
import { CircleCheck, Clock, Flag, Landmark } from "lucide-react";

interface StatsOverviewProps {
  data: WeroData;
}

export function StatsOverview({ data }: StatsOverviewProps) {
  const supportedCountries = data.countries.filter((country) =>
    country.banks.some((bank) => bank.status === "supported"),
  ).length;
  const totalBanks = data.countries.reduce((acc, c) => acc + c.banks.length, 0);
  const supportedBanks = data.countries.reduce(
    (acc, c) => acc + c.banks.filter((b) => b.status === "supported").length,
    0,
  );
  const announcedBanks = data.countries.flatMap((c) =>
    c.banks.filter((b) => b.status === "announced"),
  );

  const stats = [
    {
      label: "Countries",
      value: supportedCountries,
      subtext: `of ${data.countries.length} countries`,
      icon: Flag,
      color: "text-primary",
    },
    {
      label: "Total Banks",
      value: totalBanks,
      subtext: "Tracked institutions",
      icon: Landmark,
      color: "text-primary",
    },
    {
      label: "Supported",
      value: supportedBanks,
      subtext: `${totalBanks > 0 ? Math.round((supportedBanks / totalBanks) * 100) : 0}% of tracked banks`,
      icon: CircleCheck,
      color: "text-status-supported",
    },
    {
      label: "Announced",
      value: announcedBanks.length,
      subtext:
        announcedBanks
          .map((b) => b.name)
          .slice(0, 2)
          .join(", ") +
        (announcedBanks.length > 2
          ? `, and ${announcedBanks.length - 2} more`
          : ""),
      icon: Clock,
      color: "text-status-announced",
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
