import styled from '@emotion/styled'
import { Flex, Text } from '@chakra-ui/react'

export const WelcomeText = ({ Title, SubTitle }) => (
  <Flex
    className=" pb-4 mx-12 my-8"
    justifyContent="flex-end"
    flexDir="column"
    fontFamily="Roboto"
  >
    <Text
      as="h1"
      letterSpacing={[-1, -5]}
      className="text-4xl  md:text-7xl font-thin text-mainColor "
    >
      {Title}
    </Text>
    <Divider className="opacity-60 my-3 min-w-3/4 self-start rounded"></Divider>
    <Text
      as="h3"
      textAlign="left"
      color="#E4DFCF"
      noOfLines={3}
      className="text-base md:text-2xl self-start uppercase"
    >
      {SubTitle}
    </Text>
  </Flex>
)

const Divider = styled.div`
  border: 1px solid #e4dfcf;
`
