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
                Jeszcze do niedawna słyszałam na tyle słabo, że co chwila musiałam prosić o powtarzanie kilka razy tego samego słowa. Głupio mi było, że taka młoda kobieta jak ja ma gorszy słuch od niejednej starszej osoby. Nie chciałam inwestować w aparat słuchowy, za dużo złego się o nim nasłuchałam. Sąsiadka poleciła mi tę cudowną kurację. Zaryzykowałam i to był strzał w dziesiątkę!</p>
                <span class="d-block px-2">Julia, Ostrów Wielkopolski</span>
              </div>
            </div>
            <div class="carousel-item active">
              <div class="cmt-caption">
                <p class="popup__comment p-2">
                Lata pracy w hałasie nie wpłynęły dobrze na mój słuch. W wieku 48 lat groziła mi głuchota! Byłam przerażona, kiedy usłyszałam taką diagnozę. Próbowałam naprawdę wszystkiego: aparatów słuchowych, świecowania, zastrzyków w bębenki, wszystko na nic. Na szczęście usłyszałam o AccuSound Day. To po prostu rewelacyjna kuracja. Poczułam znaczną różnicę już po 1. zastosowaniu. Żadnych szumów, trzasków, pisków. Słyszę wyraźnie każde słowo. Polecam! 
                </p>
                <span class="d-block px-2">Żaneta, Lublin</span>
              </div>
            </div>
            <div class="carousel-item ">
              <div class="cmt-caption">
                <p class="popup__comment p-2">
                Przez problemy ze słuchem całkowicie zrezygnowałem z życia towarzyskiego. Głupio mi było ciągle dopytywać o to, co ktoś do mnie powiedział, a ja zwyczajnie tego nie słyszałem. Ile można mówić: „co, co, możesz powtórzyć?” O AccoSound powiedziała mi córka, która przypadkiem trafiła na stronę producenta tej niesamowitej kuracji. Już po kilku dniach słyszałem jak dawniej. Nie miałem problemów ze zrozumieniem słów nawet z dalszej odległości. Efekty przeszły moje najśmielsze oczekiwania!
                </p>
                <span class="d-block px-2">Jerzy, Łódź</span>
              </div>
            </div>
            <div class="carousel-item ">
              <div class="cmt-caption">
                <p class="popup__comment p-2">
                Muszę przyznać, że nigdy zamówienie jakiegoś produktu nie poszło mi tak szybko i sprawnie jak w przypadku AcooSound Day. Wypełniłem formularz w niecałe 2 minuty, a 2 dni później kurier zapukał do moich drzwi z przesyłką. Nie musiałem wpłacać pieniędzy przez internet, czego zawsze się obawiam. A kuracja? Działa cuda!
                </p>
                <span class="d-block px-2">Jarosław, Śląsk</span>
              </div>
            </div>
            <div class="carousel-item ">
              <div class="cmt-caption">
                <p class="popup__comment p-2">
                Kiedy zobaczyłam cenę kuracji, nie wierzyłam, że coś tak taniego może być aż tak skuteczne. Postanowiłam jednak zaryzykować, w końcu nie miałam nic do stracenia. Zamówiłam preparat i z niecierpliwością czekałam na przesyłkę. Już po kilku godzinach od 1. zastosowania nie wierzyłam własnym uszom. Wyraźnie słyszałam, co kto do mnie mówi. Nie musiałam już na maksa podgłaśniać telewizora. Jestem zachwycona!
                </p>
                <span class="d-block px-2">Anna, Płock</span>
              </div>
            </div>
            <div class="carousel-item ">
              <div class="cmt-caption">
                <p class="popup__comment p-2">
                Przez te aparaty słuchowe to ja majątek straciłam. Wydałam na nie ponad 20 tysięcy złotych, a nic to nie dawało. Dziadostwo mi tylko z ucha wypadało, ciągle je gubiłam. Nie wiem, co by było gdyby nie moja siostra. Pewnego dnia przyniosła mi cudowną formułę, która naprawdę mi pomogła. Po 28 dniach słyszę tak, jakbym znowu miała 20 lat. Polecam każdemu! 
                </p>
                <span class="d-block px-2">Weronika, Ełk</span>
              </div>
            </div>
            <div class="carousel-item ">
              <div class="cmt-caption">
                <p class="popup__comment p-2">
                Przez problemy ze słuchem wiecznie chodziłem rozdrażniony. Nie wysypiałem się, bolała mnie głowa, a jedyne, co słyszałem to nieznośne szumy i trzaski. No ogłupieć można po prostu! Nie da się tak długo funkcjonować, musiałem coś z tym zrobić. Zdecydowałem się już nawet na groźną operację, ale w porę usłyszałem o tej nowej kuracji. Zamówiłem i jestem zachwycony! Słyszę wszystko jak należy. Ostatnio byłem u spowiedzi i wyraźnie słyszałem każde słowo księdza.
                </p>
                <span class="d-block px-2">Henryk, Olsztyn</span>
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

    $(".triggerBtn").click(function () {
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