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
        <C.Hvanneyri />
        <C.Arsskyrslur />
        <C.UmSafnid />
        <C.Stuttmyndir />
        <C.Velunnarar />
        <C.Mjolkurskolinn />
      </Switch>
    </FrodleikurLayout>
  )
}

export default Frodleikur
