import React, { useState, useEffect } from 'react'
import { Page, Spacer, Loading } from '@geist-ui/react'

import { Footer, Header, GlobalStats, CountryStats } from './components'
import { getSummary } from './data/api'
import { transformSummary } from './data/transformers'

const App = () => {
  const [summary, setSummary] = useState(null)

  useEffect(() => {
    const fetchSummary = async () => {
      const summaryResp = await getSummary()

      setSummary(transformSummary(summaryResp))
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
