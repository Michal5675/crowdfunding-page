const hamburger = document.getElementById("hamburger");
const menu1 = document.getElementById("menu-1");
const bookmark1 = document.getElementById("bookmark");
const circle = document.getElementById("circle");
const path = document.getElementById("path");
const btnProject = document.getElementById("btnProject");
const modal = document.getElementsByClassName("modal")[0];
const iconModal = modal.getElementsByClassName("modal-icon")[0];
const gridModal = modal.getElementsByClassName("grid-modal")[0];
var backers = document.getElementsByClassName("backers")[0];
var money = document.getElementsByClassName("amount-money")[0];
const plegde = gridModal.getElementsByClassName("enter-pledge");
const pathIconModal = document.getElementById("fill");
const bookmark = document.querySelector(".bookmark");
const body = document.querySelector("body");

const wrapper = document.getElementsByClassName("wrapper")[0];

bookmark.addEventListener("click", ()=> {
  bookmark.classList.toggle("bookmark-active");

    if(i % 2 !== 0) {
      circle.style.fill = "hsl(176, 72%, 28%)";
      path.style.fill = "white";
    }
    else {
      circle.style.fill = "#2F2F2F";
      path.style.fill = "#B1B1B1";
    }
    i++;


});

const card = document.getElementsByClassName("card")[0];
const card2 = document.getElementsByClassName("card-2")[0];

for(let n = 0; n < plegde.length; n++) {
  plegde[n].style.display = "none";

}

const check = document.getElementsByClassName("check");


var count = 1;

hamburger.addEventListener("click", function() {
    if(count % 2 !== 0) {
       menu1.style.visibility = "visible";
       hamburger.src = "images/icon-close-menu.svg";
    }
    else {
      menu1.style.visibility = "hidden";
      hamburger.src = "images/icon-hamburger.svg";
    }
    count++;
});

var i = 1;

bookmark1.addEventListener("click", function() {
  if(i % 2 !== 0) {
    circle.style.fill = "hsl(176, 72%, 28%)";
    path.style.fill = "white";
  }
  else {
    circle.style.fill = "#2F2F2F";
    path.style.fill = "#B1B1B1";
  }
  i++;

});


//progress
const progress = document.querySelector("progress");

function progressChange(inputValue) {
  progress.value += (this.inputValue)*0.001;
}

var cardModals = gridModal.getElementsByClassName("card-modal");
var checkbox = document.querySelectorAll("input[name=group-1]");


// buttons of grid stand
const cardBtn1 = document.getElementById("card-btn1");
const cardBtn2 = document.getElementById("card-btn2");

cardBtn1.addEventListener("click", () => {
    modal.style.display = "block";
    cardModals[1].classList.add("card-modal-2");
    plegde[1].style.display = "block";
    checkbox[1].checked = true;
});

cardBtn2.addEventListener("click", () => {
    modal.style.display = "block";
    cardModals[2].classList.add("card-modal-2");
    plegde[2].style.display = "block";
    checkbox[2].checked = true;
});

// create modals card



for (let i = 0; i < checkbox.length; i++) {
  checkbox[i].addEventListener("change", function() {
    for (let j = 0; j < cardModals.length; j++) {
    if (i === j) {
      cardModals[j].classList.add("card-modal-2");
      plegde[j].style.display = "block";
      }
      else {
      cardModals[j].classList.remove("card-modal-2");
      plegde[j].style.display = "none";
    }
}
  });

}

const supportBtn = document.querySelector(".btn-support");
const supportModal = document.querySelector(".support");
supportBtn.addEventListener("click", ()=> {
   supportModal.style.display = "none";
   wrapper.classList.remove("wrapper-1");
});

//plegde rewards left
var modalLeft1 = document.getElementById("modal-left1");
var modalLeft2 = document.getElementById("modal-left2");
var cardLeft1  = document.getElementById("card-pledge1");
var cardLeft2  = document.getElementById("card-pledge2");

var modalNewLeft1 = Number(modalLeft1.innerHTML);
var modalNewLeft2 = Number(modalLeft2.innerHTML);
var cardNewLeft1  = Number(cardLeft1.innerHTML);
var cardNewLeft2  = Number(cardLeft2.innerHTML);



var inputValue = 0;

