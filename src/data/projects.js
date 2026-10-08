/**
 * projects.js
 * Source of truth for portfolio projects.
 */

export const featuredProjects = [
  {
    id: 'choudharyji',
    name: 'Choudharyji / E-Commerce',
    category: 'Full-Stack Web Application',
    description: 'A comprehensive modern e-commerce storefront with an admin panel, secure authentication, and payment integration.',
    tech: ['Next.js', 'TypeScript', 'React', 'Tailwind CSS', 'Supabase', 'PostgreSQL', 'Razorpay', 'Cloudinary'],
    features: [
      'Product catalog and management via Admin panel',
      'Shopping cart and checkout flow with Razorpay integration',
      'Atomic stock reservation and PostgreSQL functions/RPC',
      'Admin authentication using Supabase SSR',
      'Customer OTP authentication with JWT sessions'
    ],
    github: 'https://github.com/amoghkashyap1427/E-Commerce-Web-Application',
    live: 'https://e-commerce-web-pickle.vercel.app',
    problem: 'Building a full-stack, production-ready e-commerce platform requires handling complex state, secure payments, and scalable data management.',
    whatIBuilt: 'A complete end-to-end e-commerce solution featuring a customer storefront and a secure administrative dashboard.',
    approach: 'Leveraged Next.js App Router for server-side rendering and Supabase for a robust PostgreSQL backend, integrating Razorpay for seamless checkouts.'
  },
  {
    id: 'datapilot',
    name: 'DataPilot',
    category: 'AI / Data Analyst Agent',
    description: 'An AI-powered Data Analyst Agent that uses LLM orchestration and safe tool-calling to analyze CSV datasets and generate visualizations.',
    tech: ['Python', 'Pandas', 'NumPy', 'Matplotlib', 'Gemini API', 'Gradio'],
    features: [
      'Natural-language querying of uploaded CSV datasets',
      'Safe, deterministic tool-calling instead of arbitrary code execution',
      'Automated dataset inspection, profiling, and missing-value analysis',
      'Dynamic generation of bar charts, line charts, scatter plots, and histograms',
      'Multi-step agent workflow with execution tracing'
    ],
    github: 'https://github.com/amoghkashyap1427/DataPilot',
    live: 'https://huggingface.co/spaces/AmoghKashyap17/DataPilot',
    problem: 'Traditional LLM chatbots hallucinate numerical analysis and pose security risks when blindly executing generated code.',
    whatIBuilt: 'An AI-powered Data Analyst Agent that allows users to upload CSV datasets and ask natural-language questions about their data.',
    approach: 'Designed a tool-augmented orchestration architecture where the Gemini API acts as a planner, strictly calling predefined Python/Pandas functions to ensure accuracy and security.'
  },
  {
    id: 'railscan',
    name: 'RailScan',
    category: 'PNR Status Checker',
    description: 'A real-time web application to check Indian Railway PNR status with dynamic train details and a responsive UI.',
    tech: ['React', 'Vite', 'JavaScript', 'CSS', 'RapidAPI'],
    features: [
      'Real-time PNR status lookup via railway API',
      'Detailed train route, name, number, and journey date',
      'Passenger coach, seat, berth, and booking status display',
      'Fully responsive, mobile-optimized grid layout',
      'Secure API key management through environment variables'
    ],
    github: 'https://github.com/amoghkashyap1427/PNR-Status',
    live: 'https://pnr-status-17.vercel.app/',
    problem: 'Users need a fast, visually clean, and mobile-friendly way to check their complex PNR details without navigating cluttered interfaces.',
    whatIBuilt: 'A responsive PNR status checking application that cleanly visualizes live train, passenger, and booking status data.',
    approach: 'Built a lightweight React SPA using Vite, fetching live data via RapidAPI and rendering it in an intuitive, responsive glassmorphism UI.'
  }
];

export const otherProjects = [
  {
    id: 'kestrel',
    name: 'Kestrel Research Assistant',
    description: 'A deterministic multi-agent AI system designed to answer questions by researching an internal knowledge base.',
    tech: ['Python', 'FAISS', 'LLM API'],
    github: 'https://github.com/amoghkashyap1427/kestrel-research-assistant',
    live: null
  },
  {
    id: 'edtech',
    name: 'Ed-Tech Website',
    description: 'A responsive learning platform with Google OAuth, dashboards, course management, and performance tracking.',
    tech: ['HTML', 'CSS', 'JS', 'Firebase'],
    github: 'https://github.com/amoghkashyap1427/Ed-Tech-Website',
    live: 'https://tech-verse-web.vercel.app'
  },
  {
    id: 'ekadanta',
    name: 'EKADANTA',
    description: 'A story-driven action-adventure game built for a game design contest, deployed via WebAssembly.',
    tech: ['Python', 'Pygame', 'WebAssembly'],
    github: 'https://github.com/amoghkashyap1427/EKADANTA',
    live: 'https://amoghkashyap1427.github.io/EKADANTA/' // Assuming GH pages URL format, but user said "Do NOT invent a GitHub Pages URL if the exact URL cannot be verified." I will set it to null and let GitHub button handle it.
  },
  {
    id: 'udaycreation',
    name: 'Textile Industry Info Website',
    description: 'A modern, responsive business website developed for a Surat-based textile job-work specialist.',
    tech: ['HTML', 'CSS', 'JS'],
    github: 'https://github.com/amoghkashyap1427/Textile-Industry-Info-Website',
    live: null
  },
  {
    id: 'passwordmanager',
    name: 'Password Manager',
    description: 'A web application to securely add, search, and manage passwords locally in the browser.',
    tech: ['React.js', 'JavaScript', 'CSS3'],
    github: 'https://github.com/amoghkashyap1427/Password-Manager',
    live: null
  }
];

export const practiceProjects = [
  { name: 'Weather App', github: 'https://github.com/amoghkashyap1427/Weather-App', live: 'https://weather17.niat.tech/' },
  { name: 'Password Generator', github: 'https://github.com/amoghkashyap1427/password_generator-amogh', live: 'https://passgenerator17.niat.tech/' },
  { name: 'Wikipedia Search', github: 'https://github.com/amoghkashyap1427/WikiPeadia-Search-Website', live: null },
  { name: 'Customizable Button Maker', github: 'https://github.com/amoghkashyap1427/Customizable-Button-Maker-', live: null },
  { name: 'Tic-Tac-Toe', github: 'https://github.com/amoghkashyap1427/tictactoe-amogh', live: 'https://tictactoe17.niat.tech' },
  { name: 'Responsive Landing Page', github: 'https://github.com/amoghkashyap1427/Responsive-Landing-Page', live: 'https://brave-cafe-website.vercel.app/' },
  { name: 'Form Validation', github: 'https://github.com/amoghkashyap1427/Valid-Form', live: 'https://validform-17.netlify.app/' },
  { name: 'Google Clone', github: 'https://github.com/amoghkashyap1427/Google-Clone', live: 'https://google-17.netlify.app/' }
];

export const cpProjects = [
  { name: 'LeetCode Questions', github: 'https://github.com/amoghkashyap1427/LeetCode-Questions' },
  { name: 'CodeChef Questions', github: 'https://github.com/amoghkashyap1427/CodeChef-Questions' }
];