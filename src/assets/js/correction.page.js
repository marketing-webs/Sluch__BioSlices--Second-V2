import '../scss/correction.scss';
import * as $ from 'jquery';
import FormDataProvider from './models/formDataProvider.model';
import 'bootstrap';

let orderNumbers = ['9B56B63H', '10C6DH42F', '1D345GD2', '5F444FD3', '77ACE323', '88AVS504', '23QASDD3', '903DFV3D', 'RT300DC32', '99FFA23F'];
const fDP = new FormDataProvider();

$('document').ready(()=>{
    $('#tooltipMail').tooltip({'placement': 'right'});
    $('#tooltipPhone').tooltip({'placement': 'right'});

    const rolledNr = Math.floor(Math.random() * 10) - 1;
    $('#orderNr').html(orderNumbers[rolledNr]);
    fDP.fillInputs();
})

$('#correct').click( function (event) {
    event.preventDefault()
    $('.form-control').removeAttr('disabled');
    $('#correct').css('display', 'none');
})