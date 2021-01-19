import { Container, Flex } from '@chakra-ui/react'

import { WelcomeText, Background } from './'

export const SectionHeroImage: React.FC<{
  forsidumynd: string
  icon: string
  Title: string
  subTitle: string
}> = ({ forsidumynd, icon, Title, subTitle }) => (
  <Background mynd={forsidumynd}>
    <Container
      as="section"
      className="flex min-h-full"
      width="100%"
      marginRight="60px"
    >
      <Flex width="100%" flexDir="column">
        <Flex justifyContent="flex-end" className="flex-1 p-8 ">
          <Container height="100px" width="100px">
            <img src={icon} alt="mynd" />
          </Container>
        </Flex>
        <Flex justifyContent="flex-start" className="flex-1 ">
          <WelcomeText Title={Title} SubTitle={subTitle} />
        </Flex>
      </Flex>
    </Container>
  </Background>
)
