import { ReactNode } from "react";
import type { Bank, Status } from "@/lib/types";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { StatusBadge, StatusDot } from "./status-badge";
import { ExternalLink, Building2 } from "lucide-react";
import { cn } from "@/lib/utils";

interface BankCardProps {
  bank: Bank;
}

export function BankCard({ bank }: BankCardProps) {
  return (
    <Card className="hover:border-primary/30 transition-colors">
      <CardHeader className="pb-3">
        <div className="flex items-start justify-between gap-3 overflow-hidden">
          <div className="flex items-center gap-3 min-w-0">
            <Avatar className="size-10 rounded-lg">
              <AvatarImage src={bank.logo} />
              <AvatarFallback className="rounded-lg">
                {bank.name.substring(0, 2).toUpperCase()}
              </AvatarFallback>
            </Avatar>
            <div className="min-w-0">
              <div className="flex items-center gap-2">
                <h3
                  className="font-semibold text-foreground truncate"
                  title={bank.name}
                >
                  {bank.name}
                </h3>
                {bank.website && (
                  <a
                    href={bank.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted-foreground hover:text-primary transition-colors shrink-0"
                  >
                    <ExternalLink size={14} />
                  </a>
                )}
              </div>
              <p className="text-xs text-muted-foreground">
                Updated {new Date(bank.lastUpdated).toLocaleDateString()}
              </p>
            </div>
          </div>
          <StatusBadge status={bank.status} sources={bank.sources} showLabel />
        </div>
      </CardHeader>
      <CardContent className="space-y-4">
        {/* Features Grid */}
        <div className="space-y-2">
          <h4 className="text-xs font-medium text-muted-foreground uppercase tracking-wider">
            Payment Features
          </h4>
          <div className="grid grid-cols-3 gap-2">
            <FeatureItem label="P2P" status={bank.features.p2p} />
            <FeatureItem label="Online" status={bank.features.onlinePayments} />
            <FeatureItem label="Local" status={bank.features.localPayments} />
          </div>
        </div>

        {/* App Availability */}
        <div className="space-y-2">
          <h4 className="text-xs font-medium text-muted-foreground uppercase tracking-wider">
            App Availability
          </h4>
          <div className="flex gap-3">
            <AppBadge
              icon={<div className="font-bold">W</div>}
              label="Wero App"
              status={bank.appAvailability.weroApp}
            />
            <AppBadge
              icon={<Building2 size={16} />}
              label="Bank App"
              status={bank.appAvailability.bankingApp}
            />
          </div>
        </div>
      </CardContent>
    </Card>
  );
}

function FeatureItem({ label, status }: { label: string; status: Status }) {
  return (
    <div className="flex flex-col justify-between items-center gap-1.5 rounded-lg bg-secondary/50 p-2">
      <span className="text-xs text-muted-foreground">{label}</span>
      <StatusBadge status={status} size="sm" />
    </div>
  );
}

function AppBadge({
  icon,
  label,
  status,
}: {
  icon: ReactNode;
  label: string;
  status: Status;
}) {
  return (
    <div
      className={cn(
        "flex items-center gap-2 rounded-lg px-3 py-2 text-sm flex-1 bg-secondary/50 text-muted-foreground",
      )}
    >
      {icon}
      <span className="text-xs">{label}</span>
      <StatusDot status={status} />
    </div>
  );
}
