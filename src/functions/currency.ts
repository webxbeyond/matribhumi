import { CurrencyData } from '../types/currency';

/**
 * Gets the currency exchange rate for a given currency symbol against BDT.
 * @param currencySymbol - The currency symbol (e.g., 'usd', 'eur'). Defaults to 'bdt'.
 * @returns Promise resolving to currency data with exchange rates.
 * @throws Error if the API request fails.
 */
export async function currencyRate(
  currencySymbol: string = 'bdt'
): Promise<CurrencyData<number>> {
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
