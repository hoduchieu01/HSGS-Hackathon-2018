"use strict";
Object.defineProperty(exports, "__esModule", { value: true });

const BigBoard = 
{
	/**
	* Initialize the default properties of the board, including:
	- PlayBoard : the Board players need to fill
	- CurrMod : the current skin.
	- TargBoard : The solution generated by computer
	- BoolBoard : To see if the pipes are leaked or not
	- MoveBoard : A Array full of the nex move of the 16 possible pieces
	*/
	default(props) 
	{
		let MoveBoard = [0,2,4,6,8,10,12,14,1,3,5,7,9,11,13,15];
		let PlayBoard = new Array();
		let TargBoard = new Array();
		let BoolBoard = new Array();
		let CurrMod = 0;
		function spin(x, y)
		{
			let p = x;
			for(let i = 0; i < y ; i ++)
			{
				p = MoveBoard[p];
			}
			return p;
		}
		let N = props.N;
		let M = props.M;
		for(let  i = 0; i < N ; i++)
		{
			PlayBoard[i] = new Array();
			TargBoard[i] = new Array();
			BoolBoard[i] = new Array();
			for(let j = 0; j < M; j++)
			{
				PlayBoard[i][j] = 0;
				TargBoard[i][j] = 0;
				BoolBoard[i][j] = 0;
			}
		}
		let Rand = new Array();
		let dem = 0;
		for(let i = 0; i < N; i++)
		{
			for(let j = 0; j < M; j++)
			{
				if(i < N - 1) {
					Rand[dem] = [i,j,i+1,j];
					dem++;
				}
				if(j < M - 1) {
					Rand[dem] = [i,j,i,j+1];
					dem++;
				}
			}
		}
		let K = Rand.length;
		let Hint = (K) / 2;
		//Random shuffle the edges. Pick ${Hint} first edges.
		for(let i = 0; i < K; i++)
		{
			let ind = Math.floor(Math.random()*i);
			let TrungGian = Rand[i];
			Rand[i] = Rand[ind];
			Rand[ind] = TrungGian;
		}
		for(let i = 0; i < Hint; i++)
		{
			if(Rand[i][0] == Rand[i][2])
			{
				let x = Rand[i][0];
				let y = Rand[i][1];
				TargBoard[x][y] = TargBoard[x][y] + 2;
				TargBoard[x][y + 1] = TargBoard[x][y + 1] + 8;
			}
			else
			{
				let x = Rand[i][0];
				let y = Rand[i][1];
				TargBoard[x][y] = TargBoard[x][y] + 4;
				TargBoard[x + 1][y] = TargBoard[x + 1][y] + 1;
			}
		}
		for(let i = 0; i < N; i++)
		{
			for(let j = 0 ;j < M ; j++)
			{
				PlayBoard[i][j] = spin(TargBoard[i][j], Math.floor(Math.random() * 3) + 1);
			}
		}
		// Check if the pipes are leaked
		for(let i = 0; i < N; i++)
			{
				for(let j = 0; j < M; j++)
				{
					if(i == 0)
					{
						if((PlayBoard[i][j] & 1) != 0 ) BoolBoard[i][j] = 1;
					}
					if(i == N - 1)
					{
						if((PlayBoard[i][j] & 4) != 0 ) BoolBoard[i][j] = 1;
					}
					if(j == 0)
					{
						if((PlayBoard[i][j] & 8) != 0 ) BoolBoard[i][j] = 1;
					}
					if(j == M - 1)
					{
						if((PlayBoard[i][j] & 2) != 0 ) BoolBoard[i][j] = 1;
					}
					if(i < N - 1) {
						if ((PlayBoard[i][j] & 4) != 0 && (PlayBoard[i+1][j] & 1) == 0 ) BoolBoard[i][j] = 1;
						if ((PlayBoard[i][j] & 4) == 0 && (PlayBoard[i+1][j] & 1) != 0 ) BoolBoard[i+1][j] = 1;
					}
					if(j < M - 1) {
						if((PlayBoard[i][j] & 2) != 0 && (PlayBoard[i][j+1] & 8) == 0 ) BoolBoard[i][j] = 1;
						if((PlayBoard[i][j] & 2) == 0 && (PlayBoard[i][j+1] & 8) != 0 ) BoolBoard[i][j+1] = 1;
					}
				}
			}
		return { MoveBoard, PlayBoard ,BoolBoard, TargBoard, CurrMod};
	},

	actions: 
	{
		async move(state, {x , y}) 
		{
			let PlayBoard = state.PlayBoard;
			let MoveBoard = state.MoveBoard;
			let BoolBoard = state.BoolBoard;
			let TargBoard = state.TargBoard;
			let CurrMod = state.CurrMod;
			let N = PlayBoard.length;
			let M = PlayBoard[0].length;
			if(x < 0 || y < 0 || x >= N || y >= M)
			{
				throw new Error("You spin, spin me right round baby right round");
			}
			let Nex = MoveBoard[PlayBoard[x][y]];
			PlayBoard[x][y] = Nex;
			for(let i = 0; i < N; i++)
			{
				for(let j = 0; j < M; j++)
				{
					BoolBoard[i][j] = 0;
				}
			}
			for(let i = 0; i < N; i++)
			{
				for(let j = 0; j < M; j++)
				{
					if(i == 0)
					{
						if((PlayBoard[i][j] & 1) != 0 ) BoolBoard[i][j] = 1;
					}
					if(i == N - 1)
					{
						if((PlayBoard[i][j] & 4) != 0 ) BoolBoard[i][j] = 1;
					}
					if(j == 0)
					{
						if((PlayBoard[i][j] & 8) != 0 ) BoolBoard[i][j] = 1;
					}
					if(j == M - 1)
					{
						if((PlayBoard[i][j] & 2) != 0 ) BoolBoard[i][j] = 1;
					}
					if(i < N - 1) {
						if ((PlayBoard[i][j] & 4) != 0 && (PlayBoard[i+1][j] & 1) == 0 ) BoolBoard[i][j] = 1;
						if ((PlayBoard[i][j] & 4) == 0 && (PlayBoard[i+1][j] & 1) != 0 ) BoolBoard[i+1][j] = 1;
					}
					if(j < M - 1) {
						if((PlayBoard[i][j] & 2) != 0 && (PlayBoard[i][j+1] & 8) == 0 ) BoolBoard[i][j] = 1;
						if((PlayBoard[i][j] & 2) == 0 && (PlayBoard[i][j+1] & 8) != 0 ) BoolBoard[i][j+1] = 1;
					}
				}
			}
			return {MoveBoard,PlayBoard,BoolBoard,TargBoard, CurrMod};
		},
		async changeMod(state)
		{
			//Change the skins
			let PlayBoard = state.PlayBoard;
			let MoveBoard = state.MoveBoard;
			let BoolBoard = state.BoolBoard;
			let TargBoard = state.TargBoard;
			let CurrMod = state.CurrMod;
			CurrMod = 1 - CurrMod;
			return {MoveBoard,PlayBoard,BoolBoard,TargBoard, CurrMod};
		},
		async ShowSol(state)
		{
			// Giving up on life? Show the solution right away
			let PlayBoard = state.PlayBoard;
			let MoveBoard = state.MoveBoard;
			let BoolBoard = state.BoolBoard;
			let TargBoard = state.TargBoard;
			let CurrMod = state.CurrMod;
			let N = PlayBoard.length;
			let M = PlayBoard[0].length;
			for(let i = 0; i < N ;i++)
			{
				for(let  j = 0; j < M; j++)
				{
					PlayBoard[i][j] = TargBoard[i][j];
					BoolBoard[i][j] = 0;
				}
			}
			return {MoveBoard,PlayBoard,BoolBoard,TargBoard, CurrMod};
		},
		async NewGame(state)
		{
			// just generate a new game
			let PlayBoard = state.PlayBoard.map(v => v.slice());
			let MoveBoard = state.MoveBoard.slice();
			let BoolBoard = state.BoolBoard.map(v => v.slice());
			let TargBoard = state.TargBoard.map(v => v.slice());
			let CurrMod = state.CurrMod;
			let N = state.PlayBoard.length;
			let M = state.PlayBoard[0].length;
			for(let  i = 0; i < N ; i++)
			{
				for(let j = 0; j < M; j++)
				{
					PlayBoard[i][j] = 0;
					TargBoard[i][j] = 0;
					BoolBoard[i][j] = 0;
				}
			}
			let Rand = new Array();
			for(let i = 0; i < N; i++)
			{
				for(let j = 0; j < M; j++)
				{
					if(i < N - 1) {
						Rand.push([i,j,i+1,j]);
					}
					if(j < M - 1) {
						Rand.push([i,j,i,j+1]);
					}
				}
			}
			let K = Rand.length;
			let Hint = (K) / 2;
			//Random shuffle the edges. Pick ${Hint} first edges.
			for(let i = 0; i < K; i++)
			{
				let ind = Math.floor(Math.random()*i);
				let TrungGian = Rand[i];
				Rand[i] = Rand[ind];
				Rand[ind] = TrungGian;
			}
			for(let i = 0; i < Hint; i++)
			{
				if(Rand[i][0] == Rand[i][2])
				{
					let x = Rand[i][0];
					let y = Rand[i][1];
					TargBoard[x][y] = TargBoard[x][y] + 2;
					TargBoard[x][y + 1] = TargBoard[x][y + 1] + 8;
				}
				else
				{
					let x = Rand[i][0];
					let y = Rand[i][1];
					TargBoard[x][y] = TargBoard[x][y] + 4;
					TargBoard[x + 1][y] = TargBoard[x + 1][y] + 1;
				}
			}
			for(let i = 0; i < N; i++)
			{
				for(let j = 0 ;j < M ; j++)
				{
					//spin the Board randomly
					let k = Math.floor(Math.random() * 3) + 1;
					PlayBoard[i][j] = TargBoard[i][j];
					for(let p = 0; p < k; p++)
					{
							PlayBoard[i][j] = MoveBoard[PlayBoard[i][j]];
					}
				}
			}
			// Check if the pipes are leaked
			for(let i = 0; i < N; i++)
			{
				for(let j = 0; j < M; j++)
				{
					if(i == 0)
					{
						if((PlayBoard[i][j] & 1) != 0 ) BoolBoard[i][j] = 1;
					}
					if(i == N - 1)
					{
						if((PlayBoard[i][j] & 4) != 0 ) BoolBoard[i][j] = 1;
					}
					if(j == 0)
					{
						if((PlayBoard[i][j] & 8) != 0 ) BoolBoard[i][j] = 1;
					}
					if(j == M - 1)
					{
						if((PlayBoard[i][j] & 2) != 0 ) BoolBoard[i][j] = 1;
					}
					if(i < N - 1) {
						if ((PlayBoard[i][j] & 4) != 0 && (PlayBoard[i+1][j] & 1) == 0 ) BoolBoard[i][j] = 1;
						if ((PlayBoard[i][j] & 4) == 0 && (PlayBoard[i+1][j] & 1) != 0 ) BoolBoard[i+1][j] = 1;
					}
					if(j < M - 1) {
						if((PlayBoard[i][j] & 2) != 0 && (PlayBoard[i][j+1] & 8) == 0 ) BoolBoard[i][j] = 1;
						if((PlayBoard[i][j] & 2) == 0 && (PlayBoard[i][j+1] & 8) != 0 ) BoolBoard[i][j+1] = 1;
					}
				}
			}
			return {MoveBoard,PlayBoard,BoolBoard,TargBoard, CurrMod};
		}
	},

	isValid(state) {
		// The board will always be valid.
		// Yeah.
		// If not then f*ck
		return true;
	},

	isEnding(state) 
	{
		let PlayBoard = state.PlayBoard;
		let BoolBoard = state.BoolBoard;
		let MoveBoard = state.MoveBoard;
		let N = PlayBoard.length;
		let M = PlayBoard[0].length;
		for(let i = 0; i < N; i++)
		{
			for(let j = 0; j < M; j++)
			{
				if(BoolBoard[i][j] == 1) return null;
			}
		}
		return "won";
	}
};
exports.default = BigBoard;
