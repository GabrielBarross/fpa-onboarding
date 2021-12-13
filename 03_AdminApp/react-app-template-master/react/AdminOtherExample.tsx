import type { FC } from 'react'
import React from 'react'
import { Layout, PageBlock } from 'vtex.styleguide'

const AdminOtherExample: FC = () => {
  return (
    <Layout>
      <PageBlock
        title="Other Example"
        subtitle="Alguma explicação."
        variation="full"
      >
        <h1>Other Hello, World!</h1>
      </PageBlock>
    </Layout>
  )
}

export default AdminOtherExample
