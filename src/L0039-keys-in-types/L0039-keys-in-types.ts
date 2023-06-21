type Vehicle = {
    brand: string;
    model: string;
    year: number;
};

type Carro = {
    marca: Vehicle['brand'];
    modelo: Vehicle['model'];
    ano: Vehicle['year'];
};

const carro: Carro = {
    marca: 'Ford',
    ano: 2020,
    modelo: 'Mustang',
};

console.log(carro);
