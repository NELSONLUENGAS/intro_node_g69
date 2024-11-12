const { SaveCar, GetCars, DeleteCars } = require("./controllers/autos")

const autos = [
    {
        id: 1,
        marca: 'Susuki',
        modelo: 'Kicks',
    },
    {
        id: 2,
        marca: 'Toyota',
        modelo: 'Corola',
    },
    {
        id: 3,
        marca: 'GAC',
        modelo: 'GS4',
    }
]


const newCar = {
    id: 5,
    marca: 'Mazda',
    modelo: 'CX30'
}

// autos.forEach((auto) => {
//     SaveCar('./data/autos.json', auto)
// })
// SaveCar('./data/autos.json', newCar)
// console.log(GetCars('./data/autos.json'))
DeleteCars('./data/autos.json', 5)



