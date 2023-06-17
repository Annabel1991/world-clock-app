function updateTime(){

    //New York
    let newYorkElement = document.querySelector("#new-york");
    if (newYorkElement){
        let newYorkDateElement = newYorkElement.querySelector(".date");
        let newYorkTimeElement = newYorkElement.querySelector(".time");
        let newYorkTime = moment().tz("America/New_York");

        newYorkDateElement.textContent = newYorkTime.format("MMMM Do YYYY");
        newYorkTimeElement.textContent = newYorkTime.format("h:mm:ss [<small>]A[</small>]");
    }

    //Kyiv
    let kyivElement = document.querySelector("#kyiv");
    if (kyivElement){
        let kyivDateElement = kyivElement.querySelector(".date");
        let kyivTimeElement = kyivElement.querySelector(".time");
        let kyivTime = moment().tz("Europe/Kyiv");

        kyivDateElement.textContent = kyivTime.format("MMMM Do YYYY");
        kyivTimeElement.textContent = kyivTime.format("h:mm:ss [<small>]A[</small>]");
    }

    //Tokyo
    let tokyoElement = document.querySelector("#tokyo");
    if (tokyoElement){
        let tokyoDateElement = tokyoElement.querySelector(".date");
        let tokyoTimeElement = tokyoElement.querySelector(".time");
        let tokyoTime = moment().tz("Asia/Tokyo");

        tokyoDateElement.innerHTML = tokyoTime.format("MMMM Do YYYY");
        tokyoTimeElement.innerHTML = tokyoTime.format("h:mm:ss [<small>]A[</small>]");
    }
}

function updateCity(event) {
    let cityTimezone = event.target.value;
    if (cityTimezone === "current") {
      cityTimezone = moment.tz.guess();
    }
    let cityName = cityTimezone.replace("_", " ").split("/")[1];
    let cityTime = moment().tz(cityTimezone);
    let citiesElement = document.querySelector("#cities");
    citiesElement.innerHTML = 
    <div class="city">
    <div>
        <h2>${cityName}</h2>
        <div class="date">
            ${cityTime.format("MMMM Do YYYY")}
        </div>
    </div>
    
    <div class="time">
    ${cityTime.format("h:mm:ss [<small>]A[</small>]")}
    </div>
</div>
<a href="/">Return to Homepage</a>
    
}
  
  updateCity();
  setInterval(updateCity, 1000);
  
  let citiesSelectElement = document.querySelector("#city");
  
  citiesSelectElement.addEventListener("change", updateCity);