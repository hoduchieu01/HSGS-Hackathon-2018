import React from "react";
import Knight from "./lib/knight.js";

import "./index.less";

class Chess extends React.Component {
  render() {
    // Calculate the value of N and M
    const N = this.props.state.Board.length;
    const M = this.props.state.Board[0].length;
    //console.log(K);
    const moves = [];
    for (let i = 0; i < N; i++) {
      const arr = [];
      for (let j = 0; j < M; j++) {
        switch (this.props.state.Board[i][j]) {
          case 0:
            arr.push(
              <button
                className="button button0"
                onClick={() => this.props.move({ x: i, y: j })}
              >
                &#9822;
              </button>
            );
            break;
          case 1:
            arr.push(
              <button
                className="button button1"
                onClick={() => this.props.move({ x: i, y: j })}
              >
                &#9816;
              </button>
            );
            break;
          case 2:
            arr.push(
              <button
                className="button button2"
                onClick={() => this.props.move({ x: i, y: j })}
              >
                &#9822;
              </button>
            );
            break;
          case 3:
            arr.push(
              <button
                className="button button3"
                onClick={() => this.props.move({ x: i, y: j })}
              >
                &#9822;
              </button>
            );
            break;
          default:
        }
      }
      moves.push(<div>{arr}</div>);
    }
    let err = this.props.error
      ? this.props.error.message
      : "Next step, please!";
    if (this.props.isEnding !== null) {
      err =
        this.props.isEnding === "won"
          ? "You won!"
          : "No moves left for ya horse, sir!";
    }
    return (
      <div class="s17">
        {moves}
        <br />
        <br />
        <button className="undobutt" onClick={() => this.props.undo()}>
          Undo
        </button>
        <button className="restartbutt" onClick={() => this.props.reset()}>
          Restart your game
        </button>
        {/*
			<pre>{JSON.stringify(this.props)}</pre>
				*/}
        <pre>{JSON.stringify(err)}</pre>
      </div>
    );
  }
}

export default Chess;
