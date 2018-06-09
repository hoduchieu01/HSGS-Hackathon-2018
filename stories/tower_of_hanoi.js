import React from "react";
import { storiesOf } from "@storybook/react";
import Board from "../example/index.jsx";
import Game from "../example/lib/tower_of_hanoi.js";
import ReactGame from "react-gameboard/lib/component";

const TOH = ReactGame(Game);

storiesOf("Tower of Hanoi", module)
  .add("with default props", () => (
    <TOH height={4}>
      <Board />
    </TOH>
  ))
  .add("with size 9", () => (
    <TOH height={9}>
      <Board />
    </TOH>
  ));
