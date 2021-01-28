import { Box } from '@chakra-ui/react'
import React from 'react'
import { useQuery } from 'react-query'
import { getText } from '../../lib/api/frodleikurFetch'
import { Text } from '../Shared'

export const UmSafnid: React.FC<{}> = () => {
  const { isLoading, data } = useQuery('UmSafnid', () => getText('um-safnids'))

  return (
    <Box>
      {isLoading ? (
        <div>loading</div>
      ) : (
        <>
          <Text Variant="h1" text="Um Safnið" />
          {data.map((v) => (
            <>
              <Text Variant="h3" text={v.title} className="text-center" />
              <Text Variant="p" text={v.Text} />
            </>
          ))}
        </>
      )}
    </Box>
  )
}
