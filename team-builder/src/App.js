import React, { useState } from 'react';
import logo from './logo.svg';
import Form from './components/Form';
import TeamMember from './components/TeamMember'
import './App.css';

function App() {
  const [team, setTeam] = useState([]);

  const addMember = info => {
    setTeam([...team, info]);
  };

  return (
    <div className="App">
      <h1>Team Member Form</h1>
      <Form addMember={addMember} />
      <TeamMember membersList={team} />    
    </div>
  );
}

export default App;
