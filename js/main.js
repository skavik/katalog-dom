
/**
 * NodeList.prototype.forEach() polyfill
 * https://developer.mozilla.org/en-US/docs/Web/API/NodeList/forEach#Polyfill
 */
 if (window.NodeList && !NodeList.prototype.forEach) {
	NodeList.prototype.forEach = function (callback, thisArg) {
		thisArg = thisArg || window;
		for (var i = 0; i < this.length; i++) {
			callback.call(thisArg, this[i], i, this);
		}
	};
}




const sidebarToggleBtn = document.querySelector(".menu-icon-wrapper");
const menuIcon = document.querySelector(".menu-icon");
const sidebar = document.querySelector(".sidebar");

// Клик по кнопке для скрытия / показа фильтра и изменения исконки
sidebarToggleBtn.onclick = function () {
  menuIcon.classList.toggle("menu-icon-active");
  sidebar.classList.toggle("sidebar--mobile-active");
};

let BtnMoreCards = document.querySelector(".btn-more");
let CardsLinkHolder = document.querySelectorAll(".card__link--holder");

BtnMoreCards.addEventListener("click", function () {
  CardsLinkHolder.forEach(function (card) {
    card.classList.remove("card__link--holder");
  });
});

let widgets = document.querySelectorAll(".widget");

widgets.forEach(function (widget) {
  widget.addEventListener("click", function (e) {
    if (e.target.classList.contains("widget__title")) {
      e.target.classList.toggle("widget__title--active");
      e.target.nextElementSibling.classList.toggle("widget__body--hidden");
    }
  });
});

let BtnLocationAny = document.querySelector("#location-5");
let BtnLocationTop = document.querySelectorAll("[data-location-top]");

BtnLocationAny.addEventListener("change", function () {
  if (BtnLocationAny.checked) {
    BtnLocationTop.forEach(function (iteam) {
      iteam.checked = false;
    });
  }
});

BtnLocationTop.forEach(function (iteam) {
  iteam.addEventListener("change", function () {
    if (BtnLocationAny.checked) {
      BtnLocationAny.checked = false;
    }
  });
});

let BtnCheckBoxShowMore = document.querySelector(".widget__show-hidden");
let CheckBoxDodat = document.querySelectorAll(".widget__hidden");

BtnCheckBoxShowMore.addEventListener("click", function (e) {
e.preventDefault()

  if (BtnCheckBoxShowMore.dataset.options == 'hidden') {
       CheckBoxDodat.forEach(function (e) {
    e.style.display = 'block';
  });

  BtnCheckBoxShowMore.innerText = 'Скрыть дополнительный опции'
  BtnCheckBoxShowMore.dataset.options = 'visibel'
  } else if (BtnCheckBoxShowMore.dataset.options == 'visibel') {
    CheckBoxDodat.forEach(function (e) {
        e.style.display = 'none';
      });
    
      BtnCheckBoxShowMore.innerText = 'Показать ещё'
      BtnCheckBoxShowMore.dataset.options = 'hidden'
  }
  
   
});
