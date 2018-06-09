// import 
import React from "react";
import { storiesOf } from "@storybook/react";
import { number, withKnobs } from "@storybook/addon-knobs";
import ReactGame from "react-gameboard/lib/component";
import Paragraph from "../src/N04/index.jsx";
import Game from "../src/N04/lib/n04.js";

const N04 = ReactGame(Game); // const N04

storiesOf("N04", module)
   .addDecorator(withKnobs)
   .add("Custom", () => {
    const options = {
      range: true,
      step: 1,
      min: 300, // min - number of students
      max: 5000 // max - number of students 
    };
    // percent
    const options1 = {
        range: true,
        step: 1,
        min: 1, // min 1%
        max: 100  // max 100%
    }
    const n = number("Number of students", 4, options);
    const x = number("%Participants", 1, options1);
    const y = number("% Cake",1, options1);
    const z = number("% Dance",1, options1);
    return(
        <N04 n={n} x={x/100} y={y/100} z={z/100}>
        <Paragraph />
      </N04>
    );
   });

