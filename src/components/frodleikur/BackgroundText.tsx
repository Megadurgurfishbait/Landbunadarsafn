import { Flex } from '@chakra-ui/react'

export const BackgroundText: React.FC<{}> = ({ children }) => (
  <Flex className="min-w-full justify-center items-center h-20 md:h-40 bg-secondary  ">
    {children}
  </Flex>
)
