import FormElement from './formInput.model';

export default class FormDataProvider {
    constructor(ids) {
        this.ids = ids || null;
        this.mappedInputs = [];
    }

    //Retrieve data from inputs of given id's
    readInputs() {
        this.ids.forEach(curId => {
            const curVal = document.getElementById(curId).value;
            const formObj = new FormElement(curId, curVal);
            this.mappedInputs.push(formObj);
        });
        //Save data in localstorage to retrive it in another page and fill form
        localStorage.clear();
        localStorage.setItem('savedFormData', JSON.stringify(this.mappedInputs));
    }

    fillInputs() {
        const dataFromStorage = JSON.parse(localStorage.getItem('savedFormData'));
        dataFromStorage.forEach(element => {
            if (element.idString == "orderFormWarnings"){
                document.getElementById(element.idString).innerHTML=element.elementValue;
            } else {
                document.getElementById(element.idString).setAttribute('value', element.elementValue);
            }
        });
    }
}