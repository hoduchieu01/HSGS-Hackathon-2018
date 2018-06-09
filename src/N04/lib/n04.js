"use strict";
Object.defineProperty(exports, "__esModule", { value: true });

const n04 = 
{
	/**
	* Initialize the default properties of the board, including:
	* - Number of Rows and Columns
	* - The initial state of the Board
	*/
	default(props = { n:300,x:5,y:5,z:5 }) 
	{
		const ans = 0;
		const ans1 = 0;
		let n = props.n;
		let x = props.x;
		let y = props.y;
		let z = props.z;
		return {n,x,y,z,ans,ans1};
		/*
		const x = Math.floor((Math.random() * props.row));
		const y = Math.floor((Math.random() * props.col));
		for (let i = 0 ; i < props.row; i++) 
		{
			Board[i] = new Array();
			for(let j = 0; j < props.col; j++)
			{
				if(i === x && j === y) Board[i][j] = 1;
				else if((Math.abs(i - x) === 1 && Math.abs(j - y) === 2) || (Math.abs(i - x) === 2 && Math.abs(j - y) === 1))
				{
					Board[i][j] = 2;
				}
				else Board[i][j] = 0;
			}
		}
		return { Board };
		*/
	}, 
	
	actions: 
	{ 
		async move(state, { a, a1 }) 
		{
			let n = state.n;
			let x = state.x;
			let y = state.y;
			let z = state.z;
			let ans = state.ans;
			let ans1 = state.ans1;
			ans=a;
			ans1=a1;
		}
		//async reset(state) 
		//{
		//}
	},

	isValid(state) {
		// Check if board is an array of arrays
		// const board = state.Board;
		// if (!(board instanceof Array)) return false;
		// const Boards = [];
		// for (const row of board) 
		// {
			// if (!(row instanceof Array)) return false;
			// Boards.push(row);
		// }
		return true;
	},

	isEnding(state) 
	{
		let n = state.n;
		let x = state.x;
		let y = state.y;
		let z = state.z;
		let ans = state.ans;
		let ans1 = state.ans1;

		if(n*x/100*y/100 === ans && n*x/100*z/100 ===ans1) return "won";
		else return null;
		
	}
};
exports.default = n04;
