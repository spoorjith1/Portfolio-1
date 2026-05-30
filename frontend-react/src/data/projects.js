const projects = [
  {
    id: 1,
    title: "ClickMart Shopping App",
    description: "Full-stack e-commerce application with JWT authentication, cart management, and order processing",
    
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
      "/clickmart/clickmart000.png",

    images: [
      "/clickmart/clickmart1.png",
      "/clickmart/clickmart2.png",
      "/clickmart/clickmart3.png",
      "/clickmart/clickmart4.png",
      "/clickmart/clickmart5.png",
    ],

    github: "https://github.com/yourusername/ecommerce-api",

    live: "https://clickmartsp.shop",

    star: "yes"
  },

  {
    id: 2,
    title: "Mini Instagram (social media app)",
    description: "Instagram type social platform with authentication,making friends, and sharing images.",

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
      "/zlite/zlite000.png",

    images: [
      "/zlite/zlite1.png",
      "/zlite/zlite2.png",
      "/zlite/zlite3.png"
    ],

    github: "https://github.com/yourusername/blog-api",

    live: "",

    star: "yes"
  },

  {
    id: 3,
    title: "Chat App",
    description: "Real-time private messaging application built using Django Channels, DRF and React.",

    details:
      "Using Django-DRF and django channels, search-filters and react for frontend built an chatting application where a user can login and send friend requests to other users and can chat with them one-one privately.",

    features: [
      "Authentication",
      "Private Chat",
      "Secure",
      "Responsive design"
    ],

    tech: ["Django-DRF", "Django channels", "search filters", "React.js"],

    image:
      "/chatapp/chatapp000.png",

    images: [
      "/chatapp/chatapp1.png",
      "/chatapp/chatapp2.png",
      "/chatapp/chatapp3.png",
      "/chatapp/chatapp4.png",
    ],

    github: "https://github.com/spoorjith1/Private-Chat-app",

    live: "",

    star: "yes"
  },

  {
    id: 4,
    title: "Stock Prediction Portal",
    description: "Machine learning-based stock prediction platform with previous years data and analysing the data.",

    details:
      "An stock prediction portal . built using yfinance package used minconda jupyter notebook for testing the predictions using python's numpy pandas matplotlib modules. ",

    features: [
      "AI ML",
      "accurate prediction of stock of [Google(GOOG), Tesla(TSLA), Apple(AAPL), ...]",
      "User Authentication",
      "yfinance"
    ],

    tech: ["Numpy", "Pandas", "Matplotlib", "Django", "ML", "React"],

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

    live: "",

    star: "yes"
  },

  {
    id: 5,
    title: "Data sharing with access key",
    description: "Secure file-sharing platform using access keys and share tokens.",

    details:
      "Django-DRF & React.js Project for storing files in a databse and allowing a user to get or access the file using a secure share token and access key and the other user will receive the file accordingly while not showing the user data.",

    features: [
      "Authentication",
      "Store Data (Images, PDF Files, Zips and more)",
      "Secure",
      "Share token and Access Key"
    ],

    tech: ["Django REST Framework", "React.js"],

    image:
      "/upcloud/upcloud0.png",

    images: [
      "/upcloud/upcloud1.png",
      "/upcloud/upcloud2.png",
      "/upcloud/upcloud3.png",
    ],

    github: "https://github.com/spoorjith1/Private-Chat-app",

    live: "",

    star: "no"
  },

  {
    id: 6,
    title: "Note Book",
    description: "Authenticated note management application with CRUD functionalities.",

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

    live: "",

    star: "no"
  },

  {
    id: 7,
    title: "Authentication system using DRF_JWT",
    description: "Secure JWT authentication API with user registration, login, profile management, and authorization.",

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

    live: "",

    star: "no"
  },

  {
    id: 8,
    title: "Movies Search (React Project)",
    description: "React application for discovering, searching movies, and managing favorites.",

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

    live: "https://movie-search-sp.netlify.app",

    star: "no"
  },
];

export default projects;