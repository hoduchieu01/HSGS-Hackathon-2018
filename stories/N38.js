import React from "react";
import { storiesOf } from "@storybook/react";
import BigBoardBuddy from "../src/N38/index.jsx";
import Game from "../src/N38/lib/PlusPlus.js";
import ReactGame from "react-gameboard/lib/component";
import { number, withKnobs } from "@storybook/addon-knobs";
import Guide from "../src/N38/guide.jsx";

const PP = ReactGame(Game);

storiesOf("PlusPlus (N38)", module)
  .addDecorator(withKnobs)
  .add("Hướng dẫn", () => <Guide> </Guide>)
  .add("Dễ", () => (
    <PP N = {3} Hint = {4}>
      <BigBoardBuddy />
    </PP>
  ))
  .add("Bình thường", () => (
    <PP N = {4} Hint = {8}>
      <BigBoardBuddy />
    </PP>
  ))
  .add("Khó", () => (
    <PP N = {5} Hint = {12}>
      <BigBoardBuddy />
    </PP>
  ))
  .add("Vua thời gian", () => (
    <PP N = {8} Hint = {32}>
      <BigBoardBuddy />
    </PP>
  ))
  .add("Tùy chọn", () => {
    const options = {
      range: true,
      step: 1,
      min: 3,
      max: 8
    };
    const n = number("N", 8, options);
    const m = number("Hint", 8, options);
    return (
      <PP N={n} Hint={m}>
        <BigBoardBuddy />
      </PP>
    );
  });
