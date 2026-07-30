import type { CSSProperties } from "react";
import { values } from "@/data/process";

export function WhyDiagram() {
  return (
    <div className="why-diagram">
      <div className="why-core">
        <span>RPH</span>
        <strong>Precision + Vastu + Vision</strong>
      </div>
      {values.map((value, index) => (
        <article key={value} style={{ "--i": index } as CSSProperties}>
          <span>{String(index + 1).padStart(2, "0")}</span>
          <p>{value}</p>
        </article>
      ))}
    </div>
  );
}
