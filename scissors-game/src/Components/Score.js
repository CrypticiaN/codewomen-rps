import React, { useState } from "react";

const Score = ({ player1Score, player2Score }) => {
    return (
        <div className="score-container">
            <h2>Scores</h2>
            <h3>Player 1</h3>
            <span>{{ player1Score }}</span>
            <h3>Player 2</h3>
            <span>{{ player2Score }}</span>
        </div>
    );
};

export default Score;
