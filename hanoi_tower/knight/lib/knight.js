"use strict";
Object.defineProperty(exports, "__esModule", { value: true });

const Knight = 
{
	/**
	* Initialize the default properties of the board, including:
	* - Number of Rows and Columns
	* - The initial state of the Board
	*/
	default(props = { row: 3, col: 4 }) 
	{
		var Board = new Array();
		for (let i = 0 ; i < props.row; i++) 
		{
			Board[i] = new Array();
			for(let j = 0; j < props.col; j++)
			{
				Board[i][j] = 0;
			}
		}
		return { Board };
	},

	actions: 
	{
		async move(state, { x, y }) 
		{
			// Check if will be in the board after the move in the board
			if ((x < 0) || (2 < x) || (y < 0) || (3 < y)) 
			{
				throw new Error("Your Knight is going outside the Board, sir!");
			}
			// Locate the Knight
			var p = -1, q = -1;
			for(let i = 0; i < Board.length; i++)
			{
				for(let j = 0; j < Board[i].lenght; j++)
				{
					if(Board[i][j] === 1) 
					{
						// Check if there is multiple Knights on the Board. Plz for fuck sake.
						if(p !== -1 || q !== -1)
						{
							throw new Error("There are too many Knights on the Board, sir!");
						}
						else
						{
							p = i;
							q = j;
						}
					}
				}
			}
			// The knight is missing. If I get this state I'm a dumbass
			if(p === -1 && q === -1) throw new Error("Can't find any Knights on the Board, sir!");
			if(Board[x][y] === 2)
			{
				// The move is lit
				Board[x][y] === 1;
				Board[p][q] === 3;
				for(let i = 0; i < Board.length; i++)
				{
					for(let j = 0; j < Board[i].length; j++)
					{
						if(Board[i][j] === 2 || Board[i][j] === 0)
						{
							if((Math.abs(i - x) === 1 && Math.abs(j - x) === 2) || (Math.abs(i - x) === 2 && Math.abs(j - x) === 1))
							{
								Board[i][j] = 2;
							}
							else Board[i][j] = 0;
						}
					}
				}
			}
			else
			{
				// Just print out random errors
				switch(Board[x][y])
				{
					case 1: 
						throw new Error("Please move the Knight, sir!");
						break;
					case 3:
						throw new Error("Your Knight can't go back to a cell you have been to, sir!");
						break;
					case 0:
						throw new Error("You can't move your Knight like that, sir!");
						break;
					default :
						throw new Error("Unknown Error has occurred, sir!");
				}
			}
			return { Board };
		}
	},

	isValid(state) {
		// Check if board is an array of arrays
		const board = state.Board;
		if (!(board instanceof Array)) return false;
		const Boards = [];
		for (const row of board) 
		{
			if (!(row instanceof Array)) return false;
			Boards.push(row);
		}
		// Locate the Knight, again
		var p = -1, q = -1;
		for(let i = 0; i < Boards.length; i++)
		{
			for(let j = 0; j < Boards[i].length; j++)
			{
				// Check if there are multiple Knights
				if(p !== -1 || q !== -1) return false;
				else
				{
					p = i;
					q = j;
				}
			}
		}
		// Check for the cases when the Knight can't move to every 2-cell or can move to a 0-cell
		for(let i = 0; i < Boards.length; i++)
		{
			for(let j = 0; j < Boards[i].length; j++)
			{
				if(Boards[i][j] === 2)
				{
					if((Math.abs(i - x) === 1 && Math.abs(j - x) === 2) 
						|| (Math.abs(i - x) === 2 && Math.abs(j - x) === 1)) ; else return false;
				}
				if(Boards[i][j] === 0)
				{
					if((Math.abs(i - x) === 1 && Math.abs(j - x) === 2) 
						|| (Math.abs(i - x) === 2 && Math.abs(j - x) === 1)) return false;
				}
			}
		}
		return true;
	},

	isEnding(state) 
	{
		const Board = state.Board;
		const set = new Set();
		for(let i = 0; i < Board.length; i++)
		{
			for(let j = 0; j < Board[i].length; j++)
			{
				set.add(Board[i][j]);
			}
		}
		// Check is there's still moves left
		if(set.has(2)) return null;
		else
		{
			if(set.has(0)) return "lost"; else return "won";
		}
	}
};
exports.default = Knight;
