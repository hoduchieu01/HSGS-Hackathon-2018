import React from "react";
import BigBoard from "./lib/Plumber.js";

import "./index.less";

class BigBoardBuddy extends React.Component 
{	
	render() 
	{
		let err = this.props.error
      ? this.props.error.message
      : "Giải câu đố thôi nào";
    if (this.props.isEnding !== null) {
      err = "Chúc mừng bạn đã thắng!!!"
    }
	
	// Ok, Let's be real here. 
	// I spent 3 hours trying to shorten this code. I'm alway
	// stuck on the same problem where I can insert anything inside src = "..." or even style = {}
	// It always return error 404 using inspect modes
	// After considering all the options, I decide to do this manually
	// Minh Tam : 83
		let board = [];
		let N = this.props.state.PlayBoard.length;
		let M = this.props.state.PlayBoard[0].length;
		for(let i = 0; i < N ; i++)
		{
			for(let j = 0; j < M ; j++)
			{
				if(this.props.state.CurrMod == 0)
				{
				if(this.props.state.BoolBoard[i][j] == 0) {
				switch(this.props.state.PlayBoard[i][j])
				{
					case 0 : 
						board.push(
							<button className = "button button0-1" onClick={() => this.props.move({x : i, y : j})}>
							</button>
						);
						break;
					case 1 :
						board.push(
							<button className = "button button1-1" onClick={() => this.props.move({x : i, y : j})}>
							</button>
						);
						break;
					case 2 : 
						board.push(
							<button className = "button button2-1" onClick={() => this.props.move({x : i, y : j})}>
							</button>
						);
						break;
					case 3 : 
						board.push(
							<button className = "button button3-1" onClick={() => this.props.move({x : i, y : j})}>
							</button>
						);
						break;
					case 4 : 
						board.push(
							<button className = "button button4-1" onClick={() => this.props.move({x : i, y : j})}>
							</button>
						);
						break;
					case 5 : 
						board.push(
							<button className = "button button5-1" onClick={() => this.props.move({x : i, y : j})}>
							</button>
						);
						break;
					case 6 : 
						board.push(
							<button className = "button button6-1" onClick={() => this.props.move({x : i, y : j})}>
							</button>
						);
						break;
					case 7 : 
						board.push(
							<button className = "button button7-1" onClick={() => this.props.move({x : i, y : j})}>
							</button>
						);
						break;
					case 8 : 
						board.push(
							<button className = "button button8-1" onClick={() => this.props.move({x : i, y : j})}>
							</button>
						);
						break;
					case 9 : 
						board.push(
							<button className = "button button9-1" onClick={() => this.props.move({x : i, y : j})}>
							</button>
						);
						break;
					case 10 : 
						board.push(
							<button className = "button button10-1" onClick={() => this.props.move({x : i, y : j})}>
							</button>
						);
						break;
					case 11 : 
						board.push(
							<button className = "button button11-1" onClick={() => this.props.move({x : i, y : j})}>
							</button>
						);
						break;
					case 12 : 
						board.push(
							<button className = "button button12-1" onClick={() => this.props.move({x : i, y : j})}>
							</button>
						);
						break;
					case 13 : 
						board.push(
							<button className = "button button13-1" onClick={() => this.props.move({x : i, y : j})}>
							</button>
						);
						break;
					case 14 : 
						board.push(
							<button className = "button button14-1" onClick={() => this.props.move({x : i, y : j})}>
							</button>
						);
						break;
					case 15 : 
						board.push(
							<button className = "button button15-1" onClick={() => this.props.move({x : i, y : j})}>
							</button>
						);
						break;
					default :
						;
				}
				} else {
				switch(this.props.state.PlayBoard[i][j])
				{
					case 0 : 
						board.push(
							<button className = "button button0-2" onClick={() => this.props.move({x : i, y : j})}>
							</button>
						);
						break;
					case 1 :
						board.push(
							<button className = "button button1-2" onClick={() => this.props.move({x : i, y : j})}>
							</button>
						);
						break;
					case 2 : 
						board.push(
							<button className = "button button2-2" onClick={() => this.props.move({x : i, y : j})}>
							</button>
						);
						break;
					case 3 : 
						board.push(
							<button className = "button button3-2" onClick={() => this.props.move({x : i, y : j})}>
							</button>
						);
						break;
					case 4 : 
						board.push(
							<button className = "button button4-2" onClick={() => this.props.move({x : i, y : j})}>
							</button>
						);
						break;
					case 5 : 
						board.push(
							<button className = "button button5-2" onClick={() => this.props.move({x : i, y : j})}>
							</button>
						);
						break;
					case 6 : 
						board.push(
							<button className = "button button6-2" onClick={() => this.props.move({x : i, y : j})}>
							</button>
						);
						break;
					case 7 : 
						board.push(
							<button className = "button button7-2" onClick={() => this.props.move({x : i, y : j})}>
							</button>
						);
						break;
					case 8 : 
						board.push(
							<button className = "button button8-2" onClick={() => this.props.move({x : i, y : j})}>
							</button>
						);
						break;
					case 9 : 
						board.push(
							<button className = "button button9-2" onClick={() => this.props.move({x : i, y : j})}>
							</button>
						);
						break;
					case 10 : 
						board.push(
							<button className = "button button10-2" onClick={() => this.props.move({x : i, y : j})}>
							</button>
						);
						break;
					case 11 : 
						board.push(
							<button className = "button button11-2" onClick={() => this.props.move({x : i, y : j})}>
							</button>
						);
						break;
					case 12 : 
						board.push(
							<button className = "button button12-2" onClick={() => this.props.move({x : i, y : j})}>
							</button>
						);
						break;
					case 13 : 
						board.push(
							<button className = "button button13-2" onClick={() => this.props.move({x : i, y : j})}>
							</button>
						);
						break;
					case 14 : 
						board.push(
							<button className = "button button14-2" onClick={() => this.props.move({x : i, y : j})}>
							</button>
						);
						break;
					case 15 : 
						board.push(
							<button className = "button button15-2" onClick={() => this.props.move({x : i, y : j})}>
							</button>
						);
						break;
					default :
						;
				}
				}
				}
				else
				{
				if(this.props.state.BoolBoard[i][j] == 0) {
				switch(this.props.state.PlayBoard[i][j])
				{
					case 0 : 
						board.push(
							<button className = "button button0-3" onClick={() => this.props.move({x : i, y : j})}>
							</button>
						);
						break;
					case 1 :
						board.push(
							<button className = "button button1-3" onClick={() => this.props.move({x : i, y : j})}>
							</button>
						);
						break;
					case 2 : 
						board.push(
							<button className = "button button2-3" onClick={() => this.props.move({x : i, y : j})}>
							</button>
						);
						break;
					case 3 : 
						board.push(
							<button className = "button button3-3" onClick={() => this.props.move({x : i, y : j})}>
							</button>
						);
						break;
					case 4 : 
						board.push(
							<button className = "button button4-3" onClick={() => this.props.move({x : i, y : j})}>
							</button>
						);
						break;
					case 5 : 
						board.push(
							<button className = "button button5-3" onClick={() => this.props.move({x : i, y : j})}>
							</button>
						);
						break;
					case 6 : 
						board.push(
							<button className = "button button6-3" onClick={() => this.props.move({x : i, y : j})}>
							</button>
						);
						break;
					case 7 : 
						board.push(
							<button className = "button button7-3" onClick={() => this.props.move({x : i, y : j})}>
							</button>
						);
						break;
					case 8 : 
						board.push(
							<button className = "button button8-3" onClick={() => this.props.move({x : i, y : j})}>
							</button>
						);
						break;
					case 9 : 
						board.push(
							<button className = "button button9-3" onClick={() => this.props.move({x : i, y : j})}>
							</button>
						);
						break;
					case 10 : 
						board.push(
							<button className = "button button10-3" onClick={() => this.props.move({x : i, y : j})}>
							</button>
						);
						break;
					case 11 : 
						board.push(
							<button className = "button button11-3" onClick={() => this.props.move({x : i, y : j})}>
							</button>
						);
						break;
					case 12 : 
						board.push(
							<button className = "button button12-3" onClick={() => this.props.move({x : i, y : j})}>
							</button>
						);
						break;
					case 13 : 
						board.push(
							<button className = "button button13-3" onClick={() => this.props.move({x : i, y : j})}>
							</button>
						);
						break;
					case 14 : 
						board.push(
							<button className = "button button14-3" onClick={() => this.props.move({x : i, y : j})}>
							</button>
						);
						break;
					case 15 : 
						board.push(
							<button className = "button button15-3" onClick={() => this.props.move({x : i, y : j})}>
							</button>
						);
						break;
					default :
						;
				}
				} else {
				switch(this.props.state.PlayBoard[i][j])
				{
					case 0 : 
						board.push(
							<button className = "button button0-4" onClick={() => this.props.move({x : i, y : j})}>
							</button>
						);
						break;
					case 1 :
						board.push(
							<button className = "button button1-4" onClick={() => this.props.move({x : i, y : j})}>
							</button>
						);
						break;
					case 2 : 
						board.push(
							<button className = "button button2-4" onClick={() => this.props.move({x : i, y : j})}>
							</button>
						);
						break;
					case 3 : 
						board.push(
							<button className = "button button3-4" onClick={() => this.props.move({x : i, y : j})}>
							</button>
						);
						break;
					case 4 : 
						board.push(
							<button className = "button button4-4" onClick={() => this.props.move({x : i, y : j})}>
							</button>
						);
						break;
					case 5 : 
						board.push(
							<button className = "button button5-4" onClick={() => this.props.move({x : i, y : j})}>
							</button>
						);
						break;
					case 6 : 
						board.push(
							<button className = "button button6-4" onClick={() => this.props.move({x : i, y : j})}>
							</button>
						);
						break;
					case 7 : 
						board.push(
							<button className = "button button7-4" onClick={() => this.props.move({x : i, y : j})}>
							</button>
						);
						break;
					case 8 : 
						board.push(
							<button className = "button button8-4" onClick={() => this.props.move({x : i, y : j})}>
							</button>
						);
						break;
					case 9 : 
						board.push(
							<button className = "button button9-4" onClick={() => this.props.move({x : i, y : j})}>
							</button>
						);
						break;
					case 10 : 
						board.push(
							<button className = "button button10-4" onClick={() => this.props.move({x : i, y : j})}>
							</button>
						);
						break;
					case 11 : 
						board.push(
							<button className = "button button11-4" onClick={() => this.props.move({x : i, y : j})}>
							</button>
						);
						break;
					case 12 : 
						board.push(
							<button className = "button button12-4" onClick={() => this.props.move({x : i, y : j})}>
							</button>
						);
						break;
					case 13 : 
						board.push(
							<button className = "button button13-4" onClick={() => this.props.move({x : i, y : j})}>
							</button>
						);
						break;
					case 14 : 
						board.push(
							<button className = "button button14-4" onClick={() => this.props.move({x : i, y : j})}>
							</button>
						);
						break;
					case 15 : 
						board.push(
							<button className = "button button15-4" onClick={() => this.props.move({x : i, y : j})}>
							</button>
						);
						break;
					default :
						;
				}
				}	
				}
			}
			board.push(
			<br></br>
			);
		}
		const Butt = [];
		// Will have the button in it if the game has ended
		if(this.props.isEnding == "won")
		{
			Butt.push(
			<button className = "newbutt" onClick={() => this.props.NewGame()}>Làm ván mới?</button>
			);
		}
		return (
		<div class = "s43">
		
		{board}
		<button className = "changebutt" onClick={() => this.props.changeMod()}>
		Thử đường ống khác
		</button>
		<br></br>
		<button className = "solbutt" onClick={() => this.props.ShowSol()}>
		Gợi ý
		</button>
		<br></br>
		{Butt}
		<pre>{JSON.stringify(err)}</pre>
		</div>
		);
	}
}

export default BigBoardBuddy;