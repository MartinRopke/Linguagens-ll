require('dotenv').config()

//Desestruturar objeto

const { PROTOCOL, BASE_URL, APPID, LANGUAGE, UNITS, Q } = process.env
const url = `${PROTOCOL}://${BASE_URL}?appid=${APPID}&units=${UNITS}&lang=${LANGUAGE}&q=${Q}`

console.log(url)