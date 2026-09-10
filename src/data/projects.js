import ProjectsImage from "../../public/images/ProjectsImage.png";
import itemEditFillLevel from "../../public/images/projects/FoodStorii/item-edit-fill-level.png";
import DinerHead from "../../public/images/projects/Diner/DinerHead.jpg";
import janetChatUI from "../../public/images/projects/Janet/janet-chat-ui.png";

export { ProjectsImage };

// JANET's live demo is temporarily down for work — demo links below are
// nulled out rather than removed. Restore: "https://chat-ui-868228189550.europe-north1.run.app/chat"

export const FEATURED = {
  slug: "janet",
  kicker: "Agentic AI platform · Google ADK · Solo build",
  nameLines: ["JANET"],
  description:
    "An AI-orchestrated hotel concierge and operations platform built on Google's Agent Development Kit and Claude — a single conversational agent that resolves guest identity, checks real availability, and books or modifies stays, with every write logged, idempotent, and gated by risk tier.",
  stack: ["Google ADK", "Claude", "PostgreSQL", "Voyage AI", "Next.js"],
  mediaKind: "browser",
  browserShot: janetChatUI,
  browserUrl: "chat-ui-868228189550.europe-north1.run.app",
  mediaPlaceholderCaption: "drop a product screenshot here\nguest chat UI · live demo",
  secondaryCta: null,
};

