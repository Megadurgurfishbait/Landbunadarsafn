import { Container, List, Text, ListItem } from '@chakra-ui/react'

export interface IVefritObject {
  titill: string
  Hofundur: string
  pdfskjal: { url: string }
  Dagsetning: string
}

const IconLicense = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="text-stylishBlack opacity-90 text-center"
    width="30"
    height="30"
    viewBox="0 0 24 24"
    stroke-width="1.5"
    stroke="#2c3e50"
    fill="none"
    stroke-linecap="round"
    stroke-linejoin="round"
  >
    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
    <path d="M15 21h-9a3 3 0 0 1 -3 -3v-1h10v2a2 2 0 0 0 4 0v-14a2 2 0 1 1 2 2h-2m2 -4h-11a3 3 0 0 0 -3 3v11" />
    <line x1="9" y1="7" x2="13" y2="7" />
    <line x1="9" y1="11" x2="13" y2="11" />
  </svg>
)

export const VefritComponent: React.FC<{ kynningarEfni: IVefritObject[] }> = ({
  kynningarEfni,
}) => (
  <List className="flex flex-col">
    {kynningarEfni.map(({ Hofundur, Dagsetning, titill, pdfskjal }) => (
      <ListItem className="flex items-center  sm:px-10">
        <div className="flex-1 flex flex-col items-start">
          <Text className="italic">{titill}</Text>
          <Text className="font-semibold">{Hofundur}</Text>
          <Text>{Dagsetning}</Text>
        </div>
        {pdfskjal?.url && (
          <Container as="a" href={pdfskjal.url} height="100%" className="p-5">
            <IconLicense />
          </Container>
        )}
      </ListItem>
    ))}
  </List>
)
