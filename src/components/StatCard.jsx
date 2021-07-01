import React from 'react'
import { Card, Description, Grid } from '@geist-ui/react'

const StatCard = ({ stats }) => {
  const renderItem = ({ title, content }) => {
    return (
      <Grid lg={8} sm={12} key={content + title}>
        <Description title={title} content={content} />
      </Grid>
    )
  }

  if (!stats) return null

  return (
    <Card>
      <Grid.Container justify="space-between" wrap="wrap" gap={2}>
        {stats.map(renderItem)}
      </Grid.Container>
    </Card>
  )
}

export default StatCard
