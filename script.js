function signup(){
  localStorage.setItem("user", document.getElementById("email").value);
  window.location="login.html";
}

function login(){
  if(localStorage.getItem("user")){
    window.location="dashboard.html";
  } else {
    alert("Please signup first");
  }
}

function logout(){
  localStorage.clear();
  window.location="index.html";
}

function toggleDark(){
  document.body.classList.toggle("dark");
}

function filterBooks(){
  let input=document.getElementById("search").value.toLowerCase();
  document.querySelectorAll(".book-card").forEach(card=>{
    card.style.display=card.dataset.name.includes(input)?"block":"none";
  });
}

/* ⭐ STAR RATING */
function rate(e){
  const stars=e.target.innerText.length;
  const clickX=e.offsetX;
  const starWidth=e.target.offsetWidth/stars;
  const rating=Math.ceil(clickX/starWidth);
  e.target.innerText="★★★★★".slice(0,rating)+"☆☆☆☆☆".slice(0,5-rating);
}

