import * as $ from 'jquery';
import FormDataProvider from './models/formDataProvider.model';
import 'bootstrap';

let formItemsIds = ['orderFormName', 'orderFormLastName', 'orderFromMail', 'orderFormPhone', 'orderFormAdress', 'orderFormCode', 'orderFormCity', 'orderFormWarnings'];

$(document).ready(() => {
    $('#tooltipMail').tooltip({'placement': 'right'});
    $('#tooltipPhone').tooltip({'placement': 'right'});
    let fDP = new FormDataProvider(formItemsIds);

    $('#orderFormBtn').click((e)=>{
        const formEl = document.getElementById('shippingForm').checkValidity();
        if (formEl) {
            fDP.readInputs();
        }
    });
});