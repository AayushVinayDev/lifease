# Cricket Scoring Application Documentation

## Table of Contents
1. [Introduction](#introduction)
2. [Getting Started](#getting-started)
3. [Backend (NestJS)](#backend-nestjs)
   - [API Endpoints](#api-endpoints)
   - [Data Models](#data-models)
4. [Frontend (React)](#frontend-react)
   - [Components](#components)
   - [State Management](#state-management)
5. [Functionality](#functionality)
6. [Scoring Logic](#scoring-logic)

## Introduction

The Cricket Scoring Application is a full-stack web application designed to provide real-time scoring and statistics for cricket matches. It consists of a NestJS backend with MongoDB for data storage and a React frontend for user interaction.

## Getting Started

### Prerequisites
- Node.js (v14 or later)
- MongoDB
- npm or yarn

### Installation

1. Clone the repository:
   ```
   git clone https://github.com/AayushVinayDev/lifease.git
   cd lifease
   ```

2. Install backend dependencies:
   ```
   cd backend
   npm install
   ```

3. Install frontend dependencies:
   ```
   cd ../frontend
   npm install
   ```

4. Set up environment variables:
   - Create a `.env` file in the `backend` directory
   - Add the following variables:
     ```
     MONGODB_URI=mongodb://localhost:27017/lifease
     ```

5. Start the backend server:
   ```
   cd backend
   npm run start:dev
   ```

6. Start the frontend development server:
   ```
   cd frontend
   npm start
   ```

The application should now be running on `http://localhost:3000` 

## Backend (NestJS)

### API Endpoints

#### Matches

- `GET /api/matches`: List all matches
- `GET /api/matches/:id`: Get details of a specific match
- `POST /api/matches`: Create a new match
- `PUT /api/matches/:id`: Update match details
- `DELETE /api/matches/:id`: Delete a match

#### Innings

- `GET /api/innings/:matchId`: Get innings for a specific match
- `POST /api/innings`: Create a new innings
- `PUT /api/innings/:id`: Update innings details

#### Scoring

- `POST /api/scores`: Record a ball (runs, extras, wickets)
- `GET /api/scores/:inningsId`: Get full scorecard for an innings
- `PUT /api/scores/:id`: Update a specific ball (for error correction)
- `DELETE /api/scores/:id`: Remove a ball (for error correction)

#### Players

- `GET /api/players`: List all players
- `GET /api/players/:id`: Get player details
- `POST /api/players`: Add a new player
- `PUT /api/players/:id`: Update player details

#### Statistics

- `GET /api/statistics/match/:matchId`: Get match statistics
- `GET /api/statistics/player/:playerId`: Get player statistics

### Data Models

1. Match
   - Teams
   - Date
   - Venue
   - Status (upcoming, ongoing, completed)

2. Innings
   - Match ID
   - Batting Team
   - Bowling Team
   - Total Runs
   - Wickets
   - Overs

3. Score
   - Innings ID
   - Ball Number
   - Batsman ID
   - Bowler ID
   - Runs Scored
   - Extras (wides, no-balls, byes, leg-byes)
   - Wicket Information

4. Player
   - Name
   - Team
   - Role (batsman, bowler, all-rounder)

## Frontend (React)

### Components

1. `ScoreBoard`: Displays current match status and score
2. `ScoringButtons`: Interface for recording balls and runs
3. `BatsmanCard`: Shows individual batsman statistics
4. `BowlerCard`: Displays current bowler's figures
5. `MatchSelection`: Allows users to choose or create a match
6. `ErrorCorrection`: Interface for correcting scoring mistakes
7. `Statistics`: Displays various match and player statistics

### State Management

The application uses React Context API for state management, allowing components to access and update the current match state efficiently.

## Functionality

1. Create and manage cricket matches
2. Real-time ball-by-ball scoring
3. Display live scorecard with batsman and bowler statistics
4. Handle all types of scoring scenarios (normal runs, extras, wickets)
5. Error correction for misreported balls
6. View match and player statistics

## Scoring Logic

The scoring logic handles various scenarios including:

- Normal runs (0-6)
- Extras (wide, no-ball, bye, leg-bye)
- Wickets (all types)
- Special cases:
  - No-ball with runs
  - Wide with runs
  - Overthrows
  - Byes and leg-byes off no-balls

The system ensures that runs are correctly attributed to batsmen, extras, and team totals, and that bowler figures are accurately updated.


---

