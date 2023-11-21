// BotSpecs.js
import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import BotCard from './BotCard'; 
import { useBotContext } from './BotContext'

function BotSpecs() {
  const { id } = useParams();  //Used to extract "ID" parameter from the Fetched URL
  const navigate = useNavigate(); //Used to handle navigation actions
  const { addBot } = useBotContext();// Used to access the context, spefically the "addBot funciton"

  //UseState hook is used to manage the state of "viewBot" which stores the details of "viewBots"
  const [viewBot, setViewBot] = useState(null);
  

  useEffect(() => {
    fetch(`http://localhost:3000/bots/${id}`)
      .then((res) => res.json())
      .then((data) => setViewBot(data));
  }, [id]);

  const handleAddBack = () => {  //Function is called when the ""Add To Army" button is clicked
    //Checks if the bot details are available then calls "addBot" function from the context to enlist the bot
    if (viewBot) {
      //Called the addBot from the context to add the bot to the enlisted bots
      addBot(viewBot)
      //Uses Navigatehook to Navigate to the YourBotArmy page
      navigate('/')
    }
  }

  const handleGoBack = () => {
    navigate(-1); //Navgation to go back one step in the browser's history
  }

  if (!viewBot) return <h1 className="loading-header">Loading...</h1>;

  return (
    <div className="card-container-spec">
      {/* Passing viewBot as a prop  */}
      <BotCard bot={viewBot} />
      <div className="card-details-spec">
        <p>Created At: {viewBot.created_at}</p>
        <p>Updated At: {viewBot.updated_at}</p>
        <button onClick={handleAddBack} className="button-1">Add To Army</button>
        <button onClick={handleGoBack} className="button-2">Go To Collection</button>
      </div>
    </div>
  );
}

export default BotSpecs;
