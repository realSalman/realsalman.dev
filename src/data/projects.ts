export type ArchitectureItem = {
  title: string;
  description?: string;
};

export type ArchitectureStep = {
  type: 'layer' | 'arrow';
  items?: ArchitectureItem[];
  label?: string;
};

export type Project = {
  name: string;
  slug: string;
  description: string | string[];
  details: string;
  language: string;
  stars: number;
  forks: number;
  url: string;
  architecture?: ArchitectureStep[];
  tech?: string[];
  image?: string | null;
  link?: string;
  linkText?: string;
  tagline?: string;
  metrics?: { label: string; value: string }[];
  problem?: string;
  decisions?: { question: string; answer: string }[];
  results?: string[];
  demoUrl?: string;
};

export const projects: Project[] = [
  {
    name: "GreenMesh Infra",
    slug: "greenmesh",
    description: [
      "GPU Cluster Intelligence"
    ],
    details: "I simulated a multi-datacenter AI infrastructure using two physical laptops, each representing an independent datacenter. Each laptop's GPU is split into two separate clusters — so four clusters total, each running on a different simulated energy source. GreenMesh dynamically decides which cluster should handle an inference request based on real-time energy conditions, GPU telemetry, and workload state — routing AI traffic to whichever cluster has the best green-energy availability at that moment.\n\nNon-urgent requests can be deferred entirely: GreenMesh evaluates the current carbon intensity, estimates the next greener window, and holds the request until conditions improve — as long as a user-defined deadline is met.",
    problem: "Running LLM inference is energy-intensive, but most systems are blind to where their energy comes from. The challenge was building an orchestration layer that treats energy source as a first-class routing signal — not just load or latency — while coordinating four independent GPU clusters across two datacenters that discover each other dynamically over a peer-to-peer mesh.",
    decisions: [
      {
        question: "Why P2P federation instead of a central orchestrator?",
        answer: "Each datacenter (laptop) runs autonomously with two GPU clusters. P2P mesh discovery lets nodes join and leave without a single point of failure — closer to how real distributed infrastructure works."
      },
      {
        question: "Why defer requests instead of always routing immediately?",
        answer: "The Deadline Guard evaluates whether a greener energy window is expected within the user's tolerance. If the deadline allows it, deferring a request by 20–30 seconds can shift the workload to a significantly cleaner energy period."
      },
      {
        question: "Why SSE for real-time telemetry?",
        answer: "Server-Sent Events provide a lightweight, unidirectional stream for GPU power, temperature, and energy metrics to the dashboard — no WebSocket overhead, and it works naturally with the aiohttp backend."
      }
    ],
    results: [
      "Dynamic green-aware routing — requests move to the cluster with better energy conditions in real time",
      "Deadline-aware deferral — non-urgent workloads wait for greener windows without missing deadlines",
      "Live GPU telemetry — power draw, temperature, and utilization streamed to the dashboard via SSE",
      "P2P node federation — clusters discover and coordinate with zero central infrastructure",
      "Demonstrated live at a hackathon with two physical laptops running four GPU clusters as independent datacenters"
    ],
    metrics: [
      { label: "Datacenters", value: "2" },
      { label: "GPU Clusters", value: "4" },
      { label: "Federation", value: "P2P" },
      { label: "Telemetry", value: "Real-time" }
    ],
    architecture: [
      { type: 'layer', items: [{ title: 'User', description: 'Chat Interface · Dashboard' }] },
      { type: 'arrow', label: 'HTTP / SSE' },
      { type: 'layer', items: [{ title: 'Router', description: 'Green-Aware Cluster Intelligence' }] },
      { type: 'arrow', label: 'Routes based on energy + load' },
      {
        type: 'layer', items: [
          { title: 'Datacenter A', description: 'Laptop 1 · 2 GPU Clusters' },
          { title: 'Datacenter B', description: 'Laptop 2 · 2 GPU Clusters' }
        ]
      },
      { type: 'arrow', label: 'Each cluster on different energy' },
      {
        type: 'layer', items: [
          { title: 'Cluster A1', description: '☀️ Solar' },
          { title: 'Cluster A2', description: '💨 Wind' },
          { title: 'Cluster B1', description: '⚡ Grid' },
          { title: 'Cluster B2', description: '🔋 Battery' }
        ]
      },
      { type: 'arrow', label: 'P2P Federation' },
      {
        type: 'layer', items: [
          { title: 'GPU Telemetry', description: 'Power · Temp · Utilization' },
          { title: 'Deadline Guard', description: 'Defer or Route Now' },
          { title: 'Carbon Proof', description: 'Energy Source Tracking' }
        ]
      }
    ],
    tech: ["python", "nextjs", "bash"],
    image: null,
    language: "Python",
    stars: 0,
    forks: 0,
    url: "https://github.com/realSalman/GreenMesh"
  },
  {
    name: "OBE Analytics Engnine",
    slug: "obe-platform",
    description: [
      "AI-Powered Academic Engine"
    ],
    details: "I built a full-stack academic management platform for Outcome-Based Education from scratch. The core problem is deceptively hard: universities need to track student attainment not at the course level, but at the individual exam question level — each question maps to a Course Outcome with a percentage weight, those COs roll up to Program Outcomes using a weighted average, and all of this needs to work across thousands of students hitting the system during exam season.\n\nThe backend is 13 self-contained feature modules — departments, programs, semesters, batches, courses, offerings, enrollments, exams, marks, attainment, student-insights, AI, and section-assignments. Each module follows a strict 6-file pattern: routes, controller, service, model, Zod validator, and types. I never wanted a monolithic controller with 2000 lines, so every domain entity is completely isolated.\n\nThe part I'm most proud of is the infrastructure layer I built underneath. I wrote a cacheAside utility with a singleflight pattern — if 200 concurrent requests hit an expired Redis key in the same millisecond, only one actually queries MongoDB. The rest await the same in-flight promise. I built Mongoose plugins that hook into find(), save(), and aggregate() to automatically filter soft-deleted documents and inject createdBy/updatedBy from AsyncLocalStorage — zero prop-drilling anywhere in the codebase. The auth middleware verifies Firebase JWTs, syncs custom claims to MongoDB, and caches them in Redis for 10 minutes to avoid hitting Firebase Admin on every single request during the 1-hour token transition window.\n\nFor student insights, I built two analytical engines: a Cognitive Gap Analyzer that breaks down performance by Bloom's taxonomy level (Remember → Create) and pinpoints exactly which exam questions are causing the most mark loss per CO, and a Path-to-Pass Predictor that calculates the exact percentage a student needs on upcoming exams to pass each CO — factoring in configurable exam weights and completed vs remaining assessments. The attainment computation itself runs a three-tier rollup: question-level marks → CO attainment per exam → weighted CO attainment per offering → PO attainment per batch/department.\n\nThe whole stack runs containerized — Nginx reverse proxy with rate limiting (burst=200 for campus NATs where thousands share an IP), PM2 clustering both the Next.js frontend and Express backend to saturate all CPU cores, Redis for caching, MongoDB Atlas for the database, and Prometheus + Grafana for monitoring.",
    problem: "OBE accreditation requires tracking student attainment at a granularity most systems don't support. Each exam question can map to multiple Course Outcomes with different percentage weights, and those COs map to Program Outcomes with weights of 1, 2, or 3. The attainment calculation needs configurable thresholds — what percentage of students passing a CO constitutes Level 1 vs Level 2 vs Level 3 attainment — and these thresholds differ per department. On top of that, the system needs to handle the concurrent load of an entire university during exam season without falling over.",
    decisions: [
      {
        question: "Why 13 isolated feature modules instead of MVC?",
        answer: "Every domain entity — courses, exams, marks, attainment — lives in its own module with 6 files: routes, controller, service, model, Zod validator, and types. When I need to change how marks are submitted, I open one folder. When someone new joins, they can understand one module without reading the rest. It also means each module can have its own caching strategy and validation logic."
      },
      {
        question: "Why AsyncLocalStorage instead of passing userId through every function?",
        answer: "I wrote a context middleware that injects userId, roles, and requestId into AsyncLocalStorage at the start of every request. Then my audit and soft-delete Mongoose plugins call getRequestUserId() directly — they automatically set createdBy, updatedBy, and deletedBy on every database write without any function parameter ever mentioning a user ID. The entire request lifecycle is contextually aware with zero prop-drilling."
      },
      {
        question: "Why a singleflight pattern in the cache layer?",
        answer: "My cacheAside utility doesn't just check Redis and fall back to MongoDB. It maintains an in-flight promise map — if a cache key expires and 200 requests hit it simultaneously, only the first request executes the database query. The other 199 await the same promise. This prevents cache stampedes during high-traffic periods like result announcements."
      },
      {
        question: "Why graceful degradation everywhere?",
        answer: "Redis might be down, so cacheGet returns null and the app falls back to MongoDB transparently. The withTransaction utility tries to start a MongoDB session, and if the server doesn't support replica sets (like in local dev), it silently executes without a transaction instead of crashing. Firebase custom claims take up to an hour to propagate, so the auth middleware caches them in Redis for 10 minutes as a bridge."
      },
      {
        question: "Why soft-delete with query interception instead of a simple flag?",
        answer: "I wrote a Mongoose plugin that hooks into find, findOne, findOneAndUpdate, countDocuments, and aggregate — it automatically injects { isDeleted: { $ne: true } } into every query. You literally cannot accidentally query deleted data unless you explicitly call .includeDeleted(). The deletedBy field is set automatically from AsyncLocalStorage, so there's always an audit trail."
      }
    ],
    results: [
      "Three-tier attainment rollup — question marks → CO attainment per exam → weighted PO attainment per batch and department, with configurable Level 1/2/3 thresholds per department",
      "Cognitive Gap Analyzer — breaks down student performance by Bloom's taxonomy level and pinpoints the exact exam questions causing the most CO mark loss",
      "Path-to-Pass Predictor — calculates the exact percentage needed on remaining exams per CO, with weighted exam scoring and safe/achievable/at-risk/critical status",
      "Cache stampede protection — singleflight pattern ensures only one database query per expired cache key, regardless of concurrent request volume",
      "Zero prop-drilling — AsyncLocalStorage context flows through the entire request lifecycle, automatically populating audit and soft-delete fields on every write",
      "Fully containerized — Nginx (rate-limited, gzip), PM2 clustered frontend + backend, Redis, MongoDB Atlas, Prometheus + Grafana monitoring"
    ],
    metrics: [
      { label: "Target Users", value: "20K+" },
      { label: "Backend Modules", value: "13" },
      { label: "Cache", value: "Singleflight" },
      { label: "Monitoring", value: "Prometheus" }
    ],
    architecture: [
      { type: 'layer', items: [{ title: 'Users', description: 'Students · Teachers · HODs · Admins' }] },
      { type: 'arrow', label: 'HTTPS · Firebase JWT' },
      { type: 'layer', items: [{ title: 'Nginx', description: 'Rate Limiting · Gzip · Reverse Proxy' }] },
      { type: 'arrow', label: 'Upstream routing' },
      {
        type: 'layer', items: [
          { title: 'Next.js 16', description: 'React 19 · PM2 Cluster · Role Guards' },
          { title: 'Express v5', description: 'TypeScript · PM2 Cluster · Zod Validation' }
        ]
      },
      { type: 'arrow', label: 'AsyncLocalStorage context' },
      {
        type: 'layer', items: [
          { title: 'Auth Middleware', description: 'Firebase Verify · Claims Cache · Role Guards' },
          { title: 'Request Context', description: 'userId · roles · requestId' },
          { title: 'Audit + Soft-Delete', description: 'Mongoose Plugins · Auto Query Filter' }
        ]
      },
      { type: 'arrow', label: '13 Feature Modules' },
      {
        type: 'layer', items: [
          { title: 'Attainment Engine', description: 'CO→PO Weighted Rollup' },
          { title: 'Student Insights', description: 'Bloom Gap · Path Predictor' },
          { title: 'Marks Pipeline', description: 'Bulk Submit · Transactions' }
        ]
      },
      { type: 'arrow', label: 'cacheAside + singleflight' },
      {
        type: 'layer', items: [
          { title: 'MongoDB Atlas', description: 'Indexes · Soft-Delete · Audit' },
          { title: 'Redis', description: 'Read-Through · Claims Cache' }
        ]
      },
      { type: 'arrow', label: 'Metrics export' },
      {
        type: 'layer', items: [
          { title: 'Prometheus', description: 'Metrics Collection' },
          { title: 'Grafana', description: 'Dashboards · Alerts' }
        ]
      }
    ],
    tech: ["nextjs", "react", "tailwindcss", "nodejs", "express", "mongodb", "redis", "docker", "nginx", "firebase"],
    image: null,
    language: "TypeScript",
    stars: 0,
    forks: 0,
    url: "https://github.com/realSalman/Ai-Powered-OBE-Platform"
  },
  {
    name: "SynapseAI",
    slug: "synapse-ai-task-manager",
    description: [
      "Agentic Task/Note Manager"
    ],
    details: "I built a full-stack task manager where the AI isn't just a chatbot—it has actual agency. I integrated OpenRouter and gave the AI function-calling capabilities. When a user asks 'Create a board for my marketing campaign with To Do, In Progress, and Done columns', the AI actually executes `create_board` and `add_column` tools against the backend, mutating the database in real-time.\n\nThe backend uses Express and MongoDB, with Firebase Admin for auth. To make the AI feel safe to use, I built a custom logging and undo system. Every time the AI takes an action, it logs the `previousState` in a TTL-indexed `AIAction` collection. If the AI makes a mistake, the user can click 'Undo' and the exact state is restored perfectly.\n\nOn the frontend, I used Zustand for global UI state (like managing the AI drawer) and TanStack Query for server state. This allowed me to implement optimistic updates—when you drag and drop a task using `@hello-pangea/dnd` or ask the AI to create a board, the UI updates instantly while the mutation resolves in the background. The AI chat slides out in a resizable drawer, allowing users to converse while watching their board visually change in response.",
    problem: "Most AI task management tools just offer a conversational interface that gives advice, but leaves the actual data entry to the user. I wanted to build an agentic system where the AI acts as a project manager, capable of directly manipulating the user's boards and tasks based on natural language commands, without compromising the safety of the user's data.",
    decisions: [
      {
        question: "Why give the AI direct tool access?",
        answer: "A chatbot that just gives advice is a toy. By giving the model (like `gpt-4o-mini` via OpenRouter) a strict JSON schema for tools (`create_board`, `add_column`, `add_task`), it becomes an agent that actually does work for the user, bridging natural language and database mutations."
      },
      {
        question: "Why build a custom Undo system for the AI?",
        answer: "Because LLMs hallucinate. If the AI misunderstands a prompt and modifies the wrong column, that's a terrible UX. I built an `AIAction` Mongoose model that snapshots the document's state before any AI mutation, allowing instant, perfect rollbacks with a single click."
      },
      {
        question: "Why TanStack Query instead of just Zustand?",
        answer: "Zustand is perfect for UI state (like the AI drawer width or current active chat), but TanStack Query handles server state beautifully. I used it heavily for optimistic updates during board mutations (`onMutate` cache updates), so the drag-and-drop UI feels instant even before the server responds."
      }
    ],
    results: [
      "Agentic AI assistant capable of autonomous board, column, and task management via function calling",
      "Resilient undo system powered by MongoDB snapshotting of document `previousState`",
      "Real-time optimistic UI updates using TanStack Query for zero-latency interactions",
      "Smooth drag-and-drop experience using `@hello-pangea/dnd`",
      "Secure, role-based Firebase authentication with backend Admin SDK verification"
    ],
    metrics: [
      { label: "AI Engine", value: "OpenRouter (Tools)" },
      { label: "State", value: "Zustand + React Query" },
      { label: "Safety", value: "Snapshot Undo" },
      { label: "Database", value: "MongoDB" }
    ],
    architecture: [
      { type: 'layer', items: [{ title: 'User', description: 'Web Browser · Drag & Drop · AI Chat' }] },
      { type: 'arrow', label: 'Optimistic Updates (TanStack Query)' },
      {
        type: 'layer', items: [
          { title: 'Frontend App', description: 'Next.js · React 19 · Zustand' }
        ]
      },
      { type: 'arrow', label: 'HTTPS / Firebase JWT' },
      {
        type: 'layer', items: [
          { title: 'API Server', description: 'Express · Node.js · Auth Middleware' }
        ]
      },
      { type: 'arrow', label: 'Tool Execution' },
      {
        type: 'layer', items: [
          { title: 'AI Controller', description: 'OpenRouter (gpt-4o-mini)' },
          { title: 'AI Tools Service', description: 'Board Mutations & Logging' }
        ]
      },
      { type: 'arrow', label: 'Transactions & Snapshots' },
      {
        type: 'layer', items: [
          { title: 'MongoDB', description: 'UserBoards · AIChats · AIActions' }
        ]
      }
    ],
    tech: ["nextjs", "react", "tailwindcss", "nodejs", "express", "mongodb", "firebase"],
    image: null,
    language: "TypeScript",
    stars: 0,
    forks: 0,
    url: "https://github.com/realSalman/Synapse-AI-Task-Manager"
  },
  /*
  {
    name: "Airdrop Mining App",
    slug: "phmn-miner-tma",
    description: [
      "High-Concurrency TMA"
    ],
    details: "I built this Telegram Mini App (TMA) to handle massive concurrency spikes during airdrop events. Instead of relying on standard REST polling for the tap-to-mine mechanic—which would easily overwhelm the server—I implemented a persistent WebSocket connection via Socket.io. This allows the React frontend to instantly sync mining state, daily streaks, and points with the Node.js backend.\n\nOn the client side, I used React 18 with Framer Motion to ensure the UI felt like a native app running at 60fps inside the Telegram webview. I also integrated `@tonconnect/ui-react` so users can seamlessly link their TON wallets directly within the app for future token distributions. Finally, I integrated Adsgram for monetization, ensuring ad watch validations were securely verified on the backend before dispensing rewards.",
    problem: "Tap-to-earn games in Telegram face two major challenges: they need to feel exactly like native apps (no lag, smooth animations), and they need to survive massive traffic spikes when an airdrop is announced. Traditional HTTP polling for every 'tap' crushes database performance.",
    decisions: [
      {
        question: "Why Socket.io instead of REST API polling?",
        answer: "Polling a server every second for millions of users during an airdrop is a recipe for downtime. By establishing a persistent WebSocket connection, the server only pushes state changes, drastically reducing HTTP overhead and keeping the mining feedback loop instantaneous."
      },
      {
        question: "Why React 18 for a Telegram Mini App?",
        answer: "Telegram Mini Apps load in an embedded webview. Using React allowed me to componentize complex state (like daily streaks and referrals) and leverage Framer Motion to deliver smooth, native-feeling animations that wouldn't jank on low-end mobile devices."
      }
    ],
    results: [
      "Real-time tap-to-mine synchronization using Socket.io",
      "Seamless TON wallet integration via `@tonconnect/ui-react`",
      "60fps native-feeling animations driven by Framer Motion",
      "Secure ad-based monetization via Adsgram integration",
      "Scalable Node.js/Express backend backed by MongoDB"
    ],
    metrics: [
      { label: "Real-time", value: "Socket.io" },
      { label: "Blockchain", value: "TON Connect" },
      { label: "Frontend", value: "React + Tailwind" },
      { label: "Animations", value: "Framer Motion" }
    ],
    architecture: [
      { type: 'layer', items: [{ title: 'User', description: 'Telegram App Webview' }] },
      { type: 'arrow', label: 'Persistent WebSocket' },
      {
        type: 'layer', items: [
          { title: 'Frontend App', description: 'React · Tailwind · Framer Motion' },
          { title: 'Blockchain UI', description: 'TON Connect SDK' }
        ]
      },
      { type: 'arrow', label: 'Socket Events / HTTPS' },
      {
        type: 'layer', items: [
          { title: 'API Server', description: 'Express · Node.js · Socket.io' }
        ]
      },
      { type: 'arrow', label: 'Internal Services' },
      {
        type: 'layer', items: [
          { title: 'Mining Engine', description: 'Reward Calc · Timer' },
          { title: 'Ads Validator', description: 'Adsgram Webhooks' }
        ]
      },
      { type: 'arrow', label: 'Mongoose Driver' },
      {
        type: 'layer', items: [
          { title: 'MongoDB', description: 'Users · Leaderboards · Referrals' }
        ]
      }
    ],
    tech: ["react", "tailwindcss", "nodejs", "express", "mongodb", "socketio"],
    image: "/assets/phmn.png",
    language: "JavaScript",
    stars: 1,
    forks: 0,
    url: "https://github.com/realSalman/PHMN-MINER-tma"
  },
  */
  {
    name: "Escrow Marketplace",
    slug: "ton-escrow-marketplace",
    description: [
      "based on TON blockchain"
    ],
    details: "I built this decentralized marketplace as a Telegram Mini App to solve a specific UX problem on the TON blockchain: users shouldn't need native TON coins just to pay gas for USDT transactions. I implemented Wallet V5 (W5) smart contracts, which natively support deducting gas fees directly from the USDT balance.\n\nHere's how it works: when a buyer checks out, the Express backend generates a temporary W5 escrow wallet and securely stores its encrypted mnemonic in Firestore (guarded by strict Firebase Security Rules). The buyer sends USDT to this address. A Cloud Scheduler task runs in the background, waits for the escrow period, and then automatically reconstructs the W5 wallet to execute a split payment—95% to the seller, 5% to the platform—paying the network fee out of the USDT itself.",
    problem: "Traditional crypto escrow requires either the buyer or the platform to hold native network tokens (TON) to pay for transaction fees when moving stablecoins (USDT). This creates massive friction for onboarding non-crypto-native Telegram users who just want to pay with USDT.",
    decisions: [
      {
        question: "Why use Wallet V5 (W5) Smart Contracts?",
        answer: "W5 contracts introduced the ability to pay network fees using the transferred Jetton (USDT) instead of native TON. By generating a temporary W5 wallet for every transaction, I completely abstracted away the concept of 'gas' for the end user."
      },
      {
        question: "Why use Firebase Firestore for the Escrow State?",
        answer: "Since the backend needs to store sensitive mnemonics for the temporary escrow wallets, I needed a database with granular, document-level security. Firestore Rules ensure that only the backend admin SDK can read the mnemonics to execute the final payouts, keeping the funds secure from client-side attacks."
      }
    ],
    results: [
      "Gasless USDT transactions via TON Wallet V5 (W5) smart contracts",
      "Automated escrow release scheduler using Node.js and Firebase",
      "Secure, encrypted storage of temporary wallet mnemonics via Firestore",
      "Frictionless Telegram Mini App UI built with React 19 and Vite",
      "Automated 95/5 revenue split executed directly on-chain"
    ],
    metrics: [
      { label: "Blockchain", value: "TON (W5 Contracts)" },
      { label: "Payments", value: "Gasless USDT" },
      { label: "Backend", value: "Node.js + Firebase" },
      { label: "Frontend", value: "React + Vite" }
    ],
    architecture: [
      { type: 'layer', items: [{ title: 'Buyer / Seller', description: 'Telegram Mini App (React/Vite)' }] },
      { type: 'arrow', label: 'HTTPS API' },
      {
        type: 'layer', items: [
          { title: 'Backend API', description: 'Express · Node.js' }
        ]
      },
      { type: 'arrow', label: 'Admin SDK / Scheduler' },
      {
        type: 'layer', items: [
          { title: 'Firebase Services', description: 'Firestore (State) · Cloud Scheduler (Auto-Release)' }
        ]
      },
      { type: 'arrow', label: 'On-Chain Execution (@ton/ton)' },
      {
        type: 'layer', items: [
          { title: 'TON Blockchain', description: 'W5 Temporary Escrow Wallet' }
        ]
      },
      { type: 'arrow', label: 'Gasless Jetton Transfer' },
      {
        type: 'layer', items: [
          { title: 'Settlement', description: '95% Seller Wallet · 5% Platform Wallet' }
        ]
      }
    ],
    tech: ["react", "nodejs", "firebase", "express"],
    image: null,
    language: "JavaScript",
    stars: 0,
    forks: 0,
    url: "https://github.com/realSalman/ton-escrow-marketplace"
  }
];
