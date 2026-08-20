# TYPEFORGE

## Progressive DSA Learning Platform

TYPEFORGE is a full-stack learning platform designed to help developers progressively build Data Structures and Algorithms problem-solving skills.

Instead of presenting users with a large collection of problems and leaving them to decide what to solve next, TYPEFORGE focuses on structured progression, skill mastery, problem-solving patterns, and personalized recommendations.

The goal is to answer a simple question:

> What should I learn and solve next based on what I actually know?

---

## Overview

Traditional coding practice platforms are primarily problem repositories. TYPEFORGE is designed around the learning process itself.

The platform evaluates a learner's performance across concepts, patterns, attempts, hints, mistakes, and problem difficulty to build an evolving understanding of their DSA skills.

```text
Assess
  |
  v
Learn
  |
  v
Practice
  |
  v
Analyze
  |
  v
Adapt
  |
  v
Master
```

The system progressively moves learners from foundational concepts to advanced problem-solving and interview-level challenges.

---

## Core Principles

### Progressive Learning

Problems are introduced according to the learner's current level rather than simply being grouped into Easy, Medium, and Hard categories.

A typical progression can be:

```text
Concept Introduction
        |
        v
Guided Problem
        |
        v
Similar Problem
        |
        v
Problem Variation
        |
        v
Mixed Pattern Problem
        |
        v
Timed Problem
        |
        v
Interview Challenge
```

### Concept Mastery

TYPEFORGE tracks mastery at the concept and pattern level.

For example:

```text
Arrays              86%
Hashing             71%
Two Pointers        64%
Sliding Window      48%
Trees               32%
Graphs              18%
Dynamic Programming  7%
```

Progress is based on actual problem-solving behavior rather than simply counting completed problems.

### Adaptive Practice

The platform analyzes previous attempts to determine what the learner should practice next.

Recommendation factors include:

* Concept mastery
* Problem difficulty
* Recent performance
* Failed attempts
* Time taken
* Hint usage
* Solution approach
* Repeated mistakes
* Problem-solving patterns
* Recency of practice

---

## Key Features

### Progressive Learning Paths

Structured paths guide learners from fundamentals to advanced topics.

Planned learning areas include:

* Programming fundamentals
* Complexity analysis
* Arrays
* Strings
* Recursion
* Linked Lists
* Stacks
* Queues
* Hashing
* Trees
* Heaps
* Graphs
* Greedy algorithms
* Backtracking
* Dynamic Programming

---

### Problem-Solving Patterns

TYPEFORGE emphasizes reusable problem-solving patterns rather than isolated problems.

Planned patterns include:

* Two Pointers
* Sliding Window
* Binary Search
* Prefix Sum
* Fast and Slow Pointers
* Monotonic Stack
* Backtracking
* Greedy
* Divide and Conquer
* Dynamic Programming

The objective is to help learners recognize which approach applies to an unfamiliar problem.

---

### Adaptive Problem Recommendations

After each session, TYPEFORGE evaluates the learner's current knowledge and recommends the next problem.

For example:

```text
Recommended Next Problem

Longest Substring Without Repeating Characters

Reason:
Your array fundamentals are strong, but your
sliding-window and hash-map application needs
more practice.

Focus:
Hash Maps
Sliding Window

Difficulty:
Intermediate
```

---

### Progressive Hint System

Hints are revealed gradually rather than immediately exposing the solution.

```text
Hint 1
Identify the information that needs to be
remembered while traversing the input.

        |

Hint 2
Can previously encountered values help?

        |

Hint 3
Consider using a HashMap.

        |

Hint 4
Store each value along with the information
required to determine the answer.
```

Hint usage becomes part of the learner's performance data.

---

### Submission Analysis

A correct submission is not the end of the learning process.

TYPEFORGE will analyze:

* Time complexity
* Space complexity
* Approach used
* Optimization opportunities
* Number of attempts
* Time taken
* Hint usage

Example:

