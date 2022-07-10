export const gameChecker = (player1, player2) => {
    const players = [player1, player2];

    const match = players.sort().join("");

    if (match === "rockscissor") {
        if (player1 === "rock") return "Player 1";

        return "Player 2";
    } else if (match === "paperscissor") {
        if (player1 === "scissor") return "Player 1";

        return "Player 2";
    } else if (match === "paperrock") {
        if (player1 === "paper") return "Player 1";

        return "Player 2";
    } else {
        return "tie";
    }
};
