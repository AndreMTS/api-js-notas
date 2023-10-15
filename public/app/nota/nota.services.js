import { verificarStatus } from '../utils/promisse.helpers.js';

const API = "http://localhost:3000/notas"

const somarItens = code => notas => notas
    .$flatMap(nota => nota.itens)
    .filter(item => item.codigo == code)
    .reduce((total, item) => total + item.valor, 0)

export const notasService = {

    async listAll() {
        const res = await fetch(API);
        return verificarStatus(res);
    },
    somarItens(code) {
        return this.listAll().then(somarItens(code))
    }

}