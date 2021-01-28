import { Container } from '@chakra-ui/react'
import Image from 'next/image'
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
      <div className="flex flex-col w-full">
        <div className="flex-1 p-8 flex justify-end">
          <Container height="100px" width="100px">
            <Image
              layout="fixed"
              height={100}
              width={100}
              dns-prefetch="true"
              src={icon}
              alt="mynd"
            />
          </Container>
        </div>
        <div className="flex-1 flex justify-start">
          <WelcomeText Title={Title} SubTitle={subTitle} />
        </div>
      </div>
    </Container>
  </Background>
)
