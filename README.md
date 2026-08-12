# TYPEFORGE

## Adaptive Typing Practice and Performance Platform

TYPEFORGE is a full-stack typing practice platform designed to go beyond traditional typing tests. Instead of focusing only on Words Per Minute (WPM), TYPEFORGE analyzes typing behavior, identifies weaknesses, tracks performance, and provides personalized training.

The project is being developed with a focus on practical full-stack engineering, SQL, data analytics, adaptive learning, and real-time applications.

---

## Overview

Traditional typing platforms primarily provide a score after a typing test. TYPEFORGE aims to turn typing practice into a continuous learning process.

A typical workflow will be:

```text
Typing Session
      |
      v
Performance Analysis
      |
      v
Weakness Detection
      |
      v
Personalized Training
      |
      v
Progress Tracking
      |
      v
Improved Performance
```

The system will use historical typing data to understand individual performance and adjust future practice accordingly.

---

## Key Features

### Typing Engine

* Real-time typing interface
* WPM calculation
* Accuracy calculation
* Error tracking
* Backspace tracking
* Character-level feedback
* Configurable test duration
* Session results

### Performance Analytics

* Average WPM
* Best WPM
* Accuracy trends
* Error rate
* Backspace statistics
* Typing consistency
* Words and characters typed
* Practice time
* Session history

### Adaptive Training

TYPEFORGE will identify areas where a user struggles and generate targeted exercises.

The system will analyze:

* Frequently mistyped keys
* Common key combinations
* Difficult words
* Accuracy patterns
* Speed consistency
* Performance trends

Future practice sessions can then be adjusted based on this information.

### Developer Typing Mode

A dedicated mode for practicing programming-related typing.

Planned content includes:

* Java
* Python
* JavaScript
* C++
* SQL
* HTML and CSS
* Git commands
* Linux commands

The system will also track performance with programming characters and syntax such as:

```text
{ } [ ] ( ) ; : < > / \ | ' "
```

### AI Typing Coach

The planned AI coaching system will use a user's historical performance to generate personalized feedback.

It will identify:

* Performance strengths
* Areas requiring improvement
* Changes in typing speed
* Accuracy patterns
* Recommended practice areas
* Progress over time

### Gamification

Planned features include:

* Experience points
* Levels
* Daily challenges
* Achievements
* Practice streaks
* Personal records
* Weekly goals

### Multiplayer

TYPEFORGE will eventually support real-time typing competitions.

Planned functionality includes:

* One-versus-one typing battles
* Private rooms
* Matchmaking
* Real-time progress
* Battle history
* Multiplayer rankings

### Leaderboards

Users will eventually be able to compare their performance through:

* Global rankings
* Weekly rankings
* WPM rankings
* Accuracy rankings
* Friends rankings
* Community or college rankings

---

## Technology Stack

### Frontend

| Technology    | Purpose                   |
| ------------- | ------------------------- |
| Next.js       | Frontend framework        |
| React         | User interface            |
| TypeScript    | Type-safe development     |
| Tailwind CSS  | Styling                   |
| Framer Motion | UI animations             |
| Recharts      | Performance visualization |

### Backend

| Technology | Purpose             |
| ---------- | ------------------- |
| Node.js    | Backend runtime     |
| Express.js | REST API            |
| TypeScript | Backend development |
| JWT        | Authentication      |
| bcrypt     | Password hashing    |
| Zod        | Request validation  |

### Database

| Technology | Purpose                        |
| ---------- | ------------------------------ |
| PostgreSQL | Relational database            |
| SQL        | Database queries and analytics |
| Prisma     | Database ORM                   |

PostgreSQL is being used intentionally to gain practical experience with relational database design, SQL queries, relationships, indexing, and data analysis.

### Real-Time and AI

| Technology | Purpose                                 |
| ---------- | --------------------------------------- |
| Socket.IO  | Real-time multiplayer functionality     |
| LLM API    | AI-powered typing analysis and coaching |

### Development and Deployment

| Technology       | Purpose                |
| ---------------- | ---------------------- |
| Git              | Version control        |
| GitHub           | Source code management |
| Vercel           | Frontend deployment    |
| Render / Railway | Backend deployment     |
| Neon / Supabase  | PostgreSQL hosting     |

---

## System Architecture

```text
                         TYPEFORGE
                             |
              +--------------+--------------+
              |                             |
          Frontend                       Backend
          Next.js                       Express.js
              |                             |
              |                        REST API
              |                             |
              +--------------+--------------+
                             |
                         PostgreSQL
                             |
              +--------------+--------------+
              |              |              |
            Users        Sessions       Analytics
              |              |              |
        Achievements     Errors        Performance
        Streaks          Statistics    Weak Keys
        Challenges
```

