require('dotenv').config()
const axios = require("axios")

const { PROTOCOL, BASE_URL, APPID, LANGUAGE, UNITS, Q } = process.env
const url = `${PROTOCOL}://${BASE_URL}?appid=${APPID}&units=${UNITS}&lang=${LANGUAGE}&q=${Q}`

axios.get(url)
.then(result => {
    console.log(result.data)
    return result.data
})
.then(result =>{
    console.log(result.cnt)
    return result
})
.then(result => {
    return result.list
})
.then(result => {
    for(let previsao of result){
        console.log(`
        ${new Date(+previsao.dt*1000).toLocaleString()},
        Min: ${previsao.main.temp_min}\u00B0C,
        Max: ${previsao.main.temp_max}\u00B0C,
        Min: ${previsao.main.humidity}%,
        ${previsao.weather[0].description}
        `)
    }
})
.then(result => {
    //exibir a quantidade de previsões que tem percepcão humana de temperatura acima de 30 graus
    //(lits.dt.feels_like)
})