type CoresObj = typeof coresObj;
type CoresKeys = keyof CoresObj;

const coresObj = {
    vermelho: 'red',
    verde: 'green',
    azul: 'blue',
    roxo: 'purple',
    amarelo: 'yellow',
    branco: 'white',
};

const translateColor = (color: CoresKeys, colors: CoresObj) => {
    return colors[color];
};

console.log(translateColor('vermelho', coresObj));
console.log(translateColor('azul', coresObj));
console.log(translateColor('branco', coresObj));
console.log(translateColor('verde', coresObj));
