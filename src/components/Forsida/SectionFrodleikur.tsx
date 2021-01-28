import { Box, Flex, Text } from '@chakra-ui/react'
import { Routes } from '../../Routes'
import { Button } from '../Shared'

const Kalli = [
  {
    label: 'Ársskýrslur',
    location: Routes.Arsskyrslur,
  },
  {
    label: 'Um Safnið',
    location: Routes.UmSafnid,
  },
  {
    label: 'Stuttmyndir',
    location: Routes.Stuttmyndir,
  },
  {
    label: 'Hvanneyri',
    location: Routes.Hvanneyri,
  },
  {
    label: 'Velunnarar',
    location: Routes.Velunnarar,
  },
  {
    label: 'Mjólkurskólinn',
    location: Routes.Mjolkurskolinn,
  },
]
export const SectionFrodleikur = () => (
  <Flex
    h={700}
    w="100%"
    className="min-w-full justify-between flex-col overflow-visible relative mt-20"
  >
    <svg
      width="1723"
      height="164"
      style={{
        minHeight: '164px',
        zIndex: 500,
      }}
      viewBox="0 0 1723 164"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="absolute "
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M0 128.383C0 128.383 102.768 85.254 181.324 70.7107C259.88 56.1674 312.467 43.2229 454.117 44.1315C597.198 41.4058 652.659 63.8265 795.243 90.4019C937.828 116.977 1085.34 172.144 1245.59 162.986C1405.84 153.827 1626.5 72.5 1660.5 65C1694.5 57.5 1722.5 54.5 1722.5 54.5L1722.69 0H1645.43C1573.89 0 1430.81 0 1287.73 0C1144.65 0 1001.57 0 858.486 0C715.405 0 572.324 0 429.243 0C286.162 0 143.081 0 71.5405 0H0V128.383Z"
        fill="#FFF"
      />
    </svg>
    <Flex className="min-h-full">
      <Box
        justifyContent="center"
        alignItems="center"
        bg="transparent"
        background="linear-gradient(135deg, rgba(143,2,34,1) 60%, rgba(173,126,137,1) 100%);"
        className="hidden sm:flex sm:w-3/5 md:w-2/3"
      >
        <Flex
          width="inherit"
          height="100%"
          className=" opacity-50 absolute bg-cover"
          bgImage="url(/tractor.jpg)"
          bgRepeat="no-repeat"
          bgPosition="bottom"
        ></Flex>

        <Text
          letterSpacing={5}
          as="h1"
          className="center text-white p-8 text-6xl font-bold absolute"
        >
          Fróðleikur
        </Text>
      </Box>
      <Flex
        bgColor="#A83852"
        className="w-full sm:w-2/5  md:w-1/3 flex-col items-center justify-center text-white sm:max-h-full text-left "
      >
        <Text
          letterSpacing={5}
          as="h1"
          className="center text-white py-0 p-8 text-2xl font-bold sm:hidden"
        >
          Fróðleikur
        </Text>
        <Flex className="flex-col">
          {Kalli.map((v) => (
            <Button noArrow Text={v.label} href={v.location} />
          ))}
        </Flex>
      </Flex>
    </Flex>

    <svg
      width="1713"
      height="161"
      className="absolute"
      style={{ minHeight: '164px', bottom: '-4px' }}
      viewBox="0 0 1713 161"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M0 124.948L71.375 106.922C142.75 88.8956 285.5 6.37041 428.25 0.36171C571 -5.64699 713.75 64.8608 856.5 88.8956C999.25 112.93 1142 136.965 1284.75 130.957C1427.5 124.948 1570.25 88.8956 1641.62 70.8695L1713 52.8434V161H1641.62C1570.25 161 1427.5 161 1284.75 161C1142 161 999.25 161 856.5 161C713.75 161 571 161 428.25 161C285.5 161 142.75 161 71.375 161H0V124.948Z"
        fill="#FFF"
      />
    </svg>
  </Flex>
)
