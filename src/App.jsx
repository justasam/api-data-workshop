import React, { useState, useEffect } from 'react'
import { Page, Spacer, Loading } from '@geist-ui/react'

import { Footer, Header, GlobalStats, CountryStats } from './components'

const MOCK_STATS = [
  {
    title: 'New Confirmed Cases',
    content: '10282',
  },
  {
    title: 'New Deaths',
    content: '5658',
  },
  {
    title: 'New Recoveries',
    content: '2002',
  },
  {
    title: 'Something else',
    content: '1234',
  },
]

const MOCK_COUNTRIES = ['Lithuania', 'Latvia', 'Estonia', 'Poland', 'Germany', 'Italy', 'Greece']

const App = () => {
  const [summary, setSummary] = useState(null)

  useEffect(() => {
    const fetchSummary = async () => {
      await new Promise(res => setTimeout(res, 500))

      setSummary({
        stats: MOCK_STATS,
        countries: MOCK_COUNTRIES,
      })
    }

    fetchSummary()
  }, [])

  return (
    <Page>
      <Spacer />
      <Header />
      <Page.Content>
        {summary?.stats && summary?.countries ? (
          <>
            <GlobalStats stats={summary.stats} />
            <Spacer />
            <CountryStats countries={summary.countries} />
          </>
        ) : (
          <Loading size="large">Loading info</Loading>
        )}
      </Page.Content>
      <Footer />
      <Spacer />
    </Page>
  )
}

export default App
