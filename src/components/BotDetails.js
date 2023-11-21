import React from 'react';

function BotDetails({ bot, onDelete }) {  //Takes two props and uses emoji handler to display an emoji based on the "botClass"
  function emojiHandler(botClass) {  //Takes bolt as an argument
    switch (botClass) { //Swith statements evaluates the value of "botClass"
      case 'Support':
        return '🛦';
      case 'Medic':
        return '🚑';
      case 'Witch':
        return '🧛🏼‍♀️';
      case 'Defender':
        return '⚔️';
      case 'Assault':
        return '🔫';
      case 'Captain':
        return '💀 ';
      default:                //Default case
        return 'Image Removed !!!';
    }
  }

  return (
    <div className="card" onClick={onDelete}>
      <img src={bot.avatar_url} alt={bot.name} className="card-image" />
      <div className="card-details">
        <p className="bold"> {bot.name} {emojiHandler(bot.bot_class)} </p>
        <p>{bot.catchphrase}</p>
        <p className="flat">&#128148; {bot.health}</p>
        <p className="flat">⚡{bot.damage}</p>
        <p className="flat">🛡️ {bot.armor}</p>
        <p className={'bold-class'}>{bot.bot_class}</p>
      </div>
    </div>
  );
}

export default BotDetails;
