import * as buyers from "../json/buyers.json";
import * as $ from "jquery";
export default class Popup {
  constructor() {
    this.buyers = buyers["default"];
  }

  createPopup(person) {
    let popupList = document.getElementById("popuplist");
    let popup = document.createElement("div");

    popup.innerHTML = `<div id="carouselExampleIndicators" class="carousel slide position-relative" data-ride="carousel" data-interval="30000">
        <div class="carousel-inner">
            <div class="carousel-item ">
                <div class="cmt-caption">
                    <p class="popup__comment p-2">
                    JEST EKSTRA! Schudłam bez niczego, żadnych diet. Mam lepszy humor i więcej energii. Znów cieszę się życiem! </p>
                    <span class="d-block px-2">Kasia, Warszawa</span>
                </div>
            </div>
            <div class="carousel-item active">
                <div class="cmt-caption">
                    <p class="popup__comment p-2">
                    Otyłość niszczyła moje życie. Ale to koniec! Dzięki stosowaniu RedSlimtea Extract wreszcie nie wstydzę się siebie! 
                    </p>
                    <span class="d-block px-2">Marta, Gdańsk</span>
                </div>
            </div>
            <div class="carousel-item ">
                <div class="cmt-caption">
                    <p class="popup__comment p-2">
                    Ten cudowny środek uratował mnie! Schudłam już 17 kg i znów czuję się piękna. Rewelacja!
                    </p>
                    <span class="d-block px-2">Janina, Łomża</span>
                </div>
            </div>
            <div class="carousel-item ">
                <div class="cmt-caption">
                    <p class="popup__comment p-2">
                    Wiecie, co mi się bardzo podoba? To, że RedSlimtea Extract jest zupełnie naturalny i nie powoduje żadnych efektów ubocznych. To najlepszy sposób na odchudzanie! Definitywnie!  
                    </p>
                    <span class="d-block px-2">Ewelina, Kędzierzyn-Koźle</span>
                </div>
            </div>
            <div class="carousel-item ">
                <div class="cmt-caption">
                    <p class="popup__comment p-2">
                    Tyle ważyłem, że nie dałem rady normalnie się ruszać. Dopiero po braniu RedSlimtea Extract odżyłem i odzyskałem sprawność, no i oczywiście schudłem. 
                    </p>
                    <span class="d-block px-2">Jan, Opole</span>
                </div>
            </div>
            <div class="carousel-item ">
                <div class="cmt-caption">
                    <p class="popup__comment p-2">
                    Wreszcie mam idealną figurę i cieszę się życiem. W końcu mogę bawić się z synkiem, chodzić po górach i uprawiać sport. Moje życie znowu jest normalne. Dziękuję 
                    </p>
                    <span class="d-block px-2">Joanna, Zakopane</span>
                </div>
            </div>
            <div class="carousel-item ">
                <div class="cmt-caption">
                    <p class="popup__comment p-2">
                    Lekarz ciągle mi powtarzał, że jak nie zrobię czegoś ze sobą, to dostanę zawału z tą nadwagą. Wtedy dziewczyna kupiła mi ten środek na odchudzanie. Schudłem i mogę już spać spokojnie. 
                    </p>
                    <span class="d-block px-2">Andrzej, Katowice</span>
                </div>
            </div>
           
            </div>
        </div>
        <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
          <span class="carousel-control-prev-icon control" aria-hidden="true"></span>
          <span class="sr-only">Previous</span>
        </a>
        <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
          <span class="carousel-control-next-icon control" aria-hidden="true"></span>
          <span class="sr-only">Next</span>
        </a>
      </div>`;

    $(popup).addClass("buyer-popup");
    $(popup).addClass("show");
    popupList.appendChild(popup);
    this.setupAnimations();
  }

  setupAnimations() {
    let animationFlag = 0;

    $(".triggerBtn").click(function() {
      switch (animationFlag) {
        case 0:
          $("#popuplist").removeClass("hidePopup");
          $(".triggerBtn").removeClass("rotateBackwords");
          $("#popuplist").addClass("showPopup");
          $(".triggerBtn").addClass("rotateBtn");
          animationFlag = 1;
          break;
        case 1:
          $("#popuplist").removeClass("showPopup");
          $(".triggerBtn").removeClass("rotateBtn");
          $("#popuplist").addClass("hidePopup");
          $(".triggerBtn").addClass("rotateBackwords");
          animationFlag = 0;
          break;
      }
    });
  }
}
