import { PricingTable } from "@clerk/nextjs";

export default function Billing() {
  return (
    <div>
      <h2 className="font-bold text-3xl text-center mb-6">
        <span className="underline">Choose Your Careerly Plan</span>
      </h2>

      <p className="text-gray-700 text-center mb-3">
        ✔ Plans to fullfill all your career related needs
      </p>
      <PricingTable />
    </div>
  );
}
