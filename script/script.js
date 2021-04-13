let site='http://api.openweathermap.org/data/2.5/weather?q=';
let api ='&appid=97ed1f14ca275898a3b204f879a4612d'
let output = document.getElementById('output')
const go = (e)=>{
    e.preventDefault()
    let input = document.getElementById('input')
    let url= site + input.value + api
    getOpenWeather(url)
    input.value=''

}
const getOpenWeather = async (url)=>{
    let req  = await fetch(url)
    let res = await req.json()
    console.log(res)
    output.innerHTML=''

    
    let name = document.createElement('p')
    let main = document.createElement('p')
    let wind = document.createElement('p')
    let humidity = document.createElement('p')

    
    
   
    name.innerHTML = res.name
    main.innerHTML = res.main.temp-275.15 + ' C'
    wind.innerHTML = res.wind.speed + ' m/s'
    humidity.innerHTML = res.humidity
    

    output.appendChild(name)
    output.appendChild(main)
    output.appendChild(wind)
    output.appendChild(humidity)
   
}               

// const renderOpenWeather =  (arr)=>{
//     arr.forEach(el => {
//     let name = document.createElement('p')
//     let main = document.createElement('p')
//     let timezone =document.createElement('p')
    
   
//     name.innerHTML = el.name
//     main.innerHTML = el.main
//     timezone.innerHTML = el.timezone

//     output.appendChild(name)
//     output.appendChild(main)
//     output.appendChild(timezone)
   

   
    
//     });
// }

  



