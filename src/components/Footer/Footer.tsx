import { Flex, Text } from '@chakra-ui/react'
import { ListMap, listToMap } from './ListMap'

const Leidarvisir = [
  { title: 'Heim', href: '/' },
  { title: 'Fróðleikur', href: '/frodleikur' },
  { title: 'Allar Fréttir', href: '/frettir' },
  { title: 'English', href: '/english' },
] as listToMap[]

const Frodleikur = [
  { title: 'Ársskýrslur', href: '/frodleikur/arsskyrslur' },
  { title: 'Um safnið', href: '/frodleikur/umsafnid' },
  { title: 'Stuttmyndir', href: '/frodleikur/stuttmyndir' },
  { title: 'Hvanneyri', href: '/frodleikur/hvanneyri' },
  { title: 'Velunnarar', href: '/frodleikur/Velunnarar' },
  { title: 'Mjólkurskólinn', href: '/frodleikur/mjolkurskolinn' },
] as listToMap[]

const Stadsetning = [
  {
    title: 'Halldórsfjós',
    href:
      'https://www.google.com/maps/place/Hvanneyri/@64.5641466,-21.764195,16z/data=!4m5!3m4!1s0x48d5ceb4cd36053b:0xb004d859393c9017!8m2!3d64.5631151!4d-21.7563315',
  },
  {
    title: 'Hvanneyri',
  },
  {
    title: '311 Borgarnes',
  },
] as listToMap[]

const Tengilidur = [
  { title: 'Ragnhildur Helga Jónsdóttir' },
  { title: 'ragnhildurhj@lbhi.is' },
  { title: '+354 844 7740' },
] as listToMap[]

export const Footer: React.FC<{}> = () => (
  <Flex alignSelf="flex-end" flexDir="column" className="min-w-full">
    <Flex
      align="center"
      justify="space-around"
      className="min-w-full bg-secondary"
    >
      <ListMap listToMap={Frodleikur} title="Fróðleikur" />
      <ListMap listToMap={Leidarvisir} title="Leiðarvísir" />
      <Flex className="hidden lg:flex-1">
        <img
          src="/Lbs_logo_trans_hvitt.gif"
          alt="logo"
          className="hidden lg:flex-1 lg:flex-col lg:h-48 lg:my-8 lg:items-center lg:object-scale-down lg:flex"
        />
      </Flex>
      <ListMap listToMap={Stadsetning} title="Staðsetning" />
      <ListMap listToMap={Tengilidur} title="Tengiliður" />
    </Flex>
    <Flex
      justify="center"
      align="center"
      width="100%"
      className=" text-mainColor px-24"
      bgColor="#80011E"
    >
      <Text opacity={0.7} as="h5" letterSpacing={-0.5} className="text-sm">
        Landbúnaðarsafn Íslands
      </Text>
    </Flex>
  </Flex>
)
