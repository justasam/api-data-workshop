const transformGlobalInfo = info => {
  return Object.keys(info).map(key => ({
    title: key.split(/(?=[A-Z])/).join(' '), // splits on capital letters
    content: info[key],
  }))
}

const transformCountries = countries => countries.map(({ Country }) => Country)

export const transformSummary = summary => {
  if (!summary.Global || !summary.Countries) return null

  return {
    stats: transformGlobalInfo(summary.Global),
    countries: transformCountries(summary.Countries),
  }
}
