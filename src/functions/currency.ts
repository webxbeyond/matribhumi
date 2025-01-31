import {CurrencyData} from "../types/currency";

export async function currencyRate(currencySymbol: string = 'bdt'): Promise<CurrencyData<number>> {
    try {
        const url = `https://currency-rate-exchange-api.onrender.com/${currencySymbol}`;
        const response = await fetch(url);

        if (!response.ok) {
            throw new Error('Failed to fetch data');
        }

        const data: CurrencyData<number> = await response.json();
        return data;
    } catch (error) {
        console.error('Error fetching currency rate:', error);
        throw error;
    }
}