var cityName=document.getElementById('cityName')
var weatherContainer=document.getElementById('weatherContainer')
var submitBtn=document.getElementById('submitBtn')

var mainContainer=document.getElementById('mainContainer')


var APIkey="68efa0885519a6f01d76917c463ada68"

async function getWeatherData(){

    var cityName=document.getElementById('cityName').value
    console.log(cityName)
    let data=await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${APIkey}&units=metric`)
    let res=await data.json()
    console.log(res)
    console.log(res.main)

    // Object destructing:
    const{feels_like,temp_max,humidity}=res.main
    console.log(feels_like,temp_max,humidity)

    weatherContainer.innerHTML=`
        <div class="row g-0">
            <div class="col-md-4">
            <img src="https://cdn3.vectorstock.com/i/1000x1000/10/87/weather-forecast-vector-11181087.jpg" class="img-fluid rounded-start" alt="...">
            </div>
            <div class="col-md-8">
            <div class="card-body">
                <h5 class="card-title">Weather Details- ${cityName}</h5>
                <p class="card-text m-0 p-0"><small class="text-muted">Humidity:<i class="bi bi-thermometer-sun"></i> ${humidity}</small></p>
                <p class="card-text m-0 p-0"><small class="text-muted">Temp:<i class="bi bi-cloud-sun-fill"></i></small>  ${temp_max}</p>
                <p class="card-text m-0 p-0"><small class="text-muted">Feels Like: <i class="bi bi-thermometer-half"> ${feels_like}</i></small></p>
                <p class="card-text m-0 p-0"><small class="text-muted">Weather: ${res.weather[0].description.toUpperCase()}</small></p>
            </div>
            </div>
        </div>    
    `

    
}
// getWeatherData()
// submitBtn.addEventListener('click',getWeatherData)


// 