import { Container, List, ListItem } from '@chakra-ui/react'
import React from 'react'

import { useQuery } from 'react-query'
import { getText } from '../../lib/api/frodleikurFetch'
import { Text } from '../Shared'

export const Velunnarar: React.FC<{}> = () => {
  const { isLoading, data } = useQuery('velunnarar', () =>
    getText('velunnarars')
  )

  return (
    <Container>
      {isLoading ? (
        <div>Loading</div>
      ) : (
        <>
          <Text Variant="h1" text="Velunnarar" className="mb-2" />
          <List>
            {data.map((v) => (
              <ListItem>{v.Texti}</ListItem>
            ))}
          </List>
        </>
      )}
    </Container>
  )
}
