const projects = [
  {
    id: 1,
    title: "E-commerce API",
    description: "REST API with authentication, cart, and order management.",
    
    details:
      "A scalable backend system built using Django and DRF. It supports user authentication, product management, cart system, and order processing. Designed with proper database relations and secure API endpoints.",

    features: [
      "JWT Authentication",
      "Cart & Order System",
      "Admin Dashboard",
      "Secure API endpoints"
    ],

    tech: ["Django", "DRF", "PostgreSQL"],

    image:
      "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d",

    images: [
      "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d",
      "https://images.unsplash.com/photo-1522202176988-66273c2fd55f"
    ],

    github: "https://github.com/yourusername/ecommerce-api"
  },

  {
    id: 2,
    title: "Task Manager",
    description: "Full-stack app with CRUD and JWT authentication.",

    details:
      "A full-stack task management system built with React and Django. Users can create, update, and delete tasks with authentication. Designed with RESTful APIs and clean UI.",

    features: [
      "User Authentication",
      "CRUD Operations",
      "Responsive UI",
      "REST API Integration"
    ],

    tech: ["React", "Django", "SQLite"],

    image:
      "https://images.unsplash.com/photo-1519389950473-47ba0277781c",

    images: [
      "https://images.unsplash.com/photo-1519389950473-47ba0277781c",
      "https://images.unsplash.com/photo-1498050108023-c5249f4df085"
    ],

    github: "https://github.com/yourusername/task-manager"
  },

  {
    id: 3,
    title: "Blog API",
    description: "REST API with authentication and comments system.",

    details:
      "Backend system for a blogging platform with user authentication, post creation, and comments. Implemented permissions and role-based access.",

    features: [
      "User Authentication",
      "Post & Comment System",
      "Permissions & Roles",
      "API Pagination"
    ],

    tech: ["Django", "DRF"],

    image:
      "https://images.unsplash.com/photo-1492724441997-5dc865305da7",

    images: [
      "https://images.unsplash.com/photo-1492724441997-5dc865305da7",
      "https://images.unsplash.com/photo-1508780709619-79562169bc64"
    ],

    github: "https://github.com/yourusername/blog-api"
  },

  {
    id: 4,
    title: "Chat Application",
    description: "Real-time chat app using WebSockets.",

    details:
      "A real-time messaging application using Django Channels and WebSockets. Supports live chat between users with instant updates.",

    features: [
      "Real-time messaging",
      "WebSocket integration",
      "User sessions",
      "Live updates"
    ],

    tech: ["Django", "Channels", "WebSockets"],

    image:
      "https://images.unsplash.com/photo-1525182008055-f88b95ff7980",

    images: [
      "https://images.unsplash.com/photo-1525182008055-f88b95ff7980",
      "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4"
    ],

    github: "https://github.com/yourusername/chat-app"
  },

  {
    id: 5,
    title: "Portfolio Website",
    description: "Personal portfolio built with React and Bootstrap.",

    details:
      "A responsive portfolio website showcasing projects, skills, and contact information. Built with React and styled using Bootstrap and custom CSS.",

    features: [
      "Responsive Design",
      "Dynamic Routing",
      "Clean UI",
      "Project Showcase"
    ],

    tech: ["React", "Bootstrap", "CSS"],

    image:
      "https://images.unsplash.com/photo-1461749280684-dccba630e2f6",

    images: [
      "https://images.unsplash.com/photo-1461749280684-dccba630e2f6",
      "https://images.unsplash.com/photo-1498050108023-c5249f4df085"
    ],

    github: "https://github.com/yourusername/portfolio"
  },

  {
    id: 6,
    title: "Expense Tracker",
    description: "Track daily expenses with analytics.",

    details:
      "An expense tracking application that allows users to manage daily expenses and visualize spending patterns with charts.",

    features: [
      "Expense tracking",
      "Analytics dashboard",
      "Category filtering",
      "Responsive design"
    ],

    tech: ["React", "Chart.js", "Node.js"],

    image:
      "https://images.unsplash.com/photo-1554224155-6726b3ff858f",

    images: [
      "https://images.unsplash.com/photo-1554224155-6726b3ff858f",
      "https://images.unsplash.com/photo-1560472354-b33ff0c44a43"
    ],

    github: "https://github.com/yourusername/expense-tracker"
  }
];

export default projects;