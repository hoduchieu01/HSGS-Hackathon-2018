// import
import React from "react";
import { storiesOf } from "@storybook/react";
import { number, withKnobs } from "@storybook/addon-knobs";
import ReactGame from "react-gameboard/lib/component";
import Paragraph from "../src/N20/index.jsx";
import Game from "../src/N20/lib/n20.js";

const N20 = ReactGame(Game); // const N20
    storiesOf("N20",module)
    .addDecorator(withKnobs)
    .add("Dễ", () => (
    <N20 Stepmoney = {50} Steppeople = {500} Stepsandwich = {10} Stepmusic = {10} Stepedu = {10} Stepcrafts={10} Stepcoat={10} Stepbag = {10} >
        <Paragraph />
    </N20>
    ))
    .add("Trung bình", () => (
    <N20 Stepmoney = {50} Steppeople = {1000} Stepsandwich = {10} Stepmusic = {15} Stepedu = {10} Stepcrafts={8} Stepcoat={5} Stepbag = {10} >
        <Paragraph />
    </N20>
    ))
    .add("Khó", () => (
    <N20 Stepmoney = {10} Steppeople = {200} Stepsandwich = {5} Stepmusic = {5} Stepedu = {5} Stepcrafts={5} Stepcoat={5} Stepbag = {5} >
        <Paragraph />
    </N20>
    ))
    .add("Cực khó", () => (
    <N20 Stepmoney = {5} Steppeople = {10} Stepsandwich = {2} Stepmusic = {2} Stepedu = {2} Stepcrafts={2} Stepcoat={2} Stepbag = {2} >
        <Paragraph />
    </N20>
    ))
    .add("Rinne Tsujikubo", () => (
    <N20 Stepmoney = {1} Steppeople = {1} Stepsandwich = {1} Stepmusic = {1} Stepedu = {1} Stepcrafts={1} Stepcoat={1} Stepbag = {1} >
        <Paragraph />
    </N20>
    ));
