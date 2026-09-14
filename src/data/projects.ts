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
};

export const projects: Project[] = [
  {
    name: "GreenMesh Infra",
    slug: "greenmesh",
    description: [
      "Simulate sustainable AI Infrastructure with just two laptops"
    ],
    details: "GreenMesh is an open-source, eco-intelligent LLM inference orchestration platform and multi-GPU cluster management system. It bridges the gap between high-performance AI inference and environmental sustainability by introducing Green-Aware Workload Routing, P2P Node Federation, and a Deadline Guard & Carbon Proof Module.",
    architecture: [
      { type: 'layer', items: [{ title: 'User / Admin', description: 'Next.js 16 Web Dashboard' }] },
      { type: 'arrow', label: 'HTTP / SSE' },
      { type: 'layer', items: [{ title: 'Python Backend', description: 'aiohttp Server' }] },
      {
        type: 'layer', items: [
          { title: 'OpenAI API', description: 'Drop-in endpoints' },
          { title: 'Federation Svc', description: 'P2P mesh discovery' },
          { title: 'Telemetry Svc', description: 'GPU power/temp metrics' }
        ]
      },
      { type: 'arrow', label: 'Spawns & Orchestrates' },
      {
        type: 'layer', items: [
          { title: 'Cluster A', description: 'llama-server instances' },
          { title: 'Cluster B', description: 'federated peer nodes' }
        ]
      }
    ],
    tech: ["python", "nodejs", "react", "tailwindcss", "bash"],
    image: null,
    language: "Python",
    stars: 0,
    forks: 0,
    url: "https://github.com/realSalman/GreenMesh"
  },
  {
    name: "SynapseAI",
    slug: "synapse-ai-task-manager",
    description: [
      "AI-Powered Tasks",
      "Full-Stack Architecture",
      "Real-time Updates"
    ],
    details: "Synapse AI Task Manager is a full-stack task management application integrating AI-powered features. It utilizes Next.js for a responsive frontend and a robust Node.js/Express backend, featuring comprehensive user authentication and state management to streamline daily workflows and productivity.",
    architecture: [
      { type: 'layer', items: [{ title: 'User', description: 'Web Browser Interface' }] },
      { type: 'arrow', label: 'API Requests' },
      { type: 'layer', items: [{ title: 'Frontend App', description: 'Next.js / React' }] },
      { type: 'arrow', label: 'Axios / HTTPS' },
      { type: 'layer', items: [{ title: 'Backend Server', description: 'Express / Node.js' }] },
      {
        type: 'layer', items: [
          { title: 'Auth Middleware', description: 'Firebase Admin' },
          { title: 'Business Logic', description: 'Task Controllers' },
          { title: 'AI Services', description: 'OpenRouter API Integration' }
        ]
      },
      { type: 'arrow', label: 'Database Operations' },
      { type: 'layer', items: [{ title: 'Database', description: 'MongoDB' }] }
    ],
    tech: ["nextjs", "react", "tailwindcss", "nodejs", "express", "mongodb", "firebase"],
    image: null,
    language: "TypeScript",
    stars: 0,
    forks: 0,
    url: "https://github.com/realSalman/Synapse-AI-Task-Manager"
  },
  {
    name: "PHMN MINER (Telegram mini-app)",
    slug: "phmn-miner-tma",
    description: [
      "Tap-to-Mine Mechanism",
      "Points & Boost System",
      "Referral & Incentive System"
    ],
    details: "This app is a futuristic, dark-themed mining platform where users earn PHMN tokens through an engaging tap-to-mine system with timed reward cycles. It features a fully responsive multi-screen interface with smooth navigation, animations, and a cohesive dark-purple design aesthetic. The platform includes core mechanics like daily rewards, balance tracking, referrals, and a points-based progression system. Users can level up and enhance their mining efficiency by purchasing virtual tools and interacting with reward-based ads.",
    architecture: [
      { type: 'layer', items: [{ title: 'User', description: 'Tap / Claim / Watch Ads' }] },
      { type: 'arrow', label: 'API Request' },
      { type: 'layer', items: [{ title: 'Frontend App', description: 'React' }] },
      { type: 'arrow', label: 'HTTPS' },
      { type: 'layer', items: [{ title: 'API Server', description: 'Auth + Request Routing' }] },
      {
        type: 'layer', items: [
          { title: 'Mining Service', description: '12h timer + reward calc' },
          { title: 'Reward Service', description: 'Daily claim + points' },
          { title: 'Referral Service', description: 'Invite + bonus tracking' },
          { title: 'Ads Service', description: 'Ad watch validation' }
        ]
      },
      { type: 'arrow', label: 'Read / Write' },
      {
        type: 'layer', items: [
          { title: 'User DB' },
          { title: 'Balance DB' },
          { title: 'Points DB' },
          { title: 'Referral DB' }
        ]
      },
      { type: 'arrow', label: 'Scheduled Jobs' },
      { type: 'layer', items: [{ title: 'Background Workers', description: 'Auto mining completion, Daily reset, Level updates' }] },
    ],
    tech: ["mongodb", "express", "react", "nodejs"],
    image: "/assets/phmn.png",
    language: "JavaScript",
    stars: 1,
    forks: 0,
    url: "https://github.com/realSalman/PHMN-MINER-tma"
  },
  {
    name: "Escrow Marketplace",
    slug: "ton-escrow-marketplace",
    description: [
      "based on TON blockchain"
    ],
    details: "This Escrow Marketplace is a secure, decentralized platform integrated directly into the Telegram ecosystem via the TON (The Open Network) blockchain. It enables buyers and sellers to conduct peer-to-peer transactions with confidence, using smart-contract-backed escrow logic that locks funds until predefined conditions are verified. The application features a streamlined Telegram Mini App interface that leverages Firebase for real-time state synchronization and automated dispute management. By combining the speed of the TON blockchain with high-fidelity UI/UX, the project delivers a frictionless and tamper-proof trading experience for diverse digital assets.",
    architecture: [
      { type: 'layer', items: [{ title: 'Buyer / Seller', description: 'Interact via Telegram UI' }, { title: 'Telegram Bot', description: 'Webhooks & Notifications' }] },
      { type: 'arrow', label: 'HTTPS' },
      { type: 'layer', items: [{ title: 'Frontend App', description: 'React' }] },
      { type: 'arrow', label: 'Firebase SDK, API' },
      { type: 'layer', items: [{ title: 'Backend Server', description: 'Firebase Functions, Node.js' }] },
      {
        type: 'layer', items: [
          { title: 'Escrow Logic', description: 'Status Tracking' },
          { title: 'Payment & Wallet', description: 'TON Blockchain Integration' },
          { title: 'Notification Svc', description: 'Telegram Messaging' },
          { title: 'Dispute & Conflict', description: 'Admin Arbitration' }
        ]
      },
      { type: 'arrow', label: 'Read / Write' },
      {
        type: 'layer', items: [
          { title: 'User DB', description: 'Firestore' },
          { title: 'Escrow DB', description: 'Firestore' },
          { title: 'Payments Ledger', description: 'Firestore' },
          { title: 'Notification Queue', description: 'Queue' }
        ]
      },
      { type: 'arrow', label: 'Cloud Tasks / Triggers' },
      { type: 'layer', items: [{ title: 'Worker Layer', description: 'Cloud Scheduler / Background Jobs' }] },
    ],
    tech: ["react", "nodejs", "firebase", "express"],
    image: null,
    language: "JavaScript",
    stars: 0,
    forks: 0,
    url: "https://github.com/realSalman/ton-escrow-marketplace"
  }
];
