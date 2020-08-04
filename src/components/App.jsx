import React from "react";

import EmojiCard from "./EmojiCard";
import dictionary from "../dictionary";

import "./index.css";

function createCard(card) {
    return (
        <EmojiCard 
            key={card.id}
            emoji={card.emoji}
            name={card.name}
            description={card.meaning}
        />
    );
}

function App() {
    return (
        <div>
      <h1>
        <span>emojipedia</span>
      </h1>

      <dl className="dictionary">
        {dictionary.map(createCard)}
      </dl>


      </div>
    );
}

export default App;