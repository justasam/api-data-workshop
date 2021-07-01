import React from 'react'
import { Grid, Image, Text, Card } from '@geist-ui/react'

import StatCard from './StatCard'
import CovidImage from '../../assets/images/covid.png'

const GlobalStats = ({ stats }) => {
  if (!stats) return null

  return (
    <Card hoverable>
      <Text h4>Global Statistics</Text>
      <Grid.Container>
        <Grid lg={8} sm={12}>
          <Image src={CovidImage} />
        </Grid>
        <Grid lg={16} alignItems="center">
          <StatCard stats={stats} />
        </Grid>
      </Grid.Container>
    </Card>
  )
}

export default GlobalStats
