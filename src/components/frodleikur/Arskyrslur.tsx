import { useQuery } from 'react-query'
import { getText } from '../../lib/api/frodleikurFetch'
import { Text } from '../Shared/Text'
import { Container, List, ListItem } from '@chakra-ui/react'

export const Arsskyrslur: React.FC<{}> = () => {
  const { isLoading, data } = useQuery('arsskyrslur', () =>
    getText('arsskyrslur')
  )

  return (
    <Container>
      {isLoading ? (
        <div>loading</div>
      ) : (
        <Container>
          <Text Variant="h1" text="Ársskýrslur" />
          <List spacing={4}>
            {data.Skyrslur.map((v) => (
              <ListItem>
                <a href={v.url} target="_bank">
                  {v.caption}
                </a>
              </ListItem>
            ))}
          </List>
        </Container>
      )}
    </Container>
  )
}
