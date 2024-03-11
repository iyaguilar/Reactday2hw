import React, { useState } from 'react';


const Component = () => {
    const [game, setGame] = useState({
    id: 1,
    player: {
        name: "Dylan"
}
});

const handleClick = () => {
    setGame({
        ...game,
        player: {
        ...game.player,
        name:'John',
        }
    });

};

return (
<>
<h1>Thieves Instructor</h1>

    <button onClick={handleClick}>Change Instructor</button>
    <p>player name: {game.player.name}</p>
</>
);
};
export default Component;