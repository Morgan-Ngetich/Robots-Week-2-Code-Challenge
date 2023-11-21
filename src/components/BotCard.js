import React from 'react';
import { Link } from 'react-router-dom'; //Used to create a "LINK
import BotDetails from './BotDetails';

function BotCard({ bot }) { //Takes "bot" as props
  //Link conponent creates a Link to a specific route i.e (/bots/${bot.id})
  return (
    <Link to={`/bots/${bot.id}`} className="card-link">
      {/* Bot prop is passed to "BotDetails" */}
      <BotDetails bot={bot} />
    </Link>
  );
}

export default BotCard;
