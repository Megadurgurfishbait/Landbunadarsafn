import React from 'react'
import { Flex, List, ListItem, Text } from '@chakra-ui/react'
import { useQuery } from 'react-query'
import Moment from 'moment'
import { Button } from '../../components/Shared'
import { fetchAPI } from '../../lib/api/getStrapiURL'

const Frettir: React.FC<{}> = () => {
  const [numberOfItems, setNumberOfItems] = React.useState<number>(10)

  // /users?_sort=email:DESC
  const fetchNews = () =>
    fetchAPI(`/articles?_limit=${numberOfItems}&_sort=date:DESC`)

  const { isLoading, isError, isFetching, error, data } = useQuery(
    ['forsidaNews', numberOfItems],
    () => fetchNews(),
    {
      keepPreviousData: true,
    }
  )

  Moment.locale('is')
  return (
    <>
      {isLoading ? (
        <div>Loading...</div>
      ) : isError ? (
        <div>Error: {error}</div>
      ) : (
        <Flex className="w-full mb-4 flex-col justify-between">
          <Text as="h1" className="text-center text-3xl my-10">
            Allar fréttir
          </Text>
          <List className="2xl:min-w-3/4  min-h-screen flex flex-col items-center">
            {data.map((frett) => (
              <ListItem className="flex w-full px-4 lg:w-8/12 lg:px-0 h-10 justify-between items-center">
                <Text as="h5" className="hidden md:block">
                  {Moment(frett.date.slice(0, 11)).format('L')}
                </Text>
                <Text
                  noOfLines={1}
                  className="flex-1 text-sm sm:text-base md:pl-10  md:text-lg xl:text-2xl "
                  as="h2"
                >
                  {frett.title}
                </Text>
                <Button href={`frettir/${frett.slug}`} Text="Skoða frétt" />
              </ListItem>
            ))}
            {isFetching && <span> Hleður...</span>}
            <Button
              Text="Sjá fleiri fréttir"
              onClick={() => setNumberOfItems((old) => old + 10)}
            />
          </List>
        </Flex>
      )}
    </>
  )
}

export default Frettir
