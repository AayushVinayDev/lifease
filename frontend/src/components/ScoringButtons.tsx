import React from 'react';
import { api } from '../services/api';

interface ScoringButtonsProps {
  matchId: string;
  onScoreUpdate: () => void;
}

const ScoringButtons: React.FC<ScoringButtonsProps> = ({ matchId, onScoreUpdate }) => {
  const handleRunScored = async (runs: number) => {
    try {
      await api.recordScore({ matchId, type: 'run', value: runs });
      onScoreUpdate();
    } catch (error) {
      console.error('Error recording run:', error);
    }
  };

  const handleExtra = async (type: string) => {
    try {
      await api.recordScore({ matchId, type, value: 1 });
      onScoreUpdate();
    } catch (error) {
      console.error(`Error recording ${type}:`, error);
    }
  };

  const handleWicket = async () => {
    try {
      await api.recordScore({ matchId, type: 'wicket', value: 1 });
      onScoreUpdate();
    } catch (error) {
      console.error('Error recording wicket:', error);
    }
  };

  return (
    <div className="scoring-buttons">
      <div className="run-buttons">
        {[0, 1, 2, 3, 4, 5, 6].map((run) => (
          <button key={run} onClick={() => handleRunScored(run)}>
            {run}
          </button>
        ))}
      </div>
      <div className="extra-buttons">
        <button onClick={() => handleExtra('wide')}>Wide</button>
        <button onClick={() => handleExtra('no-ball')}>No Ball</button>
        <button onClick={() => handleExtra('bye')}>Bye</button>
        <button onClick={() => handleExtra('leg-bye')}>Leg Bye</button>
      </div>
      <div className="wicket-button">
        <button onClick={handleWicket}>Wicket</button>
      </div>
    </div>
  );
};

export default ScoringButtons;
