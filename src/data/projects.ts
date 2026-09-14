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
    name: "ascii-video-player",
    slug: "ascii-video-player",
    description: "C-based ASCII video player.",
    details: `
# ASCII Video Player

A command-line tool that plays videos and displays images as colorized ASCII art in the terminal, complete with synchronized audio support.
Inspired from: https://github.com/gouwsxander/ascii-view

## Features
- **Video Playback**: High-speed frame processing for smooth video streaming.
- **Audio Synchronization**: Automatic background audio playback.
- **TrueColor Support**: Uses 24-bit ANSI color codes for high-fidelity reproduction.
- **Retro Mode**: Optional 8-color mode for a classic terminal aesthetic.
- **Edge Enhancement**: Sobel filters to keep outlines sharp at low resolutions.

---

## 🛠 Prerequisites

Before building, ensure you have the following installed and added to your system **PATH**:

### 1. FFmpeg & FFprobe (Required for Video)
Used for video decoding, scaling, and audio extraction.
- **Windows**: Download from [gyan.dev](https://www.gyan.dev/ffmpeg/builds/) or install via \`winget install ffmpeg\`.
- **Linux**: \`sudo apt install ffmpeg\` (Ubuntu/Debian) or \`sudo pacman -S ffmpeg\` (Arch).
- **macOS**: \`brew install ffmpeg\`.

### 2. Build Tools
- A C99-compatible compiler (**GCC** or **Clang**).
- **Make** build system.

---

## 🚀 Getting Started

### 1. Build the Project
For the best performance (especially for video), use the \`release\` target which enables optimizations:
\`\`\`bash
make release
\`\`\`
This generates the \`ascii-view\` executable.

### 2. Play Your First Video
\`\`\`bash
./ascii-view path/to/your_video.mp4
\`\`\`

---

## 📖 Full Usage Guide

\`\`\`bash
./ascii-view <input_file> [OPTIONS]
\`\`\`

### Options Explained

| Option | Name | Description | Default |
| :--- | :--- | :--- | :--- |
| \`-mw\` | Max Width | Maximum horizontal characters. | Terminal width |
| \`-mh\` | Max Height | Maximum vertical characters. | Terminal height |
| \`-cr\` | Char Ratio | Height-to-width ratio of terminal characters. | \`2.0\` |
| \`-et\` | Edge Threshold | Sobel filter sensitivity (0.0 - 4.0). Lower is more sensitive. | \`4.0\` (Off) |
| \`--retro-colors\` | Retro Mode | Limits output to 8 classic colors. | False |

### Advanced Usage Examples

**Optimize for Large Terminals:**
If you reduce your terminal font size, you can achieve much higher "resolution":
\`\`\`bash
./ascii-view movie.mp4 -mw 200 -mh 100
\`\`\`

**Fine-tune Aspect Ratio:**
If the video looks "stretched" vertically, increase the \`-cr\` value (e.g., \`2.2\`). If it looks squashed, decrease it (e.g., \`1.8\`).
\`\`\`bash
./ascii-view video.mp4 -cr 2.3
\`\`\`

**Highlight Outlines:**
Use a low edge threshold to draw character outlines over the colors:
\`\`\`bash
./ascii-view animation.mp4 -et 1.5
\`\`\`

---

## 💡 Tips for Best Results

1. **Smaller Fonts**: The smaller your terminal font, the more "pixels" you have. Try zooming out (Ctrl + Minus) before running.
2. **Black Background**: Best results are achieved on a dark terminal background.
3. **TrueColor Terminal**: Ensure your terminal supports 24-bit color (Windows Terminal, iTerm2, Alacritty, and most modern Linux terminals do).
4. **Squint your eyes**: Seriously! If you squint slightly, the ASCII characters blend together to form a remarkably clear image.

---

## ❓ Troubleshooting

- **No Audio (Windows)**: The player uses PowerShell's \`MediaPlayer\` by default. Ensure your system volume is up and PowerShell is allowed to run scripts.
- **No Audio (Linux)**: Ensure \`ffplay\` is installed (part of the ffmpeg package).
- **Video is Laggy**: Build with \`make release\` instead of just \`make\`. If it's still slow, reduce the width and height with \`-mw\` and \`-mh\`.
- **Colors Look Wrong**: Ensure your terminal is set to \`xterm-256color\` or \`xterm-truecolor\`.

---

## ⚙️ Technical Details
1. **Piped Decoding**: Video is decoded by \`ffmpeg\` and scaled to the target resolution before being piped into the C program as raw RGB24 data.
2. **HSV Conversion**: Colors are converted to the HSV space to accurately map them to the best-matching ANSI color while using the "Value" (brightness) to select the ASCII character.
3. **Double Buffering**: (Internal) Uses ANSI escape codes to reposition the cursor instead of clearing the screen, preventing flicker.

`,
    language: "C",
    stars: 0,
    forks: 0,
    url: "https://github.com/realSalman/ascii-video-player"
  },
  {
    name: "betterAIM",
    slug: "betteraim",
    description: "Aim improvement tool.",
    details: `
No README found
`,
    language: "TypeScript",
    stars: 0,
    forks: 0,
    url: "https://github.com/realSalman/betterAIM"
  },
  {
    name: "browser-based-local-video-player",
    slug: "browser-based-local-video-player",
    description: "Play local videos in the browser.",
    details: `
No README found
`,
    language: "TypeScript",
    stars: 0,
    forks: 0,
    url: "https://github.com/realSalman/browser-based-local-video-player"
  }
];
