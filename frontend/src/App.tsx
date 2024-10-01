import React, { useState } from 'react';
import ScoreBoard from './components/ScoreBoard';
import ScoringButtons from './components/ScoringButtons';

const App: React.FC = () => {
  const [matchId, setMatchId] = useState<string | undefined>(undefined);
  const [inningsId, setInningsId] = useState<string | undefined>(undefined);

  const handleMatchIdChange = (newMatchId: string) => {
    setMatchId(newMatchId);
  };

  const handleInningsIdChange = (newInningsId: string) => {
    setInningsId(newInningsId);
  };

  return (
    <div className="App">
      <h1>Cricket Scoring App</h1>
      <input
        type="text"
        value={matchId}
        onChange={(e) => handleMatchIdChange(e.target.value)}
        placeholder="Enter match ID"
      />
      <input
        type="text"
        value={inningsId}
        onChange={(e) => handleInningsIdChange(e.target.value)}
        placeholder="Enter innings ID"
      />
      {matchId && inningsId && (
        <div>
          <ScoreBoard matchId={matchId} />
          <ScoringButtons matchId={matchId} onScoreUpdate={() => console.log('Score updated!')} />
        </div>
      )}
    </div>
  );
};

export default App;