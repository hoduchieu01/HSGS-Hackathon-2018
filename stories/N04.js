import React from "react";
import { storiesOf } from "@storybook/react";
import { number, withKnobs } from "@storybook/addon-knobs";
import ReactGame from "react-gameboard/lib/component";
import Paragraph from "../src/N04/index.jsx";
import Game from "../src/N04/lib/n04.js";

const N04 = ReactGame(Game); // const N04

storiesOf("N04", module)
  .addDecorator(withKnobs)
  .add("Dễ", () => (
    <N04 Stepn = {1000} Stepx = {50} Stepy = {50} Stepz = {50}>
      <Paragraph />
    </N04>
  ))
  .add("Trung bình", () => (
    <N04 Stepn = {500} Stepx = {20} Stepy = {20} Stepz = {20}>
      <Paragraph />
    </N04>
  ))
  .add("Khó", () => (
    <N04 Stepn = {200} Stepx = {10} Stepy = {10} Stepz = {10}>
      <Paragraph />
    </N04>
  ))
  .add("Siêu khó", () => (
    <N04 Stepn = {10} Stepx = {5} Stepy = {5} Stepz = {5}>
      <Paragraph />
    </N04>
  ))
  .add("Rinne Tsujikubo", () => (
    <N04 Stepn = {1} Stepx = {1} Stepy = {1} Stepz = {1}>
      <Paragraph />
    </N04>
  ));
