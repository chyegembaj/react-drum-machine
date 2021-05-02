import React, { useState } from "react";
import "./style.css";

export default function App() {
  const [keys, setKeys] = useState([
    {
      id: 1,
      keyTrigger: "Q",
      url: "https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3",
      name: "Heater-1"
    },
    {
      id: 2,
      keyTrigger: "W",
      url: "https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3",
      name: "Heater-2"
    },
    {
      id: 3,
      keyTrigger: "E",
      url: "https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3",
      name: "Heater-3"
    },
    {
      id: 4,
      keyTrigger: "A",
      url: "https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3",
      name: "Kick_n_Hat"
    },
    {
      id: 5,
      keyTrigger: "S",
      url: "https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3",
      name: "Cev_H2"
    },
    {
      id: 6,
      keyTrigger: "D",
      url: "https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3",
      name: "Dsc_Oh"
    },
    {
      id: 7,
      keyTrigger: "Z",
      url: "https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3",
      name: "Kick_n_Hat"
    },
    {
      id: 8,
      keyTrigger: "X",
      url: "https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3",
      name: "Cev_H2"
    },
    {
      id: 9,
      keyTrigger: "C",
      url: "https://s3.amazonaws.com/freecodecamp/drums/Chord_1.mp3",
      name: "Chord_1"
    }
  ]);

  const [name, setName] = useState("");

  const handleClick = e => {
    e.preventDefault();
    //const clickItem = document.getElementById();
    const audio = e.target.children[0];
    audio.play();
    keys.map(({ id, keyTrigger, url, name }) => {
      if (keyTrigger == e.target.innerText) {
        //setName(name);
        document.getElementById("display").innerText = name;
      }
    });

    //console.log(clickItem);
  };

  const handleKeyPress = event => {
    event.preventDefault();
    const key = event.key.toUpperCase();

    const audio = document.getElementById(key);
    audio.play();
  };

  return (
    <div className="drum-container" id="drum-machine">
      <h1>Drum Machine</h1>
      <div id="display" />
      <div className="drum-display">
        {keys.map(({ id, keyTrigger, url }) => {
          return (
            <div
              className="drum-pad"
              id="key-pad"
              onClick={handleClick}
              onKeyPress={handleKeyPress}
            >
              {keyTrigger}
              <audio
                source
                src={url}
                type="audio/mpeg"
                className="clip"
                id={keyTrigger}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
}
