import React from "react";
import BigBoard from "./lib/PlusPlus.js";

import "./index.less";

class BigBoardBuddy extends React.Component
{
	constructor(props) {
		super(props);
		let N = this.props.state.PlayBoard.length;
		this.state = {value : Array(N).fill(Array(N).fill(null))};
		this.handleChange = this.handleChange.bind(this);
	}

	async setStateAsync(state)
	{
		return new Promise(resolve => this.setState(state, resolve));
	}

	async handleChange(event)
	{
		let value = event.target.value;
		let name = event.target.name;
		let arr = new Array();
		//let yy = event.target.yy;
		//alert(name);
		//arr[xx][yy] = value;
		let N = this.state.value.length;
		let xx = Math.floor(name / N);
		let yy = name % N;
		for(let i = 0; i < N ; i++)
		{
			arr[i] = new Array();
			for(let j = 0; j < N; j++)
			{
				if(i == xx && j == yy)
				{
					arr[i][j] = value;
				}
				else arr[i][j] = this.state.value[i][j];
			}
		}
		await this.setStateAsync({ value: arr });
		this.props.move({f : this.state.value});
	}

	render()
	{
		let board = [];
		let N = this.props.state.PlayBoard.length;
		for(let i = 0; i < N; i++)
		{
			// Making every row here
			// 4 state of a Cell :
			// - A hint for everyone to see (cell readi)
			// - It doesn't have anything in it (cell glowing)
			// - It doesn't conflict with other cells, but can be wrong (cell normal)
			// - It conflicts with another cell or contains inapropriate content (cell notright)
			const r = [];
			for(let j = 0; j < N; j++)
			{
				if(this.props.state.BoolBoard[i][j] == 1)
				{
					r.push(
					<td>
					<div className = "cell readi">{this.props.state.PlayBoard[i][j]}</div>
					</td>);
				}
				else if(this.state.value[i][j] == null)
				{
					r.push(
					<td>
						<input className = "cell glowing"
						type = "text"
						value = {this.state.value[i][j]}
						name = {i * N + j}
						onChange = {this.handleChange}
						/>
					</td>
					);
				}
				else if(this.props.state.GlowBoard[i][j] == 1)
				{
					r.push(
					<td>
						<input className = "cell notright"
						type = "text"
						value = {this.state.value[i][j]}
						name = {i * N + j}
						onChange = {this.handleChange}
						/>
					</td>
					);
				}
				else
				{
					r.push(
					<td>
						<input className = "cell normal"
						type = "text"
						value = {this.state.value[i][j]}
						name = {i * N + j}
						onChange = {this.handleChange}
						/>
					</td>
					);
				}
			}
			// Here you put the sum of rows
			if(this.props.state.SumRow[i] == this.props.state.SumRow1[i]) {
			r.push(
			<td>
			<div className = "sumo right">{this.props.state.SumRow[i]}</div>
			</td>);
			}
			else {
			r.push(
			<td>
			<div className = "sumo wrong">{this.props.state.SumRow[i]}</div>
			</td>);
			}
			board.push(
			<tr>
			{r}
			</tr>
			);
		}

		const ar0 = [];
		//Here you put the sums of columns
		for(let i = 0 ; i < N ; i++)
		{
			if(this.props.state.SumCol[i] == this.props.state.SumCol1[i]) {
			ar0.push(
			<td>
			<div className = "sumo right">{this.props.state.SumCol[i]}</div>
			</td>);
			}
			else {
			ar0.push(
			<td>
			<div className = "sumo wrong">{this.props.state.SumCol[i]}</div>
			</td>);
			}
		}
		board.push(
		<tr>
		{ar0}
		</tr>
		);
		let se = new Set();
		for(let i = 0; i < N ; i++)
		{
			for(let j = 0; j < N; j++)
			{
				if((1 <= this.props.state.PlayBoard[i][j]) && (this.props.state.PlayBoard[i][j] <= N * N))
				{
					se.add(this.props.state.PlayBoard[i][j]);
				}
			}
		}
		let LeftOver = "Bạn chưa dùng những số này: ";
		for(let i = 1; i <= N*N ;i++)
		{
			if(se.has(i)) ; else LeftOver = LeftOver + i + " ";
		}
		const Leftovers = [];
		if(this.props.isEnding == null)
		{
			if(se.size == N * N) Leftovers.push(
			<div className = "left">Bạn đã dùng hết tất cả các số! Hãy kiểm tra lại các tính toán của bạn!</div>
			);
			else Leftovers.push(
			<div className = "left">{LeftOver}</div>
			);
		}
		
		const Mess = [];
		if(this.props.isEnding == "won") Mess.push(
		<div className = "winning">
		Xin chúc mừng! Bạn có tiềm năng chinh phục đỉnh cao của thế giới game!
		</div>
		);
		else Mess.push(
		<div className = "notyet">
		Hãy điền các số vào ô yêu cầu!
		</div>
		);
		return (
		<div class = "n38">
		<table>
		{board}
		</table>
		{/*
			<pre>{JSON.stringify(this.props)}</pre>
			<pre>{JSON.stringify(this.state)}</pre>
	*/}
		{Leftovers}
		{Mess}
		
		</div>
		);
	}
}

export default BigBoardBuddy;
