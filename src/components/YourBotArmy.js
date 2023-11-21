// YourBotArmy.js
import React from 'react';
import { useBotContext } from './BotContext';
import BotDetails from './BotDetails';

function YourBotArmy() {
  const { enlistedBots, removeBot } = useBotContext();

  function handleDelete(id){
    //Called the removed fucntion from the context to remove the bot with the specified id
    removeBot(id)
  } 


  const dischargeBot = (id) => {
    fetch(`https://robotsdata.onrender.com/bots/${id}`, {
      method: "DELETE",
    });
    removeBot(id);
  }

  const handleDischarge = (id) => {
    dischargeBot(id);
  } 

  
  return (
    <div className="your-bot-army">
      <h2 className="header">Your Bot Army</h2>
      <div className="card-container">
        {enlistedBots.map((bot) => (
          <div key={bot.id}>
            <button className="discharge-button" onClick={() => handleDischarge(bot.id)}> DELETE </button>
            <BotDetails key={bot.id} bot={bot} onDelete={() => handleDelete(bot.id)} />

          </div>           
        ))}
      </div>
    </div>
  );
}

export default YourBotArmy;
