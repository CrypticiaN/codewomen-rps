import Player from "./Components/Player";
import PlayButton from "./Components/PlayButton";
import Score from "./Components/Score";
import { useState } from "react";

const options = [
    {
        name: "paper",
    },
    {
        name: "rock",
    },
    {
        name: "scissor",
    },
];
const randomOption = options[Math.floor(Math.random() * 3)].name;

function App() {
    const [playerChoice, setPlayerChoice] = useState(null);
    const [computerChoice, setComputerChoice] = useState(randomOption);
    // const [player1Score, setPlayer1Score] = useState(0);
    // const [player2Score, setPlayer2Score] = useState(0);

    const onSelect = (event) => {
        setPlayerChoice(event.target.alt);
    };

    const changeComputer = (event) => {
        console.log(event, "eveeeentt");
        setComputerChoice(event);
    };
    console.log("computeeer", computerChoice);

    return (
        <div>
            <header>
                <h1>Rock Paper Scissors Game</h1>
                <div class="play">
                    <PlayButton player1={playerChoice} player2={computerChoice} />
                </div>
                <div className="score-container">
                    {/* <Score player1Score={player1Score} player2Score={player2Score} /> */}
                </div>
            </header>

            <div class="players">
                <Player name="Player" onSelect={onSelect} />
                <Player
                    name="Computer"
                    playerChoice={playerChoice}
                    computer={computerChoice}
                    setComputerChoice={changeComputer}
                />
            </div>
        </div>
    );
}

export default App;
