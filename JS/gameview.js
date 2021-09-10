export default class GameView{
    constructor()
    {
    }

    updateBoard(game)
    {
        this.updateTurn(game);
        const winningCombination = game.findWinningCombinations();
        for(let i=0; i < game.board.length; ++i)
        {
            const tile = document.querySelector(`.board-tile[data-index='${i}']`);
            tile.classList.remove("winner-tile");
            /*console.log(tile);*/
            let tileType = game.board[i] == 'X' ? "tile-x" : "tile-o";
            tile.innerHTML = 
            `<span class="${tileType}">
                ${game.board[i] ? game.board[i] : ""}
            </span>`;

            if(winningCombination && winningCombination.includes(i))
            {
                tile.classList.add("winner-tile");
            }
        }
    }

    updateTurn(game)
    {
        let playerX = document.querySelector(".player-x");
        let playerO = document.querySelector(".player-o");
        if(game.turn == 'X')
        {
            playerX.classList.add('active');
            playerO.classList.remove('active');
        }
        else{
            playerO.classList.add('active');
            playerX.classList.remove('active');
        }
    }
}