import moment from "moment";

export const functionDate = (data:string) => {
        const dataMoment = moment(data, 'DD/MM/YYYY HH:mm:ss');
        const diferencaDias = moment().diff(dataMoment, 'days');
        const resultado = diferencaDias === 1 ? '1 dia atrás' : diferencaDias + ' dias atrás';
        return resultado;
    }

