/* eslint-disable no-restricted-globals */
import * as React from 'react'
import { Flex, Text } from '@chakra-ui/react'
import { useRouter } from 'next/router'
import { useQuery } from 'react-query'
import { getArticle } from '../../lib/api/frodleikurFetch'
import { DangerousDiv } from '../../components/Shared/DangerousDiv'
import { Button } from '../../components/Shared/Button'
import { CalendarIcon } from '@chakra-ui/icons'
import format from 'date-fns/format'

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
        <Flex className=" px-14 max-w-4xl flex-col mt-8 ">
          <Button
            onClick={() => history.back()}
            className="w-16 mb-5 2xl:hidden"
            noArrow
            Text="Til baka"
          ></Button>
          <Flex className="flex-col justify-center">
            <h1 className=" text-stylishBlack mb-2 leading-5 text-4xl">
              {data.title}
            </h1>
            <Flex align="center">
              <CalendarIcon className="mr-2" boxSize={12} color={'#8F0222'} />
              <Text
                as="h5"
                letterSpacing={1.7}
                className="text-secondary leading-4 opacity-85 text-xs py-4 font-bold"
              >
                {format(new Date(data.date), 'dd/MM/yyyy')}
              </Text>
            </Flex>
            <DangerousDiv
              className="mb-4 pl-0 ml-0"
              dangerouslySetInnerHTML={{
                __html: data.content,
              }}
            ></DangerousDiv>
          </Flex>
        </Flex>
      )}
    </>
  )
}

export default News