---

## Database Design

TYPEFORGE will use a relational PostgreSQL database.

The planned data model includes:

```text
users
  |
  +-- typing_sessions
  |       |
  |       +-- session_errors
  |       +-- typing_statistics
  |
  +-- achievements
  |
  +-- user_achievements
  |
  +-- streaks
  |
  +-- daily_challenges
```

The database will support historical analysis of typing performance and provide the data required for adaptive training.

---

## Project Structure

```text
TYPEFORGE/
|
+-- frontend/
|   +-- src/
|   |   +-- app/
|   |   +-- components/
|   |   +-- lib/
|   |
|   +-- public/
|   +-- package.json
|   +-- tsconfig.json
|   +-- ...
|
+-- backend/
|   +-- src/
|       +-- controllers/
|       +-- routes/
|       +-- middleware/
|       +-- services/
|       +-- db/
|       +-- server.ts
|
+-- database/
|   +-- schema.sql
|   +-- seeds/
|
+-- .gitignore
+-- README.md
```

---

## Development Roadmap

### Phase 1: Foundation

* [x] Create project repository
* [x] Set up Next.js frontend
* [x] Set up Express backend
* [x] Configure TypeScript
* [x] Configure Git and GitHub

### Phase 2: Database

* [ ] Design PostgreSQL schema
* [ ] Create relational tables
* [ ] Define relationships and constraints
* [ ] Write SQL queries
* [ ] Add database connection
* [ ] Implement database operations

### Phase 3: Typing Engine

* [ ] Build typing interface
* [ ] Implement timer
* [ ] Calculate WPM
* [ ] Calculate accuracy
* [ ] Track errors
* [ ] Track backspaces
* [ ] Create results screen

### Phase 4: User System

* [ ] User registration
* [ ] User login
* [ ] Authentication
* [ ] User profiles
* [ ] Session history

### Phase 5: Analytics and Adaptive Training

* [ ] Performance dashboard
* [ ] WPM trends
* [ ] Accuracy trends
* [ ] Weak-key detection
* [ ] Error pattern analysis
* [ ] Adaptive exercises

### Phase 6: Developer Mode

* [ ] Programming typing challenges
* [ ] Language-based categories
* [ ] Syntax analysis
* [ ] Developer-specific statistics

### Phase 7: Gamification

* [ ] Experience points
* [ ] Levels
* [ ] Achievements
* [ ] Streaks
* [ ] Daily challenges
* [ ] Leaderboards

### Phase 8: AI Coach

* [ ] Performance analysis
* [ ] Personalized recommendations
* [ ] Progress summaries
* [ ] AI-generated training suggestions

### Phase 9: Multiplayer

* [ ] Real-time typing rooms
* [ ] One-versus-one battles
* [ ] Matchmaking
* [ ] Battle results
* [ ] Multiplayer leaderboard

---

## Getting Started

### Prerequisites

Make sure the following are installed:

* Node.js
* npm
* Git
* PostgreSQL

### Clone the Repository

```bash
git clone https://github.com/MS04Monica/TYPEFORGE.git
cd TYPEFORGE
```

### Frontend

```bash
cd frontend
npm install
npm run dev
```

The frontend will be available at:

```text
http://localhost:3000
```

### Backend

Open a separate terminal:

```bash
cd backend
npm install
npm run dev
```

The backend will be available at:

```text
http://localhost:5000
```

---

## Environment Variables

Environment-specific configuration will be stored in `.env` files and should never be committed to the repository.

Example:

```env
PORT=5000
DATABASE_URL=your_postgresql_connection_string
JWT_SECRET=your_jwt_secret
```

---

## Project Goals

TYPEFORGE is being developed to achieve three primary goals:

1. Build a practical and engaging typing training platform.
2. Use performance data to provide personalized learning.
3. Gain hands-on experience with modern full-stack development, SQL, PostgreSQL, APIs, authentication, real-time communication, analytics, and AI integration.

---

## Current Status

**Version:** 0.1.0

**Status:** In Development

The initial project structure and backend foundation have been established. Database implementation and the core typing engine are the next development milestones.

---

## Author

**Monica**

Computer Science and Engineering Student

GitHub: [MS04Monica](https://github.com/MS04Monica)

---

## License

This project is currently under development. Licensing information will be added as the project approaches its first public release.
