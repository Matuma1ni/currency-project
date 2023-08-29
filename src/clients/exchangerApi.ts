export const BASE_CURRENCIES = ['EUR']
export const currencies = ['USD', 'EUR', 'GBP']
const API_KEY = '05873d02432fc366d8771321d2fd052e'


interface CurrencyResponce {
    "success": boolean;
    "timestamp": number;
    "base": string;
    "date": string;
    "rates": {currency: number}
}

export async function getRate(currency: string): Promise<number> {
    const requestOptions = {
        method: 'GET'
    }

    /*const queryParams = {
            access_key: API_KEY,
            base: 'EUR',
            symbols: currency
    } */

    const response = await fetch(`http://api.exchangeratesapi.io/v1/latest?access_key=05873d02432fc366d8771321d2fd052e&base=EUR&symbols=${currency}` /*+ new URLSearchParams(queryParams)*/, requestOptions); 
    const responseObject = await response.json() as unknown as CurrencyResponce;
    console.log(responseObject);
    console.log(responseObject.success);
    if (responseObject.success === true) {
        return responseObject.rates.currency
    } else {
        throw new Error("Something went wrong")
    }
}
