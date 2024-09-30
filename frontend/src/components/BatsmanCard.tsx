import React from 'react';

interface BatsmanCardProps {
  name: string;
  runs: number;
  ballsFaced: number;
  fours: number;
  sixes: number;
}

const BatsmanCard: React.FC<BatsmanCardProps> = ({ name, runs, ballsFaced, fours, sixes }) => {
  const strikeRate = ballsFaced > 0 ? ((runs / ballsFaced) * 100).toFixed(2) : '0.00';

  return (
    <div className="batsman-card">
      <h3>{name}</h3>
      <div className="batsman-stats">
        <p>Runs: {runs}</p>
        <p>Balls Faced: {ballsFaced}</p>
        <p>Fours: {fours}</p>
        <p>Sixes: {sixes}</p>
        <p>Strike Rate: {strikeRate}</p>
      </div>
    </div>
  );
};

export default BatsmanCard;
