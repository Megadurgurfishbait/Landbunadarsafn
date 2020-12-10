import * as React from 'react'
import { UmSafnid } from '../../components/frodleikur'
import { Layout } from '../../Layout'

interface IIndexProps {}

const Index: React.FunctionComponent<IIndexProps> = (props) => (
  <Layout className="bg-black text-red-400">
    <UmSafnid />
  </Layout>
)

export default Index
