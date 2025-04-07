const names = document.querySelector(".names");
const email = document.querySelector(".email");
const joined = document.querySelector(".joined");
const dataName = document.querySelector(".js-data-name");
const dataEmail = document.querySelector(".js-data-email");
const dataDate = document.querySelector(".js-data-date");
const navBar = document.querySelector("nav");
const navToggle = document.querySelector(".navToggle");
const navLists = document.querySelectorAll(".navList");
const darkToggle = document.querySelector(".darkToggle");
const body = document.querySelector("body");
const textToggle = document.querySelector(".js-link");
const iconExchange = document.querySelector(".iconExchange");

darkToggle.onclick = function(){
  body.classList.toggle("dark");

  if(body.classList == "dark"){
    textToggle.textContent = "Dark Mode";
    iconExchange.name = "moon-outline";
  }else{
    textToggle.textContent = "Light Mode";
    iconExchange.name = "sunny-outline";
  }
}

navLists.forEach(function(element){
  element.addEventListener("click", function(){
    navLists.forEach((e) => {
      e.classList.remove('active');
      this.classList.add('active');
    })
  })
})

navToggle.addEventListener("click", () => {
  navBar.classList.toggle("close");
});

const fetchedData = fetch("./data.json").then((data)=>{
return data.json()})
.then((response) =>{
  const items = response.item;
  let Name = "";
  let Email = "";
  let Joined = "";

  items.forEach((element) => {
    Name += `<span class="data-list">${element.name}</span>`;
    Email += `<span class="data-list">${element.email}</span>`;
    Joined += `<span class="data-list">${element.joined}</span>`;
  });

  names.innerHTML += Name;
  email.innerHTML += Email;
  joined.innerHTML += Joined;
})
