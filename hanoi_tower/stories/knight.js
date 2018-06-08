import React from "react";
import { storiesOf } from "@storybook/react";
import Chess from "../knight/index.jsx";
import Game from "../knight/lib/knight.js";
import ReactGame from "react-gameboard/lib/component";

const KN = ReactGame(Game);

storiesOf("Knight", module)
  .add("with default props", () => (
    <KN row={3} col={4}>
      <Chess/>
    </KN>
  ))
  .add("with real life chess board", () => (
    <KN row={8} col={8}>
      <Chess/>
    </KN>
  ));
