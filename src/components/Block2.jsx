import React from "react";
import InfoBlockText from "../components/InfoBlockText";

export default function Block2() {
  return (
    <div">

      <InfoBlockText
        title="Become an upskilling master"
        text="Close skills gaps and keep your tech talent thanks to thousands of on-demand, expert-led courses and the ability to learn at your preferred pace..."
        image="src/assets/cloud-practioner.webp"
      />

      <InfoBlockText
        title="Combine courses with labs for next-level learning"
        text="Pair in-progress skills with a secure, provisioned practice environment to improve project readiness and speed to mastery..."
        image="src/assets/next-level-learning.webp"
        reverse
      />

    </div>
  );
}