```text
Your Solution

Correct
Time Complexity: O(n²)
Space Complexity: O(1)

Recommended Approach

Time Complexity: O(n)
Space Complexity: O(n)

Focus Area:
Hash Maps
```

---

### Mistake Intelligence

TYPEFORGE aims to identify recurring problem-solving mistakes rather than simply recording incorrect submissions.

Potential mistake categories include:

* Boundary condition errors
* Incorrect loop conditions
* Off-by-one errors
* Incorrect data structure selection
* Complexity issues
* Missing edge cases
* Incorrect recursion termination
* Pattern misidentification
* Unnecessary nested loops

Repeated mistakes can influence future problem recommendations.

---

### Skill Graph

Concepts and patterns will be represented as interconnected skills.

```text
                    Arrays
                      |
          +-----------+-----------+
          |                       |
          v                       v
       Hashing              Two Pointers
          |                       |
          v                       v
   Frequency Maps         Sliding Window
          |                       |
          +-----------+-----------+
                      |
                      v
                Advanced Problems
```

Mastery of prerequisite concepts can unlock more advanced areas.

---

### Developer-Focused Practice

The platform is designed for developers preparing for:

* Technical interviews
* Coding assessments
* Competitive programming
* Placement preparation
* Stronger problem-solving fundamentals

Future versions may include language-specific problem environments and code execution.

---

### Performance Analytics

Learners will be able to track:

* Problems attempted
* Problems solved
* Success rate
* Average solving time
* Concept mastery
* Pattern mastery
* Hint usage
* Repeated mistakes
* Difficulty progression
* Weekly and monthly progress

The objective is to measure **learning progress**, not simply the number of solved problems.

---

## Planned User Experience

The primary dashboard will focus on continuation rather than problem discovery.

```text
TYPEFORGE

YOUR DSA JOURNEY

Overall Mastery
64%

Arrays                86%
Hashing               71%
Linked Lists          54%
Trees                 32%
Graphs                18%
Dynamic Programming    7%


CONTINUE LEARNING

Hash Maps
Two Sum — Variation 03

Difficulty
Intermediate

Focus
Pattern Recognition

[ CONTINUE ]
```

The learner should always have a clear next step.

---

## Technology Stack

### Frontend

| Technology    | Purpose                 |
| ------------- | ----------------------- |
| Next.js       | Application framework   |
| React         | User interface          |
| TypeScript    | Type-safe development   |
| Tailwind CSS  | Styling                 |
| Framer Motion | Interface animation     |
| Recharts      | Analytics visualization |

### Backend

| Technology | Purpose             |
| ---------- | ------------------- |
| Node.js    | Backend runtime     |
| Express.js | REST API            |
| TypeScript | Backend development |
| Zod        | Request validation  |
| JWT        | Authentication      |
| bcrypt     | Password hashing    |

### Database

| Technology | Purpose                    |
| ---------- | -------------------------- |
| PostgreSQL | Relational database        |
| SQL        | Data queries and analytics |
| Prisma     | Database ORM               |

PostgreSQL is intentionally part of the project to provide practical experience with relational database design, SQL queries, relationships, indexing, aggregation, and analytics.

### Code Execution

A sandboxed execution environment will be introduced for running submitted solutions safely.

### AI

An LLM-based service may be integrated for:

* Solution explanations
* Personalized feedback
* Mistake analysis
* Learning recommendations
* Concept explanations

### Development

| Technology       | Purpose             |
| ---------------- | ------------------- |
| Git              | Version control     |
| GitHub           | Source management   |
| Vercel           | Frontend deployment |
| Render / Railway | Backend deployment  |
| Neon / Supabase  | PostgreSQL hosting  |

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
              |                         REST API
              |                             |
              +--------------+--------------+
                             |
                         PostgreSQL
                             |
       +---------------------+---------------------+
       |                     |                     |
     Users               Learning Data        Problem Data
       |                     |                     |
   Profiles           Mastery Scores       Problems
   Progress           Attempts             Patterns
   Goals              Mistakes             Concepts
                      Hints                Solutions
