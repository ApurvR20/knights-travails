const gameboard = (row, col) => {

    const board = [];
    for (let i = 0; i < 8; i++) {
        board[i] = [];
        for (let j = 0; j < 8; j++) {
          board[i][j] = [];
        }
    }

    board[row][col].push([row,col]);

    return board;

}

const getPossibleChildren = ([row,col]) => ([
    [row+2,col+1],
    [row+2,col-1],
    [row-2,col+1],
    [row-2,col-1],
    [row+1,col+2],
    [row+1,col-2],
    [row-1,col+2],
    [row-1,col-2]
]);

const knightMoves = ([srow, scol], [erow, ecol]) => {

    const board = [...gameboard(srow,scol)];
    const queue = [];
    queue.push([srow,scol]);

    while(queue[0] && !(queue[0][0] === erow && queue[0][1] === ecol))
    {
        const front  = queue[0];
        const possibleChildren = getPossibleChildren(queue[0]);

        for (const [row,col] of possibleChildren)
        {
            if(row > -1 && row < 8 && col > -1 && col < 8 && board[row][col].length === 0)
            {
                queue.push([row,col]);
                board[row][col].push(...board[front[0]][front[1]]);
                board[row][col].push([row,col]);
                if(row === erow && col === ecol)
                {
                    console.log(board[erow][ecol]);
                    break;
                }
            }
        }

        queue.shift();
    }
}


knightMoves([3,3],[4,3]);

