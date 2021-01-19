import * as React from 'react'
import { News } from '../../components'
import { Layout } from '../../Layout'

interface IFrettirProps {}

const Frettir: React.FunctionComponent<IFrettirProps> = (props) => {
  return (
    <Layout>
      <News />
    </Layout>
  )
}

export default Frettir
