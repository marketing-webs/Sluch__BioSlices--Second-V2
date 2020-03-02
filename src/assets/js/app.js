import "../../templates/thanks.html";
import "bootstrap";
import * as $ from "jquery";
import Popup from "./buyerPopup";
import Odometer from "./odometer";

// let popupFactory = new Popup();

// $(document).ready(() => {
//   popupFactory.createPopup();

//   let odometerCoutState = 1023;
//   var el = document.querySelector("#odometer");
//   let odometer = new Odometer({
//     el: el,
//     value: 1023,
//     duration: 30000,
//     animation: "count"
//   });

//   setInterval(() => {
//     if (odometerCoutState != 1007) {
//       var newState = odometerCoutState - 1;
//       odometer.update(newState);
//     }
//     odometerCoutState = newState;
//   }, Math.floor(Math.random() * 10000) + 50000);

//   let firstOutFlag = true;

//   $("#tooltipMail").tooltip({ placement: "right" });
//   $("#tooltipPhone").tooltip({ placement: "right" });
// });

// countdown
var box2 = document.getElementById("countdown2");
var box1 = document.getElementById("countdown1");
var counter = 20;
var Interval = window.setInterval(Countdown, 60000);
function Countdown() {
  counter = counter - 1;
  box1.innerHTML = counter.toString().charAt(0);
  box2.innerHTML = counter.toString().charAt(1);
  if (counter <= 9 && counter >= 3) {
    box1.innerHTML = 0;
    box2.innerHTML = counter;
  }
  if (counter <= 3) {
    clearInterval(Interval);
  }
}
