"use strict";
Object.defineProperty(exports, "__esModule", { value: true });

const BigBoard = 
{
	/**
	* Initialize the default properties of the board, including:
	- playBoard : the Board players need to fill
	- GlowBoard : Check if the cell should be glowing or not
	*/
	default(props) 
	{
		let PlayBoard = new Array();// Player's Board. 
		let GlowBoard = new Array();// The board to present if it's wrong or not
		let BoolBoard = new Array();// Check if that place should be alter or not
		let Target = new Array();// The beginning random-generated Board
		let SumCol = new Array();
		let SumRow = new Array(); // The sums of Target
		let SumCol1 = new Array();
		let SumRow1 = new Array() // The sums of PlayBoard
		let N = props.N;
		let Hint = props.Hint;
		for(let i = 0; i < N ; i++)
		{
			Target[i] = new Array();
			BoolBoard[i] = new Array();
			PlayBoard[i] = new Array();
			GlowBoard[i] = new Array();
			for(let j = 0; j < N; j++)
			{
				Target[i][j] = i * N + j + 1;
				BoolBoard[i][j] = 0;
				PlayBoard[i][j] = 0;
				GlowBoard[i][j] = 0;
			}
		}
		while(Hint > 0)
		{
			let val = Math.floor(Math.random() * N * N);
			let x = Math.floor(val / N);
			let y = val % N;
			if(BoolBoard[x][y] == 0) 
			{
				Hint-- ;
				BoolBoard[x][y] = 1;
			}
		}
		for(let i = 0; i < N * N; i++)
		{
			let K = Math.floor(Math.random()*N*N);
			let TrungGian;
			TrungGian = Target[Math.floor(K / N)][K % N];
			Target[Math.floor(K / N)][K % N] = Target[Math.floor(i / N)][i % N];
			Target[Math.floor(i / N)][i % N] = TrungGian;
		}
		for(let i = 0; i < N; i++)
		{
			for(let j = 0; j < N; j++)
			{
				if(BoolBoard[i][j] == 1) PlayBoard[i][j] = Target[i][j]; 
				else 
				{
					PlayBoard[i][j] = 0;
					GlowBoard[i][j] = 1;
				}
			}
		}
		for(let i = 0; i < N; i++)
		{
			let su = 0;
			let su1 = 0;
			let su2 = 0;
			let su3 = 0;
			for(let j = 0; j < N ; j++)
			{
				su = su + Target[i][j];
				su1 = su1 + Target[j][i];
				su2 = su2 + PlayBoard[i][j];
				su3 = su3 + PlayBoard[j][i];
			}
			SumRow[i] = su;
			SumCol[i] = su1;
			SumRow1[i] = su2;
			SumCol1[i] = su3;
		}
		return { PlayBoard, GlowBoard, BoolBoard,  SumCol, SumRow, SumCol1,SumRow1 };
	},

	actions: 
	{
		async move(state, {f}) 
		{
			let PlayBoard = state.PlayBoard;
			let GlowBoard = state.GlowBoard;
			let BoolBoard = state.BoolBoard;
			let se = new Set();
			let Dup = new Set();
			let N = PlayBoard.length;
			let SumRow = state.SumRow;
			let SumCol = state.SumCol;
			let SumRow1 = state.SumRow1;
			let SumCol1 = state.SumCol1;
			for(let i = 0;i < N; i++)
			{
				for(let j = 0; j < N; j++)
				{
					GlowBoard[i][j] = 0;
				}
			}
			for(let i = 0;i < N; i++)
			{
				for(let j = 0; j < N; j++)
				{
					if(isNaN(parseInt(f[i][j]))) {
						if(BoolBoard[i][j] == 0)
						{
							PlayBoard[i][j] = 0;
							GlowBoard[i][j] = 1;
						}
						else
						{
							PlayBoard[i][j] = PlayBoard[i][j];
						}
					}
					else PlayBoard[i][j] = parseInt(f[i][j],10);
				}
			}
			for(let i = 0; i < N; i++)
			{
				for(let j = 0; j < N; j++)
				{
					if(PlayBoard[i][j] <= 0 || PlayBoard[i][j] > N * N)  GlowBoard[i][j] = 1;
					else
					{
						if(se.has(PlayBoard[i][j])) Dup.add(PlayBoard[i][j]);
						else se.add(PlayBoard[i][j]);
					}
				}
			}
			for(let i = 0;i < N; i++)
			{
				for(let j = 0; j < N; j++)
				{
					if(GlowBoard[i][j] == 0)
					{
						if(Dup.has(PlayBoard[i][j])) GlowBoard[i][j] = 1;
					}
				}
			}
			for(let i = 0; i < N; i++)
			{
				
				let su2 = 0;
				let su3 = 0;
				for(let j = 0; j < N ; j++)
				{
					
					su2 = su2 + PlayBoard[i][j];
					su3 = su3 + PlayBoard[j][i];
				}
				SumRow1[i] = su2;
				SumCol1[i] = su3;
			}
			return { PlayBoard, GlowBoard ,BoolBoard, SumCol,SumRow, SumCol1, SumRow1};
		},
	},

	isValid(state) {
		// The board will always be valid.
		return true;
	},

	isEnding(state) 
	{
		//let PlayBoard = state.PlayBoard;
		let SumRow = state.SumRow;
		let SumCol = state.SumCol;
		let SumRow1 = state.SumRow1;
		let SumCol1 = state.SumCol1;
		let N = SumRow.length;
		for(let i = 0; i < N; i++)
		{
			if(SumRow[i] != SumRow1[i]) return null;
			if(SumCol[i] != SumCol1[i]) return null;
		}
		return "won";
	}
};
exports.default = BigBoard;
