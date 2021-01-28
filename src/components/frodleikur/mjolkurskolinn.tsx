import { Box } from '@chakra-ui/react'
import React from 'react'
import { useQuery } from 'react-query'
import { getTextAsMarkup } from '../../lib/api/markdownFetch'
import { DangerousDiv } from '../Shared/DangerousDiv'

export const Mjolkurskolinn: React.FC<{}> = () => {
  const { isLoading, data } = useQuery('mjolkurskolinn', () =>
    getTextAsMarkup('mjolkurskolinn')
  )

  return (
    <Box className="focus:outline-none">
      {isLoading ? (
        <div>Loading</div>
      ) : (
        <DangerousDiv
          className="whitespace-pre-wrap"
          dangerouslySetInnerHTML={{
            __html: data,
          }}
        ></DangerousDiv>
      )}
    </Box>
  )
}
