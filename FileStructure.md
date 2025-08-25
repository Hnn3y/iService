iService/
├── node_modules/             # Frontend dependencies
├── public/                   # React public assets
├── src/                      # React source code
│   ├── assets/               # Images, fonts, icons
│   ├── components/           # Reusable UI components
│   ├── context/              # React context (Auth, Cart, etc.)
│   ├── hooks/                # Custom hooks
│   ├── layouts/              # Layouts (shared header, sidebar, etc.)
│   ├── pages/                # Route pages (Home, Booking, Profile, etc.)
│   ├── routes/               # React Router configuration
│   ├── services/             # API calls to backend
│   ├── styles/               # Global styles (CSS/Tailwind configs)
│   ├── utils/                # Helper functions
│   └── main.jsx              # React entry point
│
├── server/                   # Backend code (Express, Node.js)
│   ├── config/               # DB connection, env setup
│   ├── controllers/          # Route controllers
│   ├── middleware/           # Auth, logging, error handling
│   ├── models/               # Database models (MongoDB, etc.)
│   ├── routes/               # API routes
│   ├── services/             # Business logic
│   ├── utils/                # Reusable backend helpers
│   ├── server.js             # Express entry point
│   └── package.json          # Backend dependencies
│
├── .env                      # Environment variables
├── .gitignore
├── package.json              # Frontend dependencies & scripts
├── vite.config.js            # Vite config for React
└── README.md                 # Project documentation