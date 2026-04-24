const projects = [
  {
    id: 1,
    title: "ClickMart Shopping App",
    description: "REST API with authentication, cart, and order management.",
    
    details:
      "A scalable backend system built using Django and DRF. It supports user authentication, product management, cart system, and order processing. Designed with proper database relations and secure API endpoints.",

    features: [
      "JWT Authentication",
      "Cart & Order System",
      "Admin Dashboard",
      "order history",
      "Secure API endpoints"
    ],

    tech: ["Django", "DRF", "React.js", "PostgreSQL"],

    image:
      "/clickmart/clickmart0.png",

    images: [
      "/clickmart/clickmart1.png",
      "/clickmart/clickmart2.png",
      "/clickmart/clickmart3.png",
      "/clickmart/clickmart4.png",
      "/clickmart/clickmart5.png",
    ],

    github: "https://github.com/yourusername/ecommerce-api",

    live: "https://clickmartsp.shop"
  },

  {
    id: 2,
    title: "Stock Prediction Portal",
    description: "An stock prediction portal . built using yfinance package",

    details:
      "An stock prediction portal . built using yfinance package used minconda jupyter notebook for testing the predictions using python's numpy pandas matplotlib modules. ",

    features: [
      "AI ML",
      "accurate prediction of stock of [Google(GOOG), Tesla(TSLA), Apple(AAPL), ...]",
      "User Authentication",
      "yfinance"
    ],

    tech: ["numpy, pandas, matplotlib", "django", "ML", "react"],

    image:
      "/stockprediction/stockpred2.png",

    images: [
      "/stockprediction/stockpred1.png",
      "/stockprediction/stockpred2.png",
      "/stockprediction/stockpred3.png",
      "/stockprediction/stockpred4.png",
      "/stockprediction/stockpred5.png",
      "/stockprediction/stockpred6.png",
      "/stockprediction/stockjupyter1.png",
      "/stockprediction/stockjupyter2.png",
      "/stockprediction/stockjupyter3.png",
    ],

    github: "https://github.com/spoorjith1/stock-prediction-Portal",

    live: ""
  },

  {
    id: 3,
    title: "Authentication system using DRF_JWT",
    description: "Backend Authentication system for register, login and CRUD operations",

    details:
      "A real-time Backend API's for secure login, register new user, edit the profile and delete the user using django, rest_framework and simple_jwt",

    features: [
      "secure APIs",
      "Authenticated Access",
      "password hashing",
      "AbstractUser"
    ],

    tech: ["Django", "DRF", "Simple JWT"],

    image:
      "",

    images: [
      "",
      ""
    ],

    github: "https://github.com/spoorjith1/authentication_drf_jwt",

    live: ""
  },

  {
    id: 4,
    title: "Mini Instagram (social media app)",
    description: "DRF APIs with Authentication and Secure user profiles",

    details:
      "built an mini intsgaram type app where an user have to login to access the app. user can posts images, user can send friend request to others and can view there posts after becoming friends secure and easy images sharing app.",

    features: [
      "User Authentication",
      "Posts & friend requests",
      "Permissions",
      "Restful APIs"
    ],

    tech: ["Django", "DRF", "React", "Postgresql"],

    image:
      "https://images.unsplash.com/photo-1492724441997-5dc865305da7",

    images: [
      "https://images.unsplash.com/photo-1492724441997-5dc865305da7",
      "https://images.unsplash.com/photo-1508780709619-79562169bc64"
    ],

    github: "https://github.com/yourusername/blog-api",

    live: ""
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

    github: "https://github.com/yourusername/portfolio",

    live: ""
  },

  {
    id: 6,
    title: "Movies Search (React Mini Project)",
    description: "Display the latest movies, search any movie & add to favorites",

    details:
      "Using React built an movie search application that can display the latest movies on home se=creen and an search option for searching an movie and movies can be added to favorites. For the API i used TMDB api key which can be accessed by anyone just by signup to the application.",

    features: [
      "Movies search",
      "add to favorites",
      "Category filtering",
      "Responsive design"
    ],

    tech: ["React", "TMDB API"],

    image:
      "/moviesearch/moviesearch1.png",

    images: [
      "/moviesearch/moviesearch1.png",
      "/moviesearch/moviesearch2.png",
      "/moviesearch/moviesearch3.png"
    ],

    github: "https://github.com/spoorjith1/React-Projects/tree/main/Movie-Search/frontend",

    live: "https://movie-search-sp.netlify.app"
  }
];

export default projects;