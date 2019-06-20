# Fisica.help
#### Descrição
A biblioteca de funções **Fisica.help** abrange funções de Transformações Termométricas, Cinemática e Dinâmica. **Use massa em g e medidas proporcionais.**

#### Funções
##### calorSensivel(massa, calor_esp, temperatura_antes, temperatura_depois)
Calcula a quantidade de calor sensível multiplicando **massa * calor_esp * variação_temperatura**
```
calorSensivel(50, 0.23, 20, 25) >> 57.5
```

##### celsiusFar(tCelsiusEntrada)
Converte temperatura em ºC para ºF por meio da fórmula **1,8 * temperatura_em_celsius + 32**
```
celsiusFar(36) >> 96.8
```

##### farCelsius(tFarenheitEntrada)
Converte temperatura em ºF para ºC por meio da fórmula **temperatura_em_farenheit - 32)/1.8**
```
farCelsius(77) >> 25
```

##### celsiusKelvin(tCelsiusEntrada)
Converte temperatura em ºC para K somando **temperatura_em_celsius + 273,15**
```
celsiusKelvin(34) >> 307.15
```
##### kelvinCelsius(tKelvinEntrada)
Converte temperatura em K para ºC, subtraindo **temperatura_em_kelvin - 273,15**
```
kelvinCelsius(330) >> 56.85
```
##### velocidadeMedia(distanciaTotal, intervaloTempo)
Calcula a velocidade média, dividindo **distancia_total/intervalo_tempo**
```
velocidadeMedia(200, 10) >> 20
```
##### deslocamentoHorario(posicI, velocidade, intervaloTempo)
Dá o valor de deslocamento horário por meio da fórmula **posicao_inicial + velocidade + intervalo_tempo**
```
deslocamentoHorario(0, 10, 20) >> 200
```
##### aceleracaoMedia(variaVelocidade, intervaloTempo)
Calcula a aceleração média, dividindo **variacao_velocidade/intervalo_tempo**
```
aceleracaoMedia(40, 20) >> 2
```
##### torricelli(aceleracao, distanciaTotal, velocidadeI)
Essa função representa a formula de Torricelli, que é calculada por **velocidade_inicial² + 2 * aceleracao * distanciaTotal**
```
torricelli(2, 300, 10) >> 36.05
```
##### forca(massa, aceleracao)
Basicamente a 2ª Lei de Newton. Dá o valor de força por meio de **massa * aceleracao**
```
forca(20, 3) >> 60
```

#### Integrantes
- Heitor
- Rafael
- Stalin