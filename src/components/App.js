import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import BotCollection from './BotCollection';
import BotSpecs from "./BotSpecs";
import { BotProvider } from './BotContext';


function App() {
  return (
    <Router>
      <Routes>       
        <Route path="/" element={<BotCollection />} />
        <Route path="/bots/:id" element={<BotSpecs />} />        
      </Routes>
    </Router>
  );
}

export default function WrappedApp() {
  return (
    <BotProvider>
    <App />
  </BotProvider>
  );
}
  





