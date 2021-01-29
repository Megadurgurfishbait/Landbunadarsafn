/* eslint-disable no-restricted-globals */
import * as React from 'react'
import { Divider, Text } from '@chakra-ui/react'
import { useRouter } from 'next/router'
import { useQuery } from 'react-query'
import format from 'date-fns/format'
import { CalendarIcon } from '@chakra-ui/icons'
import { getArticle } from '../../lib/api/markdownFetch'
import { DangerousDiv } from '../../components/Shared/DangerousDiv'
import { Button } from '../../components/Shared/Button'

interface NewsProps {
  title?: string
  article?: string
  date?: string
}

export const News: React.FC<NewsProps> = () => {
  const router = useRouter()

  // Nota PId til að í fyrsta parameter svo hægt séð að nota cache
  const { isLoading, isSuccess, data } = useQuery(`${router.query.pid}`, () =>
    getArticle(router.query as any)
  )

  if (isLoading) return <div>Hleður</div>

  return (
    <>
      {!isSuccess ? (
        <div>loading</div>
      ) : (
        <div className="flex px-14 max-w-4xl flex-col mt-8 ">
          <div className="flex flex-col items-start">
            <Button
              onClick={() => history.back()}
              className="w-16 mb-5 2xl:hidden text-left"
              noArrow
              Text="Til baka"
            ></Button>
            <Divider orientation="horizontal" className="h-5" />
          </div>
          <div className="flex flex-col justify-center">
            <h1 className=" text-stylishBlack mb-2 leading-5 text-2xl font-semibold sm:text-3xl lg:text-4xl">
              {data.title}
            </h1>
            <div className="flex items-center">
              <CalendarIcon className="mr-2" boxSize={12} color={'#8F0222'} />
              <Text
                as="h5"
                letterSpacing={1.7}
                className="text-secondary leading-4 opacity-85 text-xs py-4 font-bold"
              >
                {format(new Date(data.date), 'dd/MM/yyyy')}
              </Text>
            </div>
            <DangerousDiv
              className="mb-4 pl-0 ml-0"
              dangerouslySetInnerHTML={{
                __html: data.content,
              }}
            ></DangerousDiv>
          </div>
        </div>
      )}
    </>
  )
}

export default News
