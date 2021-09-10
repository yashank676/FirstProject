import Game from "./game.js"
import GameView from "./gameview.js"

let game = new Game();
let gameView = new GameView();

gameView.updateBoard(game);

document.querySelector(".restart").addEventListener("click", startNewGame);

let tiles = document.querySelectorAll(".board-tile");

tiles.forEach((tile) => {
    tile.addEventListener("click", () => onTileClick(tile.dataset.index));
});

function onTileClick(index)
{
    /*console.log(index);*//* this prints the index of the tile clicked */
    
    /* make a move, show in the web and change turn */
    game.makeMove(index);
    gameView.updateBoard(game);
}

function startNewGame()
{
    game = new Game();
    gameView.updateBoard(game);
}