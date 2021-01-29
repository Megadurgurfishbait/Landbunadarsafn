import { ExternalLinkIcon } from '@chakra-ui/icons'
import { List, ListItem, Text } from '@chakra-ui/react'
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
  <div className=" flex flex-1 flex-col py-4 h-48 items-center ">
    <div className="flex flex-col">
      <h2 className="text-sm sm:text-base text-left font-semibold text-white">
        {title}
      </h2>
      <List className="list-none flex flex-col ">
        {listToMap.map(({ title, href }) => (
          <>
            {href ? (
              <ListItem className="leading-4 ">
                <Link href={href} prefetch={false}>
                  <a className="text-xs text-white sm:text-sm text-opacity-80">
                    {title}
                  </a>
                </Link>

                {title === 'Halldórsfjós' && (
                  <ExternalLinkIcon className="ml-1" color="white" w={13} />
                )}
              </ListItem>
            ) : (
              <ListItem className="leading-4 overflow-ellipsis">
                <Text className="text-xs text-white sm:text-sm text-opacity-80 ">
                  {title}
                </Text>
              </ListItem>
            )}
          </>
        ))}
      </List>
    </div>
  </div>
)
