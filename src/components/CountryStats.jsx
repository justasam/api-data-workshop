import React, { useEffect, useState } from 'react'
import { Grid, Text, Card, AutoComplete, Loading, Radio } from '@geist-ui/react'

import { getCountryDayOne } from '../data/api'
import { transformCountryDayOne } from '../data/transformers'
import Chart from './Chart'

const generateCountryOptions = countries => {
  if (!countries) return []

  return countries.map(country => ({
    label: country.charAt(0).toUpperCase() + country.slice(1),
    value: country,
  }))
}

const CountryStats = ({ countries }) => {
  const [selectedType, setSelectedType] = useState('confirmed')
  const [selectedCountry, setSelectedCountry] = useState('')
  const [filteredOptions, setFilteredOptions] = useState(generateCountryOptions(countries || []))
  const [chartData, setChartData] = useState([])
  const [loading, setLoading] = useState(false)

  const handleCountrySelect = value => {
    setSelectedCountry(value)
  }

  const handleSearch = value => {
    const filteredCountries = countries.filter(country =>
      country.toUpperCase().startsWith(value.toUpperCase()),
    )

    setFilteredOptions(generateCountryOptions(filteredCountries))
  }

  useEffect(() => {
    if (!selectedCountry) return

    const fetchData = async () => {
      setLoading(true)

      const countryDayOne = await getCountryDayOne(selectedCountry, selectedType)
      const transformedDayOne = await transformCountryDayOne(countryDayOne)

      setChartData(transformedDayOne)
      setLoading(false)
    }

    fetchData()
  }, [selectedCountry, selectedType])

  if (!countries) return null

  return (
    <Card hoverable>
      <Text h4>Stats based on country</Text>
      <Grid.Container>
        <Grid.Container lg={8} sm={12} justify="center" alignContent="space-between">
          <AutoComplete
            placeholder="Select country..."
            width="100%"
            options={filteredOptions}
            disableFreeSolo
            onSelect={handleCountrySelect}
            onSearch={handleSearch}
          />
          <Radio.Group value={selectedType} onChange={setSelectedType}>
            <Radio value="confirmed">Confirmed</Radio>
            <Radio value="recovered">Recovered</Radio>
            <Radio value="deaths">Deaths</Radio>
          </Radio.Group>
        </Grid.Container>
        <Grid lg={16} alignItems="center">
          {!loading ? <Chart data={chartData} /> : <Loading>Getting chart data</Loading>}
        </Grid>
      </Grid.Container>
    </Card>
  )
}

export default CountryStats
