import { inquirerMenu, pausa, leerInput, listaRates} from './helpers/inquirer.js';
import { guardarDB, leerDB } from './helpers/saveData.js';        
import { Exchanges } from "./models/exchanges.js";
import colors from 'colors';

console.clear();

const main = async () =>{
    let opt = '';
    const exchanges = new Exchanges();

    const data = leerDB();
    exchanges.cargarHistorial(data.historial);

    do{

        opt = await inquirerMenu();

        switch (opt) {
            case '1':
                const rates = await exchanges.getRates();
                console.log('#      PEN     USD     EUR     CNY     '.green);
                console.log('======================================='.green);
                const idx = `*.`;
                console.log(idx.green,'  ',rates["PEN"],'  ',rates["USD"],'  ',rates["EUR"],'  ',rates["CNY"]);
                exchanges.agregarHistorial(rates);
                guardarDB(exchanges.historial);
                break;
            case '2':
                if(exchanges.historial){

                    console.log('#      PEN     USD     EUR     CNY     '.green);
                    console.log('======================================='.green);
                    exchanges.historial.forEach( (rate, i) => {
                        
                        const idx = `${i+1}.`;
                        console.log(idx.green,'  ',rate["PEN"],'  ',rate["USD"],'  ',rate["EUR"],'  ',rate["CNY"]);
                    });
                }
                break;
            default:
                break;
        }
        await pausa();

    } while(opt != '0');   
}

main();