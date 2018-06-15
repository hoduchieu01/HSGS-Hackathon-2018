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
		  if(this.props.state.FirstMove == 0)
		  {
        switch (this.props.state.Board[i][j]) {
          case 0:
            arr.push(
			<td>
              <button
                className="button button0"
                onClick={() => this.props.move({ x: i, y: j })}
              >
              </button>
			  </td>
            );
            break;
          case 1:
            arr.push(
			<td>
              <button
                className="button button1"
                onClick={() => this.props.move({ x: i, y: j })}
              >
                &#9816;
              </button>
			  </td>
            );
            break;
          case 2:
            arr.push(
			<td>
              <button
                className="button button2"
                onClick={() => this.props.move({ x: i, y: j })}
              >
              </button>
			  </td>
            );
            break;
          case 3:
            arr.push(
			<td>
              <button
                className="button button3"
                onClick={() => this.props.move({ x: i, y: j })}
              >
              </button>
			  </td>
            );
            break;
          default:
        }
      }
	  else
	  {
            arr.push(
			<td>
              <button
                className="button button5"
                onClick={() => this.props.start({ x: i, y: j })}
              >
              </button>
			  </td>
            );

	  }
	  }

      moves.push(<tr>{arr}</tr>);
    }
    let err = this.props.error
      ? this.props.error.message
      : this.props.state.FirstMove ? "Chọn vị trí xuất phát của con mã" : "Bạn hãy di chuyển con mã";
    if (this.props.isEnding !== null) {
      err =
        this.props.isEnding === "won"
          ? "Chúc mừng bạn chiến thắng!"
          : "Con mã của bạn không thể di chuyển nữa!";
    }
    return (
      <div class="s17">
	  <table>
        {moves}
		</table>
        <br />
        <br />
        <button className="undobutt" onClick={() => this.props.undo()}>
          Quay lại
        </button>
        <button className="restartbutt" onClick={() => this.props.reset()}>
          Game mới
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
