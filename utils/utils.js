export function getLangagesCount(countriesData) {
  const allLanguages = countriesData
    .map((country) => country.languages)
    .flat();

  const languageCounts = allLanguages.reduce((acc, language) => {
    acc[language] = (acc[language] || 0) + 1;
    return acc;
  }, {});

  return languageCounts;
}

export function getTenMostSpokenLanguages(languageCounts) {
  const languageArray = Object.entries(languageCounts);
  const sortedLanguages = languageArray.sort((a, b) => b[1] - a[1]);
  const sortedTenLanguages = sortedLanguages.slice(0, 10);

  return sortedTenLanguages;
}

export function getTopTenCountries(countriesData) {
  const sortedPopulatedCountries = countriesData.sort(
    (a, b) => b.population - a.population,
  );
  const topTenCountries = sortedPopulatedCountries.slice(0, 10);

  return topTenCountries;
}
