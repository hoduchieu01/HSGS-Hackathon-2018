import React from "react";
import { storiesOf } from "@storybook/react";
import Chess from "../src/S17/index.jsx";
import Game from "../src/S17/lib/knight.js";
import ReactGame from "react-gameboard/lib/component";
import { number, withKnobs } from "@storybook/addon-knobs";
import Guide from "../src/S17/guide.jsx";
const KN = ReactGame(Game);

storiesOf("Knight (S17)", module)
  .addDecorator(withKnobs)
  .add("Hướng dẫn", () => <Guide> </Guide>)
  .add("Dễ", () => (
    <KN row={3} col={4}>
      <Chess />
    </KN>
  ))
  .add("Trung bình", () => (
    <KN row={5} col={5}>
      <Chess />
    </KN>
  ))
  .add("Khó", () => (
    <KN row={8} col={8}>
      <Chess />
    </KN>
  ))
  .add("Tùy chọn", () => {
    const options = {
      range: true,
      step: 1,
      min: 4,
      max: 20
    };
    const n = number("Row", 4, options);
    const m = number("Column", 4, options);
    return (
      <KN row={n} col={m}>
        <Chess />
      </KN>
    );
  });
