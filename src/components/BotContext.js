import React, { createContext, useContext, useState } from 'react';

//The "createContext" is used to create a context object called "BotContext"
const BotContext = createContext(); //The context will be used to share state & fucntions betweeen  functions

export const BotProvider = ({ children }) => {
  //"BotProvider" is a provider componenet that wraps its children with 'BotContext.Provider'
  //enlisted represents an array of enlistedBots
  const [enlistedBots, setEnlistedBots] = useState([]);

  const addBot = (bot) => {  //Function is used to add a bot to the list of enlisted bots.
    //Checkif the bot is already enlisted by comparing it with the 'id'
    if(!enlistedBots.some((enlistedBot) => enlistedBot.id === bot.id)) {
      //if not is adds to the State
    setEnlistedBots((prevEnlistedBots) => [...prevEnlistedBots, bot]);
    }
  };

  const removeBot = (id) => { //Fucntion is used to remove a bot from the list of enlisted bots
    setEnlistedBots((prevEnlistedBots) => prevEnlistedBots.filter((bot) => bot.id !== id));
  }

 
  return (
    // "BotContext.Provider" => object containing the 'enlisted bots array', etc...
    //The "children" prop is rendered within the "Bot.." to allow the nsted components to access the context value.
    <BotContext.Provider value={{ enlistedBots, addBot, removeBot }}>
      {children} 
    </BotContext.Provider>
  );
};

//The useBotContext hook is defined using the 'useContext' hook
//Components that use this hook will have the access to context value
export const useBotContext = () => useContext(BotContext);
