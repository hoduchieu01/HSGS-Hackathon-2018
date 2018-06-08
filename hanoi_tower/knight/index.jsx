import React from "react";
import Knight from "./lib/knight.js";

import "./index.css";

class Chess extends React.Component
{
	render()
	{
		// Calculate the value of N and M
		const N = this.props.state.Board.length;
		const M = this.props.state.Board[0].length;
		//console.log(K);
		const moves = [];
		for (let i = 0; i < N; i++)
		{
			const arr = [];
			for(let j = 0; j < M; j++)
			{
				switch(this.props.state.Board[i][j])
				{
					case 0:
						arr.push(<button0 onClick={() => this.props.move({ x: i , y: j } )}>&#9822;</button0>);
						break;
					case 1:
						arr.push(<button1 onClick={() => this.props.move({ x: i , y: j } )}>&#9816;</button1>);
						break;
					case 2:
						arr.push(<button2 onClick={() => this.props.move({ x: i , y: j } )}>&#9822;</button2>);
						break;
					case 3:
						arr.push(<button3 onClick={() => this.props.move({ x: i , y: j } )}>&#9822;</button3>);
						break;
					default :
						;
				}
			}
			moves.push(
			<div>
				{arr}
			</div>);
		}
		const err = this.props.error ? this.props.error.message : null;
		return (
		<div>
			{moves}
			<pre>{JSON.stringify(this.props)}</pre>
			<pre>{JSON.stringify(err)}</pre>
		</div>
		);
	}
}

export default Chess;
