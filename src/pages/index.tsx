import { Divider, Flex } from '@chakra-ui/react'
import { SectionFrettir, SectionFrodleikur } from '../components/Forsida'
import { getText } from '../lib/api/frodleikurFetch'
import { useQuery } from 'react-query'

import { SectionHeroImage } from '../components/Forsida/SectionHeroImage'

import { Information } from '../components'

export default function Home() {
  const { isSuccess, data } = useQuery('forsida', () => getText('forsida'))

  return (
    <>
      {isSuccess && (
        <Flex width="100%" flexDir="column" alignItems="center">
          <SectionHeroImage
            forsidumynd={data.Forsidumynd.url}
            subTitle={data.subTitle}
            Title={data.Title}
            icon={data.mynd.url}
          />
          <Divider h={200} />
          <SectionFrettir />
          <SectionFrodleikur />
          <Divider className="h-10" />
          <Information />
        </Flex>
      )}
    </>
  )
}
