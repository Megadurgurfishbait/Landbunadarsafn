import * as React from 'react'
import { useRouter } from 'next/router'

import * as C from '../../components/frodleikur'
import { Switch } from '../../components/'
import { Layout } from '../../Layout'
import { FrodleikurLayout } from '../../Layout/frodleikurLayout'

const Frodleikur: React.FunctionComponent<{}> = (): JSX.Element => {
  const router = useRouter()
  const { slug } = router.query

  if (slug === undefined) return <Layout>Hleður...</Layout>
  return (
    <FrodleikurLayout>
      <Switch test={slug as string}>
        <C.Hvanneyri path="hvanneyri" />
        <C.Arsskyrslur path="arsskyrslur" />
        <C.UmSafnid path="umsafnid" />
        <C.Stuttmyndir path="stuttmyndir" />
        <C.Velunnarar path="velunnarar" />
        <C.Mjolkurskolinn path="mjolkurskolinn" />
      </Switch>
    </FrodleikurLayout>
  )
}

export default Frodleikur
