import React from "react";
import WelcomeBanner from "./_components/welcome-banner";
import AiTools from "./_components/Ai-tools";
import History from "./_components/History";

function Dashboard() {
  return (
    <div>
      <WelcomeBanner /> <AiTools />
      <History />
    </div>
  );
}

export default Dashboard;
