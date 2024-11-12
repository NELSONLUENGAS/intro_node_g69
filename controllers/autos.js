const { readFileSync, existsSync, writeFileSync, appendFileSync } = require('fs')

const fileExists = (pathname) => {
    return existsSync(pathname)
}

const SaveCar = (pathname, data) => {

    const prevAutos = GetCars(pathname)

    const newCars = [
        ...prevAutos,
        data
    ]

    writeFileSync(pathname, JSON.stringify(newCars, null, 3))
    console.log('Guardado con éxito 😅')
}


const GetCars = (pathname, codificacion = 'utf-8') => {

    let response = JSON.stringify([], null, 3)
    if (!fileExists(pathname)) {
        appendFileSync(pathname, response)
    } else {

        response = readFileSync(pathname, codificacion)
    }

    return JSON.parse(response)
}

const DeleteCars = (pathname, id) => {

    const newCars = GetCars(pathname).filter((car) => car.id != id)

    writeFileSync(pathname, JSON.stringify(newCars, null, 3))
    console.log('Eliminado con éxito: ', id)
}


module.exports = {
    SaveCar,
    GetCars,
    DeleteCars
}
