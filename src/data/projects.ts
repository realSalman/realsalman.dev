export type Project = {
  name: string;
  slug: string;
  description: string;
  details: string;
  language: string;
  stars: number;
  forks: number;
  url: string;
};

export const projects: Project[] = [
  {
    name: "GreenMesh",
    slug: "greenmesh",
    description: "Decentralized, eco-intelligent multi-GPU LLM inference management & P2P federation engine.",
    details: `
# 🌿 GreenMesh

### **Decentralized, Eco-Intelligent Multi-GPU LLM Inference Management & Peer-to-Peer Federation Engine**

## 📖 Overview

**GreenMesh** is an open-source, eco-intelligent LLM inference orchestration platform and multi-GPU cluster management system. It bridges the gap between high-performance AI inference and environmental sustainability by introducing **Green-Aware Workload Routing**, **P2P Node Federation**, and a **Deadline Guard & Carbon Proof Module**.

As Large Language Model (LLM) inference scales globally, energy consumption and carbon intensity have become critical challenges. GreenMesh addresses this by dynamically routing inference requests across distributed compute nodes based on real-time renewable energy availability (Solar, Wind, Grid), while allowing non-urgent workloads to be deferred until green power is accessible—without exceeding strict user SLAs.

## ✨ Key Features

- 🌿 **Green Energy-Aware Routing**: Evaluates real-time energy sources across local clusters and federated peer nodes (Solar ☀️: 100/100, Wind 💨: 80/100, Grid ⚡: 20/100) to prioritize low-carbon LLM execution.
- ⏱️ **Deadline Guard & Carbon Proof Module**: Enforces strict user-defined SLAs (\`max_defer_seconds\`) for flexible jobs. Predicts carbon savings prior to execution, tracks actual energy consumption, and logs verified savings in an auditable **Trade-Off Table**.
- 🌐 **Peer-to-Peer Node Federation**: Decentralized node discovery, health heartbeat exchange, and green routing across independent GPU clusters over HTTP/HTTPS.
- ⚡ **Multi-GPU Cluster & Runner Management**: Launches and manages \`llama-server\` instances across dedicated physical GPUs (\`main_gpu\`, \`tensor_split\`). Features automatic idle model unloading to optimize VRAM utilization.
- 🔌 **OpenAI API Compliance**: Full drop-in replacement for OpenAI endpoints (\`/v1/chat/completions\`, \`/v1/models\`, \`/v1/embeddings\`, \`/v1/completions\`) with support for streaming responses (SSE).
- 📊 **Hardware Telemetry & GPU Metrics**: Integrated real-time collector for NVIDIA (\`nvidia-smi\`) and AMD (\`amd-smi\`) GPUs, capturing VRAM allocation, GPU utilization %, temperature, power draw, and tokens-per-second throughput.
- 🖥️ **Dual-Mode Web Dashboard (Next.js 16 / TailwindCSS 4)**:
  - **Admin Operations Dashboard**: Cluster cards, live energy source toggles, carbon proof trade-off analytics, throughput gauges, and a real-time event trace terminal.
  - **User Chat Portal**: Interactive conversational AI interface with real-time green energy routing indicators, deadline deferral sliders, and model selectors.
- 🔍 **Live Event Tracing**: Server-Sent Events (SSE) \`/trace/stream\` outputting internal routing decisions, deferral triggers, execution timestamps, and telemetry logs in real time.

## 📐 Architecture Overview

GreenMesh consists of a high-performance Python \`aiohttp\` backend server orchestrating local \`llama-server\` instances, communicating with federated peer nodes, and serving a Next.js frontend application.

## 📁 Project Directory Layout

\`\`\`text
GreenMesh-v-2.0/
├── client/                     # Next.js 16 + React 19 Frontend Dashboard & User Portal
│   ├── dev.js                  # Script launching Admin (3000) & User (3001) portals
│   ├── src/
│   │   ├── app/                # Next.js App Router pages (Dashboard & Chat)
│   │   ├── components/         # UI components (NodeCard, MetricsCards, CarbonProofTable, etc.)
│   │   ├── lib/                # API client helper & utility functions
│   │   └── types/               # TypeScript interfaces & types
├── llama/                      # Precompiled llama-server executable binary
├── models/                     # GGUF Quantized Large Language Models
├── server/                     # Async Python Server Backend
│   ├── api.py                  # API endpoints handler & OpenAI compatibility layer
│   ├── cluster.py              # Runner & process management for llama-server
│   ├── config.py               # Configuration loader & validator
│   ├── deadline_guard.py       # Deadline Guard & Carbon Proof calculations
│   ├── federation.py           # P2P Node discovery, state exchange & green routing
│   ├── gpu_metrics.py          # NVIDIA & AMD GPU telemetry harvester
│   ├── main.py                 # Backend entry point, CLI launcher & logging setup
│   ├── throughput_metrics.py   # Tokens-per-second performance metrics
│   └── trace.py                # Server-Sent Events (SSE) trace logger
├── CONFIGURATION.md            # Detailed configuration documentation
├── pyproject.toml              # Python project metadata & build configuration
└── README.md                   # Project documentation
\`\`\`

## 🚀 Quickstart Guide

### Prerequisites

1. **Python**: 3.10 or higher
2. **Node.js**: v18.0.0 or higher
3. **llama-server**: Precompiled binary of \`llama-server\` (from llama.cpp) placed in \`llama/\` or specified in \`config.json\`.
4. **Models**: GGUF format model files placed in \`models/\` directory.

### Step 1: Install & Start Python Backend

\`\`\`bash
git clone https://github.com/realSalman/GreenMesh.git
cd GreenMesh

python3 -m venv venv
source venv/bin/activate  # On Windows: venv\\Scripts\\activate

pip install -e .

python3 server/main.py server/config.json
\`\`\`

The GreenMesh API server will start listening at \`http://0.0.0.0:8080\`.

### Step 2: Install & Start Web Client

\`\`\`bash
cd client
npm install
npm run dev
\`\`\`

- **Admin Dashboard**: http://localhost:3000
- **User Chat Portal**: http://localhost:3001

## 📡 API Reference & Endpoints

### OpenAI-Compatible Endpoints

| Method | Endpoint               | Description                                                                                  |
| ------ | ---------------------- | --------------------------------------------------------------------------------------------- |
| POST   | /v1/chat/completions    | OpenAI format chat completion, plus green deferral headers/body parameters.                    |
| POST   | /v1/completions         | Legacy text completion endpoint.                                                                |
| POST   | /v1/embeddings          | Text embeddings generation.                                                                     |
| GET    | /v1/models              | Lists available models across local clusters and federated nodes.                               |

### GreenMesh Native & Management Endpoints

| Method | Endpoint              | Description                                                          |
| ------ | --------------------- | --------------------------------------------------------------------- |
| GET    | /health                | Server and cluster health status.                                    |
| GET    | /metrics/gpu           | Real-time GPU telemetry (VRAM, load %, power draw, temp).             |
| GET    | /metrics/throughput    | Inference throughput metrics (tokens/sec).                            |
| GET    | /federation/nodes      | List all discovered P2P mesh nodes and their energy scores.           |
| POST   | /federation/energy     | Update energy source simulation for a local cluster (admin tool).     |
| GET    | /tradeoff/table        | Retrieve Deadline Guard deferral history, wait times & carbon saved.  |
| GET    | /trace/stream          | Server-Sent Events (SSE) stream of system routing logs and events.    |

## 🌍 Sustainability & UN SDG Alignment

GreenMesh directly aligns with key United Nations Sustainable Development Goals:

- **SDG 13: Climate Action**: Reduces the operational carbon footprint of AI workloads through green-aware routing and load shifting to renewable-powered nodes.
- **SDG 9: Industry, Innovation, and Infrastructure**: Enables resilient, decentralized GPU compute infrastructure that dynamically adapts to grid greenness.
- **SDG 12: Responsible Consumption and Production**: Maximizes GPU hardware efficiency via memory auto-unloading and carbon proof auditability.

## 📜 License

This project is licensed under the BSD-3-Clause License.
`,
    language: "Python",
    stars: 0,
    forks: 0,
    url: "https://github.com/realSalman/GreenMesh"
  },
  {
    name: "Synapse-AI-Task-Manager",
    slug: "synapse-ai-task-manager",
    description: "A full-stack task management application with AI-powered features.",
    details: `
# Synapse AI Task Manager

A full-stack task management application with AI-powered features.

## Tech Stack

- **Frontend:** Next.js, React, Tailwind CSS, Zustand, TanStack Query
- **Backend:** Node.js, Express, TypeScript, Firebase Admin
- **Database:** MongoDB
- **Authentication:** Firebase

## Prerequisites

- Node.js (v18+)
- MongoDB instance
- Firebase Service Account Key

## Setup & Installation

### 1. Clone the repository

\`\`\`bash
git clone https://github.com/realSalman/Synapse-AI-Task-Manager.git
cd Synapse-AI-Task-Manager
\`\`\`

### 2. Backend Configuration

Navigate to the \`server\` directory and create a \`.env\` file:

\`\`\`bash
cd server
npm install
\`\`\`

Add the following to \`.env\`:
- \`PORT=5000\`
- \`MONGO_URI=<your-mongodb-uri>\`
- \`FIREBASE_SERVICE_ACCOUNT_PATH=<path-to-serviceAccountKey.json>\`
- \`OPENROUTER_API_KEY=<your-openrouter-key>\`

### 3. Frontend Configuration

Navigate to the \`client\` directory and create a \`.env.local\` file:

\`\`\`bash
cd ../client
npm install
\`\`\`

Add the following to \`.env.local\`:
- \`NEXT_PUBLIC_API_URL=http://localhost:5000/api\`
- \`NEXT_PUBLIC_FIREBASE_API_KEY=\`
- \`NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=\`
- \`NEXT_PUBLIC_FIREBASE_PROJECT_ID=\`
- \`NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=\`
- \`NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=\`
- \`NEXT_PUBLIC_FIREBASE_APP_ID=\`
- \`NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID=\`

## Running the Application

### Start Backend

\`\`\`bash
cd server
npm run dev
\`\`\`

### Start Frontend

\`\`\`bash
cd client
npm run dev
\`\`\`

## Project Structure

### Frontend (\`/client\`)

- \`app/\`: Next.js App Router (pages and layouts)
- \`components/\`: Reusable UI components
- \`store/\`: Zustand state management
- \`hooks/\`: Custom React hooks
- \`lib/\`: API client (Axios) and utility functions
- \`context/\`: React context providers
- \`modals/\`: Global modal components

### Backend (\`/server\`)

- \`src/routes/\`: API endpoint definitions
- \`src/controllers/\`: Request handler logic
- \`src/models/\`: MongoDB/Mongoose schemas
- \`src/middleware/\`: Authentication and error handling
- \`src/services/\`: Business logic and external integrations (AI)
- \`src/config/\`: Database and Firebase Admin configuration
`,
    language: "TypeScript",
    stars: 0,
    forks: 0,
    url: "https://github.com/realSalman/Synapse-AI-Task-Manager"
  },
  {
    name: "PHMN-MINER-tma",
    slug: "phmn-miner-tma",
    description: "A telegram mini app miner.",
    details: `
 # PHONE MINER — Telegram Mini App (TMA)

A robust, full-stack Telegram Mini App built for the **PHMN** ecosystem. This application integrates Telegram's Web App capabilities with the **TON Blockchain** to provide a seamless mining and reward experience.

### THE APP IS LIVE- https://t.me/PHMN_miner_bot/

## 🚀 Overview

PHMN Miner is a high-performance Telegram Mini App designed for engagement. It features real-time data synchronization, secure TON wallet connectivity, and a scalable backend architecture to handle high-concurrency users during airdrop events.

## 🛠 Tech Stack

### Frontend
- **Framework**: React 18
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Blockchain**: TON Connect SDK (\`@tonconnect/ui-react\`)

### Backend
- **Runtime**: Node.js
- **Server**: Express.js
- **Database**: MongoDB
- **Real-time**: Socket.io

## ✨ Key Features

- **TON Wallet Integration**: Seamless connection with TON-compatible wallets for future airdrops and transactions.
- **Telegram Native UI**: Optimized for the Telegram interface with smooth transitions and responsive design.
- **Global Leaderboard**: Competitive ranking system tracking PHMN points across the entire user base.
- **Real-time Updates**: Socket-driven state management for instant mining feedback and notifications.
- **Task System**: Interactive tasks and challenges to boost user engagement and rewards.
- **Ads Integration**: Monetization support via Adsgram.

## 📂 Project Structure

\`\`\`text
├── client/          # React frontend
├── server/          # Express backend
\`\`\`

### Development Tip
To test the Telegram Mini App locally, use a tunneling service like **ngrok** or **Localtunnel** to expose your local server to the internet, then set the \`TG_GAME_URL\` in your \`.env\` to the secure tunnel URL.

### Prerequisites
- Node.js (v18+)
- MongoDB (Local or Atlas)
- Telegram Bot Token (from @BotFather)

### Environment Variables

**Server (\`/server/.env\`):**
- \`PORT\`: Server port (default: 3001)
- \`CONNECTION_URI\`: MongoDB connection string
- \`BOT_TOKEN\`: Your Telegram Bot Token
- \`BOT_USERNAME\`: Your Bot's username
- \`SESSION_SECRET\`: Random string for session security
- \`ADSGRAM_BLOCK_ID\`: Adsgram integration ID

## 📄 License

Copyright © 2025. All Rights Reserved.

This project is proprietary. The source code is available for viewing and educational purposes only. Unauthorized copying, modification, distribution, or any other use of this code is strictly prohibited.
`,
    language: "JavaScript",
    stars: 1,
    forks: 0,
    url: "https://github.com/realSalman/PHMN-MINER-tma"
  },
  {
    name: "ascii-tube-webapp",
    slug: "ascii-tube-webapp",
    description: "Web application for ASCII Tube.",
    details: `
# 🎬 ASCII-TUBE

![Project Cover](./cover.png)

**ASCII-TUBE** is a high-performance, WebGL-powered web application that transforms standard video files into stunning ASCII art in real-time. Experience your favorite videos through a retro-modern lens with granular control over rendering aesthetics.

## ✨ Features

- **🚀 Real-time WebGL Rendering**: High-performance ASCII conversion using custom GLSL shaders, ensuring smooth 60 FPS playback even at high resolutions.
- **📁 Drag & Drop Support**: Seamlessly upload and play local video files by dragging them directly into the player.
- **🎛️ Dynamic Render Settings**:
  - **Resolution Density**: Adjust the "pixel" size of the ASCII characters.
  - **Exposure & Clarity**: Fine-tune brightness and contrast for the perfect character mapping.
  - **Glyph Sets**: Choose between Standard, Detailed, Binary, or Pixel-style character sets.
- **🎹 Keyboard Shortcuts**:
  - \`Space\`: Play / Pause
  - \`M\`: Toggle Mute
- **📱 Responsive Design**: Fully optimized for both desktop and mobile viewing.
- **🖥️ Fullscreen Mode**: Immerse yourself in the ASCII experience with one click.

## 🛠️ Tech Stack

- **Core**: [Next.js 15+](https://nextjs.org/), [React 19+](https://react.dev/)
- **Logic**: [TypeScript](https://www.typescriptlang.org/)
- **Graphics**: WebGL & GLSL Shaders
- **Icons**: [Lucide React](https://lucide.dev/)
- **Styling**: Vanilla CSS (CSS Modules & Global Styles)

## 🚀 Getting Started

### Prerequisites

- Node.js 18.0 or later
- A modern browser with WebGL support

### Installation

1. **Clone the repository:**
   \`\`\`bash
   git clone https://github.com/realSalman/ascii-video-player-webapp.git
   cd ascii-video-player-webapp
   \`\`\`

2. **Install dependencies:**
   \`\`\`bash
   npm install
   \`\`\`

3. **Run the development server:**
   \`\`\`bash
   npm run dev
   \`\`\`

4. **Open your browser:**
   Navigate to [http://localhost:3000](http://localhost:3000) to see the application in action.

## 📖 Usage

1. **Upload a Video**: Click the "Upload Video" button or drag a \`.mp4\`, \`.webm\`, or \`.mov\` file into the player area.
2. **Adjust Settings**: Use the sidebar to change the resolution, exposure, and glyph sets in real-time.
3. **Playback**: Use the standard controls or keyboard shortcuts to manage playback.

## 🛡️ License

Distributed under the MIT License. See \`LICENSE\` for more information.

`,
    language: "TypeScript",
    stars: 0,
    forks: 0,
    url: "https://github.com/realSalman/ascii-tube-webapp"
  },
  {
    name: "ton-escrow-marketplace",
    slug: "ton-escrow-marketplace",
    description: "A Telegram Mini App marketplace with a TON-based escrow system.",
    details: `
# TON Escrow Marketplace

A Telegram Mini App (TMA) marketplace featuring an escrow system built on The Open Network (TON). The application uses **TON Wallet v5 (W5)** smart contracts to facilitate USDT payments with gas fees paid directly in USDT, removing the requirement for users to hold TON for transaction fees.

## Architecture & System Flow

\`\`\`text
👤 Buyer/Seller <---> TG Mini App
                             | (HTTPS API)
                             v
                       Express API
                             |
         +-------------------+-------------------+
         |                   |                   |
         v                   v                   v
Firestore Database    TON Blockchain      TG Bot API
(State & Wallets)    (W5 Smart Contracts)  (Status Notifications)
\`\`\`

1. **Listing & Checkout:** A seller lists an item with their destination wallet address. A buyer purchases the item via the Telegram Mini App, initiating the creation of a temporary W5 escrow wallet.
2. **Payment Verification:** The buyer sends USDT (and optionally TON for gas, though W5 allows deducting gas from the USDT amount itself) to the temporary escrow wallet.
3. **Escrow Hold:** The escrow wallet's mnemonic, contract address, and associated order details are stored in Firestore.
4. **Auto-Release:** After a 1-minute delay, the backend scheduler triggers the escrow release: restores the W5 wallet contract from its mnemonic, calculates the split (**5%** platform fee to the server wallet, **95%** to the seller), and executes the USDT transfers directly from the escrow wallet, paying gas fees from the USDT balance.

## Tech Stack

### Frontend (\`client/\`)

- **Framework:** React 19 + Vite
- **Styling:** Tailwind CSS v4
- **State Management:** Redux Toolkit
- **Blockchain Interface:** \`@tonconnect/ui-react\`, \`@ton/ton\`, \`@ton/core\`, \`@orbs-network/ton-access\`

### Backend (\`server/\`)

- **Runtime:** Node.js (Express)
- **Database & Hosting:** Firebase
- **TON Blockchain SDK:** \`@ton/ton\`, \`@ton/crypto\`, \`@orbs-network/ton-access\`

## Directory Structure

\`\`\`text
├── client/                 # React frontend
│   ├── src/
│   │   ├── pages/          # Pages (Checkout, Listings, etc.)
│   │   └── store/          # Redux slices and store configuration
│   └── vite.config.js
├── server/                 # Express backend API
│   ├── services/           # Firestore & Escrow logic services
│   ├── utils/              # TON wallet utilities (W5 integration)
│   └── index.js            # Express server entry point & scheduling
├── database.rules.json     # Firebase Realtime Database rules
├── firestore.rules         # Cloud Firestore security rules
├── storage.rules           # Firebase Storage security rules
└── firebase.json           # Firebase deployment config
\`\`\`

## Getting Started

### Prerequisites

- Node.js (v18 or higher)
- Firebase CLI (\`npm install -g firebase-tools\`)
- A TON wallet (e.g., Tonkeeper) configured for Testnet

### 1. Environment Setup

**Backend (\`server/.env\`):**

\`\`\`text
PORT=3001

FIREBASE_API_KEY=your_firebase_api_key
FIREBASE_AUTH_DOMAIN=your_project.firebaseapp.com
FIREBASE_PROJECT_ID=your_firebase_project_id
FIREBASE_MESSAGING_SENDER_ID=your_messaging_sender_id
FIREBASE_APP_ID=your_firebase_app_id
FIREBASE_DATABASE_URL=https://your_project.firebaseio.com
FIREBASE_REGION=us-central1

SERVER_WALLET_ADDRESS=UQ...  # Destination for the 5% platform fee
TON_NETWORK=testnet          # 'testnet' or 'mainnet'
\`\`\`

**Frontend (\`client/.env\`):**

\`\`\`text
VITE_API_BASE_URL=http://localhost:3001
\`\`\`

### 2. Local Installation

\`\`\`bash
# Setup backend
cd server
npm install
npm run dev

# Setup frontend (in a separate terminal window)
cd client
npm install
npm run dev
\`\`\`

The frontend will run on \`http://localhost:5173\` and the backend on \`http://localhost:3001\`.

## Database Schemas

### \`orderWallets/{orderId}\`

Stores details of the temporary escrow wallets generated per transaction: order ID, mnemonic, wallet address, wallet type (w5), buyer user ID, item ID, and creation timestamps.

### \`users/{sellerId}\`

Stores user metadata and destination payment addresses (the seller's TON wallet).

## Escrow Release Mechanics

### W5 (Wallet Contract V5 Beta/R1) Features

This project implements the \`WalletContractV5R1\` specification to optimize token transactions:

- **USDT Gas Payment:** Traditional TON wallets require native TON coins to cover transaction fees (gas) when sending Jettons (like USDT).
- **Escrow Application:** By using a W5 wallet for the escrow, the backend executes the split (95% to seller, 5% to platform) and pays the network fee directly out of the USDT balance, avoiding the need to fund the escrow address with native TON for gas.

### Escrow Hold & Timeout

1. When a checkout is completed, a timer job is registered in the backend.
2. After 1 minute (configurable), the scheduler calls the release function.
3. If the scheduler execution fails, the release can be triggered manually via \`POST /api/escrow/release\`.

## Security Configuration

- **Firestore Rules:** Restricts read/write access to order mnemonics, ensuring only the backend system can read sensitive escrow wallet credentials.
- **Database Rules:** Sets up read/write structures for real-time components.

Deploy security rules with:

\`\`\`bash
firebase deploy --only firestore:rules,database,storage
\`\`\`
`,
    language: "JavaScript",
    stars: 0,
    forks: 0,
    url: "https://github.com/realSalman/ton-escrow-marketplace"
  }
];
