```mermaid
flowchart TD

    %% Landing and Account
    A([Landing Page]):::start --> B[[Account]]:::account
    B -->|No| C(Sign up):::action
    B -->|Yes| D(Login):::action
    C --> E(Create Profile):::action
    E --> F[Dashboard]:::dashboard
    D --> F

    %% Dashboard Options
    F --> G((Browse service categories)):::option
    F --> H((Search for Services)):::option
    F --> I((View search Results)):::option

    G --> J[Apply Filters]:::process
    H --> J
    I --> J

    %% Provider Selection
    J --> K{Select service Provider}:::decision
    K --> L{View provider Profile}:::decision
    L --> M{Make Decisions}:::decision
    M -->|No| J
    M -->|Yes| N{Check Availability}:::decision
    N --> O[Book Service]:::book

    %% Booking and Payment
    O --> P(Confirm Booking Details):::payment
    P --> Q(Select Payment Method):::payment
    Q --> R(Process Payment):::payment
    R --> S(Receive Booking Confirmation):::payment

    %% Service Delivery
    S --> T[Service Delivery]:::delivery
    T --> U((Receive Service)):::endnode
    T --> V((Submit Review & Ratings)):::endnode
    S --> W((View Receipt)):::receipt

    %% Booking History
    W --> X((View Booking History)):::history
    X --> Y((Track Current Bookings)):::history

    %% ----------------------------
    %% STYLES (v9/v10 safe)
    classDef start fill:#4da6ff,stroke:#004080,stroke-width:1px,color:#ffffff
    classDef account fill:#e63946,stroke:#800000,stroke-width:1px,color:#ffffff
    classDef action fill:#4caf50,stroke:#2e7d32,stroke-width:1px,color:#ffffff
    classDef dashboard fill:#ff9800,stroke:#e65100,stroke-width:1px,color:#ffffff
    classDef option fill:#b388ff,stroke:#4a148c,stroke-width:1px,color:#000000
    classDef process fill:#26c6da,stroke:#006064,stroke-width:1px,color:#ffffff
    classDef decision fill:#e53935,stroke:#8e0000,stroke-width:1px,color:#ffffff
    classDef book fill:#f06292,stroke:#880e4f,stroke-width:1px,color:#ffffff
    classDef payment fill:#f8bbd0,stroke:#ad1457,stroke-width:1px,color:#000000
    classDef delivery fill:#424242,stroke:#000000,stroke-width:1px,color:#ffffff
    classDef endnode fill:#9e9e9e,stroke:#424242,stroke-width:1px,color:#ffffff
    classDef receipt fill:#66bb6a,stroke:#1b5e20,stroke-width:1px,color:#ffffff
    classDef history fill:#ffb74d,stroke:#e65100,stroke-width:1px,color:#000000
    ```

```Readme
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
