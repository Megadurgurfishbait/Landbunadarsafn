import * as React from 'react'
import { useQuery } from 'react-query'
import { Container, Text } from '@chakra-ui/react'
import {
  IconClock,
  IconCreditCard,
  IconInfoCircle,
  IconPhone,
  IconLocation,
} from './Icons'
import { getText } from '../../../lib/api/frodleikurFetch'

interface IinfoDetails {
  name: string
  Icon: React.FC<{}>
  text: string
}

export const Information: React.FunctionComponent<{}> = () => {
  const { isLoading, data } = useQuery('Info', () =>
    getText('forsidu-upplysingar')
  )

  if (isLoading) return <div>hleður</div>

  let { Upplysingar } = data
  return (
    <Container
      as="section"
      id="upplysingar"
      className="flex justify-center lg:w-11/12"
    >
      <div className="py-4 flex justify-center flex-wrap lg:w-full lg:justify-start xl:w-9/12 ">
        {
          /* Opnunartími  */
          Upplysingar[0] && (
            <InfoDetailsContainer
              name={Upplysingar[0].Titill}
              Icon={IconClock}
              text={Upplysingar[0].Texti}
            />
          )
        }
        {
          /* Hafa Samband  */
          Upplysingar[1] && (
            <InfoDetailsContainer
              name={Upplysingar[1].Titill}
              Icon={IconPhone}
              text={Upplysingar[1].Texti}
            />
          )
        }
        {
          /* Aðgangseyrir  */

          Upplysingar[2] && (
            <InfoDetailsContainer
              name={Upplysingar[2].Titill}
              Icon={IconCreditCard}
              text={Upplysingar[2].Texti}
            />
          )
        }
        {
          /* Kynningar  */

          Upplysingar[3] && (
            <InfoDetailsContainer
              name={Upplysingar[3].Titill}
              Icon={IconInfoCircle}
              text={Upplysingar[3].Texti}
            />
          )
        }
        {
          /* Staðsetningar  */
          Upplysingar[4] && (
            <InfoDetailsContainer
              name={Upplysingar[4].Titill}
              Icon={IconLocation}
              text={Upplysingar[4].Texti}
            />
          )
        }
      </div>
    </Container>
  )
}

export const InfoDetailsContainer: React.FC<IinfoDetails> = ({
  Icon,
  name,
  text,
}) => (
  <div className="w-10/12 m-2 my-4 lg:w-5/12 lg:mx-4 flex">
    <div className="p-3 flex">
      <Icon />
    </div>
    <div className="flex flex-col">
      <Text as="h1" className="font-bold opacity-80">
        {name}
      </Text>
      <Text as="p" className="opacity-60 whitespace-pre-wrap">
        {text}
      </Text>
    </div>
  </div>
)
