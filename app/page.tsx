import { WeroTracker } from "@/components/wero-tracker";

async function getWeroData() {
  const res = await fetch(
    "https://raw.githubusercontent.com/sharknoon/wero-tracker-data/main/data.json",
  );
  return res.json();
}

export default async function Page() {
  const data = await getWeroData();

  return <WeroTracker data={data} />;
}
