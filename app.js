let inp = document.querySelector("input");
let btn = document.querySelector("button");

let box3 = document.querySelector(".box3");
let box4 = document.querySelector(".box4");

btn.addEventListener("click", async () => {
  let city = inp.value;
  let weatherData = await getWeather(city);
  todayData(weatherData);
  forecastData(weatherData);
  inp.innertext = "";
});

function todayData(weatherData) {
  let h3 = document.querySelector("h3");
  h3.innerText = Date();
  box3.style.display = "block";
  let ul1 = document.querySelector(".b3-ul");
  ul1.innerText = "";
  let li1 = document.createElement("li");
  let li2 = document.createElement("li");
  let li3 = document.createElement("li");

  let i1 = document.createElement("i");
  i1.className = "fa-solid fa-temperature-three-quarters";
  li1.innerText = " " + weatherData.temperature;

  li1.prepend(i1);

  li2.innerText = "Wind " + weatherData.wind;
  li3.innerText = "Description " + weatherData.description;
  ul1.appendChild(li1);
  ul1.appendChild(li2);
  ul1.appendChild(li3);
}

function forecastData(weatherData) {
  box4.style.display = "block";
  let p = document.querySelector("p");
  p.innerText = "";
  let wts = weatherData.forecast;
  console.log(wts[0]);
  for (wt of wts) {
    let ul2 = document.createElement("ul");

    let i2 = document.createElement("i");

    let li1 = document.createElement("li");
    let li2 = document.createElement("li");
    let li3 = document.createElement("li");

    i2.className = "fa-solid fa-temperature-three-quarters";

    li1.innerText = "Day " + wt.day;
    li2.innerText = " " + wt.temperature;
    li2.prepend(i2);
    li3.innerText = "Wind " + wt.wind;
    ul2.appendChild(li1);
    ul2.appendChild(li2);
    ul2.appendChild(li3);
    p.appendChild(ul2);
  }
}

let url = "https://goweather.herokuapp.com/weather/";

async function getWeather(city) {
  try {
    let res = await axios.get(url + city);
    return res.data;
  } catch (e) {
    console.log("Error: ", e);
    return "Error !";
  }
}
