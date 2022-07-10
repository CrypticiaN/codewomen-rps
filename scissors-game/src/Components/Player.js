import React, {useEffect} from "react";
import paper from "../assets/paper.png";
import rock from "../assets/rock.png";
import scissor from "../assets/scissors.png";



const Player = ({name}) => {
   const options = [paper, rock, scissor];
   const randomOption = options[Math.floor(Math.random() * 3)];
  
//  useEffect(() => {
   
//  }, [name])
 

    return <div class="player">
      
      <h1> {name} </h1>
      <span> Score </span>
      <h3> Choose your weapon </h3>


      <div class = "images-container">
        {options.map(option=> {
           return(<img src={option} alt={option} />)
        } 
        )}

        <img src={paper} alt={paper} />
        <img src={rock} alt={rock} />
        <img src={scissor} alt={scissor} />
      </div>

    </div>;
};

export default Player;
