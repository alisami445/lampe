//PLUS
let pluss = Array.from(document.getElementsByClassName('plus-plus'));
for (let i = 0; i < pluss.length; i++) {
  pluss[i].addEventListener('click', function () {
    pluss[i].previousElementSibling.innerText++;
    totalPrice()
  });
}
//MOIS
let minus =Array.from( document.getElementsByClassName('minus-minus'));
for (let i = 0; i < minus.length; i++) {
  minus[i].addEventListener('click', function () {
    if (minus[i].nextElementSibling.innerText > 0) {
          minus[i].nextElementSibling.innerText--;   
    }
    totalPrice()
        });
}
function totalPrice() {
  let price = document.getElementsByClassName('prx');
  let quantity = document.getElementsByClassName('quant');
  let sum = 0;
  for (let i = 0; i < price.length; i++) {
    sum += price[i].innerText * quantity[i].innerText;
  }
  document.getElementById('tot').innerText = sum;
}
//Delete a product
let deletebtn = Array.from(document.querySelectorAll('.delete-delete'));
for (let i = 0; i < deletebtn.length; i++) {
    deletebtn[i].addEventListener('click', function () {
      deletebtn[i].parentElement.parentElement.parentElement.parentElement.parentElement.remove();
       totalPrice();
      });
   }
let likeBtn = document.querySelectorAll('.btn-like');
let heart = document.querySelectorAll('.fa-heart');
for (let i = 0; i < heart.length; i++) {
  heart[i].addEventListener("click", function () {
    if (heart[i].classList.contains("fas")) {
      heart[i].classList.remove("fas");
      heart[i].classList.add("far");
    } else {
      heart[i].classList.remove("far");
      heart[i].classList.add("fas");
    }
  });
}