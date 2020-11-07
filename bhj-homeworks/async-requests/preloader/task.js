let xhr = new XMLHttpRequest();
xhr.open("GET", "https://netology-slow-rest.herokuapp.com/");
xhr.send();
xhr.responseType = "json";
xhr.onreadystatechange = ()=>{

if (xhr.status == 200 & xhr.readyState == 4) {
    document.querySelector(".loader_active").classList.remove("loader_active");

    let item = document.querySelector(".item");
    let valute = xhr.response.response.Valute;

    for (prop in valute) {
        let itemCode = valute[prop].CharCode;
        let itemValue = valute[prop].Value;
        let itemCurrency = valute[prop].Name;

        item.insertAdjacentHTML("beforebegin", `<div class="item">
                                                <div class=item__code>${itemCode}</div>
                                                <div class="item__value">${itemValue}</div>
                                                <div class="item__currensy">${itemCurrency}</div>
                                                </div>`)
    }
}
}