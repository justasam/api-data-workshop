import React from 'react'
import { Page, Text, Divider, Grid, Link } from '@geist-ui/react'

const Footer = () => {
  return (
    <Page.Footer>
      <Divider />
      <Grid.Container justify="space-between">
        <Text small type="secondary">
          <Text b>API & Data workshop</Text> 2021
        </Text>
        <Link href="#" block>
          View on GitHub
        </Link>
      </Grid.Container>
    </Page.Footer>
  )
}

export default Footer
