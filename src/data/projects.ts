import fitpromixaiImg from "../../fitpromixai.png";
import genUrlImg from "../../GenURL portfolio.png";
import jigsEventsImg from "../../jigs events portfolio.png";

export const projects = [
  {
    slug: "genurl",
    title: "GenURL",
    description: "A modern URL Shortener with Chrome Extension support built using TypeScript and Tailwind CSS.",
    image: genUrlImg.src,
    tags: ["TypeScript", "Tailwind CSS", "Chrome Extension"],
    github: "https://github.com/PremOp009/CodeAlpha_GenURL",
    demo: "https://genurl-prem.vercel.app/",
    content: {
      overview: "GenURL is a fast and modern URL shortening platform designed to simplify link sharing with a clean UI and seamless user experience. The project also includes a Chrome Extension that allows users to shorten URLs instantly directly from the browser.",
      features: [
        "Instant URL shortening",
        "One-click copy to clipboard",
        "Fast and responsive performance",
        "Modern UI with Tailwind CSS",
        "Fully responsive design",
        "Chrome Extension support",
        "Cloud deployment with Vercel"
      ],
      techStack: ["TypeScript", "Tailwind CSS", "HTML5", "Javascript", "Python", "Vercel", "Chrome Extension APIs"]
    }
  },
  {
    slug: "fitpromixai",
    title: "FitProMix AI",
    description: "Transform your fitness journey with smart AI-powered workout plans, nutrition guidance, and personalized health tracking.",
    image: fitpromixaiImg.src,
    tags: ["React", "AI", "Tailwind CSS", "Vite"],
    github: "https://github.com/PremOp009/fitpromixai",
    demo: "https://fitpromixai.vercel.app/",
    content: {
      overview: "FitProMix AI combines modern web technologies with intelligent fitness assistance to create an engaging and personalized fitness platform. Whether you're a beginner or fitness enthusiast, the platform helps users stay motivated and organized.",
      features: [
        "Personalized workout recommendations & smart guidance",
        "Meal planning assistance & nutrition monitoring",
        "Track workout progress & monitor fitness goals",
        "Responsive design & smooth animations",
        "Optimized frontend for fast loading experience",
        "AI-generated health suggestions"
      ],
      techStack: ["React.js", "Tailwind CSS", "JavaScript / TypeScript", "Vite", "Vercel", "AI Recommendation System"]
    }
  },
  {
    slug: "jigs-events",
    title: "Jigs Events",
    description: "An AI-powered full-stack Event Management & Ticket Registration Platform with QR Authentication.",
    image: jigsEventsImg.src,
    tags: ["React", "Django", "React Native", "AI"],
    github: "https://github.com/PremOp009/CodeAlpha_Jigs-event",
    demo: "https://jigs-event.vercel.app/",
    content: {
      overview: "Jigs Events is a modern event management ecosystem that allows organizers to create and manage events while users can browse, register, purchase tickets, and receive QR-based digital passes. The platform also includes a dedicated Android Scanner App for real-time ticket verification during event entry.",
      features: [
        "JWT Authentication (User, Organizer, Admin Roles)",
        "Create, Edit & Delete Events with Categories & Filtering",
        "AI-Generated Event Descriptions using Hugging Face",
        "Smart Ticketing System with QR Code Generation & PDF Downloads",
        "Online Ticket Payments via Razorpay",
        "Dedicated Android QR Scanner App for real-time validation",
        "Comprehensive Dashboards for Users, Organizers, and Admins",
        "Glassmorphism UI with Futuristic Dark Theme"
      ],
      techStack: ["React", "TypeScript", "Vite", "Tailwind CSS", "Framer Motion", "Django REST Framework", "SimpleJWT", "PostgreSQL", "Razorpay", "Hugging Face API", "qrcode", "ReportLab", "React Native", "Expo", "Vercel", "Render"]
    }
  }
];
