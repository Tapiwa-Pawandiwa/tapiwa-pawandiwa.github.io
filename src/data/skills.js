export const SKILL_GROUPS = [
  {
    name: "Languages",
    note: "daily drivers",
    items: ["Python", "TypeScript", "JavaScript", "Go", "SQL", "C#", "HTML/CSS"],
  },
  {
    name: "AI & Agentic Systems",
    note: "current focus",
    items: [
      "Google ADK",
      "LangGraph",
      "LangChain",
      "Agent Orchestration",
      "Context Engineering",
      "RAG",
      "Vector Search",
      "Qdrant",
      "Voyage AI",
      "Claude Code",
    ],
    focus: true,
  },
  {
    name: "Machine Learning & XAI",
    note: "research background",
    items: [
      "PyTorch",
      "scikit-learn",
      "Machine Learning",
      "Explainable AI (XAI)",
      "SHAP",
      "LIME",
      "MLflow",
    ],
  },
  {
    name: "Frontend & Mobile",
    note: "shipped to stores",
    items: ["React", "React Native", "Next.js", "Svelte", "Expo", "EAS"],
  },
  {
    name: "Backend & Data",
    note: "services in production",
    items: ["FastAPI", "REST APIs", "PostgreSQL", "Supabase", "Redis"],
  },
  {
    name: "Cloud & DevOps",
    note: "pipelines in production",
    items: ["Docker", "Git", "GitHub Actions", "CI/CD", "AWS Amplify", "Render", "Sentry", "PostHog"],
  },
  {
    name: "Design & Research",
    note: "end to end product work",
    items: ["Figma", "UI/UX Design", "User Research", "AI Research"],
  },
  {
    name: "Soft Skills",
    note: "how I work",
    items: [
      "Creative Problem Solving",
      "Systems Thinking",
      "Customer-Oriented",
      "Research & Detail-Oriented",
      "Rapid Learning & Adaptability",
      "Technical Communication",
      "Ownership & Initiative",
    ],
  },
];

export const FOCUS_SKILL = "Agent Orchestration";

export const totalTools = () =>
  SKILL_GROUPS.reduce((n, g) => n + g.items.length, 0);
