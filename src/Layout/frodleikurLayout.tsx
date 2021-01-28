import {
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
  Container,
  Text,
} from '@chakra-ui/react'
import {
  Arsskyrslur,
  Hvanneyri,
  Mjolkurskolinn,
  Stuttmyndir,
  UmSafnid,
  Vefrit,
  Velunnarar,
} from '../components'
import { useRouter } from 'next/router'
import React from 'react'
import { BackgroundText } from '../components/frodleikur/BackgroundText'
import { ParsedUrlQuery } from 'querystring'

const data = [
  {
    label: 'Ársskýrsla',
    content: <Arsskyrslur />,
  },
  {
    label: 'Um Safnið',
    content: <UmSafnid />,
  },
  {
    label: 'Stuttmyndir',
    content: <Stuttmyndir />,
  },
  {
    label: 'Hvanneyri',
    content: <Hvanneyri />,
  },
  {
    label: 'Velunnarar',
    content: <Velunnarar />,
  },
  {
    label: 'Mjólkurskólinn',
    content: <Mjolkurskolinn />,
  },
  {
    label: 'Vefrit',
    content: <Vefrit />,
  },
]

export const FrodleikurLayout: React.FC<{}> = () => {
  const [indexStatus, setIndexStatus] = React.useState<number>(NaN)

  const { query } = useRouter()

  function handleSlugChange(query: ParsedUrlQuery) {
    // TODO: Er hægt að gera þetta betur?
    switch (query.slug) {
      case 'hvanneyri':
        setIndexStatus(3)
        break
      case 'arsskyrslur':
        setIndexStatus(0)
        break
      case 'umsafnid':
        setIndexStatus(1)
        break
      case 'stuttmyndir':
        setIndexStatus(2)
        break
      case 'velunnarar':
        setIndexStatus(4)
        break
      case 'mjolkurskolinn':
        setIndexStatus(5)
        break
      default:
        setIndexStatus(1)
    }
  }

  React.useEffect(() => handleSlugChange(query))

  return (
    <>
      {!isNaN(indexStatus) && (
        <>
          <Container className="flex min-h-screen min-w-full flex-col items-center ">
            <BackgroundText>
              <Text
                letterSpacing={[1, 2]}
                as="h1"
                className="text-3xl text-center text-mainColor"
              >
                Fróðleikur
              </Text>
            </BackgroundText>
            <Tabs
              defaultIndex={indexStatus}
              className="flex flex-col  w-full md:px-10 lg:justify-center lg:m-0 lg:flex-row  lg:px-0 xl:max-w-screen-lg "
            >
              <TabList
                height="100%"
                className="bg-white flex-col sm:flex-row flex lg:flex-col justify-center mr-4 rounded shadow-xl "
              >
                {data.map((tab, index) => (
                  <Tab
                    className="m-1 sm:my-4 text-sm lg:text-base lg:p-2 lg:my-0"
                    key={index}
                  >
                    {tab.label}
                  </Tab>
                ))}
              </TabList>
              <TabPanels className="px-2 sm:px-4 py-8 shadow-xl bg-white">
                {data.map((tab, index) => (
                  <TabPanel className="focus:outline-none" key={index}>
                    {tab.content}
                  </TabPanel>
                ))}
              </TabPanels>
            </Tabs>
          </Container>
        </>
      )}
    </>
  )
}
