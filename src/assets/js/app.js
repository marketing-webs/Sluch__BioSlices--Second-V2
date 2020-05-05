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

//Form Validation

$(document).ready(() => {
  function nameCheck(name) {
    var value = /^[a-zA-Z]+$/;
    return value.test(name);
  }

  function surnameCheck(surname) {
    var value = /^[a-zA-Z]+$/;
    return value.test(surname);
  }

  function validatePhone(phone) {
    var isphone = /^[0-9]{9}$/g;
    return isphone.test(phone);
  }

  function adressCheck(adress) {
    var street = /^[a-zA-Z]*[\s/a-zA-Z]+[\s/0-9]+$/;
    return street.test(adress);
  }

  function validatePost(postal_code) {
    var post = /^\d{5}$|^\d{2}-\d{3}$/;
    return post.test(postal_code);
  }

  function cityCheck(city) {
    var value = /^[a-zA-Z]*[\s/a-zA-Z]+$/;
    return value.test(city);
  }

  function validateEmail(email) {
    var val = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return val.test(email);
  }

  $("#name").on("click keyup", function () {
    if ($("#name").val() === "") {
      $(".input-required_name").show();
      $("#name_error").hide();
    } else {
      $(".input-required_name").hide();
      if (nameCheck($("#name").val())) {
        $("#name_error").hide();
      } else {
        $("#name_error").show();
      }
    }
  });

  $("#surname").on("click keyup", function () {
    if ($("#surname").val() === "") {
      $(".input-required_surname").show();
      $("#surname_error").hide();
    } else {
      $(".input-required_surname").hide();
      if (surnameCheck($("#surname").val())) {
        $("#surname_error").hide();
      } else {
        $("#surname_error").show();
      }
    }
  });

  $("#phone").on("click keyup", function () {
    if ($("#phone").val() === "") {
      $(".input-required_phone").show();
      $("#phone_error").hide();
    } else {
      $(".input-required_phone").hide();
      if (validatePhone($("#phone").val())) {
        $("#phone_error").hide();
      } else {
        $("#phone_error").show();
      }
    }
  });

  $("#adress").on("click keyup", function () {
    if ($("#adress").val() === "") {
      $(".input-required_adress").show();
      $("#adress_error").hide();
    } else {
      $(".input-required_adress").hide();
      if (adressCheck($("#adress").val())) {
        $("#adress_error").hide();
      } else {
        $(".input-required_adress").hide();
        $("#adress_error").show();
      }
    }
  });

  $("#postal").on("click keyup", function () {
    if ($("#postal").val() === "") {
      $(".input-required_postal").show();
      $("#postal_error").hide();
    } else {
      $(".input-required_postal").hide();
      if (validatePost($("#postal").val())) {
        $("#postal_error").hide();
      } else {
        $(".input-required_postal").hide();
        $("#postal_error").show();
      }
    }
  });

  $("#city").on("click keyup", function () {
    if ($("#city").val() === "") {
      $(".input-required_city").show();
      $("#city_error").hide();
    } else {
      $(".input-required_city").hide();
      if (cityCheck($("#city").val())) {
        $("#city_error").hide();
      } else {
        $(".input-required_city").hide();
        $("#city_error").show();
      }
    }
  });

  $("#email").on("keyup", function () {
    if (validateEmail($("#email").val())) {
      $("#email_error").hide();
    } else {
      $("#email_error").show();
    }
  });

  function checkFields1() {
    if (
      $("#phone").val() != "" &&
      $("#name").val() != "" &&
      $("#surname").val() != ""
    ) {
      if (
        validatePhone($("#phone").val()) &&
        nameCheck($("#name").val()) &&
        surnameCheck($("#surname").val())
      ) {
        return true;
      }
    }
    return false;
  }

  function checkFields2() {
    if (
      $("#adress").val() != "" &&
      $("#postal").val() != "" &&
      $("#city").val() != ""
    ) {
      if (validatePost($("#postal").val())) {
        return true;
      }
    }
    return false;
  }

  //FIRST FORM
  $("#form_btn").on("click", function () {
    if (
      nameCheck($("#name").val()) &&
      surnameCheck($("#surname").val()) &&
      validatePhone($("#phone").val())
    ) {
      $("#form_button1").hide();
      $(".hiden_form").slideDown(1500);
    }

    var postForm = {
      name: $("#name").val(),
      surname: $("#surname").val(),
      phone: $("#phone").val(),
    };

    if (checkFields1()) {
      $.ajax({
        url: "send1.php",
        type: "post",
        data: JSON.stringify(postForm),
        success: function (response) {
          if (response) {
            $(".alertbox")
              .html("Dziękujemy za wiadomość.")
              .addClass("ok")
              .show();
          }
        },
        error: function (jqXHR, textStatus, errorThrown) {
          console.log(textStatus, errorThrown);
        },
      });
    } else {
      $(".alertbox").show();
    }
  });
  //SECOND FORM
  $("#form_btn2").on("click", function () {
    if (
      validatePost($("#postal").val()) &&
      cityCheck($("#city").val()) &&
      adressCheck($("#adress").val())
    ) {
    }

    var postForm2 = {
      adress: $("#adress").val(),
      postal: $("#postal").val(),
      city: $("#city").val(),
      message: $("#message").val(),
      email: $("#email").val(),
    };

    if (checkFields2()) {
      $.ajax({
        url: "send2.php",
        type: "post",
        data: JSON.stringify(postForm2),
        success: function (response) {
          if (response) {
            $(".alertbox")
              .html("Dziękujemy za wiadomość.")
              .addClass("ok")
              .show();
          }
        },
        error: function (jqXHR, textStatus, errorThrown) {
          console.log(textStatus, errorThrown);
        },
      });
    } else {
      $(".alertbox").show();
    }
  });

  //ZAPISYWANIE DANYCH UŻYTKOWNIKA Z INPUTÓW

  const phone = document.getElementById("phone");
  const name = document.getElementById("name");
  const surname = document.getElementById("surname");

  let userPhone = [];
  let userName = [];
  let userSurame = [];

  const user = {};

  phone.addEventListener("blur", function () {
    const val = this.value;
    if (val.length >= 0) {
      userPhone.push(val);
      let phoneNumber = userPhone[userPhone.length - 1];
      user.phone = phoneNumber;
    }
  });

  name.addEventListener("blur", function () {
    const val = this.value;
    if (val.length >= 0) {
      userName.push(val);
      let nameUser = userName[userName.length - 1];
      user.name = nameUser;
    }
  });

  surname.addEventListener("blur", function () {
    const val = this.value;
    if (val.length >= 0) {
      userSurame.push(val);
      let surameUser = userSurame[userSurame.length - 1];
      user.surname = surameUser;
    }
  });

  const submitData = () => {
    var postData = {
      user: user,
    };
    $.ajax({
      url: "send3.php",
      type: "post",
      data: JSON.stringify(postData),
      success: function (response) {
        if (response) {
          console.log("ok");
        }
      },
      error: function (jqXHR, textStatus, errorThrown) {
        console.log(textStatus, errorThrown);
      },
    });
  };

  $(phone).on("blur", function (e) {
    e.preventDefault();
    submitData();
  });

  $(name).on("blur", function (e) {
    e.preventDefault();
    submitData();
  });

  $(surname).on("blur", function (e) {
    e.preventDefault();
    submitData();
  });
});
