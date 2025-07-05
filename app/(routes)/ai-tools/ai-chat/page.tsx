"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Send } from "lucide-react";
import EmptyState from "./_components/EmptyState";
import { useState } from "react";

export default function Aichat() {
  const [userInput, setUserInput] = useState<string>();
  return (
    <div className="px-10 md:px-24 lg:px-36 xl:px-48">
      <div className="flex justify-between items-center">
        <div>
          <h2 className="font-bold text-xl">Careerly AI chat</h2>
          <p>
            Clear your career doubts instantly — get personalized guidance to
            make smarter, confident decisions with the power of AI.
          </p>
        </div>
        <Button>New Chat</Button>
      </div>
      <div className="flex flex-col h-[80vh]">
        <div className="m-5">
          {/* Show Empty State  */}
          <EmptyState
            selectedQuestion={(question: string) => setUserInput(question)}
          />
        </div>
        <div className="flex-1"></div>
        <div className="flex justify-between items-center gap-x-7">
          <Input
            placeholder="Ask now"
            value={userInput}
            onChange={(event) => setUserInput(event.target.value)}
          ></Input>
          <Button>
            <Send />
          </Button>
        </div>
      </div>
    </div>
  );
}
