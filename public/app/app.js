import { log } from './utils/promisse.helpers.js'
import './utils/array-helpers.js'
import { notasService as service } from './nota/nota.services.js'

document.querySelector('#myButton')
    .onclick = () =>
        service
        .somarItens('2143')
        .then(log)
        .catch(log)
    

