import * as $ from 'jquery';

let areUserWantsToQuit = true;

function doSomethingWhenUserStays() {
    areUserWantsToQuit = false;
    document.location.replace('dont-leave.html');
}

$(document).ready(()=>{
    //Setup trap for a user who want's to quit without buying this shieeet!
    // $(window).on('beforeunload', function(e){
    //     if(areUserWantsToQuit) {
    //         setTimeout(doSomethingWhenUserStays, 250);
    //         return 'Are You sure You want to quit?';
    //     }
    // });

    $('.preventPopup').click(()=>{
        areUserWantsToQuit = false;
    });
})
