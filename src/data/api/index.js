const BASE_URL = `https://api.covid19api.com`
const REQUEST_OPTIONS = {
  method: 'GET',
  redirect: 'follow',
}

export const getSummary = async () => {
  try {
    const summary = await fetch(`${BASE_URL}/summary`, REQUEST_OPTIONS).then(resp => resp.json())

    return summary
  } catch (error) {
    console.error(`error getting summary: ${error}`)

    return null
  }
}

export const getCountryDayOne = async (country, type) => {
  await new Promise(res => setTimeout(res, 500))

  return [
    {
      Country: 'Switzerland',
      CountryCode: 'CH',
      Lat: '46.82',
      Lon: '8.23',
      cases: 1,
      Status: 'confirmed',
      Date: '2020-02-25T00:00:00Z',
    },
    {
      Country: 'Switzerland',
      CountryCode: 'CH',
      Lat: '46.82',
      Lon: '8.23',
      cases: 1,
      Status: 'confirmed',
      Date: '2020-02-26T00:00:00Z',
    },
    {
      Country: 'Switzerland',
      CountryCode: 'CH',
      Lat: '46.82',
      Lon: '8.23',
      cases: 8,
      Status: 'confirmed',
      Date: '2020-02-27T00:00:00Z',
    },
    {
      Country: 'Switzerland',
      CountryCode: 'CH',
      Lat: '46.82',
      Lon: '8.23',
      cases: 8,
      Status: 'confirmed',
      Date: '2020-02-28T00:00:00Z',
    },
  ]
}
