import React from "react";
import { gameChecker } from "./../utils/gameChecker.js";

const PlayButton = ({ player1, player2 }) => {
    const playGame = () => {
        const winner = gameChecker(player1, player2);
        if (winner === "tie") alert(`It's a tie!`);
        else alert(`${winner} won!`);
    };

    return (
        <div className="play-button-container">
            <button  class="button" onClick={playGame}>Play</button>
        </div>
    );
};

export default PlayButton;
