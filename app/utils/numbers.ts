import numbro from "numbro";

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

export const numberCurrency = (nb: number, currencySymbol: string = "$") =>
  numbro(nb).formatCurrency({
    mantissa: 4,
    trimMantissa: true,
    optionalMantissa: true,
    spaceSeparated: true,
    thousandSeparated: true,
    currencySymbol,
  });

export const numberPercentage = (nb: number) =>
  numbro(nb).format({
    output: "percent",
    mantissa: 2,
    spaceSeparated: true,
  });