export const PROJECTS = [
  {
    slug: "janet",
    name: "JANET",
    kicker: "Agentic AI platform · Google ADK",
    tagline:
      "AI-orchestrated hotel concierge that books, modifies and cancels real stays — with human confirmation gating every consequential action.",
    media: janetChatUI,
    mediaType: "image",
    mediaCaption: "guest chat UI · live demo",
    stack: ["Google ADK", "Claude", "PostgreSQL"],
    stackFull: [
      "Google ADK",
      "Claude (Haiku)",
      "LiteLLM",
      "PostgreSQL",
      "pgvector",
      "Voyage AI",
      "Next.js",
      "React",
      "Tailwind CSS",
      "Server-Sent Events",
    ],
    github: "https://github.com/Tapiwa-Pawandiwa/hotel-concierge-agent",
    demo: null,
    facts: [
      { label: "Role", value: "Solo · Agent engineer" },
      { label: "Year", value: "2026—Present" },
      { label: "Status", value: "Active · Ongoing" },
      { label: "Type", value: "Agentic AI platform" },
    ],
    overview: [
      "An AI-orchestrated hotel concierge and operations platform built on Google's Agent Development Kit and Claude. A guest talks to a single conversational agent that resolves their identity, checks real room availability, books and modifies stays, and answers hotel policy questions — every write action logged, idempotent, and gated by risk tier.",
      "Money or date changing actions always require explicit human confirmation before they execute, using ADK's native require_confirmation mechanism, and the agent runs a full Reason-Act-Observe loop rather than answering in a single shot — chaining tool calls and confirmation gates through one conversational interface.",
    ],
    highlights: [
      "Risk-tiered tool permissions with real human-in-the-loop gating — Tier 3 actions (money, dates, bookings) always pause for explicit guest confirmation.",
      "Idempotency by contract on every write — a retried or duplicated tool call replays the original result instead of double-booking or double-charging a guest.",
      "Agentic RAG over a real vector-enabled Postgres database (pgvector + Voyage AI embeddings), with retrieval decided per turn by the model rather than forced on every message.",
      "A ReAct-style reasoning loop that chains tool calls and confirmation gates through one interface, from a policy question to a full booking.",
    ],
  },
  {
    slug: "foodstorii",
    name: "FoodStorii",
    nameLines: ["Food", "Storii"],
    kicker: "AI product · React Native · Co-founder",
    tagline:
      "AI powered kitchen management — photo scanning, barcode entry, fill level tracking and a recipe assistant.",
    media: itemEditFillLevel,
    mediaType: "image",
    mediaCaption: "item editing · fill level tracker",
    stack: ["React Native", "FastAPI", "LangGraph"],
    stackFull: [
      "React Native",
      "Expo",
      "FastAPI",
      "LangGraph",
      "Claude API",
      "Supabase",
      "PostgreSQL",
      "Redis",
      "Sentry",
      "PostHog",
    ],
    github: null,
    demo: null,
    facts: [
      { label: "Role", value: "Co-founder · Lead engineer" },
      { label: "Year", value: "2025—2026" },
      { label: "Status", value: "TestFlight beta" },
      { label: "Type", value: "AI mobile product" },
    ],
    overview: [
      "An AI powered kitchen management app I co-founded and built as lead engineer. I designed and built the core experience: an AI photo scanning flow that lets users add items by snapping a photo of a receipt, fridge, or ingredient, alongside barcode scanning and manual entry, and a fill level tracker so users can log roughly how much of an item is left rather than just yes or no.",
      "I designed the UI end to end, from the kitchen dashboard (pantry, fridge, and freezer at a glance) to the item editing screens, and built the conversational AI assistant, Tina, that recommends recipes based on what is actually in the kitchen.",
    ],
    highlights: [
      "AI photo scanning pipeline for receipts, fridge shots and single ingredients, with barcode and manual fallbacks.",
      "Fill level tracker — a quantity model closer to how people actually think about food than in stock / out of stock.",
      "FastAPI and LangGraph services behind the AI features, with Supabase for data, Redis caching, rate limiting and row level security.",
      "CI/CD and EAS distribution that took the app from MVP to a live TestFlight beta with real test users.",
    ],
  },
  {
    slug: "sharewhere",
    name: "ShareWhere",
    kicker: "Full stack mobile · Beta",
    tagline:
      "Hyper local, item based donations platform built around a 24 hour commitment timer.",
    media: "https://d1ilajauo306z1.cloudfront.net/ShareWhere_trimmed.mp4",
    mediaType: "video",
    mediaCaption: "walkthrough · 1:39",
    stack: ["React Native", "Supabase", "TypeScript"],
    stackFull: [
      "React Native",
      "Expo",
      "Supabase",
      "PostgreSQL",
      "Row Level Security",
      "Edge Functions",
      "Triggers",
      "React Query",
      "TypeScript",
    ],
    github: "https://github.com/Tapiwa-Pawandiwa/Sharewear",
    demo: "https://d1ilajauo306z1.cloudfront.net/ShareWhere_trimmed.mp4",
    facts: [
      { label: "Role", value: "Solo full stack" },
      { label: "Year", value: "2024—2025" },
      { label: "Status", value: "Beta" },
      { label: "Type", value: "Marketplace" },
    ],
    overview: [
      "A hyper local, item based donations platform connecting people who have things to give with people nearby who need them, built around a 24 hour commitment timer that keeps listings moving instead of going stale.",
      "I replaced an early cron based polling architecture with a fully event driven system using Supabase database triggers and Edge Functions, and implemented dual portal access with row level security and real time status synchronisation.",
    ],
    highlights: [
      "Event driven expiry and status flow using Postgres triggers plus Edge Functions, replacing cron polling.",
      "Dual portal access (donor and requester) enforced with row level security policies.",
      "Real time status synchronisation so both sides of a donation always see the same state.",
      "Location based discovery with categories, request feeds and commitment timers.",
    ],
  },
  {
    slug: "diner",
    name: "Diner",
    kicker: "Full stack mobile · Beta",
    tagline:
      "Marketplace connecting travellers with local hosts cooking home made meals.",
    media: DinerHead,
    mediaType: "image",
    mediaCaption: "diner · host discovery",
    stack: ["React Native", "AWS Amplify", "GraphQL"],
    stackFull: [
      "React Native",
      "Expo",
      "AWS Amplify",
      "DynamoDB",
      "GraphQL",
      "S3",
      "Cognito",
      "TypeScript",
      "React Query",
      "Node.js",
      "Jest",
    ],
    github: "https://github.com/Tapiwa-Pawandiwa/DinerExpoFood",
    demo: null,
    facts: [
      { label: "Role", value: "Solo full stack" },
      { label: "Year", value: "2023—2024" },
      { label: "Status", value: "Beta" },
      { label: "Type", value: "Marketplace" },
    ],
    overview: [
      "A marketplace app connecting travellers with local hosts offering home cooked meals, featuring location based discovery, multi basket booking, authentication flows, favourites and device calendar integration.",
      "I managed complex global state across four React Context providers and wrote end to end and unit tests with Jest.",
    ],
    highlights: [
      "Multi basket booking flow so a traveller can order from several hosts in one trip.",
      "Location based discovery backed by GraphQL queries over DynamoDB.",
      "Authentication, favourites and device calendar integration via Amplify and Cognito.",
      "Global state across four Context providers, covered by unit and end to end tests.",
    ],
  },
  {
    slug: "berna-framework",
    name: "BERNA Framework",
    kicker: "Clinical AI · Research",
    tagline:
      "Master's thesis benchmarking the robustness of explainable AI methods for fetal health classification. Awarded Distinction.",
    media: null,
    mediaType: "placeholder",
    mediaCaption: "drop a benchmarking results figure here\nUCI CTG · SHAP vs uncertainty estimation",
    stack: ["Python", "PyTorch", "SHAP"],
    stackFull: [
      "Python",
      "PyTorch",
      "Scikit-learn",
      "SHAP",
      "Counterfactuals",
      "Prototypes",
      "Uncertainty estimation",
      "UCI CTG",
    ],
    github: null,
    demo: null,
    facts: [
      { label: "Role", value: "Researcher" },
      { label: "Year", value: "2024" },
      { label: "Status", value: "Distinction" },
      { label: "Type", value: "MSc thesis" },
    ],
    overview: [
      "A systematic benchmarking framework evaluating the stability and robustness of post hoc explainable AI methods — SHAP, counterfactuals, prototypes and uncertainty estimation — applied to machine learning models for fetal health classification.",
      "I validated the framework with 17 clinical practitioners and applied statistical significance testing across perturbation conditions.",
    ],
    highlights: [
      "Key finding: the choice of XAI method is a stronger determinant of robustness than the choice of model class.",
      "Uncertainty estimation held up far better than popular methods like SHAP under real world noise.",
      "Validation study with 17 clinical practitioners assessing explanation usefulness.",
      "Statistical significance testing across systematically perturbed input conditions.",
    ],
  },
];

