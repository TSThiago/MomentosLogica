class Ship{
    position;
}

let board1 = [["X",".",".","X"],
             [".",".",".","X"]
            ,[".",".",".","X"]]

let board2 = [["."]]

console.log(returnShips(board1))

function returnShips(board) {
    let shipsOnBoard = 0
    let arrayShips = []
    board.forEach(line => {
        line.forEach((ship,index) => {
            if(ship === 'X') {
                shipsOnBoard++
                
            }
        })
    });
    return shipsOnBoard
}