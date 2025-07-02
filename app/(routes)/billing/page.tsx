import { PricingTable } from "@clerk/nextjs";

export default function Billing() {
  return (
    <div>
      <h2>Choose Your Careerly Plan</h2>
      <PricingTable />
    </div>
  );
}
