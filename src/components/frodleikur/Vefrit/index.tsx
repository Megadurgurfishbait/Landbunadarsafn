import {
  Accordion,
  AccordionItem,
  AccordionButton,
  Box,
  AccordionIcon,
  AccordionPanel,
  Container,
  Text,
  Divider,
} from '@chakra-ui/react'
import React from 'react'
import { VefritComponent } from './Vefrit'
import { useQuery } from 'react-query'
import { getText } from '../../../lib/api/frodleikurFetch'

export const Vefrit: React.FC<{}> = () => {
  const { isSuccess, data } = useQuery('vefrit', () => getText('vefrit'))
  console.log(data)
  return (
    <>
      {isSuccess && (
        <Container>
          <Text as="h1" className="text-xl text-center">
            {data.Titill}
          </Text>
          <Divider h={50} />
          <Text as="p" className="whitespace-pre-wrap text-sm">
            {data.Kynning_A_Vefritum}
          </Text>
          <Divider h={50} />

          <Accordion allowMultiple>
            <AccordionItem>
              <AccordionButton>
                <Box flex="1" textAlign="left" as="h2" className="text-xl p-1">
                  Vefrit - A
                </Box>
                <AccordionIcon />
              </AccordionButton>
              <AccordionPanel
                pb={4}
                className="whitespace-pre-wrap text-sm p-3 "
              >
                <VefritComponent
                  kynningarTexti={data.Kynningar_Texti_Fyrir_Vefrit_A}
                  kynningarEfni={data.Skjol_Fyrir_Vefrit_A}
                />
              </AccordionPanel>
            </AccordionItem>
            <AccordionItem>
              <AccordionButton>
                <Box flex="1" textAlign="left" as="h2" className="text-xl p-1">
                  Vefrit - B
                </Box>
                <AccordionIcon />
              </AccordionButton>
              <AccordionPanel
                pb={4}
                className="whitespace-pre-wrap text-sm p-3 "
              >
                <VefritComponent
                  kynningarTexti={data.Kynningar_Texti_Fyrir_Vefrit_B}
                  kynningarEfni={data.Skjol_Fyrir_Vefrit_B}
                />
              </AccordionPanel>
            </AccordionItem>
          </Accordion>
        </Container>
      )}
    </>
  )
}
