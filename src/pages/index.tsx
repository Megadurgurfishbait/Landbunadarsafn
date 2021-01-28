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
        <div className="flex w-full flex-col items-center">
          <SectionHeroImage
            forsidumynd={data.Forsidumynd.url}
            subTitle={data.subTitle}
            Title={data.Title}
            icon={data.mynd.url}
          />
          <div className="h-48" />
          <SectionFrettir />
          <SectionFrodleikur />
          <div className="h-10" />
          <Information />
        </div>
      )}
    </>
  )
}
