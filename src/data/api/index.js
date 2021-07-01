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
  try {
    const dayOneInfo = await fetch(`${BASE_URL}/dayone/country/${country}/status/${type}`).then(
      resp => resp.json(),
    )

    return dayOneInfo
  } catch (error) {
    console.error(`error getting day one info: ${error}`)

    return null
  }
}
