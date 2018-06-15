// import
import React from "react";
import { storiesOf } from "@storybook/react";
import { number, withKnobs } from "@storybook/addon-knobs";
import ReactGame from "react-gameboard/lib/component";
import Paragraph from "../src/N36/index.jsx";
import Game from "../src/N36/lib/n36.js";

const N36 = ReactGame(Game); // const N36
    storiesOf("N36",module)
    .addDecorator(withKnobs)
    .add("Dễ", () => (
    <N36 Steppassenger = {600} Stepfee = {10} Steptip = {10} Steptoday={10} Steppolish={5} Steppolish_man={10} Steplondon={5} Steplondon_woman={10} Stepalison={5} Stepalison_man={10} Stepitalian={5} >
        <Paragraph />
    </N36>
    ))
    .add("Trung bình", () => (
        <N36 Steppassenger = {600} Stepfee = {10} Steptip = {10} Steptoday={10} Steppolish={5} Steppolish_man={5} Steplondon={5} Steplondon_woman={5} Stepalison={5} Stepalison_man={5} Stepitalian={5} >
        <Paragraph />
        </N36>
        ))
    .add("Khó", () => (
    <N36 Steppassenger = {600} Stepfee = {5} Steptip = {5} Steptoday={10} Steppolish={5} Steppolish_man={5} Steplondon={5} Steplondon_woman={5} Stepalison={5} Stepalison_man={5} Stepitalian={5} >
        <Paragraph />
    </N36>
    ))
    .add("Siêu khó", () => (
        <N36 Steppassenger = {600} Stepfee = {1} Steptip = {1} Steptoday={5} Steppolish={5} Steppolish_man={5} Steplondon={5} Steplondon_woman={5} Stepalison={5} Stepalison_man={5} Stepitalian={5} >
            <Paragraph />
        </N36>
        ));    