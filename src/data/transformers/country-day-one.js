export const transformCountryDayOne = dayOneInfo => {
  return dayOneInfo.map(({ Cases, Date }) => ({
    cases: Cases,
    date: Date,
  }))
}
