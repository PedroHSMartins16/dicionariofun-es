
function calorSensivel(massa, calor_esp, temperatura_antes, temperatura_depois) {
    let variacao = temperatura_depois - temperatura_antes;
    return "Q =" + massa*calor_esp*variacao
}


function celsiusFar(tCelsiusEntrada) {
    let farDefinido = 1.8, farMin = 32;
    return farDefinido*tCelsiusEntrada + 32

}


function farCelsius(tFarenheitEntrada) {
    let farDefinido = 1.8, farMin = 32;
    return (tFarenheitEntrada - 32)/1.8
}


function celsiusKelvin(tCelsiusEntrada) {
    let kelvinDefinido = 273.15;
    return tCelsiusEntrada + kelvinDefinido
}


function kelvinCelsius(tKelvinEntrada) {
    let celsiusDefinido = 273.15;
    return tKelvinEntrada - celsiusDefinido
}


function velocidadeMedia(distanciaTotal, intervaloTempo) {
   return distanciaTotal/intervaloTempo 
}


function deslocamentoHorario(posicI, velocidade, intervaloTempo) {
        return posicI + velocidade * intervaloTempo 
}


function aceleracaoMedia(variaVelocidade, intervaloTempo) {
    return variaVelocidade/intervaloTempo
}


function torricelli(aceleracao, distanciaTotal, velocidadeI) {
    return Math.sqrt(velocidadeI**2 + 2*aceleracao*distanciaTotal)
}


function forca(massa, aceleracao) {
    return massa*aceleracao
}