export const EARLIER = [
  {
    name: "Recipe Lister",
    tagline: "Recipes across cuisines and categories",
    github: "https://github.com/Tapiwa-Pawandiwa/MealsApp",
  },
  {
    name: "Uber Eats Clone",
    tagline: "React Native and AWS Amplify build",
    github: "https://github.com/Tapiwa-Pawandiwa/UberEatsUser",
  },
  {
    name: "Number Guessing Game",
    tagline: "A simple number guessing game",
    github: "https://github.com/Tapiwa-Pawandiwa/RandomGuessingApp",
  },
  {
    name: "Expense Tracker",
    tagline: "A simple expense tracker app",
    github: "https://github.com/Tapiwa-Pawandiwa/ExpenseTracker",
  },
];

export function daysSinceHelloWorld() {
  return Math.floor((Date.now() - Date.parse("2017-02-20")) / 86400000);
}

// bg/fg/rule for the index's magazine card-fill cycle: paper, accent, ink, repeat.
export function cardFill(i) {
  const cycle = [
    { bg: "var(--paper)", fg: "var(--ink)", rule: "rgba(17,17,17,0.25)" },
    { bg: "var(--accent)", fg: "var(--ink)", rule: "rgba(17,17,17,0.35)" },
    { bg: "var(--ink)", fg: "var(--paper)", rule: "rgba(247,243,238,0.3)" },
  ];
  return cycle[i % 3];
}
