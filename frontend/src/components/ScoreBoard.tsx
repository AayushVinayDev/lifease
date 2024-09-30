import React, { useState, useEffect } from 'react';
import { api } from '../services/api';

interface MatchDetails {
  teams: string[];
  venue: string;
  date: string;
}

interface Score {
  runs: number;
  wickets: number;
  overs: number;
}

interface Batsman {
  name: string;
  runs: number;
  balls: number;
}

interface Bowler {
  name: string;
  overs: number;
  runs: number;
  wickets: number;
}

interface ScoreBoardProps {
  matchId: string;
}

const ScoreBoard: React.FC<ScoreBoardProps> = ({ matchId }) => {
  const [matchDetails, setMatchDetails] = useState<MatchDetails | null>(null);
  const [currentScore, setCurrentScore] = useState<Score | null>(null);
  const [currentBatsmen, setCurrentBatsmen] = useState<Batsman[]>([]);
  const [currentBowler, setCurrentBowler] = useState<Bowler | null>(null);

  useEffect(() => {
    const fetchMatchData = async () => {
      try {
        const response = await api.getMatch(matchId);
        const matchData = response.data;
        setMatchDetails(matchData.details);
        setCurrentScore(matchData.currentScore);
        setCurrentBatsmen(matchData.currentBatsmen);
        setCurrentBowler(matchData.currentBowler);
      } catch (error) {
        console.error('Error fetching match data:', error);
      }
    };

    fetchMatchData();
    const interval = setInterval(fetchMatchData, 5000); // Update every 5 seconds

    return () => clearInterval(interval);
  }, [matchId]);

  if (!matchDetails || !currentScore) {
    return <div>Loading...</div>;
  }

  return (
    <div className="scoreboard">
      <h2>Match Details</h2>
      <p>{matchDetails.teams[0]} vs {matchDetails.teams[1]}</p>
      <p>Venue: {matchDetails.venue}</p>
      <p>Date: {matchDetails.date}</p>

      <h3>Current Score</h3>
      <p>{currentScore.runs}/{currentScore.wickets} ({currentScore.overs} overs)</p>

      <h3>Current Batsmen</h3>
      {currentBatsmen.map((batsman, index) => (
        <p key={index}>{batsman.name}: {batsman.runs} ({batsman.balls} balls)</p>
      ))}

      <h3>Current Bowler</h3>
      {currentBowler && (
        <p>{currentBowler.name}: {currentBowler.wickets}/{currentBowler.runs} ({currentBowler.overs} overs)</p>
      )}
    </div>
  );
};

export default ScoreBoard;
