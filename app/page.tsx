import { WeroTracker } from "@/components/wero-tracker";
import { weroDataSchema } from "@/lib/schema";

async function getWeroData() {
  const response = await fetch(
    "https://raw.githubusercontent.com/sharknoon/wero-tracker-data/refs/heads/main/data.json",
  );
  const data = await response.json();
  return weroDataSchema.parse(data);
}

export default async function Page() {
  const data = await getWeroData();

  return <WeroTracker data={data} />;
}
