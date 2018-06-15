import React from "react";
import { storiesOf } from "@storybook/react";
import Pipe from "../src/S43/index.jsx";
import Game from "../src/S43/lib/Plumber.js";
import ReactGame from "react-gameboard/lib/component";
import { number, withKnobs } from "@storybook/addon-knobs";
import Guide from "../src/S43/guide.jsx";

const Plumber = ReactGame(Game);

storiesOf("Plumber (S43)", module)
  .addDecorator(withKnobs)
  .add("Hướng dẫn", () => <Guide> </Guide>)
  .add("Dễ", () => (
    <Plumber N = {3} M = {3}>
      <Pipe />
    </Plumber>
  ))
  .add("Trung bình", () => (
    <Plumber N = {5} M = {7}>
      <Pipe />
    </Plumber>
  ))
  .add("Khó", () => (
    <Plumber N = {7} M = {9}>
      <Pipe />
    </Plumber>
  ))
  .add("Vua Thời Gian", () => (
    <Plumber N = {8} M = {10}>
      <Pipe />
    </Plumber>
  ))
  .add("Tùy chọn", () => {
    const options = {
      range: true,
      step: 1,
      min: 3,
      max: 10
    };
    const n = number("Số hàng", 4, options);
    const m = number("Số cột", 4, options);
    return (
      <Plumber N={n} M={m}>
        <Pipe />
      </Plumber>
    );
  });
