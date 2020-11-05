let xhr = new XMLHttpRequest();
xhr.open("GET", "https://netology-slow-rest.herokuapp.com/");
xhr.setRequestHeader("content-type","application/json");
xhr.send();
xhr.responseType = "json";
let items = document.querySelector(".item");
console.log(items)
xhr.onreadystatechange = ()=>{items.innerHTML += xhr.response;}
