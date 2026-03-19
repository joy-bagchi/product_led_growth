import React from "react";

type StageId =
  | "market"
  | "discovery"
  | "value"
  | "strategy"
  | "plg"
  | "experiments"
  | "metrics"
  | "execution"
  | "ops"
  | "learning";

type Stage = {
  id: StageId;
  title: string;
  subtitle: string;
  bullets: string[];
};

type MacroSystem = {
  title: string;
  color: string;
  items: string[];
  description: string;
};

export default function PersonalProductStrategyPlaybookWorkflow() {
  const stages: Stage[] = [
    {
      id: "market",
      title: "Market Understanding",
      subtitle: "Where can we win?",
      bullets: [
        "TAM / segments / ICP",
        "Competition / positioning",
        "Pricing / market dynamics",
      ],
    },
    {
      id: "discovery",
      title: "Customer Discovery",
      subtitle: "What problem matters?",
      bullets: [
        "JTBD",
        "User pain points",
        "User journey / personas",
      ],
    },
    {
      id: "value",
      title: "Value Creation",
      subtitle: "Why will users care?",
      bullets: [
        "Value proposition",
        "Product vision",
        "North star definition",
      ],
    },
    {
      id: "strategy",
      title: "Product Strategy",
      subtitle: "How do we win?",
      bullets: [
        "Strategic pillars",
        "Initiatives",
        "Roadmap themes",
      ],
    },
    {
      id: "plg",
      title: "Product Design + PLG Architecture",
      subtitle: "How does value spread?",
      bullets: [
        "Activation moment",
        "Retention / workflow embedding",
        "Growth loops / collaboration",
        "Expansion / network effects",
      ],
    },
    {
      id: "experiments",
      title: "Experimentation System",
      subtitle: "What should we test first?",
      bullets: [
        "Hypotheses",
        "Prototype / MVP / A/B",
        "Pilot / beta learning",
      ],
    },
    {
      id: "metrics",
      title: "Metrics + Instrumentation",
      subtitle: "How do we know it works?",
      bullets: [
        "North star",
        "Activation / retention / DAU-MAU",
        "K-factor / NRR / revenue / market share",
      ],
    },
    {
      id: "execution",
      title: "Execution + Delivery",
      subtitle: "How do we ship safely?",
      bullets: [
        "MVP → Beta → GA",
        "Sprint cycles",
        "Release readiness",
      ],
    },
    {
      id: "ops",
      title: "Operating System",
      subtitle: "How does the org stay aligned?",
      bullets: [
        "Stakeholder management",
        "Prioritization / roadmap tracking",
        "Weekly / monthly reviews",
      ],
    },
    {
      id: "learning",
      title: "Feedback + Learning Loop",
      subtitle: "What do we change next?",
      bullets: [
        "Customer feedback",
        "Experiment outcomes",
        "Metric-driven course correction",
      ],
    },
  ];

  const macroSystems: MacroSystem[] = [
    {
      title: "1. Value System",
      color: "bg-blue-50 border-blue-200",
      items: ["Market", "Discovery", "Value", "Strategy"],
      description: "Understand the market, user, and value proposition.",
    },
    {
      title: "2. Growth System",
      color: "bg-emerald-50 border-emerald-200",
      items: ["Activation", "Retention", "Growth Loops", "Expansion"],
      description: "Design the product so value propagates through usage.",
    },
    {
      title: "3. Execution System",
      color: "bg-amber-50 border-amber-200",
      items: ["Experiments", "Metrics", "Build", "Operate", "Learn"],
      description: "Instrument, ship, review, and refine with rigor.",
    },
  ];

  const [active, setActive] = React.useState<StageId>(stages[0].id);
  const activeStage = stages.find((s) => s.id === active) ?? stages[0];

  return (
    <div className="min-h-screen bg-slate-50 p-6 md:p-10">
      <div className="mx-auto max-w-7xl">
        <div className="mb-8">
          <h1 className="text-3xl md:text-4xl font-bold tracking-tight text-slate-900">
            Personal Product Strategy Playbook
          </h1>
          <p className="mt-2 text-base md:text-lg text-slate-600 max-w-3xl">
            An interactive visual workflow connecting value creation, product strategy,
            PLG, metrics, execution, and learning.
          </p>
        </div>

        <div className="grid gap-6 lg:grid-cols-[1.4fr_0.9fr]">
          <div className="rounded-3xl border border-slate-200 bg-white p-5 md:p-6 shadow-sm">
            <div className="mb-4 flex items-center justify-between gap-4">
              <div>
                <h2 className="text-xl font-semibold text-slate-900">Visual Workflow</h2>
                <p className="text-sm text-slate-500">
                  Click any stage to inspect its role in the system.
                </p>
              </div>
              <div className="rounded-full bg-slate-100 px-3 py-1 text-xs font-medium text-slate-600">
                Strategy → Growth → Execution → Learning
              </div>
            </div>

            <div className="space-y-3">
              {stages.map((stage, idx) => {
                const isActive = active === stage.id;
                return (
                  <div key={stage.id} className="flex flex-col items-center">
                    <button
                      onClick={() => setActive(stage.id)}
                      className={`w-full rounded-2xl border p-4 text-left transition-all ${
                        isActive
                          ? "border-slate-900 bg-slate-900 text-white shadow-lg"
                          : "border-slate-200 bg-white text-slate-900 hover:border-slate-400 hover:shadow-sm"
                      }`}
                    >
                      <div className="flex items-start justify-between gap-4">
                        <div>
                          <div className={`text-xs font-semibold uppercase tracking-[0.18em] ${isActive ? "text-slate-300" : "text-slate-500"}`}>
                            Stage {idx + 1}
                          </div>
                          <div className="mt-1 text-lg font-semibold">{stage.title}</div>
                          <div className={`mt-1 text-sm ${isActive ? "text-slate-300" : "text-slate-600"}`}>
                            {stage.subtitle}
                          </div>
                        </div>
                        <div className={`mt-1 text-xs ${isActive ? "text-slate-300" : "text-slate-400"}`}>
                          Click to inspect
                        </div>
                      </div>
                    </button>
                    {idx < stages.length - 1 && (
                      <div className="my-1 flex h-8 items-center justify-center">
                        <div className="h-8 w-px bg-slate-300" />
                      </div>
                    )}
                  </div>
                );
              })}
            </div>

            <div className="mt-6 rounded-2xl border border-dashed border-slate-300 bg-slate-50 p-4">
              <div className="text-sm font-medium text-slate-700">Core loop</div>
              <div className="mt-2 text-sm text-slate-600">
                Vision → Strategy → Product Experience → Metrics → Learning → Refined Strategy
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <div className="rounded-3xl border border-slate-200 bg-white p-5 md:p-6 shadow-sm sticky top-6">
              <div className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">
                Active Stage
              </div>
              <h3 className="mt-2 text-2xl font-bold text-slate-900">{activeStage.title}</h3>
              <p className="mt-1 text-sm text-slate-600">{activeStage.subtitle}</p>
              <div className="mt-5 space-y-3">
                {activeStage.bullets.map((bullet) => (
                  <div key={bullet} className="rounded-2xl bg-slate-50 px-4 py-3 text-sm text-slate-700 border border-slate-200">
                    {bullet}
                  </div>
                ))}
              </div>
              <div className="mt-5 rounded-2xl bg-slate-900 p-4 text-sm text-slate-200">
                <div className="font-semibold text-white">Leadership question</div>
                <div className="mt-1">
                  {activeStage.id === "market" && "Where can we win, and what makes this market attractive?"}
                  {activeStage.id === "discovery" && "What user problem is frequent, painful, and worth solving?"}
                  {activeStage.id === "value" && "What differentiated value will make users care?"}
                  {activeStage.id === "strategy" && "What strategic choices help this product win?"}
                  {activeStage.id === "plg" && "How does usage itself propagate the product to more users?"}
                  {activeStage.id === "experiments" && "What is the fastest way to validate our riskiest assumption?"}
                  {activeStage.id === "metrics" && "What evidence proves value, growth, and business impact?"}
                  {activeStage.id === "execution" && "How do we ship with quality, speed, and clarity?"}
                  {activeStage.id === "ops" && "How do we keep teams aligned, focused, and accountable?"}
                  {activeStage.id === "learning" && "What did we learn, and how should strategy evolve now?"}
                </div>
              </div>
            </div>

            <div className="rounded-3xl border border-slate-200 bg-white p-5 md:p-6 shadow-sm">
              <h2 className="text-xl font-semibold text-slate-900">Macro Systems</h2>
              <div className="mt-4 grid gap-4">
                {macroSystems.map((system) => (
                  <div key={system.title} className={`rounded-2xl border p-4 ${system.color}`}>
                    <div className="font-semibold text-slate-900">{system.title}</div>
                    <div className="mt-1 text-sm text-slate-600">{system.description}</div>
                    <div className="mt-3 flex flex-wrap gap-2">
                      {system.items.map((item) => (
                        <span key={item} className="rounded-full bg-white/80 px-3 py-1 text-xs font-medium text-slate-700 border border-slate-200">
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
