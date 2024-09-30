import React from 'react';

interface BowlerCardProps {
  name: string;
  overs: number;
  maidens: number;
  runs: number;
  wickets: number;
}

const BowlerCard: React.FC<BowlerCardProps> = ({ name, overs, maidens, runs, wickets }) => {
  const economy = overs > 0 ? (runs / overs).toFixed(2) : '0.00';

  return (
    <div className="bowler-card">
      <h3>{name}</h3>
      <div className="bowler-stats">
        <p>Overs: {overs}</p>
        <p>Maidens: {maidens}</p>
        <p>Runs: {runs}</p>
        <p>Wickets: {wickets}</p>
        <p>Economy: {economy}</p>
      </div>
    </div>
  );
};

export default BowlerCard;
