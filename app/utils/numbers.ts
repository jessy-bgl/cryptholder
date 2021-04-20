import numbro from "numbro";

/**
 * Example : "$ 1.04 t"
 */
export const numberCurrencyAverage = (
  nb: number,
  currencySymbol: string = "$"
) =>
  numbro(nb).formatCurrency({
    average: true,
    mantissa: 2,
    optionalMantissa: true,
    spaceSeparated: true,
    currencySymbol,
  });

/**
 * Example : "$ 55,3918"
 */
export const numberCurrency = (nb: number, currencySymbol: string = "$") =>
  numbro(nb).formatCurrency({
    mantissa: 4,
    trimMantissa: true,
    optionalMantissa: true,
    spaceSeparated: true,
    thousandSeparated: true,
    currencySymbol,
  });

/**
 * Example : "1.37 %"
 */
export const numberPercentage = (nb: number) =>
  numbro(nb).format({
    output: "percent",
    mantissa: 2,
    spaceSeparated: true,
  });
