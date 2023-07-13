import axios from 'axios';

export class Exchanges {

    historial =  [];

    constructor() {
        this.historial = [];
    }


    async getRates(){

        try {
            const instance = axios.create({

                baseURL: 'https://v6.exchangerate-api.com/v6/6515c9ddf44e2844523b4d7c/latest/USD'
            });

            const resp = await instance.get();
            return resp.data.conversion_rates;
            /*return resp.data.features.map( lugar => ({
                id: lugar.id,
                nombre: lugar.place_name,
                lng: lugar.center[0],
                lat: lugar.center[1]

            }));*/
            
        } catch (error) {
            return [];
        }    
    }

    agregarHistorial = (rate) => {
        this.historial.unshift(rate);
    }

    cargarHistorial = (data) => {
        this.historial = data;
    }
}
//export default Exchanges;