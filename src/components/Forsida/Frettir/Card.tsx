import { Box, Text, Container } from '@chakra-ui/react'
import styled from '@emotion/styled'
import { Button } from '../../Shared/'

export interface IFrett {
  Title: string
  TextExample: string
  ButtonHref: string
}

export const CardContainer: React.FC<IFrett> = ({
  Title,
  TextExample,
  ButtonHref,
}) => (
  <Container className="w-64 h-64 relative m-5">
    <Box
      zIndex={3}
      className="h-full w-full p-5 flex shadow-lg rounded absolute flex-col bg-white"
    >
      <Box className="h-8">
        <Text noOfLines={2} fontFamily="Roboto" className="">
          {Title}
        </Text>
      </Box>
      <div className="flex-1 items-center flex">
        <Text noOfLines={4} className="text-sm leading-5 font-sans font-light">
          {TextExample}
        </Text>
      </div>
      <Box className="h-8">
        <Button href={`/frettir/${ButtonHref}`} Text={'Skoða frétt'} />
      </Box>
    </Box>
    <Try />
  </Container>
)

export const CardMapper: React.FC<{ Frettir: IFrett[] }> = ({ Frettir }) => (
  <Box
    width="100%"
    className="flex-wrap flex-col items-center flex-1 justify-evenly my-20 sm:flex-row w-full flex"
    zIndex="18"
  >
    {Frettir.map((frett) => (
      <CardContainer
        Title={frett.Title}
        TextExample={frett.TextExample}
        ButtonHref={frett.ButtonHref}
      />
    ))}
  </Box>
)

const Try = styled.div`
  /*Free Dot Matrix SVG provided by SVGeez.com - CC 4.0 License - © 2019 Megan Young */
  width: 100%;
  position: absolute;
  top: 0%;
  transform: translateY(15px) translateX(15px);
  z-index: 1;
  height: 100%;
  background-color: transparent;
  fill: rgb(217, 33, 33);
  background-size: 40px;
  background-repeat: repeat;
  background-image: url("data:image/svg+xml;charset=utf8,%3Csvg id='Layer_1' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 500 500' fill-opacity='.7' style='enable-background:new 0 0 500 500'%3E%3Cstyle%3E .st0{fill:rgb(217, 33, 33)} %3C/style%3E%3Ccircle class='st0' cy='336.6' r='12.7'/%3E%3Ccircle class='st0' cx='83.3' cy='336.6' r='12.7'/%3E%3Ccircle class='st0' cx='166.7' cy='336.6' r='12.7'/%3E%3Ccircle class='st0' cx='250' cy='336.6' r='12.7'/%3E%3Ccircle class='st0' cx='333.3' cy='336.6' r='12.7'/%3E%3Ccircle class='st0' cx='416.7' cy='336.6' r='12.7'/%3E%3Ccircle class='st0' cx='500' cy='336.6' r='12.7'/%3E%3Cg%3E%3Ccircle class='st0' cy='.7' r='12.7'/%3E%3Ccircle class='st0' cx='83.3' cy='.7' r='12.7'/%3E%3Ccircle class='st0' cx='166.7' cy='.7' r='12.7'/%3E%3Ccircle class='st0' cx='250' cy='.7' r='12.7'/%3E%3Ccircle class='st0' cx='333.3' cy='.7' r='12.7'/%3E%3Ccircle class='st0' cx='416.7' cy='.7' r='12.7'/%3E%3Ccircle class='st0' cx='500' cy='.7' r='12.7'/%3E%3C/g%3E%3Cg%3E%3Ccircle class='st0' cy='419.5' r='12.7'/%3E%3Ccircle class='st0' cx='83.3' cy='419.5' r='12.7'/%3E%3Ccircle class='st0' cx='166.7' cy='419.5' r='12.7'/%3E%3Ccircle class='st0' cx='250' cy='419.5' r='12.7'/%3E%3Ccircle class='st0' cx='333.3' cy='419.5' r='12.7'/%3E%3Ccircle class='st0' cx='416.7' cy='419.5' r='12.7'/%3E%3Ccircle class='st0' cx='500' cy='419.5' r='12.7'/%3E%3C/g%3E%3Cg%3E%3Ccircle class='st0' cy='500.7' r='12.7'/%3E%3Ccircle class='st0' cx='83.3' cy='500.7' r='12.7'/%3E%3Ccircle class='st0' cx='166.7' cy='500.7' r='12.7'/%3E%3Ccircle class='st0' cx='250' cy='500.7' r='12.7'/%3E%3Ccircle class='st0' cx='333.3' cy='500.7' r='12.7'/%3E%3Ccircle class='st0' cx='416.7' cy='500.7' r='12.7'/%3E%3Ccircle class='st0' cx='500' cy='500.7' r='12.7'/%3E%3C/g%3E%3Cg%3E%3Ccircle class='st0' cy='170.9' r='12.7'/%3E%3Ccircle class='st0' cx='83.3' cy='170.9' r='12.7'/%3E%3Ccircle class='st0' cx='166.7' cy='170.9' r='12.7'/%3E%3Ccircle class='st0' cx='250' cy='170.9' r='12.7'/%3E%3Ccircle class='st0' cx='333.3' cy='170.9' r='12.7'/%3E%3Ccircle class='st0' cx='416.7' cy='170.9' r='12.7'/%3E%3Ccircle class='st0' cx='500' cy='170.9' r='12.7'/%3E%3C/g%3E%3Cg%3E%3Ccircle class='st0' cy='253.8' r='12.7'/%3E%3Ccircle class='st0' cx='83.3' cy='253.8' r='12.7'/%3E%3Ccircle class='st0' cx='166.7' cy='253.8' r='12.7'/%3E%3Ccircle class='st0' cx='250' cy='253.8' r='12.7'/%3E%3Ccircle class='st0' cx='333.3' cy='253.8' r='12.7'/%3E%3Ccircle class='st0' cx='416.7' cy='253.8' r='12.7'/%3E%3Ccircle class='st0' cx='500' cy='253.8' r='12.7'/%3E%3C/g%3E%3Cg%3E%3Ccircle class='st0' cy='88' r='12.7'/%3E%3Ccircle class='st0' cx='83.3' cy='88' r='12.7'/%3E%3Ccircle class='st0' cx='166.7' cy='88' r='12.7'/%3E%3Ccircle class='st0' cx='250' cy='88' r='12.7'/%3E%3Ccircle class='st0' cx='333.3' cy='88' r='12.7'/%3E%3Ccircle class='st0' cx='416.7' cy='88' r='12.7'/%3E%3Ccircle class='st0' cx='500' cy='88' r='12.7'/%3E%3C/g%3E%3C/svg%3E");
`
