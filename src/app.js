/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  let who = ["The dog", "My grandma", "His turtle", "My bird"];
  let action = ["ate", "peed", "crushed", "broke"];
  let what = ["my homework", "the keys", "the car"];
  let when = [
    "before the class",
    "right on time",
    "when I finished",
    "during my lunch",
    "while I was praying"
  ];
  function myFunction() {
    const whoRandom = who[Math.floor(Math.random() * who.length)];
    const actionRandom = action[Math.floor(Math.random() * action.length)];
    const whatRandom = what[Math.floor(Math.random() * what.length)];
    const whenRandom = when[Math.floor(Math.random() * when.length)];

    return whoRandom + " " + actionRandom + " " + whatRandom + " " + whenRandom;
  }
  const excuse = myFunction;
  const mainParagraph = document.getElementById("excuse");
  mainParagraph.innerHTML = excuse;
};
