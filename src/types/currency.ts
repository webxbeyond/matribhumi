export type CurrencyRates<T> = {
  date: string;
  bdt: Record<string, T>;
};

export type CurrencyData<T> = {
  currencyCode: string;
  currencyName: string;
  currencySymbol: string;
  countryName: string;
  countryCode: string;
  flagImage: string;
  rates: CurrencyRates<T>;
};
