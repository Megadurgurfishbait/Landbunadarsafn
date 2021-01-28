import { Container, Flex, List, Text, ListItem } from '@chakra-ui/react'
import { IconLicense } from 'tabler-icons'

export interface IVefritObject {
  titill: string
  Hofundur: string
  pdfskjal: { url: string }
  Dagsetning: string
}

export const VefritComponent: React.FC<{ kynningarEfni: IVefritObject[] }> = ({
  kynningarEfni,
}) => (
  <List className="flex flex-col">
    {kynningarEfni.map(({ Hofundur, Dagsetning, titill, pdfskjal }) => (
      <ListItem className="flex items-center  sm:px-10">
        <Flex className="flex-1 flex-col items-start">
          <Text className="italic">{titill}</Text>
          <Text className="font-semibold">{Hofundur}</Text>
          <Text>{Dagsetning}</Text>
        </Flex>
        {pdfskjal?.url && (
          <Container as="a" href={pdfskjal.url} height="100%" className="p-5">
            <IconLicense
              size={30}
              className="text-stylishBlack opacity-90 text-center"
            />
          </Container>
        )}
      </ListItem>
    ))}
  </List>
)