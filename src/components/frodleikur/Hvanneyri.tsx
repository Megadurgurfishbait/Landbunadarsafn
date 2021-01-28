import { useQuery } from 'react-query'
import { getText } from '../../lib/api/frodleikurFetch'
import React from 'react'
import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Box,
  Container,
} from '@chakra-ui/react'
import { Text } from '../Shared'

export const Hvanneyri: React.FC<{}> = () => {
  const { isLoading, data } = useQuery('Hvanneyri', () => getText('Hvanneyris'))
  return (
    <Container>
      <Accordion allowMultiple>
        {isLoading ? (
          <div>loading</div>
        ) : (
          <>
            <Text Variant="h1" text="Hvanneyri" />
            {data.map((v) => (
              <AccordionItem>
                <AccordionButton>
                  <Box
                    flex="1"
                    textAlign="left"
                    as="h2"
                    className="text-xl p-1"
                  >
                    {v.title}
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
                <AccordionPanel
                  pb={4}
                  className="whitespace-pre-wrap text-sm p-3 "
                >
                  {v.Text}
                </AccordionPanel>
              </AccordionItem>
            ))}
          </>
        )}
      </Accordion>
    </Container>
  )
}
