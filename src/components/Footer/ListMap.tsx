import { Flex, List, ListItem } from '@chakra-ui/react'
import Link from 'next/link'

export interface listToMap {
  title: string
  href?: string
}

interface ListMapProps {
  listToMap: listToMap[]
  title: string
}

export const ListMap: React.FC<ListMapProps> = ({ listToMap, title }) => (
  <Flex className="flex-1 flex-col py-4 h-48 items-center ">
    <Flex className="flex-col">
      <h2 className="text-sm sm:text-base text-left font-semibold text-white">
        {title}
      </h2>
      <List className="list-none flex flex-col ">
        {listToMap.map(({ title, href }) => (
          <>
            {href ? (
              <ListItem className="leading-4 ">
                <Link href={href}>
                  <a className="text-xs text-white sm:text-sm text-opacity-80">
                    {title}
                  </a>
                </Link>
              </ListItem>
            ) : (
              <ListItem className="text-xs text-white sm:text-sm text-opacity-80">
                {title}
              </ListItem>
            )}
          </>
        ))}
      </List>
    </Flex>
  </Flex>
)
