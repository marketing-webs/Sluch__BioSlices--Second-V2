import '../../templates/thanks.html';
import 'bootstrap';
import * as $ from 'jquery';
import Popup from './buyerPopup';
import Odometer from './odometer';

let popupFactory = new Popup();


$(document).ready(() => {

    popupFactory.createPopup();

    let odometerCoutState = 1023;
    var el = document.querySelector('#odometer');
    let odometer = new Odometer({
        el: el,
        value: 1023,
        duration: 30000,
        animation: 'count'
    })

    setInterval(()=>{
        if(odometerCoutState != 1007) {
            var newState = odometerCoutState - 1;
            odometer.update(newState);
        }
        odometerCoutState = newState;
    }, Math.floor(Math.random() * 10000) + 50000)

    let firstOutFlag = true;

    $('#tooltipMail').tooltip({'placement': 'right'});
    $('#tooltipPhone').tooltip({'placement': 'right'});

});
