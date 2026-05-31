import fitpromixaiImg from "../../fitpromixai.png";
import genUrlImg from "../../GenURL portfolio.png";
import jigsEventsImg from "../../jigs events portfolio.png";

export const projects = [
  {
    slug: "genurl",
    title: "GenURL",
    description: "A comprehensive web application for generating, managing, and tracking URLs efficiently.",
    image: genUrlImg.src,
    tags: ["React", "TypeScript", "Tailwind CSS", "Web"],
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
        "Cloud deployment with Vercel",
        "Built using TypeScript"
      ],
      techStack: ["TypeScript", "Tailwind CSS", "HTML5", "Javascript", "Python", "Vercel", "Chrome Extension APIs"]
    }
  },
  {
    slug: "fitpromixai",
    title: "FitpromixAI",
    description: "A comprehensive SaaS platform featuring a retention engine, automated notifications, community feed, and advanced reporting.",
    image: fitpromixaiImg.src,
    tags: ["React", "Firebase", "Node.js", "TypeScript"],
    github: "https://github.com/PremOp009/fitpromixai",
    demo: "https://fitpromixai.vercel.app/",
    content: {
      overview: "FitpromixAI is an advanced SaaS application designed to enhance customer retention through automated notifications and detailed reporting. It serves as a community hub with integrated analytics.",
      features: [
        "Comprehensive retention engine",
        "Automated push notifications",
        "Interactive community feed",
        "Advanced data reporting and analytics",
        "Secure user authentication",
        "Real-time database integration"
      ],
      techStack: ["React", "Next.js", "Firebase", "Node.js", "TypeScript", "Tailwind CSS"]
    }
  },
  {
    slug: "jigs-events",
    title: "Jigs-Events",
    description: "An elegant event management platform to seamlessly discover, create, and host dynamic events.",
    image: jigsEventsImg.src,
    tags: ["React", "Node.js", "Tailwind CSS", "Web"],
    github: "https://github.com/PremOp009/CodeAlpha_Jigs-event",
    demo: "https://jigs-event.vercel.app/",
    content: {
      overview: "Jigs Events is a modern event management ecosystem that allows organizers to create and manage events while users can browse, register, purchase tickets, and receive QR-based digital passes. The platform also includes a dedicated Android Scanner App for real-time ticket verification during event entry.",
      features: [
        "JWT Authentication with User / Organizer / Admin Roles",
        "Create, Edit & Delete Events with Categories & Filtering",
        "AI-Generated Event Descriptions using Hugging Face",
        "Smart Ticketing System with QR Code Generation",
        "Online Ticket Payments via Razorpay",
        "Dedicated Android QR Scanner App for real-time validation",
        "Comprehensive Dashboards for Users, Organizers, and Admins"
      ],
      techStack: ["React", "TypeScript", "Django REST Framework", "Razorpay", "Hugging Face AI", "Tailwind CSS"]
    }
  }
];
