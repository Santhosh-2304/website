import React from "react";
import InfoBlock from "../components/InfoBlock";

export default function Block2() {
  return (
    <div>

      <InfoBlock
        title="Become an upskilling master"
        content="Close skills gaps and keep your tech talent thanks to thousands of on-demand, expert-led courses and the ability to learn at your preferred pace..."
        image="src/assets/IT.avif"
      />

      <InfoBlock
        title="Combine courses with labs for next-level learning"
        content="Pair in-progress skills with a secure, provisioned practice environment to improve project readiness and speed to mastery..."
        image="src/assets/app.jpg"
        reverse
      />

    </div>
  );
}