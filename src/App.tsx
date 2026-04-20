import React from "react";

type Layer = {
  id: "human" | "system" | "pillars" | "decision";
  index: string;
  title: string;
  label: string;
  color: string;
  accent: string;
  questions: string[];
  outputs: string[];
  summary: string;
};

const layers: Layer[] = [
  {
    id: "human",
    index: "01",
    title: "Human",
    label: "Design Thinking Layer",
    color: "var(--card-human)",
    accent: "var(--accent-human)",
    questions: [
      "What does the user do today?",
      "What do they feel?",
      "Where is friction?",
      "Where is trust broken?",
    ],
    outputs: ["Journey map", "Empathy map"],
    summary: "Start with lived reality, not architecture.",
  },
  {
    id: "system",
    index: "02",
    title: "System",
    label: "Systems Thinking Layer",
    color: "var(--card-system)",
    accent: "var(--accent-system)",
    questions: [
      "What structure causes this?",
      "What loops reinforce it?",
      "What incentives drive behavior?",
      "Where are constraints?",
    ],
    outputs: ["Root cause model", "Feedback loops", "Leverage points"],
    summary: "Interpret behavior through structure and incentives.",
  },
  {
    id: "pillars",
    index: "03",
    title: "Pillars",
    label: "Product Evaluation Layer",
    color: "var(--card-pillars)",
    accent: "var(--accent-pillars)",
    questions: [
      "Does this reduce friction and increase trust?",
      "Does this fit architecture and scale constraints?",
      "Does this improve outcomes and align incentives?",
    ],
    outputs: ["Usability", "Feasibility", "Viability"],
    summary: "Evaluate the solution from human, system, and business angles.",
  },
  {
    id: "decision",
    index: "04",
    title: "Decision",
    label: "Executive Layer",
    color: "var(--card-decision)",
    accent: "var(--accent-decision)",
    questions: [
      "What should we do next?",
      "Why is this the highest-leverage move?",
      "How do we state the decision in business terms?",
    ],
    outputs: ["Decision statement", "Executive narrative"],
    summary: "Do not present analysis. Drive a decision.",
  },
];

const flow = [
  {
    title: "Discovery",
    layer: "Human",
    prompt: "Walk me through what the user does today.",
  },
  {
    title: "Diagnosis",
    layer: "System",
    prompt: "Why does the system produce this behavior?",
  },
  {
    title: "Design",
    layer: "Solution",
    prompt: "What changes the structure?",
  },
  {
    title: "Decision",
    layer: "Pillars",
    prompt: "Is it usable, feasible, viable?",
  },
];

const pillars = [
  {
    name: "Usability",
    accent: "var(--accent-human)",
    checks: [
      "Reduces friction",
      "Increases trust",
      "Changes real behavior",
    ],
  },
  {
    name: "Feasibility",
    accent: "var(--accent-system)",
    checks: [
      "Fits existing architecture",
      "Scales with complexity",
      "Makes constraints explicit",
    ],
  },
  {
    name: "Viability",
    accent: "var(--accent-pillars)",
    checks: [
      "Improves business outcomes",
      "Aligns incentives",
      "Stays economically durable",
    ],
  },
];

const financeExample = {
  situation: [
    "Users manually reconcile data",
    "Anxiety and distrust drive double-checking",
  ],
  diagnosis: [
    "Fragmented data sources",
    "No audit traceability",
    "Weak ownership",
  ],
  solution: [
    "Unified audit pipeline",
    "Traceable logs",
    "AI validation",
  ],
  decision:
    "Audit validation can be completed in seconds without manual reconciliation by unifying audit data and applying AI-based traceability.",
};

