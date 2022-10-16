let currentLocale: string;
let formatter: Intl.NumberFormat;

export const moneyFormatter = (value: string | number) => {
  const lang = navigator.language;
  const locale = lang.includes('-') ? lang : `${lang}-${lang.toUpperCase()}`;

  if (currentLocale !== locale || formatter === undefined) {
    currentLocale = locale;

    formatter = new Intl.NumberFormat(locale, {
      style: 'currency',
      currency: 'EUR',
    });
  }

  if (typeof value === 'string') {
    return formatter.format(Number.parseFloat(value));
  }

  return formatter.format(value);
};
