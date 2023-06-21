type CoresObj = {
    vermelho: string;
    azul: string;
    verde: string;
};

const coresObj: CoresObj = {
    vermelho: 'red',
    verde: 'green',
    azul: 'blue',
};

const translateColor = (color: 'vermelho' | 'verde' | 'azul', colors: CoresObj) => {
    return colors[color];
};

console.log(translateColor('vermelho', coresObj));
