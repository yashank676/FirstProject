/* all logic of the game is in this file */
/* export default is acting like making it public */
export default class Game{

    constructor()
    {
        this.turn = "X"; /* assuming turn starts with X */
        this.board = new Array(9).fill(null); /* initialized an array of size 9 filled with null values */
    }

    /* adding functionalities written in planning.md */


    nextTurn()
    {
        if(this.turn=="X")
        this.turn="O";
        else this.turn="X";
    }

    makeMove(index)
    {
        if(this.endOfGame())
        return;

        if(this.board[index]!=null)
        return;

        this.board[index] = this.turn;
        this.nextTurn();
    }

    findWinningCombinations()
    {
        const winningCombinations = [
            [0,1,2],
            [3,4,5],
            [6,7,8],
            [0,3,6],
            [1,4,7],
            [2,5,8],
            [0,4,8],
            [2,4,6]
        ];
        for(let combinations of winningCombinations)
        {
            const [a,b,c] = combinations;
            if(this.board[a] && (this.board[a] === this.board[b] && this.board[b] === this.board[c]))
            {
                return combinations;
            }
        }
        return null;
    }

    endOfGame()
    {
        let winningCombination = this.findWinningCombinations();
        if(winningCombination)
        {
            return true;
        }
        else return false;
    }
}