import { processSteps } from "@/data/process";

export function ProcessTimeline() {
  return (
    <ol className="process-path">
      {processSteps.map((step, index) => (
        <li key={step}>
          <span>{String(index + 1).padStart(2, "0")}</span>
          <h3>{step}</h3>
          <p>
            {index === 0
              ? "We begin with the purpose, site basics and the client's decision priorities."
              : "Each stage clarifies the design before the next layer is developed."}
          </p>
        </li>
      ))}
    </ol>
  );
}

