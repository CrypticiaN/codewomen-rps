import React, { useEffect } from "react";
import paper from "../assets/paper.png";
import rock from "../assets/rock.png";
import scissor from "../assets/scissors.png";

const Player = ({ name, onSelect, playerChoice, computer, setComputerChoice }) => {
    const options = [
        {
            name: "paper",
            img: paper,
        },
        {
            name: "rock",
            img: rock,
        },
        {
            name: "scissor",
            img: scissor,
        },
    ];

    useEffect(() => {
        
        if (name === "Computer") {
            setComputerChoice(options[Math.floor(Math.random() * 3)].name);
        }
    }, [playerChoice]);

    return name === "Computer" ? (
        <div> 
        <h1> Computer</h1>
        <img src={options.find(option=> option.name===computer)?.img} style={{width: "120px"}} alt={computer} />
        </div>
    ) : (
        <div class="player">
            <h1> {name} </h1>
            <span> Score </span>
            <h3> Choose your weapon </h3>

            <div class="images-container">
                {options.map((option) => {
                    return (
                        <img
                            src={option.img}
                            alt={option.name}
                            value={option.name}
                            onClick={onSelect}
                        />
                    );
                })}
            </div>
        </div>
        
    );
};

export default Player;
