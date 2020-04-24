export const formatCurrency = (amount = 0, languageId = 'en-GB', currencyId = 'EUR', decimals = 0) => 
  Math.round(amount).toLocaleString(languageId, {
    style: 'currency',
    currency: currencyId,
    minimumFractionDigits: decimals,
    maximumFractionDigits: decimals
  });
