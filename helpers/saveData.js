import fs from 'fs';

const archivo = './db/data.json';    

export const guardarDB = (data) => {

    const payload = {
        historial: data
    }

    fs.writeFileSync(archivo, JSON.stringify(payload));
}

export const leerDB = () => {
    if(!fs.existsSync(archivo)){
        return null;
    }
    console.log(archivo);
    const info = fs.readFileSync(archivo, {encoding: 'utf-8'});
    if(info){
        const data = JSON.parse(info);
        return data;
    }
    else{
        return [];
    }

}