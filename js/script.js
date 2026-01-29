//Login popup

function openLogin() {
  document.getElementById("loginModal").style.display = "flex";
}

function closeLogin() {
  document.getElementById("loginModal").style.display = "none";
}



//logout
function logout() {
  alert("You have been logged out");
  window.location.href = "index.html"; // or login page
}


//cards slide left right
 const slider = document.getElementById("slider");

  function slideLeft() {
    slider.scrollLeft -= 350;
  }

  function slideRight() {
    slider.scrollLeft += 350;
  }

  // Filter active effect
document.querySelectorAll('.filter-menu span').forEach(item=>{
  item.addEventListener('click',()=>{
    document.querySelectorAll('.filter-menu span').forEach(i=>i.classList.remove('active'));
    item.classList.add('active');
  });
});




//click thi acctive card

  document.querySelectorAll(".product-card").forEach(card => {
    card.addEventListener("click", () => {
      card.classList.toggle("active");
    });
  });


  //profile popup
  function openProfile(){
  document.getElementById("profilePopup").style.display = "flex";
}

function closeProfile(){
  document.getElementById("profilePopup").style.display = "none";
}


//buynow button
 document.querySelectorAll(".buy-btn").forEach(btn => {
    btn.addEventListener("click", () => {
      const name = btn.dataset.name;
      const price = btn.dataset.price;
      const img = btn.dataset.img;

      window.location.href =
        `buynow.html?name=${encodeURIComponent(name)}&price=${encodeURIComponent(price)}&img=${encodeURIComponent(img)}`;
    });
  });


  
  //card items icreasing
 function increaseQty(btn){
  const qty = btn.previousElementSibling;
  qty.innerText = parseInt(qty.innerText) + 1;
}

function decreaseQty(btn){
  const qty = btn.nextElementSibling;
  let value = parseInt(qty.innerText);
  if(value > 1){
    qty.innerText = value - 1;
  }
}

function removeItem(icon){
  icon.closest(".cart-item").remove();
}