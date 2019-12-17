import * as $ from 'jquery';
import '../../templates/dont-leave.html';
import Timer from 'easytimer.js';

let timer = new Timer();

$(document).ready(()=>{

    timer.start({countdown: true, startValues: {seconds: 180}});
    $('#countdownExample .values').html(timer.getTimeValues().toString());
    timer.addEventListener('secondsUpdated', function (e) {
        $('#countdownExample .values').html(timer.getTimeValues().toString());
    });
    timer.addEventListener('targetAchieved', function (e) {
        $('.values').addClass('flashing');
    });

});
