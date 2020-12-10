import * as React from 'react'
import { useRouter } from 'next/router'

import * as C from '../../components/frodleikur'
import { Switch } from '../../components/'
import { Layout } from '../../Layout'

const Frodleikur: React.FunctionComponent<{}> = (): JSX.Element => {
  const router = useRouter()
  const { slug } = router.query

  if (slug === undefined) return <Layout>loading</Layout>
  return (
    <Layout className="p-4">
      <Switch test={slug as string}>
        <C.Hvanneyri value="hvanneyri" />
        <C.Arsskyrslur value="arsskyrslur" />
        <C.UmSafnid value="umsafnid" />
        <C.Stuttmyndir value="stuttmyndir" />
        <C.Velunnarar value="velunnarar" />
      </Switch>
    </Layout>
  )
}

export default Frodleikur
