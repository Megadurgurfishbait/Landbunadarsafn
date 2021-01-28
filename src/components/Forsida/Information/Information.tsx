import * as React from 'react'
import {
  IconClock,
  IconPhone,
  IconCreditCard,
  IconInfoCircle,
  TablerIconProps,
} from 'tabler-icons'
import { Container, Flex, Text } from '@chakra-ui/react'

interface IinfoDetails {
  name: string
  Icon: React.FC<TablerIconProps>
  text: string
}

const InfoDetails = [
  {
    name: 'Opnunartími',
    Icon: IconClock,
    text:
      'Í vetur var safnið opið fimmtudaga, föstudaga og laugardaga á sama tíma og Ullarselið, sem er í anddyri safnsins. Landbúnaðarsafn Íslands er opið reglulega mánuðina júní, júlí og ágúst, daglega kl. 11-17. Á öðrum tímum er safnið opið eftir þörfum.',
  },
  {
    name: 'Hafa Samband',
    Icon: IconPhone,
    text:
      'Vinsamlegast hafið samband í síma 844 7740, einnig má hafa samband við skiptiborð Landbúnaðarháskólans, í síma 433 5000. Hópum er veitt leiðsögn um safnið, sé þess óskað.',
  },
  {
    name: 'Aðgangseyrir',
    Icon: IconCreditCard,
    text:
      'Almennur aðgangseyrir að safninu er: 1.400 kr. fyrir fullorðna (og í hópum sem sérstök leiðsögn er veitt); 1100 kr. fyrir öryrkja og eldri borgara ókeypis er fyrir 14 ára og yngri í fylgd fullorðinna.',
  },

  {
    name: 'Kynningar',
    Icon: IconInfoCircle,
    text:
      'Einnig er boðið upp á stutta kynningu á Hvanneyrarstað og starfinu þar m.a. með heimsókn í Hvanneyrarkirkju, eina fallegustu kirkju landsins og örstuttri gönguferð um Gamla skólastaðinn (þegar veður leyfir). Æskilegt er að panta slíka kynningu með fyrirvara (s. 844 77 40). Minnt er á Skemmuna kaffihús í næsta nágrenni safnsins, sem er opið daglega í sumar frá kl. 13.30.',
  },
  {
    name: 'Staðsetning',
    Icon: IconInfoCircle,
    text: 'Halldórsfjós \nHvanneyri, 311 Borgarnes',
  },
] as IinfoDetails[]

export const Information: React.FunctionComponent<{}> = () => {
  return (
    <Container className="flex justify-center">
      <Flex className="py-4 justify-center flex-wrap lg:w-full lg:justify-start xl:w-9/12 ">
        {InfoDetails.map(({ text, name, Icon }) => (
          <Flex className="w-8/12 m-2 my-4 lg:w-5/12 lg:mx-4 ">
            <Flex className="p-3">
              <Icon size={30} className="opacity-70" />
            </Flex>
            <Flex flexDir="column">
              <Text as="h1" className="font-bold opacity-80">
                {name}
              </Text>
              <Text as="p" className="opacity-60 whitespace-pre-wrap">
                {text}
              </Text>
            </Flex>
          </Flex>
        ))}
      </Flex>
    </Container>
  )
}