export default function App() {
  const [activeId, setActiveId] = React.useState<Layer["id"]>("human");
  const activeLayer = layers.find((layer) => layer.id === activeId) ?? layers[0];

  return (
    <main className="memory-map-shell">
      <div className="memory-map-bg memory-map-bg-one" />
      <div className="memory-map-bg memory-map-bg-two" />

      <section className="hero">
        <div className="hero-copy">
          <p className="eyebrow">Product Thinking Memory Map</p>
          <h1>Human → System → Pillars → Decision</h1>
          <p className="hero-text">
            A decision-led map built from `ProductThinking.txt`. Start with human
            reality, explain with system logic, then commit to a business-facing
            decision.
          </p>
          <div className="mental-model">
            <span className="mental-model-label">One-line model</span>
            <p>
              Start with human reality, explain with system logic, decide with
              business impact.
            </p>
          </div>
        </div>

        <div className="failure-card">
          <p className="eyebrow">Likely Failure Mode</p>
          <h2>System-first thinking skips adoption risk.</h2>
          <p>
            If you skip the human layer and jump straight to system design,
            feasibility, and viability, you can build an elegant system that users
            still do not adopt.
          </p>
          <div className="failure-sequence">
            <span>Human</span>
            <span className="muted">skip</span>
            <span>System</span>
            <span>Pillars</span>
            <span>Decision</span>
          </div>
        </div>
      </section>

      <section className="map-layout">
        <div className="map-column">
          <div className="section-heading">
            <p className="eyebrow">Core Map</p>
            <h2>Four layers, one decision path</h2>
          </div>

          <div className="layer-list">
            {layers.map((layer, index) => {
              const isActive = layer.id === activeLayer.id;
              return (
                <React.Fragment key={layer.id}>
                  <button
                    className={`layer-card${isActive ? " active" : ""}`}
                    onClick={() => setActiveId(layer.id)}
                    style={
                      {
                        "--layer-bg": layer.color,
                        "--layer-accent": layer.accent,
                      } as React.CSSProperties
                    }
                  >
                    <div className="layer-card-top">
                      <span className="layer-index">{layer.index}</span>
                      <span className="layer-label">{layer.label}</span>
                    </div>
                    <h3>{layer.title}</h3>
                    <p>{layer.summary}</p>
                    <div className="layer-output-row">
                      {layer.outputs.map((output) => (
                        <span key={output} className="chip">
                          {output}
                        </span>
                      ))}
                    </div>
                  </button>

                  {index < layers.length - 1 ? <div className="connector" /> : null}
                </React.Fragment>
              );
            })}
          </div>
        </div>

        <aside className="detail-panel">
          <p className="eyebrow">Active Layer</p>
          <h2>{activeLayer.title}</h2>
          <p className="detail-label">{activeLayer.label}</p>

          <div className="detail-block">
            <h3>Questions to ask</h3>
            <ul>
              {activeLayer.questions.map((question) => (
                <li key={question}>{question}</li>
              ))}
            </ul>
          </div>

          <div className="detail-block">
            <h3>Outputs</h3>
            <div className="detail-chip-grid">
              {activeLayer.outputs.map((output) => (
                <span key={output} className="chip chip-strong">
                  {output}
                </span>
              ))}
            </div>
          </div>

          {activeLayer.id === "pillars" ? (
            <div className="detail-block">
              <h3>Evaluation lens</h3>
              <div className="pillars-grid">
                {pillars.map((pillar) => (
                  <div
                    key={pillar.name}
                    className="pillar-card"
                    style={{ "--pillar-accent": pillar.accent } as React.CSSProperties}
                  >
                    <h4>{pillar.name}</h4>
                    <ul>
                      {pillar.checks.map((check) => (
                        <li key={check}>{check}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          ) : null}

          {activeLayer.id === "decision" ? (
            <div className="detail-block">
              <h3>Executive framing</h3>
              <blockquote>
                We should do X because it removes friction in the highest-impact
                step, aligns with system constraints, and creates sustainable
                business value.
              </blockquote>
            </div>
          ) : null}
        </aside>
      </section>

      <section className="flow-section">
        <div className="section-heading">
          <p className="eyebrow">Correct Flow</p>
          <h2>Discovery → Diagnosis → Design → Decision</h2>
        </div>
        <div className="flow-grid">
          {flow.map((step) => (
            <article key={step.title} className="flow-card">
              <p className="flow-layer">{step.layer}</p>
              <h3>{step.title}</h3>
              <p>{step.prompt}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="example-section">
        <div className="section-heading">
          <p className="eyebrow">Worked Example</p>
          <h2>Finance and audit context</h2>
        </div>

        <div className="example-grid">
          <article className="example-card">
            <h3>Human</h3>
            <ul>
              {financeExample.situation.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </article>
          <article className="example-card">
            <h3>System</h3>
            <ul>
              {financeExample.diagnosis.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </article>
          <article className="example-card">
            <h3>Solution</h3>
            <ul>
              {financeExample.solution.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </article>
          <article className="example-card decision-card">
            <h3>Decision</h3>
            <p>{financeExample.decision}</p>
          </article>
        </div>
      </section>
    </main>
  );
}