```

---

## Database Model

The planned relational database will contain entities such as:

```text
users
  |
  +-- learning_progress
  |
  +-- problem_attempts
  |       |
  |       +-- submissions
  |       +-- hints_used
  |
  +-- concept_mastery
  |
  +-- pattern_mastery
  |
  +-- learning_paths
  |
  +-- user_goals
```

The database will provide the historical data required for adaptive recommendations and performance analysis.

---

## Project Structure

```text
TYPEFORGE/
|
+-- frontend/
|   +-- src/
|   |   +-- app/
|   |   +-- components/
|   |   +-- features/
|   |   +-- lib/
|   |
|   +-- public/
|   +-- package.json
|   +-- tsconfig.json
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

* [x] Initialize repository
* [x] Set up Next.js frontend
* [x] Set up Express backend
* [x] Configure TypeScript
* [x] Configure Git and GitHub
* [x] Define initial product direction

### Phase 2: Product Interface

* [ ] Build landing page
* [ ] Establish visual design system
* [ ] Build learning dashboard
* [ ] Build problem workspace
* [ ] Build progress interface
* [ ] Add responsive design

### Phase 3: Database

* [ ] Design PostgreSQL schema
* [ ] Create relational tables
* [ ] Define relationships and constraints
* [ ] Write SQL queries
* [ ] Connect Express to PostgreSQL
* [ ] Implement database services

### Phase 4: Learning System

* [ ] Create DSA concepts
* [ ] Create problem taxonomy
* [ ] Create learning paths
* [ ] Define difficulty levels
* [ ] Define concept prerequisites
* [ ] Implement progression rules

### Phase 5: Problem-Solving Engine

* [ ] Problem workspace
* [ ] Code editor
* [ ] Submission handling
* [ ] Test cases
* [ ] Solution evaluation
* [ ] Complexity analysis

### Phase 6: Adaptive Learning

* [ ] Track attempts
* [ ] Track hints
* [ ] Track mistakes
* [ ] Calculate concept mastery
* [ ] Calculate pattern mastery
* [ ] Recommend next problems
* [ ] Implement progressive difficulty

### Phase 7: Analytics

* [ ] Learning dashboard
* [ ] Concept mastery visualization
* [ ] Performance trends
* [ ] Problem-solving statistics
* [ ] Mistake analysis
* [ ] Learning history

### Phase 8: AI Learning Assistant

* [ ] Concept explanations
* [ ] Progressive hints
* [ ] Solution analysis
* [ ] Personalized feedback
* [ ] Learning recommendations

### Phase 9: Interview Preparation

* [ ] Timed challenges
* [ ] Interview simulations
* [ ] Mixed-topic problems
* [ ] Difficulty progression
* [ ] Performance reports

---

## Getting Started

### Prerequisites

Install the following before running TYPEFORGE:

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

Frontend:

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

Backend:

```text
http://localhost:5000
```

---

## Environment Variables

Environment-specific configuration should be stored in `.env` files and must not be committed to Git.

Example:

```env
PORT=5000
DATABASE_URL=your_postgresql_connection_string
JWT_SECRET=your_jwt_secret
```

---

## Project Goals

TYPEFORGE is being developed around four primary goals:

1. Make DSA learning progressive rather than overwhelming.
2. Help learners understand problem-solving patterns rather than memorize solutions.
3. Use performance data to personalize the learning path.
4. Provide practical experience with full-stack development, SQL, data analytics, algorithms, and AI.

---

## Current Status

**Version:** 0.2.0

**Status:** Early Development

The initial frontend and backend foundations have been established. The product direction has now evolved into a progressive DSA learning platform.

The next milestone is the product interface, followed by the PostgreSQL data model and learning system.

---

## Author

**Monica**

Computer Science and Engineering Student

GitHub: [MS04Monica](https://github.com/MS04Monica)

---

## License

This project is currently under development. Licensing information will be added before the first public release.
