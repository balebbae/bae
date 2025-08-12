import React from "react";
import { Home } from "@/components/Home";
import { AuroraBackground } from "@/components/ui/aurora-background";

const Page = () => {
  return (
    <AuroraBackground>
      <main className="w-full h-screen">
        <Home />
      </main>
    </AuroraBackground>
  );
};

export default Page;
