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
    K --> L{View providers Profile}:::decision
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
    T --> U((Receive Service)):::end
    T --> V((Submit Review & Ratings)):::end
    S --> W((View Receipt)):::receipt

    %% Booking History
    W --> X((View Booking History)):::history
    X --> Y((Track Current Bookings)):::history


    %% ----------------------------
    %% STYLES
    classDef start fill:#4da6ff,stroke:#004080,color:#fff,font-weight:bold
    classDef account fill:#e63946,stroke:#800000,color:#fff,font-weight:bold
    classDef action fill:#4caf50,stroke:#2e7d32,color:#fff
    classDef dashboard fill:#ff9800,stroke:#e65100,color:#fff,font-weight:bold
    classDef option fill:#b388ff,stroke:#4a148c,color:#000
    classDef process fill:#26c6da,stroke:#006064,color:#fff
    classDef decision fill:#e53935,stroke:#8e0000,color:#fff
    classDef book fill:#f06292,stroke:#880e4f,color:#fff
    classDef payment fill:#f8bbd0,stroke:#ad1457,color:#000
    classDef delivery fill:#424242,stroke:#000,color:#fff
    classDef end fill:#9e9e9e,stroke:#424242,color:#fff
    classDef receipt fill:#66bb6a,stroke:#1b5e20,color:#fff
    classDef history fill:#ffb74d,stroke:#e65100,color:#000
    ```
