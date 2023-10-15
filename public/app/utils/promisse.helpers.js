// ambiente ES6
const verificarStatus = res => res.ok ? res.json() : Promise.reject(res.statusText)


const log = param => {
    console.log(param)
    return param
}


export {
    verificarStatus,
    log
}
