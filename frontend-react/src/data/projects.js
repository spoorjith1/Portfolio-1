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
      "",

    images: [
      "",
    ],

    github: "https://github.com/yourusername/blog-api",

    live: ""
  },

  {
    id: 5,
    title: "Note Book",
    description: "Personal notebook, write and save your notes online",

    details:
      "A responsive note book with CRUD operations where a user need to login to start the notebook and can access the previous notes and also update them and delete them. the note book is well organized and authenticated only user can see there personal notes and no one else.",

    features: [
      "Storing notes",
      "Editing & Deleting",
      "Authorized user protection",
    ],

    tech: ["Python", "Django - DRF", "React"],

    image:
      "/notebook/notebook0.png",

    images: [
      "/notebook/notebook1.png",
      "/notebook/notebook2.png",
      "/notebook/notebook3.png",
      "/notebook/notebook4.png"
    ],

    github: "https://github.com/spoorjith1/Note_Book_DRF",

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