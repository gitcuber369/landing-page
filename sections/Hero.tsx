import { Button } from "@/components/Button";
import React from "react";

function Hero() {
  return (
    <div className="container">
      <h1 className="text-8xl font-semibold tracking-tighte bg-[radial-gradient(100%_100%_at_top_left,white,white,rgb(74,32,138,.5))]r">
        Dream Skrin
      </h1>
      <p>
        We convert your ideas into reality by making your Websites and
        Applications{" "}
      </p>
      <Button>Join our waiting list</Button>
    </div>
  );
}

export default Hero;
