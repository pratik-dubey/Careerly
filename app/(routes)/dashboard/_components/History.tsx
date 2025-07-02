"use client";
import { useState } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
export default function History() {
  const [history, setHistory] = useState([]);
  return (
    <div className="mt-5 border p-4 rounded-xl">
      <h2 className="font-bold text-xl">Previous History</h2>
      <p className="text-gray-400">
        What you previously worked on, you can find it here
      </p>

      {history.length == 0 && (
        <div className="flex flex-col items-center justify-center">
          <Image alt="idea" src={"/idea.png"} width={90} height={90}></Image>
          <h2>You don't have any history</h2>
          <Button className="mt-3">Explore AI tools</Button>
        </div>
      )}
    </div>
  );
}
