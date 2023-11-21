import React, { useEffect, useState } from 'react';
import YourBotArmy from './YourBotArmy'
import BotCard from './BotCard'; 


function BotCollection() {
  //State hook creates a stateVariable and Funciton to update state
  //Initialise state to an empty array
  const [bots, setBots] = useState([]); 

  //Hook fetches as the Components mounts
  useEffect(() => {
    fetch("https://robotsdata.onrender.com/bots")  //"GET" request
      .then((res) => res.json())
      .then((data) => setBots(data));
  }, []); 

  //Used for debugging purposes
  console.log("Data:", bots)
  
  return (
    <div>
      <YourBotArmy />
      <h2 className="header">Bot Collection</h2>
      <div className="card-container">
        {bots.map((bot) => (
          <BotCard key={bot.id} bot={bot} />
        ))}
      </div>
    </div>
  );
}

export default BotCollection;
