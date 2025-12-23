const projectsData = [
  {
    title: "YelpCamp",
    subtitle: "Full Stack Web Application",
    description:
      "A large-scale campground platform with authentication, reviews, image uploads, and MongoDB-based data management.",
    tags: ["node", "express", "mongo", "bootstrap"],
    code: "https://github.com/pranam1603/yelpCamp_code",
    live: "https://quiet-eyrie-98125.herokuapp.com/",
  },
  {
    title: "Movie Recommendation App",
    subtitle: "Machine Learning App",
    description:
      "A content-based movie recommendation app using NLP techniques and cosine similarity to suggest relevant movies.",
    tags: [
      "python & ml",
      "streamlit",
      "TMDB Database",
      "pandas",
      "scikit-learn",
    ],
    code: "https://github.com/pranam1603/movie-recommendation",
    live: "https://movie-recommendation-pranam.streamlit.app/",
  },
  {
    title: "Neural Network",
    subtitle: "Research Project",
    description:
      "Research on Estimating Commuter Origins and Peak Times using Neural Network, achieved r2 score = 0.7551",
    tags: [
      "python & ml",
      "geopandas",
      "floating car data",
      "pandas",
      "scikit-learn",
    ],
    code: "",
    live: "",
  },
  {
    title: "GitHub User Search",
    subtitle: "API-Based React App",
    description:
      "Search and explore GitHub users and repositories using the GitHub API.",
    tags: ["react", "github api", "css"],
    code: "https://github.com/pranam1603/git-user-react",
    live: "https://react-gitsearch-user.netlify.app/login",
  },
  {
    title: "Key Performance Indicator",
    subtitle: "Research Project",
    description:
      "Research on Key Performance Indicator for Public Transit System using Java & Python",
    tags: ["java", "python", "GTFS data", "onebusaway", "graphhopper api"],
    code: "",
    live: "",
  },
  {
    title: "Color Game",
    subtitle: "JavaScript Game",
    description:
      "An interactive RGB color guessing game built using HTML, CSS, and JavaScript.",
    tags: ["html", "css", "javascript"],
    code: "https://github.com/pranam1603/colorgame",
    live: "https://pranam1603.github.io/colorgame/colorGame.html",
  },

  {
    title: "Comfy E-commerce",
    subtitle: "Large Scale React Project",
    description:
      "An e-commerce frontend with product listings, filtering, cart functionality, and responsive UI.",
    tags: ["react", "context-api", "css", "stripe payment"],
    code: "https://github.com/pranam1603/react-comfy-ecommerce",
    live: "https://comfy-ecommerce-site.netlify.app/",
  },
  {
    title: "Photo Stock",
    subtitle: "React Frontend Project",
    description:
      "A responsive photo browsing interface inspired by Unsplash, built using React.",
    tags: ["react", "css", "unsplash api"],
    code: "https://github.com/pranam1603/photo-stock",
    live: "https://unsplash-noether-58a8b7.netlify.app/",
  },

  {
    title: "Quiz App",
    subtitle: "React Application",
    description:
      "A quiz application with dynamic questions and score tracking built using React.",
    tags: ["react", "javascript", "css"],
    code: "https://github.com/pranam1603/quiz-react",
    live: "https://quiz-quiz-872242.netlify.app/",
  },

  {
    title: "Pagination",
    subtitle: "React Utility",
    description:
      "A reusable pagination component built using React for handling large datasets.",
    tags: ["react", "ui"],
    code: "https://github.com/pranam1603/pagination-react",
    live: "https://pagination-knuth-c94bf3.netlify.app/",
  },

  {
    title: "Todo List",
    subtitle: "HTML / CSS Project",
    description:
      "A simple to-do list application built using HTML, CSS, and jQuery.",
    tags: ["html", "css", "jquery"],
    code: "https://github.com/pranam1603/Todolist",
    live: "https://pranam1603.github.io/Todolist/todo.html",
  },

  {
    title: "Tours",
    subtitle: "React Basics Project",
    description:
      "A React project demonstrating component state management and conditional rendering.",
    tags: ["react", "css"],
    code: "https://github.com/pranam1603/react-tour",
    live: "https://react-tourproject.netlify.app/",
  },

  {
    title: "Reviews",
    subtitle: "React UI Project",
    description:
      "A review carousel application built using React to demonstrate UI state changes.",
    tags: ["react", "ui"],
    code: "https://github.com/pranam1603/react-review",
    live: "https://review-beaver-1f4a31.netlify.app/",
  },

  {
    title: "Lorem Ipsum Generator",
    subtitle: "React Utility",
    description:
      "A text generator application that produces placeholder content using React.",
    tags: ["react", "utility"],
    code: "https://github.com/pranam1603/lorem-ipsum",
    live: "https://lorem-ipsum-1d9a49.netlify.app/",
  },

  {
    title: "Animated Navbar",
    subtitle: "HTML/CSS Interaction",
    description:
      "An animated navigation bar showcasing CSS transitions and JavaScript interactions.",
    tags: ["html", "css", "javascript"],
    code: "https://github.com/pranam1603/animatedNavbar",
    live: "https://pranam1603.github.io/animatedNavbar/",
  },

  {
    title: "Blur Loading",
    subtitle: "UI Animation",
    description:
      "A blur loading effect that progressively reveals content using CSS and JavaScript.",
    tags: ["html", "css", "javascript"],
    code: "https://github.com/pranam1603/blurImageLoading",
    live: "https://pranam1603.github.io/blurImageLoading/",
  },

  {
    title: "Movies Info",
    subtitle: "React + API Project",
    description:
      "A movie information platform using TMDB API to fetch and display movie details.",
    tags: ["react", "api"],
    code: "https://github.com/pranam1603/movieDB-react",
    live: "https://moviedb-clarke-0af7f1b.netlify.app/",
  },

  {
    title: "Rotating Navbar",
    subtitle: "CSS Animation",
    description:
      "A rotating navigation UI built using CSS transforms and JavaScript.",
    tags: ["html", "css", "javascript"],
    code: "https://github.com/pranam1603/rotatingNav",
    live: "https://pranam1603.github.io/rotatingNav/",
  },

  {
    title: "Hacker News",
    subtitle: "React API Project",
    description:
      "A Hacker News–style app that fetches real-time stories using an external API.",
    tags: ["react", "api"],
    code: "https://github.com/pranam1603/hacker-news",
    live: "https://hackernews-wescoff-cc1ccd.netlify.app/",
  },

  {
    title: "Progress Report",
    subtitle: "UI Dashboard",
    description:
      "A simple progress report interface demonstrating UI layout and JavaScript logic.",
    tags: ["html", "css", "javascript"],
    code: "https://github.com/pranam1603/progressReport",
    live: "https://progress-report-0742a3.netlify.app",
  },

  {
    title: "Sidebar Modal",
    subtitle: "React Component",
    description: "A sidebar and modal UI component built using React.",
    tags: ["react", "ui"],
    code: "https://github.com/pranam1603/sidebar-modal",
    live: "https://sidebar-ride-5651a5.netlify.app/",
  },

  {
    title: "Birthday Reminder",
    subtitle: "React Basics Project",
    description:
      "A birthday reminder app demonstrating React state and list rendering.",
    tags: ["react"],
    code: "https://github.com/pranam1603/react-birthday",
    live: "https://react-birthdayproject.netlify.app/",
  },

  {
    title: "Stripe Submenu",
    subtitle: "Advanced UI",
    description:
      "A submenu navigation UI inspired by Stripe, built using React.",
    tags: ["react", "ui"],
    code: "https://github.com/pranam1603/submenu-react",
    live: "https://submenu-mayer-96c2ab.netlify.app/",
  },

  {
    title: "Markdown Previewer",
    subtitle: "React Utility",
    description: "A markdown previewer application built using React.",
    tags: ["react", "utility"],
    code: "https://github.com/pranam1603/react-markdown",
    live: "https://nervous-markdown-d5ba94.netlify.app/",
  },

  {
    title: "Sound Bar",
    subtitle: "JavaScript UI",
    description:
      "A soundboard application built using HTML, CSS, and JavaScript.",
    tags: ["html", "css", "javascript"],
    code: "https://github.com/pranam1603/soundBar",
    live: "https://pranam1603.github.io/soundBar/",
  },

  {
    title: "Redux Cart",
    subtitle: "State Management Project",
    description: "A shopping cart application built using React and Redux.",
    tags: ["react", "redux"],
    code: "https://github.com/pranam1603/redux-cart",
    live: "https://redux-cart-fd4cca.netlify.app/",
  },

  {
    title: "Dark Mode",
    subtitle: "Theme Toggle Project",
    description: "A dark mode toggle application built using React.",
    tags: ["react", "ui"],
    code: "https://github.com/pranam1603/react-darkmode",
    live: "https://sleepy-darkmode-930f89.netlify.app/",
  },

  {
    title: "Drag & Drop",
    subtitle: "JavaScript Interaction",
    description: "A drag-and-drop interface demonstrating DOM manipulation.",
    tags: ["html", "css", "javascript"],
    code: "https://github.com/pranam1603/drag-drop",
    live: "https://drag-drop-6188ab.netlify.app",
  },

  {
    title: "Accordion",
    subtitle: "React UI Component",
    description: "An accordion component built using React.",
    tags: ["react", "ui"],
    code: "https://github.com/pranam1603/react-accor",
    live: "https://accordion-poitras-5f7237.netlify.app/",
  },

  {
    title: "Form Wave",
    subtitle: "CSS Animation",
    description: "A form input animation using CSS wave effects.",
    tags: ["html", "css", "javascript"],
    code: "https://github.com/pranam1603/form-input-wave",
    live: "https://pranam1603.github.io/form-input-wave/",
  },

  {
    title: "Color Generator",
    subtitle: "React Utility",
    description: "A color generator tool built using React.",
    tags: ["react"],
    code: "https://github.com/pranam1603/color-generator",
    live: "https://color-generator-df1140.netlify.app/",
  },

  {
    title: "Cocktail App",
    subtitle: "React API Project",
    description: "A cocktail search app built using React and external APIs.",
    tags: ["react", "api"],
    code: "https://github.com/pranam1603/cocktail",
    live: "https://react-cocktail-pr.netlify.app/",
  },

  {
    title: "Menu App",
    subtitle: "React Filtering UI",
    description: "A menu filtering application built using React.",
    tags: ["react", "ui"],
    code: "https://github.com/pranam1603/menu-react",
    live: "https://menu-react-5036ef.netlify.app/",
  },

  {
    title: "Hidden Search",
    subtitle: "CSS Interaction",
    description: "A hidden search bar UI animation using CSS and JavaScript.",
    tags: ["html", "css", "javascript"],
    code: "https://github.com/pranam1603/hiddenSearch",
    live: "https://pranam1603.github.io/hiddenSearch/index.html",
  },

  {
    title: "Slider",
    subtitle: "React UI Component",
    description: "An image slider component built using React.",
    tags: ["react", "ui"],
    code: "https://github.com/pranam1603/slider",
    live: "https://slider-slider-b07311.netlify.app/",
  },

  {
    title: "Navbar",
    subtitle: "React Navigation",
    description: "A responsive navigation bar built using React.",
    tags: ["react", "ui"],
    code: "https://github.com/pranam1603/navbar-react",
    live: "https://navbar-engelbart-d9f3f1.netlify.app/",
  },

  {
    title: "Expanding Cards",
    subtitle: "CSS Animation",
    description: "An expanding card UI effect using CSS and JavaScript.",
    tags: ["html", "css", "javascript"],
    code: "https://github.com/pranam1603/expandingCards",
    live: "https://pranam1603.github.io/expandingCards/",
  },

  {
    title: "Random User",
    subtitle: "React API Project",
    description: "A random user profile generator using external APIs.",
    tags: ["react", "api"],
    code: "https://github.com/pranam1603/random-react",
    live: "https://random-react-8c438b.netlify.app/",
  },

  {
    title: "Q&A",
    subtitle: "JavaScript UI",
    description: "A Q&A style interface built using HTML, CSS, and JavaScript.",
    tags: ["html", "css", "javascript"],
    code: "https://github.com/pranam1603/q-a",
    live: "https://pranam1603.github.io/q-a/",
  },

  {
    title: "Button Ripple",
    subtitle: "CSS Effect",
    description:
      "A ripple animation effect on button click using CSS and JavaScript.",
    tags: ["html", "css", "javascript"],
    code: "https://github.com/pranam1603/buttonRipple",
    live: "https://pranam1603.github.io/buttonRipple/",
  },

  {
    title: "Sticky Navbar",
    subtitle: "Scroll Interaction",
    description: "A sticky navigation bar that reacts to page scrolling.",
    tags: ["html", "css", "javascript"],
    code: "https://github.com/pranam1603/stickyNavbar",
    live: "https://pranam1603.github.io/stickyNavbar/",
  },

  {
    title: "Background Slider",
    subtitle: "UI Animation",
    description:
      "A background image slider built using HTML, CSS, and JavaScript.",
    tags: ["html", "css", "javascript"],
    code: "https://github.com/pranam1603/slidingDiv",
    live: "https://pranam1603.github.io/backgroundSlider/",
  },

  {
    title: "Experience Tabs",
    subtitle: "React UI",
    description: "Tabbed experience section built using React.",
    tags: ["react", "ui"],
    code: "https://github.com/pranam1603/react-tab",
    live: "https://tab-tab-d660e0.netlify.app/",
  },

  {
    title: "Image Gallery",
    subtitle: "HTML/CSS Gallery",
    description: "A responsive image gallery built using HTML and CSS.",
    tags: ["html", "css"],
    code: "https://github.com/pranam1603/imagegallery",
    live: "https://pranam1603.github.io/imagegallery/imagegallery.html",
  },
];

export default projectsData;
