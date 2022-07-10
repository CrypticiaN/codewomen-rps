export const gameChecker = (player1, player2) => {
    const players = [player1, player2];

    const match = players.sort().join("");

    if (match === "rockscissors") {
        if (player1 === "rock") return "player1";

        return "player2";
    } else if (match === "paperscissors") {
        if (player1 === "scissors") return "player1";

        return "player2";
    } else if (match === "paperrock") {
        if (player1 === "paper") return "player1";

        return "player2";
    } else {
        return "tie";
    }
};