const btnModal = document.querySelectorAll(".btn-modal");
const input = document.querySelectorAll('input[type="text"]');
var y = 25;
var z = 75;
for(let k = 0; k < input.length; k++) {
  btnModal[k].addEventListener("click", () => {

      wrapper.classList.add("wrapper-1");
      for(let f = 0; f < input.length; f++) {
          if(f == k) {

            if(input[f].value === "") {
              alert("Enter value");
            }
            else if(input[1].value < y) {
              alert("Your value is too low");
              modalNewLeft1++;
              cardNewLeft1++;
            }
            else if(input[2].value < z) {
              alert("Your value is too low");
              modalNewLeft2++;
              cardNewLeft2++;
            }
            else {
              inputValue = input[f].value;
              modal.style.display = "none";
              supportModal.style.display = "block";
            }

          }
      }
      addMoney(inputValue);
      var valueMoney2 = valueMoney.toString();
      var newValueMoney =  [valueMoney2.slice(0,2)+","+ valueMoney2.slice(2,valueMoney2.length)];
      newBackValue++;
      var backersStr = newBackValue.toString();
      var backersStrNew = [backersStr.slice(0,1)+","+ backersStr.slice(1,backersStr.length)];
      backers.innerHTML = backersStrNew;
      progressChange(inputValue);
      var x = 100000;
      if(valueMoney >= x)  {
        newValueMoney =  [valueMoney2.slice(0,3)+","+ valueMoney2.slice(3,valueMoney2.length)];
        btnProject.disabled = true;
        btnProject.classList.add("btn-disable");
        cardBtn1.disabled = true;
        cardBtn2.disabled = true;
        cardBtn1.classList.add("btn-disable");
        cardBtn2.classList.add("btn-disable");
      }
      money.innerHTML = "$"+newValueMoney;
      if(k === 1) {
        modalNewLeft1--;
        cardNewLeft1--;
        var modalStr1 = modalNewLeft1.toString();
        var cardStr1 = cardNewLeft1.toString();
        modalLeft1.innerHTML = modalStr1+" ";
        cardLeft1.innerHTML = cardStr1+" ";
    }
    else if(k === 2) {
      modalNewLeft2--;
      cardNewLeft2--;
      var modalStr2 = modalNewLeft2.toString();
      var cardStr2 = cardNewLeft2.toString();
      modalLeft2.innerHTML = modalStr2;
      cardLeft2.innerHTML = cardStr2+ " ";

    }

      if(modalNewLeft1 == 0) {
        cardModals[1].classList.add("card-modal-disabled");
        cardModals[1].classList.remove("card-modal-2");
        card.classList.add("card-modal-disabled");
        checkbox[1].disabled = true;
        plegde[1].style.display = "none";
        cardBtn1.disabled = true;
        cardBtn1.classList.add("btn-disable");
        cardBtn1.innerHTML = "Out of Stock";
        check[1].classList.add("check-disabled");
      }
     if(modalNewLeft2 == 0) {
         cardModals[2].classList.add("card-modal-disabled");
         cardModals[2].classList.remove("card-modal-2");
         card2.classList.add("card-modal-disabled");
         checkbox[2].disabled = true;
         plegde[2].style.display = "none";
         cardBtn2.classList.add("btn-disable");
         cardBtn2.innerHTML = "Out of Stock";
         cardBtn2.disabled = true;
         check[2].classList.add("check-disabled");

      }
  });

}

btnProject.addEventListener("click", function() {
  modal.style.display = "block";
  wrapper.classList.add("wrapper-1");
});

iconModal.addEventListener("click", function() {
  modal.style.display = "none";
  wrapper.classList.remove("wrapper-1");
});

iconModal.addEventListener("mouseover", function() {
     pathIconModal.style.opacity = "1";
});

iconModal.addEventListener("mouseout", function() {
     pathIconModal.style.opacity = "0.4";
});

// change backers
var back = backers.innerHTML;
var sliceBackers = back.slice(1, 2);
var sliceRest = back.slice(3,back.length);
var newBack = sliceBackers + sliceRest;
var newBackValue = parseFloat(newBack);
// change amount of money
var money2 = money.innerHTML;
var sliceMoney = money2.slice(1, 3);
var sliceRestMoney = money2.slice(4,money.length);
var newMoney = sliceMoney + sliceRestMoney;
var valueMoney = 0;
valueMoney = parseFloat((newMoney));
function addMoney(inputValue, money2) {
    valueMoney += Number(this.inputValue);
    return valueMoney;
}

  var valueMoney2 = "";
  var sliceValueMoney2 = "";
  var sliceRestMoney2 = "";
  var newValueMoney = "";

function changeToStr(valueMoney) {
  valueMoney2 = valueMoney.toString();
  sliceValueMoney2 = valueMoney2.slice(0,2);
  sliceRestMoney2 = valueMoney2.slice(2,money.length);
  newValueMoney = sliceValueMoney2 + "," + sliceRestMoney2;
  return newValueMoney;
}
