import inquirer from 'inquirer'; 
import colors from 'colors';


export const preguntas = [{
    type: 'list',
    name: 'opcion',
    message: '¿Qué deseas hacer?',
    choices: [{value: '1',name:`${'1.'.green} Consultar Tipo de Cambio`},
              {value: '2',name:`${'2.'.green} Historial Tipos de Cambio`},
              {value: '0',name:`${'0.'.green} Salir`}
    ]
}
];

export const inquirerMenu = async() => {

    console.clear();
    console.log('==============================='.green);
    console.log('     Seleccione una opción'.green);
    console.log('===============================\n'.green);

    const {opcion} = await inquirer.prompt(preguntas);

    return opcion;
}


export const pausa = async() => {
    const question = [{
        type:'input',
        name:'enter',
        message:`Presiones ${ 'ENTER'.yellow } para continuar.`
    }];

    console.log('\n');
    await inquirer.prompt(question);
}

export const leerInput = async (message) => {
    const question = [{
        type: 'input',
        name: 'desc',
        message,
        validate(value){
            if(value.length === 0){
                return 'Por favor, ingrese un valor.';
            }
            return true;
        }
    }];

    const {desc} = await inquirer.prompt(question);
    return desc;
}

export const listaRates = async (rates = []) => {
    const choices = rates.map( (rate, i) => {
        const idx = `${i+1}.`.green;
        return {
            value: rate.id,
            //name:  `${idx} ${lugar.nombre}`
        };
    });

    choices.unshift({
        value: '0',
        name:  `${'0.'.green} Cancelar`
    });
    
    const preguntas = [{
        type: 'list',
        name: 'id',
        message: 'Seleccione lugar:',
        choices
    }
    ];

    const {id} = await inquirer.prompt(preguntas);

    return id;
    
}
