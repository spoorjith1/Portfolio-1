const projects = [
  {
    id: 1,
    title: "ClickMart Shopping App",
    description: "Full-stack e-commerce application with JWT authentication, cart management, and order processing",
    
    details:
      "A scalable backend system built using Django and DRF. It supports user authentication, product management, cart system, and order processing. Designed with proper database relations and secure API endpoints. used gunicorn, docker and Deployed to live server (linode)",

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

    github: "https://github.com/spoorjith1/clickmart-drf",

    live: "https://clickmartsp.shop",

    star: "yes",
    star_symbol: "/star_symbol.png"
  },

  {
    id: 2,
      title: "Bus ticket Booking - GoBus",
      description: "Bus Ticket booking application built using Django REST Framework. Features include role-based access, searching, ticket booking...",
      
      details:
        "Full stack wbe application built using Django REST Framework and react.js. The application is developed securely using REST APIs for role based authorization for customers, operators and administration. A user can search & filter schedules, select seats of there comfort, easy ticket booking process, user can access there booking history. An operator can add buses and create schedules to there belonging buses. Admin can create routes and operators.",

      features: [
        "JWT Authentication",
        "Role-based Dashboards",
        "Searching and filtering schedules",
        "Seat selection",
        "booking history",
        "easy payment process",
        "RESTful APIs"
      ],

      tech: ["Django", "DRF", "React.js", "MySQL"],

      image:
        "/btb/btb1.png",

      images: [
        "/btb/btb1.png",
        "/btb/btb2.png",
        "/btb/btb3.png",
        "/btb/btbC1.png",
        "/btb/btbC2.png",
        "/btb/btbC3.png",
        "/btb/btbC4.png",
        "/btb/btbC5.png",
        "/btb/btbC6.png",
        "/btb/btbA1.png",
        "/btb/btbA2.png",
        "/btb/btbA3.png",
        "/btb/btbO1.png",
        "/btb/btbO2.png",
        "/btb/btbO3.png",
      ],

      github: "https://github.com/spoorjith1/Bus_ticket_booking-GoBus",

      live: "",

      star: "yes",
      star_symbol: "/star_symbol.png"
  },

  {
    id: 3,
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
      "/zlite/zlite0.png",

    images: [
      "/zlite/zlite1.png",
      "/zlite/zlite2.png",
      "/zlite/zlite3.png"
    ],

    github: "https://github.com/spoorjith1/mini-instagram",

    live: "",

    star: "yes",
    star_symbol: "/star_symbol.png"
  },

  {
    id: 4,
    title: "Chat App",
    description: "Real-time private messaging application built using Django, DRF and React.js.",

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
      "/chatapp/chatapp0.png",

    images: [
      "/chatapp/chatapp1.png",
      "/chatapp/chatapp2.png",
      "/chatapp/chatapp3.png",
      "/chatapp/chatapp4.png",
    ],

    github: "https://github.com/spoorjith1/Private-Chat-app",

    live: "",

    star: "yes",
    star_symbol: "/star_symbol.png"
  },

  {
    id: 5,
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
      "/stockprediction/stockpred0.png",

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

    star: "yes",
    star_symbol: "/star_symbol.png"
  },

  {
    id: 6,
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

    github: "https://github.com/spoorjith1/File-Sharing_Using_Token",

    live: "",

    star: "no",
    star_symbol: "/star_symbol.png"
  },

  {
    id: 7,
    title: "Email Verification & OTP Authentication",
    description: "Account verification and password reset using OTP",

    details:
      "Built a Email verification system using Django REST Framework and React.js. Users can register, verify email using OTP, login with JWT authentication and change passwords using OTP.",

    features: [
      "User registratin with Email verification using OTP",
      "JWT Authentication for Login",
      "Resend OTP & OTP expiry with one time usage",
      "change password securely using Email OTP"
    ],

    tech: ["Python", "JWT", "Django", "DRF", "React"],

    image:
      "/EmailOTP/EmailOTP0.png",

    images: [
      "/EmailOTP/EmailOTP1.png",
      "/EmailOTP/EmailOTP2.png",
      "/EmailOTP/EmailOTP3.png",
    ],

    github: "https://github.com/spoorjith1/Eamil_verification_and_OTP_auth",

    live: "",

    star: "no",
    star_symbol: "/star_symbol.png"
  },

  {
    id: 8,
    title: "Account Deletion & Recovery System",
    description: "Secure account deletion and recovery system.",

    details:
      "Built a full-stack account management application using Django REST Framework and React. Users can register, login with JWT authentication, change passwords, schedule account deletion, restore accounts before deletion, and automatically remove expired accounts using a custom Django management command.",

    features: [
      "JWT Authentication",
      "Secure Password Change using Current Password",
      "30-Day Account Deletion Scheduling",
      "Restore account before permanent deletion",
      "Automatic deletion of Expired Accounts using Django Management Command"
    ],

    tech: ["Python", "JWT", "Django", "DRF", "React"],

    image:
      "/accDel/accDel0.png",

    images: [
      "/accDel/accDel1.png",
      "/accDel/accDel2.png",
      "/accDel/accDel3.png"
    ],

    github: "https://github.com/spoorjith1/Django-Account-Deletion-System",

    live: "",

    star: "no",
    star_symbol: "/star_symbol.png"
  },

  {
    id: 9,
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

    star: "no",
    star_symbol: "/star_symbol.png"
  },

  {
    id: 10,
      title: "Advanced E-commerce - ShopMore",
      description: "Full-stack e-commerce application",
      
      details:
        "A scalable backend system built using Django and DRF. It supports user authentication, product management, cart system, and order processing. Designed with proper database relations and secure API endpoints.",

      features: [
        "JWT Authentication",
        "Cart & Order System",
        "Admin Dashboard",
        "order history",
        "Custom user products",
        "Secure API endpoints"
      ],

      tech: ["Django", "DRF", "React.js", "MySQL"],

      image:
        "",

      images: [
        ""
      ],

      github: "https://github.com/spoorjith1/Advanced_E-Commerce_SHOPMORE",

      live: "",

      star: "yes",
      star_symbol: "/star_symbol.png"
  },

  {
    id: 11,
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

    star: "no",
    star_symbol: "/star_symbol.png"
  },

  {
    id: 12,
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

    star: "no",
    star_symbol: "/star_symbol.png"
  },
];

export default projects;