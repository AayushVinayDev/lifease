import React, { useState } from 'react';
import ScoreBoard from './components/ScoreBoard';
import ScoringButtons from './components/ScoringButtons';

const App: React.FC = () => {
  const [matchId, setMatchId] = useState<string | null>(null);
  const [inningsId, setInningsId] = useState<string | null>(null);


  return (
    <div className="App">
      <h1>Cricket Scoring App</h1>
      {matchId && <ScoreBoard matchId={matchId} />}
      {inningsId && <ScoringButtons inningsId={inningsId} />}
    </div>
  );
};

export default App;